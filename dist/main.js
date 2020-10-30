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
/* harmony import */ var _scripts_game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game_view */ "./src/scripts/game_view.js");


document.addEventListener("DOMContentLoaded", function () {
  var canvasSplash = document.getElementById("canvas-splash");
  canvasSplash.width = 840;
  canvasSplash.height = 650;
  var canvas = document.getElementById("canvas-game");
  canvas.width = 840;
  canvas.height = 650;
  var canvasUI = document.getElementById("canvas-ui");
  canvasUI.width = 840;
  canvasUI.height = 650; // const game1 = new Game(canvas)

  var newGameView = new _scripts_game_view__WEBPACK_IMPORTED_MODULE_1__["default"](canvas, canvasSplash, canvasUI).registerEvents(); // const audio = document.getElementById("music");
  // setTimeout(() => audio.play(), 3000);
});

/***/ }),

/***/ "./src/scripts/enemy.js":
/*!******************************!*\
  !*** ./src/scripts/enemy.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Enemy; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Enemy = function Enemy(ctx, enemyType) {
  _classCallCheck(this, Enemy);

  // this.x = 0;       // TODO Will change based on the arg passed into constructor
  // this.y = 0;
  this.width = 243;
  this.height = 480;
  this.hitboxWidth = 90;
  this.hitboxHeight = 150;
  this.type = enemyType; // TODO Will change based on a the argument passed into constructor

  this.enemySprite = new Image();

  switch (this.type) {
    case "stupid":
      this.enemySprite.src = "./src/images/car1.png";
      this.x = Math.floor(Math.random() * (550 - 120) + 120);
      this.y = -100;
      this.speed = 3;
      break;

    case "crazy":
      this.enemySprite.src = "./src/images/car2.png";
      this.x = Math.floor(Math.random() * (550 - 120) + 120);
      this.y = 650;
      this.turning = 4;
      this.speed = 6;
      break;

    case "turtle":
      this.enemySprite.src = "./src/images/turtle.png";
      this.x = Math.floor(Math.random() * (550 - 120) + 120);
      this.y = 650;
      this.turning = 4;
      this.speed = 6;
      this.width = 50;
      this.height = 53;
      this.direction = "right";
      this.frameY = 0;
      break;

    default:
  }

  this.xHitBox = [this.x, this.x + this.hitboxWidth];
  this.yHitBox = [this.y, this.y + this.hitboxHeight];
  this.frameX = 0;
  this.dead = false;
};



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
/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemy */ "./src/scripts/enemy.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/scripts/player.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Util = __webpack_require__(/*! ./util */ "./src/scripts/util.js");

