'use strict';

let randomNumber;
const diceImg = document.querySelector('.dice');
const rollDicebBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');

//PLAYERS
const firstPlayer = document.querySelector('.player--0');
const secondPlayer = document.querySelector('.player--1');

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
    if (firstPlayer.classList.contains('player--active')) {
      firstCurrent += randomNumber;
      firstPlayerCurrScore.textContent = firstCurrent;
    } else {
      console.log(secondTotal);
      secondCurrent += randomNumber;
      secondPlayerCurrScore.textContent = secondCurrent;
    }
  } else {
    if (firstPlayer.classList.contains('player--active')) {
      firstPlayer.classList.remove('player--active');
      secondPlayer.classList.add('player--active');
      firstTotal += firstCurrent;
      firstPlayerTotalScore.textContent = firstTotal;
      firstCurrent = 0;
      firstPlayerCurrScore.textContent = firstCurrent;
    } else {
      firstPlayer.classList.add('player--active');
      secondPlayer.classList.remove('player--active');
      secondTotal += secondCurrent;
      secondPlayerTotalScore.textContent = secondTotal;
      secondCurrent = 0;
      secondPlayerCurrScore.textContent = secondCurrent;
    }
  }
});

holdBtn.addEventListener('click', function () {
  if (firstPlayer.classList.contains('player--active')) {
    firstPlayer.classList.remove('player--active');
    secondPlayer.classList.add('player--active');
    firstTotal += firstCurrent;
    firstPlayerTotalScore.textContent = firstTotal;
    firstCurrent = 0;
    firstPlayerCurrScore.textContent = firstCurrent;
  } else {
    firstPlayer.classList.add('player--active');
    secondPlayer.classList.remove('player--active');
    secondTotal += secondCurrent;
    secondPlayerTotalScore.textContent = secondTotal;
    secondCurrent = 0;
    secondPlayerCurrScore.textContent = secondCurrent;
  }
});

newGameBtn.addEventListener('click', function () {
  //Reinitializes CURRENT SCORES
  firstCurrent = 0;
  secondCurrent = 0;

  firstPlayerCurrScore.textContent = firstCurrent;
  secondPlayerCurrScore.textContent = secondCurrent;

  //Reinitializes TOTAL SCORES
  firstTotal = 0;
  secondTotal = 0;

  firstPlayerTotalScore.textContent = firstTotal;
  secondPlayerTotalScore.textContent = secondTotal;

  //Undisplay the dice

  diceImg.classList.add('hidden');
});
