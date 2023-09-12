import { cons } from '@hexlet/pairs';
import getRandomNumber from './getRandomNumber.js';
import start from '../index.js';

const descOfGame = 'Find the greatest common divisor of given numbers.';

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

const generateRoundBrainGcd = () => {
  const randomNumber1 = getRandomNumber(1000);
  const randomNumber2 = getRandomNumber(1000);

  const question = (`${randomNumber1} ${randomNumber2}`);
  const answer = getGcd(randomNumber1, randomNumber2);

  return cons(question, answer);
};

export default () => start(generateRoundBrainGcd, descOfGame);
