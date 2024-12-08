'use strict';

let playing = true;
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
let currentScorefirst = 0;
let currentScoreSecond = 0;

document.querySelector('#current--0').textContent = currentScorefirst;
document.querySelector('#current--1').textContent = currentScoreSecond;

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
  if (playing) {
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
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] = scores[activePlayer] + currentPlayerScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] < 100) {
      switchPlayer();
    } else {
      diceImg.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      playing = false;

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('.player--active');
    }
  }
});

document.querySelector('.btn--new').addEventListener('click', function () {
  diceImg.classList.add('hidden');

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');

  playing = true;
  activePlayer = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');

  //Reset CURRENT SCORES
  currentPlayerScore = 0;
  const currentScoresEl = document.querySelectorAll('.current-score');
  for (let i = 0; i < currentScoresEl.length; i++) {
    currentScoresEl[i].textContent = currentPlayerScore;
  }

  //Reset TOTAL SCORES
  scores = [0, 0];
  const totalScoresEl = document.querySelectorAll('.score');
  for (let i = 0; i < totalScoresEl.length; i++) {
    totalScoresEl[i].textContent = scores[i];
  }

  const players = document.querySelectorAll('.player');

  for (let i = 0; i < players.length; i++) {
    console.log(players[i]);

    if (players[i].classList.contains('player--winner')) {
      players[i].classList.remove('player--winner');
    }
  }
});
