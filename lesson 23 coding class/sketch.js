const World=Matter.World
const Engine=Matter.Engine
const Bodies=Matter.Bodies

var world,engine
var Ball1,Ball2,terrain

function setup()
{
  createCanvas(600,600)
  engine=Engine.create()
  world=engine.world
 Ball1=new Ball(300,300,100)
 Ball2=new Ball(50,300,10)
  
  var terrainOptions={
  isStatic:true
  
}

  terrain=Bodies.rectangle(300,550,1200,10,terrainOptions)
  World.add(world,terrain)

  
}

function draw()
{
  background("lightblue")
  Engine.update(engine)
  rectMode(CENTER)
  rect(terrain.position.x,terrain.position.y,1200,10)
  Ball1.display()
  Ball2.display()
  
}






