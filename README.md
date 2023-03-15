# Project Name

weekend-jquery-server-calculator

## Description

 With this App, users will come to a page that will simply do calculations for them.

On the client side, there were functions that take the values of the 2 inputs where numbers would go.  I created a function that would take the value of each input and when one of the operation buttons are pressed, would take the inputs and solve the problem on the server side and POST that answer into the client side.

When the server has the input values from the client, the server then puts the information into the mathEquation array/object.  With that information, the server will then use what ever operation button was pushed, do the calcualtions and then GET post to get them back to the client for the results.  The client then takes that information and renders it to the DOM in 2 sections reserved for current equations and historical equations.  

