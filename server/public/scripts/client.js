$(document).ready(handleReady);

function handleReady() {
  // console.log("jquery is loaded!")
console.log('jquery is loaded');
  // listener(s)
  $('#addInput').on('click', addInput); // make a function for + button
  $('#subtractInput').on('click', subtractInput); //make a function for - button
  $('#multiplyInput').on('click', multiplyInput); //make a function for * button
  $('#divideInput').on('click', divideInput); // make a function for / button
  //$('#calculateInput').on('click', );// make a function for = button
getNumber();

};

//function getNumber is currently working
function getNumber(){
$.ajax({
  url:'/number',
  method:'GET'
}).then((response)=>{
  console.log('calculator data', response)});
//   renderAnswer();
 }


function addInput(num1, num2){
  console.log('in addInput function');
//made a function that adds numbers together

 num1 = $('#numberOneInput').val();
 num2 = $('#numberTwoInput').val();
 
 if( num1 && num2){
$.ajax({
method:'POST',
url: '/add',

  data: {
     numberInputOne: num1,
     numberInputTwo: num2
  }
}).then(function(response){
  // renderAnswer();
  getNumber();
});
 }
}//Ends addInput Function

function subtractInput(num1, num2){
console.log('in subtractInput function');
 num1 = $('#numberOneInput').val();
 num2 = $('#numberTwoInput').val();
 
 if( num1 && num2){
$.ajax({
method:'POST',
url: '/',

  data: {
    numberInputOne: num1,
    numberInputTwo: num2
  }
}).then(function(response){
  // renderAnswer();
  getNumber();
});
 }
}//Ends subtractInput function

function multiplyInput(num1, num2){
console.log('in multiplyInput function');
  num1 = $('#numberOneInput').val();
  num2 = $('#numberTwoInput').val();
  
  if( num1 && num2){
 $.ajax({
 method:'POST',
 url: '/',
 
   data: {
    numberInputOne: num1,
    numberInputTwo: num2
   }
 }).then(function(response){
  // renderAnswer();
   getNumber();
 });
}
}//Ends MultiplyInput function
function divideInput(num1, num2){
console.log('in divideInput Function');
  num1 = $('#numberOneInput').val();
  num2 = $('#numberTwoInput').val();
  
  if( num1 && num2){
 $.ajax({
 method:'POST',
 url: '/',
 
   data: {
    numberInputOne: num1,
    numberInputTwo: num2
   }
 }).then(function(response){
  // renderAnswer();
   getNumber();
 });
}
}//Ends divideInput Function

//render function created to 
// function renderAnswer(){
//   //testing to see if funciton works
// console.log('in the render function');
  
// //clearing out inputs
// $('#numberOneInput').empty();
// $('#numberTwoInput').empty();
// $('#answerInput').empty();

// for(response of renderAnswer){
// $('#answerRenderArea').append(`
// <li>${response.numberInputOne} operation ${response.numberInputTwo}=${response.answeInput}</li>

// `)
// };
// };//end render function


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