let blueStripeX = 0; 
let blueStripeY = -20; 

let angle = 0;
let sunColor;

let stripeCount = 20; 
let stripeWidth; 
let offset = 0;
let totalStripes = stripeCount+1; 

function setup() 
{
  let canvas = createCanvas(460, 600);
  canvas.parent("sketch-container");
  sunColor = color(255, 204, 0);
  stripeWidth = width / stripeCount
}

function draw() 
{
  background(0, 18, 150);
  
  //stripe
  for (let i = 0; i < stripeCount; i++) 
  {
    let neonColor;
    if (i % 2 == 0) 
    {
      neonColor = color(255, 85, 255); // Pink
    } 
    else 
    {
      neonColor = color(0, 255, 255); // Cyan
    }
    
    fill(neonColor);
    noStroke();
    
    let xPos = (i * stripeWidth + offset) % width;
    rect(xPos, 0, stripeWidth, height); 
  }
  offset -=0.5;

  if (offset <= -stripeWidth*2) {
    offset = 0;
  }
   
  translate(0,0)
  for(let i=0;i<10;i++){
    pinna(i*15)//make sure multiplier is odd
  }
  
  //blueStripe(blueStripeX,blueStripeY); 
  
    //sun
  //fill(255, 191, 15);
  //noStroke();
  //ellipse(290, 180, 270);
  
  //black
  fill(0)
  rect(0, 400, 120, 200);
  rect(20, 310, 100, 100);
  rect(130, 330, 45, 270);
  rect(175, 270, 120, 330);
  rect(285, 290, 80, 320);
  rect(365, 200, 120, 400);
  rect(425, 192, 20, 8);
  
  //windows
  fill(199, 153, 28);
  
  rect(30, 330, 8,12);
  rect(30, 350, 8,12);
  rect(30, 370, 8,12);
  rect(30, 390, 8,12);
  
  rect(30, 490, 8,12);
  rect(30, 510, 8,12);
  rect(30, 530, 8,12);
  rect(30, 550, 8,12);
  
  rect(100, 410, 8,12);
  rect(100, 430, 8,12);
  rect(100, 450, 8,12);
  rect(100, 470, 8,12);
  
  rect(145, 338, 12, 20);
  rect(145, 370, 12, 20);
  rect(145, 402, 12, 20);
  
  rect(390, 305, 35, 30);
  rect(390, 338, 35, 30);
  
  
  for (let i = 0; i < 20; i++) 
  {
    let alpha = map(i, 0, 20, 50, 0); 
    let radius = map(i, 0, 10, 100, 200);
    fill(255, 204, 0, alpha); 
    noStroke();
    ellipse(290, 150, radius, radius);
  }
  
  // Animate the sun
  let sunSize = 100 + sin(angle) * 10; 
  fill(sunColor);
  ellipse(290, 150, sunSize, sunSize);
  
  angle += 0.05; 
  
  

  
}

// function blueStripe()
// {
//   if (blueStripeX <= width)
//   {
//     blueStripeX++;
//   }
//   else 
//   {
//     blueStripeX = 0; 
//   }

//   //blue
//   fill(0, 18, 150);
//   //orginal x,y position: 0,0
//   rect(blueStripeX+100,blueStripeY, 50,600)
//   rect(blueStripeX+200,blueStripeY, 50,600)
//   rect(blueStripeX+300,blueStripeY, 50,600)
//   rect(blueStripeX+400,blueStripeY, 50,600)
//   rect(blueStripeX-100,blueStripeY, 50,600)
//   rect(blueStripeX-200,blueStripeY, 50,600)
//   rect(blueStripeX-300,blueStripeY, 50,600)
//   rect(blueStripeX-0,blueStripeY, 50,600)
//   rect(blueStripeX-400,blueStripeY, 50,600)
//   rect(blueStripeX-500,blueStripeY, 50,600)
// }

function pinna(r){
  n=floor(r/2)
  if(n%2===1){
    n=n+1;
  }
  if (r%2===0){
    c=-1
  }else{c=1}
  d=7
  for(let i=0;i<n;i++){
      if(i%2==0){
        stroke(255)
      }else{
        stroke(0)
      }
      push()
      rotate(PI/17*c)
      rect(r*sin(TWO_PI/n*i),r*cos(TWO_PI/n*i),5,5)
      pop()
    }
    
}
function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
  