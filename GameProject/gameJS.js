//GAME: Guess my Number
//INPUt: guess number between 1-100
//create a button to submit guess
//print/display a RANDOM number between 1-100
//IF guessed correctly : print onto page congratulations, you guessed numX
//IF guessed incorrectly: print onto page better luck next time
//create a button to refresh everytime game concludes


//will need to get a random number use Math.floor & math.Random
//will need if/else statement 
//print to console/page
//eventListener

function guessANumber(){
  //generating the program's random number
  let randomNum = Math.floor(Math.random() * 100)
  //user's input, changed to a Number
  let inputNum = Number(userGuess);

//IF Statement if guessed correctly/incorrectly
  if(inputNum === randomNum){
    return "Congratulations you correctly guessed" + randomNum; 
  }else{
    return "Better luck next time!"
  }
}
guessANumber()

//create BREAK 
let br = document.createElement("br");

//Add input text box
let userInputBox = document.createElement("INPUT");
userInputBox.setAttribute('type', 'text');
userInputBox.setAttribute('placeholder', 'Enter your guess');
document.body.appendChild(userInputBox);

//Add Submit Button
let submitBtn = document.createElement('INPUT');
submitBtn.setAttribute('type', 'submit');
submitBtn.setAttribute('value', 'Submit Guess');
document.body.appendChild(submitBtn);