import Game from "./game";

export default class GameView {
    constructor(canvas) {
        this.game = new Game(canvas)
        // this.health = 1000;
        
    }
    
    start() {
        this.game.animate();
        if (this.game.gameover === true) {
            // do something when the game is over
        }
    }

    // checkGameover() {
    //     if (this.health === 0) {
    //         this.gameover = true;
    //     }
    // }
}