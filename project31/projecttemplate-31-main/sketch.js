const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var drop
var thunderbolt1,thunderbolt2,thunderbolt3,thunderbolt4
var maxDrops=100
function preload(){
    
  thunderbolt1=loadImage("thunderbolt/1.png")
  thunderbolt2=loadImage("thunderbolt/2.png")
  thunderbolt3=loadImage("thunderbolt/3.png")
  thunderbolt4=loadImage("thunderbolt/4.png")

}

function setup(){
    createCanvas(600, 900);


	engine = Engine.create();
	world = engine.world;

drop=new Drops(300,400,20)



    Engine.run(engine);
    
}

function draw(){
 rectMode(CENTER);
  background(0);

for(var i=0; i<maxDrops; i++){
    drop.push(new Drops(random(0,400),random(0,400)))
}
rand=Math.round(random(1,4))
if(frameCount%80===0){
  thunderCreatedFrame=frameCount
  thunder=createSprite(random(10,370), random(10,30), 10, 10)
  switch(rand){
    case 1:thunder.addImage(thunderbolt1)
    break;
    case 2: thunder.addImage(thunderbolt2)
    break;
    default: break; 
  }
  thunder.scale=random(0.3,0.6)
}


  drop.display()
  drawSprites();
}   

