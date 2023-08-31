import readlineSync from 'readline-sync';
import {
  car, cdr, isPair,
} from '@hexlet/pairs';
import generateRoundBrainEven from '../games/generateRoundBrainEven.js';
import generateRoundBrainCalc from '../games/generateRoundBrainCalc.js';

const maxNumberOfRounds = 3;

const generateRound = (typeOfGame) => {
  switch (typeOfGame) {
    case 'brain-even':
      return generateRoundBrainEven();
    case 'brain-calc':
      return generateRoundBrainCalc();
    default:
      return false;
  }
};

export default (typeOfGame) => {
  console.log('Welcome to the Brain Games!');

  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  switch (typeOfGame) {
    case 'brain-even':
      console.log('Answer "yes" if the number is even, otherwise answer "no"');
      break;
    case 'brain-calc':
      console.log('What is the result of the expression?');
      break;
    default:
      console.log('This game is not found.');
      return;
  }

  for (let currentRound = 0; currentRound < maxNumberOfRounds; currentRound += 1) {
    const round = generateRound(typeOfGame);
    if (isPair(round)) {
      const question = car(round);
      const answerCorrect = cdr(round);
      console.log(`Question: ${question}`);
      let answerUser;
      switch (typeof (answerCorrect)) {
        case 'string':
          answerUser = readlineSync.question('Your answer: '); break;
        case 'number':
          answerUser = readlineSync.questionInt('Your answer: '); break;
        default:
          console.log('Error');
      }

      if (answerUser === answerCorrect) {
        console.log('Correct!');
      } else {
        console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answerCorrect}'\nLet's try again, ${playerName}!`);
        return;
      }
    } else {
      console.log('Round not generate. Try again');
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};
