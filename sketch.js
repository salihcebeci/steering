// Arrive
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/OxHJ-o_bbzs
// https://thecodingtrain.com/learning/nature-of-code/5.4-arrive.html
// https://editor.p5js.org/codingtrain/sketches/1eUnUQnwB

let vehicle;

function setup() {
  createCanvas(800, 800);
  v1 = new Vehicle(100, 100, (255, 0, 0));
  v2 = new Vehicle(600, 600, (0,0, 255));
}

function draw() {
  background(0);

  let target = createVector(mouseX, mouseY);
  fill(255, 0, 0);
  noStroke();
  ellipse(target.x, target.y, 32);

  let steering = v1.seek(target);
  v1.applyForce(steering);
  v1.update();
  v1.show();

  let s2 = v2.pursue(v1);
  v2.applyForce(s2);
  v2.update();
  v2.show();


}
