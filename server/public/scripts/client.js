
$(document).ready(handleReady);

function handleReady() {
console.log('jquery is loaded');
  // listener(s)
  $('.operationInput').on('click', allOperators);//go to a function which takes care of all operators
  $('#equalsInput').on('click', equalsFunction);// make a function for = button
getNumber();
// numbersInput();
};

let operator = '';

function allOperators(){
console.log('lets get some operations!');
let operatorClick = $(this).text();
theOperator = operatorClick;
}



//function getNumber is currently working
function getNumber(){
$.ajax({
  url:'/number',
  method:'GET'
}).then((response)=>{
 console.log('in the GET number function', response);
 //Getting the recent response for answerRenderArea
 let thisResponse = response[response.length -1];//shifts to previous array, as far as I understand it..
 //same as array.shif();
 $('#answerRenderArea').text();
 //empty the answerRenderArea
 $('#previousAnswersRenderArea').empty();
for (let i=0; i < response.length; i++){
  $('#previousAnswersRenderArea').append(`
  <li>${response[i].firstInput}${response[i].operation}${response[i].secondInput}=${response[i].answer}</li>
  `)
}
});
}//End getNumber Function



 

function equalsFunction(){
console.log('in the equalsFunction');
let firstInput = $('#numberOneInput').val();
let secondInput = $('#numberTwoInput').val();

$.ajax({

  method: 'POST',
  url: '/number',
  data: {
    firstInput: firstInput,
    secondInput: secondInput,
    operation: theOperator
  }
}).then((response)=>{
  getNumber();//brings the results back to the getNumber function to empty the array and then append the answers to the DOM. 
});
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