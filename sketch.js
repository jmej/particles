let particles = [];
let croissants = [];
let wind; 
let gravity; 



function setup(){
	createCanvas(800, 800);
  croissants[0] = loadImage('assets/croissant1.png');
  croissants[1] = loadImage('assets/croissant2.png');
  wind = createVector(0.1, 0);
  gravity = createVector(0, 0.1);

  for (var i = 0; i < 100; i++) {
    particles.push(new Particle(i));
  }

}


let timer = 0;
let counted = false;

function draw(){
  background(0);
  gravity.y = map(mouseY, 0, width, 0, 0.1);
  wind.x = map(mouseX, 0, width, -0.1, 0.1);
  //print(gravity.y);
 
      
  for (var i = 0; i < particles.length; i++) {
    particles[i].move();
    particles[i].display();
  }

  // myParticle.move();
  // myParticle.display();
  
}

class Particle {
    constructor(index_){ //what data our objects have
      this.location = createVector(random(width), random(height));
      this.velocity = p5.Vector.random2D(); //instead of xSpeed and ySpeed
      this.velocity.mult(random(-1, 1));
      this.size = 25;
      this.image = int(random(2));
      this.index = index_;
    }

    display(){
      imageMode(CENTER);
      image(croissants[this.image], this.location.x, this.location.y, this.size, this.size);
    }

    move(){
        this.velocity.add(gravity);
        this.velocity.add(wind);
        this.location.add(this.velocity);

        let colliding = this.amIColliding();

        if(colliding){
          print("collision!")
          this.velocity.x = this.velocity.x * -1;
          this.velocity.y = this.velocity.y * -1;
        }

        if (this.location.x > width || this.location.x < 0){
          this.velocity.x = this.velocity.x * -1;
        }
        if (this.location.y > height || this.location.y < 0){
          this.velocity.y = this.velocity.y * -1;
        }
       print(this.velocity.x);
    }

    amIColliding(){
      //how big is our croissant? 10 pixels 10 pixels?
      let hitbox = 10;
      for (var i = 0; i < particles.length; i++) {
          if( i != this.index){
            let xIsTooClose = false;
            let yIsTooClose = false;
            //some particle's X AND that same particle's Y are close to my X And my Y
            //is X close?
            if ((abs(this.location.x - particles[i].location.x)) <= hitbox){
              xIsTooClose = true;
            }
            if ((abs(this.location.y - particles[i].location.y)) <= hitbox){
              yIsTooClose = true;
            }
            if(xIsTooClose && yIsTooClose){
              return true;
            }

          }
      }
    }

}

//each particle is something like:
//let thing = {x: 430, y: 200, size: 100, xSpeed: -0.6, ySpeed: 0.345};


