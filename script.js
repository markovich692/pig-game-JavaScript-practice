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

    if (scores[activePlayer] < 10) {
      switchPlayer();
    } else {
      diceImg.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      playing = false;
    }
  }
});

document.querySelector('.btn--new').addEventListener('click', function () {
  console.log();
  playing = true;
  diceImg.classList.add('hidden');

  //Reinitializes TOTAL SCORES
  currentPlayerScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentPlayerScore;
  scores = [0, 0];
  activePlayer = 0;

  document.querySelector('#score--0').textContent = scores[0];
  document.querySelector('#score--1').textContent = scores[1];

  //Reinitializes CURRENT SCORES

  //   document.querySelector('#score--0').textContent = scores[0];
  //   document.querySelector('#score--1').textContent = scores[1];

  const players = document.querySelectorAll('.player');

  for (let i = 0; i < players.length; i++) {
    console.log(players[i]);

    if (players[i].classList.contains('player--winner')) {
      players[i].classList.remove('player--winner');
    }
  }
});
