import Game from "./game";

export default class GameView {
    constructor(canvas, canvasUI) {
        this.ctxUI = canvasUI.getContext("2d");
        this.game = new Game(canvas)
        this.restart();
        this.registerEvents();
    }
    
    registerEvents() {
        window.addEventListener("keydown", (e) => {
            if (e.key === "r") {
                this.restart();
            }
        })
    }
    
    // drawHealth(health) {
    //     // initial health
    //     this.ctxUI.fillStyle = "red"
    //     this.ctxUI.fillRect(10, 30, 250, 10)

    //     this.ctxUI.beginPath();
    //     this.ctxUI.lineWidth = "3";
    //     this.ctxUI.strokeStyle = "white";
    //     this.ctxUI.rect(9, 29, 252, 12)
    //     this.ctxUI.stroke();

    //     // your actual health
    //     if (health < (700)) {
    //         this.ctxUI.fillStyle = "yellow"
    //         this.ctxUI.fillRect(10, 30, health / 4, 10)
    //     }
    //     else {
    //         this.ctxUI.fillStyle = "green"
    //         this.ctxUI.fillRect(10, 30, health / 4, 10)
    //     }

    //     // text
    //     this.ctxUI.font = "40px ARCADECLASSIC"
    //     this.ctxUI.fillStyle = "white";
    //     this.ctxUI.fillText("HP", 10, 27)

    //     if (health < 100) {
    //         this.ctxUI.font = "40px ARCADECLASSIC"
    //         this.ctxUI.fillStyle = "red";
    //         this.ctxUI.fillText(`${health}/ 1000`, 80, 27)
    //     }
    //     else if (health < 700) {
    //         this.ctxUI.font = "40px ARCADECLASSIC"
    //         this.ctxUI.fillStyle = "yellow";
    //         this.ctxUI.fillText(`${health}/ 1000`, 80, 27)
    //     }
    //     else {
    //         this.ctxUI.font = "40px ARCADECLASSIC"
    //         this.ctxUI.fillStyle = "white";
    //         this.ctxUI.fillText(`${health}/ 1000`, 80, 27)
    //     }
    // }

    start() {
        // this.drawHealth(this.game.health)
        this.game.startAnimating(45);
        // this.game.animate();
    }

    restart() {
        this.game.gameover = false;
        this.game.health = 1000;
        this.game.enemies = [];
        this.game.startAnimating(45);
    }

}