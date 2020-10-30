import Game from "./game";

export default class GameView {
    constructor(canvas, canvasSplash, canvasUI) {
        this.game = new Game(canvas, canvasSplash, canvasUI)
        this.ctxSplash = canvasSplash.getContext("2d")
        this.width = canvasSplash.width;
        this.height = canvasSplash.height;
        this.topLoop = -canvasSplash.height;
        this.bottomLoop = 0;
        this.background = new Image()
        this.background.src = "./src/images/background-1.png";
        // this.sound = false;
        this.menuKeys = [];
        this.music;
        this.registerEvents();
    }
    
    registerEvents() {
        window.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                this.restart();
            }
        })
        let that = this;
        const checkbox = document.querySelector(".music-checkbox");
        checkbox.addEventListener("change", (e) => {
            if(e.target.checked) {

                that.game.sound = true;
                if (this.music) {
                    if(this.music.paused){
                        this.music.play();
                    }
                }

            }
            else {
                that.game.sound = false;
                if (this.music) {
                    this.music.pause();
                }
            }
        })
    }
    

    drawStaticBackground() {
        this.ctxSplash.drawImage(
            this.background, 0, 0,
            this.width, this.height,
            0, this.bottomLoop, this.width, this.height
        )
    }

    // start() {
    //     this.music.loop = true;
    //     this.music.play();
    //     this.game.startAnimating(50);
    // }

    restart() {
        this.game.gameover = false;
        this.game.health = 1000;
        this.game.score = 0;
        this.game.enemies = [];
        this.game.player1.x = 329;
        this.game.player1.y = 344;
        // this.startAnimating(45);
        if (typeof this.music === "undefined") this.music = new Audio("./src/audio/bike_chase.mp3")
        if(this.game.sound && this.music.paused) {
            this.music.loop = true;
            this.music.play();
        }
        this.game.startAnimating(50);
    }

}