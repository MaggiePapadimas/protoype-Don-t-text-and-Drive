// Don't Text And Drive
// by Magdalene Papadimas
//
// this prototype will be a single player top down view side scroller.
//
// the goal of the game is to get home without "crashing". You have to avoid trees, houses, and water while answering your texts on your phone.
//
var car;
var player;
var city;
var images = [];
var menu;
var controlsMenu;
var gameScreen = 0;


function preload (){
  img1 = loadImage("assets/images/img1v2.jpg");
  img2 = loadImage("assets/images/img2v2.jpg");
  img3 = loadImage("assets/images/img3v2.jpg");
// images for control page
  controlImage = loadImage("assets/images/controlbutton.jpg");
  keyboardImage = loadImage("assets/images/controlbutton.jpg");
// buttons
  controlButton = loadImage("assets/images/controlbutton.jpg");
  playButton = loadImage("assets/images/playbutton.jpg");
  menuButton = loadImage("assets/images/menubutton.jpg");

  images = [img1, img2, img3];
}

function setup() {
  createCanvas(1000,500);
  city = new City(images, 1000);
  car = new Car(50,50,120,60,0,0,5,5,"#b70000");
  player = new Player(car);
  menu = new Menu( "#C0C0C0", width, height, controlButton, playButton);
  controlMenu = new ControlScreen( "#A3E4D7", width, height, controlImage, keyboardImage, menuButton, playButton);

  menu.display();

  city.addStreet(0);
  city.addStreet(-images[0].width);
}

//draw function
function draw () {
  if(gameScreen == 0){
    menu.handleInput();
  }
  else if(gameScreen == 1){
//displays player and updates position
    city.update();
    city.display();
    player.display();
    player.update();

  }
  else if(gameScreen == 2){
    controlMenu.display();
    controlMenu.handleInput();
  }
}
//handke input for the player
function keyPressed() {
  player.handleInput(keyCode);
}

function mousePressed (){
  if (gameScreen == 0) {

    var buttonPressed;
    buttonPressed = menu.handleInput(mouseX, mouseY);

    //if pressed then game starts
    if(buttonPressed == 1){
      gameScreen = 1;

    }
    //if pressed goes to controls screen
    else if(buttonPressed == 2){
      gameScreen = 2;
      controlMenu.display();
    }
  }
  //control screen
  if (gameScreen == 2){
    var buttonPressed;
    buttonPressed = controlMenu.handleInput(mouseX, mouseY);
    //if pressed then game starts
    if(buttonPressed == 1){
      gameScreen = 1;
    }
    //if pressed goes to menu screen
    else if(buttonPressed == 2){
      gameScreen = 0;
    }
  }
  if (gameScreen == 1){
    gameScreen == 1;
  }
}
