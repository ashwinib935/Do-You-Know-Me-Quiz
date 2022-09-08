var readlineSync = require('readline-sync');
var chalk = require('chalk');

const welcomemsg = chalk.blue.bold;
const right = chalk.bgGreenBright.black;
const wrong = chalk.bgRedBright.black;
const congratsMessage = chalk.yellow.bold;

var userScore = 0;

let questions = [

  questionOne = {
    question: "What is Ashwini's nickname?",
    answer: "Komal"
  },
  questionTwo = {
    question: "Who is Ashwini's favorite hero?",
    answer: "Sidhart Manotra"
  },
  questionThree = {
    question: "Which is Ashwini's favorite song?",
    answer: "Kal ho na ho"
  },
  questionFour = {
    question: "Which is Ashwini's favorite color?",
    answer: "Pink"
  },
  questionFive = {
    question: "Which is Ashwini's hobby?",
    answer: "Traveling"
  },
  questionSix = {
    question: "Which is Ashwini's favorite dish?",
    answer: "Pani puri"
  },
  questionSeven = {
    question: "Which is Ashwini's favorite place?",
    answer: "Ozar"
  },
  questionEight = {
    question: "Where were Ashwini working ?",
    answer: "Cognizant"
  },
  questionNine = {
    question: "Which technical language Ashwini like?",
    answer: "JavaScript"
  },
  questionTen = {
    question: "Which is Ashwini's favorite movie?",
    answer: "3 idiots"
  }

]
let highScore = [{
  name: "Shamal",
  score: 9
}, {
  name: "Shantanu",
  score: 8
}];





function welcome() {
  var userName = readlineSync.question("What's your name? ");
  console.log(welcomemsg("Welcome " + userName + " to DO YOU KNOW Ashwini?"));

}

function play(question, answer) {
  let userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(right("You are right"));
    userScore++;
  } else {
    console.log(wrong("You are wrong"));
  }
  console.log("Current score:", userScore);
  console.log("----------------");
}

function game() {
  for (let i = 0; i < questions.length; i++) {
    play(questions[i].question, questions[i].answer);
  }
}

function showScore() {
  if (userScore > 0) {
    console.log("YAY! You SCORED: ", userScore);
  } else {
    console.log("You SCORED: ", userScore, "Please try again...");
  }
  console.log("**********************")
  console.log("Highest Score Details")
  for (let i = 0; i < highScore.length; i++) {
    console.log("Name:", highScore[i].name + "   " + "Score: " + highScore[i].score);
  }

}

function calculateHighestScore() {
  console.log("**********************");
  for (let i = 0; i < highScore.length; i++) {
    if (userScore > highScore[i].score)
      return console.log(congratsMessage("Congratulations you beat the score.Please send the screenshot so I can update it on my database"));

  }
}

welcome();
game();
showScore();
calculateHighestScore();