let br = document.createElement("br");
let myImg = document.createElement('img');
myImg.setAttribute('id', 'myImage');
myImg.setAttribute('src', 'https://media.licdn.com/dms/image/D5603AQHi6rs37ccrmg/profile-displayphoto-shrink_400_400/0/1646286190314?e=1692230400&v=beta&t=dokKAcFYNYP8e_JP9H_sPZzUObc1Fev8SM3DPoDRgio');
document.body.appendChild(myImg);

//*************ABOUT ME*********
//Add Collapsible Button aboutMe
let btn1 = document.createElement("BUTTON");
btn1.setAttribute('class', 'collapsible');
btn1.setAttribute('id', 'btnAboutMe');
let btn1Text = document.createTextNode("About Me");
btn1.appendChild(btn1Text);
document.body.appendChild(btn1);

//Add new Div:aboutMe
let newDiv1 = document.createElement('div');
newDiv1.setAttribute('id', 'aboutMe');
newDiv1.setAttribute('class', 'content')
document.body.appendChild(newDiv1);

//Adding P to DIV: About Me
let pAboutMe = document.createElement('p');
pAboutMe.setAttribute('id', 'pAboutMe');
aboutMe.appendChild(pAboutMe);
let pAboutMeText = document.createTextNode("Hi all, my name is Xochitl and thank you for visting my page and this is my page.");
pAboutMe.appendChild(pAboutMeText);

//*************ONLINE RESUME*********
//Add Collapsible Button onlineResume
let btn2 = document.createElement("BUTTON");
btn2.setAttribute('class', 'collapsible');
btn2.setAttribute('id', 'btnonlineResume');
let btn2Text = document.createTextNode("Online Resume");
btn2.appendChild(btn2Text);
document.body.appendChild(btn2);

//Add new Div: onlineResume
let newDiv2 = document.createElement('div');
newDiv2.setAttribute('id', 'onlineResume');
newDiv2.setAttribute('class', 'content')
document.body.appendChild(newDiv2);

//Adding P to DIV: onlineResume
let pResume = document.createElement('p');
pResume.setAttribute('id', 'presume');
onlineResume.appendChild(pResume);
let pResumeText = document.createTextNode("Work experience: Short description");
pResume.appendChild(pResumeText);

//*************CODE EXPERIENCE*********
//Add Collapsible Button Code Experience
let btn3 = document.createElement("BUTTON");
btn3.setAttribute('class', 'collapsible');
btn3.setAttribute('id', 'btnCodeExp');
let btn3Text = document.createTextNode("Code Experience/Projects");
btn3.appendChild(btn3Text);
document.body.appendChild(btn3);

//Add new Div: Code Experience
let newDiv3 = document.createElement('div');
newDiv3.setAttribute('id', 'codeExperience');
newDiv3.setAttribute('class', 'content')
document.body.appendChild(newDiv3);

//Adding P to btn: codeExperience
let pCodeExp = document.createElement('p');
pCodeExp.setAttribute('id', 'pCodeExperience');
codeExperience.appendChild(pCodeExp);
let pCodeExpText = document.createTextNode("CODE experience: LIST coding experience entries & past work experience you can apply to tech job.");
pCodeExp.appendChild(pCodeExpText);

//*************CONTACT ME*********
//Add Collapsible Button Contact Me
let btn4 = document.createElement("BUTTON");
btn4.setAttribute('class', 'collapsible');
btn4.setAttribute('id', 'btncontactMe');
let btn4Text = document.createTextNode("Contact Me");
btn4.appendChild(btn4Text);
document.body.appendChild(btn4);

//Add new Div: contactMe
let newDiv4 = document.createElement('div');
newDiv4.setAttribute('id', 'contactMe');
newDiv4.setAttribute('class', 'content')
document.body.appendChild(newDiv4);

//Adding P to btn: contactMe
let pContactMe = document.createElement('p');
pContactMe.setAttribute('id', 'pContactMes');
contactMe.appendChild(pContactMe);
let pContactMeText = document.createTextNode("Email:my@email.com");
let pContactMeText1 = document.createTextNode("Phone #: (123)555-4567");
pContactMe.appendChild(pContactMeText);
pContactMe.appendChild(br.cloneNode());
pContactMe.appendChild(pContactMeText1);

