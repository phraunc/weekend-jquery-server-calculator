
$(document).ready(handleReady);

function handleReady() {
console.log('jquery is loaded');
  // listener(s)
  $('#deleteInput').on('click', deleteFunction);
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
 //same as array.shift();
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

function deleteFunction(){
console.log('trying to delete this ish');
  $('#answerRenderArea').remove();
  $('#previousAnswersRenderArea').remove();
getNumber();
}




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

//I have spent countless hours on this program to get things inputed.  I have used other expamples as well as other cohort members for guidance. 