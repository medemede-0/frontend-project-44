#!/usr/bin/env node

import readlineSync from 'readline-sync';

const askPlayer = (scoreOfGame, playerName) => {
  let countRightAnswer = scoreOfGame;
  if (countRightAnswer === 3) {
    console.log(`Congratulations, ${playerName}!`);
    return;
  }
  const randomNumber = Math.floor(Math.random() * 1000);
  const answerCorrect = randomNumber % 2 === 0 ? 'yes' : 'no';
  const answerUser = readlineSync.question(`Question: ${randomNumber} Your answer: `);
  if (answerUser === answerCorrect) {
    countRightAnswer += 1;
    console.log('Correct!');
  } else {
    console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answerCorrect}'\nLet's try again, ${playerName}!`);
    countRightAnswer = 0;
    return;
  }
  askPlayer(countRightAnswer, playerName);
};

console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${playerName}!\nAnswer "yes" if the number is even, otherwise answer "no".`);
askPlayer(0, playerName);
