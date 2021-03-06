const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 150; //px


function shadow(e) {
  const width = hero.offsetWidth;
  const height = hero.offsetHeight;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  text.style.textShadow = `
  ${xWalk}px ${yWalk}px 0 rgba(255,188,188,1),
  ${xWalk * -1}px ${yWalk}px 0 rgba(255,255,188,1),
  ${yWalk * -1}px ${xWalk}px 0 rgba(175,170,255,1)

  `;

};

// console.log(x, y);

hero.addEventListener('mousemove', shadow);