var Game = /*#__PURE__*/function () {
  function Game(canvas, canvasSplash, canvasUI) {
    _classCallCheck(this, Game);

    this.health = 1000;
    this.gameover = false;
    this.ctxUI = canvasUI.getContext("2d");
    this.ctx = canvas.getContext("2d");
    this.ctxSplash = canvasSplash.getContext("2d");
    this.sound = false;
    this.player1 = new _player__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.width = canvas.width;
    this.height = canvas.height;
    this.keys = [];
    this.topLoop = -canvas.height;
    this.bottomLoop = 0;
    this.background = new Image();
    this.background.src = "./src/images/background-1.png";
    this.enemies = []; // contains enemies currently on screen, shown as enemy.type

    this.fpsInterval;
    this.startTime;
    this.now;
    this.then;
    this.elapsed;
    this.slice = new Audio('./src/audio/slice.mp3');
    this.oof = new Audio('./src/audio/oof.mp3');
    this.score = 0; // this.drawBackground();
    // this.drawPlayer();
  }

  _createClass(Game, [{
    key: "drawBackground",
    value: function drawBackground() {
      //bottom half of the background
      this.ctxSplash.drawImage(this.background, 0, 0, this.width, this.height, 0, this.bottomLoop, this.width, this.height);
      this.bottomLoop += 10;
      if (this.bottomLoop === this.height) this.bottomLoop = -this.height; //top half of the background

      this.ctxSplash.drawImage(this.background, 0, 0, this.width, this.height, 0, this.topLoop, this.width, this.height);
      this.topLoop += 10;
      if (this.topLoop === this.height) this.topLoop = -this.height;
    }
  }, {
    key: "drawPlayer",
    value: function drawPlayer() {
      this.ctx.drawImage(this.player1.playerSprite, this.player1.width * this.player1.frameX, this.player1.height * this.player1.frameY, // where we crop out the image for sprite
      this.player1.width, this.player1.height, this.player1.x, this.player1.y, // where the image will be animated on canvas
      this.player1.width, this.player1.height);
    }
  }, {
    key: "drawUI",
    value: function drawUI(health, score) {
      // initial health
      this.ctxUI.clearRect(0, 0, this.width, this.height);
      this.ctxUI.fillStyle = "red";
      this.ctxUI.fillRect(10, 30, 250, 10);
      this.ctxUI.beginPath();
      this.ctxUI.lineWidth = "3";
      this.ctxUI.strokeStyle = "white";
      this.ctxUI.rect(9, 29, 252, 12);
      this.ctxUI.stroke(); // your actual health

      if (health < 700) {
        this.ctxUI.fillStyle = "yellow";
        this.ctxUI.fillRect(10, 30, health / 4, 10);
      } else {
        this.ctxUI.fillStyle = "green";
        this.ctxUI.fillRect(10, 30, health / 4, 10);
      } // text


      this.ctxUI.font = "40px ARCADECLASSIC";
      this.ctxUI.fillStyle = "white";
      this.ctxUI.fillText("HP", 10, 27);

      if (health <= 0) {
        this.ctxUI.font = "40px ARCADECLASSIC";
        this.ctxUI.fillStyle = "red";
        this.ctxUI.fillText("0 / 1000", 80, 27);
      } else if (health < 100) {
        this.ctxUI.font = "40px ARCADECLASSIC";
        this.ctxUI.fillStyle = "red";
        this.ctxUI.fillText("".concat(health, "/ 1000"), 80, 27);
      } else if (health < 700) {
        this.ctxUI.font = "40px ARCADECLASSIC";
        this.ctxUI.fillStyle = "yellow";
        this.ctxUI.fillText("".concat(health, "/ 1000"), 80, 27);
      } else {
        this.ctxUI.font = "40px ARCADECLASSIC";
        this.ctxUI.fillStyle = "white";
        this.ctxUI.fillText("".concat(health, "/ 1000"), 80, 27);
      }

      this.ctxUI.font = "25px ARCADECLASSIC";
      this.ctxUI.fillStyle = "white";
      this.ctxUI.textAlign = "start";
      this.ctxUI.fillText("".concat(score), 750, 20);
    }
  }, {
    key: "generateEnemy",
    value: function generateEnemy() {
      // logic for when to generate an enemy.  will push into this.enemies
      var randomNum = Math.floor(Math.random() * 70);

      if (this.enemies.length < 5 && randomNum === 5) {
        var randomEnemyNum = Math.floor(Math.random() * 100);
        var enemyType;

        if (randomEnemyNum > 80) {
          enemyType = "turtle";
        }

        if (enemyType !== "turtle") {
          if (randomEnemyNum <= 50) {
            enemyType = "stupid";
          } else {
            enemyType = "crazy";
          }
        }

        if (typeof enemyType === "string") {
          this.enemies.push(new _enemy__WEBPACK_IMPORTED_MODULE_0__["default"](this.ctx, enemyType));
        }
      }
    }
  }, {
    key: "drawEnemy",
    value: function drawEnemy(enemyNum) {
      //TODO: REFACTOR TO A SWITCH CASE
      var currentEnemy = this.enemies[enemyNum]; // ANIMATING THE STUPID ENEMY

      if (currentEnemy.type === "stupid") {
        this.ctx.drawImage(currentEnemy.enemySprite, 0, 0, currentEnemy.width, currentEnemy.height, currentEnemy.x, currentEnemy.y, 90, 150);
        currentEnemy.y += currentEnemy.speed;

        if (Util.collision(this.player1.x + 74, this.player1.y + 16, 38, 80, currentEnemy.x, currentEnemy.y, currentEnemy.hitboxWidth, currentEnemy.hitboxHeight)) {
          this.health -= 1;
          if (this.sound) this.oof.play();
          this.drawUI(this.health, this.score);
          console.log(this.health);
        }

        if (this.player1.leftAttack) {
          if (Util.attacked(this.player1.lAttackXHitBox, this.player1.lAttackYHitBox, currentEnemy.x, currentEnemy.y, currentEnemy.hitboxWidth, currentEnemy.hitboxHeight)) {
            if (this.sound) this.slice.play();
            currentEnemy.type = "damaged-stupid";
          }
        }

        if (this.player1.rightAttack) {
          if (Util.attacked(this.player1.rAttackXHitBox, this.player1.rAttackYHitBox, currentEnemy.x, currentEnemy.y, currentEnemy.hitboxWidth, currentEnemy.hitboxHeight)) {
            if (this.sound) this.slice.play();
            currentEnemy.type = "damaged-stupid";
          }
        }

        if (currentEnemy.y > this.height && currentEnemy.type === "stupid") {
          this.enemies.splice(enemyNum, 1);
        }
      } //ANIMATING THE CRAZY ENEMY


      if (currentEnemy.type === "crazy") {
        this.ctx.drawImage(currentEnemy.enemySprite, 0, 0, currentEnemy.width, currentEnemy.height, currentEnemy.x, currentEnemy.y, 90, 150); // if the enemy is on the player's left side

        if (this.player1.x + 20 > currentEnemy.x) {
          currentEnemy.x += currentEnemy.turning;
          currentEnemy.y -= currentEnemy.speed;
        } // if the enemy is aligned with the player
        else if (Util.between(this.player1.x + 20, currentEnemy.x, currentEnemy.x + 20)) {
            currentEnemy.y -= 12;
          } //if the enemy is on the player's right side
          else {
              currentEnemy.x -= currentEnemy.turning;
              currentEnemy.y -= currentEnemy.speed;
            }

        if (Util.collision(this.player1.x + 74, this.player1.y + 16, 38, 80, currentEnemy.x, currentEnemy.y, currentEnemy.hitboxWidth, currentEnemy.hitboxHeight)) {
          this.health -= 5;
          if (this.sound) this.oof.play();
          this.drawUI(this.health, this.score);
        }

        if (this.player1.leftAttack) {
          if (Util.attacked(this.player1.lAttackXHitBox, this.player1.lAttackYHitBox, currentEnemy.x, currentEnemy.y, currentEnemy.hitboxWidth, currentEnemy.hitboxHeight)) {
            if (this.sound) this.slice.play();
            currentEnemy.type = "damaged-crazy";
          }
        }

        if (this.player1.rightAttack) {
          if (Util.attacked(this.player1.rAttackXHitBox, this.player1.rAttackYHitBox, currentEnemy.x, currentEnemy.y, currentEnemy.hitboxWidth, currentEnemy.hitboxHeight)) {
            if (this.sound) this.slice.play();
            currentEnemy.type = "damaged-crazy";
          }
        }

        if (currentEnemy.y < -150 && currentEnemy.type === "crazy") {
          this.enemies.splice(enemyNum, 1);
        }
      } // MICHAELANGELO!!!


      if (currentEnemy.type === "turtle") {
        switch (currentEnemy.direction) {
          case "right":
            this.ctx.drawImage(currentEnemy.enemySprite, currentEnemy.width * currentEnemy.frameX, 0, currentEnemy.width, currentEnemy.height, currentEnemy.x, currentEnemy.y, 75, 75);
            currentEnemy.x += 12;
            currentEnemy.y -= 4;
            break;

          case "left":
            this.ctx.drawImage(currentEnemy.enemySprite, currentEnemy.width * currentEnemy.frameX, 0, currentEnemy.width, currentEnemy.height, currentEnemy.x, currentEnemy.y, 75, 75);
            currentEnemy.x -= 12;
            currentEnemy.y -= 4;
            break;

          case "down":
            this.ctx.drawImage(currentEnemy.enemySprite, 48, 55, currentEnemy.width, currentEnemy.height, currentEnemy.x, currentEnemy.y, 75, 154);
            currentEnemy.y += 6;
            if (currentEnemy.frameX < 1) currentEnemy.frameX += 1;
            break;

          default:
        } // if (currentEnemy.direction === "right") {
        // }
        // if (currentEnemy.direction === "left") {
        // }


        if (currentEnemy.x <= 80) {
          currentEnemy.frameX = 0;
          currentEnemy.direction = "right";
        }

        if (currentEnemy.x >= 580) {
          currentEnemy.frameX = 1;
          currentEnemy.direction = "left";
        }

        if (currentEnemy.y <= 50) {
          currentEnemy.direction = "down";
          currentEnemy.width = 41;
          currentEnemy.height = 86;
          currentEnemy.frameX = 0;
          currentEnemy.frameY = 1;
        }

        if (Util.collision(this.player1.x + 74, this.player1.y + 16, 38, 80, currentEnemy.x, currentEnemy.y, 50, 53)) {
          this.health -= 10;
          if (this.sound) this.oof.play();
          this.drawUI(this.health, this.score);
        }

        if (currentEnemy.y > 650) {
          // <--THIS SHOULD WORK
          this.enemies.splice(enemyNum, 1);
        }
      } // DAMAGED ENEMIES


      if (currentEnemy.type === "damaged-stupid") {
        currentEnemy.enemySprite = new Image();
        currentEnemy.enemySprite.src = "./src/images/car1-dying.png";
        this.ctx.drawImage(currentEnemy.enemySprite, Math.round(currentEnemy.frameX) * currentEnemy.width, 0, currentEnemy.width, currentEnemy.height, currentEnemy.x, currentEnemy.y, //TODO framesss
        90, 150);
        currentEnemy.y += 4;
        currentEnemy.frameX += 0.1;

        if (currentEnemy.frameX > 4) {
          this.enemies.splice(enemyNum, 1);
          this.score += 100;
        }
      }

      if (currentEnemy.type === "damaged-crazy") {
        currentEnemy.enemySprite = new Image();
        currentEnemy.enemySprite.src = "./src/images/car2-dying.png";
        this.ctx.drawImage(currentEnemy.enemySprite, Math.round(currentEnemy.frameX) * currentEnemy.width, 0, currentEnemy.width, currentEnemy.height, currentEnemy.x, currentEnemy.y, //TODO framesss
        90, 150);
        currentEnemy.y += 4;
        currentEnemy.frameX += 0.1;

        if (currentEnemy.frameX > 4) {
          this.enemies.splice(enemyNum, 1);
          this.score += 500;
        }
      }
    }
  }, {
    key: "checkGameover",
    value: function checkGameover() {
      if (this.health <= 0) {
        this.gameover = true;
        this.ctx.font = "80px ARCADECLASSIC";
        this.ctx.fillStyle = "white";
        this.ctx.fillText("GAME OVER", 245, 300);
        this.ctx.font = "20px ARCADECLASSIC";
        this.ctx.fillStyle = "white";
        this.ctx.fillText("SCORE: ".concat(this.score), 245, 350);

        if (this.score <= 10000) {
          this.ctx.font = "20px ARCADECLASSIC";
          this.ctx.fillStyle = "white";
          this.ctx.fillText("RANK: NOOB", 500, 350);
        } else if (this.score <= 20000) {
          this.ctx.font = "20px ARCADECLASSIC";
          this.ctx.fillStyle = "white";
          this.ctx.fillText("RANK: TWINKLE  TOES", 500, 350);
        } else if (this.score <= 50000) {
          this.ctx.font = "20px ARCADECLASSIC";
          this.ctx.fillStyle = "white";
          this.ctx.fillText("RANK: FINISHED STRONG!", 500, 350);
        }

        this.ctx.font = "40px ARCADECLASSIC";
        this.ctx.fillStyle = "white";
        this.ctx.fillText("PRESS  ENTER  TO  RESTART", 200, 400);
        var snaake = new Audio('./src/audio/Gameover.mp3');
        if (this.sound) snaake.play();
      }
    }
  }, {
    key: "startAnimating",
    value: function startAnimating(fps) {
      this.fpsInterval = 1000 / fps;
      this.then = Date.now();
      this.startTime = this.then;
      this.animate();
    }
  }, {
    key: "animate",
    value: function animate() {
      requestAnimationFrame(this.animate.bind(this));
      this.now = Date.now();
      this.elapsed = this.now - this.then;

      if (this.elapsed > this.fpsInterval) {
        this.then = this.now - this.elapsed % this.fpsInterval;
        this.drawUI(this.health, this.score);

        if (!this.gameover) {
          this.ctx.clearRect(0, 0, this.width, this.height);
          this.drawBackground();
          this.player1.handlePlayerFrame();
          this.player1.movePlayer();

          for (var i = 0; i < this.enemies.length; i++) {
            this.drawEnemy(i);
          }

          this.score += 1;
          this.drawPlayer();
          this.generateEnemy();
          this.checkGameover(); // requestAnimationFrame(this.animate.bind(this));
        }
      }
    } // startAnimating(fps) {
    //     this.fpsInterval = 1000 / fps;
    //     this.then = Date.now();
    //     this.startTime = this.then;
    //     this.animate();
    // }
    // animate() {
    //     requestAnimationFrame(this.animate.bind(this));
    //     this.now = Date.now();
    //     this.elapsed = this.now - this.then;
    //     if (this.elapsed > this.fpsInterval) {
    //         this.then = this.now - (this.elapsed % this.fpsInterval);
    //         this.ctx.clearRect(0, 0, this.width, this.height)
    //         this.drawBackground();
    //         if (this.enemies[0]) {
    //             this.drawEnemy(0);
    //         }
    //         if (this.enemies[1]) {
    //             this.drawEnemy(1);
    //         }
    //         if (this.enemies[2]) {
    //             this.drawEnemy(2);
    //         }
    //         if (this.enemies[3]) {
    //             this.drawEnemy(3);
    //         }
    //         if (this.enemies[4]) {
    //             this.drawEnemy(4);
    //         }
    //         this.drawPlayer();
    //         this.player1.movePlayer();
    //         this.player1.handlePlayerFrame();
    //         this.generateEnemy();
    //         requestAnimationFrame(this.animate.bind(this));
    //     }
    // }

  }]);

  return Game;
}();



/***/ }),

