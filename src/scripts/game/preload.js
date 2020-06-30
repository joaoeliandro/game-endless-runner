let imageScenario;
let imageStarterScreen;
let imageHeart;
let imageGameOver;
let fontGame;

let imageCharacter;
let imageDroplet;
let imageTroll;
let imageDropletFlyer;

let soundGame;
let soundGameOver;
let soundJump;

function preload() {
    imageScenario = loadImage('http://localhost:3333/images/scenario/forest.png');
    imageStarterScreen = loadImage('http://localhost:3333/images/assets/starterScreen.png');
    imageHeart = loadImage('http://localhost:3333/images/assets/heart.png');
    imageGameOver = loadImage('http://localhost:3333/images/assets/game-over.png');

    fontGame = loadFont('http://localhost:3333/public/fontGame.otf');

    imageCharacter = loadImage('http://localhost:3333/images/character/mary.png');
    imageDroplet = loadImage('http://localhost:3333/images/enemies/droplet.png');
    imageDropletFlyer = loadImage('http://localhost:3333/images/enemies/droplet_flyer.png');
    imageTroll = loadImage('http://localhost:3333/images/enemies/troll.png');

    soundGame = loadSound('http://localhost:3333/sounds/sound_game.mp3');
    soundGameOver = loadSound('http://localhost:3333/sounds/sound_gameover.mp3');
    soundJump = loadSound('http://localhost:3333/sounds/sound_jump.mp3');
}