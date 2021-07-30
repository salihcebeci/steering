// Arrive
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/OxHJ-o_bbzs
// https://thecodingtrain.com/learning/nature-of-code/5.4-arrive.html
// https://editor.p5js.org/codingtrain/sketches/1eUnUQnwB

let vehicle;

function setup() {
  createCanvas(800, 800);
  vehicles = [];
  for (i = 0; i < 100; i++){
    vehicles.push(new Vehicle(Math.floor(Math.random() * 800), Math.floor(Math.random() * 800)));
  }
}

function draw() {
  background(0);

  let target = createVector(mouseX, mouseY);
  fill(255, 0, 0);
  noStroke();
  ellipse(target.x, target.y, 32);

  for (i = 0; i < vehicles.length; i++){
    vehicle = vehicles[i];
    let steering = vehicle.seek(target);
    vehicle.applyForce(steering);
    vehicle.update();
    vehicle.show();
  }

}
