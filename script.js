'use strict';

let randomNumber;
const rollDicebBtn = document.querySelector('.btn--roll');
const diceImg = document.querySelector('.dice');

rollDicebBtn.addEventListener('click', function () {
  randomNumber = Math.floor(Math.random() * 6) + 1;
  diceImg.src = `dice-${randomNumber}.png`;
  diceImg.classList.remove('hidden');
});
