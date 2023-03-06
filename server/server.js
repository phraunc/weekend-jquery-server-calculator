
//const sets up the server
    // Require express - gives us a function
const express = require('express');
const bodyParser = require('body-parser');
// Create an instance of express by calling the function returned above - gives us an object
const app = express();
const port = 5000;

// express static file serving - public is the folder name
app.use(express.static('server/public'));

// Start up our server
app.listen(port, () => {
  console.log('listening on port', port);
});

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}));
//   ---------------  The above is all that is needed to ensure server is good -------

//Routes
//object for what i need to input for the results i want.
let mathEquation = [
    {
    firstInput: '',
    secondInput: '',
    operation: '',
    answer: '',
  }];




//GET
app.get('/number', (req, res)=>{
  res.send(mathEquation);
});



app.post('/', (req, res)=>{
  console.log('in the post,',req.body);
mathEquation.push(req.body);

let incomingFirstInput = req.body.firstInput;
let incomingSecondInput = req.body.secondInput;
let incomingOperation = req.body.operation;
let incomingAnswer = req.body.answer;

console.log('incomingFirstInput', incomingFirstInput);
console.log('incomingSecondInput', incomingSecondInput);
console.log('incomingOperation', incomingOperation);
console.log('incomingAnswer', incomingAnswer);

const newMathEquation = {firstInput:incomingFirstInput,
secondInput: incomingSecondInput, operation: incomingOperation,
answer: incomingAnswer};


mathEquation.push(newMathEquation);
//this is where the actual math needs to happen. 
  res.send(201);
});

app.post('/add', (req, res)=>{
  console.log('POST for /add to use add button');


});

app.post('/subtract', (req, res)=>{
  console.log('POST for /subtract to use subtract button');
  mathEquation.operation.push(req.body);
});

app.post('/multiply', (req, res)=>{
  console.log('POST for multiply')
   mathEquation.operation.push(req.body)});

  app.post('/divide',(req, res)=>{
    console.log('POST for divide ');
    mathEquation.operation.push(req.body);
  }) ;

  























// Server side functions
// 	variableChanger() - change a variable to +,-,*,/ per button pushed
// 	runCalculation() - run actual calculation
	
// Server side global variables
// 	currentOperator
// 	currentAnswer
// 	calculationArray