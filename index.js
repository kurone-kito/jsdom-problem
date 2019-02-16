const jsdom = require('jsdom');

const { window } = new jsdom.JSDOM();
const { document } = window;

const test = styles => {
  const elm = document.createElement('style');
  elm.setAttribute('type', 'text/css');
  elm.innerHTML = styles;
  document.head.appendChild(elm);

  console.log(`start compute... ${styles}`);
  window.getComputedStyle(document.body); // here
  console.log(`done.`);

  document.head.removeChild(elm);
}

test('_:-ms-lang(x)::-ms-backdrop, u {}'); // No problem.
test('p _:-ms-lang(x)::-ms-backdrop, u {}'); // Crash!
