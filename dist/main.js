/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ "./src/scripts/game.js");

var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext('2d'); // gives us access to building canvas methods

canvas.width = 840;
canvas.height = 650;
var background = new Image();
background.src = "./src/images/background-1.png";
var playerSprite = new Image();
playerSprite.src = "./src/images/bike1.png";
var keys = []; // keep track of our user's input

var player = {
  // stores all data on our player's character
  x: 300,
  y: 200,
  width: 186,
  height: 130,
  frameX: 0,
  // horizonal coordinate of where we crop out from sprite sheet
  frameY: 0,
  // vertical coordinate of where we crop our from sprite sheet
  speed: 10,
  // how many pixels to move per frame of animation
  moving: false,
  // we use this to switch between idle and moving animations
  leftAttack: false,
  rightAttack: false
};
window.addEventListener("keydown", function (e) {
  keys[e.key] = true;
  player.moving = true; // console.log(keys)
});
window.addEventListener("keyup", function (e) {
  delete keys[e.key];
  player.moving = false;
  player.leftAttack = false;
  player.rightAttack = false;
});

function movePlayer() {
  if (keys.w && player.y > 0) {
    // moving up
    player.y -= player.speed; // increase our playser's y pos by speed

    player.moving = true;
  }

  if (keys.s && player.y < canvas.height - player.height) {
    // moving down
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
} // function playerAttack() {
//     if ( keys.q ) {
//         player.frameY = 2
//     }
// }


function handlePlayerFrame() {
  if (player.frameX < 1 && player.moving) {
    // TODO, not correctly showing frame
    player.frameX++;
    console.log("moving");
  }

  if (!player.rightAttack && player.frameY === 1) {
    player.frameY = 0;
    console.log("R ATTACK");
  }

  if (!player.leftAttack && player.frameY === 2) {
    player.frameY = 0;
    console.log("L ATTACK");
  } else {
    player.frameX = 0;
  }
}

var topLoop = -canvas.height;
var bottomLoop = 0;

function animate() {
  //continuously animates
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(background, 0, 0, // BOTTOM ANIMATION
  canvas.width, canvas.height, 0, bottomLoop, canvas.width, canvas.height);
  bottomLoop += 10;
  if (bottomLoop === canvas.height) bottomLoop = -canvas.height;
  ctx.drawImage(background, 0, 0, // TOP ANIMATION
  canvas.width, canvas.height, 0, topLoop, canvas.width, canvas.height);
  topLoop += 10;
  if (topLoop === canvas.height) topLoop = -canvas.height; // ctx.drawImage( background, 0, 0,    // BOTTOM ANIMATION
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

  ctx.drawImage(playerSprite, player.width * player.frameX, player.height * player.frameY, // where we crop out the image for sprite
  player.width, player.height, player.x, player.y, // where the image will be animated on canvas
  player.width, player.height);
  movePlayer();
  handlePlayerFrame();
  requestAnimationFrame(animate);
}

animate(); // let fps, fpsInterval, startTime, now, then, elapsed;
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

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/scripts/player.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Game = /*#__PURE__*/function () {
  function Game(canvasEl) {
    _classCallCheck(this, Game);

    this.player1 = new _player__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.ctx = canvasEl.getContext("2d");
    this.dimensions = {
      width: canvasEl.width = 840,
      height: canvasEl.height = 650
    };
    this.keys = []; // this.registerEvents();
  } // registerEvents() {
  //     this.ctx.canvasEl.addEventListener("keydown", (e) => {
  //            keys[e.key] = true;
  //            this.player1.moving = true;
  //            // console.log(keys)
  //     })
  //     this.ctx.addEventListener("keyup", (e) => {
  //         delete keys[e.key];
  //         this.player1.moving = false;
  //         this.player1.leftAttack = false;
  //         this.player1.rightAttack = false;
  //     })
  // }
  // movePlayer() {
  //     if (keys.w && player.y > 0) {         // moving up
  //         this.player1.y -= this.player1.speed;           // increase our playser's y pos by speed
  //         this.player1.moving = true;
  //     }
  //     if (keys.s && player.y < this.canvasHeight - this.player1.height) {    // moving down
  //         this.player1.y += this.player1.speed;
  //         this.player1.moving = true;
  //     }
  //     if (keys.a && this.player1.x > 80) {
  //         this.player1.x -= this.player1.speed;
  //         this.player1.moving = true;
  //     }
  //     if (keys.d && player.x < this.canvasWidth - 230) {
  //         this.player1.x += this.player1.speed;
  //         this.player1.moving = true;
  //     }
  //     if (keys.q) {
  //         this.player1.frameX = 0;
  //         this.player1.frameY = 2;
  //         this.player1.leftAttack = true;
  //     }
  //     if (keys.e) {
  //         this.player1.frameX = 0;
  //         this.player1.frameY = 1;
  //         this.player1.rightAttack = true;
  //     }
  // }
  // handlePlayerFrame() {
  //     if (this.player1.frameX < 1 && this.player1.moving) {
  //         this.player1.frameX++
  //         console.log("moving")
  //     }
  //     if (!this.player1.rightAttack && this.player1.frameY === 1) {
  //         this.player1.frameY = 0;
  //         console.log("R ATTACK")
  //     }
  //     if (!this.player1.leftAttack && this.player1.frameY === 2) {
  //         this.player1.frameY = 0;
  //         console.log("L ATTACK")
  //     }
  //     else {
  //         this.player1.frameX = 0
  //     }
  // }


  _createClass(Game, [{
    key: "animate",
    value: function animate() {
      //continuously animates
      var background = new Image();
      background.src = "./src/images/background-1.png";
      this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
      this.ctx.drawImage(background, 0, 0, this.dimensions.width, this.dimensions.weight); // this.ctx.drawImage(
      //     this.player1, this.player1.width * this.player1.frameX, this.player1.height * this.player1.frameY,                                 // where we crop out the image for sprite
      //     this.player1.width, this.player1.height, this.player1.x, this.player1.y,    // where the image will be animated on canvas
      //     this.player1.width, this.player1.height
      // );
      // movePlayer();
      // handlePlayerFrame();
      // console.log("animate")

      requestAnimationFrame(this.animate.bind(this));
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function Player() {
  _classCallCheck(this, Player);

  this.x = 300, this.y = 200, this.width = 186;
  this.height = 130, this.frameX = 0, this.frameY = 0, this.speed = 10, this.moving = false, this.leftAttack = false, this.rightAttack = false, this.playerSprite = new Image();
  this.playerSprite.src = "./src/images/bike1.png";
} // movePlayer() {
//     if (keys.w && this.y > 0) {         // moving up
//         this.y -= this.speed;           // increase our playser's y pos by speed
//         this.moving = true;
//     }
//         if (keys.s) {    // moving down
//         this.y += this.speed;
//         this.moving = true;
//     }
//         if (keys.a && this.x > 80) {
//             this.x -= this.speed;
//             this.moving = true;
//     }
//         if (keys.d) {
//             this.x += this.speed;
//             this.moving = true;
//     }
//     if (keys.q) {
//         this.frameX = 0;
//         this.frameY = 2;
//         this.leftAttack = true;
//     }
//     if (keys.e) {
//         this.frameX = 0;
//         this.frameY = 1;
//         this.rightAttack = true;
//     }
// }
// handlePlayerFrame() {
//     if (this.frameX < 1 && this.moving) {
//         this.frameX++
//         console.log("moving")
//     }
//     if (!this.rightAttack && this.frameY === 1) {
//         this.frameY = 0;
//         console.log("R ATTACK")
//     }
//     if (!this.leftAttack && this.frameY === 2) {
//         this.frameY = 0;
//         console.log("L ATTACK")
//     }
//     else {
//         this.frameX = 0
//     }
// }
;



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvcGxheWVyLmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwiSW1hZ2UiLCJzcmMiLCJwbGF5ZXJTcHJpdGUiLCJrZXlzIiwicGxheWVyIiwieCIsInkiLCJmcmFtZVgiLCJmcmFtZVkiLCJzcGVlZCIsIm1vdmluZyIsImxlZnRBdHRhY2siLCJyaWdodEF0dGFjayIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5IiwibW92ZVBsYXllciIsInciLCJzIiwiYSIsImQiLCJxIiwiaGFuZGxlUGxheWVyRnJhbWUiLCJjb25zb2xlIiwibG9nIiwidG9wTG9vcCIsImJvdHRvbUxvb3AiLCJhbmltYXRlIiwiY2xlYXJSZWN0IiwiZHJhd0ltYWdlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiR2FtZSIsImNhbnZhc0VsIiwicGxheWVyMSIsIlBsYXllciIsImRpbWVuc2lvbnMiLCJ3ZWlnaHQiLCJiaW5kIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FB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QUFjLENBRGQsRUFFQSxLQUFLQyxNQUFMLEdBQWMsQ0FGZCxFQUdBLEtBQUtDLEtBQUwsR0FBYSxFQUhiLEVBSUEsS0FBS0MsTUFBTCxHQUFjLEtBSmQsRUFLQSxLQUFLQyxVQUFMLEdBQWtCLEtBTGxCLEVBTUEsS0FBS0MsV0FBTCxHQUFtQixLQU5uQixFQU9BLEtBQUtWLFlBQUwsR0FBb0IsSUFBSUYsS0FBSixFQVBwQjtBQVFBLE9BQUtFLFlBQUwsQ0FBa0JELEdBQWxCLEdBQXdCLHdCQUF4QjtBQUNILEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnXG5cblxuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhczFcIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTsgICAgLy8gZ2l2ZXMgdXMgYWNjZXNzIHRvIGJ1aWxkaW5nIGNhbnZhcyBtZXRob2RzXG5jYW52YXMud2lkdGggPSA4NDA7XG5jYW52YXMuaGVpZ2h0ID0gNjUwO1xuXG5jb25zdCBiYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XG5iYWNrZ3JvdW5kLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL2JhY2tncm91bmQtMS5wbmdcIjtcblxuY29uc3QgcGxheWVyU3ByaXRlID0gbmV3IEltYWdlKCk7XG5wbGF5ZXJTcHJpdGUuc3JjID0gXCIuL3NyYy9pbWFnZXMvYmlrZTEucG5nXCI7XG5cbmNvbnN0IGtleXMgPSBbXTsgICAgLy8ga2VlcCB0cmFjayBvZiBvdXIgdXNlcidzIGlucHV0XG5cbmNvbnN0IHBsYXllciA9IHsgICAgLy8gc3RvcmVzIGFsbCBkYXRhIG9uIG91ciBwbGF5ZXIncyBjaGFyYWN0ZXJcbiAgICB4OiAzMDAsXG4gICAgeTogMjAwLFxuICAgIHdpZHRoOiAxODYsXG4gICAgaGVpZ2h0OiAxMzAsXG4gICAgZnJhbWVYOiAwLCAgICAgIC8vIGhvcml6b25hbCBjb29yZGluYXRlIG9mIHdoZXJlIHdlIGNyb3Agb3V0IGZyb20gc3ByaXRlIHNoZWV0XG4gICAgZnJhbWVZOiAwLCAgICAgIC8vIHZlcnRpY2FsIGNvb3JkaW5hdGUgb2Ygd2hlcmUgd2UgY3JvcCBvdXIgZnJvbSBzcHJpdGUgc2hlZXRcbiAgICBzcGVlZDogMTAsICAgICAgIC8vIGhvdyBtYW55IHBpeGVscyB0byBtb3ZlIHBlciBmcmFtZSBvZiBhbmltYXRpb25cbiAgICBtb3Zpbmc6IGZhbHNlLCAgIC8vIHdlIHVzZSB0aGlzIHRvIHN3aXRjaCBiZXR3ZWVuIGlkbGUgYW5kIG1vdmluZyBhbmltYXRpb25zXG4gICAgbGVmdEF0dGFjazogZmFsc2UsXG4gICAgcmlnaHRBdHRhY2s6IGZhbHNlXG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgIGtleXNbZS5rZXldID0gdHJ1ZTtcbiAgICBwbGF5ZXIubW92aW5nID0gdHJ1ZTtcbiAgICAvLyBjb25zb2xlLmxvZyhrZXlzKVxufSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XG4gICAgZGVsZXRlIGtleXNbZS5rZXldO1xuICAgIHBsYXllci5tb3ZpbmcgPSBmYWxzZTtcbiAgICBwbGF5ZXIubGVmdEF0dGFjayA9IGZhbHNlO1xuICAgIHBsYXllci5yaWdodEF0dGFjayA9IGZhbHNlO1xuICAgIFxufSk7XG5cblxuXG5mdW5jdGlvbiBtb3ZlUGxheWVyKCkge1xuICAgIGlmIChrZXlzLncgJiYgcGxheWVyLnkgPiAwICkgeyAgICAgICAgIC8vIG1vdmluZyB1cFxuICAgICAgICBwbGF5ZXIueSAtPSBwbGF5ZXIuc3BlZWQ7ICAgICAgICAgICAvLyBpbmNyZWFzZSBvdXIgcGxheXNlcidzIHkgcG9zIGJ5IHNwZWVkXG4gICAgICAgIHBsYXllci5tb3ZpbmcgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoa2V5cy5zICYmIHBsYXllci55IDwgY2FudmFzLmhlaWdodCAtIHBsYXllci5oZWlnaHQpIHsgICAgLy8gbW92aW5nIGRvd25cbiAgICAgICAgcGxheWVyLnkgKz0gcGxheWVyLnNwZWVkO1xuICAgICAgICBwbGF5ZXIubW92aW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGtleXMuYSAmJiBwbGF5ZXIueCA+IDgwKSB7XG4gICAgICAgIHBsYXllci54IC09IHBsYXllci5zcGVlZDtcbiAgICAgICAgcGxheWVyLm1vdmluZyA9IHRydWU7XG4gICAgfVxuICAgIGlmIChrZXlzLmQgJiYgcGxheWVyLnggPCBjYW52YXMud2lkdGggLSAyMzApIHtcbiAgICAgICAgcGxheWVyLnggKz0gcGxheWVyLnNwZWVkO1xuICAgICAgICBwbGF5ZXIubW92aW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGtleXMucSkge1xuICAgICAgICBwbGF5ZXIuZnJhbWVYID0gMDtcbiAgICAgICAgcGxheWVyLmZyYW1lWSA9IDI7XG4gICAgICAgIHBsYXllci5sZWZ0QXR0YWNrID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGtleXMuZSkge1xuICAgICAgICBwbGF5ZXIuZnJhbWVYID0gMDtcbiAgICAgICAgcGxheWVyLmZyYW1lWSA9IDE7XG4gICAgICAgIHBsYXllci5yaWdodEF0dGFjayA9IHRydWU7XG4gXG4gICAgfVxufVxuXG4vLyBmdW5jdGlvbiBwbGF5ZXJBdHRhY2soKSB7XG4vLyAgICAgaWYgKCBrZXlzLnEgKSB7XG4vLyAgICAgICAgIHBsYXllci5mcmFtZVkgPSAyXG4vLyAgICAgfVxuLy8gfVxuZnVuY3Rpb24gaGFuZGxlUGxheWVyRnJhbWUoKSB7XG4gICAgaWYgKHBsYXllci5mcmFtZVggPCAxICYmIHBsYXllci5tb3ZpbmcpIHsgICAvLyBUT0RPLCBub3QgY29ycmVjdGx5IHNob3dpbmcgZnJhbWVcbiAgICAgICAgcGxheWVyLmZyYW1lWCsrXG4gICAgICAgIGNvbnNvbGUubG9nKFwibW92aW5nXCIpXG4gICAgfVxuICAgIGlmICghcGxheWVyLnJpZ2h0QXR0YWNrICYmIHBsYXllci5mcmFtZVkgPT09IDEpIHtcbiAgICAgICAgcGxheWVyLmZyYW1lWSA9IDA7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUiBBVFRBQ0tcIilcbiAgICB9XG4gICAgaWYgKCFwbGF5ZXIubGVmdEF0dGFjayAmJiBwbGF5ZXIuZnJhbWVZID09PSAyICkge1xuICAgICAgICBwbGF5ZXIuZnJhbWVZID0gMDtcbiAgICAgICAgY29uc29sZS5sb2coXCJMIEFUVEFDS1wiKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcGxheWVyLmZyYW1lWCA9IDBcbiAgICB9XG59XG5cbmxldCB0b3BMb29wID0gLWNhbnZhcy5oZWlnaHQ7XG5sZXQgYm90dG9tTG9vcCA9IDA7XG5mdW5jdGlvbiBhbmltYXRlKCkgeyAgICAvL2NvbnRpbnVvdXNseSBhbmltYXRlc1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuICAgIFxuICAgIGN0eC5kcmF3SW1hZ2UoIGJhY2tncm91bmQsIDAsIDAsICAgIC8vIEJPVFRPTSBBTklNQVRJT05cbiAgICAgICAgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0LFxuICAgICAgICAwLCBib3R0b21Mb29wLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHRcbiAgICAgICAgKVxuICAgICAgICBib3R0b21Mb29wICs9IDEwO1xuICAgICAgICBpZiAoYm90dG9tTG9vcCA9PT0gY2FudmFzLmhlaWdodCkgYm90dG9tTG9vcCA9IC1jYW52YXMuaGVpZ2h0O1xuICAgIGN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZCwgMCwgMCwgICAgIC8vIFRPUCBBTklNQVRJT05cbiAgICAgICAgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0LFxuICAgICAgICAwLCB0b3BMb29wLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHRcbiAgICAgICAgKVxuICAgICAgICB0b3BMb29wICs9IDEwO1xuICAgICAgICBpZiAodG9wTG9vcCA9PT0gY2FudmFzLmhlaWdodCkgdG9wTG9vcD0gLWNhbnZhcy5oZWlnaHQ7XG5cbiAgICAvLyBjdHguZHJhd0ltYWdlKCBiYWNrZ3JvdW5kLCAwLCAwLCAgICAvLyBCT1RUT00gQU5JTUFUSU9OXG4gICAgLy8gICAgIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCxcbiAgICAvLyAgICAgMCwgbG9vcCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0XG4gICAgLy8gICAgIClcbiAgICAvLyAgICAgbG9vcCArPSA1XG4gICAgLy8gICAgIGlmIChsb29wID09PSBjYW52YXMuaGVpZ2h0KSBsb29wID0gMzI1XG4gICAgLy8gICAgICAgICBjdHguZHJhd0ltYWdlKGJhY2tncm91bmQsIDAsIDAsICAgICAvLyBUT1AgQU5JTUFUSU9OXG4gICAgLy8gICAgICAgICAgICAgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0LFxuICAgIC8vICAgICAgICAgICAgIDAsIGxvb3AyLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHRcbiAgICAvLyAgICAgICAgICAgICApXG4gICAgLy8gICAgICAgICAgICAgbG9vcDIgKz0gNVxuICAgIC8vICAgICAgICAgICAgIGlmIChsb29wMiA9PT0gMzI1KSBsb29wMiA9IC0zMjU7XG4gICAgLy8gY3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kLCAwLCAwLCAgICAgLy8gVE9QIEFOSU1BVElPTlxuICAgIC8vICAgICBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQsXG4gICAgLy8gICAgIDAsIGxvb3AzLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHRcbiAgICAvLyAgICAgKVxuICAgIC8vICAgICBsb29wMyArPSA1XG4gICAgLy8gICAgIGlmIChsb29wMyA9PT0gMCkgbG9vcDMgPSAtNjUwO1xuICAgICAgICBcblxuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICAgIHBsYXllclNwcml0ZSwgcGxheWVyLndpZHRoICogcGxheWVyLmZyYW1lWCwgcGxheWVyLmhlaWdodCAqIHBsYXllci5mcmFtZVksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2hlcmUgd2UgY3JvcCBvdXQgdGhlIGltYWdlIGZvciBzcHJpdGVcbiAgICAgICAgcGxheWVyLndpZHRoLCBwbGF5ZXIuaGVpZ2h0LCBwbGF5ZXIueCwgcGxheWVyLnksICAgIC8vIHdoZXJlIHRoZSBpbWFnZSB3aWxsIGJlIGFuaW1hdGVkIG9uIGNhbnZhc1xuICAgICAgICBwbGF5ZXIud2lkdGgsIHBsYXllci5oZWlnaHRcbiAgICApO1xuICAgIG1vdmVQbGF5ZXIoKTtcbiAgICBoYW5kbGVQbGF5ZXJGcmFtZSgpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbn1cblxuYW5pbWF0ZSgpO1xuXG5cbi8vIGxldCBmcHMsIGZwc0ludGVydmFsLCBzdGFydFRpbWUsIG5vdywgdGhlbiwgZWxhcHNlZDtcblxuLy8gZnVuY3Rpb24gc3RhcnRBbmltYXRpbmcoZnBzKSB7XG4vLyAgICAgZnBzSW50ZXJ2YWwgPSAxMDAwIC8gZnBzO1xuLy8gICAgIHRoZW4gPSBEYXRlLm5vdygpO1xuLy8gICAgIHN0YXJ0VGltZSA9IHRoZW47XG4vLyAgICAgYW5pbWF0ZSgpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBhbmltYXRlKCkge1xuLy8gICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbi8vICAgICBub3cgPSBEYXRlLm5vdygpO1xuLy8gICAgIGVsYXBzZWQgPSBub3cgLSB0aGVuO1xuLy8gICAgIGlmIChlbGFwc2VkID4gZnBzSW50ZXJ2YWwpIHtcbi8vICAgICAgICAgdGhlbiA9IG5vdyAtIChlbGFwc2VkICUgZnBzSW50ZXJ2YWwpO1xuLy8gICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcbi8vICAgICAgICAgY3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kLCAwLCAwLFxuLy8gICAgICAgICAgICAgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0XG4vLyAgICAgICAgICk7XG4vLyAgICAgICAgIGN0eC5kcmF3SW1hZ2UoXG4vLyAgICAgICAgICAgICBwbGF5ZXJTcHJpdGUsIHBsYXllci53aWR0aCAqIHBsYXllci5mcmFtZVgsIHBsYXllci5oZWlnaHQgKiBwbGF5ZXIuZnJhbWVZLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdoZXJlIHdlIGNyb3Agb3V0IHRoZSBpbWFnZSBmb3Igc3ByaXRlXG4vLyAgICAgICAgICAgICBwbGF5ZXIud2lkdGgsIHBsYXllci5oZWlnaHQsIHBsYXllci54LCBwbGF5ZXIueSwgICAgLy8gd2hlcmUgdGhlIGltYWdlIHdpbGwgYmUgYW5pbWF0ZWQgb24gY2FudmFzXG4vLyAgICAgICAgICAgICBwbGF5ZXIud2lkdGgsIHBsYXllci5oZWlnaHRcbi8vICAgICAgICAgKTtcbi8vICAgICAgICAgbW92ZVBsYXllcigpO1xuLy8gICAgICAgICBoYW5kbGVQbGF5ZXJGcmFtZSgpO1xuLy8gICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4vLyAgICAgfVxuLy8gfVxuLy8gc3RhcnRBbmltYXRpbmcoNjApOyIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhc0VsKSB7XG4gICAgICAgIHRoaXMucGxheWVyMSA9IG5ldyBQbGF5ZXIoKTtcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXNFbC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IHtcbiAgICAgICAgICAgIHdpZHRoOiBjYW52YXNFbC53aWR0aCA9IDg0MCxcbiAgICAgICAgICAgIGhlaWdodDogY2FudmFzRWwuaGVpZ2h0ID0gNjUwXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rZXlzID0gW107XG4gICAgICAgIC8vIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcblxuICAgIH1cbiAgICAvLyByZWdpc3RlckV2ZW50cygpIHtcbiAgICAvLyAgICAgdGhpcy5jdHguY2FudmFzRWwuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAvLyAgICAgICAgICAgIGtleXNbZS5rZXldID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgICAgIHRoaXMucGxheWVyMS5tb3ZpbmcgPSB0cnVlO1xuICAgIC8vICAgICAgICAgICAgLy8gY29uc29sZS5sb2coa2V5cylcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgdGhpcy5jdHguYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XG4gICAgLy8gICAgICAgICBkZWxldGUga2V5c1tlLmtleV07XG4gICAgLy8gICAgICAgICB0aGlzLnBsYXllcjEubW92aW5nID0gZmFsc2U7XG4gICAgLy8gICAgICAgICB0aGlzLnBsYXllcjEubGVmdEF0dGFjayA9IGZhbHNlO1xuICAgIC8vICAgICAgICAgdGhpcy5wbGF5ZXIxLnJpZ2h0QXR0YWNrID0gZmFsc2U7XG4gICAgLy8gICAgIH0pXG5cbiAgICAvLyB9XG4gICAgLy8gbW92ZVBsYXllcigpIHtcbiAgICAvLyAgICAgaWYgKGtleXMudyAmJiBwbGF5ZXIueSA+IDApIHsgICAgICAgICAvLyBtb3ZpbmcgdXBcbiAgICAvLyAgICAgICAgIHRoaXMucGxheWVyMS55IC09IHRoaXMucGxheWVyMS5zcGVlZDsgICAgICAgICAgIC8vIGluY3JlYXNlIG91ciBwbGF5c2VyJ3MgeSBwb3MgYnkgc3BlZWRcbiAgICAvLyAgICAgICAgIHRoaXMucGxheWVyMS5tb3ZpbmcgPSB0cnVlO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmIChrZXlzLnMgJiYgcGxheWVyLnkgPCB0aGlzLmNhbnZhc0hlaWdodCAtIHRoaXMucGxheWVyMS5oZWlnaHQpIHsgICAgLy8gbW92aW5nIGRvd25cbiAgICAvLyAgICAgICAgIHRoaXMucGxheWVyMS55ICs9IHRoaXMucGxheWVyMS5zcGVlZDtcbiAgICAvLyAgICAgICAgIHRoaXMucGxheWVyMS5tb3ZpbmcgPSB0cnVlO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmIChrZXlzLmEgJiYgdGhpcy5wbGF5ZXIxLnggPiA4MCkge1xuICAgIC8vICAgICAgICAgdGhpcy5wbGF5ZXIxLnggLT0gdGhpcy5wbGF5ZXIxLnNwZWVkO1xuICAgIC8vICAgICAgICAgdGhpcy5wbGF5ZXIxLm1vdmluZyA9IHRydWU7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKGtleXMuZCAmJiBwbGF5ZXIueCA8IHRoaXMuY2FudmFzV2lkdGggLSAyMzApIHtcbiAgICAvLyAgICAgICAgIHRoaXMucGxheWVyMS54ICs9IHRoaXMucGxheWVyMS5zcGVlZDtcbiAgICAvLyAgICAgICAgIHRoaXMucGxheWVyMS5tb3ZpbmcgPSB0cnVlO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmIChrZXlzLnEpIHtcbiAgICAvLyAgICAgICAgIHRoaXMucGxheWVyMS5mcmFtZVggPSAwO1xuICAgIC8vICAgICAgICAgdGhpcy5wbGF5ZXIxLmZyYW1lWSA9IDI7XG4gICAgLy8gICAgICAgICB0aGlzLnBsYXllcjEubGVmdEF0dGFjayA9IHRydWU7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKGtleXMuZSkge1xuICAgIC8vICAgICAgICAgdGhpcy5wbGF5ZXIxLmZyYW1lWCA9IDA7XG4gICAgLy8gICAgICAgICB0aGlzLnBsYXllcjEuZnJhbWVZID0gMTtcbiAgICAvLyAgICAgICAgIHRoaXMucGxheWVyMS5yaWdodEF0dGFjayA9IHRydWU7XG5cbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbiAgICAvLyBoYW5kbGVQbGF5ZXJGcmFtZSgpIHtcbiAgICAvLyAgICAgaWYgKHRoaXMucGxheWVyMS5mcmFtZVggPCAxICYmIHRoaXMucGxheWVyMS5tb3ZpbmcpIHtcbiAgICAvLyAgICAgICAgIHRoaXMucGxheWVyMS5mcmFtZVgrK1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJtb3ZpbmdcIilcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAoIXRoaXMucGxheWVyMS5yaWdodEF0dGFjayAmJiB0aGlzLnBsYXllcjEuZnJhbWVZID09PSAxKSB7XG4gICAgLy8gICAgICAgICB0aGlzLnBsYXllcjEuZnJhbWVZID0gMDtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiUiBBVFRBQ0tcIilcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAoIXRoaXMucGxheWVyMS5sZWZ0QXR0YWNrICYmIHRoaXMucGxheWVyMS5mcmFtZVkgPT09IDIpIHtcbiAgICAvLyAgICAgICAgIHRoaXMucGxheWVyMS5mcmFtZVkgPSAwO1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJMIEFUVEFDS1wiKVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGVsc2Uge1xuICAgIC8vICAgICAgICAgdGhpcy5wbGF5ZXIxLmZyYW1lWCA9IDBcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIGFuaW1hdGUoKSB7ICAgIC8vY29udGludW91c2x5IGFuaW1hdGVzXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgYmFja2dyb3VuZC5zcmMgPSBcIi4vc3JjL2ltYWdlcy9iYWNrZ3JvdW5kLTEucG5nXCJcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuZGltZW5zaW9ucy53aWR0aCwgdGhpcy5kaW1lbnNpb25zLmhlaWdodClcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKCBiYWNrZ3JvdW5kLCAwLCAwLFxuICAgICAgICAgICAgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMud2VpZ2h0XG4gICAgICAgICk7XG4gICAgICAgIC8vIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgLy8gICAgIHRoaXMucGxheWVyMSwgdGhpcy5wbGF5ZXIxLndpZHRoICogdGhpcy5wbGF5ZXIxLmZyYW1lWCwgdGhpcy5wbGF5ZXIxLmhlaWdodCAqIHRoaXMucGxheWVyMS5mcmFtZVksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2hlcmUgd2UgY3JvcCBvdXQgdGhlIGltYWdlIGZvciBzcHJpdGVcbiAgICAgICAgLy8gICAgIHRoaXMucGxheWVyMS53aWR0aCwgdGhpcy5wbGF5ZXIxLmhlaWdodCwgdGhpcy5wbGF5ZXIxLngsIHRoaXMucGxheWVyMS55LCAgICAvLyB3aGVyZSB0aGUgaW1hZ2Ugd2lsbCBiZSBhbmltYXRlZCBvbiBjYW52YXNcbiAgICAgICAgLy8gICAgIHRoaXMucGxheWVyMS53aWR0aCwgdGhpcy5wbGF5ZXIxLmhlaWdodFxuICAgICAgICAvLyApO1xuICAgICAgICAvLyBtb3ZlUGxheWVyKCk7XG4gICAgICAgIC8vIGhhbmRsZVBsYXllckZyYW1lKCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYW5pbWF0ZVwiKVxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnggPSAzMDAsXG4gICAgICAgIHRoaXMueSA9IDIwMCxcbiAgICAgICAgdGhpcy53aWR0aCA9IDE4NjtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxMzAsXG4gICAgICAgIHRoaXMuZnJhbWVYID0gMCxcbiAgICAgICAgdGhpcy5mcmFtZVkgPSAwLFxuICAgICAgICB0aGlzLnNwZWVkID0gMTAsXG4gICAgICAgIHRoaXMubW92aW5nID0gZmFsc2UsXG4gICAgICAgIHRoaXMubGVmdEF0dGFjayA9IGZhbHNlLFxuICAgICAgICB0aGlzLnJpZ2h0QXR0YWNrID0gZmFsc2UsXG4gICAgICAgIHRoaXMucGxheWVyU3ByaXRlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL2Jpa2UxLnBuZ1wiO1xuICAgIH1cblxuICAgIC8vIG1vdmVQbGF5ZXIoKSB7XG4gICAgLy8gICAgIGlmIChrZXlzLncgJiYgdGhpcy55ID4gMCkgeyAgICAgICAgIC8vIG1vdmluZyB1cFxuICAgIC8vICAgICAgICAgdGhpcy55IC09IHRoaXMuc3BlZWQ7ICAgICAgICAgICAvLyBpbmNyZWFzZSBvdXIgcGxheXNlcidzIHkgcG9zIGJ5IHNwZWVkXG4gICAgLy8gICAgICAgICB0aGlzLm1vdmluZyA9IHRydWU7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgICAgIGlmIChrZXlzLnMpIHsgICAgLy8gbW92aW5nIGRvd25cbiAgICAvLyAgICAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkO1xuICAgIC8vICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgICAgICBpZiAoa2V5cy5hICYmIHRoaXMueCA+IDgwKSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy54IC09IHRoaXMuc3BlZWQ7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgICAgICBpZiAoa2V5cy5kKSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWQ7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmIChrZXlzLnEpIHtcbiAgICAvLyAgICAgICAgIHRoaXMuZnJhbWVYID0gMDtcbiAgICAvLyAgICAgICAgIHRoaXMuZnJhbWVZID0gMjtcbiAgICAvLyAgICAgICAgIHRoaXMubGVmdEF0dGFjayA9IHRydWU7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKGtleXMuZSkge1xuICAgIC8vICAgICAgICAgdGhpcy5mcmFtZVggPSAwO1xuICAgIC8vICAgICAgICAgdGhpcy5mcmFtZVkgPSAxO1xuICAgIC8vICAgICAgICAgdGhpcy5yaWdodEF0dGFjayA9IHRydWU7XG5cbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIC8vIGhhbmRsZVBsYXllckZyYW1lKCkge1xuICAgIC8vICAgICBpZiAodGhpcy5mcmFtZVggPCAxICYmIHRoaXMubW92aW5nKSB7XG4gICAgLy8gICAgICAgICB0aGlzLmZyYW1lWCsrXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIm1vdmluZ1wiKVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmICghdGhpcy5yaWdodEF0dGFjayAmJiB0aGlzLmZyYW1lWSA9PT0gMSkge1xuICAgIC8vICAgICAgICAgdGhpcy5mcmFtZVkgPSAwO1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJSIEFUVEFDS1wiKVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmICghdGhpcy5sZWZ0QXR0YWNrICYmIHRoaXMuZnJhbWVZID09PSAyKSB7XG4gICAgLy8gICAgICAgICB0aGlzLmZyYW1lWSA9IDA7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIkwgQVRUQUNLXCIpXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgZWxzZSB7XG4gICAgLy8gICAgICAgICB0aGlzLmZyYW1lWCA9IDBcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==