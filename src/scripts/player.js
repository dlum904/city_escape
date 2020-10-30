export default class Player {
    constructor() {
        this.x = 329;
        this.y = 344;
        this.width = 187;
        this.height = 130;
        this.xHitBox = [this.x, this.x + this.width];
        this.yHitBox = [this.y, this.y +this.height];
        this.frameX = 0;
        this.frameY = 0;
        this.speed = 10;
        this.moving = true;
        this.leftAttack = false;
        this.rightAttack = false;
        this.lAttackXHitBox;
        this.lAttackYHitBox;
        this.rAttackXHitBox;
        this.rAttackYHitBox;
        this.playerSprite = new Image();
        this.playerSprite.src = "./src/images/bike1.png";
        this.keys = [];
        // this.attackReady
        this.registerEvents();
    }

    registerEvents() {
        window.addEventListener("keydown", (e) => {
            this.keys[e.key] = true;
        })
        window.addEventListener("keyup", (e) => {
            delete this.keys[e.key];
            if (e.key === "ArrowLeft") {
                this.moving = false;
                this.leftAttack = true;
            }
            if (e.key === "ArrowRight") {
                this.moving = false;
                this.rightAttack = true;
            }
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
        if (this.leftAttack) {
            this.frameX = 0;
            this.frameY = 2;
            this.moving = false;
            // this.leftAttack = true;
            setTimeout(() => this.leftAttack = false, 400)
        }
        if (this.rightAttack) {
            this.frameX = 0;
            this.frameY = 1;
            this.moving = false;
            // this.rightAttack = true;
            setTimeout(() => this.rightAttack = false, 400)
        }
    }

    handlePlayerFrame() {
        if (this.moving && (!this.leftAttack || !this.rightAttack)) {
            this.frameX++
        }
        if (!this.rightAttack && this.frameY === 1) {
            this.frameY = 0;
            console.log("R ATTACK")
            this.moving = true;
        }
        if (!this.leftAttack && this.frameY === 2) {
            this.frameY = 0;
            console.log("L ATTACK")
            this.moving = true;
        }
        else if (this.frameX >= 2){

            this.frameX = 0
        }
        this.handlePlayerAttack();
    }

    handlePlayerAttack() {
        if (this.leftAttack) {
            this.lAttackXHitBox = [this.x + 10, this.x + 60];
            this.lAttackYHitBox = [this.y, this.y + 79];
        }
        if (this.rightAttack) {
            this.rAttackXHitBox = [this.x + 150, this.x + 150 + 30];
            this.rAttackYHitBox = [this.y, this.y + 79];
        }
        if (!this.leftAttack) {
            this.lAttackXHitBox = [];
            this.lAttackYHitBox = [];
        }
        if (!this.rightAttack) {
            this.rAttackXHitBox = [];
            this.rAttackYHitBox = [];
        }
    }

}