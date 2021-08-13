var myData = [
  {
    "name": "Carrot",
    "value": "10"
  },
  {
    "name": "Celery",
    "value": "12"
  },
  {
    "name": "Radish",
    "value": "5"
  },
  {
    "name": "Tomato",
    "value": "8"
  },
  {
    "name": "Corn",
    "value": "11"
  },
  {
    "name": "Green Beans",
    "value": "9"
  },
  {
    "name": "Broccoli",
    "value": "7"
  }
];

let scale = 15;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255);
  
  push();
  textAlign(CENTER,CENTER);
  text("Vegetables", 0, 20, width, 30);
  pop();
  
  for(var i=0; i<=16; i++){
    let y = 300 - i * scale;
    push();
    stroke(230);
    
    if(i % 2 === 0){
      textAlign(RIGHT, CENTER);
      text(i, 30, y);
    }
    
    line(50, y, width-50, y);
    pop();
  }
  
  myData.forEach(createBar)
}

function createBar(entry,index){
    let leftMargin = 50;
    let barHeight = entry.value * scale;
    let barWidth = 15;
    let barSpacing = 10;
    
    let x = (barWidth + barSpacing) * index + leftMargin;
    let y = 300 - barHeight;
    
    push();
    noStroke();
    fill(190);
    rect(x,y, barWidth, barHeight);
    pop();
    
    push();
    translate(x, 310);
    rotate(Math.PI * 45 / 180);
    text(entry.name, 0, 0);
    pop();
}