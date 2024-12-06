let passedTime; 
  let savedTime = 0;
  let timer = 1000; 
  let toggle = true; 

function setup() 
{
    let canvas = createCanvas(400,800);
    canvas.parent("sketch-container");
}

function draw()
{
  background(255);
  strokeWeight(2);
  
    
  // Ears
  fill(225);
  stroke(0);
  ellipse(160, 45, 30, 30); // Left ear
  ellipse(240, 45, 30, 30); // Right ear
  
  // Head
  fill(255);
  stroke(0);
  ellipse(200, 105, 170, 130);
  
  // Eyes
  fill(0);
  ellipse(175, 100, 25, 30); // Left eye
  ellipse(225, 100, 25, 30); // Right eye
  fill(225);
  ellipse(175,95,15,10); //left highlight
  ellipse(175,105,10,6); //left highlight
  ellipse(225,95,15,10); //right highlight
  ellipse(225,105,10,6); //right highlight
  
  // eyebrowns
  strokeWeight(8);
  line(165, 80, 180, 75); //L
  line(220,75, 235, 80);
  
  // blush
  strokeWeight(2);
  fill(255, 192, 203);
  ellipse(160, 122, 15, 8); // L
  ellipse(240, 122, 15, 8); // R
  
  // Mouth and nose
  fill(225);
  ellipse(200, 120, 10, 6); // Nose
  line(200, 125, 200, 130); // Vertical line below nose
  line(185, 135, 200, 130); //2
  line(175, 130, 185, 135); //1
  line(215, 135, 200, 130); //3
  line(215, 135, 225, 130); //4
  
  //line(195, 140, 205, 140);
  
  // Neck
  fill(255);
  rect(190, 170, 20, 10);
  
  // Spine
  rect(192.5, 185, 15, 130);
  
  // Arms
  strokeWeight(2);
  rect(120, 230, 70, 10); // Left upper arm
  rect(210, 230, 70, 10); // Right upper arm
  rect(120, 230, 10, 70); // Left lower arm
  rect(280, 230, 10, 70); // Right lower arm
  
  // Tail
  strokeWeight(3);
  line(200, 370, 200, 430); 
  line(200, 430, 185, 460); // Left tail fin
  line(200, 430, 215, 460); // Right tail fin
  
  // Sea
  strokeWeight(3);
  noFill();
  beginShape();
  vertex(100, 480);
  bezierVertex(140, 500, 180, 460, 220, 480);
  bezierVertex(260, 500, 300, 460, 340, 480);
  endShape();
  
  //color of sea
  fill(31, 101, 207);
  noStroke();
  rect(0, 490, 400, 200)
  
  butt();
  
  if(timerLogic(2000) == true){
    eyeLid();
  }
  
}

function timerLogic(time) {
  timer = time;
  passedTime = millis() - savedTime; 
  if(passedTime > timer){
    if (toggle == true){
      toggle = false;
    } else {
      toggle = true;
    }
 savedTime = millis();
  }
  console.log(toggle)
  return toggle;
}

function butt() 
{
  beginShape(); 
  fill(225)
  vertex(170, 320)//upper left corner
  vertex(230, 320)//upper right corner
  vertex(220, 380)//lower right corner
  vertex(180, 380)//lower left corner 
  
  endShape(); 
}

function eyeLid() 
{
  fill(0);
  ellipse(175, 100, 25, 30); // Left eye
  ellipse(225, 100, 25, 30); // Right eye
}
  
  