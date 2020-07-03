let scenario;
let score;
let life;
let character;

let game;
let tapped;
let gameover;
let currentScene = 'starterScreen';
let scenes;
let starterScreen;
let buttonMenager;

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

  starterScreen = new StarterScreen();

  scenes = {
    game,
    starterScreen,
  };

  buttonMenager = new ButtonMenager('Tap to Play ▶ ', width / 2, height / 2);

  life = new Life();

  frameRate(40);
}

function keyPressed() {
  game.jumpPressed(keyCode, gameover, tapped);
}

function draw() {
  if (!tapped) scenes[currentScene].draw();
  else game.draw();
}
