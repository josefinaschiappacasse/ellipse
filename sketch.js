
let sketch;

function setup() {
  //angleMode(RADIANS);
  sketch = createCanvas(600, windowHeight);
  sketch.parent("p5");
  /*g = map(mouseX, 0, 400, 90, 255);
  g = map(mouseY, 0, 400, 255, 90);

  background(0, g, 0);*/
  // background(245, 245, 219);
  background(255);
}

function draw() {

  //figuras
  stroke(0,0,0, 90);
  strokeWeight(1);
  //fill(245, 245, 219, 75);
 noFill();
//  ellipse(mouseX, 48, mouseY, 50);
  ellipse(300, mouseY, mouseX, 50);

  //fill(245, 245, 219, 75);
 /* noFill();
  ellipse(48, mouseY, 50, 50);
  ellipse(mouseX, 352, 50, 50);*/

  /*fill(245, 245, 219, 75);
  noFill();
  triangle(mouseX, mouseY, 200, 150, 200, 230)*/

  /* angleMode(DEGREES); 
    let a = atan2(mouseY - height / 2, mouseX - width / 2);
    translate(width / 2, height / 2);
    push();
    rotate(a);
    pop();
    angleMode(RADIANS);
    rotate(a); 
    fill(245, 245, 219, 75);
    triangle(-30, -5, 200, 150, 200, 230);*/

  //  drawBlob();
}

function mousePressed() {
  /*g = map(mouseX, 0, 400, 90, 255);
 g = map(mouseY, 0, 400, 255, 90);*/

  //background(245, 245, 219);
  background(255);

  //background(0, g, 0);
}
//function mousePressed() {
//print("vertex(" + mouseX + "," + mouseY + ");");
//}

function keyTyped() { //cuando apretas g te descarga la foto
  if (key == 'g') save("P_2_1_3_01.jpg");
}