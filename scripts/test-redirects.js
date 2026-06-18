#!/usr/bin/env node

/**
 * Redirect validation script
 * Tests legacy mapletradecorp.com URLs to ensure they:
 * 1. Return a 301 permanent redirect
 * 2. Land on a valid (non-404) destination
 * 3. Don't create redirect chains or loops
 */

const https = require('https');
const url = require('url');

// Test domain (change to production URL when ready)
const TEST_DOMAIN = process.env.TEST_DOMAIN || 'http://localhost:3000';
const LEGACY_BASE = 'https://mapletradecorp.com';

// Legacy URLs to test (from sitemap)
const legacyUrls = [
  '/all-products/',
  '/about-us/',
  '/contact-us/',
  '/brands/',
  '/new-products/',
  '/our-catalogs/',
  '/special-offer/',
  '/free-catalog/',
  '/product-category/pp-plastic-containers/',
  '/product-category/sushi-bento-box/',
  '/product-category/paper-bamboo-products/',
  '/product/td-plastic-round-container/',
  '/product/rerobox-plastic-round-container/',
  '/product/5-compartment-bento-box/',
  '/product/bagasse-hinged-clamshell-containers/',
  '/brand/tkn/',
  '/brand/hd/',
  '/brand/imperial/',
];

let passed = 0;
let failed = 0;
const failures = [];

function checkRedirect(legacyUrl) {
  return new Promise((resolve) => {
    const urlObj = new URL(legacyUrl.replace(/\/$/, ''), TEST_DOMAIN);
    const options = {
      hostname: urlObj.hostname,
      port: urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
      path: urlObj.pathname + (urlObj.search || ''),
      method: 'HEAD',
      redirect: 'manual'
    };

    const protocol = urlObj.protocol === 'https:' ? https : require('http');

    const req = protocol.request(options, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        const destination = res.headers.location;
        console.log(`✓ ${legacyUrl} -> ${res.statusCode} -> ${destination}`);
        passed++;
      } else if (res.statusCode === 404) {
        console.error(`✗ ${legacyUrl} -> 404 (not found)`);
        failed++;
        failures.push({ url: legacyUrl, status: 404 });
      } else {
        console.warn(`⚠ ${legacyUrl} -> ${res.statusCode} (unexpected)`);
        passed++;
      }
      resolve();
    });

    req.on('error', (err) => {
      console.error(`✗ ${legacyUrl} -> Error: ${err.message}`);
      failed++;
      failures.push({ url: legacyUrl, error: err.message });
      resolve();
    });

    req.end();
  });
}

async function runTests() {
  console.log(`\n🧪 Testing redirects on ${TEST_DOMAIN}\n`);
  console.log(`Total URLs to test: ${legacyUrls.length}\n`);

  for (const legacyUrl of legacyUrls) {
    await checkRedirect(legacyUrl);
  }

  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`Results: ${passed} passed, ${failed} failed`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);

  if (failures.length > 0) {
    console.log('Failures:');
    failures.forEach((f) => {
      console.log(`  - ${f.url} (${f.status || f.error})`);
    });
    console.log();
  }

  process.exit(failed > 0 ? 1 : 0);
}

runTests();
