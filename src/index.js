import Game from './scripts/game'

document.addEventListener("DOMContentLoaded", () => {

  const canvasEl = document.getElementById("canvas1");
  canvasEl.width = 840;
  canvasEl.height = 650;
  const ctx = canvasEl.getContext("2d");    // gives us access to building canvas methods
  
  const background = new Image();
  background.src = "./images/background-1.png";

  const playerSprite = new Image();
  playerSprite.src = "./images/bike1.png";

  const game1 = new Game(ctx, background, playerSprite);

  game1.animate();
  
});