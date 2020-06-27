class Enemy extends Animated {
    constructor(
        typeMatrix,
        image, x,
        variableY,
        widthEnemy,
        heightEnemy,
        widthSprite,
        heightSprite,
        speed, delay) {
        super(typeMatrix, image, x, variableY, widthEnemy,
            heightEnemy, widthSprite, heightSprite);

        this.speed = speed;
        this.delay = delay;
        this.x = width + this.delay;
    }

    move() {
        this.x = this.x - this.speed;

        if (this.x < -this.widthCharacter - this.delay) this.x = width;
    }
}