

var textWaitMin = 3;
var textWaitMax = 10;

var senders = [
  "girl",
  "girl",
  "Mom",
  "girl",
  "Jo-bro",
  "girl",
  "girl",
]

var incomingTexts = [
  "Hey!",
  "How are you!",
  "Hey honey are you going to pick up the dinner i made for you? :) xoxoxoxo :D",
  "Im great! So what are you doing now?",
  "BROOOO u comming to alex's party!!!!???? XD",
  "Oh, you really shouldn't text and drive >:(",
  "Well anyway, do you think you can pick up some eggs?"
]

// 30 chars max for the answer
// xxxxxxxxxxxxxxxxxxxxxxxxxxxx
var replies = [
  "hi",
  "im good you",
  "no mom im busy today",
  "im driving home now",
  "haha yeee man whos going",
  "well i do this often",
  "im only five minutes "

]

var oldColor = "#636363";
var currColor = "#FF0000";//"#004545"
var nextColor ="#670020";
var backgroundColor =  "#ffffff";

// these valuses depend on the image used
var paddX = 28;

var incPaddX = 90;
var widthIncX = 265;
var senderBoxWidth = 330;
function Phone( x, y, img, soundReceive, soundSend, soundType ){
  this.x = x;
  this.y = y;
  this.w = img.width;
  this.h = img.height;

  this.paddX = paddX;
  this.incPaddX = incPaddX;
  this.widthIncX = widthIncX;

  this.incomingX = 1;
  this.incomingY = 90;

  this.outgoingX = 1;
  this.outgoingY = 303;


  this.senderX = img.width / 2 - senderBoxWidth / 2;
  this.senderY = 40;

  this.outgoingText;
  this.incomingText;
  this.senderText;

  this.textID = 0;
  this.score = 0;
  this.hasText = false;
  this.img = img;
  this.soundReceive = soundReceive;
  this.soundSend = soundSend;
  this.soundType = soundType;

  this.currentTime = millis();
  this.waitTime = 0;textWaitMax * 1000;
}
// display for the phone
Phone.prototype.display = function() {
  if(this.hasText){
    // draw all parts of the phone
    image(this.img,this.x,this.y);

    fill(255,255,255);
    // test rect
  //  rect( this.x + this.senderX, this.y + this.senderY, senderBoxWidth, 32);
    fill(0)

    text(this.incomingText, this.x + this.incomingX + this.incPaddX, this.y + this.incomingY,
    widthIncX, 160);

    push();
    textAlign(CENTER);
    text(this.senderText, this.x + this.senderX, this.y + this.senderY, senderBoxWidth, 32);
    pop();
  //  fill(100,100,100,150);
  //  rect(this.x,this.y,this.w,this.h);

    this.outgoingText.display();
  }

}
// this handles the input
Phone.prototype.handleInput = function (input) {
  if(this.hasText){
    this.outgoingText.handleInput(input);
    if(input == 13){
      this.score += this.outgoingText.score;
      soundSend.play();
      this.hasText = false;
      this.currentTime = millis();
      this.waitTime = random(textWaitMin, textWaitMax) * 1000;
    }
  }

}

Phone.prototype.addText = function(){
  if(!this.hasText && millis() - this.currentTime > this.waitTime){
    this.soundReceive.play();
    this.hasText = true;
    var xSize = this.w - 2*this.paddX;
    var ySize = 35;

    var xPos = this.x +this.paddX + this.outgoingX;
    var yPos =  this.y+ this.outgoingY;

    this.outgoingText = new PhoneText(replies[this.textID],
      xPos, yPos, xSize, ySize, oldColor,
      currColor, nextColor, backgroundColor, this.soundType );

    this.incomingText = incomingTexts[this.textID];
    this.senderText = senders[this.textID];
    this.textID++;
    this.textID%= replies.length;
  }
}
