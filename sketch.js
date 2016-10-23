var pug;
var papple;

var music;

function preload() {

  music = loadSound('music/music.mp3');

  imageMode(CENTER);
  pug = loadImage('imgs/pug.png');
  papple = loadImage('imgs/papple.png');
}

function setup() {

  createCanvas(1150, 700);

  dawg = new Shaperace(500, 400, 12);

  pineapple = new Shaperace(500, 400, 11);
  pineapple1 = new Shaperace(500, 400, 9);
}

function draw() {

 fill(random(0, 255));
 ellipse(random(1150), random(700), 100, 100);

 dawg.move();
 dawg.display();
 dawg.interact();

 pineapple.move();
 pineapple.display1();
 pineapple.interact();

 pineapple1.move();
 pineapple1.display2();
 pineapple1.interact();


}

function Shaperace(tempX, tempY, tempspeed) {

  this.x = tempX;
  this.y = tempY;
  this.speed = tempspeed;

this.move = function() {

  this.x += random(-this.speed, this.speed);
  this.y += random(-this.speed, this.speed);

}
this.display = function() {
  image(pug, this.x, this.y);

  if (this.y > 700 || this.y < 0) {
    fill(200, 0, 0);
    textSize(100);
    text("DAWG WINS!!!", 200, 500);

  }
}

this.display1 = function() {
  image(papple, this.x, this.y);

  if (this.y > 700 || this.y < 0) {
    fill(0, 200, 0);
    textSize(100);
    text("PANAPPLE WINS!!!", 90, 200);
  }
}

this.display2 = function() {
  image(papple, this.x, this.y);

  if (this.y > 700 || this.y < 0) {
    fill(0, 0, 200);
    textSize(100);
    text("EVERYONE WINS!!!", 80, 350);
  }
}

this.interact = function() {
    if (mouseX > 400) {
      this.x += 2
    } else {
      this.x -= 2

    }
  }
}
