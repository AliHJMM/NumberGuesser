"use strict";

let mysteryNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMsg = function (msg) {
    document.querySelector('.status-msg').textContent = msg;
  };