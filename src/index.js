import Game from './scripts/game'


const canvas = document.getElementById("canvas1");
canvas.width = 840;
canvas.height = 650;
const game1 = new Game(canvas)



game1.animate();