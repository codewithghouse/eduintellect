// Generates 200 unique Edullent coupon codes across 6 tiers.
// Run: node scripts/generate-coupons.cjs

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

// Unambiguous alphabet — drops 0/O, 1/I/L, vowels that form real words.
const ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';

const tiers = [
  { prefix: 'EDU-FOUNDER',  count: 20, discountPercent: 100, label: 'Founder — 100% off first year' },
  { prefix: 'EDU-EARLY',    count: 40, discountPercent: 50,  label: 'Early bird — 50% off' },
  { prefix: 'EDU-LAUNCH',   count: 50, discountPercent: 30,  label: 'Launch promo — 30% off' },
  { prefix: 'EDU-BETA',     count: 30, discountPercent: 60,  label: 'Beta tester — 60% off' },
  { prefix: 'EDU-SCHOOL',   count: 30, discountPercent: 40,  label: 'School pack — 40% off' },
  { prefix: 'EDU-REFER',    count: 30, discountPercent: 20,  label: 'Referral — 20% off' },
];

function randomSuffix(len = 4) {
  const bytes = crypto.randomBytes(len);
  let out = '';
  for (let i = 0; i < len; i++) out += ALPHABET[bytes[i] % ALPHABET.length];
  return out;
}

const seen = new Set();
const coupons = [];

for (const tier of tiers) {
  let added = 0;
  while (added < tier.count) {
    const code = `${tier.prefix}-${randomSuffix(4)}`;
    if (seen.has(code)) continue;
    seen.add(code);
    coupons.push({
      code,
      tier: tier.prefix.replace('EDU-', '').toLowerCase(),
      discountPercent: tier.discountPercent,
      label: tier.label,
      maxRedemptions: 1,
      redeemed: 0,
      active: true,
    });
    added++;
  }
}

const outPath = path.join(__dirname, '..', 'coupons.json');
fs.writeFileSync(outPath, JSON.stringify(coupons, null, 2) + '\n', 'utf8');
console.log(`Wrote ${coupons.length} coupons → ${outPath}`);
