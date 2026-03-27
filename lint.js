// Lint checks for static site files
const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const css = fs.readFileSync('styles.css', 'utf8');
const js = fs.readFileSync('script.js', 'utf8');

const errors = [];

// index.html checks
if (!html.includes('href="./styles.css"')) errors.push('index.html: missing styles.css link');
if (!html.includes('src="./script.js"')) errors.push('index.html: missing script.js link');
if (!html.includes('data-testid="site-shell"')) errors.push('index.html: missing site-shell testid');
if (!html.includes('data-testid="hero-section"')) errors.push('index.html: missing hero-section testid');
if (!html.includes('lang="en"')) errors.push('index.html: missing lang attribute');
if (!html.includes('<meta charset')) errors.push('index.html: missing charset meta');
if (!html.includes('name="viewport"')) errors.push('index.html: missing viewport meta');

// CSS checks
if (css.trim().length === 0) errors.push('styles.css: file is empty');

// JS checks
if (js.trim().length === 0) errors.push('script.js: file is empty');

if (errors.length > 0) {
  errors.forEach(e => console.error('LINT ERROR:', e));
  process.exit(1);
}

console.log('Lint passed.');
