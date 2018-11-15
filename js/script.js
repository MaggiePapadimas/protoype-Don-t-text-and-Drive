// Don't Text And Drive
// by Magdalene Papadimas
//
// this prototype will be a single player top down view side scroller.
//
//
var car;

function setup() {
  createCanvas(500,500);
  car = new Car(50,50,60,60,60,60,10,"#b70000");
}

function draw () {
  background(0);
  fill(250);
  textSize(50);
  text("hi", 250, 250);

  car.display();
}
