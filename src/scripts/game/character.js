class Character extends Animated {
    constructor(
        typeMatrix,
        image, x,
        variableY,
        widthCharacter,
        heightCharacter,
        widthSprite,
        heightSprite) {
        super(typeMatrix, image, x, variableY, widthCharacter,
            heightCharacter, widthSprite, heightSprite);

        this.floor = height - this.heightCharacter - this.variableY;
        this.y = this.floor;
        this.speedJump = 0;
        this.heightJump = -30.5;
        this.gravity = 3;
        this.jumps = 0;

        this.precision = .6;
        this.invincible = false;
    }

    jump() {
        if (this.jumps < 2) {
            this.speedJump = this.heightJump;
            this.jumps++;
            return true;
        }
        return false;
    }

    applyGravity() {
        this.y += this.speedJump;
        this.speedJump += this.gravity;

        if (this.y > this.floor) {
            this.y = this.floor;
            this.jumps = 0;
        }
    }

    isColliding(enemy) {
        // noFill()
        // rect(this.x, this.y, this.widthCharacter, this.heightCharacter);
        // rect(enemy.x, enemy.y, enemy.widthCharacter, enemy.heightCharacter);

        if (this.invincible) return false;

        const collide = collideRectRect(
            this.x,
            this.y,
            this.widthCharacter * this.precision,
            this.heightCharacter * this.precision,
            enemy.x,
            enemy.y,
            enemy.widthCharacter * this.precision,
            enemy.heightCharacter * this.precision);

        return collide;
    }

    isInvincible() {
        this.invincible = true;

        setTimeout(() => {
            this.invincible = false;
        }, 1000);
    }
}