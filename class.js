class Ground {
  constructor(x, y, image, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = loadImage(image);
    this.body = Bodies.rectangle(x, y, width, height, { isStatic: true });
    World.add(world, this.body);
  }

  show() {
    image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
  }
}

class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
  }

  show() {
    arc(this.x, this.y, 155, this.height, PI, 0);
    push();
    translate(this.x, this.y - 70);
    rotate(-this.angle);
    rect(-this.width / 2, -this.width / 2, this.width, this.height / 3);
    pop();
  }
}

class CannonBall {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius
    this.img = loadImage("assets/cannonball.png");
    this.body = Bodies.circle(x, y, radius, { isStatic: true, density: 1, restitution: .8, friction: 1 })
    World.add(world, this.body);
  }

  show() {
    image(this.img, this.body.position.x, this.body.position.y, this.radius, this.radius);
  }

  shoot() {
    Body.setStatic(this.body, false);
    var velocity = p5.Vector.fromAngle(PI * 1.5 + cannon.angle);
    velocity.mult(20)
    console.log(velocity);
    Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
  }
}