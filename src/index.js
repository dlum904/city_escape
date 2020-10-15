import Game from './scripts/game'
import GameView from './scripts/game_view';


const canvas = document.getElementById("canvas-game");
canvas.width = 840;
canvas.height = 650;
const canvasUI = document.getElementById("canvas-ui");
canvasUI.width = 840;
canvasUI.height = 650;
// const game1 = new Game(canvas)
new GameView(canvas, canvasUI).start()


