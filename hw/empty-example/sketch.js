var X = 500;
var Y = 500;
var A = 200;
var B = 250;
var C = 0;

var eyeColor= "black";

function setup() {

  createCanvas(1500,1000);
  background("blue");

  ellipse(X,Y,B,B)

  fill(eyeColor);
  ellipse(X,Y,100,100)

strokeWeight(50);
  line(X-200, Y-250, 700, B);

  arc(X+250, Y+200, A, A, C, QUARTER_PI);
// put setup code here
}

function draw() {

}

function keyPressed(){
  console.log("key " + key);
  console.log("keyCode " + keyCode);

  if(key == "b"){
    eyeColor = "blue";


  }

  if(key == "r"){
    eyeColor = "red";


  }
}
