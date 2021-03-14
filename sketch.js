var sprite1
var sprite2
function setup() {
  createCanvas(800,400);
  
  sprite1=createSprite(300,200,10,50)
  sprite2=createSprite(500,200,50,10)
  sprite1.shapeColor="yellow"
sprite2.shapeColor="yellow"
}

function draw() {
  background("red");  
  sprite1.y=World.mouseY
  sprite1.x=World.mouseX
  if (sprite1.x-sprite2.x<sprite1.width/2+sprite2.width/2 && sprite2.x-sprite1.x<sprite1.width/2+sprite2.width/2
   && sprite1.y-sprite2.y<sprite1.height/2+sprite2.height/2 && sprite2.y-sprite1.y<sprite1.height/2+sprite2.height/2){
sprite1.shapeColor="green"
sprite2.shapeColor="green"
  }else{
    sprite1.shapeColor="purple"
    sprite2.shapeColor="purple"
  }
  drawSprites();
}