var block;

function setup(){
  createCanvas(800, 400);
  //rectMode(CENTER);

  block = createSprite(30, 30);
  block.draw = function(){
    fill(100, 120, 40);
    rect(0, 0, 30, 30);
  }

}

function draw(){
  background(255, 255, 255);

  drawSprites();
  moveBlock();
  // block.debug = true;
}

function moveBlock(){
  block.velocity.x = (mouseX-block.position.x)/10;
  block.velocity.y = (mouseY-block.position.y)/10;

}