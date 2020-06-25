let imageScenario;
let character;
let scenario;
let imageCharacter;
const heightCharacter = 155;
const widthCharacter = 130;
let soundGame;
let tapped = false;


function preload() {
  imageScenario = loadImage('http://localhost:3333/images/scenario/forest.png');
  imageCharacter = loadImage('http://localhost:3333/images/character/running.png');
  soundGame = loadSound('http://localhost:3333/sounds/sound_game.mp3');
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);

  scenario = new Scenario(imageScenario, 4);
  character = new Character(imageCharacter);

  frameRate(40);
  cnv.mousePressed(toggleSound);
}

function draw() {
  scenario.show();
  scenario.move();

  character.show();

  if (!tapped) {
    text('tap to play', width / 2, 400);
  }
}

function toggleSound() {
  tapped = true;
  soundGame.loop();
}
