var bubbles = [];
var score = 0;
var btn;
var bubble_img;
var bg_img;

function preload() {
  bubble_img = loadImage('images/bubble.png');
  bg_img = loadImage('images/background.png');
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  for(var i = 0; i < 10; i++) {
  	bubbles.push(new Bubble(random(100, width - 200), random(300, -3000)));
  }

  btn = createButton('Play Again!');
  btn.hide();
}

function draw() {
  background(bg_img);
  updateGame();

  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].show();
    bubbles[i].update();

    if(bubbles[i].bounds()){
      gameOver();
      resetButton();
    }

    if(bubbles[i].clicked()){
      textSize(60);
      fill(255);
      text('pop!', mouseX - 15, mouseY + 5);
  	}
  }

  fill(255);
  textSize(140);
  text(score, window.width/2 - 50, 200);
}

function mousePressed() {
  for(var i = 0; i < bubbles.length; i++){
    if(bubbles[i].clicked()){
    	bubbles.splice(i, 1);
      bubbles.push(new Bubble(random(100, width - 200), random(300, -4000)));
      score++;
    }
  }
}

function resetGame() {
  for(var i = 0; i < bubbles.length; i++) {
    btn.hide();
    loop();
    bubbles[i].x = random(100, width - 200);
    bubbles[i].y = random(200, -3000);
  }
}

function gameOver() {
  noLoop();
  textSize(100);
  return text('Game Over!', window.innerWidth/4, window.innerHeight/2);
}

function resetButton() {
  btn.position(window.innerWidth/2.5, window.innerHeight/2 + 20);
  btn.mousePressed(resetGame);
  btn.show();
  return btn;
}

function updateGame() {
  for(let i = 0; i < bubbles.length; i++) {
    if(score >= 50){
      bubbles[i].velY = 7;
    } else if (score >= 100){
      bubbles[i].velY = 10;
    } else if (score >= 150){
      bubbles[i].velY = 13;
    } else if (score >= 200){
      bubbles[i].velY = 16;
    }
  }
}
