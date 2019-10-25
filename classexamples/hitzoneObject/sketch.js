var button1;

function setup() {
  // put setup code here
  createCanvas(400,400);

  button1 = new hitzoneObject(100,200,50,"red");
  button2 = new hitzoneObject(200,200,50,"green");
}


function draw() {
  // put drawing code here
  background(255);

 button1.display();
 button2.display();

}

class hitzoneObject{

  constructor(tempX, tempY, tempSize, tempColor){
    this.x = tempX;
    this.y = tempY;
    this.boxSize = tempSize;
    this.boxColor = tempColor;
  }

  display(){
    fill(this.boxColor);
    rect(this.x, this.y, this.boxSize, this.boxSize);
  }

check()


}// end of hitzoneObject
