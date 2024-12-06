'use strict';

//Select Player1 and Player2
const playerFirst = document.querySelector('.player--0');
const playerSecond = document.querySelector('.player--1');

//Select Player1 and Player2 CURRENT SCORES
const firstCurrentScore = document.querySelector('#current--0');
const secondCurrentScore = document.querySelector('#current--1');

//Select Player1 and Player2 TOTAL SCORES
const firstTotalScore = document.querySelector('#score--0');
const secondTotalScore = document.querySelector('#score--1');

//Dice
const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');

const randomNumber = Math.round(Math.random() * 6);

//Initializing CURRENT SCORES

let currentFirst = 0;
let currentSecond = 0;

firstCurrentScore.textContent = currentFirst;
secondCurrentScore.textContent = currentSecond;

//Total Scores
let totalFirst = 0;
let totalSecond = 0;

firstTotalScore.textContent = totalFirst;
secondTotalScore.textContent = totalSecond;

hold.addEventListener('click', function () {
  if (playerFirst.classList.contains('player--active')) {
    playerFirst.classList.remove('player--active');
    playerSecond.classList.add('player--active');
  } else if (playerSecond.classList.contains('player--active')) {
    playerFirst.classList.add('player--active');
    playerSecond.classList.remove('player--active');
  }
});
