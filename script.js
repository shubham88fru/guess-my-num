'use strict';
let secNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document
  .querySelector('.check')
  .addEventListener('click', function checkClickCallback() {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
      displayMessage('💥No Number');
    } else if (guess === secNum) {
      displayMessage('✨ Correct Number!');
      document.querySelector('.number').textContent = secNum;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    } else {
      const message = guess > secNum ? 'Too High!' : 'Too Low';
      if (score > 1) {
        displayMessage(message);
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('Boooo!');
        document.querySelector('.score').textContent = 0;
      }
    }
  });

document
  .querySelector('.again')
  .addEventListener('click', function againClickCallback() {
    score = 20;
    secNum = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
