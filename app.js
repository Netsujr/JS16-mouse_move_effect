const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

function shadow(e) {
const width = hero.offsetWidth;
const height = hero.offsetHeight;
let { offsetX: x, offsetY: y } = e;

console.log(x, y);
}

hero.addEventListener('mousemove', shadow);
