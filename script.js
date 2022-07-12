'use strict';
//quick intro to DOM
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'correct number !';

document.querySelector('.number').textContent = 11;
document.querySelector('.score').textContent = 12;

document.querySelector('.guess').value = 28;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const dispMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);
  if (!guess) {
    dispMessage('Enter a number !');
  } else if (guess === secretNumber) {
    dispMessage('You are Correct ');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.heading').textContent = 'Congrats, You Win';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 0) {
      dispMessage('Too High');
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      dispMessage('Too low');
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
  if (score <= 0) {
    dispMessage('GAME OVER');
    document.querySelector('.heading').textContent = 'ouch, You lose';
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  dispMessage('Start Guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
