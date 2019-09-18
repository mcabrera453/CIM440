//global variables, these are avaialable throughout your program
var faceColor = "blue";
var pointX = 0;



function setup() {
  // put setup code here
//if you declare a var inside of a block of code ie {}, that var will only be available inside of that block
  var message = "Hello";
  console.log(message)

  //console.log(drawMessage); error not defined; scope is inside of draw loop
}

function draw() {
  // put drawing code here

  //console.log(message); Error: not defined, because message var scope is only inside the setup
  var drawMessage = "this message is a draw loop"; //this creates a new var everytime a draw loop happens 

  console.log(drawMessage);

}
