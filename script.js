'use strict';

let randomNumber;
const rollDicebBtn = document.querySelector('.btn--roll');
const diceImg = document.querySelector('.dice');

//CURRENT SCORES
let firstPlayerCurrScore = document.querySelector('#current--0');
let secondPlayerCurrScore = document.querySelector('#current--1');

let firstCurrent = 0;
let secondCurrent = 0;

firstPlayerCurrScore.textContent = firstCurrent;
secondPlayerCurrScore.textContent = secondCurrent;

//TOTAL SCORES
let firstPlayerTotalScore = document.querySelector('#score--0');
let secondPlayerTotalScore = document.querySelector('#score--1');

let firstTotal = 0;
let secondTotal = 0;

firstPlayerTotalScore.textContent = firstTotal;
secondPlayerTotalScore.textContent = secondTotal;

rollDicebBtn.addEventListener('click', function () {
  randomNumber = Math.floor(Math.random() * 6) + 1;
  diceImg.src = `dice-${randomNumber}.png`;
  diceImg.classList.remove('hidden');

  if (randomNumber !== 1) {
    firstCurrent += randomNumber;
    firstPlayerCurrScore.textContent = firstCurrent;
  } else {
    console.log('it is equal 1');
  }
});
