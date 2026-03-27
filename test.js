// Tests for static site DOM targets and structure
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

test('index.html exists and is non-empty', () => {
  assert.ok(html.length > 0, 'index.html should not be empty');
});

test('site-shell DOM target is present', () => {
  assert.ok(
    html.includes('data-testid="site-shell"'),
    'Expected data-testid="site-shell" in index.html'
  );
});

test('hero-section DOM target is present', () => {
  assert.ok(
    html.includes('data-testid="hero-section"'),
    'Expected data-testid="hero-section" in index.html'
  );
});

test('primary-nav DOM target is present', () => {
  assert.ok(
    html.includes('data-testid="primary-nav"'),
    'Expected data-testid="primary-nav" in index.html'
  );
});

test('footer-section DOM target is present', () => {
  assert.ok(
    html.includes('data-testid="footer-section"'),
    'Expected data-testid="footer-section" in index.html'
  );
});

test('styles.css is linked correctly', () => {
  assert.ok(
    html.includes('href="./styles.css"'),
    'Expected href="./styles.css" in index.html'
  );
});

test('script.js is linked correctly', () => {
  assert.ok(
    html.includes('src="./script.js"'),
    'Expected src="./script.js" in index.html'
  );
});

test('page has correct lang attribute', () => {
  assert.ok(html.includes('lang="en"'), 'Expected lang="en" on <html>');
});

test('page has meta description for services platform', () => {
  assert.ok(
    html.includes('buying and selling services'),
    'Expected meta description mentioning buying and selling services'
  );
});
