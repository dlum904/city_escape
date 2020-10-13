import Game from './scripts/game'
import GameView from './scripts/game_view';


const canvas = document.getElementById("canvas1");
canvas.width = 840;
canvas.height = 650;
const game1 = new Game(canvas)
// new GameView(game1, canvas).start()

game1.animate();
// game1.startAnimating(40);

