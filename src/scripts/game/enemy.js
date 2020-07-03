class Enemy extends Animated {
    constructor(
        typeMatrix,
        image, x,
        variableY,
        widthEnemy,
        heightEnemy,
        widthSprite,
        heightSprite,
        speed) {
        super(typeMatrix, image, x, variableY, widthEnemy,
            heightEnemy, widthSprite, heightSprite);

        this.speed = speed;
        this.x = width;
    }

    move() {
        this.x = this.x - this.speed;
    }

    reappears() {
        this.x = width;
        // if (this.x < -this.widthCharacter) this.x = width;
    }
}