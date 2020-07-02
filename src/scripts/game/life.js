class Life {
    constructor(maxLife, starterLife) {
        this.maxLife = maxLife;
        this.starterLife = starterLife;

        this.lifes = this.starterLife;

        this.widthHeart = 45;
        this.heightHeart = 45;

        this.margin;
        this.position;
        this.starterX = 30;
        this.positionY = 20;
    }

    draw() {
        for (let hearts = 0; hearts < this.lifes; hearts++) {
            this.margin = hearts * 30;
            this.position = this.starterX * (hearts + 1);

            image(imageHeart, this.position + this.margin, this.positionY,
                this.widthHeart, this.heightHeart);
        }
    }

    getLife() {
        if (this.lifes <= this.maxLife) this.lifes++;
    }

    loseLife() {
        if (this.lifes < 2) return true;
        
        this.lifes--;
        
        soundCollision.play();
        
        character.isInvincible();

        return false;
    }
}