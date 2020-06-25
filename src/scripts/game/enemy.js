class Enemy extends Animated {
    constructor(typeMatrix, image, x, widthEnemy, heightEnemy,
        widthSprite, heightSprite) {
        super(typeMatrix, image, x, widthEnemy, heightEnemy,
            widthSprite, heightSprite);
        
        this.speed = 9;
    }

    move() {
        this.x = this.x - this.speed;
        
        if (this.x < -widthEnemy) this.x = width;
    }
}