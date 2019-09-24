// Sloth image "IMG_3883" by JohnHedtke is licensed under CC BY-NC-SA 2.0 https://search.creativecommons.org/photos/217faedd-d06a-48ba-91f7-f4d4c6dafa04
// Puppy image "puppies" by www.petian.net is licensed under CC BY-NC-ND 2.0  https://search.creativecommons.org/photos/4f271583-e45d-4faf-bfc8-7291c7c1e3c3
// dinosaur "Rupenhorn Dinosaur #4" by Kristian_Laban is licensed under CC BY-NC 2.0 https://search.creativecommons.org/photos/96213ba5-e9b6-4f2f-91e4-da28b9fcad22
var sloth, puppy, dinosaur, light, fest;
var sButton, pButton, dButton, lButton, fButton;
var currentImage = 0;
var curImage;

function preload (){
sloth = loadImage("images/sloth.jpg");
puppy = loadImage("images/puppy.jpg");
dinosaur = loadImage("images/dinosaur.jpg");
light = loadImage("images/light.jpg");
fest = loadImage("images/fest.jpg");
}


function setup() {
  // put setup code here
createCanvas(400,400);

sButton = createButton("sloth");
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

lButton = createButton("light");
lButton.mousePressed(function(){
currentImage = 3;

});

fButton = createButton("fest");
fButton.mousePressed(function(){
currentImage = 4;

});
}

function draw() {
  background(255);
  console.log("currentImage" + currentImage);
  // put drawing code here
if(currentImage == 0){
  curImage = sloth;
} else if(currentImage == 1){
  curImage = puppy;
} else if(currentImage == 2){
  curImage = dinosaur;
} else if(currentImage == 3){
  curImage = light;
} else if(currentImage == 4){
  curImage = fest;
}
image(curImage,0,0,curImage.width/4,curImage.height/4);

}
