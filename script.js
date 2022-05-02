'use strict';

// selecting elements
const player0El = document.querySelector(`.player--0 `);
const player1El = document.querySelector(`.player--1 `);

const score0El = document.querySelector(`#score--0`);
const score1El = document.getElementById(`score--1`);
const current0El = document.querySelector(`#current--0`);
const current1E1 = document.querySelector(`#current--1`);

const diceEl = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add(`hidden`);

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling dice functionality
btnRoll.addEventListener(`click`, function () {
  // generating random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  //Dispaly dice
  diceEl.classList.remove(`hidden`);
  diceEl.src = `dice-${dice}.png`;

  //checking for rolled 1: if true:switch to next player
  if (dice !== 1) {
    //   add a score to current socre
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //   switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle(`player--active`);
    player1El.classList.toggle(`player--active`);
  }
});
