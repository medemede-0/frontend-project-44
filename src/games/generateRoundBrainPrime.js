import { cons } from '@hexlet/pairs';
import getRandomNumber from './getRandomNumber.js';
import start from '../index.js';

const descOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const generateRoundBrainPrime = () => {
  const randomNumber = getRandomNumber(1000);
  const answer = isPrime(randomNumber) ? 'yes' : 'no';
  return cons(randomNumber, answer);
};

export default () => start(generateRoundBrainPrime, descOfGame);
