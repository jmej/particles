let particles = [];
let croissants = [];
let wind; 
let gravity; 


function setup(){
	createCanvas(800, 800);
  croissants[0] = loadImage('assets/croissant1.png');
  croissants[1] = loadImage('assets/croissant2.png');
  wind = createVector(0.008, 0);
  gravity = createVector(0, 0.005);

  for (var i = 0; i < 1000; i++) {
    particles.push(new Particle);
  }

}


let timer = 0;
let counted = false;

function draw(){
  background(0);
  let windAmount = map(mouseX, 0, width, -1, 1);
  wind.mult(windAmount);
  print(wind.x);
      
  for (var i = 0; i < particles.length; i++) {
    particles[i].move();
    particles[i].display();
  }

  // myParticle.move();
  // myParticle.display();
  
}

class Particle {
    constructor(){ //what data our objects have
      this.location = createVector(0,0);
      this.velocity = p5.Vector.random2D();
      this.velocity = this.velocity.mult(random(-1, 1));
      this.size = 25;
      this.image = int(random(2));
    }

    display(){
      image(croissants[this.image], this.location.x, this.location.y, this.size, this.size);
    }

    move(){
        this.velocity = this.velocity.add(gravity);
        this.velocity = this.velocity.add(wind);
        this.location = this.location.add(this.velocity);

        // if (this.x > width || this.x < 0){
        //   this.x = random(width);
        // }
        // if (this.y > height || this.y < 0){
        //   this.y = random(height);
        // }
    }





}

//each particle is something like:
//let thing = {x: 430, y: 200, size: 100, xSpeed: -0.6, ySpeed: 0.345};


