"use strict";

let mysteryNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMsg = function (msg) {
    document.querySelector('.status-msg').textContent = msg;
  };

document.querySelector('.submit').addEventListener('click', function () {
  const prediction = Number(document.querySelector('.user-prediction').value);

  if (!prediction) {
    displayMsg('⛔️ No Number!');
  } else if (prediction < 0) {
    displayMsg('❌ No negative numbers!');
  } else if (prediction === mysteryNumber) {
    displayMsg('🎉 Correct Number!');
    document.querySelector('.hidden-number').textContent = mysteryNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.hidden-number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.best-score').textContent = highScore;
    }
  } else if (prediction !== mysteryNumber) {
    if (score > 1) {
      displayMsg(prediction > mysteryNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMsg('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.reset').addEventListener('click', function () {
  score = 20;
  mysteryNumber = Math.trunc(Math.random() * 20) + 1;

  displayMsg('Make your guess...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.hidden-number').textContent = '?';
  document.querySelector('.user-prediction').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.hidden-number').style.width = '15rem';
});
