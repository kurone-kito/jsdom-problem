const fs = require('fs');
const jsdom = require('jsdom');

const dom = new jsdom.JSDOM(fs.readFileSync('./resource/index.html', 'utf8'));
const { window } = dom;
const { document } = window;

const test = file => {
  const element = document.createElement('style');
  element.setAttribute('type', 'text/css');
  element.innerHTML = fs.readFileSync(file, 'utf8');
  document.head.appendChild(element);

  console.warn(`start: ${file}`);
  console.log(window.getComputedStyle(document.body));
  console.warn(`done: ${file}`);

  document.head.removeChild(element);
}

test('./resource/safe.css'); // Safe
test('./resource/problem.css'); // Problem
