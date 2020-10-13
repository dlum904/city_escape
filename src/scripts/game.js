import Enemy from "./enemy";
import Player from "./player";

export default class Game {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.player1 = new Player();
        this.width = canvas.width;
        this.height = canvas.height;
        this.keys = [];
        this.topLoop = -canvas.height;
        this.bottomLoop = 0;
        this.background = new Image()
        this.background.src = "./src/images/background-1.png";
        this.enemies = []; // contains enemies currently on screen, shown as enemy.type

    }

    drawBackground() {
        //bottom half of the background
        this.ctx.drawImage(
            this.background, 0, 0,
            this.width, this.height,
            0, this.bottomLoop, this.width, this.height
        )
        this.bottomLoop += 10;
        if (this.bottomLoop === this.height) this.bottomLoop = -this.height;
        //top half of the background
        this.ctx.drawImage(
            this.background, 0, 0,
            this.width, this.height,
            0, this.topLoop, this.width, this.height
        )
        this.topLoop += 10;
        if (this.topLoop === this.height) this.topLoop = -this.height;
    }

    drawPlayer() {
        this.ctx.drawImage(
            this.player1.playerSprite, this.player1.width * this.player1.frameX, this.player1.height * this.player1.frameY,                                 // where we crop out the image for sprite
            this.player1.width, this.player1.height, this.player1.x, this.player1.y,    // where the image will be animated on canvas
            this.player1.width, this.player1.height
        );
    }

    generateEnemy() {
        // logic for when to generate an enemy.  will push into this.enemies
        const randomNum = Math.floor((Math.random() * 80));
        if (this.enemies.length < 4 && randomNum === 5) {
            console.log("generating enemy")

            // let spawnLocation = Math.floor(Math.random() * (550 - 120) + 120);   TODO make so enemies do not spawn on top of each other
            // let checkSafeGenerate = true;
            // for (let i = 0; i < this.enemies; i++) {
            //     let enemy = this.enemies[i];
            //     if (enemy.hitboxWid)
            // }
            
            const randomEnemyNum = Math.floor((Math.random() * 100))
            let enemyType
            if (randomEnemyNum >= 40) {
                enemyType = "stupid"
            }
            else {
                enemyType = "crazy"
            }
            console.log(enemyType);
            if (typeof enemyType === "string") {
                this.enemies.push(new Enemy(this.ctx, enemyType));   // TODO: randomly choose the type
            }
        }
    }

    drawEnemy(enemyNum) {
        let currentEnemy = this.enemies[enemyNum];
        if (currentEnemy.type === "stupid") {
            this.ctx.drawImage(
                currentEnemy.enemySprite, 0, 0,
                currentEnemy.width, currentEnemy.height, currentEnemy.x , currentEnemy.y,
                90, 150
            );
            currentEnemy.y += 3;
        }
        if (currentEnemy.y > this.height && currentEnemy.type ==="stupid") {
            this.enemies.splice(enemyNum, 1)
            // debugger
        }

        if (currentEnemy.type === "crazy") {
            this.ctx.drawImage(
                currentEnemy.enemySprite, 0, 0,
                currentEnemy.width, currentEnemy.height, currentEnemy.x, currentEnemy.y,
                90, 150
                );
            currentEnemy.y -= 6;
            if (this.player1.x > currentEnemy.x) {
                currentEnemy.x += 2;
            }
            else {
                currentEnemy.x -= 2;
            }
        }
        if (currentEnemy.y < -150 && currentEnemy.type === "crazy") {
            this.enemies.splice(enemyNum, 1)
            // debugger
        }
    }
    animate() {
        this.ctx.clearRect(0, 0, this.width, this.height)
        this.drawBackground();
        if (this.enemies[0]) {
            this.drawEnemy(0);
        }
        if (this.enemies[1]) {
            this.drawEnemy(1);
        }
        if (this.enemies[2]) {
            this.drawEnemy(2);
        }
        if (this.enemies[3]) {
            this.drawEnemy(3);
        }
        if (this.enemies[4]) {
            this.drawEnemy(4);
        }

        this.drawPlayer();
        this.player1.movePlayer();
        this.player1.handlePlayerFrame();
        this.generateEnemy();
        requestAnimationFrame(this.animate.bind(this));
    }

}

