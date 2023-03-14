
$(document).ready(handleReady);

function handleReady() {
console.log('jquery is loaded');
  // listener(s)
  $('#addInput').on('click', addInput); // make a function for + button
  // $('#subtractInput').on('click', subtractInput); //make a function for - button
  // $('#multiplyInput').on('click', multiplyInput); //make a function for * button
  // $('#divideInput').on('click', divideInput); // make a function for / button
  $('#equalsInput').on('click', equalsFunction);// make a function for = button
getNumber();
// numbersInput();
};

let enteredNumbers = {
  numOne: $('#numberOneInput').val(),
  operation:$('.operationInput').val(),
  numTwo: $('#numberTwoInput').val(),
  equals: $('#equalsInput').val()
};

//function getNumber is currently working
function getNumber(){
$.ajax({
  url:'/number',
  method:'GET'
}).then((response)=>{
 console.log('in the GET number function', response);
renderAnswer(response);
});
}//End getNumber Function


function addInput(){
  console.log('in addInput function');
//made a function that adds numbers together
enteredNumbers.operation = '+';
$.ajax({
  url: '/add',
  method:'POST'
}).then((response) => {
  console.log('In POST for addInput', response);
  getNumber();
});
}//end addInput GET function

 

function equalsFunction(){
console.log('in the equalsFunction');




}

// $.ajax({
// method:'POST',
// url: '/number',
// data: {numOne: enteredNumbers.numberOneInput,
//       numTwo: enteredNumbers.numberTwoInput,
//       operator: '+',
//       equal: '6'
// } 
// }).then(function(response){
//   console.log('post is good');
//   renderAnswer();
// });
// }//Ends equals function

// function subtractInput(){
// console.log('in subtractInput function');
// //made a function that adds numbers together
// enteredNumbers.operator = '-';
// $.ajax({
//   url: '-',
//   mothod:'POST'
// }).then((respons)=>{
//   console.log('using subtractInput function', respons)});
//  };
// //Ends subtractInput function

// function multiplyInput(){
// console.log('in multiplyInput function');
// //made a function that adds numbers together
// enteredNumbers.operator = '*';
// $.ajax({
//   url:'/multiply',
//   method: 'POST'
// }).then((response)=>{
//   console.log('Giving multiply POST')});
//  };//Ends MultiplyInput function

// function divideInput(){
// console.log('in divideInput Function');
// //made a function that adds numbers together
// enteredNumbers.operator = '/';
// $.ajax({
//   url: 'divide',
//   method: 'POST'
// }).then((response)=>{
//   console.log('using divide POST', response)});
//  };//Ends divideInput Function



function renderAnswer(response){
  //testing to see if funciton works
console.log('in the render function');
  
//clearing out inputs
$('#numberOneInput').empty();
$('#numberTwoInput').empty();
$('.operationInput').empty();
$('#equalsInput').empty();

for(let i =0; i < response.length; i++  ){//having issues with finding a good for loop
$('#answerRenderArea').append(`
<li>${response[i].firstInput}${response[i].operation}${response[i].secondInput}=${response[i].answer}</li>
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