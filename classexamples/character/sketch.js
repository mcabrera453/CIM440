function setup() {
  // put setup code here
  createCanvas(500,500);
  background(0,255,0);
}

function draw() {
  // put drawing code here

  //defeault
  fill("white");
  stroke(0);
  strokeWeight(1);//loop

  fill("blue");
  ellipse(100,100,20,20);//left eye

  ellipse(140,100,20,20); //right eye

  fill(255,0,0)//rgb
  rect(80,200,100,30);//mouth

fill(255);
  strokeWeight(5);
  point(72,382);//mole

  strokeWeight(1);
  line(80,215,180,215);//mouth split

  //width and height
  //console.log("width " + width);
  //console.log("height " + height);

  stroke("orange");
  triangle(width/2, height/2, width/2 + 10, height/2 + 10,width/2 - 10, height/2 +10)

  arc(300,300,50,50,0,PI);

  arc(400,400,50,50,PI+HALF_PI, 0);

  arc(250,250,50,50,0,TWO_PI);

  arc(400,100,50,50,HALF_PI,PI+HALF_PI)
  //homework make a drawing of a character

triangle(100,400,120,420,80,420);
line(100,300,200,300);//horizontal line, use common y value
line(100,200,100,300)//vertical line

}
