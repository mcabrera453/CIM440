var bloom;

var showOrHide = false;

var show;
var hide;


function preload(){
bloom = loadImage("bloom.jpg");

  show = createButton("show");
  show.mousePressed(function(){
showOrHide = true;

});
 hide = createButton("hide");
 hide.mousePressed(function(){
  showOrHide = false;

 });


}



function setup() {
  // put setup code here

  createCanvas(1000,1000);
}

function draw() {
  // put drawing code here
  //image var , x pos, y pos
//image(bloom,0,0); // full scale
background(255);

if(showOrHide == true)
{
  image(bloom, 100, 100, bloom.width/4, bloom.height/4) // when you divide by a number the image will scale proportionally




}

//image(bloom, 200, 200, 125, 200)// setting exact dimensions
text("click", 10 ,10);


}
