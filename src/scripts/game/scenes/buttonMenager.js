class ButtonMenager {
    constructor(textButton, posicionX, posicionY) {
        this.textButton = textButton;
        this.posicionX = posicionX;
        this.posicionY = posicionY;

        this.button = createButton(this.textButton);
        this.button.mousePressed(() => this._changeScene());
        this.button.addClass('button-starter-screen');

        if (currentScene === 'game') this.button.remove();
    }

    draw() {
        this.button.position(this.posicionX, this.posicionY);
        this.button.center('horizontal');
    }

    _changeScene() {
        this.button.remove();
        currentScene = 'game';
        this._toggleSoundGame();
    }

    _toggleSoundGame() {
        tapped = true;
        // soundGame.loop();
    }
}