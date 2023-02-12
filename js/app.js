'use strict';

console.log('hello world');
let score = 0;

function introPrompt(){
  let userName = prompt('What is your name?');
  alert(`Welcome, ${userName}! Are you up for a guessing game? Please answer the following 7 questions.`);
}
introPrompt();

function questionOne(){
  let qOneGuess = prompt('1. Do I have a dog?').toLowerCase();

  if (qOneGuess === 'yes' || qOneGuess === 'y') { 
    alert('I wish! Unfortunately, the answer is no.');
  } else if (qOneGuess === 'no' || qOneGuess === 'n') {
    alert('Tragically, you are correct.');
    score++;
  }
}
questionOne();

function questionTwo(){
  let qTwoGuess = prompt('2. Do I like Beyoncé?').toLowerCase();
  if (qTwoGuess === 'yes' || qTwoGuess === 'y') {
    alert('Wrong. I LOVE and am basically obsessed with Beyoncé.');
  } else if (qTwoGuess === 'no' || qTwoGuess === 'n') {
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

function questionSix(){
  let attempts = 4;
  let qSixGuess = prompt('6. How many tattoos do I have? Guess a number 0-5; You have 4 chances.');
  for (let i = 0; i < attempts; i++) {
    if (Number(qSixGuess) === 1) {
      alert('Correct! Just the one for now.');
      score++;
      i = 10; //any number higher than 4
    }
    else if (qSixGuess < 1) {
      qSixGuess = prompt('Too low! Guess again.');
    }
    else if (qSixGuess > 1) {
      qSixGuess = prompt('Too high! Guess again.');
    }
    if (i === 3) {
      alert('Sorry, you ran out of turns, the correct answer is 1.');
    }
  }
}
questionSix();

function questionSeven(){
  let qSevenGuess = prompt('7. Guess one of my favorite foods - you have 6 attempts. Guess from the following: rice, cheese, pineapple, shrimp, tortilla chips, lime, cucumbers, cashews, bread, chocolate').toLowerCase();
  let foods = ['pineapple', 'shrimp', 'cashews', 'cucumbers', 'lime'];
  for (let i = 0; i < foods.length; i++){
    if(foods[i] === qSevenGuess) {
      alert ('Correct! I like them.');
      score++;
      break;
    } else {
      qSevenGuess = prompt ('Incorrect, Guess again. Options are: rice, cheese, pineapple, shrimp, tortilla chips, lime, cucumbers, cashews, bread, chocolate').toLowerCase();
    }
    if (i === 4) {
      alert('Sorry, you ran out of turns. The possible answers were pineapple, shrimp, cashews, cucumbers, and lime.');
    }
  }
}
questionSeven();

function finalScore(){
  console.log(score);
  alert(`You got ${score} correct out of 7 questions.`);
}
finalScore();




