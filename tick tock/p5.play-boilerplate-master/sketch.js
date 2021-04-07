var bgImage;

function preload()
{
  bgImage = loadImage("images.jpg");
}

function setup() {
  //createCanvas(450,450);
  background(bgImage);
 // createSprite(400, 200, 50, 50);
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
  drawSprites();

  translate(200,200)
  rotate(90)
  var h = hour()
  var m = minute()
  var sc = second() 
  strokeWeight(8)
  stroke('pink')
  noFill()
  var ok = map(sc,0,60,0,360)
  arc(0,0,300,300,0,ok)

  stroke('red')
  var notOk = map(m, 0,60,0,360)
  arc(0,0,280,280,0,notOk)

  stroke("Yellow");
  var very = map(h%12,0,12,-0,360);
  arc(0,0,260,260,0,very);
  push();
  rotate(ok);
  stroke("green");
  line(0,0,100,0);
  pop();
  
  
  push();
  rotate(notOk);
  stroke("blue");
  line(0,0,75,0);
  pop();
  
  push();
  rotate(very);
  stroke("orange");
  line(0,0,50,0);
  pop();
  
  stroke("Black");
  point (0,0);
}