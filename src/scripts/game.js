import Enemy from "./enemy";
import Player from "./player";
const Util = require("./util");
export default class Game {
    constructor(canvas, canvasSplash, canvasUI) {
        this.health = 1000;
        this.gameover = false;
        this.ctxUI = canvasUI.getContext("2d");
        this.ctx = canvas.getContext("2d");
        this.ctxSplash = canvasSplash.getContext("2d")
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
        this.oof = new Audio('./src/audio/oof.mp3')
        this.score = 0;
        // this.drawBackground();
        // this.drawPlayer();
        
    }

    drawBackground() {
        //bottom half of the background
        this.ctxSplash.drawImage(
            this.background, 0, 0,
            this.width, this.height,
            0, this.bottomLoop, this.width, this.height
        )
        this.bottomLoop += 10;
        if (this.bottomLoop === this.height) this.bottomLoop = -this.height;
        //top half of the background
        this.ctxSplash.drawImage(
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

    drawUI(health, score) {
        // initial health
        this.ctxUI.clearRect(0, 0, this.width, this.height)

        this.ctxUI.fillStyle = "red"
        this.ctxUI.fillRect(10, 30, 250, 10)

        this.ctxUI.beginPath();
        this.ctxUI.lineWidth = "3";
        this.ctxUI.strokeStyle = "white";
        this.ctxUI.rect(9, 29, 252, 12)
        this.ctxUI.stroke();

        // your actual health
        if (health < (700)) {
            this.ctxUI.fillStyle = "yellow"
            this.ctxUI.fillRect(10, 30, health / 4, 10)
        }
        else {
            this.ctxUI.fillStyle = "green"
            this.ctxUI.fillRect(10, 30, health / 4, 10)
        }

        // text
        this.ctxUI.font = "40px ARCADECLASSIC"
        this.ctxUI.fillStyle = "white";
        this.ctxUI.fillText("HP", 10, 27)

        if (health < 100) {
            this.ctxUI.font = "40px ARCADECLASSIC"
            this.ctxUI.fillStyle = "red";
            this.ctxUI.fillText(`${health}/ 1000`, 80, 27)
        }
        else if (health < 700) {
            this.ctxUI.font = "40px ARCADECLASSIC"
            this.ctxUI.fillStyle = "yellow";
            this.ctxUI.fillText(`${health}/ 1000`, 80, 27)
        }
        else {
            this.ctxUI.font = "40px ARCADECLASSIC"
            this.ctxUI.fillStyle = "white";
            this.ctxUI.fillText(`${health}/ 1000`, 80, 27)
        }

        this.ctxUI.font = "25px ARCADECLASSIC"
        this.ctxUI.fillStyle = "white";
        this.ctxUI.textAlign = "start";
        this.ctxUI.fillText(`${score}`, 750, 20)
    }

    generateEnemy() {
        // logic for when to generate an enemy.  will push into this.enemies
        const randomNum = Math.floor((Math.random() * 70));
        if (this.enemies.length < 5 && randomNum === 5) {
            console.log("generating enemy")
            
            const randomEnemyNum = Math.floor((Math.random() * 100))
            let enemyType
            if (randomEnemyNum > 80) {
                enemyType = "turtle";
            } 
            if (enemyType !== "turtle") {

                if (randomEnemyNum <= 50) {
                    enemyType = "stupid"
                }
                // x >= min && x <= max;
                // else if (randomEnemyNum > 10 && randomEnemyNum < 50 ) {
                //     enemyType = "crazy"
                // }
                else {
                    enemyType = "crazy"
                }
            }
            console.log(enemyType);
            if (typeof enemyType === "string") {
                this.enemies.push(new Enemy(this.ctx, enemyType));   // TODO: randomly choose the type
            }
        }
    }

    drawEnemy(enemyNum) {           //TODO: REFACTOR TO A SWITCH CASE
        let currentEnemy = this.enemies[enemyNum];
        // ANIMATING THE STUPID ENEMY
        if (currentEnemy.type === "stupid") {
            this.ctx.drawImage(
                currentEnemy.enemySprite, 0, 0,
                currentEnemy.width, currentEnemy.height, currentEnemy.x , currentEnemy.y,
                90, 150
            );
            currentEnemy.y += currentEnemy.speed;
            if (Util.collision(this.player1.x + 74, this.player1.y + 16, 38, 80,
                currentEnemy.x, currentEnemy.y, currentEnemy.hitboxWidth, currentEnemy.hitboxHeight)) {
                    this.health -= 1;
                    this.oof.play();
                this.drawUI(this.health, this.score);
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
            if (Util.collision(this.player1.x + 74, this.player1.y + 16, 38, 80,
                currentEnemy.x, currentEnemy.y, currentEnemy.hitboxWidth, currentEnemy.hitboxHeight)) {
                    this.health -= 5;
                this.oof.play();
                    this.drawUI(this.health,this.score);
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

        // MICHAELANGELO!!!
        if (currentEnemy.type === "turtle") {
            // if (currentEnemy.y > 650) {
                // console.log("wowowooo")
                // debugger
                // this.enemies.splice(enemyNum, 1)
                // debugger
            // }
            switch (currentEnemy.direction) {
                case "right":
                    this.ctx.drawImage(
                        currentEnemy.enemySprite, currentEnemy.width * currentEnemy.frameX, 0,
                        currentEnemy.width, currentEnemy.height, currentEnemy.x, currentEnemy.y,
                        75, 75
                    );
                    currentEnemy.x += 12;
                    currentEnemy.y -= 4;
                    break;
                case "left":
                    this.ctx.drawImage(
                        currentEnemy.enemySprite, currentEnemy.width * currentEnemy.frameX, 0,
                        currentEnemy.width, currentEnemy.height, currentEnemy.x, currentEnemy.y,
                        75, 75
                    );
                    currentEnemy.x -= 12;
                    currentEnemy.y -= 4;
                    break;
                case "down":
                    this.ctx.drawImage(
                        currentEnemy.enemySprite, 48, 55,
                        currentEnemy.width, currentEnemy.height, currentEnemy.x, currentEnemy.y,
                        75, 154
                    );
                    currentEnemy.y += 6;
                    if (currentEnemy.frameX < 1) currentEnemy.frameX += 1;
                    break;
                default:

            }
            // if (currentEnemy.direction === "right") {
            // }
            // if (currentEnemy.direction === "left") {
            // }
            

            if (currentEnemy.x <= 80) {
                currentEnemy.frameX = 0;
                currentEnemy.direction = "right";
            }
            if (currentEnemy.x >= 580) {
                currentEnemy.frameX = 1;
                currentEnemy.direction = "left";
            }
            if (currentEnemy.y <= 50) {
                currentEnemy.direction = "down"
                currentEnemy.width = 41;
                currentEnemy.height = 86;
                currentEnemy.frameX = 0;
                currentEnemy.frameY = 1;
            }

            if (Util.collision(this.player1.x + 74, this.player1.y + 16, 38, 80,
                currentEnemy.x, currentEnemy.y, 50, 53)) {
                this.health -= 10;
                this.oof.play();
                this.drawUI(this.health, this.score);
            }
            // if (this.player1.leftAttack) {
            //     if (Util.attacked(this.player1.lAttackXHitBox, this.player1.lAttackYHitBox,
            //         currentEnemy.x, currentEnemy.y, currentEnemy.hitboxWidth, currentEnemy.hitboxHeight)) {
            //         this.slice.play();
            //         // currentEnemy.type = "damaged-crazy"
            //     }
            // }

            // if (this.player1.rightAttack) {
            //     if (Util.attacked(this.player1.rAttackXHitBox, this.player1.rAttackYHitBox,
            //         currentEnemy.x, currentEnemy.y, currentEnemy.hitboxWidth, currentEnemy.hitboxHeight)) {
            //         this.slice.play();
            //         // currentEnemy.type = "damaged-crazy"
            //     }
            // }
            if (currentEnemy.y > 650) {
                // debugger
                this.enemies.splice(enemyNum, 1)
                // debugger
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
            
            if (currentEnemy.frameX > 4) {
                this.enemies.splice(enemyNum, 1)
                this.score += 100
            }
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
            if (currentEnemy.frameX > 4) {
                this.enemies.splice(enemyNum, 1)
                this.score += 500
            }
        }
    }
    checkGameover() {
        if (this.health <= 0) {
            this.gameover = true;

            this.ctx.font = "80px ARCADECLASSIC"
            this.ctx.fillStyle = "white";
            this.ctx.fillText("GAME OVER", 245, 300)

            this.ctx.font = "20px ARCADECLASSIC"
            this.ctx.fillStyle = "white";
            this.ctx.fillText(`SCORE: ${this.score}` , 245, 350)

            if (this.score <= 10000) {
                this.ctx.font = "20px ARCADECLASSIC"
                this.ctx.fillStyle = "white";
                this.ctx.fillText(`RANK: NOOB`, 500, 350)
            }
            else if (this.score <= 20000) {
                this.ctx.font = "20px ARCADECLASSIC"
                this.ctx.fillStyle = "white";
                this.ctx.fillText(`RANK: TWINKLE  TOES`, 500, 350)
            }
            else if (this.score <= 50000) {
                this.ctx.font = "20px ARCADECLASSIC"
                this.ctx.fillStyle = "white";
                this.ctx.fillText(`RANK: FINISHED STRONG!`, 500, 350)
            }

            this.ctx.font = "40px ARCADECLASSIC"
            this.ctx.fillStyle = "white";
            this.ctx.fillText("PRESS  ENTER  TO  RESTART", 200, 400)

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
            
            this.drawUI(this.health, this.score)
            
            if (!this.gameover) {
                this.ctx.clearRect(0, 0, this.width, this.height)
                this.drawBackground();
                this.player1.handlePlayerFrame();
                this.player1.movePlayer();
                
                for (let i = 0; i < this.enemies.length; i++ ) this.drawEnemy(i)
                this.score += 1;
                this.drawPlayer();
                this.generateEnemy();
                this.checkGameover();
                // requestAnimationFrame(this.animate.bind(this));
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

