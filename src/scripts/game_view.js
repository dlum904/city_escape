import Game from "./game";

export default class GameView {
    constructor(canvas) {
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
    
    start() {
        this.game.startAnimating(30);
        // this.game.animate();
    }

    restart() {
        this.game.gameover = false;
        this.game.health = 1000;
        this.game.enemies = [];
        this.game.startAnimating(30);
    }

}