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

        this.index = 0;
        this.map = disk.map;
    }

    setup() {
        scenario = new Scenario(this.imageScenario, 4);
        score = new Score();

        character = new Character('character', this.imageCharacter,
            80, 30, this.widthCharacter, this.heightCharacter, 220, 270);

        const droplet = new Enemy('droplet', this.imageDroplet,
            width, 30, this.widthDroplet, this.heightDroplet, 104, 104, 9);
        const troll = new Enemy('troll', this.imageTroll,
            width, 0, this.widthTroll, this.heightTroll, 400, 400, 9);
        const dropletFlyer = new Enemy('dropletFlyer', this.imageDropletFlyer,
            width, 300, this.widthdropletFlyer, this.heightdropletFlyer, 200, 150, 8);

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

        const currentLine = this.map[this.index];
        const enemy = this.enemies[currentLine.enemy];
        const enemyVisible = enemy.x < -enemy.widthCharacter;

        enemy.speed = currentLine.speed;

        enemy.show();
        enemy.move();

        if (enemyVisible) {
            this.index++;

            enemy.reappears();

            if (this.index > this.map.length - 1) this.index = 0;
        }

        if (character.isColliding(enemy)) {
            let dead = life.loseLife();

            if (dead) {
                gameover = true;

                if (tapped) this.soundGame.stop();

                image(this.imageGameOver, width / 2 - 200, height / 2 - 50);
                this.soundGameOver.play();
                noLoop();
            }
        }
    }

}