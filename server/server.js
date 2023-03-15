//const sets up the server
// Require express - gives us a function
const express = require("express");
const bodyParser = require("body-parser");
// Create an instance of express by calling the function returned above - gives us an object
const app = express();
const port = 5000;

// express static file serving - public is the folder name
app.use(express.static("server/public"));

// Start up our server
app.listen(port, () => {
  console.log("listening on port", port);
});

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({ extended: true }));
//   ---------------  The above is all that is needed to ensure server is good -------

//Routes
//object for what i need to input for the results i want.
let mathEquation = [
  {
    firstInput: 2,
    secondInput: 3,
    operation: "+",
    answer: 5,
  },
  {
    firstInput: 7,
    secondInput: 5,
    operation: "-",
    answer: 2,
  },
];

//GET
app.get("/number", (req, res) => {
  console.log("Here are the numbers", mathEquation);
  res.send(mathEquation);
});//GET sends this information to the client to rend to the DOM so when webpage opens up, these will be posted

//this function was made with another insturctor to handle all the operations that i need so I dont need to make function after
//function.
function calculate(firstInput, secondInput, operation) {
  if (operation === '+') {
    return firstInput + secondInput;
  } else if (operation === '-') {
    return firstInput - secondInput;
  } else if (operation === '*') {
    return firstInput * secondInput;
  } else if (operation === '/') {
    return firstInput / secondInput;
  };
}

//This takes the POST from the client and inputs the information into the new variables/object.  then, will take the calculate
//function and give the answer that is needed to report back to the client sid. 
//POST
app.post("/number", (req, res) => {
  let firstInput = Number(req.body.firstInput);
  let secondInput = Number(req.body.secondInput);
  let operation = req.body.operation;
  let answer = calculate(firstInput, secondInput, operation);

  let newMathEquation = {
    firstInput: firstInput,
    secondInput: secondInput,
    operation: operation,
    answer: answer,
  };
//newMathEquation is pushed with mathEquation to make an updated array to send back to the client. 
  mathEquation.push(newMathEquation);
  console.log(newMathEquation);
  res.send(201);
});


