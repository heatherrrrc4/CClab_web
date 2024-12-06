    function setup()
  {
    let canvas = createCanvas(400,400);
    canvas.parent("sketch-container");
  }
  
    function draw() 
  {
    background(220);
    
    //table
    fill(153, 102, 51);
    rect(0, 200, 400, 150);
    //perspective
    fill(220);
    triangle(0,200,50,200,0,300)
    triangle(400,200,380,350,400,350)
    //table's legs
    fill(160, 130, 10);
    rect(0,350,20,50);
    rect(360,350,20,50);
    
    //sock-back
    noStroke();
    fill(0, 0, 153);
    ellipse(width/2, height/1.5, 200, 100);
    rect(200, 80, 100, 185);
    
    //sock-WhiteLines
    fill(255, 255, 255);
    rect(200, 80, 100, 20);
    rect(200, 110, 100, 10);
    
    //dark-blue horizontal
    fill(0, 0, 110);
    rect(130,230,169,8);
    rect(105,250,195,8);
    rect(103,270,195,8);
    rect(120,290,160,8);
    
    //dark-blue vertical
    rect(215, 120, 8, 170);
    rect(235, 120, 8, 170);
    rect(255, 120, 8, 170);
    rect(275, 120, 8, 175);
    
  }