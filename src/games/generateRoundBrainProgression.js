import { cons } from '@hexlet/pairs';
import getRandomNumber from './getRandomNumber.js';

export default () => {
  const progressLength = getRandomNumber(10, 5);
  const position = getRandomNumber(progressLength - 1);
  const progressBegin = getRandomNumber(100);
  const progressStep = getRandomNumber(20);

  let question;
  if (position === 0) {
    question = '..';
  } else {
    question = `${progressBegin}`;
  }

  let progressCurrent = progressBegin;
  let answer;

  for (let i = 0; i < progressLength; i += 1) {
    if (i === 0) {
      answer = progressBegin;
    } else {
      progressCurrent += progressStep;
      if (i === position) {
        answer = progressCurrent;
        question = `${question} ..`;
      } else {
        question = `${question} ${progressCurrent}`;
      }
    }
  }

  return cons(question, answer);
};
