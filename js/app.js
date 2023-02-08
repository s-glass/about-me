'use strict';

console.log('hey world');

// TODO: Get users name - prompt and alert greet back to user

let userName = prompt('What is your name?');

alert(`Welcome, ${userName}! Are you up for a guessing game? Please answer yes or no to the following 5 questions.`);


// TODO: prompt 5 yes/no or y/n questions for the user to guess and alert when they are correct or incorrect

let qOneGuess = prompt('Do I have a dog?').toLowerCase();

if(qOneGuess === 'yes' || qOneGuess === 'y'){
//console.log('correct')  
  alert('I wish! Unfortunately, the answer is no.');
} else if(qOneGuess === 'no' || qOneGuess === 'n'){
//console.log('incorrect')
  alert ('Tragically, you are correct.');
}

let qTwoGuess = prompt('Do I like Beyoncé?').toLowerCase();

if(qTwoGuess === 'yes' || qTwoGuess === 'y'){
//console.log('incorrect')  
  alert('Wrong. I LOVE and am basically obsessed with Beyoncé.');
} else if(qTwoGuess === 'no' || qTwoGuess === 'n'){
//console.log('correct')  
  alert ('Correct! I do not merely like Beyoncé, I LOVE her.');
}

let qThreeGuess = prompt('Have I lived abroad?').toLowerCase();

if(qThreeGuess === 'yes' || qThreeGuess === 'y'){
  alert('Correct! Mexico and Chile so far.');
} else if(qThreeGuess === 'no' || qThreeGuess === 'n'){
  alert ('Wrong. I have a very strong Sagittarius placement, so I have definitely lived abroad.');
}

let qFourGuess = prompt('Is Jawbreaker my favorite film of the 2000s?').toLowerCase();

if(qFourGuess === 'yes' || qFourGuess === 'y'){
  alert('Wrong! It is Mean Girls.');
} else if(qFourGuess === 'no' || qFourGuess === 'n'){
  alert ('Correct! It is Mean Girls.');
}

let qFiveGuess = prompt('Have I ever played a contact sport?').toLowerCase();

if(qFiveGuess === 'yes' || qFiveGuess === 'y'){
  alert('Correct - I played rugby in college.');
} else if(qFiveGuess === 'no' || qFiveGuess === 'n'){
  alert ('Wrong - I played rugby in college.');
}


// TODO: give them a final message with their name in the alert 


alert(`Thanks for playing, ${userName}!`);
