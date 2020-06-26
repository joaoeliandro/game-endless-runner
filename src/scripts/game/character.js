class Character extends Animated {
    constructor(typeMatrix, image, x, variableY, widthCharacter, heightCharacter,
        widthSprite, heightSprite) {
        super(typeMatrix, image, x, variableY, widthCharacter, heightCharacter,
            widthSprite, heightSprite);

        this.floor = height - this.heightCharacter - this.variableY;
        this.y = this.floor;
        this.speedJump = 0;
        this.heightJump = -30.5;
        this.gravity = 3;
        this.jumps = 0;
    }

    jump() {
        if (this.jumps < 2) this.speedJump = this.heightJump;
        this.jumps++;
    }

    applyGravity() {
        this.y += this.speedJump;
        this.speedJump += this.gravity

        if (this.y > this.floor) {
            this.y = this.floor
            this.jumps = 0;
        }
    }

    isColliding(enemy) {
        // noFill()
        // rect(this.x, this.y, this.widthCharacter, this.heightCharacter);
        // rect(enemy.x, enemy.y, enemy.widthCharacter, enemy.heightCharacter);
        const precision = .6;
        const collide = collideRectRect(
            this.x,
            this.y,
            this.widthCharacter * precision,
            this.heightCharacter * precision,
            enemy.x,
            enemy.y,
            enemy.widthCharacter * precision,
            enemy.heightCharacter * precision);

        return collide;
    }
}