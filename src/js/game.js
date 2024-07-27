import { displayMsg } from './ui.js';

// Game state variables
let mysteryNumber = Math.trunc(Math.random() * 20) + 1, // Random number between 1 and 20
    score = 20,  // Initial score
    highScore = 0; // Best score

// Start a new game
export const startNewGame = function () {
  score = 20; // Reset score
  mysteryNumber = Math.trunc(Math.random() * 20) + 1; // New mystery number

  // Update UI
  displayMsg('Make your guess...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.hidden-number').textContent = '?';
  document.querySelector('.user-prediction').value = '';

  // Reset styles
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.hidden-number').style.width = '15rem';
};

// Handle user's guess
export const handleGuess = function () {
  const prediction = Number(document.querySelector('.user-prediction').value);

  if (!prediction) { // No number entered
    displayMsg('⛔️ No Number!');
  } else if (prediction < 0) { // Negative number entered
    displayMsg('❌ No negative numbers!');
  } else if (prediction === mysteryNumber) { // Correct guess
    displayMsg('🎉 Correct Number!');
    document.querySelector('.hidden-number').textContent = mysteryNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.hidden-number').style.width = '30rem';

    // Update high score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.best-score').textContent = `🥇 Best Score: ${highScore}`;
    }

  } else { // Incorrect guess
    if (score > 1) {
      displayMsg(prediction > mysteryNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else { // Game over
      displayMsg('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
};
