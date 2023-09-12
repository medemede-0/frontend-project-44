import readlineSync from 'readline-sync';
import {
  car, cdr, isPair,
} from '@hexlet/pairs';

const maxNumberOfRounds = 3;

export default (generateRound, desc) => {
  console.log('Welcome to the Brain Games!');

  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(desc);
  for (let currentRound = 0; currentRound < maxNumberOfRounds; currentRound += 1) {
    const round = generateRound();
    if (isPair(round)) {
      const question = car(round);
      const answerCorrect = cdr(round);
      console.log(`Question: ${question}`);

      const answerUser = readlineSync.question('Your answer: ');
      if (answerUser === answerCorrect.toString()) {
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
