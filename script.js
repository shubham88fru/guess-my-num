'use strict';
let secNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document
  .querySelector('.check')
  .addEventListener('click', function checkClickCallback() {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
      document.querySelector('.message').textContent = '💥No Number';
    } else if (guess === secNum) {
      document.querySelector('.message').textContent = '✨ Correct Number!';
      document.querySelector('.number').textContent = secNum;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else if (guess > secNum) {
      if (score > 1) {
        document.querySelector('.message').textContent = 'Too High!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'Boooo!';
        document.querySelector('.score').textContent = 0;
      }
    } else if (guess < secNum) {
      if (score > 1) {
        document.querySelector('.message').textContent = 'Too Low';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'Boooo!';
        document.querySelector('.score').textContent = 0;
      }
    }
  });

document
  .querySelector('.again')
  .addEventListener('click', function againClickCallback() {
    score = 20;
    secNum = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
