/**
 * PulseForge — Static Production Build & Minifier Tool
 * 
 * Zero-dependency build script that:
 * 1. Minifies all CSS files in assets/css to .min.css
 * 2. Minifies all JS files in assets/js to .min.js
 * 3. Verifies zero console logs in production JS
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

function minifyCSS(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
    .replace(/\s+/g, ' ')             // Collapse whitespace
    .replace(/\s*([\{\}\:\;\,])\s*/g, '$1') // Remove spaces around delimiters
    .replace(/\;}/g, '}')             // Remove trailing semicolons
    .trim();
}

function minifyJS(js) {
  return js
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove multi-line comments
    .replace(/(^|[^\:])\/\/.*$/gm, '$1') // Remove single-line comments
    .replace(/^\s+|\s+$/gm, '')        // Trim lines
    .replace(/\n{2,}/g, '\n')          // Remove multiple empty lines
    .trim();
}

console.log('=======================================================');
console.log('  PULSEFORGE PRODUCTION MINIFICATION ENGINE');
console.log('  Pure HTML5, CSS3, Vanilla JavaScript');
console.log('=======================================================');

// 1. Minify CSS in assets/css
const cssDir = path.join(ROOT_DIR, 'assets', 'css');
if (fs.existsSync(cssDir)) {
  const cssFiles = fs.readdirSync(cssDir).filter(f => f.endsWith('.css') && !f.endsWith('.min.css'));
  cssFiles.forEach(file => {
    const srcPath = path.join(cssDir, file);
    const content = fs.readFileSync(srcPath, 'utf8');
    const minified = minifyCSS(content);
    const outPath = path.join(cssDir, file.replace(/\.css$/, '.min.css'));
    fs.writeFileSync(outPath, minified, 'utf8');
    const ratio = ((1 - minified.length / content.length) * 100).toFixed(1);
    console.log(`[CSS] Minified: ${file} -> ${path.basename(outPath)} (-${ratio}%)`);
  });
}

// 2. Minify JS in assets/js
const jsDir = path.join(ROOT_DIR, 'assets', 'js');
if (fs.existsSync(jsDir)) {
  const jsFiles = fs.readdirSync(jsDir).filter(f => f.endsWith('.js') && !f.endsWith('.min.js'));
  jsFiles.forEach(file => {
    const srcPath = path.join(jsDir, file);
    const content = fs.readFileSync(srcPath, 'utf8');
    const minified = minifyJS(content);
    const outPath = path.join(jsDir, file.replace(/\.js$/, '.min.js'));
    fs.writeFileSync(outPath, minified, 'utf8');
    const ratio = ((1 - minified.length / content.length) * 100).toFixed(1);
    console.log(`[JS]  Minified: ${file} -> ${path.basename(outPath)} (-${ratio}%)`);
  });
}

// 3. Verify zero console logs in production JS
console.log('\n[CODE QUALITY AUDIT] Checking for console logs in production JS...');
let hasConsole = false;
if (fs.existsSync(jsDir)) {
  const jsSourceFiles = fs.readdirSync(jsDir).filter(f => f.endsWith('.js') && !f.endsWith('.min.js'));
  jsSourceFiles.forEach(file => {
    const content = fs.readFileSync(path.join(jsDir, file), 'utf8');
    if (/console\.(log|error|warn|debug|info)/.test(content)) {
      console.warn(`[WARN] Found console statement in: ${file}`);
      hasConsole = true;
    }
  });
}

if (!hasConsole) {
  console.log('[PASS] 100% Verified: Zero console statements across all production JavaScript files.');
}

console.log('\n=======================================================');
console.log('  STATIC PRODUCTION BUILD COMPLETE');
console.log('=======================================================');
