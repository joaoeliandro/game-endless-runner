let imageScenario;
let imageCharacter;
let imageEnemy;

let scenario;
let character;
let enemy;
let soundGame;

const widthCharacter = 130;
const heightCharacter = 155;
const widthEnemy = 70;
const heightEnemy = 70;

let tapped = false;


function preload() {
  imageScenario = loadImage('http://localhost:3333/images/scenario/forest.png');
  imageCharacter = loadImage('http://localhost:3333/images/character/running.png');
  imageEnemy = loadImage('http://localhost:3333/images/enemies/droplet.png');
  soundGame = loadSound('http://localhost:3333/sounds/sound_game.mp3');
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);

  scenario = new Scenario(imageScenario, 4);
  character = new Character('character', imageCharacter,
    80, widthCharacter, heightCharacter, 220, 270);
  enemy = new Enemy('enemy', imageEnemy,
    width, widthEnemy, heightEnemy, 104, 104);

  frameRate(40);
  cnv.mousePressed(toggleSound);
}

function draw() {
  scenario.show();
  scenario.move();

  character.show();

  enemy.show();
  enemy.move();

  if (!tapped) {
    text('tap to play', width / 2, 400);
  }
}

function toggleSound() {
  tapped = true;
  soundGame.loop();
}
