import { cons } from '@hexlet/pairs';
import getRandomNumber from './getRandomNumber.js';

const getProgressionArray = (length, begin, step) => {
  const progressionArray = [];
  let currentItem = begin;

  for (let i = 0; i < length; i += 1) {
    progressionArray.push(currentItem);
    currentItem += step;
  }

  return progressionArray;
};

export default () => {
  const progressLength = getRandomNumber(10, 5);
  const hiddenPosition = getRandomNumber(progressLength - 1);
  const progressBegin = getRandomNumber(100);
  const progressStep = getRandomNumber(20);
  const progressArray = getProgressionArray(progressLength, progressBegin, progressStep);
  const answer = progressArray[hiddenPosition];
  progressArray[hiddenPosition] = '..';
  const question = progressArray.join(' ');

  return cons(question, answer);
};
