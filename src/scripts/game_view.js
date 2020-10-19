import Game from "./game";

export default class GameView {
    constructor(canvas, canvasSplash, canvasUI) {
        // this.ctxUI = canvasUI.getContext("2d");
        this.game = new Game(canvas, canvasSplash, canvasUI)
        this.ctxSplash = canvasSplash.getContext("2d")
        this.width = canvasSplash.width;
        this.height = canvasSplash.height;
        this.topLoop = -canvasSplash.height;
        this.bottomLoop = 0;
        this.background = new Image()
        this.background.src = "./src/images/background-1.png";
        // this.fpsInterval;
        // this.startTime;
        // this.now;
        // this.then;
        // this.elapsed;
        this.muted = false;
        this.audio = document.getElementById("music");
        this.menuKeys = []
        this.registerEvents();
    }
    
    registerEvents() {
        window.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                this.restart();
            }
            if (e.key === "n" && this.muted === false) {
                this.toggleMuteOn()
            }
            else if (e.key === "m" && this.muted === true ) {
                this.toggleMuteOff();
            }

            // if (e.key === "m")
            //     this.muted ? this.toggleMuteOff() : this.toggleMuteOff();
        })
    }
    
    toggleMuteOn() {
        // debugger
        if (this.muted === false) {
            console.log("mute")
                this.muted = true;
                this.audio.pause()
        }
    }
    toggleMuteOff() {
        // debugger
        console.log("unmute")
            this.muted = false;
            this.audio.play();
    }

    drawStaticBackground() {
        //bottom half of the background
        this.ctxSplash.drawImage(
            this.background, 0, 0,
            this.width, this.height,
            0, this.bottomLoop, this.width, this.height
        )
        // this.bottomLoop += 10;
        // if (this.bottomLoop === this.height) this.bottomLoop = -this.height;
        // //top half of the background
        // this.ctxSplash.drawImage(
        //     this.background, 0, 0,
        //     this.width, this.height,
        //     0, this.topLoop, this.width, this.height
        // )
        // this.topLoop += 10;
        // if (this.topLoop === this.height) this.topLoop = -this.height;
    }

    // startAnimating(fps) {
    //     this.fpsInterval = 1000 / fps;
    //     this.then = Date.now();
    //     this.startTime = this.then;
    //     this.animateTitle();
    // }

    // animateTitle() {
    //     requestAnimationFrame(this.animateTitle.bind(this));
    //     this.now = Date.now();
    //     this.elapsed = this.now - this.then;
    //     if (this.elapsed > this.fpsInterval) {
    //         this.then = this.now - (this.elapsed % this.fpsInterval);
    //         this.drawBackground();
    //         // requestAnimationFrame(this.animateTitle.bind(this));
    //     }
    // }

    start() {
        // this.startAnimating(45);
        this.game.startAnimating(50);
    }

    restart() {
        this.game.gameover = false;
        this.game.health = 1000;
        this.game.score = 0;
        this.game.enemies = [];
        this.game.player1.x = 329;
        this.game.player1.y = 344;
        // this.startAnimating(45);
        this.game.startAnimating(50);
    }

}