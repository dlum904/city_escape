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

        if (randomEnemyNum >= 40) {
          enemyType = "stupid";
        } else {
          enemyType = "crazy";
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
    this.moving = false;
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
        _this.moving = false;
        if (e.key === "ArrowLeft") _this.leftAttack = true;
        if (e.key === "ArrowRight") _this.rightAttack = true;
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
      }

      if (!this.leftAttack && this.frameY === 2) {
        this.frameY = 0;
        console.log("L ATTACK");
      } else if (this.frameX >= 2) {
        // console.log()
        this.frameX = 0;
      }

      this.handlePlayerAttack();
    }
  }, {
    key: "handlePlayerAttack",
    value: function handlePlayerAttack() {
      if (this.leftAttack) {
        this.lAttackXHitBox = [this.x + 70, this.x + 70 - 30];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VuZW15LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhc1NwbGFzaCIsImdldEVsZW1lbnRCeUlkIiwid2lkdGgiLCJoZWlnaHQiLCJjYW52YXMiLCJjYW52YXNVSSIsIm5ld0dhbWVWaWV3IiwiR2FtZVZpZXciLCJyZWdpc3RlckV2ZW50cyIsImF1ZGlvIiwic2V0VGltZW91dCIsInBsYXkiLCJFbmVteSIsImN0eCIsImVuZW15VHlwZSIsImhpdGJveFdpZHRoIiwiaGl0Ym94SGVpZ2h0IiwidHlwZSIsImVuZW15U3ByaXRlIiwiSW1hZ2UiLCJzcmMiLCJ4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwieSIsInNwZWVkIiwidHVybmluZyIsInhIaXRCb3giLCJ5SGl0Qm94IiwiZnJhbWVYIiwiZGVhZCIsImNvbnNvbGUiLCJsb2ciLCJVdGlsIiwicmVxdWlyZSIsIkdhbWUiLCJoZWFsdGgiLCJnYW1lb3ZlciIsImN0eFVJIiwiZ2V0Q29udGV4dCIsImN0eFNwbGFzaCIsInBsYXllcjEiLCJQbGF5ZXIiLCJrZXlzIiwidG9wTG9vcCIsImJvdHRvbUxvb3AiLCJiYWNrZ3JvdW5kIiwiZW5lbWllcyIsImZwc0ludGVydmFsIiwic3RhcnRUaW1lIiwibm93IiwidGhlbiIsImVsYXBzZWQiLCJzbGljZSIsIkF1ZGlvIiwib29mIiwic2NvcmUiLCJkcmF3SW1hZ2UiLCJwbGF5ZXJTcHJpdGUiLCJmcmFtZVkiLCJjbGVhclJlY3QiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImJlZ2luUGF0aCIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwicmVjdCIsInN0cm9rZSIsImZvbnQiLCJmaWxsVGV4dCIsInRleHRBbGlnbiIsInJhbmRvbU51bSIsImxlbmd0aCIsInJhbmRvbUVuZW15TnVtIiwicHVzaCIsImVuZW15TnVtIiwiY3VycmVudEVuZW15IiwiY29sbGlzaW9uIiwiZHJhd1VJIiwibGVmdEF0dGFjayIsImF0dGFja2VkIiwibEF0dGFja1hIaXRCb3giLCJsQXR0YWNrWUhpdEJveCIsInJpZ2h0QXR0YWNrIiwickF0dGFja1hIaXRCb3giLCJyQXR0YWNrWUhpdEJveCIsInNwbGljZSIsImJldHdlZW4iLCJyb3VuZCIsInNuYWFrZSIsImZwcyIsIkRhdGUiLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCIsImRyYXdCYWNrZ3JvdW5kIiwiaGFuZGxlUGxheWVyRnJhbWUiLCJtb3ZlUGxheWVyIiwiaSIsImRyYXdFbmVteSIsImRyYXdQbGF5ZXIiLCJnZW5lcmF0ZUVuZW15IiwiY2hlY2tHYW1lb3ZlciIsImdhbWUiLCJtdXRlZCIsIm1lbnVLZXlzIiwid2luZG93IiwiZSIsImtleSIsInJlc3RhcnQiLCJ0b2dnbGVNdXRlT24iLCJ0b2dnbGVNdXRlT2ZmIiwicGF1c2UiLCJzdGFydEFuaW1hdGluZyIsIm1vdmluZyIsInciLCJzIiwiYSIsImQiLCJoYW5kbGVQbGF5ZXJBdHRhY2siLCJtaW4iLCJtYXgiLCJ1bml0MXgiLCJ1bml0MXkiLCJ1bml0MXciLCJ1bml0MWgiLCJ1bml0MngiLCJ1bml0MnkiLCJ1bml0MnciLCJ1bml0MmgiLCJ1bml0MVhIaXRCb3giLCJ1bml0MVlIaXRCb3giLCJ1bml0MlhIaXRCb3giLCJ1bml0MllIaXRCb3giLCJ4Q29sbGlzaW9uIiwieUNvbGxpc2lvbiIsImF0dGFja1R5cGVYIiwiYXR0YWNrVHlwZVkiLCJ1bml0eCIsInVuaXR5IiwidW5pdHciLCJ1bml0aCIsInVuaXRYSGl0Qm94IiwidW5pdFlIaXRCb3giLCJ4QXR0YWNrZWQiLCJ5QXR0YWNrZWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBWTtBQUN0RCxNQUFNQyxZQUFZLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixlQUF4QixDQUFyQjtBQUNBRCxjQUFZLENBQUNFLEtBQWIsR0FBcUIsR0FBckI7QUFDQUYsY0FBWSxDQUFDRyxNQUFiLEdBQXNCLEdBQXRCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHTixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBZjtBQUNBRyxRQUFNLENBQUNGLEtBQVAsR0FBZSxHQUFmO0FBQ0FFLFFBQU0sQ0FBQ0QsTUFBUCxHQUFnQixHQUFoQjtB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V0FBVyxDQUFDLENBQUQsQ0FBeEQsQ0FESixFQUNrRTtBQUM5REUsZUFBUyxHQUFHLElBQVo7QUFFSDs7QUFDRCxRQUFLRCxTQUFTLEtBQUssSUFBZCxJQUFzQkMsU0FBUyxLQUFLLElBQXpDLEVBQWdEO0FBQzVDO0FBQ0FsSCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0EsYUFBTyxJQUFQO0FBQ0gsS0FKRCxNQUtLO0FBQ0QsYUFBTyxLQUFQO0FBQ0g7QUFDSjtBQXhEUSxDQUFiO0FBMERBa0gsTUFBTSxDQUFDQyxPQUFQLEdBQWlCbEgsSUFBakIsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgR2FtZSBmcm9tICcuL3NjcmlwdHMvZ2FtZSdcbmltcG9ydCBHYW1lVmlldyBmcm9tICcuL3NjcmlwdHMvZ2FtZV92aWV3JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNhbnZhc1NwbGFzaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzLXNwbGFzaFwiKTtcbiAgICBjYW52YXNTcGxhc2gud2lkdGggPSA4NDA7XG4gICAgY2FudmFzU3BsYXNoLmhlaWdodCA9IDY1MDtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhcy1nYW1lXCIpO1xuICAgIGNhbnZhcy53aWR0aCA9IDg0MDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gNjUwO1xuICAgIGNvbnN0IGNhbnZhc1VJID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXMtdWlcIik7XG4gICAgY2FudmFzVUkud2lkdGggPSA4NDA7XG4gICAgY2FudmFzVUkuaGVpZ2h0ID0gNjUwO1xuICAgIC8vIGNvbnN0IGdhbWUxID0gbmV3IEdhbWUoY2FudmFzKVxuICAgIGNvbnN0IG5ld0dhbWVWaWV3ID0gbmV3IEdhbWVWaWV3KGNhbnZhcywgY2FudmFzU3BsYXNoLCBjYW52YXNVSSkucmVnaXN0ZXJFdmVudHMoKVxuICAgIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtdXNpY1wiKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IGF1ZGlvLnBsYXkoKSwgMzAwMCk7XG59KVxuXG5cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZW15IHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGVuZW15VHlwZSkge1xuICAgICAgICAvLyB0aGlzLnggPSAwOyAgICAgICAvLyBUT0RPIFdpbGwgY2hhbmdlIGJhc2VkIG9uIHRoZSBhcmcgcGFzc2VkIGludG8gY29uc3RydWN0b3JcbiAgICAgICAgLy8gdGhpcy55ID0gMDtcbiAgICAgICAgdGhpcy53aWR0aCA9IDI0MztcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA0ODA7XG4gICAgICAgIHRoaXMuaGl0Ym94V2lkdGggPSA5MDtcbiAgICAgICAgdGhpcy5oaXRib3hIZWlnaHQgPSAxNTA7XG4gICAgICAgIHRoaXMudHlwZSA9IGVuZW15VHlwZSAvLyBUT0RPIFdpbGwgY2hhbmdlIGJhc2VkIG9uIGEgdGhlIGFyZ3VtZW50IHBhc3NlZCBpbnRvIGNvbnN0cnVjdG9yXG4gICAgICAgIHRoaXMuZW5lbXlTcHJpdGUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJzdHVwaWRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW15U3ByaXRlLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL2NhcjEucG5nXCJcbiAgICAgICAgICAgICAgICB0aGlzLnggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNTUwIC0gMTIwKSArIDEyMClcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSAtMTAwO1xuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgPSAzO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImNyYXp5XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVteVNwcml0ZS5zcmMgPSBcIi4vc3JjL2ltYWdlcy9jYXIyLnBuZ1wiXG4gICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDU1MCAtIDEyMCkgKyAxMjApXG4gICAgICAgICAgICAgICAgdGhpcy55ID0gNjUwO1xuICAgICAgICAgICAgICAgIHRoaXMudHVybmluZyA9IDQ7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDY7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgdGhpcy54SGl0Qm94ID0gW3RoaXMueCwgdGhpcy54ICsgdGhpcy5oaXRib3hXaWR0aF07XG4gICAgICAgIHRoaXMueUhpdEJveCA9IFt0aGlzLnksIHRoaXMueSArIHRoaXMuaGl0Ym94SGVpZ2h0XTtcbiAgICAgICAgLy8gdGhpcy5keWluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZyYW1lWCA9IDBcbiAgICAgICAgdGhpcy5kZWFkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2F5SGVsbG8oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSGVsbG9cIilcbiAgICB9XG4gICAgLy8gaGFuZGxlRW5lbXlGcmFtZSgpIHtcbiAgICAvLyAgICAgZGVidWdnZXJcbiAgICAvLyAgICAgaWYgKHRoaXMudHlwZSA9PT0gXCJkYW1hZ2VkLWNyYXp5XCIpIHtcbiAgICAvLyAgICAgICAgIHRoaXMuZnJhbWVYKz0gMC4xXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKHRoaXMuZnJhbWVYID4gNCkge1xuICAgIC8vICAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbn0iLCJpbXBvcnQgRW5lbXkgZnJvbSBcIi4vZW5lbXlcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5jb25zdCBVdGlsID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY2FudmFzU3BsYXNoLCBjYW52YXNVSSkge1xuICAgICAgICB0aGlzLmhlYWx0aCA9IDEwMDA7XG4gICAgICAgIHRoaXMuZ2FtZW92ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jdHhVSSA9IGNhbnZhc1VJLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmN0eFNwbGFzaCA9IGNhbnZhc1NwbGFzaC5nZXRDb250ZXh0KFwiMmRcIilcbiAgICAgICAgdGhpcy5wbGF5ZXIxID0gbmV3IFBsYXllcigpO1xuICAgICAgICB0aGlzLndpZHRoID0gY2FudmFzLndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMua2V5cyA9IFtdO1xuICAgICAgICB0aGlzLnRvcExvb3AgPSAtY2FudmFzLmhlaWdodDtcbiAgICAgICAgdGhpcy5ib3R0b21Mb29wID0gMDtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gbmV3IEltYWdlKClcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL2JhY2tncm91bmQtMS5wbmdcIjtcbiAgICAgICAgdGhpcy5lbmVtaWVzID0gW107IC8vIGNvbnRhaW5zIGVuZW1pZXMgY3VycmVudGx5IG9uIHNjcmVlbiwgc2hvd24gYXMgZW5lbXkudHlwZVxuICAgICAgICB0aGlzLmZwc0ludGVydmFsO1xuICAgICAgICB0aGlzLnN0YXJ0VGltZTtcbiAgICAgICAgdGhpcy5ub3c7XG4gICAgICAgIHRoaXMudGhlbjtcbiAgICAgICAgdGhpcy5lbGFwc2VkO1xuICAgICAgICB0aGlzLnNsaWNlID0gbmV3IEF1ZGlvKCcuL3NyYy9hdWRpby9zbGljZS5tcDMnKVxuICAgICAgICB0aGlzLm9vZiA9IG5ldyBBdWRpbygnLi9zcmMvYXVkaW8vb29mLm1wMycpXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICAvLyB0aGlzLmRyYXdCYWNrZ3JvdW5kKCk7XG4gICAgICAgIC8vIHRoaXMuZHJhd1BsYXllcigpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBkcmF3QmFja2dyb3VuZCgpIHtcbiAgICAgICAgLy9ib3R0b20gaGFsZiBvZiB0aGUgYmFja2dyb3VuZFxuICAgICAgICB0aGlzLmN0eFNwbGFzaC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmQsIDAsIDAsXG4gICAgICAgICAgICB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCxcbiAgICAgICAgICAgIDAsIHRoaXMuYm90dG9tTG9vcCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHRcbiAgICAgICAgKVxuICAgICAgICB0aGlzLmJvdHRvbUxvb3AgKz0gMTA7XG4gICAgICAgIGlmICh0aGlzLmJvdHRvbUxvb3AgPT09IHRoaXMuaGVpZ2h0KSB0aGlzLmJvdHRvbUxvb3AgPSAtdGhpcy5oZWlnaHQ7XG4gICAgICAgIC8vdG9wIGhhbGYgb2YgdGhlIGJhY2tncm91bmRcbiAgICAgICAgdGhpcy5jdHhTcGxhc2guZHJhd0ltYWdlKFxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLCAwLCAwLFxuICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICAwLCB0aGlzLnRvcExvb3AsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0XG4gICAgICAgIClcbiAgICAgICAgdGhpcy50b3BMb29wICs9IDEwO1xuICAgICAgICBpZiAodGhpcy50b3BMb29wID09PSB0aGlzLmhlaWdodCkgdGhpcy50b3BMb29wID0gLXRoaXMuaGVpZ2h0O1xuICAgIH1cblxuICAgIGRyYXdQbGF5ZXIoKSB7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIHRoaXMucGxheWVyMS5wbGF5ZXJTcHJpdGUsIHRoaXMucGxheWVyMS53aWR0aCAqIHRoaXMucGxheWVyMS5mcmFtZVgsIHRoaXMucGxheWVyMS5oZWlnaHQgKiB0aGlzLnBsYXllcjEuZnJhbWVZLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdoZXJlIHdlIGNyb3Agb3V0IHRoZSBpbWFnZSBmb3Igc3ByaXRlXG4gICAgICAgICAgICB0aGlzLnBsYXllcjEud2lkdGgsIHRoaXMucGxheWVyMS5oZWlnaHQsIHRoaXMucGxheWVyMS54LCB0aGlzLnBsYXllcjEueSwgICAgLy8gd2hlcmUgdGhlIGltYWdlIHdpbGwgYmUgYW5pbWF0ZWQgb24gY2FudmFzXG4gICAgICAgICAgICB0aGlzLnBsYXllcjEud2lkdGgsIHRoaXMucGxheWVyMS5oZWlnaHRcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBkcmF3VUkoaGVhbHRoLCBzY29yZSkge1xuICAgICAgICAvLyBpbml0aWFsIGhlYWx0aFxuICAgICAgICB0aGlzLmN0eFVJLmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcblxuICAgICAgICB0aGlzLmN0eFVJLmZpbGxTdHlsZSA9IFwicmVkXCJcbiAgICAgICAgdGhpcy5jdHhVSS5maWxsUmVjdCgxMCwgMzAsIDI1MCwgMTApXG5cbiAgICAgICAgdGhpcy5jdHhVSS5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHhVSS5saW5lV2lkdGggPSBcIjNcIjtcbiAgICAgICAgdGhpcy5jdHhVSS5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgdGhpcy5jdHhVSS5yZWN0KDksIDI5LCAyNTIsIDEyKVxuICAgICAgICB0aGlzLmN0eFVJLnN0cm9rZSgpO1xuXG4gICAgICAgIC8vIHlvdXIgYWN0dWFsIGhlYWx0aFxuICAgICAgICBpZiAoaGVhbHRoIDwgKDcwMCkpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4VUkuZmlsbFN0eWxlID0gXCJ5ZWxsb3dcIlxuICAgICAgICAgICAgdGhpcy5jdHhVSS5maWxsUmVjdCgxMCwgMzAsIGhlYWx0aCAvIDQsIDEwKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdHhVSS5maWxsU3R5bGUgPSBcImdyZWVuXCJcbiAgICAgICAgICAgIHRoaXMuY3R4VUkuZmlsbFJlY3QoMTAsIDMwLCBoZWFsdGggLyA0LCAxMClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRleHRcbiAgICAgICAgdGhpcy5jdHhVSS5mb250ID0gXCI0MHB4IEFSQ0FERUNMQVNTSUNcIlxuICAgICAgICB0aGlzLmN0eFVJLmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgdGhpcy5jdHhVSS5maWxsVGV4dChcIkhQXCIsIDEwLCAyNylcblxuICAgICAgICBpZiAoaGVhbHRoIDwgMTAwKSB7XG4gICAgICAgICAgICB0aGlzLmN0eFVJLmZvbnQgPSBcIjQwcHggQVJDQURFQ0xBU1NJQ1wiXG4gICAgICAgICAgICB0aGlzLmN0eFVJLmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgICAgICB0aGlzLmN0eFVJLmZpbGxUZXh0KGAke2hlYWx0aH0vIDEwMDBgLCA4MCwgMjcpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaGVhbHRoIDwgNzAwKSB7XG4gICAgICAgICAgICB0aGlzLmN0eFVJLmZvbnQgPSBcIjQwcHggQVJDQURFQ0xBU1NJQ1wiXG4gICAgICAgICAgICB0aGlzLmN0eFVJLmZpbGxTdHlsZSA9IFwieWVsbG93XCI7XG4gICAgICAgICAgICB0aGlzLmN0eFVJLmZpbGxUZXh0KGAke2hlYWx0aH0vIDEwMDBgLCA4MCwgMjcpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN0eFVJLmZvbnQgPSBcIjQwcHggQVJDQURFQ0xBU1NJQ1wiXG4gICAgICAgICAgICB0aGlzLmN0eFVJLmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4VUkuZmlsbFRleHQoYCR7aGVhbHRofS8gMTAwMGAsIDgwLCAyNylcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3R4VUkuZm9udCA9IFwiMjVweCBBUkNBREVDTEFTU0lDXCJcbiAgICAgICAgdGhpcy5jdHhVSS5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIHRoaXMuY3R4VUkudGV4dEFsaWduID0gXCJzdGFydFwiO1xuICAgICAgICB0aGlzLmN0eFVJLmZpbGxUZXh0KGAke3Njb3JlfWAsIDc1MCwgMjApXG4gICAgfVxuXG4gICAgZ2VuZXJhdGVFbmVteSgpIHtcbiAgICAgICAgLy8gbG9naWMgZm9yIHdoZW4gdG8gZ2VuZXJhdGUgYW4gZW5lbXkuICB3aWxsIHB1c2ggaW50byB0aGlzLmVuZW1pZXNcbiAgICAgICAgY29uc3QgcmFuZG9tTnVtID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDcwKSk7XG4gICAgICAgIGlmICh0aGlzLmVuZW1pZXMubGVuZ3RoIDwgNSAmJiByYW5kb21OdW0gPT09IDUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2VuZXJhdGluZyBlbmVteVwiKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCByYW5kb21FbmVteU51bSA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAxMDApKVxuICAgICAgICAgICAgbGV0IGVuZW15VHlwZVxuICAgICAgICAgICAgaWYgKHJhbmRvbUVuZW15TnVtID49IDQwKSB7XG4gICAgICAgICAgICAgICAgZW5lbXlUeXBlID0gXCJzdHVwaWRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZW5lbXlUeXBlID0gXCJjcmF6eVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlbmVteVR5cGUpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbmVteVR5cGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW1pZXMucHVzaChuZXcgRW5lbXkodGhpcy5jdHgsIGVuZW15VHlwZSkpOyAgIC8vIFRPRE86IHJhbmRvbWx5IGNob29zZSB0aGUgdHlwZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd0VuZW15KGVuZW15TnVtKSB7XG4gICAgICAgIGxldCBjdXJyZW50RW5lbXkgPSB0aGlzLmVuZW1pZXNbZW5lbXlOdW1dO1xuICAgICAgICAvLyBBTklNQVRJTkcgVEhFIFNUVVBJRCBFTkVNWVxuICAgICAgICBpZiAoY3VycmVudEVuZW15LnR5cGUgPT09IFwic3R1cGlkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkuZW5lbXlTcHJpdGUsIDAsIDAsXG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LndpZHRoLCBjdXJyZW50RW5lbXkuaGVpZ2h0LCBjdXJyZW50RW5lbXkueCAsIGN1cnJlbnRFbmVteS55LFxuICAgICAgICAgICAgICAgIDkwLCAxNTBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjdXJyZW50RW5lbXkueSArPSBjdXJyZW50RW5lbXkuc3BlZWQ7XG4gICAgICAgICAgICBpZiAoVXRpbC5jb2xsaXNpb24odGhpcy5wbGF5ZXIxLnggKyA3NCwgdGhpcy5wbGF5ZXIxLnkgKyAxNiwgMzgsIDgwLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSwgY3VycmVudEVuZW15LmhpdGJveFdpZHRoLCBjdXJyZW50RW5lbXkuaGl0Ym94SGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYWx0aCAtPSAxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9vZi5wbGF5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3VUkodGhpcy5oZWFsdGgsIHRoaXMuc2NvcmUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmhlYWx0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyMS5sZWZ0QXR0YWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKFV0aWwuYXR0YWNrZWQodGhpcy5wbGF5ZXIxLmxBdHRhY2tYSGl0Qm94LCB0aGlzLnBsYXllcjEubEF0dGFja1lIaXRCb3gsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSwgY3VycmVudEVuZW15LmhpdGJveFdpZHRoLCBjdXJyZW50RW5lbXkuaGl0Ym94SGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zbGljZS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkudHlwZSA9IFwiZGFtYWdlZC1zdHVwaWRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIxLnJpZ2h0QXR0YWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKFV0aWwuYXR0YWNrZWQodGhpcy5wbGF5ZXIxLnJBdHRhY2tYSGl0Qm94LCB0aGlzLnBsYXllcjEuckF0dGFja1lIaXRCb3gsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSwgY3VycmVudEVuZW15LmhpdGJveFdpZHRoLCBjdXJyZW50RW5lbXkuaGl0Ym94SGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zbGljZS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkudHlwZSA9IFwiZGFtYWdlZC1zdHVwaWRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY3VycmVudEVuZW15LnkgPiB0aGlzLmhlaWdodCAmJiBjdXJyZW50RW5lbXkudHlwZSA9PT1cInN0dXBpZFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnNwbGljZShlbmVteU51bSwgMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vQU5JTUFUSU5HIFRIRSBDUkFaWSBFTkVNWVxuICAgICAgICBpZiAoY3VycmVudEVuZW15LnR5cGUgPT09IFwiY3JhenlcIikge1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS5lbmVteVNwcml0ZSwgMCwgMCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkud2lkdGgsIGN1cnJlbnRFbmVteS5oZWlnaHQsIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSxcbiAgICAgICAgICAgICAgICA5MCwgMTUwXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyMS54ICsgMjAgID4gY3VycmVudEVuZW15LngpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueCArPSBjdXJyZW50RW5lbXkudHVybmluZztcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueSAtPSBjdXJyZW50RW5lbXkuc3BlZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChVdGlsLmJldHdlZW4odGhpcy5wbGF5ZXIxLnggKyAyMCwgY3VycmVudEVuZW15LngsIGN1cnJlbnRFbmVteS54ICsgMjApKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LnkgLT0gMTI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueCAtPSBjdXJyZW50RW5lbXkudHVybmluZztcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueSAtPSBjdXJyZW50RW5lbXkuc3BlZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoVXRpbC5jb2xsaXNpb24odGhpcy5wbGF5ZXIxLnggKyA3NCwgdGhpcy5wbGF5ZXIxLnkgKyAxNiwgMzgsIDgwLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSwgY3VycmVudEVuZW15LmhpdGJveFdpZHRoLCBjdXJyZW50RW5lbXkuaGl0Ym94SGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYWx0aCAtPSA1O1xuICAgICAgICAgICAgICAgIHRoaXMub29mLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3VUkodGhpcy5oZWFsdGgsdGhpcy5zY29yZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyMS5sZWZ0QXR0YWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKFV0aWwuYXR0YWNrZWQodGhpcy5wbGF5ZXIxLmxBdHRhY2tYSGl0Qm94LCB0aGlzLnBsYXllcjEubEF0dGFja1lIaXRCb3gsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSwgY3VycmVudEVuZW15LmhpdGJveFdpZHRoLCBjdXJyZW50RW5lbXkuaGl0Ym94SGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zbGljZS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkudHlwZSA9IFwiZGFtYWdlZC1jcmF6eVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyMS5yaWdodEF0dGFjaykge1xuICAgICAgICAgICAgICAgIGlmIChVdGlsLmF0dGFja2VkKHRoaXMucGxheWVyMS5yQXR0YWNrWEhpdEJveCwgdGhpcy5wbGF5ZXIxLnJBdHRhY2tZSGl0Qm94LFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnksIGN1cnJlbnRFbmVteS5oaXRib3hXaWR0aCwgY3VycmVudEVuZW15LmhpdGJveEhlaWdodCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2xpY2UucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LnR5cGUgPSBcImRhbWFnZWQtY3JhenlcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY3VycmVudEVuZW15LnkgPCAtMTUwICYmIGN1cnJlbnRFbmVteS50eXBlID09PSBcImNyYXp5XCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW1pZXMuc3BsaWNlKGVuZW15TnVtLCAxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gREFNQUdFRCBFTkVNSUVTXG4gICAgIFxuICAgICAgICBpZiAoY3VycmVudEVuZW15LnR5cGUgPT09IFwiZGFtYWdlZC1zdHVwaWRcIikge1xuXG4gICAgICAgICAgICBjdXJyZW50RW5lbXkuZW5lbXlTcHJpdGUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGN1cnJlbnRFbmVteS5lbmVteVNwcml0ZS5zcmMgPSBcIi4vc3JjL2ltYWdlcy9jYXIxLWR5aW5nLnBuZ1wiXG4gIFxuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS5lbmVteVNwcml0ZSwgTWF0aC5yb3VuZChjdXJyZW50RW5lbXkuZnJhbWVYKSAqIGN1cnJlbnRFbmVteS53aWR0aCwgMCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkud2lkdGgsIGN1cnJlbnRFbmVteS5oZWlnaHQsIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSwgICAgLy9UT0RPIGZyYW1lc3NzXG4gICAgICAgICAgICAgICAgOTAsIDE1MFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGN1cnJlbnRFbmVteS55ICs9IDQ7XG4gICAgICAgICAgICBjdXJyZW50RW5lbXkuZnJhbWVYICs9IDAuMVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoY3VycmVudEVuZW15LmZyYW1lWCA+IDQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW1pZXMuc3BsaWNlKGVuZW15TnVtLCAxKVxuICAgICAgICAgICAgICAgIHRoaXMuc2NvcmUgKz0gMTAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudEVuZW15LnR5cGUgPT09IFwiZGFtYWdlZC1jcmF6eVwiKSB7XG5cbiAgICAgICAgICAgIGN1cnJlbnRFbmVteS5lbmVteVNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgY3VycmVudEVuZW15LmVuZW15U3ByaXRlLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL2NhcjItZHlpbmcucG5nXCJcblxuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS5lbmVteVNwcml0ZSwgTWF0aC5yb3VuZChjdXJyZW50RW5lbXkuZnJhbWVYKSAqIGN1cnJlbnRFbmVteS53aWR0aCwgMCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkud2lkdGgsIGN1cnJlbnRFbmVteS5oZWlnaHQsIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSwgICAgLy9UT0RPIGZyYW1lc3NzXG4gICAgICAgICAgICAgICAgOTAsIDE1MFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGN1cnJlbnRFbmVteS55ICs9IDQ7XG4gICAgICAgICAgICBjdXJyZW50RW5lbXkuZnJhbWVYICs9IDAuMVxuICAgICAgICAgICAgaWYgKGN1cnJlbnRFbmVteS5mcmFtZVggPiA0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnNwbGljZShlbmVteU51bSwgMSlcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3JlICs9IDUwMFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNoZWNrR2FtZW92ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmhlYWx0aCA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVvdmVyID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiODBweCBBUkNBREVDTEFTU0lDXCJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiR0FNRSBPVkVSXCIsIDI0NSwgMzAwKVxuXG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyMHB4IEFSQ0FERUNMQVNTSUNcIlxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoYFNDT1JFOiAke3RoaXMuc2NvcmV9YCAsIDI0NSwgMzUwKVxuXG4gICAgICAgICAgICBpZiAodGhpcy5zY29yZSA8PSAxMDAwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjIwcHggQVJDQURFQ0xBU1NJQ1wiXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGBSQU5LOiBOT09CYCwgNTAwLCAzNTApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNjb3JlIDw9IDIwMDAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjBweCBBUkNBREVDTEFTU0lDXCJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoYFJBTks6IFRXSU5LTEUgIFRPRVNgLCA1MDAsIDM1MClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc2NvcmUgPD0gNTAwMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyMHB4IEFSQ0FERUNMQVNTSUNcIlxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChgUkFOSzogRklOSVNIRUQgU1RST05HIWAsIDUwMCwgMzUwKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCI0MHB4IEFSQ0FERUNMQVNTSUNcIlxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJQUkVTUyAgRU5URVIgIFRPICBSRVNUQVJUXCIsIDIwMCwgNDAwKVxuXG4gICAgICAgICAgICBjb25zdCBzbmFha2UgPSBuZXcgQXVkaW8oJy4vc3JjL2F1ZGlvL0dhbWVvdmVyLm1wMycpXG4gICAgICAgICAgICBzbmFha2UucGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnRBbmltYXRpbmcoZnBzKSB7XG4gICAgICAgIHRoaXMuZnBzSW50ZXJ2YWwgPSAxMDAwIC8gZnBzO1xuICAgICAgICB0aGlzLnRoZW4gPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHRoaXMudGhlbjtcbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5ub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLm5vdyAtIHRoaXMudGhlbjtcbiAgICAgICAgaWYgKHRoaXMuZWxhcHNlZCA+IHRoaXMuZnBzSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIHRoaXMudGhlbiA9IHRoaXMubm93IC0gKHRoaXMuZWxhcHNlZCAlIHRoaXMuZnBzSW50ZXJ2YWwpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmRyYXdVSSh0aGlzLmhlYWx0aCwgdGhpcy5zY29yZSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCF0aGlzLmdhbWVvdmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0JhY2tncm91bmQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcjEuaGFuZGxlUGxheWVyRnJhbWUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcjEubW92ZVBsYXllcigpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lbmVtaWVzLmxlbmd0aDsgaSsrICkgdGhpcy5kcmF3RW5lbXkoaSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdQbGF5ZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlRW5lbXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrR2FtZW92ZXIoKTtcbiAgICAgICAgICAgICAgICAvLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gc3RhcnRBbmltYXRpbmcoZnBzKSB7XG4gICAgLy8gICAgIHRoaXMuZnBzSW50ZXJ2YWwgPSAxMDAwIC8gZnBzO1xuICAgIC8vICAgICB0aGlzLnRoZW4gPSBEYXRlLm5vdygpO1xuICAgIC8vICAgICB0aGlzLnN0YXJ0VGltZSA9IHRoaXMudGhlbjtcbiAgICAvLyAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgLy8gfVxuICAgIC8vIGFuaW1hdGUoKSB7XG4gICAgLy8gICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgLy8gICAgIHRoaXMubm93ID0gRGF0ZS5ub3coKTtcbiAgICAvLyAgICAgdGhpcy5lbGFwc2VkID0gdGhpcy5ub3cgLSB0aGlzLnRoZW47XG4gICAgLy8gICAgIGlmICh0aGlzLmVsYXBzZWQgPiB0aGlzLmZwc0ludGVydmFsKSB7XG4gICAgLy8gICAgICAgICB0aGlzLnRoZW4gPSB0aGlzLm5vdyAtICh0aGlzLmVsYXBzZWQgJSB0aGlzLmZwc0ludGVydmFsKTtcbiAgICAvLyAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICAvLyAgICAgICAgIHRoaXMuZHJhd0JhY2tncm91bmQoKTtcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLmVuZW1pZXNbMF0pIHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmRyYXdFbmVteSgwKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIGlmICh0aGlzLmVuZW1pZXNbMV0pIHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmRyYXdFbmVteSgxKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIGlmICh0aGlzLmVuZW1pZXNbMl0pIHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmRyYXdFbmVteSgyKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIGlmICh0aGlzLmVuZW1pZXNbM10pIHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmRyYXdFbmVteSgzKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIGlmICh0aGlzLmVuZW1pZXNbNF0pIHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmRyYXdFbmVteSg0KTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIHRoaXMuZHJhd1BsYXllcigpO1xuICAgIC8vICAgICAgICAgdGhpcy5wbGF5ZXIxLm1vdmVQbGF5ZXIoKTtcbiAgICAvLyAgICAgICAgIHRoaXMucGxheWVyMS5oYW5kbGVQbGF5ZXJGcmFtZSgpO1xuICAgIC8vICAgICAgICAgdGhpcy5nZW5lcmF0ZUVuZW15KCk7XG4gICAgLy8gICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxufVxuXG4iLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGNhbnZhc1NwbGFzaCwgY2FudmFzVUkpIHtcbiAgICAgICAgLy8gdGhpcy5jdHhVSSA9IGNhbnZhc1VJLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5nYW1lID0gbmV3IEdhbWUoY2FudmFzLCBjYW52YXNTcGxhc2gsIGNhbnZhc1VJKVxuICAgICAgICB0aGlzLmN0eFNwbGFzaCA9IGNhbnZhc1NwbGFzaC5nZXRDb250ZXh0KFwiMmRcIilcbiAgICAgICAgdGhpcy53aWR0aCA9IGNhbnZhc1NwbGFzaC53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBjYW52YXNTcGxhc2guaGVpZ2h0O1xuICAgICAgICB0aGlzLnRvcExvb3AgPSAtY2FudmFzU3BsYXNoLmhlaWdodDtcbiAgICAgICAgdGhpcy5ib3R0b21Mb29wID0gMDtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gbmV3IEltYWdlKClcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL2JhY2tncm91bmQtMS5wbmdcIjtcbiAgICAgICAgLy8gdGhpcy5mcHNJbnRlcnZhbDtcbiAgICAgICAgLy8gdGhpcy5zdGFydFRpbWU7XG4gICAgICAgIC8vIHRoaXMubm93O1xuICAgICAgICAvLyB0aGlzLnRoZW47XG4gICAgICAgIC8vIHRoaXMuZWxhcHNlZDtcbiAgICAgICAgdGhpcy5tdXRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtdXNpY1wiKTtcbiAgICAgICAgdGhpcy5tZW51S2V5cyA9IFtdXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcbiAgICB9XG4gICAgXG4gICAgcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3RhcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJuXCIgJiYgdGhpcy5tdXRlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZU11dGVPbigpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlLmtleSA9PT0gXCJtXCIgJiYgdGhpcy5tdXRlZCA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZU11dGVPZmYoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgKGUua2V5ID09PSBcIm1cIilcbiAgICAgICAgICAgIC8vICAgICB0aGlzLm11dGVkID8gdGhpcy50b2dnbGVNdXRlT2ZmKCkgOiB0aGlzLnRvZ2dsZU11dGVPZmYoKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgdG9nZ2xlTXV0ZU9uKCkge1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICBpZiAodGhpcy5tdXRlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibXV0ZVwiKVxuICAgICAgICAgICAgICAgIHRoaXMubXV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuYXVkaW8ucGF1c2UoKVxuICAgICAgICB9XG4gICAgfVxuICAgIHRvZ2dsZU11dGVPZmYoKSB7XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidW5tdXRlXCIpXG4gICAgICAgICAgICB0aGlzLm11dGVkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvLnBsYXkoKTtcbiAgICB9XG5cbiAgICBkcmF3U3RhdGljQmFja2dyb3VuZCgpIHtcbiAgICAgICAgLy9ib3R0b20gaGFsZiBvZiB0aGUgYmFja2dyb3VuZFxuICAgICAgICB0aGlzLmN0eFNwbGFzaC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmQsIDAsIDAsXG4gICAgICAgICAgICB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCxcbiAgICAgICAgICAgIDAsIHRoaXMuYm90dG9tTG9vcCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHRcbiAgICAgICAgKVxuICAgICAgICAvLyB0aGlzLmJvdHRvbUxvb3AgKz0gMTA7XG4gICAgICAgIC8vIGlmICh0aGlzLmJvdHRvbUxvb3AgPT09IHRoaXMuaGVpZ2h0KSB0aGlzLmJvdHRvbUxvb3AgPSAtdGhpcy5oZWlnaHQ7XG4gICAgICAgIC8vIC8vdG9wIGhhbGYgb2YgdGhlIGJhY2tncm91bmRcbiAgICAgICAgLy8gdGhpcy5jdHhTcGxhc2guZHJhd0ltYWdlKFxuICAgICAgICAvLyAgICAgdGhpcy5iYWNrZ3JvdW5kLCAwLCAwLFxuICAgICAgICAvLyAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsXG4gICAgICAgIC8vICAgICAwLCB0aGlzLnRvcExvb3AsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0XG4gICAgICAgIC8vIClcbiAgICAgICAgLy8gdGhpcy50b3BMb29wICs9IDEwO1xuICAgICAgICAvLyBpZiAodGhpcy50b3BMb29wID09PSB0aGlzLmhlaWdodCkgdGhpcy50b3BMb29wID0gLXRoaXMuaGVpZ2h0O1xuICAgIH1cblxuICAgIC8vIHN0YXJ0QW5pbWF0aW5nKGZwcykge1xuICAgIC8vICAgICB0aGlzLmZwc0ludGVydmFsID0gMTAwMCAvIGZwcztcbiAgICAvLyAgICAgdGhpcy50aGVuID0gRGF0ZS5ub3coKTtcbiAgICAvLyAgICAgdGhpcy5zdGFydFRpbWUgPSB0aGlzLnRoZW47XG4gICAgLy8gICAgIHRoaXMuYW5pbWF0ZVRpdGxlKCk7XG4gICAgLy8gfVxuXG4gICAgLy8gYW5pbWF0ZVRpdGxlKCkge1xuICAgIC8vICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlVGl0bGUuYmluZCh0aGlzKSk7XG4gICAgLy8gICAgIHRoaXMubm93ID0gRGF0ZS5ub3coKTtcbiAgICAvLyAgICAgdGhpcy5lbGFwc2VkID0gdGhpcy5ub3cgLSB0aGlzLnRoZW47XG4gICAgLy8gICAgIGlmICh0aGlzLmVsYXBzZWQgPiB0aGlzLmZwc0ludGVydmFsKSB7XG4gICAgLy8gICAgICAgICB0aGlzLnRoZW4gPSB0aGlzLm5vdyAtICh0aGlzLmVsYXBzZWQgJSB0aGlzLmZwc0ludGVydmFsKTtcbiAgICAvLyAgICAgICAgIHRoaXMuZHJhd0JhY2tncm91bmQoKTtcbiAgICAvLyAgICAgICAgIC8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGVUaXRsZS5iaW5kKHRoaXMpKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICAvLyB0aGlzLnN0YXJ0QW5pbWF0aW5nKDQ1KTtcbiAgICAgICAgdGhpcy5nYW1lLnN0YXJ0QW5pbWF0aW5nKDQ1KTtcbiAgICB9XG5cbiAgICByZXN0YXJ0KCkge1xuICAgICAgICB0aGlzLmdhbWUuZ2FtZW92ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5nYW1lLmhlYWx0aCA9IDEwMDA7XG4gICAgICAgIHRoaXMuZ2FtZS5lbmVtaWVzID0gW107XG4gICAgICAgIC8vIHRoaXMuc3RhcnRBbmltYXRpbmcoNDUpO1xuICAgICAgICB0aGlzLmdhbWUuc3RhcnRBbmltYXRpbmcoNDUpO1xuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMueCA9IDMyOTtcbiAgICAgICAgdGhpcy55ID0gMzQ0O1xuICAgICAgICB0aGlzLndpZHRoID0gMTg3O1xuICAgICAgICB0aGlzLmhlaWdodCA9IDEzMDtcbiAgICAgICAgdGhpcy54SGl0Qm94ID0gW3RoaXMueCwgdGhpcy54ICsgdGhpcy53aWR0aF07XG4gICAgICAgIHRoaXMueUhpdEJveCA9IFt0aGlzLnksIHRoaXMueSArdGhpcy5oZWlnaHRdO1xuICAgICAgICB0aGlzLmZyYW1lWCA9IDA7XG4gICAgICAgIHRoaXMuZnJhbWVZID0gMDtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDEwO1xuICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxlZnRBdHRhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yaWdodEF0dGFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxBdHRhY2tYSGl0Qm94O1xuICAgICAgICB0aGlzLmxBdHRhY2tZSGl0Qm94O1xuICAgICAgICB0aGlzLnJBdHRhY2tYSGl0Qm94O1xuICAgICAgICB0aGlzLnJBdHRhY2tZSGl0Qm94O1xuICAgICAgICB0aGlzLnBsYXllclNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcIi4vc3JjL2ltYWdlcy9iaWtlMS5wbmdcIjtcbiAgICAgICAgdGhpcy5rZXlzID0gW107XG4gICAgICAgIC8vIHRoaXMuYXR0YWNrUmVhZHlcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cygpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMua2V5c1tlLmtleV0gPSB0cnVlO1xuICAgICAgICB9KVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5rZXlzW2Uua2V5XTtcbiAgICAgICAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dMZWZ0XCIpIHRoaXMubGVmdEF0dGFjayA9IHRydWU7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiQXJyb3dSaWdodFwiKSB0aGlzLnJpZ2h0QXR0YWNrID0gdHJ1ZTtcbiAgICAgICAgfSlcblxuXG4gICAgfVxuIFxuICAgIFxuICAgIG1vdmVQbGF5ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmtleXMudyAmJiB0aGlzLnkgPiAwKSB7ICAgICAgICAgLy8gbW92aW5nIHVwXG4gICAgICAgICAgICB0aGlzLnkgLT0gdGhpcy5zcGVlZDsgICAgICAgICAgIC8vIGluY3JlYXNlIG91ciBwbGF5c2VyJ3MgeSBwb3MgYnkgc3BlZWRcbiAgICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5rZXlzLnMgJiYgdGhpcy55IDwgNTUwKSB7ICAgIC8vIG1vdmluZyBkb3duXG4gICAgICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5rZXlzLmEgJiYgdGhpcy54ID4gODApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnggLT0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmluZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMua2V5cy5kICYmIHRoaXMueCA8IDU4MCkge1xuICAgICAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sZWZ0QXR0YWNrKSB7XG4gICAgICAgICAgICB0aGlzLmZyYW1lWCA9IDA7XG4gICAgICAgICAgICB0aGlzLmZyYW1lWSA9IDI7XG4gICAgICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gdGhpcy5sZWZ0QXR0YWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5sZWZ0QXR0YWNrID0gZmFsc2UsIDQwMClcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yaWdodEF0dGFjaykge1xuICAgICAgICAgICAgdGhpcy5mcmFtZVggPSAwO1xuICAgICAgICAgICAgdGhpcy5mcmFtZVkgPSAxO1xuICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHRoaXMucmlnaHRBdHRhY2sgPSB0cnVlO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnJpZ2h0QXR0YWNrID0gZmFsc2UsIDQwMClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVBsYXllckZyYW1lKCkge1xuICAgICAgICBpZiAodGhpcy5tb3ZpbmcgJiYgKCF0aGlzLmxlZnRBdHRhY2sgfHwgIXRoaXMucmlnaHRBdHRhY2spKSB7XG4gICAgICAgICAgICB0aGlzLmZyYW1lWCsrXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnJpZ2h0QXR0YWNrICYmIHRoaXMuZnJhbWVZID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmZyYW1lWSA9IDA7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlIgQVRUQUNLXCIpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmxlZnRBdHRhY2sgJiYgdGhpcy5mcmFtZVkgPT09IDIpIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVZID0gMDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTCBBVFRBQ0tcIilcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmZyYW1lWCA+PSAyKXtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKClcbiAgICAgICAgICAgIHRoaXMuZnJhbWVYID0gMFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlUGxheWVyQXR0YWNrKCk7XG4gICAgfVxuXG4gICAgaGFuZGxlUGxheWVyQXR0YWNrKCkge1xuICAgICAgICBpZiAodGhpcy5sZWZ0QXR0YWNrKSB7XG4gICAgICAgICAgICB0aGlzLmxBdHRhY2tYSGl0Qm94ID0gW3RoaXMueCArIDcwLCB0aGlzLnggKyA3MCAtIDMwXTtcbiAgICAgICAgICAgIHRoaXMubEF0dGFja1lIaXRCb3ggPSBbdGhpcy55LCB0aGlzLnkgKyA3OV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucmlnaHRBdHRhY2spIHtcbiAgICAgICAgICAgIHRoaXMuckF0dGFja1hIaXRCb3ggPSBbdGhpcy54ICsgMTUwLCB0aGlzLnggKyAxNTAgKyAzMF07XG4gICAgICAgICAgICB0aGlzLnJBdHRhY2tZSGl0Qm94ID0gW3RoaXMueSwgdGhpcy55ICsgNzldO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5sZWZ0QXR0YWNrKSB7XG4gICAgICAgICAgICB0aGlzLmxBdHRhY2tYSGl0Qm94ID0gW107XG4gICAgICAgICAgICB0aGlzLmxBdHRhY2tZSGl0Qm94ID0gW107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnJpZ2h0QXR0YWNrKSB7XG4gICAgICAgICAgICB0aGlzLnJBdHRhY2tYSGl0Qm94ID0gW107XG4gICAgICAgICAgICB0aGlzLnJBdHRhY2tZSGl0Qm94ID0gW107XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJjb25zdCBVdGlsID0ge1xuXG4gICAgYmV0d2Vlbih4LCBtaW4sIG1heCkge1xuICAgICAgICByZXR1cm4geCA+PSBtaW4gJiYgeCA8PSBtYXg7XG4gICAgfSxcbiAgICBjb2xsaXNpb24odW5pdDF4LCB1bml0MXksIHVuaXQxdywgdW5pdDFoLCB1bml0MngsIHVuaXQyeSwgdW5pdDJ3LCB1bml0MmgpIHtcbiAgICAgICAgbGV0IHVuaXQxWEhpdEJveCA9IFt1bml0MXgsIHVuaXQxeCArIHVuaXQxd107XG4gICAgICAgIGxldCB1bml0MVlIaXRCb3ggPSBbdW5pdDF5LCB1bml0MXkgKyB1bml0MWhdO1xuICAgICAgICBsZXQgdW5pdDJYSGl0Qm94ID0gW3VuaXQyeCwgdW5pdDJ4ICsgdW5pdDJ3XTtcbiAgICAgICAgbGV0IHVuaXQyWUhpdEJveCA9IFt1bml0MnksIHVuaXQyeSArIHVuaXQyaF07XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIGxldCB4Q29sbGlzaW9uID0gZmFsc2U7XG4gICAgICAgIGxldCB5Q29sbGlzaW9uID0gZmFsc2U7XG4gICAgICAgIGlmIChVdGlsLmJldHdlZW4odW5pdDFYSGl0Qm94WzBdLCB1bml0MlhIaXRCb3hbMF0sIHVuaXQyWEhpdEJveFsxXSkgfHxcbiAgICAgICAgICAgIFV0aWwuYmV0d2Vlbih1bml0MVhIaXRCb3hbMV0sIHVuaXQyWEhpdEJveFswXSwgdW5pdDJYSGl0Qm94WzFdKSkge1xuICAgICAgICAgICAgICAgIHhDb2xsaXNpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQ09MTElTSU9OWFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICBpZiAoVXRpbC5iZXR3ZWVuKHVuaXQxWUhpdEJveFswXSwgdW5pdDJZSGl0Qm94WzBdLCB1bml0MllIaXRCb3hbMV0pIHx8XG4gICAgICAgICAgICBVdGlsLmJldHdlZW4odW5pdDFZSGl0Qm94WzFdLCB1bml0MllIaXRCb3hbMF0sIHVuaXQyWUhpdEJveFsxXSkpIHtcbiAgICAgICAgICAgICAgICB5Q29sbGlzaW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkNPTExJU0lPTllcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgaWYgKCh4Q29sbGlzaW9uID09PSB0cnVlICYmIHlDb2xsaXNpb24gPT09IHRydWUpKSB7XG4gICAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJDT0xMSVNJT05cIilcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBhdHRhY2tlZChhdHRhY2tUeXBlWCwgYXR0YWNrVHlwZVksIHVuaXR4LCB1bml0eSwgdW5pdHcsIHVuaXRoKSB7XG4gICAgICAgIGxldCB1bml0WEhpdEJveCA9IFt1bml0eCwgdW5pdHggKyB1bml0d107XG4gICAgICAgIGxldCB1bml0WUhpdEJveCA9IFt1bml0eSwgdW5pdHkgKyB1bml0aF07XG4gICAgICAgIGxldCB4QXR0YWNrZWQ7XG4gICAgICAgIGxldCB5QXR0YWNrZWQ7XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIGlmIChVdGlsLmJldHdlZW4oYXR0YWNrVHlwZVhbMF0sIHVuaXRYSGl0Qm94WzBdLCB1bml0WEhpdEJveFsxXSkgfHxcbiAgICAgICAgICAgIFV0aWwuYmV0d2VlbihhdHRhY2tUeXBlWFsxXSwgdW5pdFhIaXRCb3hbMF0sIHVuaXRYSGl0Qm94WzFdKSkge1xuICAgICAgICAgICAgeEF0dGFja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWCBBVFRBQ0tFRFwiKVxuICAgICAgICB9XG4gICAgICAgIGlmIChVdGlsLmJldHdlZW4oYXR0YWNrVHlwZVlbMF0sIHVuaXRZSGl0Qm94WzBdLCB1bml0WUhpdEJveFsxXSkgfHxcbiAgICAgICAgICAgIFV0aWwuYmV0d2VlbihhdHRhY2tUeXBlWVsxXSwgdW5pdFlIaXRCb3hbMF0sIHVuaXRZSGl0Qm94WzFdKSkge1xuICAgICAgICAgICAgeUF0dGFja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGlmICgoeEF0dGFja2VkID09PSB0cnVlICYmIHlBdHRhY2tlZCA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNMSUNFIVwiKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IFV0aWwiXSwic291cmNlUm9vdCI6IiJ9