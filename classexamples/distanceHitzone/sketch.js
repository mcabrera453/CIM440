var hitX = 100;
var hitY = 100;
var threshold = 20;

var hitDistance = 0;

var changeBackground = "white";



function setup() {
  // put setup code here
  createCanvas(400,400);

}

function draw() {
  // put drawing code here
  background(changeBackground);

  hitDistance = dist(mouseX,mouseY,hitX,hitY);
  console.log("hitDistance " + hitDistance);
//if distance is less than or equal to 20, our range is 0-20 including 20.

//hover state
  if(hitDistance <= threshold){
    fill(127);
    text("Click here" , hitX, hitY+30);
  }else{
    //if the above is not true, then execute else statement.
    fill(255);
  }

 //if(hitDistance > threshold){
//   fill(255);
// }

  ellipse(hitX,hitY,threshold*2,threshold*2);
}

//on Click

function mousePressed(){

  if(hitDistance <= threshold){
    console.log("Clicked");
    changeBackground = "blue";
  }else{
console.log("Clicked outside");
  changeBackground = "white";
  }


}
