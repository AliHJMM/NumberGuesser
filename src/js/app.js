// Import functions from game.js module
import { startNewGame, handleGuess } from './game.js';

// Import responsive.js module for handling responsive design
import './responsive.js';

// Add event listener for the 'click' event on the submit button
// When clicked, it triggers the handleGuess function to process the user's guess
document.querySelector('.submit').addEventListener('click', function () {
  handleGuess();
});

// Add event listener for the 'click' event on the reset button
// When clicked, it triggers the startNewGame function to reset the game
document.querySelector('.reset').addEventListener('click', function () {
  startNewGame();
});
