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
        // if (currentEnemy.y > 650) {
        // console.log("wowowooo")
        // debugger
        // this.enemies.splice(enemyNum, 1)
        // debugger
        // }
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

        if (e.key === "n") {
          _this.mutePage();
        }
      });
      var that = this;
      var checkbox = document.querySelector(".music-checkbox");
      checkbox.addEventListener("change", function (e) {
        if (e.target.checked) {
          that.game.sound = true;

          if (_this.music.paused) {
            _this.music.play();
          }
        } else {
          that.game.sound = false;

          _this.music.pause();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VuZW15LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhc1NwbGFzaCIsImdldEVsZW1lbnRCeUlkIiwid2lkdGgiLCJoZWlnaHQiLCJjYW52YXMiLCJjYW52YXNVSSIsIm5ld0dhbWVWaWV3IiwiR2FtZVZpZXciLCJyZWdpc3RlckV2ZW50cyIsIkVuZW15IiwiY3R4IiwiZW5lbXlUeXBlIiwiaGl0Ym94V2lkdGgiLCJoaXRib3hIZWlnaHQiLCJ0eXBlIiwiZW5lbXlTcHJpdGUiLCJJbWFnZSIsInNyYyIsIngiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ5Iiwic3BlZWQiLCJ0dXJuaW5nIiwiZGlyZWN0aW9uIiwiZnJhbWVZIiwieEhpdEJveCIsInlIaXRCb3giLCJmcmFtZVgiLCJkZWFkIiwiY29uc29sZSIsImxvZyIsIlV0aWwiLCJyZXF1aXJlIiwiR2FtZSIsImhlYWx0aCIsImdhbWVvdmVyIiwiY3R4VUkiLCJnZXRDb250ZXh0IiwiY3R4U3BsYXNoIiwic291bmQiLCJwbGF5ZXIxIiwiUGxheWVyIiwia2V5cyIsInRvcExvb3AiLCJib3R0b21Mb29wIiwiYmFja2dyb3VuZCIsImVuZW1pZXMiLCJmcHNJbnRlcnZhbCIsInN0YXJ0VGltZSIsIm5vdyIsInRoZW4iLCJlbGFwc2VkIiwic2xpY2UiLCJBdWRpbyIsIm9vZiIsInNjb3JlIiwiZHJhd0ltYWdlIiwicGxheWVyU3ByaXRlIiwiY2xlYXJSZWN0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJiZWdpblBhdGgiLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsInJlY3QiLCJzdHJva2UiLCJmb250IiwiZmlsbFRleHQiLCJ0ZXh0QWxpZ24iLCJyYW5kb21OdW0iLCJsZW5ndGgiLCJyYW5kb21FbmVteU51bSIsInB1c2giLCJlbmVteU51bSIsImN1cnJlbnRFbmVteSIsImNvbGxpc2lvbiIsInBsYXkiLCJkcmF3VUkiLCJsZWZ0QXR0YWNrIiwiYXR0YWNrZWQiLCJsQXR0YWNrWEhpdEJveCIsImxBdHRhY2tZSGl0Qm94IiwicmlnaHRBdHRhY2siLCJyQXR0YWNrWEhpdEJveCIsInJBdHRhY2tZSGl0Qm94Iiwic3BsaWNlIiwiYmV0d2VlbiIsInJvdW5kIiwic25hYWtlIiwiZnBzIiwiRGF0ZSIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIiwiZHJhd0JhY2tncm91bmQiLCJoYW5kbGVQbGF5ZXJGcmFtZSIsIm1vdmVQbGF5ZXIiLCJpIiwiZHJhd0VuZW15IiwiZHJhd1BsYXllciIsImdlbmVyYXRlRW5lbXkiLCJjaGVja0dhbWVvdmVyIiwiZ2FtZSIsIm1lbnVLZXlzIiwibXVzaWMiLCJ3aW5kb3ciLCJlIiwia2V5IiwicmVzdGFydCIsIm11dGVQYWdlIiwidGhhdCIsImNoZWNrYm94IiwicXVlcnlTZWxlY3RvciIsInRhcmdldCIsImNoZWNrZWQiLCJwYXVzZWQiLCJwYXVzZSIsImxvb3AiLCJzdGFydEFuaW1hdGluZyIsIm1vdmluZyIsInciLCJzIiwiYSIsImQiLCJzZXRUaW1lb3V0IiwiaGFuZGxlUGxheWVyQXR0YWNrIiwibWluIiwibWF4IiwidW5pdDF4IiwidW5pdDF5IiwidW5pdDF3IiwidW5pdDFoIiwidW5pdDJ4IiwidW5pdDJ5IiwidW5pdDJ3IiwidW5pdDJoIiwidW5pdDFYSGl0Qm94IiwidW5pdDFZSGl0Qm94IiwidW5pdDJYSGl0Qm94IiwidW5pdDJZSGl0Qm94IiwieENvbGxpc2lvbiIsInlDb2xsaXNpb24iLCJhdHRhY2tUeXBlWCIsImF0dGFja1R5cGVZIiwidW5pdHgiLCJ1bml0eSIsInVuaXR3IiwidW5pdGgiLCJ1bml0WEhpdEJveCIsInVuaXRZSGl0Qm94IiwieEF0dGFja2VkIiwieUF0dGFja2VkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVk7QUFDdEQsTUFBTUMsWUFBWSxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBckI7QUFDQUQsY0FBWSxDQUFDRSxLQUFiLEdBQXFCLEdBQXJCO0FBQ0FGLGNBQVksQ0FBQ0csTUFBYixHQUFzQixHQUF0QjtBQUNBLE1BQU1DLE1BQU0sR0FBR04sUUFBUSxDQUFDRyxjQUFULENBQXdCLGFBQXhCLENBQWY7QUFDQUcs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QXhDLEVBQTZDQSxXQUFXLENBQUMsQ0FBRCxDQUF4RCxDQURKLEVBQ2tFO0FBQzlERSxlQUFTLEdBQUcsSUFBWjtBQUNBekgsYUFBTyxDQUFDQyxHQUFSLENBQVksWUFBWjtBQUNIOztBQUNELFFBQUlDLElBQUksQ0FBQ3VELE9BQUwsQ0FBYXlELFdBQVcsQ0FBQyxDQUFELENBQXhCLEVBQTZCTSxXQUFXLENBQUMsQ0FBRCxDQUF4QyxFQUE2Q0EsV0FBVyxDQUFDLENBQUQsQ0FBeEQsS0FDQXRILElBQUksQ0FBQ3VELE9BQUwsQ0FBYXlELFdBQVcsQ0FBQyxDQUFELENBQXhCLEVBQTZCTSxXQUFXLENBQUMsQ0FBRCxDQUF4QyxFQUE2Q0EsV0FBVyxDQUFDLENBQUQsQ0FBeEQsQ0FESixFQUNrRTtBQUM5REUsZUFBUyxHQUFHLElBQVo7QUFFSDs7QUFDRCxRQUFLRCxTQUFTLEtBQUssSUFBZCxJQUFzQkMsU0FBUyxLQUFLLElBQXpDLEVBQWdEO0FBQzVDO0FBQ0ExSCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0EsYUFBTyxJQUFQO0FBQ0gsS0FKRCxNQUtLO0FBQ0QsYUFBTyxLQUFQO0FBQ0g7QUFDSjtBQXhEUSxDQUFiO0FBMERBMEgsTUFBTSxDQUFDQyxPQUFQLEdBQWlCMUgsSUFBakIsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgR2FtZSBmcm9tICcuL3NjcmlwdHMvZ2FtZSdcbmltcG9ydCBHYW1lVmlldyBmcm9tICcuL3NjcmlwdHMvZ2FtZV92aWV3JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNhbnZhc1NwbGFzaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzLXNwbGFzaFwiKTtcbiAgICBjYW52YXNTcGxhc2gud2lkdGggPSA4NDA7XG4gICAgY2FudmFzU3BsYXNoLmhlaWdodCA9IDY1MDtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhcy1nYW1lXCIpO1xuICAgIGNhbnZhcy53aWR0aCA9IDg0MDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gNjUwO1xuICAgIGNvbnN0IGNhbnZhc1VJID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXMtdWlcIik7XG4gICAgY2FudmFzVUkud2lkdGggPSA4NDA7XG4gICAgY2FudmFzVUkuaGVpZ2h0ID0gNjUwO1xuICAgIC8vIGNvbnN0IGdhbWUxID0gbmV3IEdhbWUoY2FudmFzKVxuICAgIGNvbnN0IG5ld0dhbWVWaWV3ID0gbmV3IEdhbWVWaWV3KGNhbnZhcywgY2FudmFzU3BsYXNoLCBjYW52YXNVSSkucmVnaXN0ZXJFdmVudHMoKVxuICAgIC8vIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtdXNpY1wiKTtcbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IGF1ZGlvLnBsYXkoKSwgMzAwMCk7XG59KVxuXG5cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZW15IHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGVuZW15VHlwZSkge1xuICAgICAgICAvLyB0aGlzLnggPSAwOyAgICAgICAvLyBUT0RPIFdpbGwgY2hhbmdlIGJhc2VkIG9uIHRoZSBhcmcgcGFzc2VkIGludG8gY29uc3RydWN0b3JcbiAgICAgICAgLy8gdGhpcy55ID0gMDtcbiAgICAgICAgdGhpcy53aWR0aCA9IDI0MztcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA0ODA7XG4gICAgICAgIHRoaXMuaGl0Ym94V2lkdGggPSA5MDtcbiAgICAgICAgdGhpcy5oaXRib3hIZWlnaHQgPSAxNTA7XG4gICAgICAgIHRoaXMudHlwZSA9IGVuZW15VHlwZSAvLyBUT0RPIFdpbGwgY2hhbmdlIGJhc2VkIG9uIGEgdGhlIGFyZ3VtZW50IHBhc3NlZCBpbnRvIGNvbnN0cnVjdG9yXG4gICAgICAgIHRoaXMuZW5lbXlTcHJpdGUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJzdHVwaWRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW15U3ByaXRlLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL2NhcjEucG5nXCJcbiAgICAgICAgICAgICAgICB0aGlzLnggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNTUwIC0gMTIwKSArIDEyMClcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSAtMTAwO1xuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgPSAzO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImNyYXp5XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVteVNwcml0ZS5zcmMgPSBcIi4vc3JjL2ltYWdlcy9jYXIyLnBuZ1wiXG4gICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDU1MCAtIDEyMCkgKyAxMjApXG4gICAgICAgICAgICAgICAgdGhpcy55ID0gNjUwO1xuICAgICAgICAgICAgICAgIHRoaXMudHVybmluZyA9IDQ7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDY7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidHVydGxlXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVteVNwcml0ZS5zcmMgPSBcIi4vc3JjL2ltYWdlcy90dXJ0bGUucG5nXCJcbiAgICAgICAgICAgICAgICB0aGlzLnggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNTUwIC0gMTIwKSArIDEyMClcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSA2NTA7XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuaW5nID0gNDtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gNjtcbiAgICAgICAgICAgICAgICB0aGlzLndpZHRoID0gNTA7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSA1MztcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwicmlnaHRcIlxuICAgICAgICAgICAgICAgIHRoaXMuZnJhbWVZID0gMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB0aGlzLnhIaXRCb3ggPSBbdGhpcy54LCB0aGlzLnggKyB0aGlzLmhpdGJveFdpZHRoXTtcbiAgICAgICAgdGhpcy55SGl0Qm94ID0gW3RoaXMueSwgdGhpcy55ICsgdGhpcy5oaXRib3hIZWlnaHRdO1xuICAgICAgICAvLyB0aGlzLmR5aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZnJhbWVYID0gMFxuICAgICAgICB0aGlzLmRlYWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzYXlIZWxsbygpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJIZWxsb1wiKVxuICAgIH1cbiAgICAvLyBoYW5kbGVFbmVteUZyYW1lKCkge1xuICAgIC8vICAgICBkZWJ1Z2dlclxuICAgIC8vICAgICBpZiAodGhpcy50eXBlID09PSBcImRhbWFnZWQtY3JhenlcIikge1xuICAgIC8vICAgICAgICAgdGhpcy5mcmFtZVgrPSAwLjFcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAodGhpcy5mcmFtZVggPiA0KSB7XG4gICAgLy8gICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxufSIsImltcG9ydCBFbmVteSBmcm9tIFwiLi9lbmVteVwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmNvbnN0IFV0aWwgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjYW52YXNTcGxhc2gsIGNhbnZhc1VJKSB7XG4gICAgICAgIHRoaXMuaGVhbHRoID0gMTAwMDtcbiAgICAgICAgdGhpcy5nYW1lb3ZlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmN0eFVJID0gY2FudmFzVUkuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMuY3R4U3BsYXNoID0gY2FudmFzU3BsYXNoLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5zb3VuZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBsYXllcjEgPSBuZXcgUGxheWVyKCk7XG4gICAgICAgIHRoaXMud2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgICAgICAgdGhpcy5rZXlzID0gW107XG4gICAgICAgIHRoaXMudG9wTG9vcCA9IC1jYW52YXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmJvdHRvbUxvb3AgPSAwO1xuICAgICAgICB0aGlzLmJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKVxuICAgICAgICB0aGlzLmJhY2tncm91bmQuc3JjID0gXCIuL3NyYy9pbWFnZXMvYmFja2dyb3VuZC0xLnBuZ1wiO1xuICAgICAgICB0aGlzLmVuZW1pZXMgPSBbXTsgLy8gY29udGFpbnMgZW5lbWllcyBjdXJyZW50bHkgb24gc2NyZWVuLCBzaG93biBhcyBlbmVteS50eXBlXG4gICAgICAgIHRoaXMuZnBzSW50ZXJ2YWw7XG4gICAgICAgIHRoaXMuc3RhcnRUaW1lO1xuICAgICAgICB0aGlzLm5vdztcbiAgICAgICAgdGhpcy50aGVuO1xuICAgICAgICB0aGlzLmVsYXBzZWQ7XG4gICAgICAgIHRoaXMuc2xpY2UgPSBuZXcgQXVkaW8oJy4vc3JjL2F1ZGlvL3NsaWNlLm1wMycpXG4gICAgICAgIHRoaXMub29mID0gbmV3IEF1ZGlvKCcuL3NyYy9hdWRpby9vb2YubXAzJylcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIC8vIHRoaXMuZHJhd0JhY2tncm91bmQoKTtcbiAgICAgICAgLy8gdGhpcy5kcmF3UGxheWVyKCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGRyYXdCYWNrZ3JvdW5kKCkge1xuICAgICAgICAvL2JvdHRvbSBoYWxmIG9mIHRoZSBiYWNrZ3JvdW5kXG4gICAgICAgIHRoaXMuY3R4U3BsYXNoLmRyYXdJbWFnZShcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZCwgMCwgMCxcbiAgICAgICAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LFxuICAgICAgICAgICAgMCwgdGhpcy5ib3R0b21Mb29wLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodFxuICAgICAgICApXG4gICAgICAgIHRoaXMuYm90dG9tTG9vcCArPSAxMDtcbiAgICAgICAgaWYgKHRoaXMuYm90dG9tTG9vcCA9PT0gdGhpcy5oZWlnaHQpIHRoaXMuYm90dG9tTG9vcCA9IC10aGlzLmhlaWdodDtcbiAgICAgICAgLy90b3AgaGFsZiBvZiB0aGUgYmFja2dyb3VuZFxuICAgICAgICB0aGlzLmN0eFNwbGFzaC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmQsIDAsIDAsXG4gICAgICAgICAgICB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCxcbiAgICAgICAgICAgIDAsIHRoaXMudG9wTG9vcCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHRcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnRvcExvb3AgKz0gMTA7XG4gICAgICAgIGlmICh0aGlzLnRvcExvb3AgPT09IHRoaXMuaGVpZ2h0KSB0aGlzLnRvcExvb3AgPSAtdGhpcy5oZWlnaHQ7XG4gICAgfVxuXG4gICAgZHJhd1BsYXllcigpIHtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIxLnBsYXllclNwcml0ZSwgdGhpcy5wbGF5ZXIxLndpZHRoICogdGhpcy5wbGF5ZXIxLmZyYW1lWCwgdGhpcy5wbGF5ZXIxLmhlaWdodCAqIHRoaXMucGxheWVyMS5mcmFtZVksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2hlcmUgd2UgY3JvcCBvdXQgdGhlIGltYWdlIGZvciBzcHJpdGVcbiAgICAgICAgICAgIHRoaXMucGxheWVyMS53aWR0aCwgdGhpcy5wbGF5ZXIxLmhlaWdodCwgdGhpcy5wbGF5ZXIxLngsIHRoaXMucGxheWVyMS55LCAgICAvLyB3aGVyZSB0aGUgaW1hZ2Ugd2lsbCBiZSBhbmltYXRlZCBvbiBjYW52YXNcbiAgICAgICAgICAgIHRoaXMucGxheWVyMS53aWR0aCwgdGhpcy5wbGF5ZXIxLmhlaWdodFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGRyYXdVSShoZWFsdGgsIHNjb3JlKSB7XG4gICAgICAgIC8vIGluaXRpYWwgaGVhbHRoXG4gICAgICAgIHRoaXMuY3R4VUkuY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuXG4gICAgICAgIHRoaXMuY3R4VUkuZmlsbFN0eWxlID0gXCJyZWRcIlxuICAgICAgICB0aGlzLmN0eFVJLmZpbGxSZWN0KDEwLCAzMCwgMjUwLCAxMClcblxuICAgICAgICB0aGlzLmN0eFVJLmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eFVJLmxpbmVXaWR0aCA9IFwiM1wiO1xuICAgICAgICB0aGlzLmN0eFVJLnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICB0aGlzLmN0eFVJLnJlY3QoOSwgMjksIDI1MiwgMTIpXG4gICAgICAgIHRoaXMuY3R4VUkuc3Ryb2tlKCk7XG5cbiAgICAgICAgLy8geW91ciBhY3R1YWwgaGVhbHRoXG4gICAgICAgIGlmIChoZWFsdGggPCAoNzAwKSkge1xuICAgICAgICAgICAgdGhpcy5jdHhVSS5maWxsU3R5bGUgPSBcInllbGxvd1wiXG4gICAgICAgICAgICB0aGlzLmN0eFVJLmZpbGxSZWN0KDEwLCAzMCwgaGVhbHRoIC8gNCwgMTApXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN0eFVJLmZpbGxTdHlsZSA9IFwiZ3JlZW5cIlxuICAgICAgICAgICAgdGhpcy5jdHhVSS5maWxsUmVjdCgxMCwgMzAsIGhlYWx0aCAvIDQsIDEwKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGV4dFxuICAgICAgICB0aGlzLmN0eFVJLmZvbnQgPSBcIjQwcHggQVJDQURFQ0xBU1NJQ1wiXG4gICAgICAgIHRoaXMuY3R4VUkuZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICB0aGlzLmN0eFVJLmZpbGxUZXh0KFwiSFBcIiwgMTAsIDI3KVxuXG4gICAgICAgIGlmIChoZWFsdGggPCAxMDApIHtcbiAgICAgICAgICAgIHRoaXMuY3R4VUkuZm9udCA9IFwiNDBweCBBUkNBREVDTEFTU0lDXCJcbiAgICAgICAgICAgIHRoaXMuY3R4VUkuZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4VUkuZmlsbFRleHQoYCR7aGVhbHRofS8gMTAwMGAsIDgwLCAyNylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChoZWFsdGggPCA3MDApIHtcbiAgICAgICAgICAgIHRoaXMuY3R4VUkuZm9udCA9IFwiNDBweCBBUkNBREVDTEFTU0lDXCJcbiAgICAgICAgICAgIHRoaXMuY3R4VUkuZmlsbFN0eWxlID0gXCJ5ZWxsb3dcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4VUkuZmlsbFRleHQoYCR7aGVhbHRofS8gMTAwMGAsIDgwLCAyNylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3R4VUkuZm9udCA9IFwiNDBweCBBUkNBREVDTEFTU0lDXCJcbiAgICAgICAgICAgIHRoaXMuY3R4VUkuZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgdGhpcy5jdHhVSS5maWxsVGV4dChgJHtoZWFsdGh9LyAxMDAwYCwgODAsIDI3KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jdHhVSS5mb250ID0gXCIyNXB4IEFSQ0FERUNMQVNTSUNcIlxuICAgICAgICB0aGlzLmN0eFVJLmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgdGhpcy5jdHhVSS50ZXh0QWxpZ24gPSBcInN0YXJ0XCI7XG4gICAgICAgIHRoaXMuY3R4VUkuZmlsbFRleHQoYCR7c2NvcmV9YCwgNzUwLCAyMClcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUVuZW15KCkge1xuICAgICAgICAvLyBsb2dpYyBmb3Igd2hlbiB0byBnZW5lcmF0ZSBhbiBlbmVteS4gIHdpbGwgcHVzaCBpbnRvIHRoaXMuZW5lbWllc1xuICAgICAgICBjb25zdCByYW5kb21OdW0gPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogNzApKTtcbiAgICAgICAgaWYgKHRoaXMuZW5lbWllcy5sZW5ndGggPCA1ICYmIHJhbmRvbU51bSA9PT0gNSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZW5lcmF0aW5nIGVuZW15XCIpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbUVuZW15TnVtID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDEwMCkpXG4gICAgICAgICAgICBsZXQgZW5lbXlUeXBlXG4gICAgICAgICAgICBpZiAocmFuZG9tRW5lbXlOdW0gPiA4MCkge1xuICAgICAgICAgICAgICAgIGVuZW15VHlwZSA9IFwidHVydGxlXCI7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgaWYgKGVuZW15VHlwZSAhPT0gXCJ0dXJ0bGVcIikge1xuXG4gICAgICAgICAgICAgICAgaWYgKHJhbmRvbUVuZW15TnVtIDw9IDUwKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZW15VHlwZSA9IFwic3R1cGlkXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8geCA+PSBtaW4gJiYgeCA8PSBtYXg7XG4gICAgICAgICAgICAgICAgLy8gZWxzZSBpZiAocmFuZG9tRW5lbXlOdW0gPiAxMCAmJiByYW5kb21FbmVteU51bSA8IDUwICkge1xuICAgICAgICAgICAgICAgIC8vICAgICBlbmVteVR5cGUgPSBcImNyYXp5XCJcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZW15VHlwZSA9IFwiY3JhenlcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVuZW15VHlwZSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVuZW15VHlwZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5lbWllcy5wdXNoKG5ldyBFbmVteSh0aGlzLmN0eCwgZW5lbXlUeXBlKSk7ICAgLy8gVE9ETzogcmFuZG9tbHkgY2hvb3NlIHRoZSB0eXBlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkcmF3RW5lbXkoZW5lbXlOdW0pIHsgICAgICAgICAgIC8vVE9ETzogUkVGQUNUT1IgVE8gQSBTV0lUQ0ggQ0FTRVxuICAgICAgICBsZXQgY3VycmVudEVuZW15ID0gdGhpcy5lbmVtaWVzW2VuZW15TnVtXTtcbiAgICAgICAgLy8gQU5JTUFUSU5HIFRIRSBTVFVQSUQgRU5FTVlcbiAgICAgICAgaWYgKGN1cnJlbnRFbmVteS50eXBlID09PSBcInN0dXBpZFwiKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LmVuZW15U3ByaXRlLCAwLCAwLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS53aWR0aCwgY3VycmVudEVuZW15LmhlaWdodCwgY3VycmVudEVuZW15LnggLCBjdXJyZW50RW5lbXkueSxcbiAgICAgICAgICAgICAgICA5MCwgMTUwXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY3VycmVudEVuZW15LnkgKz0gY3VycmVudEVuZW15LnNwZWVkO1xuICAgICAgICAgICAgaWYgKFV0aWwuY29sbGlzaW9uKHRoaXMucGxheWVyMS54ICsgNzQsIHRoaXMucGxheWVyMS55ICsgMTYsIDM4LCA4MCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnksIGN1cnJlbnRFbmVteS5oaXRib3hXaWR0aCwgY3VycmVudEVuZW15LmhpdGJveEhlaWdodCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFsdGggLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc291bmQpIHRoaXMub29mLnBsYXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdVSSh0aGlzLmhlYWx0aCwgdGhpcy5zY29yZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaGVhbHRoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIxLmxlZnRBdHRhY2spIHtcbiAgICAgICAgICAgICAgICBpZiAoVXRpbC5hdHRhY2tlZCh0aGlzLnBsYXllcjEubEF0dGFja1hIaXRCb3gsIHRoaXMucGxheWVyMS5sQXR0YWNrWUhpdEJveCxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LngsIGN1cnJlbnRFbmVteS55LCBjdXJyZW50RW5lbXkuaGl0Ym94V2lkdGgsIGN1cnJlbnRFbmVteS5oaXRib3hIZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNvdW5kKSB0aGlzLnNsaWNlLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS50eXBlID0gXCJkYW1hZ2VkLXN0dXBpZFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllcjEucmlnaHRBdHRhY2spIHtcbiAgICAgICAgICAgICAgICBpZiAoVXRpbC5hdHRhY2tlZCh0aGlzLnBsYXllcjEuckF0dGFja1hIaXRCb3gsIHRoaXMucGxheWVyMS5yQXR0YWNrWUhpdEJveCxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LngsIGN1cnJlbnRFbmVteS55LCBjdXJyZW50RW5lbXkuaGl0Ym94V2lkdGgsIGN1cnJlbnRFbmVteS5oaXRib3hIZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNvdW5kKSB0aGlzLnNsaWNlLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS50eXBlID0gXCJkYW1hZ2VkLXN0dXBpZFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjdXJyZW50RW5lbXkueSA+IHRoaXMuaGVpZ2h0ICYmIGN1cnJlbnRFbmVteS50eXBlID09PVwic3R1cGlkXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW1pZXMuc3BsaWNlKGVuZW15TnVtLCAxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9BTklNQVRJTkcgVEhFIENSQVpZIEVORU1ZXG4gICAgICAgIGlmIChjdXJyZW50RW5lbXkudHlwZSA9PT0gXCJjcmF6eVwiKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LmVuZW15U3ByaXRlLCAwLCAwLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS53aWR0aCwgY3VycmVudEVuZW15LmhlaWdodCwgY3VycmVudEVuZW15LngsIGN1cnJlbnRFbmVteS55LFxuICAgICAgICAgICAgICAgIDkwLCAxNTBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIxLnggKyAyMCAgPiBjdXJyZW50RW5lbXkueCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS54ICs9IGN1cnJlbnRFbmVteS50dXJuaW5nO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS55IC09IGN1cnJlbnRFbmVteS5zcGVlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKFV0aWwuYmV0d2Vlbih0aGlzLnBsYXllcjEueCArIDIwLCBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnggKyAyMCkpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueSAtPSAxMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS54IC09IGN1cnJlbnRFbmVteS50dXJuaW5nO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS55IC09IGN1cnJlbnRFbmVteS5zcGVlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChVdGlsLmNvbGxpc2lvbih0aGlzLnBsYXllcjEueCArIDc0LCB0aGlzLnBsYXllcjEueSArIDE2LCAzOCwgODAsXG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LngsIGN1cnJlbnRFbmVteS55LCBjdXJyZW50RW5lbXkuaGl0Ym94V2lkdGgsIGN1cnJlbnRFbmVteS5oaXRib3hIZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhbHRoIC09IDU7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc291bmQpIHRoaXMub29mLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3VUkodGhpcy5oZWFsdGgsdGhpcy5zY29yZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyMS5sZWZ0QXR0YWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKFV0aWwuYXR0YWNrZWQodGhpcy5wbGF5ZXIxLmxBdHRhY2tYSGl0Qm94LCB0aGlzLnBsYXllcjEubEF0dGFja1lIaXRCb3gsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSwgY3VycmVudEVuZW15LmhpdGJveFdpZHRoLCBjdXJyZW50RW5lbXkuaGl0Ym94SGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zb3VuZCkgdGhpcy5zbGljZS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkudHlwZSA9IFwiZGFtYWdlZC1jcmF6eVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyMS5yaWdodEF0dGFjaykge1xuICAgICAgICAgICAgICAgIGlmIChVdGlsLmF0dGFja2VkKHRoaXMucGxheWVyMS5yQXR0YWNrWEhpdEJveCwgdGhpcy5wbGF5ZXIxLnJBdHRhY2tZSGl0Qm94LFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnksIGN1cnJlbnRFbmVteS5oaXRib3hXaWR0aCwgY3VycmVudEVuZW15LmhpdGJveEhlaWdodCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc291bmQpIHRoaXMuc2xpY2UucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LnR5cGUgPSBcImRhbWFnZWQtY3JhenlcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY3VycmVudEVuZW15LnkgPCAtMTUwICYmIGN1cnJlbnRFbmVteS50eXBlID09PSBcImNyYXp5XCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW1pZXMuc3BsaWNlKGVuZW15TnVtLCAxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTUlDSEFFTEFOR0VMTyEhIVxuICAgICAgICBpZiAoY3VycmVudEVuZW15LnR5cGUgPT09IFwidHVydGxlXCIpIHtcbiAgICAgICAgICAgIC8vIGlmIChjdXJyZW50RW5lbXkueSA+IDY1MCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwid293b3dvb29cIilcbiAgICAgICAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZW5lbWllcy5zcGxpY2UoZW5lbXlOdW0sIDEpXG4gICAgICAgICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIHN3aXRjaCAoY3VycmVudEVuZW15LmRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkuZW5lbXlTcHJpdGUsIGN1cnJlbnRFbmVteS53aWR0aCAqIGN1cnJlbnRFbmVteS5mcmFtZVgsIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkud2lkdGgsIGN1cnJlbnRFbmVteS5oZWlnaHQsIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDc1LCA3NVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueCArPSAxMjtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LnkgLT0gNDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LmVuZW15U3ByaXRlLCBjdXJyZW50RW5lbXkud2lkdGggKiBjdXJyZW50RW5lbXkuZnJhbWVYLCAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LndpZHRoLCBjdXJyZW50RW5lbXkuaGVpZ2h0LCBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnksXG4gICAgICAgICAgICAgICAgICAgICAgICA3NSwgNzVcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LnggLT0gMTI7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS55IC09IDQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJkb3duXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS5lbmVteVNwcml0ZSwgNDgsIDU1LFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LndpZHRoLCBjdXJyZW50RW5lbXkuaGVpZ2h0LCBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnksXG4gICAgICAgICAgICAgICAgICAgICAgICA3NSwgMTU0XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS55ICs9IDY7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50RW5lbXkuZnJhbWVYIDwgMSkgY3VycmVudEVuZW15LmZyYW1lWCArPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiAoY3VycmVudEVuZW15LmRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyBpZiAoY3VycmVudEVuZW15LmRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBpZiAoY3VycmVudEVuZW15LnggPD0gODApIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkuZnJhbWVYID0gMDtcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkuZGlyZWN0aW9uID0gXCJyaWdodFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGN1cnJlbnRFbmVteS54ID49IDU4MCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS5mcmFtZVggPSAxO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS5kaXJlY3Rpb24gPSBcImxlZnRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjdXJyZW50RW5lbXkueSA8PSA1MCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS5kaXJlY3Rpb24gPSBcImRvd25cIlxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS53aWR0aCA9IDQxO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS5oZWlnaHQgPSA4NjtcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkuZnJhbWVYID0gMDtcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkuZnJhbWVZID0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFV0aWwuY29sbGlzaW9uKHRoaXMucGxheWVyMS54ICsgNzQsIHRoaXMucGxheWVyMS55ICsgMTYsIDM4LCA4MCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnksIDUwLCA1MykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWx0aCAtPSAxMDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zb3VuZCkgdGhpcy5vb2YucGxheSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhd1VJKHRoaXMuaGVhbHRoLCB0aGlzLnNjb3JlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGN1cnJlbnRFbmVteS55ID4gNjUwKSB7IC8vIDwtLVRISVMgU0hPVUxEIFdPUktcbiAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnNwbGljZShlbmVteU51bSwgMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERBTUFHRUQgRU5FTUlFU1xuICAgICBcbiAgICAgICAgaWYgKGN1cnJlbnRFbmVteS50eXBlID09PSBcImRhbWFnZWQtc3R1cGlkXCIpIHtcblxuICAgICAgICAgICAgY3VycmVudEVuZW15LmVuZW15U3ByaXRlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBjdXJyZW50RW5lbXkuZW5lbXlTcHJpdGUuc3JjID0gXCIuL3NyYy9pbWFnZXMvY2FyMS1keWluZy5wbmdcIlxuICBcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkuZW5lbXlTcHJpdGUsIE1hdGgucm91bmQoY3VycmVudEVuZW15LmZyYW1lWCkgKiBjdXJyZW50RW5lbXkud2lkdGgsIDAsXG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LndpZHRoLCBjdXJyZW50RW5lbXkuaGVpZ2h0LCBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnksICAgIC8vVE9ETyBmcmFtZXNzc1xuICAgICAgICAgICAgICAgIDkwLCAxNTBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjdXJyZW50RW5lbXkueSArPSA0O1xuICAgICAgICAgICAgY3VycmVudEVuZW15LmZyYW1lWCArPSAwLjFcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGN1cnJlbnRFbmVteS5mcmFtZVggPiA0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnNwbGljZShlbmVteU51bSwgMSlcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3JlICs9IDEwMFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRFbmVteS50eXBlID09PSBcImRhbWFnZWQtY3JhenlcIikge1xuXG4gICAgICAgICAgICBjdXJyZW50RW5lbXkuZW5lbXlTcHJpdGUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGN1cnJlbnRFbmVteS5lbmVteVNwcml0ZS5zcmMgPSBcIi4vc3JjL2ltYWdlcy9jYXIyLWR5aW5nLnBuZ1wiXG5cbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkuZW5lbXlTcHJpdGUsIE1hdGgucm91bmQoY3VycmVudEVuZW15LmZyYW1lWCkgKiBjdXJyZW50RW5lbXkud2lkdGgsIDAsXG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LndpZHRoLCBjdXJyZW50RW5lbXkuaGVpZ2h0LCBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnksICAgIC8vVE9ETyBmcmFtZXNzc1xuICAgICAgICAgICAgICAgIDkwLCAxNTBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjdXJyZW50RW5lbXkueSArPSA0O1xuICAgICAgICAgICAgY3VycmVudEVuZW15LmZyYW1lWCArPSAwLjFcbiAgICAgICAgICAgIGlmIChjdXJyZW50RW5lbXkuZnJhbWVYID4gNCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5lbWllcy5zcGxpY2UoZW5lbXlOdW0sIDEpXG4gICAgICAgICAgICAgICAgdGhpcy5zY29yZSArPSA1MDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGVja0dhbWVvdmVyKCkge1xuICAgICAgICBpZiAodGhpcy5oZWFsdGggPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lb3ZlciA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjgwcHggQVJDQURFQ0xBU1NJQ1wiXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkdBTUUgT1ZFUlwiLCAyNDUsIDMwMClcblxuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjBweCBBUkNBREVDTEFTU0lDXCJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGBTQ09SRTogJHt0aGlzLnNjb3JlfWAgLCAyNDUsIDM1MClcblxuICAgICAgICAgICAgaWYgKHRoaXMuc2NvcmUgPD0gMTAwMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyMHB4IEFSQ0FERUNMQVNTSUNcIlxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChgUkFOSzogTk9PQmAsIDUwMCwgMzUwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zY29yZSA8PSAyMDAwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjIwcHggQVJDQURFQ0xBU1NJQ1wiXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGBSQU5LOiBUV0lOS0xFICBUT0VTYCwgNTAwLCAzNTApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNjb3JlIDw9IDUwMDAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjBweCBBUkNBREVDTEFTU0lDXCJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoYFJBTks6IEZJTklTSEVEIFNUUk9ORyFgLCA1MDAsIDM1MClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiNDBweCBBUkNBREVDTEFTU0lDXCJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiUFJFU1MgIEVOVEVSICBUTyAgUkVTVEFSVFwiLCAyMDAsIDQwMClcblxuICAgICAgICAgICAgY29uc3Qgc25hYWtlID0gbmV3IEF1ZGlvKCcuL3NyYy9hdWRpby9HYW1lb3Zlci5tcDMnKVxuICAgICAgICAgICAgaWYgKHRoaXMuc291bmQpIHNuYWFrZS5wbGF5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydEFuaW1hdGluZyhmcHMpIHtcbiAgICAgICAgdGhpcy5mcHNJbnRlcnZhbCA9IDEwMDAgLyBmcHM7XG4gICAgICAgIHRoaXMudGhlbiA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gdGhpcy50aGVuO1xuICAgICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICB9XG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLm5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMubm93IC0gdGhpcy50aGVuO1xuICAgICAgICBpZiAodGhpcy5lbGFwc2VkID4gdGhpcy5mcHNJbnRlcnZhbCkge1xuICAgICAgICAgICAgdGhpcy50aGVuID0gdGhpcy5ub3cgLSAodGhpcy5lbGFwc2VkICUgdGhpcy5mcHNJbnRlcnZhbCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuZHJhd1VJKHRoaXMuaGVhbHRoLCB0aGlzLnNjb3JlKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIXRoaXMuZ2FtZW92ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZCgpO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyMS5oYW5kbGVQbGF5ZXJGcmFtZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyMS5tb3ZlUGxheWVyKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVuZW1pZXMubGVuZ3RoOyBpKysgKSB0aGlzLmRyYXdFbmVteShpKVxuICAgICAgICAgICAgICAgIHRoaXMuc2NvcmUgKz0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdQbGF5ZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlRW5lbXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrR2FtZW92ZXIoKTtcbiAgICAgICAgICAgICAgICAvLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gc3RhcnRBbmltYXRpbmcoZnBzKSB7XG4gICAgLy8gICAgIHRoaXMuZnBzSW50ZXJ2YWwgPSAxMDAwIC8gZnBzO1xuICAgIC8vICAgICB0aGlzLnRoZW4gPSBEYXRlLm5vdygpO1xuICAgIC8vICAgICB0aGlzLnN0YXJ0VGltZSA9IHRoaXMudGhlbjtcbiAgICAvLyAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgLy8gfVxuICAgIC8vIGFuaW1hdGUoKSB7XG4gICAgLy8gICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgLy8gICAgIHRoaXMubm93ID0gRGF0ZS5ub3coKTtcbiAgICAvLyAgICAgdGhpcy5lbGFwc2VkID0gdGhpcy5ub3cgLSB0aGlzLnRoZW47XG4gICAgLy8gICAgIGlmICh0aGlzLmVsYXBzZWQgPiB0aGlzLmZwc0ludGVydmFsKSB7XG4gICAgLy8gICAgICAgICB0aGlzLnRoZW4gPSB0aGlzLm5vdyAtICh0aGlzLmVsYXBzZWQgJSB0aGlzLmZwc0ludGVydmFsKTtcbiAgICAvLyAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICAvLyAgICAgICAgIHRoaXMuZHJhd0JhY2tncm91bmQoKTtcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLmVuZW1pZXNbMF0pIHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmRyYXdFbmVteSgwKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIGlmICh0aGlzLmVuZW1pZXNbMV0pIHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmRyYXdFbmVteSgxKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIGlmICh0aGlzLmVuZW1pZXNbMl0pIHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmRyYXdFbmVteSgyKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIGlmICh0aGlzLmVuZW1pZXNbM10pIHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmRyYXdFbmVteSgzKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIGlmICh0aGlzLmVuZW1pZXNbNF0pIHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmRyYXdFbmVteSg0KTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIHRoaXMuZHJhd1BsYXllcigpO1xuICAgIC8vICAgICAgICAgdGhpcy5wbGF5ZXIxLm1vdmVQbGF5ZXIoKTtcbiAgICAvLyAgICAgICAgIHRoaXMucGxheWVyMS5oYW5kbGVQbGF5ZXJGcmFtZSgpO1xuICAgIC8vICAgICAgICAgdGhpcy5nZW5lcmF0ZUVuZW15KCk7XG4gICAgLy8gICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxufVxuXG4iLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGNhbnZhc1NwbGFzaCwgY2FudmFzVUkpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gbmV3IEdhbWUoY2FudmFzLCBjYW52YXNTcGxhc2gsIGNhbnZhc1VJKVxuICAgICAgICB0aGlzLmN0eFNwbGFzaCA9IGNhbnZhc1NwbGFzaC5nZXRDb250ZXh0KFwiMmRcIilcbiAgICAgICAgdGhpcy53aWR0aCA9IGNhbnZhc1NwbGFzaC53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBjYW52YXNTcGxhc2guaGVpZ2h0O1xuICAgICAgICB0aGlzLnRvcExvb3AgPSAtY2FudmFzU3BsYXNoLmhlaWdodDtcbiAgICAgICAgdGhpcy5ib3R0b21Mb29wID0gMDtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gbmV3IEltYWdlKClcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL2JhY2tncm91bmQtMS5wbmdcIjtcbiAgICAgICAgLy8gdGhpcy5zb3VuZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1lbnVLZXlzID0gW107XG4gICAgICAgIHRoaXMubXVzaWM7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcbiAgICB9XG4gICAgXG4gICAgcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3RhcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJuXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm11dGVQYWdlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSlcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXVzaWMtY2hlY2tib3hcIik7XG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGlmKGUudGFyZ2V0LmNoZWNrZWQpIHtcblxuICAgICAgICAgICAgICAgIHRoYXQuZ2FtZS5zb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5tdXNpYy5wYXVzZWQpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm11c2ljLnBsYXkoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoYXQuZ2FtZS5zb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm11c2ljLnBhdXNlKCk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG5cbiAgICBkcmF3U3RhdGljQmFja2dyb3VuZCgpIHtcbiAgICAgICAgdGhpcy5jdHhTcGxhc2guZHJhd0ltYWdlKFxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLCAwLCAwLFxuICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICAwLCB0aGlzLmJvdHRvbUxvb3AsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0XG4gICAgICAgIClcbiAgICB9XG5cbiAgICAvLyBzdGFydCgpIHtcbiAgICAvLyAgICAgdGhpcy5tdXNpYy5sb29wID0gdHJ1ZTtcbiAgICAvLyAgICAgdGhpcy5tdXNpYy5wbGF5KCk7XG4gICAgLy8gICAgIHRoaXMuZ2FtZS5zdGFydEFuaW1hdGluZyg1MCk7XG4gICAgLy8gfVxuXG4gICAgcmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5nYW1lLmdhbWVvdmVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ2FtZS5oZWFsdGggPSAxMDAwO1xuICAgICAgICB0aGlzLmdhbWUuc2NvcmUgPSAwO1xuICAgICAgICB0aGlzLmdhbWUuZW5lbWllcyA9IFtdO1xuICAgICAgICB0aGlzLmdhbWUucGxheWVyMS54ID0gMzI5O1xuICAgICAgICB0aGlzLmdhbWUucGxheWVyMS55ID0gMzQ0O1xuICAgICAgICAvLyB0aGlzLnN0YXJ0QW5pbWF0aW5nKDQ1KTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm11c2ljID09PSBcInVuZGVmaW5lZFwiKSB0aGlzLm11c2ljID0gbmV3IEF1ZGlvKFwiLi9zcmMvYXVkaW8vYmlrZV9jaGFzZS5tcDNcIilcbiAgICAgICAgaWYodGhpcy5nYW1lLnNvdW5kICYmIHRoaXMubXVzaWMucGF1c2VkKSB7XG4gICAgICAgICAgICB0aGlzLm11c2ljLmxvb3AgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5tdXNpYy5wbGF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nYW1lLnN0YXJ0QW5pbWF0aW5nKDUwKTtcbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnggPSAzMjk7XG4gICAgICAgIHRoaXMueSA9IDM0NDtcbiAgICAgICAgdGhpcy53aWR0aCA9IDE4NztcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxMzA7XG4gICAgICAgIHRoaXMueEhpdEJveCA9IFt0aGlzLngsIHRoaXMueCArIHRoaXMud2lkdGhdO1xuICAgICAgICB0aGlzLnlIaXRCb3ggPSBbdGhpcy55LCB0aGlzLnkgK3RoaXMuaGVpZ2h0XTtcbiAgICAgICAgdGhpcy5mcmFtZVggPSAwO1xuICAgICAgICB0aGlzLmZyYW1lWSA9IDA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAxMDtcbiAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmxlZnRBdHRhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yaWdodEF0dGFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxBdHRhY2tYSGl0Qm94O1xuICAgICAgICB0aGlzLmxBdHRhY2tZSGl0Qm94O1xuICAgICAgICB0aGlzLnJBdHRhY2tYSGl0Qm94O1xuICAgICAgICB0aGlzLnJBdHRhY2tZSGl0Qm94O1xuICAgICAgICB0aGlzLnBsYXllclNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcIi4vc3JjL2ltYWdlcy9iaWtlMS5wbmdcIjtcbiAgICAgICAgdGhpcy5rZXlzID0gW107XG4gICAgICAgIC8vIHRoaXMuYXR0YWNrUmVhZHlcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cygpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMua2V5c1tlLmtleV0gPSB0cnVlO1xuICAgICAgICB9KVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5rZXlzW2Uua2V5XTtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgICAgICAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0QXR0YWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucmlnaHRBdHRhY2sgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG5cbiAgICB9XG4gXG4gICAgXG4gICAgbW92ZVBsYXllcigpIHtcbiAgICAgICAgaWYgKHRoaXMua2V5cy53ICYmIHRoaXMueSA+IDApIHsgICAgICAgICAvLyBtb3ZpbmcgdXBcbiAgICAgICAgICAgIHRoaXMueSAtPSB0aGlzLnNwZWVkOyAgICAgICAgICAgLy8gaW5jcmVhc2Ugb3VyIHBsYXlzZXIncyB5IHBvcyBieSBzcGVlZFxuICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmtleXMucyAmJiB0aGlzLnkgPCA1NTApIHsgICAgLy8gbW92aW5nIGRvd25cbiAgICAgICAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmtleXMuYSAmJiB0aGlzLnggPiA4MCkge1xuICAgICAgICAgICAgICAgIHRoaXMueCAtPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5rZXlzLmQgJiYgdGhpcy54IDwgNTgwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxlZnRBdHRhY2spIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVYID0gMDtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVZID0gMjtcbiAgICAgICAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB0aGlzLmxlZnRBdHRhY2sgPSB0cnVlO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxlZnRBdHRhY2sgPSBmYWxzZSwgNDAwKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJpZ2h0QXR0YWNrKSB7XG4gICAgICAgICAgICB0aGlzLmZyYW1lWCA9IDA7XG4gICAgICAgICAgICB0aGlzLmZyYW1lWSA9IDE7XG4gICAgICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gdGhpcy5yaWdodEF0dGFjayA9IHRydWU7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmlnaHRBdHRhY2sgPSBmYWxzZSwgNDAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlUGxheWVyRnJhbWUoKSB7XG4gICAgICAgIGlmICh0aGlzLm1vdmluZyAmJiAoIXRoaXMubGVmdEF0dGFjayB8fCAhdGhpcy5yaWdodEF0dGFjaykpIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVYKytcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMucmlnaHRBdHRhY2sgJiYgdGhpcy5mcmFtZVkgPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVZID0gMDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUiBBVFRBQ0tcIilcbiAgICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMubGVmdEF0dGFjayAmJiB0aGlzLmZyYW1lWSA9PT0gMikge1xuICAgICAgICAgICAgdGhpcy5mcmFtZVkgPSAwO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMIEFUVEFDS1wiKVxuICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZnJhbWVYID49IDIpe1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coKVxuICAgICAgICAgICAgdGhpcy5mcmFtZVggPSAwXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVQbGF5ZXJBdHRhY2soKTtcbiAgICB9XG4vL1xuICAgIGhhbmRsZVBsYXllckF0dGFjaygpIHtcbiAgICAgICAgaWYgKHRoaXMubGVmdEF0dGFjaykge1xuICAgICAgICAgICAgdGhpcy5sQXR0YWNrWEhpdEJveCA9IFt0aGlzLnggKyAxMCwgdGhpcy54ICsgNjBdO1xuICAgICAgICAgICAgdGhpcy5sQXR0YWNrWUhpdEJveCA9IFt0aGlzLnksIHRoaXMueSArIDc5XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yaWdodEF0dGFjaykge1xuICAgICAgICAgICAgdGhpcy5yQXR0YWNrWEhpdEJveCA9IFt0aGlzLnggKyAxNTAsIHRoaXMueCArIDE1MCArIDMwXTtcbiAgICAgICAgICAgIHRoaXMuckF0dGFja1lIaXRCb3ggPSBbdGhpcy55LCB0aGlzLnkgKyA3OV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmxlZnRBdHRhY2spIHtcbiAgICAgICAgICAgIHRoaXMubEF0dGFja1hIaXRCb3ggPSBbXTtcbiAgICAgICAgICAgIHRoaXMubEF0dGFja1lIaXRCb3ggPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMucmlnaHRBdHRhY2spIHtcbiAgICAgICAgICAgIHRoaXMuckF0dGFja1hIaXRCb3ggPSBbXTtcbiAgICAgICAgICAgIHRoaXMuckF0dGFja1lIaXRCb3ggPSBbXTtcbiAgICAgICAgfVxuICAgIH1cblxufSIsImNvbnN0IFV0aWwgPSB7XG5cbiAgICBiZXR3ZWVuKHgsIG1pbiwgbWF4KSB7XG4gICAgICAgIHJldHVybiB4ID49IG1pbiAmJiB4IDw9IG1heDtcbiAgICB9LFxuICAgIGNvbGxpc2lvbih1bml0MXgsIHVuaXQxeSwgdW5pdDF3LCB1bml0MWgsIHVuaXQyeCwgdW5pdDJ5LCB1bml0MncsIHVuaXQyaCkge1xuICAgICAgICBsZXQgdW5pdDFYSGl0Qm94ID0gW3VuaXQxeCwgdW5pdDF4ICsgdW5pdDF3XTtcbiAgICAgICAgbGV0IHVuaXQxWUhpdEJveCA9IFt1bml0MXksIHVuaXQxeSArIHVuaXQxaF07XG4gICAgICAgIGxldCB1bml0MlhIaXRCb3ggPSBbdW5pdDJ4LCB1bml0MnggKyB1bml0MnddO1xuICAgICAgICBsZXQgdW5pdDJZSGl0Qm94ID0gW3VuaXQyeSwgdW5pdDJ5ICsgdW5pdDJoXTtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgbGV0IHhDb2xsaXNpb24gPSBmYWxzZTtcbiAgICAgICAgbGV0IHlDb2xsaXNpb24gPSBmYWxzZTtcbiAgICAgICAgaWYgKFV0aWwuYmV0d2Vlbih1bml0MVhIaXRCb3hbMF0sIHVuaXQyWEhpdEJveFswXSwgdW5pdDJYSGl0Qm94WzFdKSB8fFxuICAgICAgICAgICAgVXRpbC5iZXR3ZWVuKHVuaXQxWEhpdEJveFsxXSwgdW5pdDJYSGl0Qm94WzBdLCB1bml0MlhIaXRCb3hbMV0pKSB7XG4gICAgICAgICAgICAgICAgeENvbGxpc2lvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJDT0xMSVNJT05YXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIGlmIChVdGlsLmJldHdlZW4odW5pdDFZSGl0Qm94WzBdLCB1bml0MllIaXRCb3hbMF0sIHVuaXQyWUhpdEJveFsxXSkgfHxcbiAgICAgICAgICAgIFV0aWwuYmV0d2Vlbih1bml0MVlIaXRCb3hbMV0sIHVuaXQyWUhpdEJveFswXSwgdW5pdDJZSGl0Qm94WzFdKSkge1xuICAgICAgICAgICAgICAgIHlDb2xsaXNpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQ09MTElTSU9OWVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICBpZiAoKHhDb2xsaXNpb24gPT09IHRydWUgJiYgeUNvbGxpc2lvbiA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkNPTExJU0lPTlwiKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGF0dGFja2VkKGF0dGFja1R5cGVYLCBhdHRhY2tUeXBlWSwgdW5pdHgsIHVuaXR5LCB1bml0dywgdW5pdGgpIHtcbiAgICAgICAgbGV0IHVuaXRYSGl0Qm94ID0gW3VuaXR4LCB1bml0eCArIHVuaXR3XTtcbiAgICAgICAgbGV0IHVuaXRZSGl0Qm94ID0gW3VuaXR5LCB1bml0eSArIHVuaXRoXTtcbiAgICAgICAgbGV0IHhBdHRhY2tlZDtcbiAgICAgICAgbGV0IHlBdHRhY2tlZDtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgaWYgKFV0aWwuYmV0d2VlbihhdHRhY2tUeXBlWFswXSwgdW5pdFhIaXRCb3hbMF0sIHVuaXRYSGl0Qm94WzFdKSB8fFxuICAgICAgICAgICAgVXRpbC5iZXR3ZWVuKGF0dGFja1R5cGVYWzFdLCB1bml0WEhpdEJveFswXSwgdW5pdFhIaXRCb3hbMV0pKSB7XG4gICAgICAgICAgICB4QXR0YWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJYIEFUVEFDS0VEXCIpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKFV0aWwuYmV0d2VlbihhdHRhY2tUeXBlWVswXSwgdW5pdFlIaXRCb3hbMF0sIHVuaXRZSGl0Qm94WzFdKSB8fFxuICAgICAgICAgICAgVXRpbC5iZXR3ZWVuKGF0dGFja1R5cGVZWzFdLCB1bml0WUhpdEJveFswXSwgdW5pdFlIaXRCb3hbMV0pKSB7XG4gICAgICAgICAgICB5QXR0YWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh4QXR0YWNrZWQgPT09IHRydWUgJiYgeUF0dGFja2VkID09PSB0cnVlKSkge1xuICAgICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU0xJQ0UhXCIpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gVXRpbCJdLCJzb3VyY2VSb290IjoiIn0=