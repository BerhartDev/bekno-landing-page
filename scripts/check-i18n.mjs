// Checks that en.json, es.json and fr.json have exactly the same keys as pt.json.
// Nested objects are compared recursively; arrays count as a single value.
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const localesDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'locales');
const reference = 'pt.json';
const targets = ['en.json', 'es.json', 'fr.json'];

const isObject = (value) => value !== null && typeof value === 'object' && !Array.isArray(value);

function collectKeys(value, prefix = '', keys = new Set()) {
  for (const [key, child] of Object.entries(value)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (isObject(child)) collectKeys(child, path, keys);
    else keys.add(path);
  }
  return keys;
}

const load = (file) => JSON.parse(readFileSync(join(localesDir, file), 'utf8'));

const referenceKeys = collectKeys(load(reference));
let failed = false;

for (const file of targets) {
  const keys = collectKeys(load(file));
  const missing = [...referenceKeys].filter((key) => !keys.has(key));
  const extra = [...keys].filter((key) => !referenceKeys.has(key));

  if (missing.length === 0 && extra.length === 0) {
    console.log(`✓ ${file}: ${keys.size} chaves, igual a ${reference}`);
    continue;
  }

  failed = true;
  console.error(`✗ ${file}`);
  for (const key of missing) console.error(`  faltando: ${key}`);
  for (const key of extra) console.error(`  sobrando: ${key}`);
}

if (failed) process.exit(1);
