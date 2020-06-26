let imageScenario;
let imageCharacter;
let imageDroplet;
let imageDropletFlyer;
let imageTroll;
let imageGameOver;

let scenario;
let character;
let score;
const enemies = [];

let soundGame;
let soundGameOver;
let soundJump;

const widthCharacter = 130;
const heightCharacter = 155;
const widthDroplet = 70;
const heightDroplet = 70;
const widthdropletFlyer = 120;
const heightdropletFlyer = 100;
const widthTroll = 220;
const heightTroll = 220;

let tapped;
let gameover;

function preload() {
  imageScenario = loadImage('http://localhost:3333/images/scenario/forest.png');
  imageGameOver = loadImage('http://localhost:3333/images/assets/game-over.png');

  imageCharacter = loadImage('http://localhost:3333/images/character/running.png');
  imageDroplet = loadImage('http://localhost:3333/images/enemies/droplet.png');
  imageDropletFlyer = loadImage('http://localhost:3333/images/enemies/droplet.png');
  imageDropletFlyer = loadImage('http://localhost:3333/images/enemies/droplet_flyer.png');
  imageTroll = loadImage('http://localhost:3333/images/enemies/troll.png');

  soundGame = loadSound('http://localhost:3333/sounds/sound_game.mp3');
  soundGameOver = loadSound('http://localhost:3333/sounds/sound_gameover.mp3');
  soundJump = loadSound('http://localhost:3333/sounds/sound_jump.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  tapped = false;
  gameover = false;

  scenario = new Scenario(imageScenario, 4);
  score = new Score();

  character = new Character('character', imageCharacter,
    80, 30, widthCharacter, heightCharacter, 220, 270);

  const droplet = new Enemy('droplet', imageDroplet,
    width, 30, widthDroplet, heightDroplet, 104, 104, 9, 200);
  const troll = new Enemy('troll', imageTroll,
    width, 0, widthTroll, heightTroll, 400, 400, 9, 1500);
  const dropletFlyer = new Enemy('dropletFlyer', imageDropletFlyer,
    width, 300, widthdropletFlyer, heightdropletFlyer, 200, 150, 8, 2500);

  enemies.push(droplet);
  enemies.push(troll);
  enemies.push(dropletFlyer);

  frameRate(40);
}

function mousePressed() {
  if (!tapped)
    toggleSound();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    character.jump();
    if (!gameover) soundJump.play();
  }
}

function draw() {
  scenario.show();
  score.show();

  if (!tapped) {
    tapToPlay();
  }

  if (tapped) {
    score.addScore();
    scenario.move();

    character.show();
    character.applyGravity();

    enemies.forEach(enemy => {
      enemy.show();
      enemy.move();

      if (character.isColliding(enemy)) {
        gameover = true;

        if (tapped) soundGame.stop();

        image(imageGameOver, width / 2 - 200, height / 2 - 50);
        soundGameOver.play();
        noLoop();
      }
    });
  }
}

function toggleSound() {
  tapped = true;
  soundGame.loop();
}

function tapToPlay() {
  rectMode(CENTER);
  stroke('red');
  strokeWeight(4);
  rect(width / 2, height / 2 - 10, 350, 80, 10);

  textAlign(CENTER);
  fill('#fff');
  textSize(45);
  text('Tap to play', width / 2, height / 2);
}
