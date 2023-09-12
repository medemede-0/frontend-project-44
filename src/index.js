import readlineSync from 'readline-sync';
import {
  car, cdr, isPair,
} from '@hexlet/pairs';

const maxNumberOfRounds = 3;

const getResultOfGame = (generateRound, numberOfCorrectAnswers) => {
  const round = generateRound();
  let result = true;

  if (isPair(round)) {
    const question = car(round);
    const answerCorrect = cdr(round);
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');

    if (answerUser === answerCorrect.toString()) {
      console.log('Correct!');
      if (numberOfCorrectAnswers + 1 === maxNumberOfRounds) {
        return result;
      }
      getResultOfGame(generateRound, numberOfCorrectAnswers + 1);
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answerCorrect}'`);
      result = false;
    }
  }

  return result;
};

export default (generateRound, desc) => {
  console.log('Welcome to the Brain Games!');

  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(desc);

  if (getResultOfGame(generateRound, 0)) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`Let's try again, ${playerName}!`);
  }
};
