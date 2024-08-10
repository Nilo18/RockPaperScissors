/*
document.title = 'Good Job!';
document.body.innerHTML = 'hello'; */


/*
console.log(document.title);
document.title = 'Changed';

document.body;
console.log(document.body);
console.log(typeof document.body);
console.log(document.body.innerHTML);

document.body.innerHTML = 'Changed';
document.body.innerHTML = '<button>Congratulations</button>' */



console.log(document.querySelector('button').innerHTML);
document.querySelector('button').innerHTML = 'Changed';

const buttonElement = document.querySelector('.js-button'); 
console.log(buttonElement);

function test(P) {
if (P) {
  buttonElement.textContent = 'Hello World';
 }
}

function subscribe () {
const buttonElem = document.querySelector('.js-subscribeButton');

if (buttonElem.innerText === 'Subscribe') {
  buttonElem.textContent = 'Subscribed';
  buttonElem.style.backgroundColor = 'rgb(237, 237, 237)';
  buttonElem.style.color = 'black';
 } else {
  buttonElem.textContent = 'Subscribe';
  buttonElem.style.backgroundColor = 'black';
  buttonElem.style.color = 'white';
  buttonElem.style.width = '160px';
  buttonElem.style.paddingLeft = '25px';
  buttonElem.style.paddingRight = '25px';
  buttonElem.style.width = '';
  buttonElem.style.paddingLeft = '';
  buttonElem.style.paddingRight = '';
 }
}


function handleCostKeyDown (event) {
  if (event.key === 'Enter') {
    calculatePrice(); 
  }
}

//ეს პარაგრაფია სადაც მესიჯი გამოდის
const totalCost = document.querySelector('.js-totalCost');
//აქედან ლოქალ სთორეჯში დასეივებული ღირებულება ამოდის
const costDisplay = localStorage.getItem('cost');
//აქედან პარაგრაფის ტექსტი იცვლება ლოქალ სთორეჯში დასეივებული ღირებულებით
//და თან 100 ზე იყოფა დოლარებში გადმოსაყვანად
totalCost.textContent = `$${costDisplay / 100}`;

function calculatePrice() {
  const inputElement = document.querySelector('.js-userInput');
  
  //აქედან ინპუტის სტრინგი რიცხვად კეთდება
  //და თან 100 ზე მრავლდება ცენტებში საანგარიშებლად რო წილადებმა არ აურიონ
  let cost = Number(inputElement.value) * 100;

  if (cost < 4000) {
    cost = cost + 1000;
  }
  
  //აქ ლოქალ სთორეჯში სეივდება
  localStorage.setItem('cost', cost);

  
  totalCost.innerHTML = `$${cost / 100}`;
}



const score = JSON.parse(localStorage.getItem('score'));
const jsScore = document.querySelector('.js-score');


jsScore.textContent = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;


function RPS (playerChoice) {
  const randomNumber = Math.random();

  let gameIcon = document.querySelector('.js-playerImage');

  let computerIcon = document.querySelector('.js-computerImage')

  const result = document.querySelector('.js-result');

  const moves = document.querySelector('.js-moves');

  gameIcon.value = ''
  computerIcon.value = ''


if (playerChoice === 'Rock') {
  gameIcon.src = './Assets/rock-emoji.png'
} else if (playerChoice === 'Paper') {
  gameIcon.src = './Assets/paper-emoji.png'
} else {
  gameIcon.src = './Assets/scissors-emoji.png'
}


if (playerChoice === 'Rock' && randomNumber >= 2/3 && randomNumber <= 1)  {
  score.wins += 1;
  computerIcon.src = './Assets/scissors-emoji.png'
  result.textContent = 'You win!';
}
  
  else if (playerChoice === 'Rock' && randomNumber >= 1/3 && randomNumber <= 2/3) {
  score.losses += 1;
  computerIcon.src = './Assets/paper-emoji.png'
  result.textContent = 'You Lose!'
} 
  
  else if (playerChoice === 'Rock' && randomNumber >= 0 && randomNumber <= 1/3) {
  score.ties += 1;
  result.textContent = 'Tie.'
  computerIcon.src = './Assets/rock-emoji.png'
}

// აქ იწყება ქაღალდი 

if (playerChoice === 'Paper' && randomNumber >= 2/3 && randomNumber <= 1) {
  score.losses += 1;
  result.textContent = 'You Lose!';
  computerIcon.src = './Assets/scissors-emoji.png'
} 
  
  else if (playerChoice === 'Paper' && randomNumber >= 1/3 && randomNumber <= 2/3) {
  score.ties += 1;
  result.textContent = 'Tie.'
  computerIcon.src = './Assets/paper-emoji.png'
}
  
  else if (playerChoice === 'Paper' && randomNumber >= 0 && randomNumber <= 1/3) {
  score.wins += 1;
  result.textContent = 'You win!'
  computerIcon.src = './Assets/rock-emoji.png'
}

// აქ იწყება მაკრატელი

if (playerChoice === 'Scissors' && randomNumber >= 2/3 && randomNumber <= 1) {
  score.ties += 1;
  result.textContent = 'Tie.'
  computerIcon.src = './Assets/scissors-emoji.png'
} 
  
  else if (playerChoice === 'Scissors' && randomNumber >= 1/3 && randomNumber <= 2/3) {
  score.wins += 1;
  result.textContent = 'You win!'
  computerIcon.src = './Assets/paper-emoji.png'
}
  
  else if (playerChoice === 'Scissors' && randomNumber >= 0 && randomNumber <= 1/3) {
  score.losses += 1;
  result.textContent = 'You lose!'
  computerIcon.src = './Assets/rock-emoji.png'
}
  

moves.textContent = gameIcon.value + computerIcon.value;   

localStorage.setItem('score', JSON.stringify(score));


if (playerChoice === 'Reset Score') {
  result.textContent = 'Score was reset.';
  jsScore.textContent = '' 
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
}


  jsScore.textContent = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}


