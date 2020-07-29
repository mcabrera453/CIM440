// Sloth image "IMG_3883" by JohnHedtke is licensed under CC BY-NC-SA 2.0 https://search.creativecommons.org/photos/217faedd-d06a-48ba-91f7-f4d4c6dafa04
// Puppy image "puppies" by www.petian.net is licensed under CC BY-NC-ND 2.0  https://search.creativecommons.org/photos/4f271583-e45d-4faf-bfc8-7291c7c1e3c3
// dinosaur "Rupenhorn Dinosaur #4" by Kristian_Laban is licensed under CC BY-NC 2.0 https://search.creativecommons.org/photos/96213ba5-e9b6-4f2f-91e4-da28b9fcad22
var zero, one, two, three, four, five, six, seven, eight, nine;
var sButton, pButton;
var currentImage = 0;

function preload (){
zero = loadImage("images/zero.png");
one = loadImage("images/one.png");
two = loadImage("images/two.png");
three = loadImage("images/three.png");
four = loadImage("images/four.png");
five = loadImage("images/five.png");
six = loadImage("images/six.png");
seven = loadImage("images/seven.png");
eight = loadImage("images/eight.png");
nine = loadImage("images/nine.png");
}


function setup() {
  // put setup code here
createCanvas(720,400);

sButton = createButton("yes");
sButton.mousePressed(function(){
//do you want to start?
if (currentImage == 0){
  currentImage = 1;
} else if (currentImage == 1){
  currentImage = 2;
}
else if (currentImage == 2){
  currentImage = 5;
}
else if (currentImage == 5){
  currentImage = 6;
}
else if (currentImage == 6){
  currentImage = 7;
}
else if (currentImage == 7){
  currentImage = 8;
}
else if (currentImage == 8){
  currentImage = 9;
}
else if (currentImage == 9){
  currentImage = 0;
}
else if (currentImage == 3){
  currentImage = 5;
}
else if (currentImage == 4){
  currentImage = 5;
}
});

pButton = createButton("no");
pButton.mousePressed(function(){
  if (currentImage == 0){
    currentImage = 0;
  }
  else if (currentImage == 1){
    currentImage = 3;
  }
  else if (currentImage == 2){
    currentImage = 4;
  }
  else if (currentImage == 3){
    currentImage = 9;
  }
  else if (currentImage == 4){
    currentImage = 5;
  }
  else if (currentImage == 5){
    currentImage = 6;
  }
  else if (currentImage == 6){
    currentImage = 7;
  }
  else if (currentImage == 7){
    currentImage = 8;
  }
  else if (currentImage == 8){
    currentImage = 9;
  }
});

}

function draw() {
  background(255);
  console.log("currentImage" + currentImage);
  // put drawing code here
if(currentImage == 0){
  image(zero,0,0,zero.width/2,zero.height/2);
}

 else if(currentImage == 1){
  image(one,0,0,one.width/2,one.height/2);
}
else if(currentImage == 2){
  image(two,0,0,two.width/2,two.height/2);
}
else if(currentImage == 3){
  image(three,0,0,three.width/2,three.height/2);
}
else if(currentImage == 4){
  image(four,0,0,four.width/2,four.height/2);
}
else if(currentImage == 5){
  image(five,0,0,five.width/2,five.height/2);
}
else if(currentImage == 6){
  image(six,0,0,six.width/2,six.height/2);
}
else if(currentImage == 7){
  image(seven,0,0,seven.width/2,seven.height/2);
}
else if(currentImage == 8){
  image(eight,0,0,eight.width/2,eight.height/2);
}
else if(currentImage == 9){
  image(nine,0,0,nine.width/2,nine.height/2);
}

}
