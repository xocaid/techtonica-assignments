class Account {
  constructor(name, balance = 0) {
    this.name = name;
    this.balance = balance;
  };
  deposit(depo) {
    this.balance += depo;
    return "Account balance is " + this.balance;
  };
  describe() {
    return this.name + "'s bank account has a balance of $" + this.balance;
  };
  transfer(name, amtTransfer) {
    console.log(this.name + "'s blance is $" + (this.balance -= amtTransfer));
    return this.name + " will send " + name + "  a transfer amount of $ " + amtTransfer;
  };
}

let accountHolder1 = new Account("Billy");
let accountHolder2 = new Account("Rosie");
let accountHolder3 = new Account("Jack");
let accountHolder4 = new Account("Jill");


console.log(accountHolder1.name);
console.log(accountHolder2.balance);
console.log(accountHolder3.deposit(23));
console.log(accountHolder1.transfer(accountHolder3.name, 10));
console.log(accountHolder2.transfer(accountHolder3.name, 20));

//DOM Elements
//changed BODY FONT
document.body.style.fontFamily = "Helvetica, sans-serif";


//DEPOSIT Input Text Box
let inputTextBox1 = document.createElement("INPUT");
inputTextBox1.setAttribute("type", "text");
inputTextBox1.setAttribute("placeholder", "Deposit Amount");
document.body.appendChild(inputTextBox1);

//PAGE BREAK
document.write("<br>");

//ADD PARAGRAPH FOR DEPOSIT BUTTON
let pbtn1 = document.createElement('p');
pbtn1.setAttribute('id', 'pBtn1');
document.body.appendChild(pbtn1);

//Deposit Button
let btn1 = document.createElement("BUTTON");
btn1.setAttribute('id','depositbtn');
document.body.appendChild(btn1);
let btn1Text = document.createTextNode("Deposit");
btn1.appendChild(btn1Text);
document.write("<br>");

//ADD EVENT LISTENER TO DEPOSIT BUTTON
let btn1Listener = document.getElementById('depositbtn');
btn1Listener.addEventListener("click", mybtn1Listener);
function mybtn1Listener(){
  document.getElementById('pBtn1').innerHTML = "DEPOSIT $";
}

//PAGE BREAK
document.write("<br>");
document.write("<br>");

//WITHDRAW Input Text Box
let inputTextBox2 = document.createElement("INPUT");
inputTextBox2.setAttribute("type", "text");
inputTextBox2.setAttribute("placeholder", "Withdrawal Amount");
document.body.appendChild(inputTextBox2);

//PAGE BREAK
document.write("<br>");

//ADD PARAGRAPH FOR WITHDRAW BUTTON
let pbtn2 = document.createElement('p');
pbtn2.setAttribute('id', 'pBtn2');
document.body.appendChild(pbtn2);

//Withdraw Button
let btn2 = document.createElement("BUTTON");
btn2.setAttribute('id','withdrawbtn');
document.body.appendChild(btn2);
let btn2Text = document.createTextNode("Withdraw");
btn2.appendChild(btn2Text);

//ADD EVENT LISTENER TO DEPOSIT BUTTON
let btn2Listener = document.getElementById('withdrawbtn');
btn2Listener.addEventListener("click", mybtn2Listener);
function mybtn2Listener(){
  document.getElementById('pBtn2').innerHTML = "WITHDRAW $";
}
//PAGE BREAK
document.write("<br>");
document.write("<br>");

//CHANGES FONT COLOR FOR BUTTON TEXT
document.getElementById('depositbtn').style.color = "#330033";
document.getElementById('withdrawbtn').style.color = "#330033";

//CHANGES FONT COLOR FOR EVENT LISTENER TEXT
document.getElementById('pBtn1').style.color = "#2F4F4F";
document.getElementById('pBtn2').style.color = "#2F4F4F";

//ADD FOOTER
let foot = document.createElement("FOOTER");
foot.setAttribute('id', 'footer1');
document.body.appendChild(foot);
let footText = document.createTextNode("FOOTER");
foot.appendChild(footText);

//ADD BACKGROUND COLOR TO FOOTER
document.getElementById('footer1').style.background = "#dcd0ff";

//TOGGLE https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp


/*function AccountHolder(name, balance = 0) {
  this.name = name;
  this.balance = balance;
  this.deposit = function(depo) {
    this.balance += depo;
    return "Account balance is " + this.balance;
  };
  this.describe = function() {
    return this.name + "'s bank account has a balance of $" + this.balance;
  };
  this.transfer = function(name, amtTransfer) {
    return this.name + " will send " + name + "  a transfer amount of $ " + amtTransfer;
  };
}

let accountHolder1 = new AccountHolder("Billy", 100);
let accountHolder2 = new AccountHolder("Rosie", 100);
let accountHolder3 = new AccountHolder("Jack", 100);
let accountHolder4 = new AccountHolder("Jill", 100);


console.log(accountHolder1.name);
console.log(accountHolder2.balance);
console.log(accountHolder3.deposit(23));
console.log(accountHolder1.transfer(accountHolder3.name, 10));
console.log(accountHolder2.transfer(accountHolder3.name, -20));*/

//use a constructor and class or else other language will throw error
