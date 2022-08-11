// //Add DIV
// let newDiv1 = document.createAttribute('div');
// newDiv1.setAttribute('id', 'smallMeBox');
// document.body.appendChild(newDiv1);
// let testText = document.createTextNode("Let's see what prints");
// newDiv1.appendChild(testText);

//Adding P to DIV: About Me
let pAboutMe = document.createElement('p');
pAboutMe.setAttribute('id', 'pAboutMe');
aboutMe.appendChild(pAboutMe);
let pAboutMeText = document.createTextNode("Hi all, my name is Xochitl and thank you for visting my page and this is my page.");
pAboutMe.appendChild(pAboutMeText);

//Adding P to DIV: onlineResume
let pResume = document.createElement('p');
pResume.setAttribute('id', 'presume');
onlineResume.appendChild(pResume);
let pResumeText = document.createTextNode("Work experience: Short description");
pResume.appendChild(pResumeText);

//Adding P to btn: codeExperience
let pCodeExp = document.createElement('p');
pCodeExp.setAttribute('id', 'pCodeExperience');
codeExperience.appendChild(pCodeExp);
let pCodeExpText = document.createTextNode("CODE experience: LIST coding experience entries & past work experience you can apply to tech job.");
pCodeExp.appendChild(pCodeExpText);

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



