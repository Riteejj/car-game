const Engine = Matter.Engine;
const World= Matter.World;
 
const Bodies = Matter.Bodies;


var particles = [];
var plinkos = [];
var divisions = [];
var divisonWeight=200;
var score = 0;


function setup() {
  createCanvas(700,700);
  Engine.create();
  World = engine.world;
  ground = new Ground(width/2,height,width,20);


  for (var k = 0; k<=width; k = k+80){

    divisions.push(new Divisions(k,height,150,10))

  }
  for(var j = 75; j <width;j=j+50)
  {
    plinkos.push(new plinko(j,75));

  }

  for(var j = 50; j <width-10; j=j+50)
  {
    plinkos.push(new plinko(j,175));

  }
  for(var j = 75; j <width;j=j+50)
  {
    plinkos.push(new plinko(j,275));

  }
  for(var j = 75; j <width;j=j+50)
  {
    plinkos.push(new plinko(j,375));

  }

  

  
}

function draw() {
  background("grey"); 
  
  textSize(20)
  Engine.update(engine);
  ground.display();
  
  for(var i = 0; i <plinkos.length;i++)
  {
    plinkos[i].display();

  }

if(frameCount%60===0){
particles.push(new particles(random(100,700),10,10));
score++;
}





  for(var j = 0; j   <particles.length; j++)
  {
    particles[j].display();

  }

  for(var k = 0; k   <divisions.length; k++)
  {
    divisions[k].display();

  }



}