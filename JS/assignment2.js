function setup() {
    let canvas = createCanvas(400,400);
    noLoop();
    canvas.parent("sketch-container");
  }
  
  function draw() {
    background(255);
    let faceSize = map(mouseX, 0, width, 50, 220);  // face size
    let eyeSize = map(mouseY, 0, height, 10, 25);   // eye size
    
    //face
    fill(255, 220, 180);
    ellipse(width / 2, height / 2, faceSize, faceSize);
    
    //eyes
    let eyeXOffset = faceSize * 0.25;
    fill(0);
    ellipse(width / 2 - eyeXOffset, height / 2 - faceSize * 0.2, eyeSize, eyeSize);  // Left eye
    ellipse(width / 2 + eyeXOffset, height / 2 - faceSize * 0.2, eyeSize, eyeSize);  // Right eye
    
    //mouth
    let mouthY = height / 2 + faceSize * 0.25;
    noFill();
    stroke(0);
    strokeWeight(4);
    arc(width / 2, mouthY, faceSize * 0.5, faceSize * 0.2, 0, PI);  // Smiling mouth
  }
  
  function mouseMoved() {
    redraw();
  }
  