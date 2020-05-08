class Cover 
{

    constructor() 
    {
      this.h = 80;
      this.w = 60;
      this.x = width;
      this.y = height - this.h;
    }
  
    move() 
    {
      this.x -= 16;
    }
  
    show() 
    {
       image(covImg, this.x, this.y, this.w, this.h);
  
       //fill(255, 50);
       //ellipseMode(CORNER);
       //ellipse(this.x, this.y, this.w, this.h);
    }
  
}