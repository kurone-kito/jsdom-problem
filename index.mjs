import fs from 'fs';
import jsdom from 'jsdom';

const dom = new jsdom.JSDOM(fs.readFileSync('./index.html', 'utf8'));
const { window } = dom;
const { document } = window;

const element = document.createElement('style');
element.setAttribute('type', 'text/css');
element.innerHTML = fs.readFileSync('./hack.css', 'utf8');
document.head.appendChild(element);

// Long long compute time...☕️
console.log(window.getComputedStyle(document.body));

