const Engine = Matter.Engine
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var snowbg;
var snows=[]
var boy;

function preload(){
  snowbg = loadImage("snow2.jpg");
  
}

function setup() {
  createCanvas(1500,700);
  engine= Engine.create();
  world= engine.world;
  Engine.run(engine)


}


function draw() {
  background(snowbg);  
  
  if(frameCount % 4 === 0){
    snows.push(new Snow(random(10,1400),50,50));
  }
  for(var s=0;s<snows.length;s++){
    snows[s].display();
  }
}
  

