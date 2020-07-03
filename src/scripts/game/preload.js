let imageScenario;
let imageStarterScreen;
let imageHeart;
let imageGameOver;
let fontGame;

let disk;

let imageCharacter;
let imageDroplet;
let imageTroll;
let imageDropletFlyer;

let soundGame;
let soundGameOver;
let soundJump;
let soundCollision;

function preload() {
    imageScenario = loadImage('https://theadventuresofmary.herokuapp.com/images/scenario/forest.png');
    imageStarterScreen = loadImage('https://theadventuresofmary.herokuapp.com/images/assets/starterScreen.png');
    imageHeart = loadImage('https://theadventuresofmary.herokuapp.com/images/assets/heart.png');
    imageGameOver = loadImage('https://theadventuresofmary.herokuapp.com/images/assets/game-over.png');

    disk = loadJSON('https://theadventuresofmary.herokuapp.com/scripts/disk.json');

    fontGame = loadFont('https://theadventuresofmary.herokuapp.com/public/fontGame.otf');

    imageCharacter = loadImage('https://theadventuresofmary.herokuapp.com/images/character/mary.png');
    imageDroplet = loadImage('https://theadventuresofmary.herokuapp.com/images/enemies/droplet.png');
    imageDropletFlyer = loadImage('https://theadventuresofmary.herokuapp.com/images/enemies/droplet_flyer.png');
    imageTroll = loadImage('https://theadventuresofmary.herokuapp.com/images/enemies/troll.png');

    soundGame = loadSound('https://theadventuresofmary.herokuapp.com/sounds/sound_game.mp3');
    soundGameOver = loadSound('https://theadventuresofmary.herokuapp.com/sounds/sound_gameover.mp3');
    soundJump = loadSound('https://theadventuresofmary.herokuapp.com/sounds/sound_jump.mp3');
    soundCollision = loadSound('https://theadventuresofmary.herokuapp.com/sounds/sound_collision.mp3');
}