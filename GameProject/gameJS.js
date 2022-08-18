//GAME: Guess my Number
//INPUt: guess number between 1-100
//number cannot be lower than 0 or greater than 100
//print/display a RANDOM number between 1-100
//IF guessed correctly : print onto page congratulations, you guessed numX
//IF guessed incorrectly: print onto page better luck next time


//console.log to see what part of the code its reaching & for HTML
//can create a submit button w. form or create a button and add event listener to it

// function guessANumber() {
//   //generating the program's random number
//   let randomNum = Math.floor(Math.random() * 100)
//   console.log(randomNum)
//   //user's input, changed to a Number
//   let inputNum = Number(userGuess);

//   //IF Statement if guessed correctly/incorrectly
//   if (inputNum === randomNum) {
//     return "Congratulations you correctly guessed" + randomNum;
//   } else {
//     return "Better luck next time!"
//   }
// }
// console.log(guessANumber())

//create BREAK 
let br = document.createElement("br");

//*********DIV**************8
let gameDiv = document.createElement('div');
gameDiv.setAttribute('id', 'myGameDiv');
gameDiv.setAttribute('class', 'gameDivContent');
document.body.appendChild(gameDiv);

//*******FORM*********
let gameForm = document.createElement("FORM");
gameForm.setAttribute('id', 'myGameForm');
myGameDiv.appendChild(gameForm);

//Add User Guessinput text box
let userInputBox = document.createElement("INPUT");
userInputBox.setAttribute('type', 'text');
userInputBox.setAttribute('id', 'userGuess');
userInputBox.setAttribute('placeholder', 'Enter your guess');
userInputBox.setAttribute('required', '');
document.getElementById('myGameForm').appendChild(userInputBox);

//Create Submit Button
let submitBtn = document.createElement('INPUT');
submitBtn.setAttribute('type', 'submit');
submitBtn.setAttribute('value', 'Submit Your Guess');
gameForm.appendChild(br.cloneNode());
gameForm.appendChild(submitBtn);

//Create Reset Button
let resetBtn = document.createElement('INPUT');
resetBtn.setAttribute('type', 'reset');
resetBtn.setAttribute('id', 'resetGuess');
resetBtn.setAttribute('value', 'Reset');
gameForm.appendChild(br.cloneNode());
gameForm.appendChild(resetBtn);

//******PARAGRAPH******
let gameP = document.createElement('p');
gameP.setAttribute('id', 'myGameP');
gameDiv.appendChild(gameP);

//Add eventListener to Submit Button
gameForm.addEventListener('submit', (e)=>{
e.preventDefault();
  let userGuessPrint = document.getElementById('userGuess').value;
  let printTextPg = document.querySelector('p');
  printTextPg.innerHTML= `${userGuessPrint}`;//Prints user's Guess to page
});

//Reset Method for Reset Button
document.getElementById('resetGuess').reset();


