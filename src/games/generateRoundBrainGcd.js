import { cons } from '@hexlet/pairs';
import getRandomNumber from './getRandomNumber.js';

const getGcd = (num1, num2) => {
  let a = num1;
  let b = num2;

  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }

  return a + b;
};

export default () => {
  const randomNumber1 = getRandomNumber(1000);
  const randomNumber2 = getRandomNumber(1000);

  const question = (`${randomNumber1} ${randomNumber2}`);
  const answer = getGcd(randomNumber1, randomNumber2);

  return cons(question, answer);
};
