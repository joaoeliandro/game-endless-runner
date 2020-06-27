let scenario;
let score;
let character;

let game;
let tapped;
let gameover;

function setup() {
  createCanvas(windowWidth, windowHeight);

  tapped = false;
  gameover = false;

  game = new Game(
    imageScenario,
    imageGameOver,
    imageCharacter,
    imageDroplet,
    imageTroll,
    imageDropletFlyer,
    soundGame,
    soundJump,
    soundGameOver);
  game.setup();

  frameRate(40);
}

function mousePressed() {
  if (!tapped) game.toggleSound();
}

function keyPressed() {
  game.jumpPressed(keyCode, gameover, tapped);
}

function draw() {
  scenario.show();
  score.show();

  if (!tapped) game.tapToPlay();
  else game.drawGame();
}
