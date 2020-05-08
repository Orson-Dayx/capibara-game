let capibara;
let capImg = [];
let covImg;
let bImg;
let cover = [];

function preload() 
{
  capImg[0] = loadImage('https://psv4.userapi.com/c856328/u219205318/docs/d11/31f439c6caba/capibara1.png?extra=ThVrLIn2cIsWGdFcxwRK0SRSe6TwP4uZ1M0JS-Cqqigjep9ArdYUZuupYlTGx4uHYl0IDx8PfnwMLiyEfJ0kRH699kTJ72EZCU4AFL_3VwtGxH-STOxdQJiVqjemD-FFNp7fecUGF7jPdgea9VZYxT149A');
  capImg[1] = loadImage('https://psv4.userapi.com/c856328/u219205318/docs/d7/3c37c0565653/capibara2.png?extra=4pMFesh2BnxDON2OKha92snDEVT2m-HQJ31IaWkTqFK0Gs9pgnPLm4V39qXFNTaMR3baS6RWfcfK0mSvlKluhNonwbaXEdbH4YY7QClAf0Ydtv2OBlFKkcs3Kcsc_qLhM8WWd06OyjD-vNi4XuTL9-d8kA');
  covImg = loadImage('https://sun9-43.userapi.com/c858520/v858520075/18d6fc/ELId6l16M9A.jpg');
  bImg = loadImage('https://sun9-64.userapi.com/c858120/v858120383/1f050a/wb4pLv_AlnY.jpg');
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