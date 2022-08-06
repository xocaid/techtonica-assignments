//Adding Page Break
let br = document.createElement('br');
let pBr = document.getElementById('ingredients');
pBr.appendChild(br);

//Adding new paragraph to end of Ingredients
let p1 = document.createElement('p');
p1.setAttribute = ('id', 'paragraph1')
document.body.appendChild(p1);
let p1Text = document.createTextNode("You can add or remove any ingredients you want.");
ingredients.appendChild(p1Text);


//Adding Parsley Img Under Ingredients
let parsleyImg = document.createElement('img');
parsleyImg.setAttribute('id', 'parsleyPhoto');
parsleyImg.setAttribute('src', 'https://cdn-prod.medicalnewstoday.com/content/images/articles/284/284490/parsley.jpg');
parsleyImg.setAttribute('height', '200px');
parsleyImg.setAttribute('width', '100px');
parsleyImgs.appendChild(parsleyImg);

//Adding Lemon Img Under Ingredients
let lemonImg = document.createElement('img');
lemonImg.setAttribute('id', 'lemonPhoto');
lemonImg.setAttribute('src', 'https://media.istockphoto.com/photos/fresh-lemons-on-white-picture-id1325373330?b=1&k=20&m=1325373330&s=170667a&w=0&h=jKXvo3WB6MvVsCNHWMe5b3ZVBqDEqmhmYfngkxGVmc4=');
lemonImg.setAttribute('height', '200px');
lemonImg.setAttribute('width', '100px');
lemonImgs.appendChild(lemonImg);

//Adding Garlic Img Under Ingredients
let garlicImg = document.createElement('img');
garlicImg.setAttribute('id', 'garlicPhoto');
garlicImg.setAttribute('src', 'https://media.istockphoto.com/photos/close-up-of-purple-garlic-bunch-picture-id104822116?k=20&m=104822116&s=612x612&w=0&h=ulPybvZLaIW7i5efNFi54HD2t70qsYm_MDNRYh3tERE=');
garlicImg.setAttribute('height', '200px');
garlicImg.setAttribute('width', '100px');
garlicImgs.appendChild(garlicImg);

//BUTTON Ingredient
let ingbtn = document.createElement('BUTTON');
ingbtn.setAttribute('class','button');
ingbtn.setAttribute('id','ingredientbtn');
bodyTest.appendChild(ingbtn);
let ingbtnText = document.createTextNode("Ingredients");
ingbtn.appendChild(ingbtnText);

//BUTTON Ingredient - Event Listener
let btnIngListener = document.getElementById('ingredientbtn');
btnIngListener.addEventListener("click", mybtnIngListener);
function mybtnIngListener(){
    document.getElementsByClassName('bodyClass').innerHTML = "TESTING TEXT";
}
//BUTTON Cooking Instructions
let cookbtn = document.createElement('BUTTON');
ingbtn.setAttribute('class','button1');
ingbtn.setAttribute('id','cookingbtn');
bodyTest.appendChild(cookbtn);
let cookbtnText = document.createTextNode("Cooking Instructions");
cookbtn.appendChild(cookbtnText);

//BUTTON Cooking Instructions - Event Listener
let btnCookListener = document.getElementById('cookingbtn');
btnCookListener.addEventListener("click", mybtnCookListener);
function mybtnCookListener(){
    document.getElementsByClassName('bodyClass').innerHTML = "TESTING TEXT";
}