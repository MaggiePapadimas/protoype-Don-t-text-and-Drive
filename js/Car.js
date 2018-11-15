//car
function Car (x, y, w, h, vx, vy, maxSpeed, color){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.vx = vx;
  this.vy = vy;
  this.maxSpeed = maxSpeed;
  this.color = color;
}

Car.prototype.display = function () {
  fill(this.color);
  rect(this.x,this.y,this.w,this.h);
}
