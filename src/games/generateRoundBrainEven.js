import { cons } from '@hexlet/pairs';
import getRandomNumber from './getRandomNumber.js';
import start from '../index.js';

const descOfGame = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }

  return false;
};

const generateRoundBrainEven = () => {
  const randomNumber = getRandomNumber(1000);
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  return cons(randomNumber, answer);
};

export default () => start(generateRoundBrainEven, descOfGame);
