$(document).ready(handleReady);

function handleReady() {
  // console.log("jquery is loaded!")
console.log('jquery is loaded');
  // listener(s)
  
  $('#addInput').on('click', ); // make a function for + button
  $('#subtractInput').on('click', ); //make a function for - button
  $('#multiplyInput').on('click', ); //make a function for * button
  $('#divideInput').on('click', ); // make a function for / button
  $('#calculateInput').on('click', ); // make a function for = button

};

//render function created to 
function render(){
console.log('in the render function');
    
}


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