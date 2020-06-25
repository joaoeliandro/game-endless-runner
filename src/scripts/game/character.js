class Character extends Animated {
    constructor(typeMatrix, image, x, widthCharacter, heightCharacter,
        widthSprite, heightSprite) {
        super(typeMatrix, image, x, widthCharacter, heightCharacter,
            widthSprite, heightSprite);

        this.floor = height - this.heightCharacter;
        this.y = this.floor;
        this.speedJump = 0;
        this.heightJump = -30;
        this.gravity = 3;
    }

    jump() {
        this.speedJump = this.heightJump;
    }

    applyGravity() {
        this.y += this.speedJump;
        this.speedJump += this.gravity

        if (this.y > this.floor) this.y = this.floor
    }
}