/***/ "./src/scripts/game_view.js":
/*!**********************************!*\
  !*** ./src/scripts/game_view.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GameView; });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/scripts/game.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var GameView = /*#__PURE__*/function () {
  function GameView(canvas, canvasSplash, canvasUI) {
    _classCallCheck(this, GameView);

    this.game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, canvasSplash, canvasUI);
    this.ctxSplash = canvasSplash.getContext("2d");
    this.width = canvasSplash.width;
    this.height = canvasSplash.height;
    this.topLoop = -canvasSplash.height;
    this.bottomLoop = 0;
    this.background = new Image();
    this.background.src = "./src/images/background-1.png"; // this.sound = false;

    this.menuKeys = [];
    this.music;
    this.registerEvents();
  }

  _createClass(GameView, [{
    key: "registerEvents",
    value: function registerEvents() {
      var _this = this;

      window.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          _this.restart();
        }
      });
      var that = this;
      var checkbox = document.querySelector(".music-checkbox");
      checkbox.addEventListener("change", function (e) {
        if (e.target.checked) {
          that.game.sound = true;

          if (_this.music) {
            if (_this.music.paused) {
              _this.music.play();
            }
          }
        } else {
          that.game.sound = false;

          if (_this.music) {
            _this.music.pause();
          }
        }
      });
    }
  }, {
    key: "drawStaticBackground",
    value: function drawStaticBackground() {
      this.ctxSplash.drawImage(this.background, 0, 0, this.width, this.height, 0, this.bottomLoop, this.width, this.height);
    } // start() {
    //     this.music.loop = true;
    //     this.music.play();
    //     this.game.startAnimating(50);
    // }

  }, {
    key: "restart",
    value: function restart() {
      this.game.gameover = false;
      this.game.health = 1000;
      this.game.score = 0;
      this.game.enemies = [];
      this.game.player1.x = 329;
      this.game.player1.y = 344; // this.startAnimating(45);

      if (typeof this.music === "undefined") this.music = new Audio("./src/audio/bike_chase.mp3");

      if (this.game.sound && this.music.paused) {
        this.music.loop = true;
        this.music.play();
      }

      this.game.startAnimating(50);
    }
  }]);

  return GameView;
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

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.x = 329;
    this.y = 344;
    this.width = 187;
    this.height = 130;
    this.xHitBox = [this.x, this.x + this.width];
    this.yHitBox = [this.y, this.y + this.height];
    this.frameX = 0;
    this.frameY = 0;
    this.speed = 10;
    this.moving = true;
    this.leftAttack = false;
    this.rightAttack = false;
    this.lAttackXHitBox;
    this.lAttackYHitBox;
    this.rAttackXHitBox;
    this.rAttackYHitBox;
    this.playerSprite = new Image();
    this.playerSprite.src = "./src/images/bike1.png";
    this.keys = []; // this.attackReady

    this.registerEvents();
  }

  _createClass(Player, [{
    key: "registerEvents",
    value: function registerEvents() {
      var _this = this;

      window.addEventListener("keydown", function (e) {
        _this.keys[e.key] = true;
      });
      window.addEventListener("keyup", function (e) {
        delete _this.keys[e.key];

        if (e.key === "ArrowLeft") {
          _this.moving = false;
          _this.leftAttack = true;
        }

        if (e.key === "ArrowRight") {
          _this.moving = false;
          _this.rightAttack = true;
        }
      });
    }
  }, {
    key: "movePlayer",
    value: function movePlayer() {
      var _this2 = this;

      if (this.keys.w && this.y > 0) {
        // moving up
        this.y -= this.speed; // increase our playser's y pos by speed

        this.moving = true;
      }

      if (this.keys.s && this.y < 550) {
        // moving down
        this.y += this.speed;
        this.moving = true;
      }

      if (this.keys.a && this.x > 80) {
        this.x -= this.speed;
        this.moving = true;
      }

      if (this.keys.d && this.x < 580) {
        this.x += this.speed;
        this.moving = true;
      }

      if (this.leftAttack) {
        this.frameX = 0;
        this.frameY = 2;
        this.moving = false; // this.leftAttack = true;

        setTimeout(function () {
          return _this2.leftAttack = false;
        }, 400);
      }

      if (this.rightAttack) {
        this.frameX = 0;
        this.frameY = 1;
        this.moving = false; // this.rightAttack = true;

        setTimeout(function () {
          return _this2.rightAttack = false;
        }, 400);
      }
    }
  }, {
    key: "handlePlayerFrame",
    value: function handlePlayerFrame() {
      if (this.moving && (!this.leftAttack || !this.rightAttack)) {
        this.frameX++;
      }

      if (!this.rightAttack && this.frameY === 1) {
        this.frameY = 0;
        console.log("R ATTACK");
        this.moving = true;
      }

      if (!this.leftAttack && this.frameY === 2) {
        this.frameY = 0;
        console.log("L ATTACK");
        this.moving = true;
      } else if (this.frameX >= 2) {
        this.frameX = 0;
      }

      this.handlePlayerAttack();
    }
  }, {
    key: "handlePlayerAttack",
    value: function handlePlayerAttack() {
      if (this.leftAttack) {
        this.lAttackXHitBox = [this.x + 10, this.x + 60];
        this.lAttackYHitBox = [this.y, this.y + 79];
      }

      if (this.rightAttack) {
        this.rAttackXHitBox = [this.x + 150, this.x + 150 + 30];
        this.rAttackYHitBox = [this.y, this.y + 79];
      }

      if (!this.leftAttack) {
        this.lAttackXHitBox = [];
        this.lAttackYHitBox = [];
      }

      if (!this.rightAttack) {
        this.rAttackXHitBox = [];
        this.rAttackYHitBox = [];
      }
    }
  }]);

  return Player;
}();



/***/ }),

