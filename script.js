'use strict';

let randomNumber;
const diceImg = document.querySelector('.dice');
const rollDicebBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');

//Reinitializes TOTAL SCORES

let totalScorefirst = 0;
let totalScoreSecond = 0;

document.querySelector('#score--0').textContent = totalScorefirst;
document.querySelector('#score--1').textContent = totalScoreSecond;

//Reinitializes CURRENT SCORES

let currentScoreFirst = 0;
let currentScoreSecond = 0;

document.querySelector('#current--0').textContent = currentScoreFirst;
document.querySelector('#current--1').textContent = currentScoreSecond;

let activePlayer = 0;
let currentPlayerScore = 0;

rollDicebBtn.addEventListener('click', function () {
  let randomDice = Math.floor(Math.random() * 6) + 1;
  diceImg.classList.remove('hidden');
  diceImg.src = `dice-${randomDice}.png`;

  currentPlayerScore = currentPlayerScore + randomDice;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentPlayerScore;
});
