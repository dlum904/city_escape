export default class Player {
    constructor() {
        this.x = 300,
        this.y = 200,
        this.width = 186;
        this.height = 130,
        this.frameX = 0,
        this.frameY = 0,
        this.speed = 10,
        this.moving = false,
        this.leftAttack = false,
        this.rightAttack = false,
        this.playerSprite = new Image();
        this.playerSprite.src = "./src/images/bike1.png";
        this.keys = []
        this.registerEvents();
    }

    registerEvents() {
        // debugger
        window.addEventListener("keydown", (e) => {
            this.keys[e.key] = true;
            this.moving = true;
        })
        window.addEventListener("keyup", (e) => {
            delete this.keys[e.key];
            this.moving = false;
            this.leftAttack = false;
            this.rightAttack = false;
        })


    }
 
    
    movePlayer() {
        if (this.keys.w && this.y > 0) {         // moving up
            this.y -= this.speed;           // increase our playser's y pos by speed
            this.moving = true;
        }
        if (this.keys.s && this.y < 550) {    // moving down
            this.y += this.speed;
            this.moving = true;
        }
        if (this.keys.a && this.x > 80) {
                this.x -= this.speed;
                this.moving = true;
        }
        if (this.keys.d && this.x < 580) {
                this.x += this.speed;
                this.moving = true;
        }
        if (this.keys.q) {
            this.frameX = 0;
            this.frameY = 2;
            this.leftAttack = true;
        }
        if (this.keys.e) {
            this.frameX = 0;
            this.frameY = 1;
            this.rightAttack = true;

        }
    }

    handlePlayerFrame() {
        if (this.frameX < 1 && this.moving) {
            this.frameX++
            console.log("moving")
        }
        if (!this.rightAttack && this.frameY === 1) {
            this.frameY = 0;
            console.log("R ATTACK")
        }
        if (!this.leftAttack && this.frameY === 2) {
            this.frameY = 0;
            console.log("L ATTACK")
        }
        else {
            this.frameX = 0
        }
    }


}