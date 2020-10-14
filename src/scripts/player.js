export default class Player {
    constructor() {
        this.x = 300;
        this.y = 200;
        this.width = 187;
        this.height = 130;
        this.xHitBox = [this.x, this.x + this.width];
        this.yHitBox = [this.y, this.y +this.height];
        this.frameX = 0;
        this.frameY = 0;
        this.speed = 10;
        this.moving = false;
        this.leftAttack = false;
        this.rightAttack = false;
        this.lAttackXHitBox;
        this.lAttackYHitBox;
        this.rAttackXHitBox;
        this.rAttackYHitBox;
        this.playerSprite = new Image();
        this.playerSprite.src = "./src/images/bike1.png";
        this.keys = [];
        // this.attackCD = 0
        this.registerEvents();
    }

    registerEvents() {
        // debugger
        window.addEventListener("keydown", (e) => {
            this.keys[e.key] = true;
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
        else if (this.keys.q) {
            this.frameX = 0;
            this.frameY = 2;
            this.moving = false;
            this.leftAttack = true;
            // this.attackCD = 30
            // setTimeout(() => this.leftAttack = false, 3000)
        }
        else if (this.keys.e) {
            this.frameX = 0;
            this.frameY = 1;
            this.moving = false;
            this.rightAttack = true;
            // this.attackCD = 30
            // setTimeout(() => this.rightAttack = false, 3000)
        }
    }

    handlePlayerFrame() {
        if (this.moving) {
            console.log(this.frameX)
            this.frameX++
        }
        if (!this.rightAttack && this.frameY === 1) {
            this.frameY = 0;
            console.log("R ATTACK")
        }
        if (!this.leftAttack && this.frameY === 2) {
            this.frameY = 0;
            console.log("L ATTACK")
        }
        else if (this.frameX >= 2){
            console.log()
            this.frameX = 0
        }
        this.handlePlayerAttack();
    }

    handlePlayerAttack() {
        // debugger
        if (this.leftAttack) {
            this.lAttackXHitBox = [this.x, this.x + 64];
            this.lAttackYHitBox = [this.y, this.y + 88];
        }
        if (this.rightAttack) {
            this.rAttackXHitBox = [this.x + this.width, this.x + 64];
            this.rAttackYHitBox = [this.y, this.y + 88];
        }
        else if (!this.leftAttack) {
            this.lAttackXHitBox = [];
            this.lAttackYHitBox = [];
        }
        else if (!this.rightAttack) {
            this.rAttackXHitBox = [];
            this.rAttackYHitBox = [];
        }
    }

}