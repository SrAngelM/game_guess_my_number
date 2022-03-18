'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (tag, message) {
  document.querySelector(tag).textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When the player is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number!';
    displayMessage('.message', 'No number!');
    //When player Wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number';
    displayMessage('.message', 'Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // document.querySelector('.number').textContent = secretNumber;
    displayMessage('.number', secretNumber);
    if (score > highscore) {
      highscore = score;
      // document.querySelector('.highscore').textContent = highscore;
      displayMessage('.highscore', highscore);
    }

    //When guess is too wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high!' : 'Too low!';
      score--;
      displayMessage(
        '.message',
        guess > secretNumber ? 'Too high!' : 'Too low!'
      );
      // document.querySelector('.score').textContent = score;
      displayMessage('.score', score);
    } else {
      // document.querySelector('.message').textContent = 'You lost the game';
      displayMessage('.message', 'You lost the game');
      // document.querySelector('.score').textContent = 0;
      displayMessage('.score', 0);
    }
  }
  //   //When guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   //When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = '';
  //   }
  // }
});

/*
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler.
2. In the handler function, restore initial values of the score and secretNumber variables.
3. Restore the initial conditions of the message, number, score and guess input field.
4. Also restore the original background color (#222) and number width (15rem).
*/
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.number').textContent = '?';
  // document.querySelector('.score').textContent = score;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('.number', '?');
  displayMessage('.score', score);
  displayMessage('.message', 'Start guessing...');
  document.querySelector('.guess').value = null;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
