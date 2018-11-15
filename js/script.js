// Don't Text And Drive
// by Magdalene Papadimas
//
// this prototype will be a single player top down view side scroller.
//
//
var car;
var player;
var city;
var images = [];
function preload (){
  var img1 = loadImage("assets/images/img1.jpg");
  var img2 = loadImage("assets/images/img2.jpg");
  var img3 = loadImage("assets/images/img3.jpg");

  images = [img1, img2, img3];
}

function setup() {
  createCanvas(500,500);
  car = new Car(50,50,60,120,0,0,5,5,"#b70000");
  player = new Player(car);
  city = new City(images, 500);

  city.addStreet(0);
  city.addStreet(-images[0].height);
}
//draw function
function draw () {
//displays player and updates position
  city.update();
  city.display();
  player.display();
  player.update();

}
//handke input for the player
function keyPressed() {
  player.handleInput(keyCode);
}
