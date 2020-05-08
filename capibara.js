class Capibara 
{
  
  constructor() 
  {
    this.r = 100;
    this.w = 100;
    this.h = 50;
    this.x = 50;
    this.y = height - this.h;
    this.vy = 0;
    this.gravity = 3;
    this.animationSpeed = 3;
    this.curent = 0;
    this.delta = 0.25;
    this.anim = 0;
  }

  jump() 
  {
    if (this.y == height - this.h) 
    {
      this.vy = -35;
    }
  }

  hits(cover) 
  {
    let x1 = this.x + this.w * 0.5;
    let y1 = this.y + this.h * 0.5;
    let x2 = cover.x + cover.w * 0.5;
    let y2 = cover.y + cover.h * 0.5;
    return collideRectRect(this.x, this.y, this.w, this.h, cover.x, cover.y, cover.w, cover.h);
  }

  move() 
  {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.h);
  }

  show() 
  {
     this.curent +=this.delta
     if (this.curent >= this.animationSpeed)
     {
       this.anim++;
       if (this.anim >= 2) {this.anim = 0}
       this.curent = 0;
     }
     image(capImg[this.anim], this.x, this.y, this.w, this.h);
    
     //fill(255, 50);
     //ellipseMode(CORNER);
     //ellipse(this.x, this.y, this.r, this.r);  
  }
}