/***/ "./src/scripts/util.js":
/*!*****************************!*\
  !*** ./src/scripts/util.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var Util = {
  between: function between(x, min, max) {
    return x >= min && x <= max;
  },
  collision: function collision(unit1x, unit1y, unit1w, unit1h, unit2x, unit2y, unit2w, unit2h) {
    var unit1XHitBox = [unit1x, unit1x + unit1w];
    var unit1YHitBox = [unit1y, unit1y + unit1h];
    var unit2XHitBox = [unit2x, unit2x + unit2w];
    var unit2YHitBox = [unit2y, unit2y + unit2h];
    var xCollision = false;
    var yCollision = false;

    if (Util.between(unit1XHitBox[0], unit2XHitBox[0], unit2XHitBox[1]) || Util.between(unit1XHitBox[1], unit2XHitBox[0], unit2XHitBox[1])) {
      xCollision = true;
    }

    if (Util.between(unit1YHitBox[0], unit2YHitBox[0], unit2YHitBox[1]) || Util.between(unit1YHitBox[1], unit2YHitBox[0], unit2YHitBox[1])) {
      yCollision = true;
    }

    if (xCollision === true && yCollision === true) {
      return true;
    } else {
      return false;
    }
  },
  attacked: function attacked(attackTypeX, attackTypeY, unitx, unity, unitw, unith) {
    var unitXHitBox = [unitx, unitx + unitw];
    var unitYHitBox = [unity, unity + unith];
    var xAttacked;
    var yAttacked;

    if (Util.between(attackTypeX[0], unitXHitBox[0], unitXHitBox[1]) || Util.between(attackTypeX[1], unitXHitBox[0], unitXHitBox[1])) {
      xAttacked = true;
    }

    if (Util.between(attackTypeY[0], unitYHitBox[0], unitYHitBox[1]) || Util.between(attackTypeY[1], unitYHitBox[0], unitYHitBox[1])) {
      yAttacked = true;
    }

    if (xAttacked === true && yAttacked === true) {
      console.log("SLICE!");
      return true;
    } else {
      return false;
    }
  }
};
module.exports = Util;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VuZW15LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhc1NwbGFzaCIsImdldEVsZW1lbnRCeUlkIiwid2lkdGgiLCJoZWlnaHQiLCJjYW52YXMiLCJjYW52YXNVSSIsIm5ld0dhbWVWaWV3IiwiR2FtZVZpZXciLCJyZWdpc3RlckV2ZW50cyIsIkVuZW15IiwiY3R4IiwiZW5lbXlUeXBlIiwiaGl0Ym94V2lkdGgiLCJoaXRib3hIZWlnaHQiLCJ0eXBlIiwiZW5lbXlTcHJpdGUiLCJJbWFnZSIsInNyYyIsIngiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ5Iiwic3BlZWQiLCJ0dXJuaW5nIiwiZGlyZWN0aW9uIiwiZnJhbWVZIiwieEhpdEJveCIsInlIaXRCb3giLCJmcmFtZVgiLCJkZWFkIiwiVXRpbCIsInJlcXVpcmUiLCJHYW1lIiwiaGVhbHRoIiwiZ2FtZW92ZXIiLCJjdHhVSSIsImdldENvbnRleHQiLCJjdHhTcGxhc2giLCJzb3VuZCIsInBsYXllcjEiLCJQbGF5ZXIiLCJrZXlzIiwidG9wTG9vcCIsImJvdHRvbUxvb3AiLCJiYWNrZ3JvdW5kIiwiZW5lbWllcyIsImZwc0ludGVydmFsIiwic3RhcnRUaW1lIiwibm93IiwidGhlbiIsImVsYXBzZWQiLCJzbGljZSIsIkF1ZGlvIiwib29mIiwic2NvcmUiLCJkcmF3SW1hZ2UiLCJwbGF5ZXJTcHJpdGUiLCJjbGVhclJlY3QiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImJlZ2luUGF0aCIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwicmVjdCIsInN0cm9rZSIsImZvbnQiLCJmaWxsVGV4dCIsInRleHRBbGlnbiIsInJhbmRvbU51bSIsImxlbmd0aCIsInJhbmRvbUVuZW15TnVtIiwicHVzaCIsImVuZW15TnVtIiwiY3VycmVudEVuZW15IiwiY29sbGlzaW9uIiwicGxheSIsImRyYXdVSSIsImNvbnNvbGUiLCJsb2ciLCJsZWZ0QXR0YWNrIiwiYXR0YWNrZWQiLCJsQXR0YWNrWEhpdEJveCIsImxBdHRhY2tZSGl0Qm94IiwicmlnaHRBdHRhY2siLCJyQXR0YWNrWEhpdEJveCIsInJBdHRhY2tZSGl0Qm94Iiwic3BsaWNlIiwiYmV0d2VlbiIsInJvdW5kIiwic25hYWtlIiwiZnBzIiwiRGF0ZSIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIiwiZHJhd0JhY2tncm91bmQiLCJoYW5kbGVQbGF5ZXJGcmFtZSIsIm1vdmVQbGF5ZXIiLCJpIiwiZHJhd0VuZW15IiwiZHJhd1BsYXllciIsImdlbmVyYXRlRW5lbXkiLCJjaGVja0dhbWVvdmVyIiwiZ2FtZSIsIm1lbnVLZXlzIiwibXVzaWMiLCJ3aW5kb3ciLCJlIiwia2V5IiwicmVzdGFydCIsInRoYXQiLCJjaGVja2JveCIsInF1ZXJ5U2VsZWN0b3IiLCJ0YXJnZXQiLCJjaGVja2VkIiwicGF1c2VkIiwicGF1c2UiLCJsb29wIiwic3RhcnRBbmltYXRpbmciLCJtb3ZpbmciLCJ3IiwicyIsImEiLCJkIiwic2V0VGltZW91dCIsImhhbmRsZVBsYXllckF0dGFjayIsIm1pbiIsIm1heCIsInVuaXQxeCIsInVuaXQxeSIsInVuaXQxdyIsInVuaXQxaCIsInVuaXQyeCIsInVuaXQyeSIsInVuaXQydyIsInVuaXQyaCIsInVuaXQxWEhpdEJveCIsInVuaXQxWUhpdEJveCIsInVuaXQyWEhpdEJveCIsInVuaXQyWUhpdEJveCIsInhDb2xsaXNpb24iLCJ5Q29sbGlzaW9uIiwiYXR0YWNrVHlwZVgiLCJhdHRhY2tUeXBlWSIsInVuaXR4IiwidW5pdHkiLCJ1bml0dyIsInVuaXRoIiwidW5pdFhIaXRCb3giLCJ1bml0WUhpdEJveCIsInhBdHRhY2tlZCIsInlBdHRhY2tlZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBQ3RELE1BQU1DLFlBQVksR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLGVBQXhCLENBQXJCO0FBQ0FELGNBQVksQ0FBQ0UsS0FBYixHQUFxQixHQUFyQjtBQUNBRixjQUFZLENBQUNHLE1BQWIsR0FBc0IsR0FBdEI7QUFDQSxNQUFNQyxNQUFNLEdBQUdOLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixhQUF4QixDQUFmO0FBQ0FHLFFBQU0sQ0FBQ0Ys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QXhCLEVBQTZCTSxXQUFXLENBQUMsQ0FBRCxDQUF4QyxFQUE2Q0EsV0FBVyxDQUFDLENBQUQsQ0FBeEQsS0FDQXZILElBQUksQ0FBQ3lELE9BQUwsQ0FBYXdELFdBQVcsQ0FBQyxDQUFELENBQXhCLEVBQTZCTSxXQUFXLENBQUMsQ0FBRCxDQUF4QyxFQUE2Q0EsV0FBVyxDQUFDLENBQUQsQ0FBeEQsQ0FESixFQUNrRTtBQUM5REUsZUFBUyxHQUFHLElBQVo7QUFFSDs7QUFDRCxRQUFLRCxTQUFTLEtBQUssSUFBZCxJQUFzQkMsU0FBUyxLQUFLLElBQXpDLEVBQWdEO0FBQzVDMUUsYUFBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNBLGFBQU8sSUFBUDtBQUNILEtBSEQsTUFJSztBQUNELGFBQU8sS0FBUDtBQUNIO0FBQ0o7QUFqRFEsQ0FBYjtBQW1EQTBFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjNILElBQWpCLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnXG5pbXBvcnQgR2FtZVZpZXcgZnJvbSAnLi9zY3JpcHRzL2dhbWVfdmlldyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYW52YXNTcGxhc2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhcy1zcGxhc2hcIik7XG4gICAgY2FudmFzU3BsYXNoLndpZHRoID0gODQwO1xuICAgIGNhbnZhc1NwbGFzaC5oZWlnaHQgPSA2NTA7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXMtZ2FtZVwiKTtcbiAgICBjYW52YXMud2lkdGggPSA4NDA7XG4gICAgY2FudmFzLmhlaWdodCA9IDY1MDtcbiAgICBjb25zdCBjYW52YXNVSSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzLXVpXCIpO1xuICAgIGNhbnZhc1VJLndpZHRoID0gODQwO1xuICAgIGNhbnZhc1VJLmhlaWdodCA9IDY1MDtcbiAgICAvLyBjb25zdCBnYW1lMSA9IG5ldyBHYW1lKGNhbnZhcylcbiAgICBjb25zdCBuZXdHYW1lVmlldyA9IG5ldyBHYW1lVmlldyhjYW52YXMsIGNhbnZhc1NwbGFzaCwgY2FudmFzVUkpLnJlZ2lzdGVyRXZlbnRzKClcbiAgICAvLyBjb25zdCBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXVzaWNcIik7XG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiBhdWRpby5wbGF5KCksIDMwMDApO1xufSlcblxuXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVteSB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBlbmVteVR5cGUpIHtcbiAgICAgICAgLy8gdGhpcy54ID0gMDsgICAgICAgLy8gVE9ETyBXaWxsIGNoYW5nZSBiYXNlZCBvbiB0aGUgYXJnIHBhc3NlZCBpbnRvIGNvbnN0cnVjdG9yXG4gICAgICAgIC8vIHRoaXMueSA9IDA7XG4gICAgICAgIHRoaXMud2lkdGggPSAyNDM7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gNDgwO1xuICAgICAgICB0aGlzLmhpdGJveFdpZHRoID0gOTA7XG4gICAgICAgIHRoaXMuaGl0Ym94SGVpZ2h0ID0gMTUwO1xuICAgICAgICB0aGlzLnR5cGUgPSBlbmVteVR5cGUgLy8gVE9ETyBXaWxsIGNoYW5nZSBiYXNlZCBvbiBhIHRoZSBhcmd1bWVudCBwYXNzZWQgaW50byBjb25zdHJ1Y3RvclxuICAgICAgICB0aGlzLmVuZW15U3ByaXRlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwic3R1cGlkXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVteVNwcml0ZS5zcmMgPSBcIi4vc3JjL2ltYWdlcy9jYXIxLnBuZ1wiXG4gICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDU1MCAtIDEyMCkgKyAxMjApXG4gICAgICAgICAgICAgICAgdGhpcy55ID0gLTEwMDtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gMztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjcmF6eVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlTcHJpdGUuc3JjID0gXCIuL3NyYy9pbWFnZXMvY2FyMi5wbmdcIlxuICAgICAgICAgICAgICAgIHRoaXMueCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg1NTAgLSAxMjApICsgMTIwKVxuICAgICAgICAgICAgICAgIHRoaXMueSA9IDY1MDtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5pbmcgPSA0O1xuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgPSA2O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInR1cnRsZVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlTcHJpdGUuc3JjID0gXCIuL3NyYy9pbWFnZXMvdHVydGxlLnBuZ1wiXG4gICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDU1MCAtIDEyMCkgKyAxMjApXG4gICAgICAgICAgICAgICAgdGhpcy55ID0gNjUwO1xuICAgICAgICAgICAgICAgIHRoaXMudHVybmluZyA9IDQ7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDY7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDUwO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gNTM7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lWSA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgdGhpcy54SGl0Qm94ID0gW3RoaXMueCwgdGhpcy54ICsgdGhpcy5oaXRib3hXaWR0aF07XG4gICAgICAgIHRoaXMueUhpdEJveCA9IFt0aGlzLnksIHRoaXMueSArIHRoaXMuaGl0Ym94SGVpZ2h0XTtcbiAgICAgICAgdGhpcy5mcmFtZVggPSAwXG4gICAgICAgIHRoaXMuZGVhZCA9IGZhbHNlO1xuICAgIH1cblxufSIsImltcG9ydCBFbmVteSBmcm9tIFwiLi9lbmVteVwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmNvbnN0IFV0aWwgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjYW52YXNTcGxhc2gsIGNhbnZhc1VJKSB7XG4gICAgICAgIHRoaXMuaGVhbHRoID0gMTAwMDtcbiAgICAgICAgdGhpcy5nYW1lb3ZlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmN0eFVJID0gY2FudmFzVUkuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMuY3R4U3BsYXNoID0gY2FudmFzU3BsYXNoLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5zb3VuZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBsYXllcjEgPSBuZXcgUGxheWVyKCk7XG4gICAgICAgIHRoaXMud2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgICAgICAgdGhpcy5rZXlzID0gW107XG4gICAgICAgIHRoaXMudG9wTG9vcCA9IC1jYW52YXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmJvdHRvbUxvb3AgPSAwO1xuICAgICAgICB0aGlzLmJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKVxuICAgICAgICB0aGlzLmJhY2tncm91bmQuc3JjID0gXCIuL3NyYy9pbWFnZXMvYmFja2dyb3VuZC0xLnBuZ1wiO1xuICAgICAgICB0aGlzLmVuZW1pZXMgPSBbXTsgLy8gY29udGFpbnMgZW5lbWllcyBjdXJyZW50bHkgb24gc2NyZWVuLCBzaG93biBhcyBlbmVteS50eXBlXG4gICAgICAgIHRoaXMuZnBzSW50ZXJ2YWw7XG4gICAgICAgIHRoaXMuc3RhcnRUaW1lO1xuICAgICAgICB0aGlzLm5vdztcbiAgICAgICAgdGhpcy50aGVuO1xuICAgICAgICB0aGlzLmVsYXBzZWQ7XG4gICAgICAgIHRoaXMuc2xpY2UgPSBuZXcgQXVkaW8oJy4vc3JjL2F1ZGlvL3NsaWNlLm1wMycpXG4gICAgICAgIHRoaXMub29mID0gbmV3IEF1ZGlvKCcuL3NyYy9hdWRpby9vb2YubXAzJylcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIC8vIHRoaXMuZHJhd0JhY2tncm91bmQoKTtcbiAgICAgICAgLy8gdGhpcy5kcmF3UGxheWVyKCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGRyYXdCYWNrZ3JvdW5kKCkge1xuICAgICAgICAvL2JvdHRvbSBoYWxmIG9mIHRoZSBiYWNrZ3JvdW5kXG4gICAgICAgIHRoaXMuY3R4U3BsYXNoLmRyYXdJbWFnZShcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZCwgMCwgMCxcbiAgICAgICAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LFxuICAgICAgICAgICAgMCwgdGhpcy5ib3R0b21Mb29wLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodFxuICAgICAgICApXG4gICAgICAgIHRoaXMuYm90dG9tTG9vcCArPSAxMDtcbiAgICAgICAgaWYgKHRoaXMuYm90dG9tTG9vcCA9PT0gdGhpcy5oZWlnaHQpIHRoaXMuYm90dG9tTG9vcCA9IC10aGlzLmhlaWdodDtcblxuICAgICAgICAvL3RvcCBoYWxmIG9mIHRoZSBiYWNrZ3JvdW5kXG4gICAgICAgIHRoaXMuY3R4U3BsYXNoLmRyYXdJbWFnZShcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZCwgMCwgMCxcbiAgICAgICAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LFxuICAgICAgICAgICAgMCwgdGhpcy50b3BMb29wLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodFxuICAgICAgICApXG4gICAgICAgIHRoaXMudG9wTG9vcCArPSAxMDtcbiAgICAgICAgaWYgKHRoaXMudG9wTG9vcCA9PT0gdGhpcy5oZWlnaHQpIHRoaXMudG9wTG9vcCA9IC10aGlzLmhlaWdodDtcbiAgICB9XG5cbiAgICBkcmF3UGxheWVyKCkge1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICB0aGlzLnBsYXllcjEucGxheWVyU3ByaXRlLCB0aGlzLnBsYXllcjEud2lkdGggKiB0aGlzLnBsYXllcjEuZnJhbWVYLCB0aGlzLnBsYXllcjEuaGVpZ2h0ICogdGhpcy5wbGF5ZXIxLmZyYW1lWSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aGVyZSB3ZSBjcm9wIG91dCB0aGUgaW1hZ2UgZm9yIHNwcml0ZVxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIxLndpZHRoLCB0aGlzLnBsYXllcjEuaGVpZ2h0LCB0aGlzLnBsYXllcjEueCwgdGhpcy5wbGF5ZXIxLnksICAgIC8vIHdoZXJlIHRoZSBpbWFnZSB3aWxsIGJlIGFuaW1hdGVkIG9uIGNhbnZhc1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIxLndpZHRoLCB0aGlzLnBsYXllcjEuaGVpZ2h0XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZHJhd1VJKGhlYWx0aCwgc2NvcmUpIHtcbiAgICAgICAgLy8gaW5pdGlhbCBoZWFsdGhcbiAgICAgICAgdGhpcy5jdHhVSS5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG5cbiAgICAgICAgdGhpcy5jdHhVSS5maWxsU3R5bGUgPSBcInJlZFwiXG4gICAgICAgIHRoaXMuY3R4VUkuZmlsbFJlY3QoMTAsIDMwLCAyNTAsIDEwKVxuXG4gICAgICAgIHRoaXMuY3R4VUkuYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4VUkubGluZVdpZHRoID0gXCIzXCI7XG4gICAgICAgIHRoaXMuY3R4VUkuc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIHRoaXMuY3R4VUkucmVjdCg5LCAyOSwgMjUyLCAxMilcbiAgICAgICAgdGhpcy5jdHhVSS5zdHJva2UoKTtcblxuICAgICAgICAvLyB5b3VyIGFjdHVhbCBoZWFsdGhcbiAgICAgICAgaWYgKGhlYWx0aCA8ICg3MDApKSB7XG4gICAgICAgICAgICB0aGlzLmN0eFVJLmZpbGxTdHlsZSA9IFwieWVsbG93XCJcbiAgICAgICAgICAgIHRoaXMuY3R4VUkuZmlsbFJlY3QoMTAsIDMwLCBoZWFsdGggLyA0LCAxMClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3R4VUkuZmlsbFN0eWxlID0gXCJncmVlblwiXG4gICAgICAgICAgICB0aGlzLmN0eFVJLmZpbGxSZWN0KDEwLCAzMCwgaGVhbHRoIC8gNCwgMTApXG4gICAgICAgIH1cblxuICAgICAgICAvLyB0ZXh0XG4gICAgICAgIHRoaXMuY3R4VUkuZm9udCA9IFwiNDBweCBBUkNBREVDTEFTU0lDXCJcbiAgICAgICAgdGhpcy5jdHhVSS5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIHRoaXMuY3R4VUkuZmlsbFRleHQoXCJIUFwiLCAxMCwgMjcpXG5cbiAgICAgICAgaWYgKGhlYWx0aCA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmN0eFVJLmZvbnQgPSBcIjQwcHggQVJDQURFQ0xBU1NJQ1wiXG4gICAgICAgICAgICB0aGlzLmN0eFVJLmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgICAgICB0aGlzLmN0eFVJLmZpbGxUZXh0KGAwIC8gMTAwMGAsIDgwLCAyNylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChoZWFsdGggPCAxMDApIHtcbiAgICAgICAgICAgIHRoaXMuY3R4VUkuZm9udCA9IFwiNDBweCBBUkNBREVDTEFTU0lDXCJcbiAgICAgICAgICAgIHRoaXMuY3R4VUkuZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4VUkuZmlsbFRleHQoYCR7aGVhbHRofS8gMTAwMGAsIDgwLCAyNylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChoZWFsdGggPCA3MDApIHtcbiAgICAgICAgICAgIHRoaXMuY3R4VUkuZm9udCA9IFwiNDBweCBBUkNBREVDTEFTU0lDXCJcbiAgICAgICAgICAgIHRoaXMuY3R4VUkuZmlsbFN0eWxlID0gXCJ5ZWxsb3dcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4VUkuZmlsbFRleHQoYCR7aGVhbHRofS8gMTAwMGAsIDgwLCAyNylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3R4VUkuZm9udCA9IFwiNDBweCBBUkNBREVDTEFTU0lDXCJcbiAgICAgICAgICAgIHRoaXMuY3R4VUkuZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgdGhpcy5jdHhVSS5maWxsVGV4dChgJHtoZWFsdGh9LyAxMDAwYCwgODAsIDI3KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jdHhVSS5mb250ID0gXCIyNXB4IEFSQ0FERUNMQVNTSUNcIlxuICAgICAgICB0aGlzLmN0eFVJLmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgdGhpcy5jdHhVSS50ZXh0QWxpZ24gPSBcInN0YXJ0XCI7XG4gICAgICAgIHRoaXMuY3R4VUkuZmlsbFRleHQoYCR7c2NvcmV9YCwgNzUwLCAyMClcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUVuZW15KCkge1xuICAgICAgICAvLyBsb2dpYyBmb3Igd2hlbiB0byBnZW5lcmF0ZSBhbiBlbmVteS4gIHdpbGwgcHVzaCBpbnRvIHRoaXMuZW5lbWllc1xuICAgICAgICBjb25zdCByYW5kb21OdW0gPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogNzApKTtcbiAgICAgICAgaWYgKHRoaXMuZW5lbWllcy5sZW5ndGggPCA1ICYmIHJhbmRvbU51bSA9PT0gNSkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCByYW5kb21FbmVteU51bSA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAxMDApKVxuICAgICAgICAgICAgbGV0IGVuZW15VHlwZVxuICAgICAgICAgICAgaWYgKHJhbmRvbUVuZW15TnVtID4gODApIHtcbiAgICAgICAgICAgICAgICBlbmVteVR5cGUgPSBcInR1cnRsZVwiO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGlmIChlbmVteVR5cGUgIT09IFwidHVydGxlXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAocmFuZG9tRW5lbXlOdW0gPD0gNTApIHtcbiAgICAgICAgICAgICAgICAgICAgZW5lbXlUeXBlID0gXCJzdHVwaWRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZW5lbXlUeXBlID0gXCJjcmF6eVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbmVteVR5cGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW1pZXMucHVzaChuZXcgRW5lbXkodGhpcy5jdHgsIGVuZW15VHlwZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd0VuZW15KGVuZW15TnVtKSB7ICAgICAgICAgICAvL1RPRE86IFJFRkFDVE9SIFRPIEEgU1dJVENIIENBU0VcbiAgICAgICAgbGV0IGN1cnJlbnRFbmVteSA9IHRoaXMuZW5lbWllc1tlbmVteU51bV07XG4gICAgICAgIC8vIEFOSU1BVElORyBUSEUgU1RVUElEIEVORU1ZXG4gICAgICAgIGlmIChjdXJyZW50RW5lbXkudHlwZSA9PT0gXCJzdHVwaWRcIikge1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS5lbmVteVNwcml0ZSwgMCwgMCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkud2lkdGgsIGN1cnJlbnRFbmVteS5oZWlnaHQsIGN1cnJlbnRFbmVteS54ICwgY3VycmVudEVuZW15LnksXG4gICAgICAgICAgICAgICAgOTAsIDE1MFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGN1cnJlbnRFbmVteS55ICs9IGN1cnJlbnRFbmVteS5zcGVlZDtcbiAgICAgICAgICAgIGlmIChVdGlsLmNvbGxpc2lvbih0aGlzLnBsYXllcjEueCArIDc0LCB0aGlzLnBsYXllcjEueSArIDE2LCAzOCwgODAsXG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LngsIGN1cnJlbnRFbmVteS55LCBjdXJyZW50RW5lbXkuaGl0Ym94V2lkdGgsIGN1cnJlbnRFbmVteS5oaXRib3hIZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhbHRoIC09IDE7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNvdW5kKSB0aGlzLm9vZi5wbGF5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3VUkodGhpcy5oZWFsdGgsIHRoaXMuc2NvcmUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmhlYWx0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyMS5sZWZ0QXR0YWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKFV0aWwuYXR0YWNrZWQodGhpcy5wbGF5ZXIxLmxBdHRhY2tYSGl0Qm94LCB0aGlzLnBsYXllcjEubEF0dGFja1lIaXRCb3gsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSwgY3VycmVudEVuZW15LmhpdGJveFdpZHRoLCBjdXJyZW50RW5lbXkuaGl0Ym94SGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zb3VuZCkgdGhpcy5zbGljZS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkudHlwZSA9IFwiZGFtYWdlZC1zdHVwaWRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIxLnJpZ2h0QXR0YWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKFV0aWwuYXR0YWNrZWQodGhpcy5wbGF5ZXIxLnJBdHRhY2tYSGl0Qm94LCB0aGlzLnBsYXllcjEuckF0dGFja1lIaXRCb3gsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSwgY3VycmVudEVuZW15LmhpdGJveFdpZHRoLCBjdXJyZW50RW5lbXkuaGl0Ym94SGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zb3VuZCkgdGhpcy5zbGljZS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkudHlwZSA9IFwiZGFtYWdlZC1zdHVwaWRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY3VycmVudEVuZW15LnkgPiB0aGlzLmhlaWdodCAmJiBjdXJyZW50RW5lbXkudHlwZSA9PT1cInN0dXBpZFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnNwbGljZShlbmVteU51bSwgMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vQU5JTUFUSU5HIFRIRSBDUkFaWSBFTkVNWVxuICAgICAgICBpZiAoY3VycmVudEVuZW15LnR5cGUgPT09IFwiY3JhenlcIikge1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS5lbmVteVNwcml0ZSwgMCwgMCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkud2lkdGgsIGN1cnJlbnRFbmVteS5oZWlnaHQsIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSxcbiAgICAgICAgICAgICAgICA5MCwgMTUwXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBlbmVteSBpcyBvbiB0aGUgcGxheWVyJ3MgbGVmdCBzaWRlXG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIxLnggKyAyMCAgPiBjdXJyZW50RW5lbXkueCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS54ICs9IGN1cnJlbnRFbmVteS50dXJuaW5nO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS55IC09IGN1cnJlbnRFbmVteS5zcGVlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmIHRoZSBlbmVteSBpcyBhbGlnbmVkIHdpdGggdGhlIHBsYXllclxuICAgICAgICAgICAgZWxzZSBpZiAoVXRpbC5iZXR3ZWVuKHRoaXMucGxheWVyMS54ICsgMjAsIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueCArIDIwKSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS55IC09IDEyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9pZiB0aGUgZW5lbXkgaXMgb24gdGhlIHBsYXllcidzIHJpZ2h0IHNpZGVcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS54IC09IGN1cnJlbnRFbmVteS50dXJuaW5nO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS55IC09IGN1cnJlbnRFbmVteS5zcGVlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChVdGlsLmNvbGxpc2lvbih0aGlzLnBsYXllcjEueCArIDc0LCB0aGlzLnBsYXllcjEueSArIDE2LCAzOCwgODAsXG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LngsIGN1cnJlbnRFbmVteS55LCBjdXJyZW50RW5lbXkuaGl0Ym94V2lkdGgsIGN1cnJlbnRFbmVteS5oaXRib3hIZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhbHRoIC09IDU7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc291bmQpIHRoaXMub29mLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3VUkodGhpcy5oZWFsdGgsdGhpcy5zY29yZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyMS5sZWZ0QXR0YWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKFV0aWwuYXR0YWNrZWQodGhpcy5wbGF5ZXIxLmxBdHRhY2tYSGl0Qm94LCB0aGlzLnBsYXllcjEubEF0dGFja1lIaXRCb3gsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSwgY3VycmVudEVuZW15LmhpdGJveFdpZHRoLCBjdXJyZW50RW5lbXkuaGl0Ym94SGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zb3VuZCkgdGhpcy5zbGljZS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkudHlwZSA9IFwiZGFtYWdlZC1jcmF6eVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyMS5yaWdodEF0dGFjaykge1xuICAgICAgICAgICAgICAgIGlmIChVdGlsLmF0dGFja2VkKHRoaXMucGxheWVyMS5yQXR0YWNrWEhpdEJveCwgdGhpcy5wbGF5ZXIxLnJBdHRhY2tZSGl0Qm94LFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnksIGN1cnJlbnRFbmVteS5oaXRib3hXaWR0aCwgY3VycmVudEVuZW15LmhpdGJveEhlaWdodCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc291bmQpIHRoaXMuc2xpY2UucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LnR5cGUgPSBcImRhbWFnZWQtY3JhenlcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY3VycmVudEVuZW15LnkgPCAtMTUwICYmIGN1cnJlbnRFbmVteS50eXBlID09PSBcImNyYXp5XCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW1pZXMuc3BsaWNlKGVuZW15TnVtLCAxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTUlDSEFFTEFOR0VMTyEhIVxuICAgICAgICBpZiAoY3VycmVudEVuZW15LnR5cGUgPT09IFwidHVydGxlXCIpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoY3VycmVudEVuZW15LmRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkuZW5lbXlTcHJpdGUsIGN1cnJlbnRFbmVteS53aWR0aCAqIGN1cnJlbnRFbmVteS5mcmFtZVgsIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkud2lkdGgsIGN1cnJlbnRFbmVteS5oZWlnaHQsIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDc1LCA3NVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueCArPSAxMjtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LnkgLT0gNDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LmVuZW15U3ByaXRlLCBjdXJyZW50RW5lbXkud2lkdGggKiBjdXJyZW50RW5lbXkuZnJhbWVYLCAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LndpZHRoLCBjdXJyZW50RW5lbXkuaGVpZ2h0LCBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnksXG4gICAgICAgICAgICAgICAgICAgICAgICA3NSwgNzVcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LnggLT0gMTI7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS55IC09IDQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJkb3duXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS5lbmVteVNwcml0ZSwgNDgsIDU1LFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LndpZHRoLCBjdXJyZW50RW5lbXkuaGVpZ2h0LCBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnksXG4gICAgICAgICAgICAgICAgICAgICAgICA3NSwgMTU0XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS55ICs9IDY7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50RW5lbXkuZnJhbWVYIDwgMSkgY3VycmVudEVuZW15LmZyYW1lWCArPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiAoY3VycmVudEVuZW15LmRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyBpZiAoY3VycmVudEVuZW15LmRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBpZiAoY3VycmVudEVuZW15LnggPD0gODApIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkuZnJhbWVYID0gMDtcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkuZGlyZWN0aW9uID0gXCJyaWdodFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGN1cnJlbnRFbmVteS54ID49IDU4MCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS5mcmFtZVggPSAxO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS5kaXJlY3Rpb24gPSBcImxlZnRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjdXJyZW50RW5lbXkueSA8PSA1MCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS5kaXJlY3Rpb24gPSBcImRvd25cIlxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS53aWR0aCA9IDQxO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS5oZWlnaHQgPSA4NjtcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkuZnJhbWVYID0gMDtcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkuZnJhbWVZID0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFV0aWwuY29sbGlzaW9uKHRoaXMucGxheWVyMS54ICsgNzQsIHRoaXMucGxheWVyMS55ICsgMTYsIDM4LCA4MCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnksIDUwLCA1MykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWx0aCAtPSAxMDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zb3VuZCkgdGhpcy5vb2YucGxheSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhd1VJKHRoaXMuaGVhbHRoLCB0aGlzLnNjb3JlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGN1cnJlbnRFbmVteS55ID4gNjUwKSB7IC8vIDwtLVRISVMgU0hPVUxEIFdPUktcbiAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnNwbGljZShlbmVteU51bSwgMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERBTUFHRUQgRU5FTUlFU1xuICAgICBcbiAgICAgICAgaWYgKGN1cnJlbnRFbmVteS50eXBlID09PSBcImRhbWFnZWQtc3R1cGlkXCIpIHtcblxuICAgICAgICAgICAgY3VycmVudEVuZW15LmVuZW15U3ByaXRlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBjdXJyZW50RW5lbXkuZW5lbXlTcHJpdGUuc3JjID0gXCIuL3NyYy9pbWFnZXMvY2FyMS1keWluZy5wbmdcIlxuICBcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkuZW5lbXlTcHJpdGUsIE1hdGgucm91bmQoY3VycmVudEVuZW15LmZyYW1lWCkgKiBjdXJyZW50RW5lbXkud2lkdGgsIDAsXG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LndpZHRoLCBjdXJyZW50RW5lbXkuaGVpZ2h0LCBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnksICAgIC8vVE9ETyBmcmFtZXNzc1xuICAgICAgICAgICAgICAgIDkwLCAxNTBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjdXJyZW50RW5lbXkueSArPSA0O1xuICAgICAgICAgICAgY3VycmVudEVuZW15LmZyYW1lWCArPSAwLjFcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGN1cnJlbnRFbmVteS5mcmFtZVggPiA0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnNwbGljZShlbmVteU51bSwgMSlcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3JlICs9IDEwMFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRFbmVteS50eXBlID09PSBcImRhbWFnZWQtY3JhenlcIikge1xuXG4gICAgICAgICAgICBjdXJyZW50RW5lbXkuZW5lbXlTcHJpdGUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGN1cnJlbnRFbmVteS5lbmVteVNwcml0ZS5zcmMgPSBcIi4vc3JjL2ltYWdlcy9jYXIyLWR5aW5nLnBuZ1wiXG5cbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkuZW5lbXlTcHJpdGUsIE1hdGgucm91bmQoY3VycmVudEVuZW15LmZyYW1lWCkgKiBjdXJyZW50RW5lbXkud2lkdGgsIDAsXG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LndpZHRoLCBjdXJyZW50RW5lbXkuaGVpZ2h0LCBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnksICAgIC8vVE9ETyBmcmFtZXNzc1xuICAgICAgICAgICAgICAgIDkwLCAxNTBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjdXJyZW50RW5lbXkueSArPSA0O1xuICAgICAgICAgICAgY3VycmVudEVuZW15LmZyYW1lWCArPSAwLjFcbiAgICAgICAgICAgIGlmIChjdXJyZW50RW5lbXkuZnJhbWVYID4gNCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5lbWllcy5zcGxpY2UoZW5lbXlOdW0sIDEpXG4gICAgICAgICAgICAgICAgdGhpcy5zY29yZSArPSA1MDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGVja0dhbWVvdmVyKCkge1xuICAgICAgICBpZiAodGhpcy5oZWFsdGggPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lb3ZlciA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjgwcHggQVJDQURFQ0xBU1NJQ1wiXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkdBTUUgT1ZFUlwiLCAyNDUsIDMwMClcblxuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjBweCBBUkNBREVDTEFTU0lDXCJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGBTQ09SRTogJHt0aGlzLnNjb3JlfWAgLCAyNDUsIDM1MClcblxuICAgICAgICAgICAgaWYgKHRoaXMuc2NvcmUgPD0gMTAwMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyMHB4IEFSQ0FERUNMQVNTSUNcIlxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChgUkFOSzogTk9PQmAsIDUwMCwgMzUwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zY29yZSA8PSAyMDAwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjIwcHggQVJDQURFQ0xBU1NJQ1wiXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGBSQU5LOiBUV0lOS0xFICBUT0VTYCwgNTAwLCAzNTApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNjb3JlIDw9IDUwMDAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjBweCBBUkNBREVDTEFTU0lDXCJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoYFJBTks6IEZJTklTSEVEIFNUUk9ORyFgLCA1MDAsIDM1MClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiNDBweCBBUkNBREVDTEFTU0lDXCJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUFJFU1MgIEVOVEVSICBUTyAgUkVTVEFSVFwiLCAyMDAsIDQwMClcblxuICAgICAgICAgICAgY29uc3Qgc25hYWtlID0gbmV3IEF1ZGlvKCcuL3NyYy9hdWRpby9HYW1lb3Zlci5tcDMnKVxuICAgICAgICAgICAgaWYgKHRoaXMuc291bmQpIHNuYWFrZS5wbGF5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydEFuaW1hdGluZyhmcHMpIHtcbiAgICAgICAgdGhpcy5mcHNJbnRlcnZhbCA9IDEwMDAgLyBmcHM7XG4gICAgICAgIHRoaXMudGhlbiA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gdGhpcy50aGVuO1xuICAgICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICB9XG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLm5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMubm93IC0gdGhpcy50aGVuO1xuICAgICAgICBpZiAodGhpcy5lbGFwc2VkID4gdGhpcy5mcHNJbnRlcnZhbCkge1xuICAgICAgICAgICAgdGhpcy50aGVuID0gdGhpcy5ub3cgLSAodGhpcy5lbGFwc2VkICUgdGhpcy5mcHNJbnRlcnZhbCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuZHJhd1VJKHRoaXMuaGVhbHRoLCB0aGlzLnNjb3JlKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIXRoaXMuZ2FtZW92ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZCgpO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyMS5oYW5kbGVQbGF5ZXJGcmFtZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyMS5tb3ZlUGxheWVyKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVuZW1pZXMubGVuZ3RoOyBpKysgKSB0aGlzLmRyYXdFbmVteShpKVxuICAgICAgICAgICAgICAgIHRoaXMuc2NvcmUgKz0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdQbGF5ZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlRW5lbXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrR2FtZW92ZXIoKTtcbiAgICAgICAgICAgICAgICAvLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gc3RhcnRBbmltYXRpbmcoZnBzKSB7XG4gICAgLy8gICAgIHRoaXMuZnBzSW50ZXJ2YWwgPSAxMDAwIC8gZnBzO1xuICAgIC8vICAgICB0aGlzLnRoZW4gPSBEYXRlLm5vdygpO1xuICAgIC8vICAgICB0aGlzLnN0YXJ0VGltZSA9IHRoaXMudGhlbjtcbiAgICAvLyAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgLy8gfVxuICAgIC8vIGFuaW1hdGUoKSB7XG4gICAgLy8gICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgLy8gICAgIHRoaXMubm93ID0gRGF0ZS5ub3coKTtcbiAgICAvLyAgICAgdGhpcy5lbGFwc2VkID0gdGhpcy5ub3cgLSB0aGlzLnRoZW47XG4gICAgLy8gICAgIGlmICh0aGlzLmVsYXBzZWQgPiB0aGlzLmZwc0ludGVydmFsKSB7XG4gICAgLy8gICAgICAgICB0aGlzLnRoZW4gPSB0aGlzLm5vdyAtICh0aGlzLmVsYXBzZWQgJSB0aGlzLmZwc0ludGVydmFsKTtcbiAgICAvLyAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICAvLyAgICAgICAgIHRoaXMuZHJhd0JhY2tncm91bmQoKTtcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLmVuZW1pZXNbMF0pIHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmRyYXdFbmVteSgwKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIGlmICh0aGlzLmVuZW1pZXNbMV0pIHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmRyYXdFbmVteSgxKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIGlmICh0aGlzLmVuZW1pZXNbMl0pIHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmRyYXdFbmVteSgyKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIGlmICh0aGlzLmVuZW1pZXNbM10pIHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmRyYXdFbmVteSgzKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIGlmICh0aGlzLmVuZW1pZXNbNF0pIHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmRyYXdFbmVteSg0KTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIHRoaXMuZHJhd1BsYXllcigpO1xuICAgIC8vICAgICAgICAgdGhpcy5wbGF5ZXIxLm1vdmVQbGF5ZXIoKTtcbiAgICAvLyAgICAgICAgIHRoaXMucGxheWVyMS5oYW5kbGVQbGF5ZXJGcmFtZSgpO1xuICAgIC8vICAgICAgICAgdGhpcy5nZW5lcmF0ZUVuZW15KCk7XG4gICAgLy8gICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxufVxuXG4iLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGNhbnZhc1NwbGFzaCwgY2FudmFzVUkpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gbmV3IEdhbWUoY2FudmFzLCBjYW52YXNTcGxhc2gsIGNhbnZhc1VJKVxuICAgICAgICB0aGlzLmN0eFNwbGFzaCA9IGNhbnZhc1NwbGFzaC5nZXRDb250ZXh0KFwiMmRcIilcbiAgICAgICAgdGhpcy53aWR0aCA9IGNhbnZhc1NwbGFzaC53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBjYW52YXNTcGxhc2guaGVpZ2h0O1xuICAgICAgICB0aGlzLnRvcExvb3AgPSAtY2FudmFzU3BsYXNoLmhlaWdodDtcbiAgICAgICAgdGhpcy5ib3R0b21Mb29wID0gMDtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gbmV3IEltYWdlKClcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL2JhY2tncm91bmQtMS5wbmdcIjtcbiAgICAgICAgLy8gdGhpcy5zb3VuZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1lbnVLZXlzID0gW107XG4gICAgICAgIHRoaXMubXVzaWM7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcbiAgICB9XG4gICAgXG4gICAgcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3RhcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXVzaWMtY2hlY2tib3hcIik7XG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGlmKGUudGFyZ2V0LmNoZWNrZWQpIHtcblxuICAgICAgICAgICAgICAgIHRoYXQuZ2FtZS5zb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubXVzaWMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5tdXNpYy5wYXVzZWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdXNpYy5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoYXQuZ2FtZS5zb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm11c2ljKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXVzaWMucGF1c2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuXG4gICAgZHJhd1N0YXRpY0JhY2tncm91bmQoKSB7XG4gICAgICAgIHRoaXMuY3R4U3BsYXNoLmRyYXdJbWFnZShcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZCwgMCwgMCxcbiAgICAgICAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LFxuICAgICAgICAgICAgMCwgdGhpcy5ib3R0b21Mb29wLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodFxuICAgICAgICApXG4gICAgfVxuXG4gICAgLy8gc3RhcnQoKSB7XG4gICAgLy8gICAgIHRoaXMubXVzaWMubG9vcCA9IHRydWU7XG4gICAgLy8gICAgIHRoaXMubXVzaWMucGxheSgpO1xuICAgIC8vICAgICB0aGlzLmdhbWUuc3RhcnRBbmltYXRpbmcoNTApO1xuICAgIC8vIH1cblxuICAgIHJlc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5nYW1lb3ZlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmdhbWUuaGVhbHRoID0gMTAwMDtcbiAgICAgICAgdGhpcy5nYW1lLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5nYW1lLmVuZW1pZXMgPSBbXTtcbiAgICAgICAgdGhpcy5nYW1lLnBsYXllcjEueCA9IDMyOTtcbiAgICAgICAgdGhpcy5nYW1lLnBsYXllcjEueSA9IDM0NDtcbiAgICAgICAgLy8gdGhpcy5zdGFydEFuaW1hdGluZyg0NSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5tdXNpYyA9PT0gXCJ1bmRlZmluZWRcIikgdGhpcy5tdXNpYyA9IG5ldyBBdWRpbyhcIi4vc3JjL2F1ZGlvL2Jpa2VfY2hhc2UubXAzXCIpXG4gICAgICAgIGlmKHRoaXMuZ2FtZS5zb3VuZCAmJiB0aGlzLm11c2ljLnBhdXNlZCkge1xuICAgICAgICAgICAgdGhpcy5tdXNpYy5sb29wID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubXVzaWMucGxheSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2FtZS5zdGFydEFuaW1hdGluZyg1MCk7XG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy54ID0gMzI5O1xuICAgICAgICB0aGlzLnkgPSAzNDQ7XG4gICAgICAgIHRoaXMud2lkdGggPSAxODc7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTMwO1xuICAgICAgICB0aGlzLnhIaXRCb3ggPSBbdGhpcy54LCB0aGlzLnggKyB0aGlzLndpZHRoXTtcbiAgICAgICAgdGhpcy55SGl0Qm94ID0gW3RoaXMueSwgdGhpcy55ICt0aGlzLmhlaWdodF07XG4gICAgICAgIHRoaXMuZnJhbWVYID0gMDtcbiAgICAgICAgdGhpcy5mcmFtZVkgPSAwO1xuICAgICAgICB0aGlzLnNwZWVkID0gMTA7XG4gICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sZWZ0QXR0YWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmlnaHRBdHRhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sQXR0YWNrWEhpdEJveDtcbiAgICAgICAgdGhpcy5sQXR0YWNrWUhpdEJveDtcbiAgICAgICAgdGhpcy5yQXR0YWNrWEhpdEJveDtcbiAgICAgICAgdGhpcy5yQXR0YWNrWUhpdEJveDtcbiAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCIuL3NyYy9pbWFnZXMvYmlrZTEucG5nXCI7XG4gICAgICAgIHRoaXMua2V5cyA9IFtdO1xuICAgICAgICAvLyB0aGlzLmF0dGFja1JlYWR5XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcbiAgICB9XG5cbiAgICByZWdpc3RlckV2ZW50cygpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmtleXNbZS5rZXldID0gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMua2V5c1tlLmtleV07XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMubGVmdEF0dGFjayA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dSaWdodFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0QXR0YWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gXG4gICAgXG4gICAgbW92ZVBsYXllcigpIHtcbiAgICAgICAgaWYgKHRoaXMua2V5cy53ICYmIHRoaXMueSA+IDApIHsgICAgICAgICAvLyBtb3ZpbmcgdXBcbiAgICAgICAgICAgIHRoaXMueSAtPSB0aGlzLnNwZWVkOyAgICAgICAgICAgLy8gaW5jcmVhc2Ugb3VyIHBsYXlzZXIncyB5IHBvcyBieSBzcGVlZFxuICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmtleXMucyAmJiB0aGlzLnkgPCA1NTApIHsgICAgLy8gbW92aW5nIGRvd25cbiAgICAgICAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmtleXMuYSAmJiB0aGlzLnggPiA4MCkge1xuICAgICAgICAgICAgICAgIHRoaXMueCAtPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5rZXlzLmQgJiYgdGhpcy54IDwgNTgwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxlZnRBdHRhY2spIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVYID0gMDtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVZID0gMjtcbiAgICAgICAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB0aGlzLmxlZnRBdHRhY2sgPSB0cnVlO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxlZnRBdHRhY2sgPSBmYWxzZSwgNDAwKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJpZ2h0QXR0YWNrKSB7XG4gICAgICAgICAgICB0aGlzLmZyYW1lWCA9IDA7XG4gICAgICAgICAgICB0aGlzLmZyYW1lWSA9IDE7XG4gICAgICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gdGhpcy5yaWdodEF0dGFjayA9IHRydWU7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmlnaHRBdHRhY2sgPSBmYWxzZSwgNDAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlUGxheWVyRnJhbWUoKSB7XG4gICAgICAgIGlmICh0aGlzLm1vdmluZyAmJiAoIXRoaXMubGVmdEF0dGFjayB8fCAhdGhpcy5yaWdodEF0dGFjaykpIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVYKytcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMucmlnaHRBdHRhY2sgJiYgdGhpcy5mcmFtZVkgPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVZID0gMDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUiBBVFRBQ0tcIilcbiAgICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMubGVmdEF0dGFjayAmJiB0aGlzLmZyYW1lWSA9PT0gMikge1xuICAgICAgICAgICAgdGhpcy5mcmFtZVkgPSAwO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMIEFUVEFDS1wiKVxuICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZnJhbWVYID49IDIpe1xuXG4gICAgICAgICAgICB0aGlzLmZyYW1lWCA9IDBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZVBsYXllckF0dGFjaygpO1xuICAgIH1cblxuICAgIGhhbmRsZVBsYXllckF0dGFjaygpIHtcbiAgICAgICAgaWYgKHRoaXMubGVmdEF0dGFjaykge1xuICAgICAgICAgICAgdGhpcy5sQXR0YWNrWEhpdEJveCA9IFt0aGlzLnggKyAxMCwgdGhpcy54ICsgNjBdO1xuICAgICAgICAgICAgdGhpcy5sQXR0YWNrWUhpdEJveCA9IFt0aGlzLnksIHRoaXMueSArIDc5XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yaWdodEF0dGFjaykge1xuICAgICAgICAgICAgdGhpcy5yQXR0YWNrWEhpdEJveCA9IFt0aGlzLnggKyAxNTAsIHRoaXMueCArIDE1MCArIDMwXTtcbiAgICAgICAgICAgIHRoaXMuckF0dGFja1lIaXRCb3ggPSBbdGhpcy55LCB0aGlzLnkgKyA3OV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmxlZnRBdHRhY2spIHtcbiAgICAgICAgICAgIHRoaXMubEF0dGFja1hIaXRCb3ggPSBbXTtcbiAgICAgICAgICAgIHRoaXMubEF0dGFja1lIaXRCb3ggPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMucmlnaHRBdHRhY2spIHtcbiAgICAgICAgICAgIHRoaXMuckF0dGFja1hIaXRCb3ggPSBbXTtcbiAgICAgICAgICAgIHRoaXMuckF0dGFja1lIaXRCb3ggPSBbXTtcbiAgICAgICAgfVxuICAgIH1cblxufSIsImNvbnN0IFV0aWwgPSB7XG5cbiAgICBiZXR3ZWVuKHgsIG1pbiwgbWF4KSB7XG4gICAgICAgIHJldHVybiB4ID49IG1pbiAmJiB4IDw9IG1heDtcbiAgICB9LFxuICAgIGNvbGxpc2lvbih1bml0MXgsIHVuaXQxeSwgdW5pdDF3LCB1bml0MWgsIHVuaXQyeCwgdW5pdDJ5LCB1bml0MncsIHVuaXQyaCkge1xuICAgICAgICBsZXQgdW5pdDFYSGl0Qm94ID0gW3VuaXQxeCwgdW5pdDF4ICsgdW5pdDF3XTtcbiAgICAgICAgbGV0IHVuaXQxWUhpdEJveCA9IFt1bml0MXksIHVuaXQxeSArIHVuaXQxaF07XG4gICAgICAgIGxldCB1bml0MlhIaXRCb3ggPSBbdW5pdDJ4LCB1bml0MnggKyB1bml0MnddO1xuICAgICAgICBsZXQgdW5pdDJZSGl0Qm94ID0gW3VuaXQyeSwgdW5pdDJ5ICsgdW5pdDJoXTtcblxuICAgICAgICBsZXQgeENvbGxpc2lvbiA9IGZhbHNlO1xuICAgICAgICBsZXQgeUNvbGxpc2lvbiA9IGZhbHNlO1xuICAgICAgICBpZiAoVXRpbC5iZXR3ZWVuKHVuaXQxWEhpdEJveFswXSwgdW5pdDJYSGl0Qm94WzBdLCB1bml0MlhIaXRCb3hbMV0pIHx8XG4gICAgICAgICAgICBVdGlsLmJldHdlZW4odW5pdDFYSGl0Qm94WzFdLCB1bml0MlhIaXRCb3hbMF0sIHVuaXQyWEhpdEJveFsxXSkpIHtcbiAgICAgICAgICAgICAgICB4Q29sbGlzaW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgaWYgKFV0aWwuYmV0d2Vlbih1bml0MVlIaXRCb3hbMF0sIHVuaXQyWUhpdEJveFswXSwgdW5pdDJZSGl0Qm94WzFdKSB8fFxuICAgICAgICAgICAgVXRpbC5iZXR3ZWVuKHVuaXQxWUhpdEJveFsxXSwgdW5pdDJZSGl0Qm94WzBdLCB1bml0MllIaXRCb3hbMV0pKSB7XG4gICAgICAgICAgICAgICAgeUNvbGxpc2lvbiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIGlmICgoeENvbGxpc2lvbiA9PT0gdHJ1ZSAmJiB5Q29sbGlzaW9uID09PSB0cnVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGF0dGFja2VkKGF0dGFja1R5cGVYLCBhdHRhY2tUeXBlWSwgdW5pdHgsIHVuaXR5LCB1bml0dywgdW5pdGgpIHtcbiAgICAgICAgbGV0IHVuaXRYSGl0Qm94ID0gW3VuaXR4LCB1bml0eCArIHVuaXR3XTtcbiAgICAgICAgbGV0IHVuaXRZSGl0Qm94ID0gW3VuaXR5LCB1bml0eSArIHVuaXRoXTtcbiAgICAgICAgbGV0IHhBdHRhY2tlZDtcbiAgICAgICAgbGV0IHlBdHRhY2tlZDtcbiAgICAgICAgaWYgKFV0aWwuYmV0d2VlbihhdHRhY2tUeXBlWFswXSwgdW5pdFhIaXRCb3hbMF0sIHVuaXRYSGl0Qm94WzFdKSB8fFxuICAgICAgICAgICAgVXRpbC5iZXR3ZWVuKGF0dGFja1R5cGVYWzFdLCB1bml0WEhpdEJveFswXSwgdW5pdFhIaXRCb3hbMV0pKSB7XG4gICAgICAgICAgICB4QXR0YWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChVdGlsLmJldHdlZW4oYXR0YWNrVHlwZVlbMF0sIHVuaXRZSGl0Qm94WzBdLCB1bml0WUhpdEJveFsxXSkgfHxcbiAgICAgICAgICAgIFV0aWwuYmV0d2VlbihhdHRhY2tUeXBlWVsxXSwgdW5pdFlIaXRCb3hbMF0sIHVuaXRZSGl0Qm94WzFdKSkge1xuICAgICAgICAgICAgeUF0dGFja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGlmICgoeEF0dGFja2VkID09PSB0cnVlICYmIHlBdHRhY2tlZCA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU0xJQ0UhXCIpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gVXRpbCJdLCJzb3VyY2VSb290IjoiIn0=