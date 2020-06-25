class Animated {
    constructor(typeMatrix, image, x, widthCharacter, heightCharacter,
        widthSprite, heightSprite) {

        this.matrix = this.matrixByType(typeMatrix);
        this.image = image;
        this.widthCharacter = widthCharacter;
        this.heightCharacter = heightCharacter;
        this.x = x;
        this.y = height - this.heightCharacter;
        this.widthSprite = widthSprite;
        this.heightSprite = heightSprite;

        this.currentFrame = 0;
    }

    show() {
        image(this.image, this.x, this.y,
            this.widthCharacter, this.heightCharacter,
            this.matrix[this.currentFrame][0],
            this.matrix[this.currentFrame][1],
            this.widthSprite, this.heightSprite);

        this.animate();
    }

    animate() {
        this.currentFrame >= this.matrix.length - 1 ?
            this.currentFrame = 0 : this.currentFrame++;
    }

    matrixByType(typeMatrix) {
        const matrixCharacter = [
            [0, 0],
            [220, 0],
            [440, 0],
            [660, 0],
            [0, 270],
            [220, 270],
            [440, 270],
            [660, 270],
            [0, 540],
            [220, 540],
            [440, 540],
            [660, 540],
            [0, 810],
            [220, 810],
            [440, 810],
            [660, 810],
        ];

        const matrixEnemy = [
            [0, 0],
            [105, 0],
            [210, 0],
            [315, 0],
            [0, 104],
            [105, 104],
            [210, 104],
            [315, 104],
            [0, 208],
            [105, 208],
            [210, 208],
            [315, 208],
            [0, 312],
            [105, 312],
            [210, 312],
            [315, 312],
            [0, 409],
            [105, 409],
            [210, 409],
            [315, 409],
            [0, 503],
            [105, 503],
            [210, 503],
            [315, 503],
            [0, 609],
            [105, 609],
            [210, 609],
            [315, 609]
        ];

        return typeMatrix === 'character' ? matrixCharacter : matrixEnemy;
    }
}