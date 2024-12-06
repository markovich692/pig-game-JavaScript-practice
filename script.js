'use strict';

let randomNumber;
const rollDicebBtn = document.querySelector('.btn--roll');

rollDicebBtn.addEventListener('click', function () {
  randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log(randomNumber);
});
