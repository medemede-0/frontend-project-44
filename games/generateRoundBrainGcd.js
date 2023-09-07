import { cons } from '@hexlet/pairs';
import getRandomNumber from './getRandomNumber.js';

export default () => {
  const randomNumber1 = getRandomNumber(1000);
  const randomNumber2 = getRandomNumber(1000);

  const question = (`${randomNumber1} ${randomNumber2}`);
  let a = randomNumber1;
  let b = randomNumber2;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  const answer = a + b;

  return cons(question, answer);
};
