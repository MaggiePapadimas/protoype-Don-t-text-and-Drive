// Don't Text And Drive
// by Magdalene Papadimas
//
// this prototype will be a single player top down view side scroller.
//
// the goal of the game is to get home without "crashing". You have to avoid trees, houses, and water while answering your texts on your phone.
//this is script
//controls the scroll speed


var scrollSpeed = 15;
var maxCars = 5;
var trafficSpeed = -9;
// cars to dodge
var enemyCar;
//player
var player;
var playerImg;
//background
var city;
var streetImages = [];

var carImages = [];

// for menu
var menu;
var controlsMenu;
// screens
var gameScreen = 0;
// enemy cars
var traffic;
// texts
var phone;
// canvas
var screenWidth = 1500;
var screenHeight = 720;

var monoFont;

var soundReceive;
var soundType;
var soundSend;

// images
function preload (){

  soundReceive = new Audio("assets/sounds/sound_receive.wav");
  soundSend = new Audio("assets/sounds/sound_send.wav");
  soundType = new Audio("assets/sounds/sound_type.wav");
  //soundSend
  monoFont = loadFont("assets/fonts/UbuntuMono-R.ttf");
  // background images
  var streetImg0 = loadImage("assets/images/street0.png");
  var streetImg1 = loadImage("assets/images/street1.png");
  var streetImg2 = loadImage("assets/images/street2.png");
  var streetImg3 = loadImage("assets/images/street3.png");

  playerImg = loadImage("assets/images/car_player.png");
  var carImg0 = loadImage("assets/images/car_blue.png");
  var carImg1 = loadImage("assets/images/car_green.png");
  var carImg2 = loadImage("assets/images/car_grey.png");
  var carImg3 = loadImage("assets/images/car_red.png");
  var carImg4 = loadImage("assets/images/car_yellow.png");
  var carImg5 = loadImage("assets/images/car_orange.png");


  var heartImg =  loadImage("assets/images/heart.png");

  phoneImg = loadImage("assets/images/phone1.png");
// images for control page

// background loop
  streetImages = [streetImg0, streetImg1, streetImg2, streetImg3];
  carImages =  [carImg0, carImg1, carImg2, carImg3, carImg4, carImg5];


}
// loads background, player, menu, and enemy cars
function setup() {
  textFont(monoFont);

  createCanvas(screenWidth,screenHeight);
  city = new City(streetImages, screenWidth);
  var playerCar = new Car(15,250,120,60,0,0,7,7,"#b70000", playerImg);
  player = new Player(playerCar, 0, screenWidth, 100, 625);
  traffic = new Traffic(trafficSpeed, screenWidth, 0, maxCars, carImages);
  phone = new Phone(600,10,phoneImg, soundReceive, soundSend, soundType);

// add the first 2 streets.
// new street is spawned at back of second street when first street is gone
  city.addStreet(0);
  city.addStreet(streetImages[0].width);
  var start = screenWidth;

  // add first set of cars. It works like street where a new car will spawn
  // when a car goes off screen
  var space = 300;
  for(var i = 0; i < maxCars; i++){
    traffic.addCar(start);
    start += space;
  }
  phone.addText();
}

//draw function
function draw () {

//displays player and updates position, and traffic
  city.update();
  traffic.update(player);
  city.display();
// displays player
  player.display();
  player.update();
// displays the traffic and text
  traffic.display();
  phone.display();

  phone.addText();
}
//handle input for the player and phone
function keyPressed() {
  player.handleInput(keyCode);
  phone.handleInput(keyCode);

}
