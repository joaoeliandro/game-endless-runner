class Score {
    constructor() {
        this.score = 0;
    }

    show() {
        textAlign(CENTER);
        fill('#fff');
        textSize(45);
        text('Score: ' + parseInt(this.score), width / 2, 50);
    }

    addScore() {
        this.score += 0.2;
    }
}