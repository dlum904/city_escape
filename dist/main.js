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

  var newGameView = new _scripts_game_view__WEBPACK_IMPORTED_MODULE_1__["default"](canvas, canvasSplash, canvasUI).registerEvents();
  var audio = document.getElementById("music");
  setTimeout(function () {
    return audio.play();
  }, 3000);
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

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Enemy = /*#__PURE__*/function () {
  function Enemy(ctx, enemyType) {
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
    this.yHitBox = [this.y, this.y + this.hitboxHeight]; // this.dying = false;

    this.frameX = 0;
    this.dead = false;
  }

  _createClass(Enemy, [{
    key: "sayHello",
    value: function sayHello() {
      console.log("Hello");
    } // handleEnemyFrame() {
    //     debugger
    //     if (this.type === "damaged-crazy") {
    //         this.frameX+= 0.1
    //     }
    //     if (this.frameX > 4) {
    //         this.destroy();
    //     }
    // }

  }]);

  return Enemy;
}();



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

      if (health < 100) {
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
        console.log("generating enemy");
        var randomEnemyNum = Math.floor(Math.random() * 100);
        var enemyType;

        if (randomEnemyNum > 80) {
          enemyType = "turtle";
        }

        if (enemyType !== "turtle") {
          if (randomEnemyNum <= 50) {
            enemyType = "stupid";
          } // x >= min && x <= max;
          // else if (randomEnemyNum > 10 && randomEnemyNum < 50 ) {
          //     enemyType = "crazy"
          // }
          else {
              enemyType = "crazy";
            }
        }

        console.log(enemyType);

        if (typeof enemyType === "string") {
          this.enemies.push(new _enemy__WEBPACK_IMPORTED_MODULE_0__["default"](this.ctx, enemyType)); // TODO: randomly choose the type
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
          this.oof.play();
          this.drawUI(this.health, this.score);
          console.log(this.health);
        }

        if (this.player1.leftAttack) {
          if (Util.attacked(this.player1.lAttackXHitBox, this.player1.lAttackYHitBox, currentEnemy.x, currentEnemy.y, currentEnemy.hitboxWidth, currentEnemy.hitboxHeight)) {
            this.slice.play();
            currentEnemy.type = "damaged-stupid";
          }
        }

        if (this.player1.rightAttack) {
          if (Util.attacked(this.player1.rAttackXHitBox, this.player1.rAttackYHitBox, currentEnemy.x, currentEnemy.y, currentEnemy.hitboxWidth, currentEnemy.hitboxHeight)) {
            this.slice.play();
            currentEnemy.type = "damaged-stupid";
          }
        }

        if (currentEnemy.y > this.height && currentEnemy.type === "stupid") {
          this.enemies.splice(enemyNum, 1);
        }
      } //ANIMATING THE CRAZY ENEMY


      if (currentEnemy.type === "crazy") {
        this.ctx.drawImage(currentEnemy.enemySprite, 0, 0, currentEnemy.width, currentEnemy.height, currentEnemy.x, currentEnemy.y, 90, 150);

        if (this.player1.x + 20 > currentEnemy.x) {
          currentEnemy.x += currentEnemy.turning;
          currentEnemy.y -= currentEnemy.speed;
        } else if (Util.between(this.player1.x + 20, currentEnemy.x, currentEnemy.x + 20)) {
          currentEnemy.y -= 12;
        } else {
          currentEnemy.x -= currentEnemy.turning;
          currentEnemy.y -= currentEnemy.speed;
        }

        if (Util.collision(this.player1.x + 74, this.player1.y + 16, 38, 80, currentEnemy.x, currentEnemy.y, currentEnemy.hitboxWidth, currentEnemy.hitboxHeight)) {
          this.health -= 5;
          this.oof.play();
          this.drawUI(this.health, this.score);
        }

        if (this.player1.leftAttack) {
          if (Util.attacked(this.player1.lAttackXHitBox, this.player1.lAttackYHitBox, currentEnemy.x, currentEnemy.y, currentEnemy.hitboxWidth, currentEnemy.hitboxHeight)) {
            this.slice.play();
            currentEnemy.type = "damaged-crazy";
          }
        }

        if (this.player1.rightAttack) {
          if (Util.attacked(this.player1.rAttackXHitBox, this.player1.rAttackYHitBox, currentEnemy.x, currentEnemy.y, currentEnemy.hitboxWidth, currentEnemy.hitboxHeight)) {
            this.slice.play();
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
          this.oof.play();
          this.drawUI(this.health, this.score);
        } // if (this.player1.leftAttack) {
        //     if (Util.attacked(this.player1.lAttackXHitBox, this.player1.lAttackYHitBox,
        //         currentEnemy.x, currentEnemy.y, currentEnemy.hitboxWidth, currentEnemy.hitboxHeight)) {
        //         this.slice.play();
        //         // currentEnemy.type = "damaged-crazy"
        //     }
        // }
        // if (this.player1.rightAttack) {
        //     if (Util.attacked(this.player1.rAttackXHitBox, this.player1.rAttackYHitBox,
        //         currentEnemy.x, currentEnemy.y, currentEnemy.hitboxWidth, currentEnemy.hitboxHeight)) {
        //         this.slice.play();
        //         // currentEnemy.type = "damaged-crazy"
        //     }
        // }


        if (currentEnemy.y < -150 && currentEnemy.type === "turtle") {
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
        snaake.play();
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

    // this.ctxUI = canvasUI.getContext("2d");
    this.game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, canvasSplash, canvasUI);
    this.ctxSplash = canvasSplash.getContext("2d");
    this.width = canvasSplash.width;
    this.height = canvasSplash.height;
    this.topLoop = -canvasSplash.height;
    this.bottomLoop = 0;
    this.background = new Image();
    this.background.src = "./src/images/background-1.png"; // this.fpsInterval;
    // this.startTime;
    // this.now;
    // this.then;
    // this.elapsed;

    this.muted = false;
    this.audio = document.getElementById("music");
    this.menuKeys = [];
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

        if (e.key === "n" && _this.muted === false) {
          _this.toggleMuteOn();
        } else if (e.key === "m" && _this.muted === true) {
          _this.toggleMuteOff();
        } // if (e.key === "m")
        //     this.muted ? this.toggleMuteOff() : this.toggleMuteOff();

      });
    }
  }, {
    key: "toggleMuteOn",
    value: function toggleMuteOn() {
      // debugger
      if (this.muted === false) {
        console.log("mute");
        this.muted = true;
        this.audio.pause();
      }
    }
  }, {
    key: "toggleMuteOff",
    value: function toggleMuteOff() {
      // debugger
      console.log("unmute");
      this.muted = false;
      this.audio.play();
    }
  }, {
    key: "drawStaticBackground",
    value: function drawStaticBackground() {
      //bottom half of the background
      this.ctxSplash.drawImage(this.background, 0, 0, this.width, this.height, 0, this.bottomLoop, this.width, this.height); // this.bottomLoop += 10;
      // if (this.bottomLoop === this.height) this.bottomLoop = -this.height;
      // //top half of the background
      // this.ctxSplash.drawImage(
      //     this.background, 0, 0,
      //     this.width, this.height,
      //     0, this.topLoop, this.width, this.height
      // )
      // this.topLoop += 10;
      // if (this.topLoop === this.height) this.topLoop = -this.height;
    } // startAnimating(fps) {
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

  }, {
    key: "start",
    value: function start() {
      // this.startAnimating(45);
      this.game.startAnimating(45);
    }
  }, {
    key: "restart",
    value: function restart() {
      this.game.gameover = false;
      this.game.health = 1000;
      this.game.enemies = []; // this.startAnimating(45);

      this.game.startAnimating(45);
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

      // debugger
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
        // console.log()
        this.frameX = 0;
      }

      this.handlePlayerAttack();
    } //

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
    var unit2YHitBox = [unit2y, unit2y + unit2h]; // debugger

    var xCollision = false;
    var yCollision = false;

    if (Util.between(unit1XHitBox[0], unit2XHitBox[0], unit2XHitBox[1]) || Util.between(unit1XHitBox[1], unit2XHitBox[0], unit2XHitBox[1])) {
      xCollision = true; // console.log("COLLISIONX")
    }

    if (Util.between(unit1YHitBox[0], unit2YHitBox[0], unit2YHitBox[1]) || Util.between(unit1YHitBox[1], unit2YHitBox[0], unit2YHitBox[1])) {
      yCollision = true; // console.log("COLLISIONY")
    }

    if (xCollision === true && yCollision === true) {
      // debugger
      // console.log("COLLISION")
      return true;
    } else {
      return false;
    }
  },
  attacked: function attacked(attackTypeX, attackTypeY, unitx, unity, unitw, unith) {
    var unitXHitBox = [unitx, unitx + unitw];
    var unitYHitBox = [unity, unity + unith];
    var xAttacked;
    var yAttacked; // debugger

    if (Util.between(attackTypeX[0], unitXHitBox[0], unitXHitBox[1]) || Util.between(attackTypeX[1], unitXHitBox[0], unitXHitBox[1])) {
      xAttacked = true;
      console.log("X ATTACKED");
    }

    if (Util.between(attackTypeY[0], unitYHitBox[0], unitYHitBox[1]) || Util.between(attackTypeY[1], unitYHitBox[0], unitYHitBox[1])) {
      yAttacked = true;
    }

    if (xAttacked === true && yAttacked === true) {
      // debugger
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VuZW15LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhc1NwbGFzaCIsImdldEVsZW1lbnRCeUlkIiwid2lkdGgiLCJoZWlnaHQiLCJjYW52YXMiLCJjYW52YXNVSSIsIm5ld0dhbWVWaWV3IiwiR2FtZVZpZXciLCJyZWdpc3RlckV2ZW50cyIsImF1ZGlvIiwic2V0VGltZW91dCIsInBsYXkiLCJFbmVteSIsImN0eCIsImVuZW15VHlwZSIsImhpdGJveFdpZHRoIiwiaGl0Ym94SGVpZ2h0IiwidHlwZSIsImVuZW15U3ByaXRlIiwiSW1hZ2UiLCJzcmMiLCJ4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwieSIsInNwZWVkIiwidHVybmluZyIsImRpcmVjdGlvbiIsImZyYW1lWSIsInhIaXRCb3giLCJ5SGl0Qm94IiwiZnJhbWVYIiwiZGVhZCIsImNvbnNvbGUiLCJsb2ciLCJVdGlsIiwicmVxdWlyZSIsIkdhbWUiLCJoZWFsdGgiLCJnYW1lb3ZlciIsImN0eFVJIiwiZ2V0Q29udGV4dCIsImN0eFNwbGFzaCIsInBsYXllcjEiLCJQbGF5ZXIiLCJrZXlzIiwidG9wTG9vcCIsImJvdHRvbUxvb3AiLCJiYWNrZ3JvdW5kIiwiZW5lbWllcyIsImZwc0ludGVydmFsIiwic3RhcnRUaW1lIiwibm93IiwidGhlbiIsImVsYXBzZWQiLCJzbGljZSIsIkF1ZGlvIiwib29mIiwic2NvcmUiLCJkcmF3SW1hZ2UiLCJwbGF5ZXJTcHJpdGUiLCJjbGVhclJlY3QiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImJlZ2luUGF0aCIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwicmVjdCIsInN0cm9rZSIsImZvbnQiLCJmaWxsVGV4dCIsInRleHRBbGlnbiIsInJhbmRvbU51bSIsImxlbmd0aCIsInJhbmRvbUVuZW15TnVtIiwicHVzaCIsImVuZW15TnVtIiwiY3VycmVudEVuZW15IiwiY29sbGlzaW9uIiwiZHJhd1VJIiwibGVmdEF0dGFjayIsImF0dGFja2VkIiwibEF0dGFja1hIaXRCb3giLCJsQXR0YWNrWUhpdEJveCIsInJpZ2h0QXR0YWNrIiwickF0dGFja1hIaXRCb3giLCJyQXR0YWNrWUhpdEJveCIsInNwbGljZSIsImJldHdlZW4iLCJyb3VuZCIsInNuYWFrZSIsImZwcyIsIkRhdGUiLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCIsImRyYXdCYWNrZ3JvdW5kIiwiaGFuZGxlUGxheWVyRnJhbWUiLCJtb3ZlUGxheWVyIiwiaSIsImRyYXdFbmVteSIsImRyYXdQbGF5ZXIiLCJnZW5lcmF0ZUVuZW15IiwiY2hlY2tHYW1lb3ZlciIsImdhbWUiLCJtdXRlZCIsIm1lbnVLZXlzIiwid2luZG93IiwiZSIsImtleSIsInJlc3RhcnQiLCJ0b2dnbGVNdXRlT24iLCJ0b2dnbGVNdXRlT2ZmIiwicGF1c2UiLCJzdGFydEFuaW1hdGluZyIsIm1vdmluZyIsInciLCJzIiwiYSIsImQiLCJoYW5kbGVQbGF5ZXJBdHRhY2siLCJtaW4iLCJtYXgiLCJ1bml0MXgiLCJ1bml0MXkiLCJ1bml0MXciLCJ1bml0MWgiLCJ1bml0MngiLCJ1bml0MnkiLCJ1bml0MnciLCJ1bml0MmgiLCJ1bml0MVhIaXRCb3giLCJ1bml0MVlIaXRCb3giLCJ1bml0MlhIaXRCb3giLCJ1bml0MllIaXRCb3giLCJ4Q29sbGlzaW9uIiwieUNvbGxpc2lvbiIsImF0dGFja1R5cGVYIiwiYXR0YWNrVHlwZVkiLCJ1bml0eCIsInVuaXR5IiwidW5pdHciLCJ1bml0aCIsInVuaXRYSGl0Qm94IiwidW5pdFlIaXRCb3giLCJ4QXR0YWNrZWQiLCJ5QXR0YWNrZWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBWTtBQUN0RCxNQUFNQyxZQUFZLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixlQUF4QixDQUFyQjtBQUNBRCxjQUFZLENBQUNFLEtBQWIsR0FBcUIsR0FBckI7QUFDQUYsY0FBWSxDQUFDRyxNQUFiLEdBQXNCLEdBQXRCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHTixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBZjtBQUNBRyxRQUFNLENBQUNGLEtBQVAsR0FBZSxHQUFmO0FBQ0FFLFFBQU0sQ0FBQ0QsTUFBUCxH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QUFELENBQXhDLEVBQTZDQSxXQUFXLENBQUMsQ0FBRCxDQUF4RCxLQUNBN0csSUFBSSxDQUFDcUQsT0FBTCxDQUFha0QsV0FBVyxDQUFDLENBQUQsQ0FBeEIsRUFBNkJNLFdBQVcsQ0FBQyxDQUFELENBQXhDLEVBQTZDQSxXQUFXLENBQUMsQ0FBRCxDQUF4RCxDQURKLEVBQ2tFO0FBQzlERSxlQUFTLEdBQUcsSUFBWjtBQUVIOztBQUNELFFBQUtELFNBQVMsS0FBSyxJQUFkLElBQXNCQyxTQUFTLEtBQUssSUFBekMsRUFBZ0Q7QUFDNUM7QUFDQWpILGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDQSxhQUFPLElBQVA7QUFDSCxLQUpELE1BS0s7QUFDRCxhQUFPLEtBQVA7QUFDSDtBQUNKO0FBeERRLENBQWI7QUEwREFpSCxNQUFNLENBQUNDLE9BQVAsR0FBaUJqSCxJQUFqQixDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBHYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lJ1xuaW1wb3J0IEdhbWVWaWV3IGZyb20gJy4vc2NyaXB0cy9nYW1lX3ZpZXcnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY2FudmFzU3BsYXNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXMtc3BsYXNoXCIpO1xuICAgIGNhbnZhc1NwbGFzaC53aWR0aCA9IDg0MDtcbiAgICBjYW52YXNTcGxhc2guaGVpZ2h0ID0gNjUwO1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzLWdhbWVcIik7XG4gICAgY2FudmFzLndpZHRoID0gODQwO1xuICAgIGNhbnZhcy5oZWlnaHQgPSA2NTA7XG4gICAgY29uc3QgY2FudmFzVUkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhcy11aVwiKTtcbiAgICBjYW52YXNVSS53aWR0aCA9IDg0MDtcbiAgICBjYW52YXNVSS5oZWlnaHQgPSA2NTA7XG4gICAgLy8gY29uc3QgZ2FtZTEgPSBuZXcgR2FtZShjYW52YXMpXG4gICAgY29uc3QgbmV3R2FtZVZpZXcgPSBuZXcgR2FtZVZpZXcoY2FudmFzLCBjYW52YXNTcGxhc2gsIGNhbnZhc1VJKS5yZWdpc3RlckV2ZW50cygpXG4gICAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm11c2ljXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gYXVkaW8ucGxheSgpLCAzMDAwKTtcbn0pXG5cblxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lbXkge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgZW5lbXlUeXBlKSB7XG4gICAgICAgIC8vIHRoaXMueCA9IDA7ICAgICAgIC8vIFRPRE8gV2lsbCBjaGFuZ2UgYmFzZWQgb24gdGhlIGFyZyBwYXNzZWQgaW50byBjb25zdHJ1Y3RvclxuICAgICAgICAvLyB0aGlzLnkgPSAwO1xuICAgICAgICB0aGlzLndpZHRoID0gMjQzO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDQ4MDtcbiAgICAgICAgdGhpcy5oaXRib3hXaWR0aCA9IDkwO1xuICAgICAgICB0aGlzLmhpdGJveEhlaWdodCA9IDE1MDtcbiAgICAgICAgdGhpcy50eXBlID0gZW5lbXlUeXBlIC8vIFRPRE8gV2lsbCBjaGFuZ2UgYmFzZWQgb24gYSB0aGUgYXJndW1lbnQgcGFzc2VkIGludG8gY29uc3RydWN0b3JcbiAgICAgICAgdGhpcy5lbmVteVNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcInN0dXBpZFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlTcHJpdGUuc3JjID0gXCIuL3NyYy9pbWFnZXMvY2FyMS5wbmdcIlxuICAgICAgICAgICAgICAgIHRoaXMueCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg1NTAgLSAxMjApICsgMTIwKVxuICAgICAgICAgICAgICAgIHRoaXMueSA9IC0xMDA7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY3JhenlcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW15U3ByaXRlLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL2NhcjIucG5nXCJcbiAgICAgICAgICAgICAgICB0aGlzLnggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNTUwIC0gMTIwKSArIDEyMClcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSA2NTA7XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuaW5nID0gNDtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gNjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0dXJ0bGVcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW15U3ByaXRlLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL3R1cnRsZS5wbmdcIlxuICAgICAgICAgICAgICAgIHRoaXMueCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg1NTAgLSAxMjApICsgMTIwKVxuICAgICAgICAgICAgICAgIHRoaXMueSA9IDY1MDtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5pbmcgPSA0O1xuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgPSA2O1xuICAgICAgICAgICAgICAgIHRoaXMud2lkdGggPSA1MDtcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodCA9IDUzO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJyaWdodFwiXG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZVkgPSAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIHRoaXMueEhpdEJveCA9IFt0aGlzLngsIHRoaXMueCArIHRoaXMuaGl0Ym94V2lkdGhdO1xuICAgICAgICB0aGlzLnlIaXRCb3ggPSBbdGhpcy55LCB0aGlzLnkgKyB0aGlzLmhpdGJveEhlaWdodF07XG4gICAgICAgIC8vIHRoaXMuZHlpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mcmFtZVggPSAwXG4gICAgICAgIHRoaXMuZGVhZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNheUhlbGxvKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkhlbGxvXCIpXG4gICAgfVxuICAgIC8vIGhhbmRsZUVuZW15RnJhbWUoKSB7XG4gICAgLy8gICAgIGRlYnVnZ2VyXG4gICAgLy8gICAgIGlmICh0aGlzLnR5cGUgPT09IFwiZGFtYWdlZC1jcmF6eVwiKSB7XG4gICAgLy8gICAgICAgICB0aGlzLmZyYW1lWCs9IDAuMVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmICh0aGlzLmZyYW1lWCA+IDQpIHtcbiAgICAvLyAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG59IiwiaW1wb3J0IEVuZW15IGZyb20gXCIuL2VuZW15XCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuY29uc3QgVXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGNhbnZhc1NwbGFzaCwgY2FudmFzVUkpIHtcbiAgICAgICAgdGhpcy5oZWFsdGggPSAxMDAwO1xuICAgICAgICB0aGlzLmdhbWVvdmVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3R4VUkgPSBjYW52YXNVSS5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5jdHhTcGxhc2ggPSBjYW52YXNTcGxhc2guZ2V0Q29udGV4dChcIjJkXCIpXG4gICAgICAgIHRoaXMucGxheWVyMSA9IG5ldyBQbGF5ZXIoKTtcbiAgICAgICAgdGhpcy53aWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmtleXMgPSBbXTtcbiAgICAgICAgdGhpcy50b3BMb29wID0gLWNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMuYm90dG9tTG9vcCA9IDA7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5zcmMgPSBcIi4vc3JjL2ltYWdlcy9iYWNrZ3JvdW5kLTEucG5nXCI7XG4gICAgICAgIHRoaXMuZW5lbWllcyA9IFtdOyAvLyBjb250YWlucyBlbmVtaWVzIGN1cnJlbnRseSBvbiBzY3JlZW4sIHNob3duIGFzIGVuZW15LnR5cGVcbiAgICAgICAgdGhpcy5mcHNJbnRlcnZhbDtcbiAgICAgICAgdGhpcy5zdGFydFRpbWU7XG4gICAgICAgIHRoaXMubm93O1xuICAgICAgICB0aGlzLnRoZW47XG4gICAgICAgIHRoaXMuZWxhcHNlZDtcbiAgICAgICAgdGhpcy5zbGljZSA9IG5ldyBBdWRpbygnLi9zcmMvYXVkaW8vc2xpY2UubXAzJylcbiAgICAgICAgdGhpcy5vb2YgPSBuZXcgQXVkaW8oJy4vc3JjL2F1ZGlvL29vZi5tcDMnKVxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgLy8gdGhpcy5kcmF3QmFja2dyb3VuZCgpO1xuICAgICAgICAvLyB0aGlzLmRyYXdQbGF5ZXIoKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZHJhd0JhY2tncm91bmQoKSB7XG4gICAgICAgIC8vYm90dG9tIGhhbGYgb2YgdGhlIGJhY2tncm91bmRcbiAgICAgICAgdGhpcy5jdHhTcGxhc2guZHJhd0ltYWdlKFxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLCAwLCAwLFxuICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICAwLCB0aGlzLmJvdHRvbUxvb3AsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0XG4gICAgICAgIClcbiAgICAgICAgdGhpcy5ib3R0b21Mb29wICs9IDEwO1xuICAgICAgICBpZiAodGhpcy5ib3R0b21Mb29wID09PSB0aGlzLmhlaWdodCkgdGhpcy5ib3R0b21Mb29wID0gLXRoaXMuaGVpZ2h0O1xuICAgICAgICAvL3RvcCBoYWxmIG9mIHRoZSBiYWNrZ3JvdW5kXG4gICAgICAgIHRoaXMuY3R4U3BsYXNoLmRyYXdJbWFnZShcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZCwgMCwgMCxcbiAgICAgICAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LFxuICAgICAgICAgICAgMCwgdGhpcy50b3BMb29wLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodFxuICAgICAgICApXG4gICAgICAgIHRoaXMudG9wTG9vcCArPSAxMDtcbiAgICAgICAgaWYgKHRoaXMudG9wTG9vcCA9PT0gdGhpcy5oZWlnaHQpIHRoaXMudG9wTG9vcCA9IC10aGlzLmhlaWdodDtcbiAgICB9XG5cbiAgICBkcmF3UGxheWVyKCkge1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICB0aGlzLnBsYXllcjEucGxheWVyU3ByaXRlLCB0aGlzLnBsYXllcjEud2lkdGggKiB0aGlzLnBsYXllcjEuZnJhbWVYLCB0aGlzLnBsYXllcjEuaGVpZ2h0ICogdGhpcy5wbGF5ZXIxLmZyYW1lWSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aGVyZSB3ZSBjcm9wIG91dCB0aGUgaW1hZ2UgZm9yIHNwcml0ZVxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIxLndpZHRoLCB0aGlzLnBsYXllcjEuaGVpZ2h0LCB0aGlzLnBsYXllcjEueCwgdGhpcy5wbGF5ZXIxLnksICAgIC8vIHdoZXJlIHRoZSBpbWFnZSB3aWxsIGJlIGFuaW1hdGVkIG9uIGNhbnZhc1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIxLndpZHRoLCB0aGlzLnBsYXllcjEuaGVpZ2h0XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZHJhd1VJKGhlYWx0aCwgc2NvcmUpIHtcbiAgICAgICAgLy8gaW5pdGlhbCBoZWFsdGhcbiAgICAgICAgdGhpcy5jdHhVSS5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG5cbiAgICAgICAgdGhpcy5jdHhVSS5maWxsU3R5bGUgPSBcInJlZFwiXG4gICAgICAgIHRoaXMuY3R4VUkuZmlsbFJlY3QoMTAsIDMwLCAyNTAsIDEwKVxuXG4gICAgICAgIHRoaXMuY3R4VUkuYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4VUkubGluZVdpZHRoID0gXCIzXCI7XG4gICAgICAgIHRoaXMuY3R4VUkuc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIHRoaXMuY3R4VUkucmVjdCg5LCAyOSwgMjUyLCAxMilcbiAgICAgICAgdGhpcy5jdHhVSS5zdHJva2UoKTtcblxuICAgICAgICAvLyB5b3VyIGFjdHVhbCBoZWFsdGhcbiAgICAgICAgaWYgKGhlYWx0aCA8ICg3MDApKSB7XG4gICAgICAgICAgICB0aGlzLmN0eFVJLmZpbGxTdHlsZSA9IFwieWVsbG93XCJcbiAgICAgICAgICAgIHRoaXMuY3R4VUkuZmlsbFJlY3QoMTAsIDMwLCBoZWFsdGggLyA0LCAxMClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3R4VUkuZmlsbFN0eWxlID0gXCJncmVlblwiXG4gICAgICAgICAgICB0aGlzLmN0eFVJLmZpbGxSZWN0KDEwLCAzMCwgaGVhbHRoIC8gNCwgMTApXG4gICAgICAgIH1cblxuICAgICAgICAvLyB0ZXh0XG4gICAgICAgIHRoaXMuY3R4VUkuZm9udCA9IFwiNDBweCBBUkNBREVDTEFTU0lDXCJcbiAgICAgICAgdGhpcy5jdHhVSS5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIHRoaXMuY3R4VUkuZmlsbFRleHQoXCJIUFwiLCAxMCwgMjcpXG5cbiAgICAgICAgaWYgKGhlYWx0aCA8IDEwMCkge1xuICAgICAgICAgICAgdGhpcy5jdHhVSS5mb250ID0gXCI0MHB4IEFSQ0FERUNMQVNTSUNcIlxuICAgICAgICAgICAgdGhpcy5jdHhVSS5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICAgICAgdGhpcy5jdHhVSS5maWxsVGV4dChgJHtoZWFsdGh9LyAxMDAwYCwgODAsIDI3KVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGhlYWx0aCA8IDcwMCkge1xuICAgICAgICAgICAgdGhpcy5jdHhVSS5mb250ID0gXCI0MHB4IEFSQ0FERUNMQVNTSUNcIlxuICAgICAgICAgICAgdGhpcy5jdHhVSS5maWxsU3R5bGUgPSBcInllbGxvd1wiO1xuICAgICAgICAgICAgdGhpcy5jdHhVSS5maWxsVGV4dChgJHtoZWFsdGh9LyAxMDAwYCwgODAsIDI3KVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdHhVSS5mb250ID0gXCI0MHB4IEFSQ0FERUNMQVNTSUNcIlxuICAgICAgICAgICAgdGhpcy5jdHhVSS5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICB0aGlzLmN0eFVJLmZpbGxUZXh0KGAke2hlYWx0aH0vIDEwMDBgLCA4MCwgMjcpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN0eFVJLmZvbnQgPSBcIjI1cHggQVJDQURFQ0xBU1NJQ1wiXG4gICAgICAgIHRoaXMuY3R4VUkuZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICB0aGlzLmN0eFVJLnRleHRBbGlnbiA9IFwic3RhcnRcIjtcbiAgICAgICAgdGhpcy5jdHhVSS5maWxsVGV4dChgJHtzY29yZX1gLCA3NTAsIDIwKVxuICAgIH1cblxuICAgIGdlbmVyYXRlRW5lbXkoKSB7XG4gICAgICAgIC8vIGxvZ2ljIGZvciB3aGVuIHRvIGdlbmVyYXRlIGFuIGVuZW15LiAgd2lsbCBwdXNoIGludG8gdGhpcy5lbmVtaWVzXG4gICAgICAgIGNvbnN0IHJhbmRvbU51bSA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiA3MCkpO1xuICAgICAgICBpZiAodGhpcy5lbmVtaWVzLmxlbmd0aCA8IDUgJiYgcmFuZG9tTnVtID09PSA1KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImdlbmVyYXRpbmcgZW5lbXlcIilcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgcmFuZG9tRW5lbXlOdW0gPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTAwKSlcbiAgICAgICAgICAgIGxldCBlbmVteVR5cGVcbiAgICAgICAgICAgIGlmIChyYW5kb21FbmVteU51bSA+IDgwKSB7XG4gICAgICAgICAgICAgICAgZW5lbXlUeXBlID0gXCJ0dXJ0bGVcIjtcbiAgICAgICAgICAgIH0gXG4gICAgICAgICAgICBpZiAoZW5lbXlUeXBlICE9PSBcInR1cnRsZVwiKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAocmFuZG9tRW5lbXlOdW0gPD0gNTApIHtcbiAgICAgICAgICAgICAgICAgICAgZW5lbXlUeXBlID0gXCJzdHVwaWRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyB4ID49IG1pbiAmJiB4IDw9IG1heDtcbiAgICAgICAgICAgICAgICAvLyBlbHNlIGlmIChyYW5kb21FbmVteU51bSA+IDEwICYmIHJhbmRvbUVuZW15TnVtIDwgNTAgKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGVuZW15VHlwZSA9IFwiY3JhenlcIlxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZW5lbXlUeXBlID0gXCJjcmF6eVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coZW5lbXlUeXBlKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZW5lbXlUeXBlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnB1c2gobmV3IEVuZW15KHRoaXMuY3R4LCBlbmVteVR5cGUpKTsgICAvLyBUT0RPOiByYW5kb21seSBjaG9vc2UgdGhlIHR5cGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdFbmVteShlbmVteU51bSkgeyAgICAgICAgICAgLy9UT0RPOiBSRUZBQ1RPUiBUTyBBIFNXSVRDSCBDQVNFXG4gICAgICAgIGxldCBjdXJyZW50RW5lbXkgPSB0aGlzLmVuZW1pZXNbZW5lbXlOdW1dO1xuICAgICAgICAvLyBBTklNQVRJTkcgVEhFIFNUVVBJRCBFTkVNWVxuICAgICAgICBpZiAoY3VycmVudEVuZW15LnR5cGUgPT09IFwic3R1cGlkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkuZW5lbXlTcHJpdGUsIDAsIDAsXG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LndpZHRoLCBjdXJyZW50RW5lbXkuaGVpZ2h0LCBjdXJyZW50RW5lbXkueCAsIGN1cnJlbnRFbmVteS55LFxuICAgICAgICAgICAgICAgIDkwLCAxNTBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjdXJyZW50RW5lbXkueSArPSBjdXJyZW50RW5lbXkuc3BlZWQ7XG4gICAgICAgICAgICBpZiAoVXRpbC5jb2xsaXNpb24odGhpcy5wbGF5ZXIxLnggKyA3NCwgdGhpcy5wbGF5ZXIxLnkgKyAxNiwgMzgsIDgwLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSwgY3VycmVudEVuZW15LmhpdGJveFdpZHRoLCBjdXJyZW50RW5lbXkuaGl0Ym94SGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYWx0aCAtPSAxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9vZi5wbGF5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3VUkodGhpcy5oZWFsdGgsIHRoaXMuc2NvcmUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmhlYWx0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyMS5sZWZ0QXR0YWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKFV0aWwuYXR0YWNrZWQodGhpcy5wbGF5ZXIxLmxBdHRhY2tYSGl0Qm94LCB0aGlzLnBsYXllcjEubEF0dGFja1lIaXRCb3gsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSwgY3VycmVudEVuZW15LmhpdGJveFdpZHRoLCBjdXJyZW50RW5lbXkuaGl0Ym94SGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zbGljZS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkudHlwZSA9IFwiZGFtYWdlZC1zdHVwaWRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIxLnJpZ2h0QXR0YWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKFV0aWwuYXR0YWNrZWQodGhpcy5wbGF5ZXIxLnJBdHRhY2tYSGl0Qm94LCB0aGlzLnBsYXllcjEuckF0dGFja1lIaXRCb3gsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSwgY3VycmVudEVuZW15LmhpdGJveFdpZHRoLCBjdXJyZW50RW5lbXkuaGl0Ym94SGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zbGljZS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkudHlwZSA9IFwiZGFtYWdlZC1zdHVwaWRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY3VycmVudEVuZW15LnkgPiB0aGlzLmhlaWdodCAmJiBjdXJyZW50RW5lbXkudHlwZSA9PT1cInN0dXBpZFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnNwbGljZShlbmVteU51bSwgMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vQU5JTUFUSU5HIFRIRSBDUkFaWSBFTkVNWVxuICAgICAgICBpZiAoY3VycmVudEVuZW15LnR5cGUgPT09IFwiY3JhenlcIikge1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS5lbmVteVNwcml0ZSwgMCwgMCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkud2lkdGgsIGN1cnJlbnRFbmVteS5oZWlnaHQsIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSxcbiAgICAgICAgICAgICAgICA5MCwgMTUwXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyMS54ICsgMjAgID4gY3VycmVudEVuZW15LngpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueCArPSBjdXJyZW50RW5lbXkudHVybmluZztcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueSAtPSBjdXJyZW50RW5lbXkuc3BlZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChVdGlsLmJldHdlZW4odGhpcy5wbGF5ZXIxLnggKyAyMCwgY3VycmVudEVuZW15LngsIGN1cnJlbnRFbmVteS54ICsgMjApKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LnkgLT0gMTI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueCAtPSBjdXJyZW50RW5lbXkudHVybmluZztcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueSAtPSBjdXJyZW50RW5lbXkuc3BlZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoVXRpbC5jb2xsaXNpb24odGhpcy5wbGF5ZXIxLnggKyA3NCwgdGhpcy5wbGF5ZXIxLnkgKyAxNiwgMzgsIDgwLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSwgY3VycmVudEVuZW15LmhpdGJveFdpZHRoLCBjdXJyZW50RW5lbXkuaGl0Ym94SGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYWx0aCAtPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMub29mLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3VUkodGhpcy5oZWFsdGgsdGhpcy5zY29yZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyMS5sZWZ0QXR0YWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKFV0aWwuYXR0YWNrZWQodGhpcy5wbGF5ZXIxLmxBdHRhY2tYSGl0Qm94LCB0aGlzLnBsYXllcjEubEF0dGFja1lIaXRCb3gsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSwgY3VycmVudEVuZW15LmhpdGJveFdpZHRoLCBjdXJyZW50RW5lbXkuaGl0Ym94SGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zbGljZS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkudHlwZSA9IFwiZGFtYWdlZC1jcmF6eVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyMS5yaWdodEF0dGFjaykge1xuICAgICAgICAgICAgICAgIGlmIChVdGlsLmF0dGFja2VkKHRoaXMucGxheWVyMS5yQXR0YWNrWEhpdEJveCwgdGhpcy5wbGF5ZXIxLnJBdHRhY2tZSGl0Qm94LFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnksIGN1cnJlbnRFbmVteS5oaXRib3hXaWR0aCwgY3VycmVudEVuZW15LmhpdGJveEhlaWdodCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2xpY2UucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LnR5cGUgPSBcImRhbWFnZWQtY3JhenlcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY3VycmVudEVuZW15LnkgPCAtMTUwICYmIGN1cnJlbnRFbmVteS50eXBlID09PSBcImNyYXp5XCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW1pZXMuc3BsaWNlKGVuZW15TnVtLCAxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTUlDSEFFTEFOR0VMTyEhIVxuICAgICAgICBpZiAoY3VycmVudEVuZW15LnR5cGUgPT09IFwidHVydGxlXCIpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoY3VycmVudEVuZW15LmRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkuZW5lbXlTcHJpdGUsIGN1cnJlbnRFbmVteS53aWR0aCAqIGN1cnJlbnRFbmVteS5mcmFtZVgsIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkud2lkdGgsIGN1cnJlbnRFbmVteS5oZWlnaHQsIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDc1LCA3NVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueCArPSAxMjtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LnkgLT0gNDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LmVuZW15U3ByaXRlLCBjdXJyZW50RW5lbXkud2lkdGggKiBjdXJyZW50RW5lbXkuZnJhbWVYLCAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LndpZHRoLCBjdXJyZW50RW5lbXkuaGVpZ2h0LCBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnksXG4gICAgICAgICAgICAgICAgICAgICAgICA3NSwgNzVcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LnggLT0gMTI7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS55IC09IDQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJkb3duXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS5lbmVteVNwcml0ZSwgNDgsIDU1LFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LndpZHRoLCBjdXJyZW50RW5lbXkuaGVpZ2h0LCBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnksXG4gICAgICAgICAgICAgICAgICAgICAgICA3NSwgMTU0XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS55ICs9IDY7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50RW5lbXkuZnJhbWVYIDwgMSkgY3VycmVudEVuZW15LmZyYW1lWCArPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiAoY3VycmVudEVuZW15LmRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyBpZiAoY3VycmVudEVuZW15LmRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBpZiAoY3VycmVudEVuZW15LnggPD0gODApIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkuZnJhbWVYID0gMDtcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkuZGlyZWN0aW9uID0gXCJyaWdodFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGN1cnJlbnRFbmVteS54ID49IDU4MCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS5mcmFtZVggPSAxO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS5kaXJlY3Rpb24gPSBcImxlZnRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjdXJyZW50RW5lbXkueSA8PSA1MCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS5kaXJlY3Rpb24gPSBcImRvd25cIlxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS53aWR0aCA9IDQxO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS5oZWlnaHQgPSA4NjtcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkuZnJhbWVYID0gMDtcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkuZnJhbWVZID0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFV0aWwuY29sbGlzaW9uKHRoaXMucGxheWVyMS54ICsgNzQsIHRoaXMucGxheWVyMS55ICsgMTYsIDM4LCA4MCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnksIDUwLCA1MykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWx0aCAtPSAxMDtcbiAgICAgICAgICAgICAgICB0aGlzLm9vZi5wbGF5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3VUkodGhpcy5oZWFsdGgsIHRoaXMuc2NvcmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgKHRoaXMucGxheWVyMS5sZWZ0QXR0YWNrKSB7XG4gICAgICAgICAgICAvLyAgICAgaWYgKFV0aWwuYXR0YWNrZWQodGhpcy5wbGF5ZXIxLmxBdHRhY2tYSGl0Qm94LCB0aGlzLnBsYXllcjEubEF0dGFja1lIaXRCb3gsXG4gICAgICAgICAgICAvLyAgICAgICAgIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSwgY3VycmVudEVuZW15LmhpdGJveFdpZHRoLCBjdXJyZW50RW5lbXkuaGl0Ym94SGVpZ2h0KSkge1xuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLnNsaWNlLnBsYXkoKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgLy8gY3VycmVudEVuZW15LnR5cGUgPSBcImRhbWFnZWQtY3JhenlcIlxuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgLy8gaWYgKHRoaXMucGxheWVyMS5yaWdodEF0dGFjaykge1xuICAgICAgICAgICAgLy8gICAgIGlmIChVdGlsLmF0dGFja2VkKHRoaXMucGxheWVyMS5yQXR0YWNrWEhpdEJveCwgdGhpcy5wbGF5ZXIxLnJBdHRhY2tZSGl0Qm94LFxuICAgICAgICAgICAgLy8gICAgICAgICBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnksIGN1cnJlbnRFbmVteS5oaXRib3hXaWR0aCwgY3VycmVudEVuZW15LmhpdGJveEhlaWdodCkpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5zbGljZS5wbGF5KCk7XG4gICAgICAgICAgICAvLyAgICAgICAgIC8vIGN1cnJlbnRFbmVteS50eXBlID0gXCJkYW1hZ2VkLWNyYXp5XCJcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBpZiAoY3VycmVudEVuZW15LnkgPCAtMTUwICYmIGN1cnJlbnRFbmVteS50eXBlID09PSBcInR1cnRsZVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnNwbGljZShlbmVteU51bSwgMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERBTUFHRUQgRU5FTUlFU1xuICAgICBcbiAgICAgICAgaWYgKGN1cnJlbnRFbmVteS50eXBlID09PSBcImRhbWFnZWQtc3R1cGlkXCIpIHtcblxuICAgICAgICAgICAgY3VycmVudEVuZW15LmVuZW15U3ByaXRlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBjdXJyZW50RW5lbXkuZW5lbXlTcHJpdGUuc3JjID0gXCIuL3NyYy9pbWFnZXMvY2FyMS1keWluZy5wbmdcIlxuICBcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkuZW5lbXlTcHJpdGUsIE1hdGgucm91bmQoY3VycmVudEVuZW15LmZyYW1lWCkgKiBjdXJyZW50RW5lbXkud2lkdGgsIDAsXG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LndpZHRoLCBjdXJyZW50RW5lbXkuaGVpZ2h0LCBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnksICAgIC8vVE9ETyBmcmFtZXNzc1xuICAgICAgICAgICAgICAgIDkwLCAxNTBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjdXJyZW50RW5lbXkueSArPSA0O1xuICAgICAgICAgICAgY3VycmVudEVuZW15LmZyYW1lWCArPSAwLjFcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGN1cnJlbnRFbmVteS5mcmFtZVggPiA0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnNwbGljZShlbmVteU51bSwgMSlcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3JlICs9IDEwMFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRFbmVteS50eXBlID09PSBcImRhbWFnZWQtY3JhenlcIikge1xuXG4gICAgICAgICAgICBjdXJyZW50RW5lbXkuZW5lbXlTcHJpdGUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGN1cnJlbnRFbmVteS5lbmVteVNwcml0ZS5zcmMgPSBcIi4vc3JjL2ltYWdlcy9jYXIyLWR5aW5nLnBuZ1wiXG5cbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkuZW5lbXlTcHJpdGUsIE1hdGgucm91bmQoY3VycmVudEVuZW15LmZyYW1lWCkgKiBjdXJyZW50RW5lbXkud2lkdGgsIDAsXG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LndpZHRoLCBjdXJyZW50RW5lbXkuaGVpZ2h0LCBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnksICAgIC8vVE9ETyBmcmFtZXNzc1xuICAgICAgICAgICAgICAgIDkwLCAxNTBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjdXJyZW50RW5lbXkueSArPSA0O1xuICAgICAgICAgICAgY3VycmVudEVuZW15LmZyYW1lWCArPSAwLjFcbiAgICAgICAgICAgIGlmIChjdXJyZW50RW5lbXkuZnJhbWVYID4gNCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5lbWllcy5zcGxpY2UoZW5lbXlOdW0sIDEpXG4gICAgICAgICAgICAgICAgdGhpcy5zY29yZSArPSA1MDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGVja0dhbWVvdmVyKCkge1xuICAgICAgICBpZiAodGhpcy5oZWFsdGggPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lb3ZlciA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjgwcHggQVJDQURFQ0xBU1NJQ1wiXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkdBTUUgT1ZFUlwiLCAyNDUsIDMwMClcblxuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjBweCBBUkNBREVDTEFTU0lDXCJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGBTQ09SRTogJHt0aGlzLnNjb3JlfWAgLCAyNDUsIDM1MClcblxuICAgICAgICAgICAgaWYgKHRoaXMuc2NvcmUgPD0gMTAwMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyMHB4IEFSQ0FERUNMQVNTSUNcIlxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChgUkFOSzogTk9PQmAsIDUwMCwgMzUwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zY29yZSA8PSAyMDAwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjIwcHggQVJDQURFQ0xBU1NJQ1wiXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGBSQU5LOiBUV0lOS0xFICBUT0VTYCwgNTAwLCAzNTApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNjb3JlIDw9IDUwMDAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjBweCBBUkNBREVDTEFTU0lDXCJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoYFJBTks6IEZJTklTSEVEIFNUUk9ORyFgLCA1MDAsIDM1MClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiNDBweCBBUkNBREVDTEFTU0lDXCJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUFJFU1MgIEVOVEVSICBUTyAgUkVTVEFSVFwiLCAyMDAsIDQwMClcblxuICAgICAgICAgICAgY29uc3Qgc25hYWtlID0gbmV3IEF1ZGlvKCcuL3NyYy9hdWRpby9HYW1lb3Zlci5tcDMnKVxuICAgICAgICAgICAgc25hYWtlLnBsYXkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0QW5pbWF0aW5nKGZwcykge1xuICAgICAgICB0aGlzLmZwc0ludGVydmFsID0gMTAwMCAvIGZwcztcbiAgICAgICAgdGhpcy50aGVuID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSB0aGlzLnRoZW47XG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgIH1cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMubm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gdGhpcy5ub3cgLSB0aGlzLnRoZW47XG4gICAgICAgIGlmICh0aGlzLmVsYXBzZWQgPiB0aGlzLmZwc0ludGVydmFsKSB7XG4gICAgICAgICAgICB0aGlzLnRoZW4gPSB0aGlzLm5vdyAtICh0aGlzLmVsYXBzZWQgJSB0aGlzLmZwc0ludGVydmFsKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5kcmF3VUkodGhpcy5oZWFsdGgsIHRoaXMuc2NvcmUpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICghdGhpcy5nYW1lb3Zlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIxLmhhbmRsZVBsYXllckZyYW1lKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIxLm1vdmVQbGF5ZXIoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW5lbWllcy5sZW5ndGg7IGkrKyApIHRoaXMuZHJhd0VuZW15KGkpXG4gICAgICAgICAgICAgICAgdGhpcy5zY29yZSArPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhd1BsYXllcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVFbmVteSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tHYW1lb3ZlcigpO1xuICAgICAgICAgICAgICAgIC8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBzdGFydEFuaW1hdGluZyhmcHMpIHtcbiAgICAvLyAgICAgdGhpcy5mcHNJbnRlcnZhbCA9IDEwMDAgLyBmcHM7XG4gICAgLy8gICAgIHRoaXMudGhlbiA9IERhdGUubm93KCk7XG4gICAgLy8gICAgIHRoaXMuc3RhcnRUaW1lID0gdGhpcy50aGVuO1xuICAgIC8vICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICAvLyB9XG4gICAgLy8gYW5pbWF0ZSgpIHtcbiAgICAvLyAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICAvLyAgICAgdGhpcy5ub3cgPSBEYXRlLm5vdygpO1xuICAgIC8vICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLm5vdyAtIHRoaXMudGhlbjtcbiAgICAvLyAgICAgaWYgKHRoaXMuZWxhcHNlZCA+IHRoaXMuZnBzSW50ZXJ2YWwpIHtcbiAgICAvLyAgICAgICAgIHRoaXMudGhlbiA9IHRoaXMubm93IC0gKHRoaXMuZWxhcHNlZCAlIHRoaXMuZnBzSW50ZXJ2YWwpO1xuICAgIC8vICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgIC8vICAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZCgpO1xuICAgIC8vICAgICAgICAgaWYgKHRoaXMuZW5lbWllc1swXSkge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuZHJhd0VuZW15KDApO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuZW5lbWllc1sxXSkge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuZHJhd0VuZW15KDEpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuZW5lbWllc1syXSkge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuZHJhd0VuZW15KDIpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuZW5lbWllc1szXSkge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuZHJhd0VuZW15KDMpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuZW5lbWllc1s0XSkge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuZHJhd0VuZW15KDQpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgdGhpcy5kcmF3UGxheWVyKCk7XG4gICAgLy8gICAgICAgICB0aGlzLnBsYXllcjEubW92ZVBsYXllcigpO1xuICAgIC8vICAgICAgICAgdGhpcy5wbGF5ZXIxLmhhbmRsZVBsYXllckZyYW1lKCk7XG4gICAgLy8gICAgICAgICB0aGlzLmdlbmVyYXRlRW5lbXkoKTtcbiAgICAvLyAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG59XG5cbiIsImltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY2FudmFzU3BsYXNoLCBjYW52YXNVSSkge1xuICAgICAgICAvLyB0aGlzLmN0eFVJID0gY2FudmFzVUkuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZShjYW52YXMsIGNhbnZhc1NwbGFzaCwgY2FudmFzVUkpXG4gICAgICAgIHRoaXMuY3R4U3BsYXNoID0gY2FudmFzU3BsYXNoLmdldENvbnRleHQoXCIyZFwiKVxuICAgICAgICB0aGlzLndpZHRoID0gY2FudmFzU3BsYXNoLndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGNhbnZhc1NwbGFzaC5oZWlnaHQ7XG4gICAgICAgIHRoaXMudG9wTG9vcCA9IC1jYW52YXNTcGxhc2guaGVpZ2h0O1xuICAgICAgICB0aGlzLmJvdHRvbUxvb3AgPSAwO1xuICAgICAgICB0aGlzLmJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKVxuICAgICAgICB0aGlzLmJhY2tncm91bmQuc3JjID0gXCIuL3NyYy9pbWFnZXMvYmFja2dyb3VuZC0xLnBuZ1wiO1xuICAgICAgICAvLyB0aGlzLmZwc0ludGVydmFsO1xuICAgICAgICAvLyB0aGlzLnN0YXJ0VGltZTtcbiAgICAgICAgLy8gdGhpcy5ub3c7XG4gICAgICAgIC8vIHRoaXMudGhlbjtcbiAgICAgICAgLy8gdGhpcy5lbGFwc2VkO1xuICAgICAgICB0aGlzLm11dGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm11c2ljXCIpO1xuICAgICAgICB0aGlzLm1lbnVLZXlzID0gW11cbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cygpO1xuICAgIH1cbiAgICBcbiAgICByZWdpc3RlckV2ZW50cygpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzdGFydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIm5cIiAmJiB0aGlzLm11dGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlTXV0ZU9uKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGUua2V5ID09PSBcIm1cIiAmJiB0aGlzLm11dGVkID09PSB0cnVlICkge1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlTXV0ZU9mZigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiAoZS5rZXkgPT09IFwibVwiKVxuICAgICAgICAgICAgLy8gICAgIHRoaXMubXV0ZWQgPyB0aGlzLnRvZ2dsZU11dGVPZmYoKSA6IHRoaXMudG9nZ2xlTXV0ZU9mZigpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICB0b2dnbGVNdXRlT24oKSB7XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIGlmICh0aGlzLm11dGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJtdXRlXCIpXG4gICAgICAgICAgICAgICAgdGhpcy5tdXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5hdWRpby5wYXVzZSgpXG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9nZ2xlTXV0ZU9mZigpIHtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgY29uc29sZS5sb2coXCJ1bm11dGVcIilcbiAgICAgICAgICAgIHRoaXMubXV0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYXVkaW8ucGxheSgpO1xuICAgIH1cblxuICAgIGRyYXdTdGF0aWNCYWNrZ3JvdW5kKCkge1xuICAgICAgICAvL2JvdHRvbSBoYWxmIG9mIHRoZSBiYWNrZ3JvdW5kXG4gICAgICAgIHRoaXMuY3R4U3BsYXNoLmRyYXdJbWFnZShcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZCwgMCwgMCxcbiAgICAgICAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LFxuICAgICAgICAgICAgMCwgdGhpcy5ib3R0b21Mb29wLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodFxuICAgICAgICApXG4gICAgICAgIC8vIHRoaXMuYm90dG9tTG9vcCArPSAxMDtcbiAgICAgICAgLy8gaWYgKHRoaXMuYm90dG9tTG9vcCA9PT0gdGhpcy5oZWlnaHQpIHRoaXMuYm90dG9tTG9vcCA9IC10aGlzLmhlaWdodDtcbiAgICAgICAgLy8gLy90b3AgaGFsZiBvZiB0aGUgYmFja2dyb3VuZFxuICAgICAgICAvLyB0aGlzLmN0eFNwbGFzaC5kcmF3SW1hZ2UoXG4gICAgICAgIC8vICAgICB0aGlzLmJhY2tncm91bmQsIDAsIDAsXG4gICAgICAgIC8vICAgICB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCxcbiAgICAgICAgLy8gICAgIDAsIHRoaXMudG9wTG9vcCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHRcbiAgICAgICAgLy8gKVxuICAgICAgICAvLyB0aGlzLnRvcExvb3AgKz0gMTA7XG4gICAgICAgIC8vIGlmICh0aGlzLnRvcExvb3AgPT09IHRoaXMuaGVpZ2h0KSB0aGlzLnRvcExvb3AgPSAtdGhpcy5oZWlnaHQ7XG4gICAgfVxuXG4gICAgLy8gc3RhcnRBbmltYXRpbmcoZnBzKSB7XG4gICAgLy8gICAgIHRoaXMuZnBzSW50ZXJ2YWwgPSAxMDAwIC8gZnBzO1xuICAgIC8vICAgICB0aGlzLnRoZW4gPSBEYXRlLm5vdygpO1xuICAgIC8vICAgICB0aGlzLnN0YXJ0VGltZSA9IHRoaXMudGhlbjtcbiAgICAvLyAgICAgdGhpcy5hbmltYXRlVGl0bGUoKTtcbiAgICAvLyB9XG5cbiAgICAvLyBhbmltYXRlVGl0bGUoKSB7XG4gICAgLy8gICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGVUaXRsZS5iaW5kKHRoaXMpKTtcbiAgICAvLyAgICAgdGhpcy5ub3cgPSBEYXRlLm5vdygpO1xuICAgIC8vICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLm5vdyAtIHRoaXMudGhlbjtcbiAgICAvLyAgICAgaWYgKHRoaXMuZWxhcHNlZCA+IHRoaXMuZnBzSW50ZXJ2YWwpIHtcbiAgICAvLyAgICAgICAgIHRoaXMudGhlbiA9IHRoaXMubm93IC0gKHRoaXMuZWxhcHNlZCAlIHRoaXMuZnBzSW50ZXJ2YWwpO1xuICAgIC8vICAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZCgpO1xuICAgIC8vICAgICAgICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZVRpdGxlLmJpbmQodGhpcykpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIC8vIHRoaXMuc3RhcnRBbmltYXRpbmcoNDUpO1xuICAgICAgICB0aGlzLmdhbWUuc3RhcnRBbmltYXRpbmcoNDUpO1xuICAgIH1cblxuICAgIHJlc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5nYW1lb3ZlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmdhbWUuaGVhbHRoID0gMTAwMDtcbiAgICAgICAgdGhpcy5nYW1lLmVuZW1pZXMgPSBbXTtcbiAgICAgICAgLy8gdGhpcy5zdGFydEFuaW1hdGluZyg0NSk7XG4gICAgICAgIHRoaXMuZ2FtZS5zdGFydEFuaW1hdGluZyg0NSk7XG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy54ID0gMzI5O1xuICAgICAgICB0aGlzLnkgPSAzNDQ7XG4gICAgICAgIHRoaXMud2lkdGggPSAxODc7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTMwO1xuICAgICAgICB0aGlzLnhIaXRCb3ggPSBbdGhpcy54LCB0aGlzLnggKyB0aGlzLndpZHRoXTtcbiAgICAgICAgdGhpcy55SGl0Qm94ID0gW3RoaXMueSwgdGhpcy55ICt0aGlzLmhlaWdodF07XG4gICAgICAgIHRoaXMuZnJhbWVYID0gMDtcbiAgICAgICAgdGhpcy5mcmFtZVkgPSAwO1xuICAgICAgICB0aGlzLnNwZWVkID0gMTA7XG4gICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sZWZ0QXR0YWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmlnaHRBdHRhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sQXR0YWNrWEhpdEJveDtcbiAgICAgICAgdGhpcy5sQXR0YWNrWUhpdEJveDtcbiAgICAgICAgdGhpcy5yQXR0YWNrWEhpdEJveDtcbiAgICAgICAgdGhpcy5yQXR0YWNrWUhpdEJveDtcbiAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCIuL3NyYy9pbWFnZXMvYmlrZTEucG5nXCI7XG4gICAgICAgIHRoaXMua2V5cyA9IFtdO1xuICAgICAgICAvLyB0aGlzLmF0dGFja1JlYWR5XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcbiAgICB9XG5cbiAgICByZWdpc3RlckV2ZW50cygpIHtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmtleXNbZS5rZXldID0gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMua2V5c1tlLmtleV07XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMubGVmdEF0dGFjayA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dSaWdodFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0QXR0YWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuXG4gICAgfVxuIFxuICAgIFxuICAgIG1vdmVQbGF5ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmtleXMudyAmJiB0aGlzLnkgPiAwKSB7ICAgICAgICAgLy8gbW92aW5nIHVwXG4gICAgICAgICAgICB0aGlzLnkgLT0gdGhpcy5zcGVlZDsgICAgICAgICAgIC8vIGluY3JlYXNlIG91ciBwbGF5c2VyJ3MgeSBwb3MgYnkgc3BlZWRcbiAgICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5rZXlzLnMgJiYgdGhpcy55IDwgNTUwKSB7ICAgIC8vIG1vdmluZyBkb3duXG4gICAgICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5rZXlzLmEgJiYgdGhpcy54ID4gODApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnggLT0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmluZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMua2V5cy5kICYmIHRoaXMueCA8IDU4MCkge1xuICAgICAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sZWZ0QXR0YWNrKSB7XG4gICAgICAgICAgICB0aGlzLmZyYW1lWCA9IDA7XG4gICAgICAgICAgICB0aGlzLmZyYW1lWSA9IDI7XG4gICAgICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gdGhpcy5sZWZ0QXR0YWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5sZWZ0QXR0YWNrID0gZmFsc2UsIDQwMClcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yaWdodEF0dGFjaykge1xuICAgICAgICAgICAgdGhpcy5mcmFtZVggPSAwO1xuICAgICAgICAgICAgdGhpcy5mcmFtZVkgPSAxO1xuICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHRoaXMucmlnaHRBdHRhY2sgPSB0cnVlO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnJpZ2h0QXR0YWNrID0gZmFsc2UsIDQwMClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVBsYXllckZyYW1lKCkge1xuICAgICAgICBpZiAodGhpcy5tb3ZpbmcgJiYgKCF0aGlzLmxlZnRBdHRhY2sgfHwgIXRoaXMucmlnaHRBdHRhY2spKSB7XG4gICAgICAgICAgICB0aGlzLmZyYW1lWCsrXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnJpZ2h0QXR0YWNrICYmIHRoaXMuZnJhbWVZID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmZyYW1lWSA9IDA7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlIgQVRUQUNLXCIpXG4gICAgICAgICAgICB0aGlzLm1vdmluZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmxlZnRBdHRhY2sgJiYgdGhpcy5mcmFtZVkgPT09IDIpIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVZID0gMDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTCBBVFRBQ0tcIilcbiAgICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmZyYW1lWCA+PSAyKXtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKClcbiAgICAgICAgICAgIHRoaXMuZnJhbWVYID0gMFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlUGxheWVyQXR0YWNrKCk7XG4gICAgfVxuLy9cbiAgICBoYW5kbGVQbGF5ZXJBdHRhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmxlZnRBdHRhY2spIHtcbiAgICAgICAgICAgIHRoaXMubEF0dGFja1hIaXRCb3ggPSBbdGhpcy54ICsgMTAsIHRoaXMueCArIDYwXTtcbiAgICAgICAgICAgIHRoaXMubEF0dGFja1lIaXRCb3ggPSBbdGhpcy55LCB0aGlzLnkgKyA3OV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucmlnaHRBdHRhY2spIHtcbiAgICAgICAgICAgIHRoaXMuckF0dGFja1hIaXRCb3ggPSBbdGhpcy54ICsgMTUwLCB0aGlzLnggKyAxNTAgKyAzMF07XG4gICAgICAgICAgICB0aGlzLnJBdHRhY2tZSGl0Qm94ID0gW3RoaXMueSwgdGhpcy55ICsgNzldO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5sZWZ0QXR0YWNrKSB7XG4gICAgICAgICAgICB0aGlzLmxBdHRhY2tYSGl0Qm94ID0gW107XG4gICAgICAgICAgICB0aGlzLmxBdHRhY2tZSGl0Qm94ID0gW107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnJpZ2h0QXR0YWNrKSB7XG4gICAgICAgICAgICB0aGlzLnJBdHRhY2tYSGl0Qm94ID0gW107XG4gICAgICAgICAgICB0aGlzLnJBdHRhY2tZSGl0Qm94ID0gW107XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJjb25zdCBVdGlsID0ge1xuXG4gICAgYmV0d2Vlbih4LCBtaW4sIG1heCkge1xuICAgICAgICByZXR1cm4geCA+PSBtaW4gJiYgeCA8PSBtYXg7XG4gICAgfSxcbiAgICBjb2xsaXNpb24odW5pdDF4LCB1bml0MXksIHVuaXQxdywgdW5pdDFoLCB1bml0MngsIHVuaXQyeSwgdW5pdDJ3LCB1bml0MmgpIHtcbiAgICAgICAgbGV0IHVuaXQxWEhpdEJveCA9IFt1bml0MXgsIHVuaXQxeCArIHVuaXQxd107XG4gICAgICAgIGxldCB1bml0MVlIaXRCb3ggPSBbdW5pdDF5LCB1bml0MXkgKyB1bml0MWhdO1xuICAgICAgICBsZXQgdW5pdDJYSGl0Qm94ID0gW3VuaXQyeCwgdW5pdDJ4ICsgdW5pdDJ3XTtcbiAgICAgICAgbGV0IHVuaXQyWUhpdEJveCA9IFt1bml0MnksIHVuaXQyeSArIHVuaXQyaF07XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIGxldCB4Q29sbGlzaW9uID0gZmFsc2U7XG4gICAgICAgIGxldCB5Q29sbGlzaW9uID0gZmFsc2U7XG4gICAgICAgIGlmIChVdGlsLmJldHdlZW4odW5pdDFYSGl0Qm94WzBdLCB1bml0MlhIaXRCb3hbMF0sIHVuaXQyWEhpdEJveFsxXSkgfHxcbiAgICAgICAgICAgIFV0aWwuYmV0d2Vlbih1bml0MVhIaXRCb3hbMV0sIHVuaXQyWEhpdEJveFswXSwgdW5pdDJYSGl0Qm94WzFdKSkge1xuICAgICAgICAgICAgICAgIHhDb2xsaXNpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQ09MTElTSU9OWFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICBpZiAoVXRpbC5iZXR3ZWVuKHVuaXQxWUhpdEJveFswXSwgdW5pdDJZSGl0Qm94WzBdLCB1bml0MllIaXRCb3hbMV0pIHx8XG4gICAgICAgICAgICBVdGlsLmJldHdlZW4odW5pdDFZSGl0Qm94WzFdLCB1bml0MllIaXRCb3hbMF0sIHVuaXQyWUhpdEJveFsxXSkpIHtcbiAgICAgICAgICAgICAgICB5Q29sbGlzaW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkNPTExJU0lPTllcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgaWYgKCh4Q29sbGlzaW9uID09PSB0cnVlICYmIHlDb2xsaXNpb24gPT09IHRydWUpKSB7XG4gICAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJDT0xMSVNJT05cIilcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBhdHRhY2tlZChhdHRhY2tUeXBlWCwgYXR0YWNrVHlwZVksIHVuaXR4LCB1bml0eSwgdW5pdHcsIHVuaXRoKSB7XG4gICAgICAgIGxldCB1bml0WEhpdEJveCA9IFt1bml0eCwgdW5pdHggKyB1bml0d107XG4gICAgICAgIGxldCB1bml0WUhpdEJveCA9IFt1bml0eSwgdW5pdHkgKyB1bml0aF07XG4gICAgICAgIGxldCB4QXR0YWNrZWQ7XG4gICAgICAgIGxldCB5QXR0YWNrZWQ7XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIGlmIChVdGlsLmJldHdlZW4oYXR0YWNrVHlwZVhbMF0sIHVuaXRYSGl0Qm94WzBdLCB1bml0WEhpdEJveFsxXSkgfHxcbiAgICAgICAgICAgIFV0aWwuYmV0d2VlbihhdHRhY2tUeXBlWFsxXSwgdW5pdFhIaXRCb3hbMF0sIHVuaXRYSGl0Qm94WzFdKSkge1xuICAgICAgICAgICAgeEF0dGFja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWCBBVFRBQ0tFRFwiKVxuICAgICAgICB9XG4gICAgICAgIGlmIChVdGlsLmJldHdlZW4oYXR0YWNrVHlwZVlbMF0sIHVuaXRZSGl0Qm94WzBdLCB1bml0WUhpdEJveFsxXSkgfHxcbiAgICAgICAgICAgIFV0aWwuYmV0d2VlbihhdHRhY2tUeXBlWVsxXSwgdW5pdFlIaXRCb3hbMF0sIHVuaXRZSGl0Qm94WzFdKSkge1xuICAgICAgICAgICAgeUF0dGFja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGlmICgoeEF0dGFja2VkID09PSB0cnVlICYmIHlBdHRhY2tlZCA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNMSUNFIVwiKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IFV0aWwiXSwic291cmNlUm9vdCI6IiJ9