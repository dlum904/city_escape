import Player from "./player";

export default class Game {
    constructor(canvasEl) {
        this.player1 = new Player();
        this.ctx = canvasEl.getContext("2d");
        this.dimensions = {
            width: canvasEl.width = 840,
            height: canvasEl.height = 650
        }
        this.keys = [];
        // this.registerEvents();

    }
    // registerEvents() {
    //     this.ctx.canvasEl.addEventListener("keydown", (e) => {
    //            keys[e.key] = true;
    //            this.player1.moving = true;
    //            // console.log(keys)
    //     })
    //     this.ctx.addEventListener("keyup", (e) => {
    //         delete keys[e.key];
    //         this.player1.moving = false;
    //         this.player1.leftAttack = false;
    //         this.player1.rightAttack = false;
    //     })

    // }
    // movePlayer() {
    //     if (keys.w && player.y > 0) {         // moving up
    //         this.player1.y -= this.player1.speed;           // increase our playser's y pos by speed
    //         this.player1.moving = true;
    //     }
    //     if (keys.s && player.y < this.canvasHeight - this.player1.height) {    // moving down
    //         this.player1.y += this.player1.speed;
    //         this.player1.moving = true;
    //     }
    //     if (keys.a && this.player1.x > 80) {
    //         this.player1.x -= this.player1.speed;
    //         this.player1.moving = true;
    //     }
    //     if (keys.d && player.x < this.canvasWidth - 230) {
    //         this.player1.x += this.player1.speed;
    //         this.player1.moving = true;
    //     }
    //     if (keys.q) {
    //         this.player1.frameX = 0;
    //         this.player1.frameY = 2;
    //         this.player1.leftAttack = true;
    //     }
    //     if (keys.e) {
    //         this.player1.frameX = 0;
    //         this.player1.frameY = 1;
    //         this.player1.rightAttack = true;

    //     }
    // }
    // handlePlayerFrame() {
    //     if (this.player1.frameX < 1 && this.player1.moving) {
    //         this.player1.frameX++
    //         console.log("moving")
    //     }
    //     if (!this.player1.rightAttack && this.player1.frameY === 1) {
    //         this.player1.frameY = 0;
    //         console.log("R ATTACK")
    //     }
    //     if (!this.player1.leftAttack && this.player1.frameY === 2) {
    //         this.player1.frameY = 0;
    //         console.log("L ATTACK")
    //     }
    //     else {
    //         this.player1.frameX = 0
    //     }
    // }

    animate() {    //continuously animates
        const background = new Image();
        background.src = "./src/images/background-1.png"
        this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height)
        this.ctx.drawImage( background, 0, 0,
            this.dimensions.width, this.dimensions.weight
        );
        // this.ctx.drawImage(
        //     this.player1, this.player1.width * this.player1.frameX, this.player1.height * this.player1.frameY,                                 // where we crop out the image for sprite
        //     this.player1.width, this.player1.height, this.player1.x, this.player1.y,    // where the image will be animated on canvas
        //     this.player1.width, this.player1.height
        // );
        // movePlayer();
        // handlePlayerFrame();
        // console.log("animate")
        requestAnimationFrame(this.animate.bind(this));
    }
}