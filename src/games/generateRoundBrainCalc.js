import { cons } from '@hexlet/pairs';
import getRandomNumber from './getRandomNumber.js';
import start from '../index.js';

const descOfGame = 'What is the result of the expression?';
const operationsArray = ['+', '-', '*'];

const calculate = (num1, num2, oper) => {
  switch (oper) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operation in calculate: '${oper}'!`);
  }
};

const generateRoundBrainCalc = () => {
  const randomNumber1 = getRandomNumber(99);
  const randomNumber2 = getRandomNumber(99);
  const randomOperation = operationsArray[getRandomNumber(2)];

  const question = (`${randomNumber1} ${randomOperation} ${randomNumber2}`);
  const answer = calculate(randomNumber1, randomNumber2, randomOperation);

  return cons(question, answer);
};

export default () => start(generateRoundBrainCalc, descOfGame);
