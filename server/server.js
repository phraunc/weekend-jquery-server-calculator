
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
let numberInput = {

  inputOne: 1,
  inputTwo: 2
};

//GET
app.use('/number', (req, res)=>{
  res.send(numberInput);
});












// Server side functions
// 	variableChanger() - change a variable to +,-,*,/ per button pushed
// 	runCalculation() - run actual calculation
	
// Server side global variables
// 	currentOperator
// 	currentAnswer
// 	calculationArray