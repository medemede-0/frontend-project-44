import { cons } from '@hexlet/pairs';
import getRandomNumber from './getRandomNumber.js';

const operationsArray = ['+', '-', '*'];

const calculate = (num1, num2, oper) => {
  switch (oper) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return num1 * num2;
  }
};

export default () => {
  const randomNumber1 = getRandomNumber(99);
  const randomNumber2 = getRandomNumber(99);
  const randomOperation = operationsArray[Math.floor(Math.random() * 2)];

  const question = (`${randomNumber1} ${randomOperation} ${randomNumber2}`);
  const answer = calculate(randomNumber1, randomNumber2, randomOperation);

  return cons(question, answer);
};