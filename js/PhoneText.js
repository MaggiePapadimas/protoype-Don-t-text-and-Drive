// NEW ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// this is the texts that the player needs to answer to get points
//incoming texts for player
var incomingTexts = [
  "Hey!",
  "How are you!",
  "What are you doing?"
]

// 30 chars max for the answer
var replies = [
  "hi",
  "im good",
  "im driving home now"
]
// this is for the text
var maxChars = 25;
function PhoneText(text, x, y, width, height, oldColor, currColor, nextColor, backgroundColor ){
  this.FullText = text;
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = 32;
// color for text
  this.oldColor = oldColor;
  this.currColor = currColor;
  this.nextColor = nextColor;

  this.oldText = "";
  this.currentText = this.FullText.charAt(0);
  this.nextText = this.FullText.substring(1,this.FullText.length)
  this.backgroundColor = backgroundColor;
// position of text and flashing of text
  this.position = 0;
  this.flashCount = 0;
  this.flashReset = 20;
  this.flashOn = true;
}
// displays the text
PhoneText.prototype.display = function () {
  textAlign(LEFT);
  textSize(30);
  fill(this.backgroundColor);
  rect(this.x,this.y,this.width,this.height);

  fill(this.oldColor);
  text(this.oldText, this.x, this.y, this.width, this.height);
  var spaces = " ".repeat(this.oldText.length);

  this.flashCount++;
  if(this.flashCount == this.flashReset){
    this.flashCount = 0;
    this.flashOn = ! this.flashOn;
  }
  if(this.flashOn)fill(this.currColor);
  else fill(0);
  text(spaces + this.currentText, this.x,this.y,this.width,this.height);

  var spaces = " ".repeat(this.oldText.length + this.currentText.length );
  fill(this.nextColor);
  text(spaces + this.nextText,this.x,this.y,this.width,this.height);
}
// this handles the text input
PhoneText.prototype.handleInput = function( character ) {
  // backspace = 8
  // enter = 13
  // space = 32

  // a = 65
  // z = 90

  if(this.position < maxChars && ( (character >= 65 && character <= 90) || character == 32)){
    this.position++;
    this.oldText += (char)(character).toLowerCase();
    this.currentText = this.FullText.charAt(this.position);
    this.nextText = this.FullText.substring(1 + this.position, this.FullText.length)
  }

  if(character == 13){
    var score = 1;

    for(var i = 0; i < this.oldText.length; i++){
        if(this.oldText.charAt(i) == this.FullText.charAt(i)){
          score++;
        }
    }

    var unwrittenOrExtra = abs(this.FullText.length - this.oldText.length);
    if(unwrittenOrExtra > 0){
      score -= unwrittenOrExtra;
    }
    if(score < 1) score = 1;
    console.log(score + " / " + (1 + this.FullText.length));
    return score;
  }
  if(character == 8 && this.position > 0){
    this.position--;
    this.oldText = this.oldText.substring(0,this.position);
    this.currentText = this.FullText.charAt(this.position);
    this.nextText = this.FullText.substring(this.position + 1, this.FullText.length);
  }
  return 0;
}

// ******************************************************************************

// this is the phone
function Phone( x, y, w, h ){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;

  this.position = 0;
}
// display for the phone
Phone.prototype.display = function() {

}
// this handles the input
Phone.prototype.handleInput = function () {

}
