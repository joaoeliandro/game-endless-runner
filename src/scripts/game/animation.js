class Animated {
    constructor(
        typeMatrix,
        image, x,
        variableY,
        widthCharacter,
        heightCharacter,
        widthSprite,
        heightSprite) {

        this.matrix = this.matrixByType(typeMatrix);
        this.image = image;
        this.widthCharacter = widthCharacter;
        this.heightCharacter = heightCharacter;
        this.x = x;
        this.variableY = variableY;
        this.y = height - this.heightCharacter - variableY;
        this.widthSprite = widthSprite;
        this.heightSprite = heightSprite;

        this.currentFrame = 0;

        this.matrix;
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

        const matrixDroplet = [
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
            [0, 406],
            [105, 406],
            [210, 404],
            [315, 404],
            [0, 498],
            [105, 498],
            [210, 498],
            [315, 498],
            [0, 604],
            [105, 606],
            [210, 606],
            [315, 606]
        ];

        const matrixDropletFlyer = [
            [0, 0],
            [200, 0],
            [400, 0],
            [0, 150],
            [200, 150],
            [400, 150],
            [0, 300],
            [200, 300],
            [400, 300],
            [0, 450],
            [200, 450],
            [400, 450],
            [0, 600],
            [200, 600],
            [400, 600],
            [0, 750],
        ];

        const matrixTroll = [
            [0, 0],
            [400, 0],
            [800, 0],
            [1200, 0],
            [1600, 0],
            [0, 400],
            [400, 400],
            [800, 400],
            [1200, 400],
            [1600, 400],
            [0, 800],
            [400, 800],
            [800, 800],
            [1200, 800],
            [1600, 800],
            [0, 1200],
            [400, 1200],
            [800, 1200],
            [1200, 1200],
            [1600, 1200],
            [0, 1600],
            [400, 1600],
            [800, 1600],
            [1200, 1600],
            [1600, 1600],
            [0, 2000],
            [400, 2000],
            [800, 2000],
        ];

        switch (typeMatrix) {
            case 'character':
                this.matrix = matrixCharacter;
                break;
            case 'droplet':
                this.matrix = matrixDroplet;
                break;
            case 'dropletFlyer':
                this.matrix = matrixDropletFlyer;
                break;
            case 'troll':
                this.matrix = matrixTroll;
                break;
        }

        return this.matrix;
    }
}