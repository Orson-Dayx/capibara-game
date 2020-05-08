let capibara;
let capImg = [];
let covImg;
let bImg;
let cover = [];

function preload() 
{
  capImg[0] = loadImage('https://raw.githubusercontent.com/Orson-Dayx/capibara-game/master/capibara1.png');
  capImg[1] = loadImage('https://raw.githubusercontent.com/Orson-Dayx/capibara-game/master/capibara2.png');
  covImg = loadImage('https://raw.githubusercontent.com/Orson-Dayx/capibara-game/master/label.jpg');
  bImg = loadImage('https://raw.githubusercontent.com/Orson-Dayx/capibara-game/master/background.png');
}

function mousePressed() 
{
  cover.push(new Cover());
}

function setup() 
{
  createCanvas(800, 450);
  capibara = new Capibara();
}


function keyPressed() 
{
  if (key == ' ') 
  {
    capibara.jump();
  }
}

function draw() 
{
  
  if (random(1) < 0.005) 
  {
    cover.push(new Cover());
  }
  
  background(bImg);
  for (let t of cover) 
  {
    t.move();
    t.show();
    if (capibara.hits(t)) 
    {
      console.log('game over');
      noLoop();
    }
  }

  capibara.show();
  capibara.move();
}