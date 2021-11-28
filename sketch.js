var Mousey;
var Touchy, Touchy2, Touchy3;
//var  allSprites
function setup() {
  
  createCanvas(800,400);
  
  Touchy = createSprite(400, 200, 50, 50);
  Touchy2 = createSprite(200, 200, 50, 50);
  Touchy3 = createSprite(600, 200, 50, 50);
  Mousey = createSprite(400, 200, 50, 50);

}

function draw() {
 
  background(255,255,255);  
 background("black")

Mousey.y = World.mouseY
Mousey.x = World.mouseX
Mousey.shapeColor = "red"
Mousey.debug = true

Touchy.shapeColor = "white"
Touchy.debug = true

Touchy2.shapeColor = "yellow"
Touchy2.debug = true

Touchy3.shapeColor = "silver"
Touchy3.debug = true




if (touch(Mousey,Touchy3)){
Mousey.shapeColor = "white"
Touchy3.shapeColor = "red"
}

drawSprites();
}

