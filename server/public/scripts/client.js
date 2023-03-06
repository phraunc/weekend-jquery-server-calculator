
$(document).ready(handleReady);

function handleReady() {
  // console.log("jquery is loaded!")
console.log('jquery is loaded');
  // listener(s)
  $('#addInput').on('click', addInput); // make a function for + button
  $('#subtractInput').on('click', subtractInput); //make a function for - button
  $('#multiplyInput').on('click', multiplyInput); //make a function for * button
  $('#divideInput').on('click', divideInput); // make a function for / button
  $('#calculateInput').on('click', equals);// make a function for = button
getNumber();
numbersInput();
};

let enteredNumbers = {};

function numbersInput(){

  enteredNumbers.numberOneInput = $('#numberOneInput').val();
  enteredNumbers.numberTwoInput = $('#numberTwoInput').val();


};

//function getNumber is currently working
function getNumber(){
$.ajax({
  url:'/number',
  method:'GET'
}).then((response)=>{
  console.log('calculator data', response)});
  //renderAnswer();//append to the DOM
}


function addInput(){
  console.log('in addInput function');
  numbersInput();
//made a function that adds numbers together
enteredNumbers.operator = '+';
$.ajax({
  url: '/add',
  method:'POST'
}).then((response) => {
  console.log('In POST for addInput', response);
  getNumber();
});
}//end addInput GET function

 

function equals(){
$.ajax({
method:'POST',
url: '/',
data: enteredNumbers
}).then(function(response){
  console.log('post is good');
  getNumber();
  //renderAnswer();
});
}//Ends equals function

function subtractInput(){
console.log('in subtractInput function');
//made a function that adds numbers together
enteredNumbers.operator = '-';
$.ajax({
  url: '-',
  mothod:'POST'
}).then((respons)=>{
  console.log('using subtractInput function', respons)});
 };
//Ends subtractInput function

function multiplyInput(){
console.log('in multiplyInput function');
//made a function that adds numbers together
enteredNumbers.operator = '*';
$.ajax({
  url:'/multiply',
  method: 'POST'
}).then((response)=>{
  console.log('Giving multiply POST')});
 };//Ends MultiplyInput function

function divideInput(){
console.log('in divideInput Function');
//made a function that adds numbers together
enteredNumbers.operator = '/';
$.ajax({
  url: 'divide',
  method: 'POST'
}).then((response)=>{
  console.log('using divide POST', response)});
 };//Ends divideInput Function


//render function created to 
function renderAnswer(){
  //testing to see if funciton works
console.log('in the render function');
  
//clearing out inputs
$('#numberOneInput').empty();
$('#numberTwoInput').empty();
$('#answerInput').empty();

for( response of renderAnswer ){//having issues with finding a good for loop
$('#answerRenderArea').append(`
<li>${response.numberInputOne} operation ${response.numberInputTwo}=${response.answeInput}</li>

`)
};
};//end render function


// Client-server client side functions:
// 	listeners for buttons
// 		ajax.POST +
// 		ajax.POST -
// 		ajax.POST *
// 		ajax.POST /
// 		ajax.POST =
// 		ajax.POST C
// 		ajax.POST Input Fields
// 		ajax.GET render current answer
// 		ajax.GET render all calculations

// Client side functions:
// 	startUp()
// 	render()
	

// Client side global variables
// 	??Client-Server server side functions:
// 	'listener' for POST and GETs
// 		POST +
// 		POST -
// 		POST *
// 		POST /
// 		POST =
// 		POST C
// 		GET renderCurrent
// 		GET renderPastCalcs

// Server side functions
// 	variableChanger() - change a variable to +,-,*,/ per button pushed
// 	runCalculation() - run actual calculation
	
// Server side global variables
// 	currentOperator
// 	currentAnswer
// 	calculationArray

//I have spent countless hours on this program to get things inputed.  I have used other expamples as well as other cohort members for guidance. 