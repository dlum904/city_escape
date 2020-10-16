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

  var newGameView = new _scripts_game_view__WEBPACK_IMPORTED_MODULE_1__["default"](canvas, canvasSplash, canvasUI).registerEvents(); // setTimeout(newGameView.toggleMute(), 3000);
  // const audio = document.getElementById("music");
  // audio.onload = () => audio.play()
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
    this.score = 0; // this.drawBackground();
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
      var randomNum = Math.floor(Math.random() * 80);

      if (this.enemies.length < 4 && randomNum === 5) {
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

        if (Util.collision(this.player1.x + 67, this.player1.y, 60, this.player1.height, currentEnemy.x, currentEnemy.y, currentEnemy.hitboxWidth, currentEnemy.hitboxHeight)) {
          this.health -= 1;
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

        if (Util.collision(this.player1.x + 67, this.player1.y, 60, this.player1.height, currentEnemy.x, currentEnemy.y, currentEnemy.hitboxWidth, currentEnemy.hitboxHeight)) {
          this.health -= 5;
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

        if (e.key === "m" && _this.muted === false) {
          _this.toggleMuteOn();
        } else if (e.key === "n" && _this.muted === true) {
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

    this.x = 300;
    this.y = 200;
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
        if (e.key === "q") _this.leftAttack = true;
        if (e.key === "e") _this.rightAttack = true;
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
        }, 500);
      }

      if (this.rightAttack) {
        this.frameX = 0;
        this.frameY = 1;
        this.moving = false; // this.rightAttack = true;

        setTimeout(function () {
          return _this2.rightAttack = false;
        }, 500);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VuZW15LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhc1NwbGFzaCIsImdldEVsZW1lbnRCeUlkIiwid2lkdGgiLCJoZWlnaHQiLCJjYW52YXMiLCJjYW52YXNVSSIsIm5ld0dhbWVWaWV3IiwiR2FtZVZpZXciLCJyZWdpc3RlckV2ZW50cyIsIkVuZW15IiwiY3R4IiwiZW5lbXlUeXBlIiwiaGl0Ym94V2lkdGgiLCJoaXRib3hIZWlnaHQiLCJ0eXBlIiwiZW5lbXlTcHJpdGUiLCJJbWFnZSIsInNyYyIsIngiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ5Iiwic3BlZWQiLCJ0dXJuaW5nIiwieEhpdEJveCIsInlIaXRCb3giLCJmcmFtZVgiLCJkZWFkIiwiY29uc29sZSIsImxvZyIsIlV0aWwiLCJyZXF1aXJlIiwiR2FtZSIsImhlYWx0aCIsImdhbWVvdmVyIiwiY3R4VUkiLCJnZXRDb250ZXh0IiwiY3R4U3BsYXNoIiwicGxheWVyMSIsIlBsYXllciIsImtleXMiLCJ0b3BMb29wIiwiYm90dG9tTG9vcCIsImJhY2tncm91bmQiLCJlbmVtaWVzIiwiZnBzSW50ZXJ2YWwiLCJzdGFydFRpbWUiLCJub3ciLCJ0aGVuIiwiZWxhcHNlZCIsInNsaWNlIiwiQXVkaW8iLCJzY29yZSIsImRyYXdJbWFnZSIsInBsYXllclNwcml0ZSIsImZyYW1lWSIsImNsZWFyUmVjdCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiYmVnaW5QYXRoIiwibGluZVdpZHRoIiwic3Ryb2tlU3R5bGUiLCJyZWN0Iiwic3Ryb2tlIiwiZm9udCIsImZpbGxUZXh0IiwidGV4dEFsaWduIiwicmFuZG9tTnVtIiwibGVuZ3RoIiwicmFuZG9tRW5lbXlOdW0iLCJwdXNoIiwiZW5lbXlOdW0iLCJjdXJyZW50RW5lbXkiLCJjb2xsaXNpb24iLCJkcmF3VUkiLCJsZWZ0QXR0YWNrIiwiYXR0YWNrZWQiLCJsQXR0YWNrWEhpdEJveCIsImxBdHRhY2tZSGl0Qm94IiwicGxheSIsInJpZ2h0QXR0YWNrIiwickF0dGFja1hIaXRCb3giLCJyQXR0YWNrWUhpdEJveCIsInNwbGljZSIsImJldHdlZW4iLCJyb3VuZCIsInNuYWFrZSIsImZwcyIsIkRhdGUiLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCIsImRyYXdCYWNrZ3JvdW5kIiwiaGFuZGxlUGxheWVyRnJhbWUiLCJtb3ZlUGxheWVyIiwiaSIsImRyYXdFbmVteSIsImRyYXdQbGF5ZXIiLCJnZW5lcmF0ZUVuZW15IiwiY2hlY2tHYW1lb3ZlciIsImdhbWUiLCJtdXRlZCIsImF1ZGlvIiwibWVudUtleXMiLCJ3aW5kb3ciLCJlIiwia2V5IiwicmVzdGFydCIsInRvZ2dsZU11dGVPbiIsInRvZ2dsZU11dGVPZmYiLCJwYXVzZSIsInN0YXJ0QW5pbWF0aW5nIiwibW92aW5nIiwidyIsInMiLCJhIiwiZCIsInNldFRpbWVvdXQiLCJoYW5kbGVQbGF5ZXJBdHRhY2siLCJtaW4iLCJtYXgiLCJ1bml0MXgiLCJ1bml0MXkiLCJ1bml0MXciLCJ1bml0MWgiLCJ1bml0MngiLCJ1bml0MnkiLCJ1bml0MnciLCJ1bml0MmgiLCJ1bml0MVhIaXRCb3giLCJ1bml0MVlIaXRCb3giLCJ1bml0MlhIaXRCb3giLCJ1bml0MllIaXRCb3giLCJ4Q29sbGlzaW9uIiwieUNvbGxpc2lvbiIsImF0dGFja1R5cGVYIiwiYXR0YWNrVHlwZVkiLCJ1bml0eCIsInVuaXR5IiwidW5pdHciLCJ1bml0aCIsInVuaXRYSGl0Qm94IiwidW5pdFlIaXRCb3giLCJ4QXR0YWNrZWQiLCJ5QXR0YWNrZWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBWTtBQUN0RCxNQUFNQyxZQUFZLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixlQUF4QixDQUFyQjtBQUNBRCxjQUFZLENBQUNFLEtBQWIsR0FBcUIsR0FBckI7QUFDQUYsY0FBWSxDQUFDRyxNQUFiLEdBQXNCLEdBQXRCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHTixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBZjtBQUNBRyxRQUFNLENBQUNGLEtBQVAsR0FBZSxHQUFmO0FBQ0FFLFFBQU0sQ0FBQ0QsTUFBUCxHQUFnQixHQUFoQjtBQUNBLE1B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TUFLSztBQUNELGFBQU8sS0FBUDtBQUNIO0FBQ0o7QUF4RFEsQ0FBYjtBQTBEQW9ILE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnBILElBQWpCLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnXG5pbXBvcnQgR2FtZVZpZXcgZnJvbSAnLi9zY3JpcHRzL2dhbWVfdmlldyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYW52YXNTcGxhc2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhcy1zcGxhc2hcIik7XG4gICAgY2FudmFzU3BsYXNoLndpZHRoID0gODQwO1xuICAgIGNhbnZhc1NwbGFzaC5oZWlnaHQgPSA2NTA7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXMtZ2FtZVwiKTtcbiAgICBjYW52YXMud2lkdGggPSA4NDA7XG4gICAgY2FudmFzLmhlaWdodCA9IDY1MDtcbiAgICBjb25zdCBjYW52YXNVSSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzLXVpXCIpO1xuICAgIGNhbnZhc1VJLndpZHRoID0gODQwO1xuICAgIGNhbnZhc1VJLmhlaWdodCA9IDY1MDtcbiAgICAvLyBjb25zdCBnYW1lMSA9IG5ldyBHYW1lKGNhbnZhcylcbiAgICBjb25zdCBuZXdHYW1lVmlldyA9IG5ldyBHYW1lVmlldyhjYW52YXMsIGNhbnZhc1NwbGFzaCwgY2FudmFzVUkpLnJlZ2lzdGVyRXZlbnRzKClcbiAgICAvLyBzZXRUaW1lb3V0KG5ld0dhbWVWaWV3LnRvZ2dsZU11dGUoKSwgMzAwMCk7XG4gICAgLy8gY29uc3QgYXVkaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm11c2ljXCIpO1xuICAgIC8vIGF1ZGlvLm9ubG9hZCA9ICgpID0+IGF1ZGlvLnBsYXkoKVxufSlcblxuXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVteSB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBlbmVteVR5cGUpIHtcbiAgICAgICAgLy8gdGhpcy54ID0gMDsgICAgICAgLy8gVE9ETyBXaWxsIGNoYW5nZSBiYXNlZCBvbiB0aGUgYXJnIHBhc3NlZCBpbnRvIGNvbnN0cnVjdG9yXG4gICAgICAgIC8vIHRoaXMueSA9IDA7XG4gICAgICAgIHRoaXMud2lkdGggPSAyNDM7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gNDgwO1xuICAgICAgICB0aGlzLmhpdGJveFdpZHRoID0gOTA7XG4gICAgICAgIHRoaXMuaGl0Ym94SGVpZ2h0ID0gMTUwO1xuICAgICAgICB0aGlzLnR5cGUgPSBlbmVteVR5cGUgLy8gVE9ETyBXaWxsIGNoYW5nZSBiYXNlZCBvbiBhIHRoZSBhcmd1bWVudCBwYXNzZWQgaW50byBjb25zdHJ1Y3RvclxuICAgICAgICB0aGlzLmVuZW15U3ByaXRlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwic3R1cGlkXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVteVNwcml0ZS5zcmMgPSBcIi4vc3JjL2ltYWdlcy9jYXIxLnBuZ1wiXG4gICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDU1MCAtIDEyMCkgKyAxMjApXG4gICAgICAgICAgICAgICAgdGhpcy55ID0gLTEwMDtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gMztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjcmF6eVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlTcHJpdGUuc3JjID0gXCIuL3NyYy9pbWFnZXMvY2FyMi5wbmdcIlxuICAgICAgICAgICAgICAgIHRoaXMueCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg1NTAgLSAxMjApICsgMTIwKVxuICAgICAgICAgICAgICAgIHRoaXMueSA9IDY1MDtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5pbmcgPSA0O1xuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgPSA2O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIHRoaXMueEhpdEJveCA9IFt0aGlzLngsIHRoaXMueCArIHRoaXMuaGl0Ym94V2lkdGhdO1xuICAgICAgICB0aGlzLnlIaXRCb3ggPSBbdGhpcy55LCB0aGlzLnkgKyB0aGlzLmhpdGJveEhlaWdodF07XG4gICAgICAgIC8vIHRoaXMuZHlpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5mcmFtZVggPSAwXG4gICAgICAgIHRoaXMuZGVhZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNheUhlbGxvKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkhlbGxvXCIpXG4gICAgfVxuICAgIC8vIGhhbmRsZUVuZW15RnJhbWUoKSB7XG4gICAgLy8gICAgIGRlYnVnZ2VyXG4gICAgLy8gICAgIGlmICh0aGlzLnR5cGUgPT09IFwiZGFtYWdlZC1jcmF6eVwiKSB7XG4gICAgLy8gICAgICAgICB0aGlzLmZyYW1lWCs9IDAuMVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGlmICh0aGlzLmZyYW1lWCA+IDQpIHtcbiAgICAvLyAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG59IiwiaW1wb3J0IEVuZW15IGZyb20gXCIuL2VuZW15XCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuY29uc3QgVXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMsIGNhbnZhc1NwbGFzaCwgY2FudmFzVUkpIHtcbiAgICAgICAgdGhpcy5oZWFsdGggPSAxMDAwO1xuICAgICAgICB0aGlzLmdhbWVvdmVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3R4VUkgPSBjYW52YXNVSS5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5jdHhTcGxhc2ggPSBjYW52YXNTcGxhc2guZ2V0Q29udGV4dChcIjJkXCIpXG4gICAgICAgIHRoaXMucGxheWVyMSA9IG5ldyBQbGF5ZXIoKTtcbiAgICAgICAgdGhpcy53aWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmtleXMgPSBbXTtcbiAgICAgICAgdGhpcy50b3BMb29wID0gLWNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMuYm90dG9tTG9vcCA9IDA7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5zcmMgPSBcIi4vc3JjL2ltYWdlcy9iYWNrZ3JvdW5kLTEucG5nXCI7XG4gICAgICAgIHRoaXMuZW5lbWllcyA9IFtdOyAvLyBjb250YWlucyBlbmVtaWVzIGN1cnJlbnRseSBvbiBzY3JlZW4sIHNob3duIGFzIGVuZW15LnR5cGVcbiAgICAgICAgdGhpcy5mcHNJbnRlcnZhbDtcbiAgICAgICAgdGhpcy5zdGFydFRpbWU7XG4gICAgICAgIHRoaXMubm93O1xuICAgICAgICB0aGlzLnRoZW47XG4gICAgICAgIHRoaXMuZWxhcHNlZDtcbiAgICAgICAgdGhpcy5zbGljZSA9IG5ldyBBdWRpbygnLi9zcmMvYXVkaW8vc2xpY2UubXAzJylcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIC8vIHRoaXMuZHJhd0JhY2tncm91bmQoKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZHJhd0JhY2tncm91bmQoKSB7XG4gICAgICAgIC8vYm90dG9tIGhhbGYgb2YgdGhlIGJhY2tncm91bmRcbiAgICAgICAgdGhpcy5jdHhTcGxhc2guZHJhd0ltYWdlKFxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLCAwLCAwLFxuICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICAwLCB0aGlzLmJvdHRvbUxvb3AsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0XG4gICAgICAgIClcbiAgICAgICAgdGhpcy5ib3R0b21Mb29wICs9IDEwO1xuICAgICAgICBpZiAodGhpcy5ib3R0b21Mb29wID09PSB0aGlzLmhlaWdodCkgdGhpcy5ib3R0b21Mb29wID0gLXRoaXMuaGVpZ2h0O1xuICAgICAgICAvL3RvcCBoYWxmIG9mIHRoZSBiYWNrZ3JvdW5kXG4gICAgICAgIHRoaXMuY3R4U3BsYXNoLmRyYXdJbWFnZShcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZCwgMCwgMCxcbiAgICAgICAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LFxuICAgICAgICAgICAgMCwgdGhpcy50b3BMb29wLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodFxuICAgICAgICApXG4gICAgICAgIHRoaXMudG9wTG9vcCArPSAxMDtcbiAgICAgICAgaWYgKHRoaXMudG9wTG9vcCA9PT0gdGhpcy5oZWlnaHQpIHRoaXMudG9wTG9vcCA9IC10aGlzLmhlaWdodDtcbiAgICB9XG5cbiAgICBkcmF3UGxheWVyKCkge1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICB0aGlzLnBsYXllcjEucGxheWVyU3ByaXRlLCB0aGlzLnBsYXllcjEud2lkdGggKiB0aGlzLnBsYXllcjEuZnJhbWVYLCB0aGlzLnBsYXllcjEuaGVpZ2h0ICogdGhpcy5wbGF5ZXIxLmZyYW1lWSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aGVyZSB3ZSBjcm9wIG91dCB0aGUgaW1hZ2UgZm9yIHNwcml0ZVxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIxLndpZHRoLCB0aGlzLnBsYXllcjEuaGVpZ2h0LCB0aGlzLnBsYXllcjEueCwgdGhpcy5wbGF5ZXIxLnksICAgIC8vIHdoZXJlIHRoZSBpbWFnZSB3aWxsIGJlIGFuaW1hdGVkIG9uIGNhbnZhc1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIxLndpZHRoLCB0aGlzLnBsYXllcjEuaGVpZ2h0XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZHJhd1VJKGhlYWx0aCwgc2NvcmUpIHtcbiAgICAgICAgLy8gaW5pdGlhbCBoZWFsdGhcbiAgICAgICAgdGhpcy5jdHhVSS5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG5cbiAgICAgICAgdGhpcy5jdHhVSS5maWxsU3R5bGUgPSBcInJlZFwiXG4gICAgICAgIHRoaXMuY3R4VUkuZmlsbFJlY3QoMTAsIDMwLCAyNTAsIDEwKVxuXG4gICAgICAgIHRoaXMuY3R4VUkuYmVnaW5QYXRoKCk7XG4gICAgICAgIHRoaXMuY3R4VUkubGluZVdpZHRoID0gXCIzXCI7XG4gICAgICAgIHRoaXMuY3R4VUkuc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIHRoaXMuY3R4VUkucmVjdCg5LCAyOSwgMjUyLCAxMilcbiAgICAgICAgdGhpcy5jdHhVSS5zdHJva2UoKTtcblxuICAgICAgICAvLyB5b3VyIGFjdHVhbCBoZWFsdGhcbiAgICAgICAgaWYgKGhlYWx0aCA8ICg3MDApKSB7XG4gICAgICAgICAgICB0aGlzLmN0eFVJLmZpbGxTdHlsZSA9IFwieWVsbG93XCJcbiAgICAgICAgICAgIHRoaXMuY3R4VUkuZmlsbFJlY3QoMTAsIDMwLCBoZWFsdGggLyA0LCAxMClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3R4VUkuZmlsbFN0eWxlID0gXCJncmVlblwiXG4gICAgICAgICAgICB0aGlzLmN0eFVJLmZpbGxSZWN0KDEwLCAzMCwgaGVhbHRoIC8gNCwgMTApXG4gICAgICAgIH1cblxuICAgICAgICAvLyB0ZXh0XG4gICAgICAgIHRoaXMuY3R4VUkuZm9udCA9IFwiNDBweCBBUkNBREVDTEFTU0lDXCJcbiAgICAgICAgdGhpcy5jdHhVSS5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIHRoaXMuY3R4VUkuZmlsbFRleHQoXCJIUFwiLCAxMCwgMjcpXG5cbiAgICAgICAgaWYgKGhlYWx0aCA8IDEwMCkge1xuICAgICAgICAgICAgdGhpcy5jdHhVSS5mb250ID0gXCI0MHB4IEFSQ0FERUNMQVNTSUNcIlxuICAgICAgICAgICAgdGhpcy5jdHhVSS5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICAgICAgdGhpcy5jdHhVSS5maWxsVGV4dChgJHtoZWFsdGh9LyAxMDAwYCwgODAsIDI3KVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGhlYWx0aCA8IDcwMCkge1xuICAgICAgICAgICAgdGhpcy5jdHhVSS5mb250ID0gXCI0MHB4IEFSQ0FERUNMQVNTSUNcIlxuICAgICAgICAgICAgdGhpcy5jdHhVSS5maWxsU3R5bGUgPSBcInllbGxvd1wiO1xuICAgICAgICAgICAgdGhpcy5jdHhVSS5maWxsVGV4dChgJHtoZWFsdGh9LyAxMDAwYCwgODAsIDI3KVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdHhVSS5mb250ID0gXCI0MHB4IEFSQ0FERUNMQVNTSUNcIlxuICAgICAgICAgICAgdGhpcy5jdHhVSS5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICB0aGlzLmN0eFVJLmZpbGxUZXh0KGAke2hlYWx0aH0vIDEwMDBgLCA4MCwgMjcpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN0eFVJLmZvbnQgPSBcIjI1cHggQVJDQURFQ0xBU1NJQ1wiXG4gICAgICAgIHRoaXMuY3R4VUkuZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICB0aGlzLmN0eFVJLnRleHRBbGlnbiA9IFwic3RhcnRcIjtcbiAgICAgICAgdGhpcy5jdHhVSS5maWxsVGV4dChgJHtzY29yZX1gLCA3NTAsIDIwKVxuICAgIH1cblxuICAgIGdlbmVyYXRlRW5lbXkoKSB7XG4gICAgICAgIC8vIGxvZ2ljIGZvciB3aGVuIHRvIGdlbmVyYXRlIGFuIGVuZW15LiAgd2lsbCBwdXNoIGludG8gdGhpcy5lbmVtaWVzXG4gICAgICAgIGNvbnN0IHJhbmRvbU51bSA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiA4MCkpO1xuICAgICAgICBpZiAodGhpcy5lbmVtaWVzLmxlbmd0aCA8IDQgJiYgcmFuZG9tTnVtID09PSA1KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImdlbmVyYXRpbmcgZW5lbXlcIilcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgcmFuZG9tRW5lbXlOdW0gPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTAwKSlcbiAgICAgICAgICAgIGxldCBlbmVteVR5cGVcbiAgICAgICAgICAgIGlmIChyYW5kb21FbmVteU51bSA+PSA0MCkge1xuICAgICAgICAgICAgICAgIGVuZW15VHlwZSA9IFwic3R1cGlkXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVuZW15VHlwZSA9IFwiY3JhenlcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coZW5lbXlUeXBlKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZW5lbXlUeXBlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnB1c2gobmV3IEVuZW15KHRoaXMuY3R4LCBlbmVteVR5cGUpKTsgICAvLyBUT0RPOiByYW5kb21seSBjaG9vc2UgdGhlIHR5cGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdFbmVteShlbmVteU51bSkge1xuICAgICAgICBsZXQgY3VycmVudEVuZW15ID0gdGhpcy5lbmVtaWVzW2VuZW15TnVtXTtcbiAgICAgICAgLy8gQU5JTUFUSU5HIFRIRSBTVFVQSUQgRU5FTVlcbiAgICAgICAgaWYgKGN1cnJlbnRFbmVteS50eXBlID09PSBcInN0dXBpZFwiKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LmVuZW15U3ByaXRlLCAwLCAwLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS53aWR0aCwgY3VycmVudEVuZW15LmhlaWdodCwgY3VycmVudEVuZW15LnggLCBjdXJyZW50RW5lbXkueSxcbiAgICAgICAgICAgICAgICA5MCwgMTUwXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY3VycmVudEVuZW15LnkgKz0gY3VycmVudEVuZW15LnNwZWVkO1xuICAgICAgICAgICAgaWYgKFV0aWwuY29sbGlzaW9uKHRoaXMucGxheWVyMS54ICsgNjcsIHRoaXMucGxheWVyMS55LCA2MCwgdGhpcy5wbGF5ZXIxLmhlaWdodCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnksIGN1cnJlbnRFbmVteS5oaXRib3hXaWR0aCwgY3VycmVudEVuZW15LmhpdGJveEhlaWdodCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFsdGggLT0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdVSSh0aGlzLmhlYWx0aCwgdGhpcy5zY29yZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaGVhbHRoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIxLmxlZnRBdHRhY2spIHtcbiAgICAgICAgICAgICAgICBpZiAoVXRpbC5hdHRhY2tlZCh0aGlzLnBsYXllcjEubEF0dGFja1hIaXRCb3gsIHRoaXMucGxheWVyMS5sQXR0YWNrWUhpdEJveCxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LngsIGN1cnJlbnRFbmVteS55LCBjdXJyZW50RW5lbXkuaGl0Ym94V2lkdGgsIGN1cnJlbnRFbmVteS5oaXRib3hIZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNsaWNlLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS50eXBlID0gXCJkYW1hZ2VkLXN0dXBpZFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllcjEucmlnaHRBdHRhY2spIHtcbiAgICAgICAgICAgICAgICBpZiAoVXRpbC5hdHRhY2tlZCh0aGlzLnBsYXllcjEuckF0dGFja1hIaXRCb3gsIHRoaXMucGxheWVyMS5yQXR0YWNrWUhpdEJveCxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LngsIGN1cnJlbnRFbmVteS55LCBjdXJyZW50RW5lbXkuaGl0Ym94V2lkdGgsIGN1cnJlbnRFbmVteS5oaXRib3hIZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNsaWNlLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS50eXBlID0gXCJkYW1hZ2VkLXN0dXBpZFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjdXJyZW50RW5lbXkueSA+IHRoaXMuaGVpZ2h0ICYmIGN1cnJlbnRFbmVteS50eXBlID09PVwic3R1cGlkXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW1pZXMuc3BsaWNlKGVuZW15TnVtLCAxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9BTklNQVRJTkcgVEhFIENSQVpZIEVORU1ZXG4gICAgICAgIGlmIChjdXJyZW50RW5lbXkudHlwZSA9PT0gXCJjcmF6eVwiKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LmVuZW15U3ByaXRlLCAwLCAwLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS53aWR0aCwgY3VycmVudEVuZW15LmhlaWdodCwgY3VycmVudEVuZW15LngsIGN1cnJlbnRFbmVteS55LFxuICAgICAgICAgICAgICAgIDkwLCAxNTBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIxLnggKyAyMCAgPiBjdXJyZW50RW5lbXkueCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS54ICs9IGN1cnJlbnRFbmVteS50dXJuaW5nO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS55IC09IGN1cnJlbnRFbmVteS5zcGVlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKFV0aWwuYmV0d2Vlbih0aGlzLnBsYXllcjEueCArIDIwLCBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnggKyAyMCkpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueSAtPSAxMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS54IC09IGN1cnJlbnRFbmVteS50dXJuaW5nO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS55IC09IGN1cnJlbnRFbmVteS5zcGVlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChVdGlsLmNvbGxpc2lvbih0aGlzLnBsYXllcjEueCArIDY3LCB0aGlzLnBsYXllcjEueSwgNjAsIHRoaXMucGxheWVyMS5oZWlnaHQsXG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LngsIGN1cnJlbnRFbmVteS55LCBjdXJyZW50RW5lbXkuaGl0Ym94V2lkdGgsIGN1cnJlbnRFbmVteS5oaXRib3hIZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhbHRoIC09IDU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1VJKHRoaXMuaGVhbHRoLHRoaXMuc2NvcmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllcjEubGVmdEF0dGFjaykge1xuICAgICAgICAgICAgICAgIGlmIChVdGlsLmF0dGFja2VkKHRoaXMucGxheWVyMS5sQXR0YWNrWEhpdEJveCwgdGhpcy5wbGF5ZXIxLmxBdHRhY2tZSGl0Qm94LFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnksIGN1cnJlbnRFbmVteS5oaXRib3hXaWR0aCwgY3VycmVudEVuZW15LmhpdGJveEhlaWdodCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2xpY2UucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LnR5cGUgPSBcImRhbWFnZWQtY3JhenlcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllcjEucmlnaHRBdHRhY2spIHtcbiAgICAgICAgICAgICAgICBpZiAoVXRpbC5hdHRhY2tlZCh0aGlzLnBsYXllcjEuckF0dGFja1hIaXRCb3gsIHRoaXMucGxheWVyMS5yQXR0YWNrWUhpdEJveCxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LngsIGN1cnJlbnRFbmVteS55LCBjdXJyZW50RW5lbXkuaGl0Ym94V2lkdGgsIGN1cnJlbnRFbmVteS5oaXRib3hIZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNsaWNlLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS50eXBlID0gXCJkYW1hZ2VkLWNyYXp5XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGN1cnJlbnRFbmVteS55IDwgLTE1MCAmJiBjdXJyZW50RW5lbXkudHlwZSA9PT0gXCJjcmF6eVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnNwbGljZShlbmVteU51bSwgMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERBTUFHRUQgRU5FTUlFU1xuICAgICBcbiAgICAgICAgaWYgKGN1cnJlbnRFbmVteS50eXBlID09PSBcImRhbWFnZWQtc3R1cGlkXCIpIHtcblxuICAgICAgICAgICAgY3VycmVudEVuZW15LmVuZW15U3ByaXRlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBjdXJyZW50RW5lbXkuZW5lbXlTcHJpdGUuc3JjID0gXCIuL3NyYy9pbWFnZXMvY2FyMS1keWluZy5wbmdcIlxuICBcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkuZW5lbXlTcHJpdGUsIE1hdGgucm91bmQoY3VycmVudEVuZW15LmZyYW1lWCkgKiBjdXJyZW50RW5lbXkud2lkdGgsIDAsXG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LndpZHRoLCBjdXJyZW50RW5lbXkuaGVpZ2h0LCBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnksICAgIC8vVE9ETyBmcmFtZXNzc1xuICAgICAgICAgICAgICAgIDkwLCAxNTBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjdXJyZW50RW5lbXkueSArPSA0O1xuICAgICAgICAgICAgY3VycmVudEVuZW15LmZyYW1lWCArPSAwLjFcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGN1cnJlbnRFbmVteS5mcmFtZVggPiA0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnNwbGljZShlbmVteU51bSwgMSlcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3JlICs9IDEwMFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGN1cnJlbnRFbmVteS50eXBlID09PSBcImRhbWFnZWQtY3JhenlcIikge1xuXG4gICAgICAgICAgICBjdXJyZW50RW5lbXkuZW5lbXlTcHJpdGUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGN1cnJlbnRFbmVteS5lbmVteVNwcml0ZS5zcmMgPSBcIi4vc3JjL2ltYWdlcy9jYXIyLWR5aW5nLnBuZ1wiXG5cbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkuZW5lbXlTcHJpdGUsIE1hdGgucm91bmQoY3VycmVudEVuZW15LmZyYW1lWCkgKiBjdXJyZW50RW5lbXkud2lkdGgsIDAsXG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LndpZHRoLCBjdXJyZW50RW5lbXkuaGVpZ2h0LCBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnksICAgIC8vVE9ETyBmcmFtZXNzc1xuICAgICAgICAgICAgICAgIDkwLCAxNTBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjdXJyZW50RW5lbXkueSArPSA0O1xuICAgICAgICAgICAgY3VycmVudEVuZW15LmZyYW1lWCArPSAwLjFcbiAgICAgICAgICAgIGlmIChjdXJyZW50RW5lbXkuZnJhbWVYID4gNCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5lbWllcy5zcGxpY2UoZW5lbXlOdW0sIDEpXG4gICAgICAgICAgICAgICAgdGhpcy5zY29yZSArPSA1MDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGVja0dhbWVvdmVyKCkge1xuICAgICAgICBpZiAodGhpcy5oZWFsdGggPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lb3ZlciA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjgwcHggQVJDQURFQ0xBU1NJQ1wiXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkdBTUUgT1ZFUlwiLCAyNDUsIDMwMClcblxuICAgICAgICAgICAgY29uc3Qgc25hYWtlID0gbmV3IEF1ZGlvKCcuL3NyYy9hdWRpby9HYW1lb3Zlci5tcDMnKVxuICAgICAgICAgICAgc25hYWtlLnBsYXkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0QW5pbWF0aW5nKGZwcykge1xuICAgICAgICB0aGlzLmZwc0ludGVydmFsID0gMTAwMCAvIGZwcztcbiAgICAgICAgdGhpcy50aGVuID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSB0aGlzLnRoZW47XG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgIH1cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMubm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gdGhpcy5ub3cgLSB0aGlzLnRoZW47XG4gICAgICAgIGlmICh0aGlzLmVsYXBzZWQgPiB0aGlzLmZwc0ludGVydmFsKSB7XG4gICAgICAgICAgICB0aGlzLnRoZW4gPSB0aGlzLm5vdyAtICh0aGlzLmVsYXBzZWQgJSB0aGlzLmZwc0ludGVydmFsKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5kcmF3VUkodGhpcy5oZWFsdGgsIHRoaXMuc2NvcmUpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICghdGhpcy5nYW1lb3Zlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIxLmhhbmRsZVBsYXllckZyYW1lKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIxLm1vdmVQbGF5ZXIoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW5lbWllcy5sZW5ndGg7IGkrKyApIHRoaXMuZHJhd0VuZW15KGkpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3UGxheWVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUVuZW15KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0dhbWVvdmVyKCk7XG4gICAgICAgICAgICAgICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHN0YXJ0QW5pbWF0aW5nKGZwcykge1xuICAgIC8vICAgICB0aGlzLmZwc0ludGVydmFsID0gMTAwMCAvIGZwcztcbiAgICAvLyAgICAgdGhpcy50aGVuID0gRGF0ZS5ub3coKTtcbiAgICAvLyAgICAgdGhpcy5zdGFydFRpbWUgPSB0aGlzLnRoZW47XG4gICAgLy8gICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgIC8vIH1cbiAgICAvLyBhbmltYXRlKCkge1xuICAgIC8vICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgIC8vICAgICB0aGlzLm5vdyA9IERhdGUubm93KCk7XG4gICAgLy8gICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMubm93IC0gdGhpcy50aGVuO1xuICAgIC8vICAgICBpZiAodGhpcy5lbGFwc2VkID4gdGhpcy5mcHNJbnRlcnZhbCkge1xuICAgIC8vICAgICAgICAgdGhpcy50aGVuID0gdGhpcy5ub3cgLSAodGhpcy5lbGFwc2VkICUgdGhpcy5mcHNJbnRlcnZhbCk7XG4gICAgLy8gICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgLy8gICAgICAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKCk7XG4gICAgLy8gICAgICAgICBpZiAodGhpcy5lbmVtaWVzWzBdKSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5kcmF3RW5lbXkoMCk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBpZiAodGhpcy5lbmVtaWVzWzFdKSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5kcmF3RW5lbXkoMSk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBpZiAodGhpcy5lbmVtaWVzWzJdKSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5kcmF3RW5lbXkoMik7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBpZiAodGhpcy5lbmVtaWVzWzNdKSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5kcmF3RW5lbXkoMyk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBpZiAodGhpcy5lbmVtaWVzWzRdKSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5kcmF3RW5lbXkoNCk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICB0aGlzLmRyYXdQbGF5ZXIoKTtcbiAgICAvLyAgICAgICAgIHRoaXMucGxheWVyMS5tb3ZlUGxheWVyKCk7XG4gICAgLy8gICAgICAgICB0aGlzLnBsYXllcjEuaGFuZGxlUGxheWVyRnJhbWUoKTtcbiAgICAvLyAgICAgICAgIHRoaXMuZ2VuZXJhdGVFbmVteSgpO1xuICAgIC8vICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbn1cblxuIiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVmlldyB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjYW52YXNTcGxhc2gsIGNhbnZhc1VJKSB7XG4gICAgICAgIC8vIHRoaXMuY3R4VUkgPSBjYW52YXNVSS5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcywgY2FudmFzU3BsYXNoLCBjYW52YXNVSSlcbiAgICAgICAgdGhpcy5jdHhTcGxhc2ggPSBjYW52YXNTcGxhc2guZ2V0Q29udGV4dChcIjJkXCIpXG4gICAgICAgIHRoaXMud2lkdGggPSBjYW52YXNTcGxhc2gud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gY2FudmFzU3BsYXNoLmhlaWdodDtcbiAgICAgICAgdGhpcy50b3BMb29wID0gLWNhbnZhc1NwbGFzaC5oZWlnaHQ7XG4gICAgICAgIHRoaXMuYm90dG9tTG9vcCA9IDA7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5zcmMgPSBcIi4vc3JjL2ltYWdlcy9iYWNrZ3JvdW5kLTEucG5nXCI7XG4gICAgICAgIC8vIHRoaXMuZnBzSW50ZXJ2YWw7XG4gICAgICAgIC8vIHRoaXMuc3RhcnRUaW1lO1xuICAgICAgICAvLyB0aGlzLm5vdztcbiAgICAgICAgLy8gdGhpcy50aGVuO1xuICAgICAgICAvLyB0aGlzLmVsYXBzZWQ7XG4gICAgICAgIHRoaXMubXV0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXVzaWNcIik7XG4gICAgICAgIHRoaXMubWVudUtleXMgPSBbXVxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XG4gICAgfVxuICAgIFxuICAgIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwibVwiICYmIHRoaXMubXV0ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVNdXRlT24oKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZS5rZXkgPT09IFwiblwiICYmIHRoaXMubXV0ZWQgPT09IHRydWUgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVNdXRlT2ZmKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIChlLmtleSA9PT0gXCJtXCIpXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5tdXRlZCA/IHRoaXMudG9nZ2xlTXV0ZU9mZigpIDogdGhpcy50b2dnbGVNdXRlT2ZmKCk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIHRvZ2dsZU11dGVPbigpIHtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgaWYgKHRoaXMubXV0ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm11dGVcIilcbiAgICAgICAgICAgICAgICB0aGlzLm11dGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmF1ZGlvLnBhdXNlKClcbiAgICAgICAgfVxuICAgIH1cbiAgICB0b2dnbGVNdXRlT2ZmKCkge1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICBjb25zb2xlLmxvZyhcInVubXV0ZVwiKVxuICAgICAgICAgICAgdGhpcy5tdXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5hdWRpby5wbGF5KCk7XG4gICAgfVxuXG4gICAgZHJhd1N0YXRpY0JhY2tncm91bmQoKSB7XG4gICAgICAgIC8vYm90dG9tIGhhbGYgb2YgdGhlIGJhY2tncm91bmRcbiAgICAgICAgdGhpcy5jdHhTcGxhc2guZHJhd0ltYWdlKFxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLCAwLCAwLFxuICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICAwLCB0aGlzLmJvdHRvbUxvb3AsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0XG4gICAgICAgIClcbiAgICAgICAgLy8gdGhpcy5ib3R0b21Mb29wICs9IDEwO1xuICAgICAgICAvLyBpZiAodGhpcy5ib3R0b21Mb29wID09PSB0aGlzLmhlaWdodCkgdGhpcy5ib3R0b21Mb29wID0gLXRoaXMuaGVpZ2h0O1xuICAgICAgICAvLyAvL3RvcCBoYWxmIG9mIHRoZSBiYWNrZ3JvdW5kXG4gICAgICAgIC8vIHRoaXMuY3R4U3BsYXNoLmRyYXdJbWFnZShcbiAgICAgICAgLy8gICAgIHRoaXMuYmFja2dyb3VuZCwgMCwgMCxcbiAgICAgICAgLy8gICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LFxuICAgICAgICAvLyAgICAgMCwgdGhpcy50b3BMb29wLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodFxuICAgICAgICAvLyApXG4gICAgICAgIC8vIHRoaXMudG9wTG9vcCArPSAxMDtcbiAgICAgICAgLy8gaWYgKHRoaXMudG9wTG9vcCA9PT0gdGhpcy5oZWlnaHQpIHRoaXMudG9wTG9vcCA9IC10aGlzLmhlaWdodDtcbiAgICB9XG5cbiAgICAvLyBzdGFydEFuaW1hdGluZyhmcHMpIHtcbiAgICAvLyAgICAgdGhpcy5mcHNJbnRlcnZhbCA9IDEwMDAgLyBmcHM7XG4gICAgLy8gICAgIHRoaXMudGhlbiA9IERhdGUubm93KCk7XG4gICAgLy8gICAgIHRoaXMuc3RhcnRUaW1lID0gdGhpcy50aGVuO1xuICAgIC8vICAgICB0aGlzLmFuaW1hdGVUaXRsZSgpO1xuICAgIC8vIH1cblxuICAgIC8vIGFuaW1hdGVUaXRsZSgpIHtcbiAgICAvLyAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZVRpdGxlLmJpbmQodGhpcykpO1xuICAgIC8vICAgICB0aGlzLm5vdyA9IERhdGUubm93KCk7XG4gICAgLy8gICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMubm93IC0gdGhpcy50aGVuO1xuICAgIC8vICAgICBpZiAodGhpcy5lbGFwc2VkID4gdGhpcy5mcHNJbnRlcnZhbCkge1xuICAgIC8vICAgICAgICAgdGhpcy50aGVuID0gdGhpcy5ub3cgLSAodGhpcy5lbGFwc2VkICUgdGhpcy5mcHNJbnRlcnZhbCk7XG4gICAgLy8gICAgICAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKCk7XG4gICAgLy8gICAgICAgICAvLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlVGl0bGUuYmluZCh0aGlzKSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgLy8gdGhpcy5zdGFydEFuaW1hdGluZyg0NSk7XG4gICAgICAgIHRoaXMuZ2FtZS5zdGFydEFuaW1hdGluZyg0NSk7XG4gICAgfVxuXG4gICAgcmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5nYW1lLmdhbWVvdmVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ2FtZS5oZWFsdGggPSAxMDAwO1xuICAgICAgICB0aGlzLmdhbWUuZW5lbWllcyA9IFtdO1xuICAgICAgICAvLyB0aGlzLnN0YXJ0QW5pbWF0aW5nKDQ1KTtcbiAgICAgICAgdGhpcy5nYW1lLnN0YXJ0QW5pbWF0aW5nKDQ1KTtcbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnggPSAzMDA7XG4gICAgICAgIHRoaXMueSA9IDIwMDtcbiAgICAgICAgdGhpcy53aWR0aCA9IDE4NztcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxMzA7XG4gICAgICAgIHRoaXMueEhpdEJveCA9IFt0aGlzLngsIHRoaXMueCArIHRoaXMud2lkdGhdO1xuICAgICAgICB0aGlzLnlIaXRCb3ggPSBbdGhpcy55LCB0aGlzLnkgK3RoaXMuaGVpZ2h0XTtcbiAgICAgICAgdGhpcy5mcmFtZVggPSAwO1xuICAgICAgICB0aGlzLmZyYW1lWSA9IDA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAxMDtcbiAgICAgICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sZWZ0QXR0YWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmlnaHRBdHRhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sQXR0YWNrWEhpdEJveDtcbiAgICAgICAgdGhpcy5sQXR0YWNrWUhpdEJveDtcbiAgICAgICAgdGhpcy5yQXR0YWNrWEhpdEJveDtcbiAgICAgICAgdGhpcy5yQXR0YWNrWUhpdEJveDtcbiAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCIuL3NyYy9pbWFnZXMvYmlrZTEucG5nXCI7XG4gICAgICAgIHRoaXMua2V5cyA9IFtdO1xuICAgICAgICAvLyB0aGlzLmF0dGFja1JlYWR5XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcbiAgICB9XG5cbiAgICByZWdpc3RlckV2ZW50cygpIHtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmtleXNbZS5rZXldID0gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMua2V5c1tlLmtleV07XG4gICAgICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcInFcIikgdGhpcy5sZWZ0QXR0YWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJlXCIpIHRoaXMucmlnaHRBdHRhY2sgPSB0cnVlO1xuICAgICAgICB9KVxuXG5cbiAgICB9XG4gXG4gICAgXG4gICAgbW92ZVBsYXllcigpIHtcbiAgICAgICAgaWYgKHRoaXMua2V5cy53ICYmIHRoaXMueSA+IDApIHsgICAgICAgICAvLyBtb3ZpbmcgdXBcbiAgICAgICAgICAgIHRoaXMueSAtPSB0aGlzLnNwZWVkOyAgICAgICAgICAgLy8gaW5jcmVhc2Ugb3VyIHBsYXlzZXIncyB5IHBvcyBieSBzcGVlZFxuICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmtleXMucyAmJiB0aGlzLnkgPCA1NTApIHsgICAgLy8gbW92aW5nIGRvd25cbiAgICAgICAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmtleXMuYSAmJiB0aGlzLnggPiA4MCkge1xuICAgICAgICAgICAgICAgIHRoaXMueCAtPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5rZXlzLmQgJiYgdGhpcy54IDwgNTgwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxlZnRBdHRhY2spIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVYID0gMDtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVZID0gMjtcbiAgICAgICAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB0aGlzLmxlZnRBdHRhY2sgPSB0cnVlO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxlZnRBdHRhY2sgPSBmYWxzZSwgNTAwKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJpZ2h0QXR0YWNrKSB7XG4gICAgICAgICAgICB0aGlzLmZyYW1lWCA9IDA7XG4gICAgICAgICAgICB0aGlzLmZyYW1lWSA9IDE7XG4gICAgICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gdGhpcy5yaWdodEF0dGFjayA9IHRydWU7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmlnaHRBdHRhY2sgPSBmYWxzZSwgNTAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlUGxheWVyRnJhbWUoKSB7XG4gICAgICAgIGlmICh0aGlzLm1vdmluZyAmJiAoIXRoaXMubGVmdEF0dGFjayB8fCAhdGhpcy5yaWdodEF0dGFjaykpIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVYKytcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMucmlnaHRBdHRhY2sgJiYgdGhpcy5mcmFtZVkgPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVZID0gMDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUiBBVFRBQ0tcIilcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMubGVmdEF0dGFjayAmJiB0aGlzLmZyYW1lWSA9PT0gMikge1xuICAgICAgICAgICAgdGhpcy5mcmFtZVkgPSAwO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMIEFUVEFDS1wiKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZnJhbWVYID49IDIpe1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coKVxuICAgICAgICAgICAgdGhpcy5mcmFtZVggPSAwXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVQbGF5ZXJBdHRhY2soKTtcbiAgICB9XG5cbiAgICBoYW5kbGVQbGF5ZXJBdHRhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmxlZnRBdHRhY2spIHtcbiAgICAgICAgICAgIHRoaXMubEF0dGFja1hIaXRCb3ggPSBbdGhpcy54ICsgNzAsIHRoaXMueCArIDcwIC0gMzBdO1xuICAgICAgICAgICAgdGhpcy5sQXR0YWNrWUhpdEJveCA9IFt0aGlzLnksIHRoaXMueSArIDc5XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yaWdodEF0dGFjaykge1xuICAgICAgICAgICAgdGhpcy5yQXR0YWNrWEhpdEJveCA9IFt0aGlzLnggKyAxNTAsIHRoaXMueCArIDE1MCArIDMwXTtcbiAgICAgICAgICAgIHRoaXMuckF0dGFja1lIaXRCb3ggPSBbdGhpcy55LCB0aGlzLnkgKyA3OV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmxlZnRBdHRhY2spIHtcbiAgICAgICAgICAgIHRoaXMubEF0dGFja1hIaXRCb3ggPSBbXTtcbiAgICAgICAgICAgIHRoaXMubEF0dGFja1lIaXRCb3ggPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMucmlnaHRBdHRhY2spIHtcbiAgICAgICAgICAgIHRoaXMuckF0dGFja1hIaXRCb3ggPSBbXTtcbiAgICAgICAgICAgIHRoaXMuckF0dGFja1lIaXRCb3ggPSBbXTtcbiAgICAgICAgfVxuICAgIH1cblxufSIsImNvbnN0IFV0aWwgPSB7XG5cbiAgICBiZXR3ZWVuKHgsIG1pbiwgbWF4KSB7XG4gICAgICAgIHJldHVybiB4ID49IG1pbiAmJiB4IDw9IG1heDtcbiAgICB9LFxuICAgIGNvbGxpc2lvbih1bml0MXgsIHVuaXQxeSwgdW5pdDF3LCB1bml0MWgsIHVuaXQyeCwgdW5pdDJ5LCB1bml0MncsIHVuaXQyaCkge1xuICAgICAgICBsZXQgdW5pdDFYSGl0Qm94ID0gW3VuaXQxeCwgdW5pdDF4ICsgdW5pdDF3XTtcbiAgICAgICAgbGV0IHVuaXQxWUhpdEJveCA9IFt1bml0MXksIHVuaXQxeSArIHVuaXQxaF07XG4gICAgICAgIGxldCB1bml0MlhIaXRCb3ggPSBbdW5pdDJ4LCB1bml0MnggKyB1bml0MnddO1xuICAgICAgICBsZXQgdW5pdDJZSGl0Qm94ID0gW3VuaXQyeSwgdW5pdDJ5ICsgdW5pdDJoXTtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgbGV0IHhDb2xsaXNpb24gPSBmYWxzZTtcbiAgICAgICAgbGV0IHlDb2xsaXNpb24gPSBmYWxzZTtcbiAgICAgICAgaWYgKFV0aWwuYmV0d2Vlbih1bml0MVhIaXRCb3hbMF0sIHVuaXQyWEhpdEJveFswXSwgdW5pdDJYSGl0Qm94WzFdKSB8fFxuICAgICAgICAgICAgVXRpbC5iZXR3ZWVuKHVuaXQxWEhpdEJveFsxXSwgdW5pdDJYSGl0Qm94WzBdLCB1bml0MlhIaXRCb3hbMV0pKSB7XG4gICAgICAgICAgICAgICAgeENvbGxpc2lvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJDT0xMSVNJT05YXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIGlmIChVdGlsLmJldHdlZW4odW5pdDFZSGl0Qm94WzBdLCB1bml0MllIaXRCb3hbMF0sIHVuaXQyWUhpdEJveFsxXSkgfHxcbiAgICAgICAgICAgIFV0aWwuYmV0d2Vlbih1bml0MVlIaXRCb3hbMV0sIHVuaXQyWUhpdEJveFswXSwgdW5pdDJZSGl0Qm94WzFdKSkge1xuICAgICAgICAgICAgICAgIHlDb2xsaXNpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQ09MTElTSU9OWVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICBpZiAoKHhDb2xsaXNpb24gPT09IHRydWUgJiYgeUNvbGxpc2lvbiA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkNPTExJU0lPTlwiKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGF0dGFja2VkKGF0dGFja1R5cGVYLCBhdHRhY2tUeXBlWSwgdW5pdHgsIHVuaXR5LCB1bml0dywgdW5pdGgpIHtcbiAgICAgICAgbGV0IHVuaXRYSGl0Qm94ID0gW3VuaXR4LCB1bml0eCArIHVuaXR3XTtcbiAgICAgICAgbGV0IHVuaXRZSGl0Qm94ID0gW3VuaXR5LCB1bml0eSArIHVuaXRoXTtcbiAgICAgICAgbGV0IHhBdHRhY2tlZDtcbiAgICAgICAgbGV0IHlBdHRhY2tlZDtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgaWYgKFV0aWwuYmV0d2VlbihhdHRhY2tUeXBlWFswXSwgdW5pdFhIaXRCb3hbMF0sIHVuaXRYSGl0Qm94WzFdKSB8fFxuICAgICAgICAgICAgVXRpbC5iZXR3ZWVuKGF0dGFja1R5cGVYWzFdLCB1bml0WEhpdEJveFswXSwgdW5pdFhIaXRCb3hbMV0pKSB7XG4gICAgICAgICAgICB4QXR0YWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJYIEFUVEFDS0VEXCIpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKFV0aWwuYmV0d2VlbihhdHRhY2tUeXBlWVswXSwgdW5pdFlIaXRCb3hbMF0sIHVuaXRZSGl0Qm94WzFdKSB8fFxuICAgICAgICAgICAgVXRpbC5iZXR3ZWVuKGF0dGFja1R5cGVZWzFdLCB1bml0WUhpdEJveFswXSwgdW5pdFlIaXRCb3hbMV0pKSB7XG4gICAgICAgICAgICB5QXR0YWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh4QXR0YWNrZWQgPT09IHRydWUgJiYgeUF0dGFja2VkID09PSB0cnVlKSkge1xuICAgICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU0xJQ0UhXCIpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gVXRpbCJdLCJzb3VyY2VSb290IjoiIn0=