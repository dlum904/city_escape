import Game from './scripts/game'



const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');    // gives us access to building canvas methods
canvas.width = 840;
canvas.height = 650;

const background = new Image();
background.src = "./src/images/background-1.png";

const playerSprite = new Image();
playerSprite.src = "./src/images/bike1.png";

const keys = [];    // keep track of our user's input

const player = {    // stores all data on our player's character
    x: 300,
    y: 200,
    width: 186,
    height: 130,
    frameX: 0,      // horizonal coordinate of where we crop out from sprite sheet
    frameY: 0,      // vertical coordinate of where we crop our from sprite sheet
    speed: 10,       // how many pixels to move per frame of animation
    moving: false,   // we use this to switch between idle and moving animations
    leftAttack: false,
    rightAttack: false
}

window.addEventListener("keydown", (e) => {
    keys[e.key] = true;
    player.moving = true;
    // console.log(keys)
});
window.addEventListener("keyup", (e) => {
    delete keys[e.key];
    player.moving = false;
    player.leftAttack = false;
    player.rightAttack = false;
    
});



function movePlayer() {
    if (keys.w && player.y > 0 ) {         // moving up
        player.y -= player.speed;           // increase our playser's y pos by speed
        player.moving = true;
    }
    if (keys.s && player.y < canvas.height - player.height) {    // moving down
        player.y += player.speed;
        player.moving = true;
    }
    if (keys.a && player.x > 80) {
        player.x -= player.speed;
        player.moving = true;
    }
    if (keys.d && player.x < canvas.width - 230) {
        player.x += player.speed;
        player.moving = true;
    }
    if (keys.q) {
        player.frameX = 0;
        player.frameY = 2;
        player.leftAttack = true;
    }
    if (keys.e) {
        player.frameX = 0;
        player.frameY = 1;
        player.rightAttack = true;
 
    }
}

// function playerAttack() {
//     if ( keys.q ) {
//         player.frameY = 2
//     }
// }
function handlePlayerFrame() {
    if (player.frameX < 1 && player.moving) {   // TODO, not correctly showing frame
        player.frameX++
        console.log("moving")
    }
    if (!player.rightAttack && player.frameY === 1) {
        player.frameY = 0;
        console.log("R ATTACK")
    }
    if (!player.leftAttack && player.frameY === 2 ) {
        player.frameY = 0;
        console.log("L ATTACK")
    }
    else {
        player.frameX = 0
    }
}

let topLoop = -canvas.height;
let bottomLoop = 0;
function animate() {    //continuously animates
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    ctx.drawImage( background, 0, 0,    // BOTTOM ANIMATION
        canvas.width, canvas.height,
        0, bottomLoop, canvas.width, canvas.height
        )
        bottomLoop += 10;
        if (bottomLoop === canvas.height) bottomLoop = -canvas.height;
    ctx.drawImage(background, 0, 0,     // TOP ANIMATION
        canvas.width, canvas.height,
        0, topLoop, canvas.width, canvas.height
        )
        topLoop += 10;
        if (topLoop === canvas.height) topLoop= -canvas.height;

    // ctx.drawImage( background, 0, 0,    // BOTTOM ANIMATION
    //     canvas.width, canvas.height,
    //     0, loop, canvas.width, canvas.height
    //     )
    //     loop += 5
    //     if (loop === canvas.height) loop = 325
    //         ctx.drawImage(background, 0, 0,     // TOP ANIMATION
    //             canvas.width, canvas.height,
    //             0, loop2, canvas.width, canvas.height
    //             )
    //             loop2 += 5
    //             if (loop2 === 325) loop2 = -325;
    // ctx.drawImage(background, 0, 0,     // TOP ANIMATION
    //     canvas.width, canvas.height,
    //     0, loop3, canvas.width, canvas.height
    //     )
    //     loop3 += 5
    //     if (loop3 === 0) loop3 = -650;
        

    ctx.drawImage(
        playerSprite, player.width * player.frameX, player.height * player.frameY,                                 // where we crop out the image for sprite
        player.width, player.height, player.x, player.y,    // where the image will be animated on canvas
        player.width, player.height
    );
    movePlayer();
    handlePlayerFrame();
    requestAnimationFrame(animate);
}

animate();


// let fps, fpsInterval, startTime, now, then, elapsed;

// function startAnimating(fps) {
//     fpsInterval = 1000 / fps;
//     then = Date.now();
//     startTime = then;
//     animate();
// }

// function animate() {
//     requestAnimationFrame(animate);
//     now = Date.now();
//     elapsed = now - then;
//     if (elapsed > fpsInterval) {
//         then = now - (elapsed % fpsInterval);
//         ctx.clearRect(0, 0, canvas.width, canvas.height)
//         ctx.drawImage(background, 0, 0,
//             canvas.width, canvas.height
//         );
//         ctx.drawImage(
//             playerSprite, player.width * player.frameX, player.height * player.frameY,                                 // where we crop out the image for sprite
//             player.width, player.height, player.x, player.y,    // where the image will be animated on canvas
//             player.width, player.height
//         );
//         movePlayer();
//         handlePlayerFrame();
//         requestAnimationFrame(animate);
//     }
// }
// startAnimating(60);