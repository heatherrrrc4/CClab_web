function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent("sketch-container");
  }
  
  function draw() {
    background(220);
    let pantsLength = map(mouseY, 0, height, 350, 50);
    let age = map(mouseY, height, 0, 0, 24);
  
    // Draw the pants
    fill(0, 100, 200);
    rect(width / 2 - 50, height - pantsLength, 100, pantsLength); 
  
    // Draw feet
    fill(255, 200, 200);
    rect(width / 2 - 40, height - 10, 30, 10);
    rect(width / 2 + 10, height - 10, 30, 10);
  
    // texts
    textSize(20);
    fill(0);
    textAlign(CENTER);
    text("Age: " + round(age), width / 2, 60);
    text("Pants Length: " + round(pantsLength), width / 2, 30);
  }