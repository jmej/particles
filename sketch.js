let particles = [];
let croissant;


function setup(){
	createCanvas(800, 800);
  croissant = loadImage('assets/croissant1.png');
  for (var i = 0; i < 1000; i++) {
    particles.push(new Particle);
  }

}


function draw(){
  background(0);
  for (var i = 0; i < particles.length; i++) {
    particles[i].move();
    particles[i].display();
  }

  // myParticle.move();
  // myParticle.display();
  
}

class Particle {
    constructor(){ //what data our objects have
      this.x = random(width);
      this.y = random(height);
      this.size = random(5, 20);
      this.xSpeed = random(-1, 1);
      this.ySpeed = random(-1, 1);
    }

    display(){
      image(croissant, this.x, this.y, this.size, this.size);
    }

    move(){
        this.x = this.x + this.xSpeed;
        this.y = this.y + this.ySpeed;
        if (this.x > width || this.x < 0){
          this.x = random(width);
        }
        if (this.y > height || this.y < 0){
          this.y = random(height);
        }
    }





}

//each particle is something like:
//let thing = {x: 430, y: 200, size: 100, xSpeed: -0.6, ySpeed: 0.345};


