'use strict';

console.log('hey world');

// TODO: Get users name - prompt and alert greet back to user
function introPrompt(){
  let userName = prompt('What is your name?');
  let score = 0;
  
  alert(`Welcome, ${userName}! Are you up for a guessing game? Please answer the following 7 questions.`);
}
introPrompt();


// TODO: prompt 5 yes/no or y/n questions for the user to guess and alert when they are correct or incorrect
function questionOne(){
let qOneGuess = prompt('1. Do I have a dog?').toLowerCase();

if (qOneGuess === 'yes' || qOneGuess === 'y') {
  //console.log('correct')  
  alert('I wish! Unfortunately, the answer is no.');
} else if (qOneGuess === 'no' || qOneGuess === 'n') {
  //console.log('incorrect')
  alert('Tragically, you are correct.');
  score++;
}
}
questionOne();


function questionTwo(){
let qTwoGuess = prompt('2. Do I like Beyoncé?').toLowerCase();

if (qTwoGuess === 'yes' || qTwoGuess === 'y') {
  //console.log('incorrect')
  alert('Wrong. I LOVE and am basically obsessed with Beyoncé.');
} else if (qTwoGuess === 'no' || qTwoGuess === 'n') {
  //console.log('correct')
  alert('Correct! I do not merely like Beyoncé, I LOVE her.');
  score++;
}
}
questionTwo();

function questionThree(){
let qThreeGuess = prompt('3. Have I lived abroad?').toLowerCase();

if (qThreeGuess === 'yes' || qThreeGuess === 'y') {
  alert('Correct! Mexico and Chile so far.');
  score++;
} else if (qThreeGuess === 'no' || qThreeGuess === 'n') {
  alert('Wrong. I have a very strong Sagittarius placement, so I have definitely lived abroad.');
}
}
questionThree();


function questionFour(){
let qFourGuess = prompt('4. Is Jawbreaker my favorite film of the 2000s?').toLowerCase();

if (qFourGuess === 'yes' || qFourGuess === 'y') {
  alert('Wrong! It is Mean Girls.');
} else if (qFourGuess === 'no' || qFourGuess === 'n') {
  alert('Correct! It is Mean Girls.');
  score++;
}
}
questionFour();


function questionFive(){
  let qFiveGuess = prompt('5. Have I ever played a contact sport?').toLowerCase();
  
  if (qFiveGuess === 'yes' || qFiveGuess === 'y') {
    alert('Correct - I played rugby in college.');
    score++;
  } else if (qFiveGuess === 'no' || qFiveGuess === 'n') {
    alert('Wrong - I played rugby in college.');
  }
}
questionFive();


// TODO: give them a final message with their name in the alert


// alert(`Thanks for playing, ${userName}!`);


// TODO: add a guess a number question. Alert says too high or too low. 4 opportunities max. Alert correct answer at the end.

function questionSix(){
  let attempts = 4;
  let qSixGuess = prompt('6. How many tattoos do I have? Guess a number 0-5; You have 4 chances.');
  //(qSixGuess === 1){
    console.log(qSixGuess);
    for (let i = 0; i < attempts; i++) {
      if (Number(qSixGuess) === 1) {
        console.log(qSixGuess);
        alert('Correct! Just the one for now.');
        score++;
        i = 10; //any number higher than 4
      }
      else if (qSixGuess < 1) {
        console.log(qSixGuess);
        qSixGuess = prompt('Too low! Guess again.');
      }
      else if (qSixGuess > 1) {
        console.log(qSixGuess);
        qSixGuess = prompt('Too high! Guess again.');
      }
      if (i === 3) {
        alert('Sorry, you ran out of turns, the correct answer is 1.');
      }
    }
  }
  questionSix();
  
  
  // TODO: add a question with multiple possible correct answers stored in an array. 6 attempts max. Guesses end once guessed correctly or after the 6 attempts. Display all possible correct answers.


function questionSeven(){
let guesses = 6;
// let myArray = ['pineapple', 'tomatoes', 'cashews', 'olives', 'peanut butter', 'cucumbers', 'lime'];
// console.log(myArray);

//for(let j = 0; j < 6; j++){ -- missing?

let qSevenGuess = prompt('7. Guess one of my favorite foods - you have 6 attempts. Guess from the following: rice, cheese, pineapple, shrimp, tortilla chips, lime, cucumbers, cashews, bread, chocolate').toLowerCase();



// Between the following food items, pick one that is NOT one of my favorites: pineapple, tomatoes, cashews, olives, cucumbers, lime, shrimp, , shrimp, eggs? You have 6 chances.');

// for (let i = 1; i < guesses; i++) {
//   if (qSevenGuess === 'tomatoes' || qSevenGuess === 'cashews') {
//     console.log(qSevenGuess);
//     alert('Correct! They are yucky.');
//     i = 10;
//   } else if (qSevenGuess !== 'tomatoes' || qSevenGuess === 'cashews' ) {
//     // while (qSevenGuess !== 'tomatoes') {
//     //   console.log(qSevenGuess);
//     qSevenGuess = prompt('Incorrect, Guess again - pineapple, tomatoes, cashews, olives, peanut butter, cucumbers, lime');
//     // }
//   }
//   if (i === 5) {
  //     alert('Sorry, you ran out of turns.');
  //   }
  // }
  
  
  let foods = ['pineapple', 'shrimp', 'cashews', 'cucumbers', 'lime'];
  
  for(let i = 0; i < foods.length; i++){
    if(foods[i] === qSevenGuess) {
      alert ('Correct! I like them.');
      score++;
      break;
    } else {
      qSevenGuess = prompt ('Incorrect, Guess again. Options are: rice, cheese, pineapple, shrimp, tortilla chips, lime, cucumbers, cashews, bread, chocolate');
    }
    if (i === 4) {
      alert('Sorry, you ran out of turns. The possible answers were pineapple, shrimp, cashews, cucumbers, and lime.');
    }
  }
}
questionSeven();


function finalScore(){
// TODO: track total number of correct answers, tell user their score out of 7 questions.

console.log(score);
alert (`You got ${score} correct out of 7 questions.`)
}
finalScore();




