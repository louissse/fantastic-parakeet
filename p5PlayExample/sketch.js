var zombie;

function setup() {
  createCanvas(800, 300);

  //create a sprite and add the 2 animations
  zombie = createSprite(400, 150, 50, 100);

  //label, first frame, last frame
  //the addAnimation method returns the added animation
  //that can be store in a temporary variable to change parameters
  var myAnimation = zombie.addAnimation('floating', 'assets/zombiegirl/Idle0001.png', 'assets/zombiegirl/Idle0015.png');
  //offX and offY is the distance of animation from the center of the sprite
  //in this case since the animations have different heights i want to adjust
  //the vertical offset to make the transition between floating and moving look better
  myAnimation.offY = 18;

  zombie.addAnimation('moving', 'assets/zombiegirl/Walk0001.png', 'assets/zombiegirl/Walk0010.png');


}

function draw() {
  background(255, 255, 255);

  //if mouse is to the left
  if(mouseX < zombie.position.x - 10) {
    zombie.changeAnimation('moving');
    //flip horizontally
    zombie.mirrorX(-1);
    //negative x velocity: move left
    zombie.velocity.x = -2;
  }
  else if(mouseX > zombie.position.x + 10) {
    zombie.changeAnimation('moving');
    //unflip
    zombie.mirrorX(1);
    zombie.velocity.x = 2;
  }
  else {
    //if close to the mouse, don't move
    zombie.changeAnimation('floating');
    zombie.velocity.x = 0;
  }

  //up and down keys to change the scale
  //note that scaling the image quality deteriorates
  //and scaling to a negative value flips the image
  if(keyIsDown(UP_ARROW))
    zombie.scale += 0.05;
  if(keyIsDown(DOWN_ARROW))
    zombie.scale -= 0.05;

  //draw the sprite
  drawSprites();
}
