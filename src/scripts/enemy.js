export default class Enemy {
    constructor(ctx, enemyType) {
        // this.x = 0;       // TODO Will change based on the arg passed into constructor
        // this.y = 0;
        this.width = 243;
        this.height = 480;
        this.hitboxWidth = 90;
        this.hitboxHeight = 150;
        this.type = enemyType // TODO Will change based on a the argument passed into constructor
        this.enemySprite = new Image();
        switch (this.type) {
            case "stupid":
                this.enemySprite.src = "./src/images/car1.png"
                this.x = Math.floor(Math.random() * (550 - 120) + 120)
                this.y = -100;
                break;
            case "crazy":
                this.enemySprite.src = "./src/images/car2.png"
                this.x = Math.floor(Math.random() * (550 - 120) + 120)
                this.y = 650;
                break;
            default:
                }
        this.xHitBox = [this.x, this.x + this.hitboxWidth];
        this.yHitBox = [this.y, this.y + this.hitboxHeight];
    }

}