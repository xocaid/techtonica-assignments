//GAME: Guess my Number
//create BREAK 
let br = document.createElement("br");

//*********DIV**************
let gameDiv = document.createElement('div');
gameDiv.setAttribute('id', 'myGameDiv');
gameDiv.setAttribute('class', 'gameDivContent');
document.body.appendChild(gameDiv);

//*******FORM*********
let gameForm = document.createElement("FORM");
gameForm.setAttribute('id', 'myGameForm');
myGameDiv.appendChild(gameForm);

//Add Range LOW Input Text Box
let RangeInputLow = document.createElement("INPUT");
RangeInputLow.setAttribute('type', 'text');
RangeInputLow.setAttribute('id', 'rangeLow');
RangeInputLow.setAttribute('placeholder', 'Enter Low Range');
document.getElementById('myGameForm').appendChild(RangeInputLow);

//Add Range HIGH Input Text Box
let RangeInputHigh1 = document.createElement("INPUT");
RangeInputHigh1.setAttribute('type', 'text');
RangeInputHigh1.setAttribute('id', 'rangeHigh');
RangeInputHigh1.setAttribute('placeholder', 'Enter High Range');
document.getElementById('myGameForm').appendChild(RangeInputHigh1);

//Add User Guess Input Text Box
let userInputBox = document.createElement("INPUT");
userInputBox.setAttribute('type', 'text');
userInputBox.setAttribute('id', 'userGuess');
userInputBox.setAttribute('placeholder', 'Enter your guess');
userInputBox.setAttribute('required', '');
gameForm.appendChild(br.cloneNode());
document.getElementById('myGameForm').appendChild(userInputBox);

//Create Submit Button
let submitBtn = document.createElement('INPUT');
submitBtn.setAttribute('type', 'submit');
submitBtn.setAttribute('value', 'Submit Your Guess');
gameForm.appendChild(br.cloneNode());
gameForm.appendChild(submitBtn);

//Create Reset Button
let resetBtn = document.createElement('BUTTON');
resetBtn.setAttribute('type', 'reset');
resetBtn.setAttribute('id', 'reset');
resetBtn.innerText = "Reset";
gameForm.appendChild(br.cloneNode());
gameForm.appendChild(resetBtn);

//******User Guess Paragraph Display on HTML******
//gameP
let gameP = document.createElement('p');
gameP.setAttribute('id', 'myGameP');
gameDiv.appendChild(gameP);

//******Random Number Generated Paragraph Display on HTML******
//gameP1
let gameP1 = document.createElement('p');
gameP1.setAttribute('id', 'myGameP1');
gameDiv.appendChild(gameP1);

//******Not A Valid Guess Paragraph Display on HTML******
//gameP2
let gameP2 = document.createElement('p');
gameP2.setAttribute('id', 'myGameP2');
gameDiv.appendChild(gameP2);

//******Not A Valid Guess Paragraph Display on HTML******
//gameP3
let gameP3 = document.createElement('p');
gameP3.setAttribute('id', 'gameP3');
gameDiv.appendChild(gameP3);

//Add eventListener to Reset Button
resetBtn.addEventListener('click', reset)
function reset() {
  document.getElementById('userGuess').innerHTML = '';
  gameP.innerHTML = "";
  gameP1.innerHTML = "";
  gameP3.innerHTML = "";
//   gameRandomNumber = generateRandomNum();
// console.log(gameRandomNumber);
};

//Generates Random Number
function generateRandomNum(low, high) {
  //Math.floor(Math.random() * ( 31)) + min;
  //let generatedNum = Math.floor(Math.random() * 101)
  console.log(low)
  console.log(high)
  let generatedNum = Math.floor(Math.random() * ( high-low +1)) + low;
  console.log(generatedNum)
  return generatedNum;

}

// let gameRandomNumber = generateRandomNum();
// console.log(gameRandomNumber); //prints into console

function enterNum(guess, randomNum, low, high) {
  if (isNaN(guess)) {
    return "Letters are not allowed";
  } else {
    if (guess >= low && guess <= high) {//could be +1 
      gameP3.innerHTML = compareNums(guess, randomNum)
      return "";
    } else {
      return `Please enter a number between ${low} - ${high}.`;
    }
  }
}

function compareNums(guess, randomNum) {

  if (randomNum === Number(guess)) {
    return "Congratulations you guessed correctly!";
  } else {
    return "Better luck next time.";
  }
}

//Add eventListener to Submit Button
gameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let userRangeHigh = Number(document.getElementById('rangeHigh').value);
  let userRangeLow = Number(document.getElementById('rangeLow').value);
  let userGuessPrint = Number(document.getElementById('userGuess').value);
  let gameRandomNumber = generateRandomNum(userRangeLow,userRangeHigh);
  gameP2.innerHTML = enterNum(userGuessPrint, gameRandomNumber, userRangeLow, userRangeHigh);
  gameP.innerHTML = `Your guess was: ${userGuessPrint}`;
  gameP1.innerHTML = `The random number was: ${gameRandomNumber}`;

});


