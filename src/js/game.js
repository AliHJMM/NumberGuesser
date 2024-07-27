import { displayMsg } from './ui.js';

// Game variables
let mysteryNumber = Math.trunc(Math.random() * 20) + 1, // Mystery number between 1 and 20
    score = 20, // Initial score
    highScore = 0; // Track highest score

// Start a new game
export const startNewGame = function () {
  score = 20; // Reset score
  mysteryNumber = Math.trunc(Math.random() * 20) + 1; // Generate new mystery number

  displayMsg('Make your guess...'); // Prompt user
  document.querySelector('.score').textContent = score; // Update score display
  document.querySelector('.hidden-number').textContent = '?'; // Hide mystery number
  document.querySelector('.user-prediction').value = ''; // Clear input field

  // Reset UI elements
  document.querySelector('body').style.backgroundColor = '#222'; // Default background color
  document.querySelector('.hidden-number').style.width = '15rem'; // Reset width
};

// Handle user's guess
export const handleGuess = function () {
  const prediction = Number(document.querySelector('.user-prediction').value); // Get guess

  if (!prediction) {
    displayMsg('⛔️ No Number!'); // No input
  } else if (prediction < 0) {
    displayMsg('❌ No negative numbers!'); // Negative number
  } else if (prediction === mysteryNumber) {
    displayMsg('🎉 Correct Number!'); // Correct guess
    document.querySelector('.hidden-number').textContent = mysteryNumber; // Show number
    document.querySelector('body').style.backgroundColor = '#60b347'; // Green background
    document.querySelector('.hidden-number').style.width = '30rem'; // Increase width

    if (score > highScore) {
      highScore = score; // Update high score
      document.querySelector('.best-score').textContent = `🥇 Best Score: ${highScore}`; // Display high score
    }

  } else {
    if (score > 1) {
      displayMsg(prediction > mysteryNumber ? '📈 Too high!' : '📉 Too low!'); // Hint
      score--; // Decrease score
      document.querySelector('.score').textContent = score; // Update score display
    } else {
      displayMsg('💥 You lost the game!'); // Game over
      document.querySelector('.score').textContent = 0; // Reset score
      document.querySelector('body').style.backgroundColor = '#f00'; // Red background
    }
  }
};
