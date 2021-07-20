var bg;
var hr,min,sec;
var hrAngle,minAngle,secAngle;
var clock, clockImg;

function preload(){
  bg=loadImage("b_g.jpg");
  clockImg=loadImage("clock.png");
  hourSound=loadSound("midnight-sound-effect.mp3");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  angleMode(DEGREES);

  clock=createSprite(0,0);
  clock.addImage(clockImg);
  clock.scale=0.8;

}

function draw() {
  background(bg);  

  translate(windowWidth/2,windowHeight/2);
  rotate(-90);

  hr=hour();
  min=minute();
  sec=second();

  hrAngle=map(hr % 12,0,12,0,360);
  minAngle=map(min,0,60,0,360);
  secAngle=map(sec,0,60,0,360);

  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,70,0);
  pop();

  push();
  rotate(minAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(secAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,140,0);
  pop();

  point(0,0);
  stroke(255,0,255);
  strokeWeight(10);
  noFill();

  stroke(0,0,255);
  arc(0,0,360,360,0,hrAngle);

  stroke(0,255,0);
  arc(0,0,380,380,0,minAngle);

  stroke(255,0,0);
  arc(0,0,400,400,0,secAngle);

  drawSprites();

}