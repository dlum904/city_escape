import Player from "./player";

export default class Game {
    constructor(ctx, background, playerSprite) {
        this.player1 = new Player(playerSprite);
        this.canvasWidth = 840;
        this.canvasHeight = 650;
        this.ctx = ctx;
        this.background = background
    }

    movePlayer() {
        if (keys.w && player.y > 0) {         // moving up
            this.player1.y -= this.player1.speed;           // increase our playser's y pos by speed
            this.player1.moving = true;
        }
        if (keys.s && player.y < this.canvasHeight - this.player1.height) {    // moving down
            this.player1.y += this.player1.speed;
            this.player1.moving = true;
        }
        if (keys.a && this.player1.x > 80) {
            this.player1.x -= this.player1.speed;
            this.player1.moving = true;
        }
        if (keys.d && player.x < this.canvasWidth - 230) {
            this.player1.x += this.player1.speed;
            this.player1.moving = true;
        }
        if (keys.q) {
            this.player1.frameX = 0;
            this.player1.frameY = 2;
            this.player1.leftAttack = true;
        }
        if (keys.e) {
            this.player1.frameX = 0;
            this.player1.frameY = 1;
            this.player1.rightAttack = true;

        }
    }
    handlePlayerFrame() {
        if (this.player1.frameX < 1 && this.player1.moving) {
            this.player1.frameX++
            console.log("moving")
        }
        if (!this.player1.rightAttack && this.player1.frameY === 1) {
            this.player1.frameY = 0;
            console.log("R ATTACK")
        }
        if (!this.player1.leftAttack && this.player1.frameY === 2) {
            this.player1.frameY = 0;
            console.log("L ATTACK")
        }
        else {
            this.player1.frameX = 0
        }
    }

    animate() {    //continuously animates
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
        this.ctx.drawImage( this.background, 0, 0,
            this.canvasWidth, this.canvasHeight
        );
        // this.ctx.drawImage(
        //     this.player1, this.player1.width * this.player1.frameX, this.player1.height * this.player1.frameY,                                 // where we crop out the image for sprite
        //     this.player1.width, this.player1.height, this.player1.x, this.player1.y,    // where the image will be animated on canvas
        //     this.player1.width, this.player1.height
        // );
        // movePlayer();
        // handlePlayerFrame();
        requestAnimationFrame(animate);
    }
}