let product = {
  name: 'shirt',
  ['delivery-time']: '1 day'
}


console.log(localStorage.setItem('test', JSON.stringify(test)));

const aButton =  document.querySelector('.js-button1')

console.log(aButton);

document.querySelector('.js-button2')
   .textContent = '9b done!'



function headsAndTails (choice) {
 const decision = document.querySelector('.decision');
 const heads = document.querySelector('.head').innerHTML;
 const tails = document.querySelector('.tail').innerHTML;
 
 if (choice === 'Heads') {
  decision.textContent = `You chose: ${heads}`;
 } else {
  decision.textContent = `You chose: ${tails}`;
 }
}

function nameDisplayer() {
  const name = document.querySelector('.js-nameInput').value;
  const displayText = document.querySelector('.js-nameDisplay');

  displayText.innerHTML = `Your name is: ${name}`;
}

function handleEnter(event) {
  if (event.key === 'Enter') {
    nameDisplayer();
  }
}


function textDetector () {
  const textDisplay = document.querySelector('.js-textDisplayer');
  const userInput2 = document.querySelector('.js-inputText').value;


  textDisplay.innerHTML = userInput2;
}


let cartQuantity = 0;

const displayParagraph = document.querySelector('.js-cartQuantityDisplay');
displayParagraph.textContent = `Cart quantity: ${cartQuantity}`;

function updateCartQuantity(change) {

  if (change === 'Show Quantity') {
    change = 0;
  }

  if (cartQuantity + change > 10) {
    displayParagraph.textContent = 'The cart is full';
    return;
  }

  if (cartQuantity + change < 0) {
    displayParagraph.textContent = 'Not enough items in the cart';
    return;
  }

  cartQuantity += change;
  displayParagraph.textContent = `Cart quantity: ${cartQuantity}`;

  if (change === 'Reset Cart') {
    displayParagraph.textContent = 'Cart was reset.';
    cartQuantity = 0;
  }
}




let calculation = localStorage.getItem('calculation') || '';

// Display the calculation when the page first loads.
displayCalculation();

function updateCalculation(value) {
  calculation += value;

  // Display the calculation on the page
  // instead of console.log
  displayCalculation();

  localStorage.setItem('calculation', calculation);
}

function displayCalculation() {
  document.querySelector('.js-calculation')
    .innerHTML = calculation;
}


function viewDetails () {
 const detailsButton = document.querySelector('.js-detailsButton');

 const link = document.querySelector('.js-naecLink');


 if (detailsButton.textContent === 'დეტალურად') {
  detailsButton.textContent = 'დახურვა';
  detailsButton.style.width = '90px';
  detailsButton.style.paddingLeft = '25px';
  link.textContent = 'პასუხების ფურცლის ჩამოტვირთვა';
 } else {
  detailsButton.textContent = 'დეტალურად';
  detailsButton.style.width = '';
  detailsButton.style.paddingLeft = '';
  link.textContent = '';
 }
}









