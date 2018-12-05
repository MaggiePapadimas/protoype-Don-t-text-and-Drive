// Don't Text And Drive
// by Magdalene Papadimas
//
// this prototype will be a single player top down view side scroller.
//
// the goal of the game is to get home without "crashing". You have to avoid trees, houses, and water while answering your texts on your phone.
//this is script
//controls the scroll speed
var scrollSpeed = 6;
var maxCars = 6;
// cars to dodge
var enemyCar;
//player
var playerCar;
var player;
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
var phoneText;
// canvas
var screenWidth = 1000;
var screenHeight = 833;

var monoFont;
// images
function preload (){
 monoFont = loadFont("assets/fonts/UbuntuMono-R.ttf");
  // background images
  var streetImg0 = loadImage("assets/images/street0.jpg");
  var streetImg1 = loadImage("assets/images/street1.jpg");
  var streetImg2 = loadImage("assets/images/street2.jpg");
  var streetImg3 = loadImage("assets/images/street3.jpg")

  var carImg0 = loadImage("assets/images/car_blue.png");
  var carImg1 = loadImage("assets/images/car_green.png");
  var carImg2 = loadImage("assets/images/car_grey.png");
  var carImg3 = loadImage("assets/images/car_red.png");
  var carImg4 = loadImage("assets/images/car_yellow.png");

  var heartImg =  loadImage("assets/images/heart.png");
// images for control page

// background loop
  streetImages = [streetImg0, streetImg1, streetImg2, streetImg3];
  carImages = [carImg0, carImg1, carImg2, carImg3];

}
// loads background, player, menu, and enemy cars
function setup() {
  textFont(monoFont);

  createCanvas(screenWidth,screenHeight);
  city = new City(streetImages, screenWidth);
  playerCar = new Car(15,250,120,60,0,0,7,7,"#b70000", carImages[1]);
  player = new Player(playerCar, 0, screenWidth, 100, 625);
  traffic = new Traffic(-9, screenWidth, 0, maxCars, carImages);
  phoneText = new PhoneText("type this text", 550, 100, 400, 300, "#636363", "#004545", "#670020", "#ffffff" )

//  menu = new Menu( "#C0C0C0", width, height, controlButton, playButton);
//  controlScreen = new ControlScreen( "#A3E4D7", width, height, controlImage, keyboardImage, playButton, playButton);

//  menu.display();
// loops the street
  city.addStreet(0);
  city.addStreet(streetImages[0].width);
  var start = screenWidth;
  var space = 400;
  for(var i = 0; i < 3; i++){
    traffic.addCar(start);
    start += space;
  }
}

//draw function
function draw () {
//  if(gameScreen == 0){
//    menu.display();
//    menu.handleInput();
//  }
//  else if(gameScreen == 1){
//displays player and updates position, and traffic
  city.update();
  traffic.update(player);
  city.display();
// displays player
  player.display();
  player.update();
// displays the traffic and text
  traffic.display();
  phoneText.display();


//  }
//  else if(gameScreen == 2){
//    controlScreen.handleInput();
//    controlScreen.display();
//  }
}
//handle input for the player and phone
function keyPressed() {
  player.handleInput(keyCode);
  phoneText.handleInput(keyCode);
}


// this is for the menus
// function mousePressed (){
//   if (gameScreen == 0) {
//
//     var buttonPressed;
//     buttonPressed = menu.handleInput(mouseX, mouseY);
//
//     //if pressed then game starts
//     if(buttonPressed == 1){
//       gameScreen = 1;
//     }
//     //if pressed goes to controls screen
//     else if(buttonPressed == 2){
//       gameScreen = 2;
//       controlScreen.display();
//     }
//   }
//   //control screen
//   if (gameScreen == 2){
//     var buttonPresser;
//     buttonPresser = controlScreen.handleInput(mouseX, mouseY);
//     //if pressed then game starts
//     if(buttonPresser == 1){
//       gameScreen = 1;
//     }
//     //if pressed goes to menu screen
//     else if(buttonPresser == 2){
//       gameScreen = 0;
//     }
//   }
//   if (gameScreen == 1){
//     gameScreen == 1;
//   }
// }
