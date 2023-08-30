#!/usr/bin/env node

import readlineSync from 'readline-sync';

const operationsArray = ['+', '-', '*'];
const maxNumberOfRounds = 3;

const questionBrainCalc = () => {
  const randomNumber1 = Math.floor(Math.random() * 99);
  const randomNumber2 = Math.floor(Math.random() * 99);
  const randomOperation = operationsArray[Math.floor(Math.random() * 2)];

  console.log(`Question: ${randomNumber1} ${randomOperation} ${randomNumber2}`);
  switch (randomOperation) {
    case '+':
      return randomNumber1 + randomNumber2;
    case '-':
      return randomNumber1 - randomNumber2;
    default:
      return randomNumber1 * randomNumber2;
  }
};

const askPlayer = (numberOfRightAnswers, playerName) => {
  let currentRound = numberOfRightAnswers;
  if (currentRound === maxNumberOfRounds) {
    console.log(`Congratulations, ${playerName}!`);
    return;
  }

  const answerCorrect = questionBrainCalc();
  const answerUser = readlineSync.questionInt('Your answer: ');
  if (answerUser === answerCorrect) {
    currentRound += 1;
    console.log('Correct!');
  } else {
    console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answerCorrect}'\nLet's try again, ${playerName}!`);
    currentRound = 0;
    return;
  }
  askPlayer(currentRound, playerName);
};

console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${playerName}!\nWhat is the result of the expression?`);
askPlayer(0, playerName);
