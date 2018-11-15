// Don't Text And Drive
// by Magdalene Papadimas
//
// this prototype will be a single player top down view side scroller.
//
//
var car;
var player;

function setup() {
  createCanvas(500,500);
  car = new Car(50,50,60,60,0,0,5,5,"#b70000");
  player = new Player(car);
}
//draw function
function draw () {
  background(0);
  fill(250);
  textSize(50);
  text("hi", 250, 250);
//displays player and updates position
  player.display();
  player.update();
}
//handke input for the player
function keyPressed() {
  player.handleInput(keyCode);
}