//in order to reset/get a new number after refresh need to put it in reset or sbumit event listener

  //INPUt: guess number between 1-100
//number cannot be lower than 0 or greater than 100
//number cannot be string or empty
//print/display a RANDOM number between 1-100
//IF guessed correctly : print onto page congratulations, you guessed numX
//IF guessed incorrectly: print onto page better luck next time


//console.log to see what part of the code its reaching & for HTML
//can create a submit button w. form or create a button and add event listener to it

//**********NOTES*******************
//Create Reset Button
// let resetBtn = document.createElement('BUTTON');
// resetBtn.setAttribute('type', 'reset');
// resetBtn.setAttribute('id', 'reset');
// resetBtn.setAttribute('value', 'RESET');//DELETED this because attribute VALUE is ONLY used INPUT elements, for instance Submit Input element (it's not a button)
// resetBtn.innerText= "Reset";
// gameForm.appendChild(br.cloneNode());
// gameForm.appendChild(resetBtn);

//Add eventListener to Reset Button
//Line below is not linking to the reset button, you can NOT click a form, you can ONLY submit a form, that is why submit can use format below.
//We can use CLICK with RESET because it is what we want & we are connecting it to the RESET button
// gameForm.addEventListener('click', reset);
// resetBtn.addEventListener('click', reset)//click because that's what we want & connecting it to 
// function reset(){
//   document.getElementById('userGuess').innerHTML = ';'
// };

// //FUNCTION: Broken Down
// //Generates Random Number
// function generateRandomNum(){
//   let generatedNum = Math.floor(Math.random() * 101)
//     return generatedNum;
//   }
// //generateRandomNum();//don't need it here because I'm creating a number twice. & didn't save it anywhere
// //saved random number in a variable
// let gameRandomNumber = generateRandomNum();//needs to be declared at the beginning
// // let gameRandomNumberTxt = document.querySelector('p');don't need it becaus alerady have it assigned to a p
// //gameRandomNumberTxt.innerHTML = `The random number was: ${gameRandomNumber}`; //because I hav eit and assigned it I don't need query selector

// //FUNCTION: Broken Down
// //Generates Random Number
// function generateRandomNum(){
//   let generatedNum = Math.floor(Math.random() * 101)
//     return generatedNum;
//   }
// let gameRandomNumber = generateRandomNum();
// console.log(gameRandomNumber);
// //Confirm if number user input is a valid number/entry & between 1-100

//    let userGuessNum = document.getElementById('userGuess').value
//     let userGuessActualNum = Number(userGuessNum);

//   function enterNum() {
//     // let userGuessNum = document.getElementById('userGuess').value
//     // let userGuessActualNum = parseInt(userGuessNum);//SCOPE!!! let in any fucntion its function scope - can access locally within function not outside, so name wouldn't matter
//     console.log(userGuessActualNum);
//     console.log(userGuessNum);
//     if (userGuessActualNum > 0 && userGuessActualNum < 101) {
//       return "This is a valid entry."//return does noot show up for viewer
//     } else if(isNaN(userGuessNum)===true){
//       return "Letters are not allowed"
//     }else{
//       return "Please enter a number between 1 - 100."
//     }

  //}
// //  console.log(enterNum())//would have to go inside eventListener to show up once you click submit...right now its showing up before you input anything.

// //validating the form - validating the input is valid/not valid
// //If user input is a NUMBER, check it matches random number generated
//   function compareNums(){
//     // let randomgenerated = generateRandomNum(); get rid off because it is creating a new number here and won't use this one - this one isn't the one you want to compare
//     // console.log(randomgenerated)
//     // let userGuessNum = enterNum()//entering a fx
//     // let userGuessNum = document.getElementById('userGuess').value
//     if(gameRandomNumber  === userGuessActualNum){
//       console.log("Congratulations you guessed correctly!");
//     }else{
//       console.log("Better luck next time.")
//     }
//   }
//   // compareNums()//where you have the function doesn't matter, its where its executed

//   //Add eventListener to Submit Button
// gameForm.addEventListener('submit', (e)=>{
//   e.preventDefault();
//   console.log(enterNum());//runs & prints it
//   compareNums();
//   //User's Guess Displayed on HTML
//     let userGuessPrint = document.getElementById('userGuess').value;
//     // let userGuessPrintTxt = document.querySelector('p');
//     // userGuessPrintTxt.innerHTML= `Your guess was: ${userGuessPrint}`;//Prints user's Guess to page//overwrites everything
//     userGuessP.innerHTML = `Your guess was: ${userGuessPrint}`;
//     randomNumGeneratedP.innerHTML =`The random number was: ${gameRandomNumber}`;//check the paragraph order in JS DOM

// //Game's generated Number
// // let gameRandomNumber = generateRandomNum();
// // let gameRandomNumberTxt = document.querySelector('p');
// // gameRandomNumberTxt.innerHTML = `The random number was: ${gameRandomNumber}`;

//   });