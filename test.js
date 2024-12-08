//PLAYERS
// const firstPlayer = document.querySelector('.player--0');
// const secondPlayer = document.querySelector('.player--1');

//CURRENT SCORES
// let firstPlayerCurrScore = document.querySelector('#current--0');
// let secondPlayerCurrScore = document.querySelector('#current--1');

// let firstCurrent = 0;
// let secondCurrent = 0;

// firstPlayerCurrScore.textContent = firstCurrent;
// secondPlayerCurrScore.textContent = secondCurrent;

//TOTAL SCORES
// let firstPlayerTotalScore = document.querySelector('#score--0');
// let secondPlayerTotalScore = document.querySelector('#score--1');

// let firstTotal = 0;
// let secondTotal = 0;

// firstPlayerTotalScore.textContent = firstTotal;
// secondPlayerTotalScore.textContent = secondTotal;

// rollDicebBtn.addEventListener('click', function () {
//   randomNumber = Math.floor(Math.random() * 6) + 1;
//   diceImg.src = `dice-${randomNumber}.png`;
//   diceImg.classList.remove('hidden');

//   if (randomNumber !== 1 && firstTotal < 100 && secondTotal < 100) {
//     if (firstPlayer.classList.contains('player--active')) {
//       firstCurrent += randomNumber;
//       firstPlayerCurrScore.textContent = firstCurrent;
//     } else {
//       secondCurrent += randomNumber;
//       secondPlayerCurrScore.textContent = secondCurrent;
//     }
//   } else if (randomNumber === 1 && firstTotal < 100 && secondTotal < 100) {
//     if (firstPlayer.classList.contains('player--active')) {
//       firstPlayer.classList.remove('player--active');
//       secondPlayer.classList.add('player--active');
//       firstTotal += firstCurrent;
//       firstPlayerTotalScore.textContent = firstTotal;
//       firstCurrent = 0;
//       firstPlayerCurrScore.textContent = firstCurrent;
//     } else {
//       firstPlayer.classList.add('player--active');
//       secondPlayer.classList.remove('player--active');
//       secondTotal += secondCurrent;
//       secondPlayerTotalScore.textContent = secondTotal;
//       secondCurrent = 0;
//       secondPlayerCurrScore.textContent = secondCurrent;
//     }
//   } else {
//     if (firstTotal >= 100) {
//       console.log('player 1 wins');
//     } else if (secondTotal >= 100) {
//       console.log('player 2 wins');
//     }
//   }
// });
// // console.log(firstTotal);
// // console.log(secondTotal);

// holdBtn.addEventListener('click', function () {
//   if (firstPlayer.classList.contains('player--active')) {
//     firstPlayer.classList.remove('player--active');
//     secondPlayer.classList.add('player--active');
//     firstTotal += firstCurrent;
//     firstPlayerTotalScore.textContent = firstTotal;
//     firstCurrent = 0;
//     firstPlayerCurrScore.textContent = firstCurrent;
//   } else {
//     firstPlayer.classList.add('player--active');
//     secondPlayer.classList.remove('player--active');
//     secondTotal += secondCurrent;
//     secondPlayerTotalScore.textContent = secondTotal;
//     secondCurrent = 0;
//     secondPlayerCurrScore.textContent = secondCurrent;
//   }
// });

// newGameBtn.addEventListener('click', function () {
//   //Reinitializes CURRENT SCORES
//   firstCurrent = 0;
//   secondCurrent = 0;

//   firstPlayerCurrScore.textContent = firstCurrent;
//   secondPlayerCurrScore.textContent = secondCurrent;

//   //Reinitializes TOTAL SCORES
//   firstTotal = 0;
//   secondTotal = 0;

//   firstPlayerTotalScore.textContent = firstTotal;
//   secondPlayerTotalScore.textContent = secondTotal;

//   //Undisplay the dice

//   diceImg.classList.add('hidden');
// });
