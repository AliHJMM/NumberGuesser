import { startNewGame, handleGuess } from './game.js';

document.querySelector('.submit').addEventListener('click', function () {
  handleGuess();
});

document.querySelector('.reset').addEventListener('click', function () {
  startNewGame();
});
