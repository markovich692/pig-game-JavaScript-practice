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

let activePlayer = 0;
let scores = [0, 0];
let currentPlayerScore = 0;
const switchPlayer = function () {
  currentPlayerScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentPlayerScore;

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle('player--active');
  activePlayer = activePlayer === 0 ? 1 : 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle('player--active');
};

rollDicebBtn.addEventListener('click', function () {
  let randomDice = Math.floor(Math.random() * 6) + 1;
  console.log(randomDice);

  if (randomDice !== 1) {
    diceImg.classList.remove('hidden');
    diceImg.src = `dice-${randomDice}.png`;
    currentPlayerScore = currentPlayerScore + randomDice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentPlayerScore;
  } else {
    console.log(activePlayer);
    diceImg.src = `dice-${randomDice}.png`;

    switchPlayer();
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  scores[activePlayer] = scores[activePlayer] + currentPlayerScore;

  document.querySelector(`#score--${activePlayer}`).textContent =
    scores[activePlayer];

  switchPlayer();
});