//*************SUBSCRIBE*********
//Add Collapsible Button subscribe
let btn5 = document.createElement("BUTTON");
btn5.setAttribute('class', 'collapsible');
btn5.setAttribute('id', 'btnSubscribe');
let btn5Text = document.createTextNode("Subscribe");
btn5.appendChild(btn5Text);
document.body.appendChild(btn5);

//Add new Div: subscribe
let newDiv5 = document.createElement('div');
newDiv5.setAttribute('id', 'subscribe');
newDiv5.setAttribute('class', 'content')
document.body.appendChild(newDiv5);

//********FORM*************
//Add Form to contactMe
let pgForm = document.createElement("FORM");
pgForm.setAttribute('id', 'myPgForm');
//pgForm.setAttribute('method', 'POST');
//pgForm.setAttribute('action', '#');//NoValidate????
subscribe.appendChild(pgForm);

//Add fullName input box
let pgInput1 = document.createElement("INPUT");
pgInput1.setAttribute('type', 'text');
pgInput1.setAttribute('id', 'fullName');
pgInput1.setAttribute('name', 'fullName');
pgInput1.setAttribute('placeholder', 'i.e: John Smith');
pgInput1.setAttribute('required', '');
let pgInput1Txt = document.createTextNode("Full Name: ");
pgForm.appendChild(pgInput1Txt);
document.getElementById('myPgForm').appendChild(pgInput1);


//Add emailAddress input box
let pgInput2 = document.createElement("INPUT");
pgInput2.setAttribute('type', 'text');
pgInput2.setAttribute('id', 'emailAddress');
pgInput2.setAttribute('name', 'emailAddress');
pgInput2.setAttribute('placeholder', 'JSmith@example.com');
pgInput2.setAttribute('required', '');
pgForm.appendChild(br.cloneNode());
let pgInput2Txt = document.createTextNode("Email: ");
pgForm.appendChild(pgInput2Txt);
document.getElementById('myPgForm').appendChild(pgInput2);

//Add phoneNumber input box
let pgInput3 = document.createElement("INPUT");
pgInput3.setAttribute('type', 'text');
pgInput3.setAttribute('id', 'phoneNumber');
pgInput3.setAttribute('name', 'phoneNumber');
pgInput3.setAttribute('placeholder', '(987)555-1234');
pgForm.appendChild(br.cloneNode());
let pgInput3Txt = document.createTextNode("Phone #: ");
pgForm.appendChild(pgInput3Txt);
document.getElementById('myPgForm').appendChild(pgInput3);

//Add address input box
let pgInput4 = document.createElement("INPUT");
pgInput4.setAttribute('type', 'text');
pgInput4.setAttribute('id', 'address');
pgInput4.setAttribute('name', 'address');
pgInput4.setAttribute('placeholder', '515 Apple St.');
pgForm.appendChild(br.cloneNode());
let pgInput4Txt = document.createTextNode("Address: ");
pgForm.appendChild(pgInput4Txt);
document.getElementById('myPgForm').appendChild(pgInput4);


//Create Submit Button
let btnSubmit = document.createElement('INPUT');
btnSubmit.setAttribute('type', 'submit');
btnSubmit.setAttribute('value', 'SUBMIT');
//btnSubmit.setAttribute('formTarget', '_blank');
pgForm.appendChild(br.cloneNode());
pgForm.appendChild(btnSubmit);



//Accessing BUTTONS via shared Class = "collapsible"
let collapse = document.getElementsByClassName("collapsible");
//For Loop runs through each Button w/Class = "collapsible"
for (let i = 0; i < collapse.length; i++) {
  collapse[i].addEventListener("click", function () {//adding eventListener to button
    this.classList.toggle("active");//adding toggle on/off 
    let content = this.nextElementSibling; //Property returns the next element in the same tree so the next button 
    if (content.style.display === "block") {//display allows show/hide an element
      content.style.display = "none";//none hides entire element aka won't be displayed
    } else {
      content.style.display = "block";//element is rendered a block-level element, will be displayed
    }
  });
}

//Add Event Listener to Submit button in Form
pgForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  let fullNamePrint = document.getElementById('fullName').value;
  let emailPrint = document.getElementById('emailAddress').value;
  //console.log(`Full Name: ${fullNamePrint} and Email: ${emailPrint}`);
  alert(`Thank you for subscribing ${fullNamePrint}. We will add your email, ${emailPrint}, to our email list.`);
});
//Is there a way to add print into/below the submit button or make the form disappear and print results?
