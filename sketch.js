// características (variables)
let x = 400; // ubicación en x
let y = 150; // ubicación en y
let speedX = 6; // velocidad de x
let speedY = 6; // velocidad de y

function setup() {
  createCanvas(600, 400);
  stroke(255);
  strokeWeight(4);
  noFill();
}

function draw() {
  background(0);

  // comportamientos (símil 'métodos' de una class)

  // move: se mueve. si llega a los bordes, rebota
  if (x < 0 || x > width) {
    speedX *= -1;
  }
  if (y < 0 || y > height) {
    speedY *= -1;
  }
  x = x + speedX;
  y = y + speedY;

  // display: muestra el resultado
  circle(x, y, 50);
}