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
//Add Collapsible Button Code Experience
let btn4 = document.createElement("BUTTON");
btn4.setAttribute('class', 'collapsible');
btn4.setAttribute('id', 'btncontactMe');
let btn4Text = document.createTextNode("Contact Me");
btn4.appendChild(btn4Text);
document.body.appendChild(btn4);

//Add new Div: Code Experience
let newDiv4 = document.createElement('div');
newDiv4.setAttribute('id', 'contactMe');
newDiv4.setAttribute('class', 'content')
document.body.appendChild(newDiv4);

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