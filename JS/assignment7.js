let cha1;
let points = [];
let door, windowObj;
let scene = 0; // 场景编号
let dialogueBox = null;

let shapes = []; // an empty array
let numShapes = 1000; //set numbers of circles
let hiddenPoint;
let found = false;

function setup() 
{
  let canvas = createCanvas(600, 600);
  canvas.parent("sketch-container");
  
  //scene1
  cha1 = new Character();
  
  // 定义三个点的位置
  points.push(new Point(220, 220, "It starts when we are born"));
  points.push(new Point(350, 350, "We share one bedroom and one bed"));
  points.push(new Point(480, 480, "Rosemary is my twin sister."));
  
   // 定义门和窗户的位置
  door = new Door(550, 20, 40, 60);
  windowObj = new Window(320, 100, 100, 60, "we always checked the window to see whether our parents were back.");
  
  //scene2
  for (let i = 0; i < numShapes; i++)
    {
      shapes.push(new Shape());
    }
  hiddenPoint = new HiddenPoint();
}

function draw() 
{
  if (scene === 0) 
  {
    drawStartMenu(); // 开头菜单
  } 
  else if (scene === 1) 
  {
    drawScene1(); // 游戏场景
  } 
  else if (scene === 2) 
  {
    drawScene2(); // 第二场景
  }
  
  function drawStartMenu() 
 {
  background(0); // 黑色背景
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(24);
  text("Press Any Key to Start", width / 2, height / 2);
 }
  
  function drawScene1() 
 {
  background(0);
  cha1.body();
  cha1.move();
  
  // 绘制并检测碰撞
  for (let p of points) 
  {
    p.display();
    if (p.checkCollision(cha1)) 
    {
      dialogueBox = new DialogueBox(p.message, p.x, p.y - 40); // 在点的上方显示对话框
      p.triggered = true; // 确保只触发一次
    }
  }
    
    // 绘制门和窗户，并检测碰撞
    door.display();
    windowObj.display();
    
    if (door.checkCollision(cha1))
    {
      console.log("碰到门，切换到下一个场景");
      scene = 2; // 切换到下一个场景
    }
    
    if (windowObj.checkCollision(cha1)) 
    {
      dialogueBox = new DialogueBox(windowObj.message, windowObj.x, windowObj.y - 40);
    }

  // 显示对话框
  if (dialogueBox) 
  {
    dialogueBox.display();
  }
}

  function drawScene2() 
  {
    // 场景1 - 切换后的场景
    background(220);
    if (!found) {
    hiddenPoint.display();
    hiddenPoint.checkMouse();
  } else {
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("You find it! Congrats!", width / 2, height / 2);
  }
  for (let i = 0; i < numShapes; i++)
    {
      shapes[i].drawShape(); // call the draw method
      shapes[i].moveShape(); // call the move method
    }
  
  ellipse(mouseX, mouseY, 30);//mouse
  }
}

// 按任意键切换到第一个游戏场景
function keyPressed() {
  if (scene === 0) {
    scene = 1;
  }
}

class Character
{
  constructor()
  {
    this.x = width/2+200;
    this.y = height - 50;
    this.w = 30;
    this.h = 30;
    this.c = color(0,255,0);
  }
  
  body()
  {
    fill(this.c);
    ellipse(this.x, this.y, this.w, this.h);
  }
  
  move()
  {
    //keyIsDown checks if a specific key is being pressed
    if(keyIsDown(38)) //down
      {
        this.y -= 3; //this.y = this.y - 3，向下走3的距离
      }
    
    if(keyIsDown(40)) //up
      {
        this.y += 3; //this.y = this.y + 3，向上走3的距离
      }
    if(keyIsDown(37)) //left
      {
        this.x -= 3; //this.x = this.x - 3，向左走3的距离
      }
    if(keyIsDown(39)) //right
      {
        this.x += 3; //this.x = this.x + 3，向右走3的距离
      }
  }
}

// 定义点的类
class Point {
  constructor(x, y, message) {
    this.x = x;
    this.y = y;
    this.r = 15; // 点的半径
    this.message = message; // 对话框内容
    this.triggered = false; // 确保对话只触发一次
  }

  display() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.r * 2);
  }

  checkCollision(character) {
    // 计算角色与点的距离
    let d = dist(this.x, this.y, character.x, character.y);
    return d < this.r + character.w / 2 && !this.triggered; // 半径碰撞检测
  }
}

class Door {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  display() {
    fill(0, 0, 255);
    rect(this.x, this.y, this.w, this.h);
  }

  checkCollision(character) {
    return character.x > this.x && character.x < this.x + this.w &&
           character.y > this.y && character.y < this.y + this.h;
  }
}

class Window {
  constructor(x, y, w, h, message) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.message = message;
  }

  display() {
    fill(0, 255, 255);
    rect(this.x, this.y, this.w, this.h);
  }

  checkCollision(character) {
    return character.x > this.x && character.x < this.x + this.w &&
           character.y > this.y && character.y < this.y + this.h;
  }
}


class DialogueBox {
  constructor(message, x, y) {
    this.message = message;
    this.x = x;
    this.y = y;
  }

  display() {
    textSize(16);
    fill(255);
    stroke(0);
    strokeWeight(2);

    // 计算文本宽度，并添加边距来定义对话框的宽度和高度
    let padding = 10;
    let textWidthBox = textWidth(this.message) + padding * 2;
    let textHeightBox = 30; // 对话框高度
    
    // 绘制对话框背景
    rectMode(CENTER);
    rect(this.x, this.y, textWidthBox, textHeightBox, 5); // 带圆角的矩形框
    
    // 绘制文本
    fill(0);
    noStroke();
    textAlign(CENTER, CENTER);
    text(this.message, this.x, this.y);
  }
}

class Shape //make a new class called Shape, new definition to the code
{
 constructor()  //set up constructor function for Shape objects
  {
    this.x = random(0, width);
    this.y = random(0, height);
    this.radius = random(0, 25);
    this.color = color(random(0,255),random(0,255),random(0,255))
  }
  
  //describe the instructions for "drawShape" 
  drawShape()
  {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.radius);
  }
  
  //describe the instructions for "moveShape" 
  moveShape()
  {
    //determining the distance between the mouse an that instance of  shape
    let mouseDistance = int(dist(this.x, this.y, mouseX, mouseY))
    
    if(mouseDistance <= 30)
      {
        this.x += random(-50, 50);
        this.y += random(-50, 50);
      }
  }
}

class HiddenPoint
{
  constructor() {
    this.x = random(20, width - 20); // 随机生成点的 x 坐标
    this.y = random(20, height - 20); // 随机生成点的 y 坐标
    this.r = 10; // 点的半径
  }

  display() {
    fill(255, 0, 0);
    noStroke();
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  checkMouse() {
    let d = dist(mouseX, mouseY, this.x, this.y); 
    if (d < this.r) {
      found = true; 
    }
  }
}