// Sloth image "IMG_3883" by JohnHedtke is licensed under CC BY-NC-SA 2.0 https://search.creativecommons.org/photos/217faedd-d06a-48ba-91f7-f4d4c6dafa04
// Puppy image "puppies" by www.petian.net is licensed under CC BY-NC-ND 2.0  https://search.creativecommons.org/photos/4f271583-e45d-4faf-bfc8-7291c7c1e3c3
// dinosaur "Rupenhorn Dinosaur #4" by Kristian_Laban is licensed under CC BY-NC 2.0 https://search.creativecommons.org/photos/96213ba5-e9b6-4f2f-91e4-da28b9fcad22
var title, puppy, dinosaur;
var sButton, pButton, dButton;
var currentImage = 0;

function preload (){
title = loadImage("images/igirltitle.png");
puppy = loadImage("images/puppy.jpg");
dinosaur = loadImage("images/dinosaur.jpg");

}


function setup() {
  // put setup code here
createCanvas(400,400);

sButton = createButton("title");
sButton.mousePressed(function(){
currentImage = 0;

});

pButton = createButton("puppy");
pButton.mousePressed(function(){
currentImage = 1;

});

dButton = createButton("dinosaur");
dButton.mousePressed(function(){
currentImage = 2;

});
}

function draw() {
  background(255);
  console.log("currentImage" + currentImage);
  // put drawing code here
if(currentImage == 0){
  image(title,0,0,title.width/4,title.height/4);
} else if(currentImage == 1){
  image(puppy,0,0,puppy.width/4,puppy.height/4);
} else if(currentImage == 2){
  image(dinosaur,0,0,dinosaur.width/4,dinosaur.height/4);
}



}
