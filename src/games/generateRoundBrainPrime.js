import { cons } from '@hexlet/pairs';
import getRandomNumber from './getRandomNumber.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

export default () => {
  const randomNumber = getRandomNumber(1000);
  const answer = isPrime(randomNumber) ? 'yes' : 'no';
  return cons(randomNumber, answer);
};
