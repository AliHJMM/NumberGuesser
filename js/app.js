import { startNewGame, handleGuess } from './game.js';
import './responsive.js';

document.querySelector('.submit').addEventListener('click', function () {
  handleGuess();
});

document.querySelector('.reset').addEventListener('click', function () {
  startNewGame();
});
