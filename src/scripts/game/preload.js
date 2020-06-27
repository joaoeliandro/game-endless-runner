let imageScenario;
let imageGameOver;
let imageCharacter;
let imageDroplet;
let imageTroll;
let imageDropletFlyer;

let soundGame;
let soundGameOver;
let soundJump;

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