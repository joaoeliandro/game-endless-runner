class Game {
    constructor(
        imageScenario,
        imageGameOver,
        imageCharacter,
        imageDroplet,
        imageTroll,
        imageDropletFlyer,
        soundGame,
        soundJump,
        soundGameOver) {

        this.imageScenario = imageScenario;
        this.imageGameOver = imageGameOver;
        this.imageCharacter = imageCharacter;
        this.imageDroplet = imageDroplet;
        this.imageTroll = imageTroll;
        this.imageDropletFlyer = imageDropletFlyer;

        this.soundGame = soundGame;
        this.soundJump = soundJump;
        this.soundGameOver = soundGameOver;

        this.widthCharacter = 130;
        this.heightCharacter = 155;

        this.widthDroplet = 70;
        this.heightDroplet = 70;
        this.widthTroll = 220;
        this.heightTroll = 220;
        this.widthdropletFlyer = 120;
        this.heightdropletFlyer = 100;

        this.currentEnemy = 0;
        this.enemies = [];
    }

    setup() {
        scenario = new Scenario(this.imageScenario, 4);
        score = new Score();

        character = new Character('character', this.imageCharacter,
            80, 30, this.widthCharacter, this.heightCharacter, 220, 270);

        const droplet = new Enemy('droplet', this.imageDroplet,
            width, 30, this.widthDroplet, this.heightDroplet, 104, 104, 9, 100);
        const troll = new Enemy('troll', this.imageTroll,
            width, 0, this.widthTroll, this.heightTroll, 400, 400, 9, 100);
        const dropletFlyer = new Enemy('dropletFlyer', this.imageDropletFlyer,
            width, 300, this.widthdropletFlyer, this.heightdropletFlyer, 200,
            150, 8, 100);

        this.enemies.push(droplet);
        this.enemies.push(troll);
        this.enemies.push(dropletFlyer);
    }

    jumpPressed(keyCode, gameover, tapped) {
        if (keyCode === UP_ARROW) {
            const isNotFloor = character.jump();
            if ((!gameover && tapped) && isNotFloor) this.soundJump.play();
        }
    }

    draw() {
        scenario.show();
        score.show();

        life.draw();

        score.addScore();
        scenario.move();

        character.show();
        character.applyGravity();

        const enemy = this.enemies[this.currentEnemy];
        const enemyVisible = enemy.x < -enemy.widthCharacter;

        if (enemyVisible) {
            this.currentEnemy++;
            if (this.currentEnemy > this.enemies.length - 1) this.currentEnemy = 0;
            enemy.speed = parseInt(random(10, 15));
        }

        enemy.show();
        enemy.move();

        if (character.isColliding(enemy)) {
            if (life.loseLife()) {
                gameover = true;

                if (tapped) this.soundGame.stop();

                image(this.imageGameOver, width / 2 - 200, height / 2 - 50);
                this.soundGameOver.play();
                noLoop();
            }
        }
    }

}