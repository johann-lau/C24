const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
const Body   = Matter.Body;
var angle1;

var engine, world, bgImg;
var tower, cannon;

function preload() {
	bgImg = loadImage("assets/background.gif");
}

function setup() {
  var canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

	angleMode(RADIANS);
  angle1 = 1/36*PI;

	tower = new Ground(40, 190, "assets/tower.png", 160, 310)
	cannon = new Cannon(120, 200, 20, 200, PI/2);
  testball = new CannonBall(110, 120, 20)
}

function draw() {
	background(0);
  image(bgImg,0,0,1200,600);
	Engine.update(engine);

	cannon.show();
	tower.show();
  testball.show();
  console.log(cannon.angle)

	text(mouseX+', '+mouseY,mouseX,mouseY);
}

function keyPressed() {
	if (keyCode == LEFT_ARROW && cannon.angle < PI) {
		cannon.angle += angle1;
	}

	if (keyCode == RIGHT_ARROW && cannon.angle > PI/2) {
		cannon.angle -= angle1;
	}


  if (keyCode == DOWN_ARROW) {
		testball.shoot()
	}
}