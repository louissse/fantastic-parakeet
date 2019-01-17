var sprite1, sprite2, sprite3;

function setup() {
	createCanvas(windowWidth, windowHeight);
	sprite3 = createSprite(50, 50, 40, 40);	
	sprite1 = createSprite(200, 200, 20, 20);
	sprite2 = createSprite(400, 200, 20, 20);

	sprite3.draw = function(){
		fill(100, 100, 100);
		if(sprite2.overlap(sprite3)){
			fill(100, 100, 200);
		}
		rect(0, 0, 40, 40);
	}
}

function draw() {
	background(255);

	sprite1.position.x = mouseX;
	sprite1.position.y = mouseY;

	sprite1.displace(sprite2);

	drawSprites();	

}
