import readlineSync from 'readline-sync';
import {
  cons, car, cdr, isPair,
} from '@hexlet/pairs';

const operationsArray = ['+', '-', '*'];
const maxNumberOfRounds = 3;

const getRandomIntNumber = (num) => Math.floor(Math.random() * num);

const brainEven = () => {
  const randomNumber = getRandomIntNumber(1000);
  const answer = randomNumber % 2 === 0 ? 'yes' : 'no';
  return cons(randomNumber, answer);
};

const brainCalc = () => {
  const randomNumber1 = getRandomIntNumber(99);
  const randomNumber2 = getRandomIntNumber(99);
  const randomOperation = operationsArray[Math.floor(Math.random() * 2)];

  const question = (`${randomNumber1} ${randomOperation} ${randomNumber2}`);
  let answer;
  switch (randomOperation) {
    case '+':
      answer = randomNumber1 + randomNumber2; break;
    case '-':
      answer = randomNumber1 - randomNumber2; break;
    default:
      answer = randomNumber1 * randomNumber2; break;
  }

  return cons(question, answer);
};

const generateRound = (typeOfGame) => {
  switch (typeOfGame) {
    case 'brain-even':
      return brainEven();
    case 'brain-calc':
      return brainCalc();
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

      console.log(`Congratulations, ${playerName}!`);
    } else {
      console.log('Round not generate. Try again');
    }
  }
};
