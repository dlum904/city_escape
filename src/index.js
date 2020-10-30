import Game from './scripts/game'
import GameView from './scripts/game_view';

document.addEventListener("DOMContentLoaded", function () {
    const canvasSplash = document.getElementById("canvas-splash");
    canvasSplash.width = 840;
    canvasSplash.height = 650;
    const canvas = document.getElementById("canvas-game");
    canvas.width = 840;
    canvas.height = 650;
    const canvasUI = document.getElementById("canvas-ui");
    canvasUI.width = 840;
    canvasUI.height = 650;
    // const game1 = new Game(canvas)
    const newGameView = new GameView(canvas, canvasSplash, canvasUI).registerEvents()
    // const audio = document.getElementById("music");
    // setTimeout(() => audio.play(), 3000);
})


