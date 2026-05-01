// Fetches recent Firestore ruleset versions for the active Firebase project,
// using the firebase-tools refresh token already stored on this machine.
// Writes the previous (overwritten) ruleset source to ./_recovered_rules/.
//
// Usage: node scripts/fetch-prev-rules.cjs <projectId>

const fs = require('fs');
const os = require('os');
const path = require('path');
const https = require('https');

const PROJECT = process.argv[2] || 'eduintellect-7e709';

// Public firebase-tools OAuth client (from open-source repo). These are
// distributed with every firebase-tools install — not a secret.
const CLIENT_ID = '563584335869-fgrhgmd47bqnekij5i8b5pr03ho849e6.apps.googleusercontent.com';
const CLIENT_SECRET = 'j9iVZfS8kkCEFUPaAeJV0sAi';

const cfgPath = path.join(os.homedir(), '.config', 'configstore', 'firebase-tools.json');
const cfg = JSON.parse(fs.readFileSync(cfgPath, 'utf8'));
const refreshToken = cfg.tokens && cfg.tokens.refresh_token;
if (!refreshToken) {
  console.error('No refresh_token in firebase-tools config. Run `firebase login` first.');
  process.exit(1);
}

function postForm(host, urlPath, params) {
  return new Promise((resolve, reject) => {
    const body = new URLSearchParams(params).toString();
    const req = https.request(
      {
        method: 'POST',
        host,
        path: urlPath,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(body),
        },
      },
      (res) => {
        let data = '';
        res.on('data', (c) => (data += c));
        res.on('end', () => {
          if (res.statusCode >= 400) return reject(new Error(`${res.statusCode}: ${data}`));
          resolve(JSON.parse(data));
        });
      },
    );
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

function getJson(host, urlPath, token) {
  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        method: 'GET',
        host,
        path: urlPath,
        headers: { Authorization: `Bearer ${token}` },
      },
      (res) => {
        let data = '';
        res.on('data', (c) => (data += c));
        res.on('end', () => {
          if (res.statusCode >= 400) return reject(new Error(`${res.statusCode}: ${data}`));
          resolve(JSON.parse(data));
        });
      },
    );
    req.on('error', reject);
    req.end();
  });
}

(async () => {
  console.log(`[1/4] Exchanging refresh token for access token…`);
  const tokenRes = await postForm('oauth2.googleapis.com', '/token', {
    refresh_token: refreshToken,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    grant_type: 'refresh_token',
  });
  const accessToken = tokenRes.access_token;

  console.log(`[2/4] Listing rulesets for project '${PROJECT}'…`);
  const list = await getJson(
    'firebaserules.googleapis.com',
    `/v1/projects/${PROJECT}/rulesets?pageSize=20`,
    accessToken,
  );
  const rulesets = list.rulesets || [];
  console.log(`     Found ${rulesets.length} ruleset(s).`);
  rulesets.forEach((r, i) => {
    console.log(`     [${i}] ${r.name.split('/').pop()}  createTime=${r.createTime}`);
  });

  if (rulesets.length === 0) {
    console.error('No rulesets found.');
    process.exit(1);
  }

  console.log(`[3/4] Listing releases (so we know which was active for cloud.firestore)…`);
  const releases = await getJson(
    'firebaserules.googleapis.com',
    `/v1/projects/${PROJECT}/releases?pageSize=50`,
    accessToken,
  );
  const firestoreReleases = (releases.releases || []).filter((r) =>
    r.name.endsWith('/cloud.firestore'),
  );
  firestoreReleases.forEach((r) => {
    console.log(`     release ${r.name.split('/').slice(-1)[0]} -> ruleset ${r.rulesetName.split('/').pop()}  updateTime=${r.updateTime}`);
  });

  const outDir = path.resolve(process.cwd(), '_recovered_rules');
  fs.mkdirSync(outDir, { recursive: true });

  console.log(`[4/4] Downloading source for the 5 most recent rulesets to ${outDir}/…`);
  const recent = rulesets.slice(0, 5);
  for (const r of recent) {
    const id = r.name.split('/').pop();
    const detail = await getJson('firebaserules.googleapis.com', `/v1/${r.name}`, accessToken);
    const files = detail.source && detail.source.files ? detail.source.files : [];
    for (const f of files) {
      const safe = `${id}__${(f.name || 'rules').replace(/[^a-zA-Z0-9._-]/g, '_')}`;
      fs.writeFileSync(path.join(outDir, safe), f.content || '');
      console.log(`     wrote ${safe} (${(f.content || '').length} chars)`);
    }
  }

  console.log('Done.');
})().catch((e) => {
  console.error('FAILED:', e.message);
  process.exit(1);
});
