class StarterScreen {
    constructor() {

    }

    draw() {
        this._imageBackground();
        this._titleGame();
        this._tapToPlay();
    }

    _imageBackground() {
        image(imageStarterScreen, 0, 0, width, height);
    }

    _titleGame() {
        fill('#000')
        stroke('#e02041');
        strokeWeight(4);
        textFont(fontGame);
        textAlign(CENTER);
        textSize(50);
        text('The adventures of', width / 2, height / 3);
        textSize(150);
        text('Mary', width / 2, height / 5 * 3);
    }
    
    _tapToPlay() {
        buttonMenager.posicionY = height / 7 * 5;
        buttonMenager.draw();
    }
}