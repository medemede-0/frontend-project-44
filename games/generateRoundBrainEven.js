import { cons } from '@hexlet/pairs';
import getRandomNumber from './getRandomNumber.js';

export default () => {
  const randomNumber = getRandomNumber(1000);
  const answer = randomNumber % 2 === 0 ? 'yes' : 'no';
  return cons(randomNumber, answer);
};
