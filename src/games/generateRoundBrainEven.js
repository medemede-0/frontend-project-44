import { cons } from '@hexlet/pairs';
import getRandomNumber from './getRandomNumber.js';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }

  return false;
};

export default () => {
  const randomNumber = getRandomNumber(1000);
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  return cons(randomNumber, answer);
};
