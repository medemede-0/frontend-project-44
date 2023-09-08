import { cons } from '@hexlet/pairs';
import getRandomNumber from './getRandomNumber.js';

const operationsArray = ['+', '-', '*'];

export default () => {
  const randomNumber1 = getRandomNumber(99);
  const randomNumber2 = getRandomNumber(99);
  const randomOperation = operationsArray[Math.floor(Math.random() * 2)];

  const question = (`${randomNumber1} ${randomOperation} ${randomNumber2}`);
  let answer;
  switch (randomOperation) {
    case '+':
      answer = randomNumber1 + randomNumber2; break;
    case '-':
      answer = randomNumber1 - randomNumber2; break;
    default:
      answer = randomNumber1 * randomNumber2; break;
  }

  return cons(question, answer);
};
