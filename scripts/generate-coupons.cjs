// Generates 210 unique EDU-prefixed promo codes (EDU + 5 random chars).
// Run: node scripts/generate-coupons.cjs

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
const TOTAL = 210;
const SUFFIX_LEN = 2;

function randomSuffix(len) {
  const bytes = crypto.randomBytes(len);
  let out = '';
  for (let i = 0; i < len; i++) out += ALPHABET[bytes[i] % ALPHABET.length];
  return out;
}

const seen = new Set();
while (seen.size < TOTAL) seen.add('EDU' + randomSuffix(SUFFIX_LEN));

const codes = [...seen];
fs.writeFileSync(path.join(__dirname, '..', 'coupons.txt'), codes.join('\n') + '\n', 'utf8');
fs.writeFileSync(path.join(__dirname, '..', 'coupons.json'), JSON.stringify(codes, null, 2) + '\n', 'utf8');
console.log(`Wrote ${codes.length} codes`);
