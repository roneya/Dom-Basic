'use strict';

let guessNumber = Math.trunc(Math.random() * 20) + 1
console.log(guessNumber);

let score = 20;
document.querySelector('.score').textContent = score;

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    
    guessNumber = Math.trunc(Math.random() * 20) + 1
    document.querySelector('.number').textContent = '?';
    console.log(guessNumber);
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
});

//document.querySelector('.guess').value = 8;
let flag = 0;
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No Number!';
    }
    console.log(guess, typeof guess);
    if(score != 0 && flag != 1){
if (guess == guessNumber) {
            flag = 1;
            document.querySelector('.number').textContent = guessNumber;
            console.log('Correct Number!');
            document.querySelector('.score').textContent = --score;
            document.querySelector('.message').textContent = '🎉 Correct Number!';
            document.querySelector('body').style.backgroundColor = '#60b347';
            if (score > document.querySelector('.highscore').textContent) {
                document.querySelector('.highscore').textContent = score;
            }
        } else if (guess > guessNumber) {
            document.querySelector('.score').textContent = --score;
            document.querySelector('.message').textContent = '📈 Too High!'
        } else if (guess < guessNumber) {
            document.querySelector('.score').textContent = --score;
            document.querySelector('.message').textContent = '📉 Too Low!'
        }
    }
   
    if (score < 1) {
        document.querySelector('.message').textContent = '👎 You lost the game!';
        document.querySelector('body').style.backgroundColor = 'red';
        }
    });



