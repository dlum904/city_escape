import Enemy from "./enemy";
import Player from "./player";
const Util = require("./util");
export default class Game {
    constructor(canvas) {
        this.health = 1000;
        this.gameover = false;
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
        this.fpsInterval;
        this.startTime;
        this.now;
        this.then;
        this.elapsed;
        this.slice = new Audio('./src/audio/slice.mp3')
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

    drawHealth(health) {
        // initial health
        this.ctx.fillStyle = "red"
        this.ctx.fillRect(10, 30, 250, 10)

        this.ctx.beginPath();
        this.ctx.lineWidth = "3";
        this.ctx.strokeStyle = "white";
        this.ctx.rect(9, 29, 252, 12)
        this.ctx.stroke();

        // your actual health
        if (health < (700)) {
            this.ctx.fillStyle = "yellow"
            this.ctx.fillRect(10, 30, health / 4, 10)
        }
        else {
            this.ctx.fillStyle = "green"
            this.ctx.fillRect(10, 30, health / 4, 10)
        }
        
        // text
    
        this.ctx.font = "40px ARCADECLASSIC"
        this.ctx.fillStyle = "white";
        this.ctx.fillText( "HP", 10, 27)

        if (health < 100){
            this.ctx.font = "40px ARCADECLASSIC"
            this.ctx.fillStyle = "red";
            this.ctx.fillText(`${health}/ 1000`, 80, 27)
        }
        else if (health < 700) {
            this.ctx.font = "40px ARCADECLASSIC"
            this.ctx.fillStyle = "yellow";
            this.ctx.fillText(`${health}/ 1000`, 80, 27)
        }
        else {
            this.ctx.font = "40px ARCADECLASSIC"
            this.ctx.fillStyle = "white";
            this.ctx.fillText(`${health}/ 1000`, 80, 27)
        }
        

    }

    generateEnemy() {
        // logic for when to generate an enemy.  will push into this.enemies
        const randomNum = Math.floor((Math.random() * 80));
        if (this.enemies.length < 4 && randomNum === 5) {
            console.log("generating enemy")
            
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
        // ANIMATING THE STUPID ENEMY
        if (currentEnemy.type === "stupid") {
            this.ctx.drawImage(
                currentEnemy.enemySprite, 0, 0,
                currentEnemy.width, currentEnemy.height, currentEnemy.x , currentEnemy.y,
                90, 150
            );
            currentEnemy.y += currentEnemy.speed;
            if (Util.collision(this.player1.x + 67, this.player1.y, 60, this.player1.height,
                currentEnemy.x, currentEnemy.y, currentEnemy.hitboxWidth, currentEnemy.hitboxHeight)) {
                    this.health -= 1;
                    console.log(this.health);
                }
            if (this.player1.leftAttack) {
                if (Util.attacked(this.player1.lAttackXHitBox, this.player1.lAttackYHitBox,
                    currentEnemy.x, currentEnemy.y, currentEnemy.hitboxWidth, currentEnemy.hitboxHeight)) {
                        this.slice.play();
                        currentEnemy.type = "damaged-stupid"
                    }
            }
            if (this.player1.rightAttack) {
                if (Util.attacked(this.player1.rAttackXHitBox, this.player1.rAttackYHitBox,
                    currentEnemy.x, currentEnemy.y, currentEnemy.hitboxWidth, currentEnemy.hitboxHeight)) {
                        this.slice.play();
                        currentEnemy.type = "damaged-stupid"
                    }
            }
            if (currentEnemy.y > this.height && currentEnemy.type ==="stupid") {
                this.enemies.splice(enemyNum, 1)
            }
        }

        //ANIMATING THE CRAZY ENEMY
        if (currentEnemy.type === "crazy") {
            this.ctx.drawImage(
                currentEnemy.enemySprite, 0, 0,
                currentEnemy.width, currentEnemy.height, currentEnemy.x, currentEnemy.y,
                90, 150
                );
            
            if (this.player1.x + 20  > currentEnemy.x) {
                currentEnemy.x += currentEnemy.turning;
                currentEnemy.y -= currentEnemy.speed;
            }
            else if (Util.between(this.player1.x + 20, currentEnemy.x, currentEnemy.x + 20)) {
                currentEnemy.y -= 12;
            }
            else {
                currentEnemy.x -= currentEnemy.turning;
                currentEnemy.y -= currentEnemy.speed;
            }
            if (Util.collision(this.player1.x + 67, this.player1.y, 60, this.player1.height,
                currentEnemy.x, currentEnemy.y, currentEnemy.hitboxWidth, currentEnemy.hitboxHeight)) {
                    this.health -= 5;
                }
            if (this.player1.leftAttack) {
                if (Util.attacked(this.player1.lAttackXHitBox, this.player1.lAttackYHitBox,
                    currentEnemy.x, currentEnemy.y, currentEnemy.hitboxWidth, currentEnemy.hitboxHeight)) {
                        this.slice.play();
                        currentEnemy.type = "damaged-crazy"
                    }
            }

            if (this.player1.rightAttack) {
                if (Util.attacked(this.player1.rAttackXHitBox, this.player1.rAttackYHitBox,
                    currentEnemy.x, currentEnemy.y, currentEnemy.hitboxWidth, currentEnemy.hitboxHeight)) {
                        this.slice.play();
                        currentEnemy.type = "damaged-crazy"
                    }
            }
            if (currentEnemy.y < -150 && currentEnemy.type === "crazy") {
                this.enemies.splice(enemyNum, 1)
            }
        }

        // DAMAGED ENEMIES
     
        if (currentEnemy.type === "damaged-stupid") {

            currentEnemy.enemySprite = new Image();
            currentEnemy.enemySprite.src = "./src/images/car1-dying.png"
  
            this.ctx.drawImage(
                currentEnemy.enemySprite, Math.round(currentEnemy.frameX) * currentEnemy.width, 0,
                currentEnemy.width, currentEnemy.height, currentEnemy.x, currentEnemy.y,    //TODO framesss
                90, 150
            );
            currentEnemy.y += 4;
            currentEnemy.frameX += 0.1
            // currentEnemy.handleEnemyFrame();
            if (currentEnemy.frameX > 4) this.enemies.splice(enemyNum, 1)
        }

        if (currentEnemy.type === "damaged-crazy") {

            currentEnemy.enemySprite = new Image();
            currentEnemy.enemySprite.src = "./src/images/car2-dying.png"

            this.ctx.drawImage(
                currentEnemy.enemySprite, Math.round(currentEnemy.frameX) * currentEnemy.width, 0,
                currentEnemy.width, currentEnemy.height, currentEnemy.x, currentEnemy.y,    //TODO framesss
                90, 150
            );
            currentEnemy.y += 4;
            currentEnemy.frameX += 0.1
            // currentEnemy.handleEnemyFrame();
            if (currentEnemy.frameX > 4) this.enemies.splice(enemyNum, 1)
        }
    }
    checkGameover() {
        if (this.health <= 0) {
            this.gameover = true;

            this.ctx.font = "80px ARCADECLASSIC"
            this.ctx.fillStyle = "white";
            this.ctx.fillText("GAME OVER", 245, 300)

            const snaake = new Audio('./src/audio/Gameover.mp3')
            snaake.play();
        }
    }

    startAnimating(fps) {
        this.fpsInterval = 1000 / fps;
        this.then = Date.now();
        this.startTime = this.then;
        this.animate();
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.now = Date.now();
        this.elapsed = this.now - this.then;
        if (this.elapsed > this.fpsInterval) {
            this.then = this.now - (this.elapsed % this.fpsInterval);
            
            if (!this.gameover) {
                this.ctx.clearRect(0, 0, this.width, this.height)
                this.drawBackground();
                this.player1.handlePlayerFrame();
                this.player1.movePlayer();

                for (let i = 0; i < this.enemies.length; i++ ) this.drawEnemy(i)

                this.drawHealth(this.health);
                this.drawPlayer();
                this.generateEnemy();
                this.checkGameover();
                requestAnimationFrame(this.animate.bind(this));
            }
        }
    }

    // startAnimating(fps) {
    //     this.fpsInterval = 1000 / fps;
    //     this.then = Date.now();
    //     this.startTime = this.then;
    //     this.animate();
    // }
    // animate() {
    //     requestAnimationFrame(this.animate.bind(this));
    //     this.now = Date.now();
    //     this.elapsed = this.now - this.then;
    //     if (this.elapsed > this.fpsInterval) {
    //         this.then = this.now - (this.elapsed % this.fpsInterval);
    //         this.ctx.clearRect(0, 0, this.width, this.height)
    //         this.drawBackground();
    //         if (this.enemies[0]) {
    //             this.drawEnemy(0);
    //         }
    //         if (this.enemies[1]) {
    //             this.drawEnemy(1);
    //         }
    //         if (this.enemies[2]) {
    //             this.drawEnemy(2);
    //         }
    //         if (this.enemies[3]) {
    //             this.drawEnemy(3);
    //         }
    //         if (this.enemies[4]) {
    //             this.drawEnemy(4);
    //         }
    //         this.drawPlayer();
    //         this.player1.movePlayer();
    //         this.player1.handlePlayerFrame();
    //         this.generateEnemy();
    //         requestAnimationFrame(this.animate.bind(this));
    //     }
    // }
}

