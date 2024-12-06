let drinks = [
    { name: 'Alcohol', color: [255, 204, 0], radii: [20, 24, 28, 32, 40, 48, 60, 80, 100, 130] },
    { name: 'Coffee', color: [139, 69, 19], radii: [130, 100, 80, 60, 48, 44, 40, 36, 32, 28] },
    { name: 'Tea', color: [0, 255, 128], radii: [100, 90, 80, 70, 60, 50, 60, 70, 80, 90] },
    { name: 'Water', color: [173, 216, 230], radii: [20, 20, 20, 40, 40, 40, 20, 20, 10, 10] },
    { name: 'Coke', color: [165, 42, 42], radii: [40, 50, 60, 70, 80, 70, 80, 70, 80, 70] }
  ];
  
  let times = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM'];
  
  function setup() 
  {
    let canvas = createCanvas(600, 600);
    canvas.parent("sketch-container");
    textAlign(CENTER, CENTER);
  }
  
  function draw() 
  {
    background(255);
    
    let drinkSpacing = width / drinks.length;
    let timeSpacing = height / times.length;
  
    // time slot
    for (let j = 0; j < times.length; j++) {
      fill(0);
      text(times[j], 30, timeSpacing * (j + 0.5));
    }
  
    // drinks
    for (let i = 0; i < drinks.length; i++) {
      fill(drinks[i].color);
      text(drinks[i].name, drinkSpacing * (i + 0.8), height - 30);
    }
  
    // mouse check
    for (let i = 0; i < drinks.length; i++) {
      for (let j = 0; j < times.length; j++) {
        let x = drinkSpacing * (i + 0.5);
        let y = timeSpacing * (j + 0.5);
        let r = drinks[i].radii[j];
        
        // mouse check of drink area
        if (mouseX > drinkSpacing * i && mouseX < drinkSpacing * (i + 1) &&
            mouseY > timeSpacing * j && mouseY < timeSpacing * (j + 1)) {
          
          // draw circles
          fill(drinks[i].color);
          noStroke();
          ellipse(width / 2, height / 2, r * 2, r * 2); 
          
          // current radius
          fill(0);
          textSize(16);
          text(r, width / 2, height / 2);  // show number
        }
      }
    }
  }
  