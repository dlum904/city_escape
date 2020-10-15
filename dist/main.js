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


var canvas = document.getElementById("canvas-game");
canvas.width = 840;
canvas.height = 650;
var canvasUI = document.getElementById("canvas-ui");
canvasUI.width = 840;
canvasUI.height = 650; // const game1 = new Game(canvas)

new _scripts_game_view__WEBPACK_IMPORTED_MODULE_1__["default"](canvas, canvasUI).start();

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
  function Game(canvas) {
    _classCallCheck(this, Game);

    this.health = 1000;
    this.gameover = false;
    this.ctx = canvas.getContext("2d");
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
  }

  _createClass(Game, [{
    key: "drawBackground",
    value: function drawBackground() {
      //bottom half of the background
      this.ctx.drawImage(this.background, 0, 0, this.width, this.height, 0, this.bottomLoop, this.width, this.height);
      this.bottomLoop += 10;
      if (this.bottomLoop === this.height) this.bottomLoop = -this.height; //top half of the background

      this.ctx.drawImage(this.background, 0, 0, this.width, this.height, 0, this.topLoop, this.width, this.height);
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
    key: "drawHealth",
    value: function drawHealth(health) {
      // initial health
      this.ctx.fillStyle = "red";
      this.ctx.fillRect(10, 30, 250, 10);
      this.ctx.beginPath();
      this.ctx.lineWidth = "3";
      this.ctx.strokeStyle = "white";
      this.ctx.rect(9, 29, 252, 12);
      this.ctx.stroke(); // your actual health

      if (health < 700) {
        this.ctx.fillStyle = "yellow";
        this.ctx.fillRect(10, 30, health / 4, 10);
      } else {
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(10, 30, health / 4, 10);
      } // text


      this.ctx.font = "40px ARCADECLASSIC";
      this.ctx.fillStyle = "white";
      this.ctx.fillText("HP", 10, 27);

      if (health < 100) {
        this.ctx.font = "40px ARCADECLASSIC";
        this.ctx.fillStyle = "red";
        this.ctx.fillText("".concat(health, "/ 1000"), 80, 27);
      } else if (health < 700) {
        this.ctx.font = "40px ARCADECLASSIC";
        this.ctx.fillStyle = "yellow";
        this.ctx.fillText("".concat(health, "/ 1000"), 80, 27);
      } else {
        this.ctx.font = "40px ARCADECLASSIC";
        this.ctx.fillStyle = "white";
        this.ctx.fillText("".concat(health, "/ 1000"), 80, 27);
      }
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
        currentEnemy.frameX += 0.1; // currentEnemy.handleEnemyFrame();

        if (currentEnemy.frameX > 4) this.enemies.splice(enemyNum, 1);
      }

      if (currentEnemy.type === "damaged-crazy") {
        currentEnemy.enemySprite = new Image();
        currentEnemy.enemySprite.src = "./src/images/car2-dying.png";
        this.ctx.drawImage(currentEnemy.enemySprite, Math.round(currentEnemy.frameX) * currentEnemy.width, 0, currentEnemy.width, currentEnemy.height, currentEnemy.x, currentEnemy.y, //TODO framesss
        90, 150);
        currentEnemy.y += 4;
        currentEnemy.frameX += 0.1; // currentEnemy.handleEnemyFrame();

        if (currentEnemy.frameX > 4) this.enemies.splice(enemyNum, 1);
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

        if (!this.gameover) {
          this.ctx.clearRect(0, 0, this.width, this.height);
          this.drawBackground();
          this.player1.handlePlayerFrame();
          this.player1.movePlayer();

          for (var i = 0; i < this.enemies.length; i++) {
            this.drawEnemy(i);
          }

          this.drawHealth(this.health);
          this.drawPlayer();
          this.generateEnemy();
          this.checkGameover();
          requestAnimationFrame(this.animate.bind(this));
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
  function GameView(canvas, canvasUI) {
    _classCallCheck(this, GameView);

    this.ctxUI = canvasUI.getContext("2d");
    this.game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"](canvas);
    this.restart();
    this.registerEvents();
  }

  _createClass(GameView, [{
    key: "registerEvents",
    value: function registerEvents() {
      var _this = this;

      window.addEventListener("keydown", function (e) {
        if (e.key === "r") {
          _this.restart();
        }
      });
    }
  }, {
    key: "start",
    value: function start() {
      this.game.startAnimating(45); // this.game.animate();
    }
  }, {
    key: "restart",
    value: function restart() {
      this.game.gameover = false;
      this.game.health = 1000;
      this.game.enemies = [];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VuZW15LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImhlaWdodCIsImNhbnZhc1VJIiwiR2FtZVZpZXciLCJzdGFydCIsIkVuZW15IiwiY3R4IiwiZW5lbXlUeXBlIiwiaGl0Ym94V2lkdGgiLCJoaXRib3hIZWlnaHQiLCJ0eXBlIiwiZW5lbXlTcHJpdGUiLCJJbWFnZSIsInNyYyIsIngiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ5Iiwic3BlZWQiLCJ0dXJuaW5nIiwieEhpdEJveCIsInlIaXRCb3giLCJmcmFtZVgiLCJkZWFkIiwiY29uc29sZSIsImxvZyIsIlV0aWwiLCJyZXF1aXJlIiwiR2FtZSIsImhlYWx0aCIsImdhbWVvdmVyIiwiZ2V0Q29udGV4dCIsInBsYXllcjEiLCJQbGF5ZXIiLCJrZXlzIiwidG9wTG9vcCIsImJvdHRvbUxvb3AiLCJiYWNrZ3JvdW5kIiwiZW5lbWllcyIsImZwc0ludGVydmFsIiwic3RhcnRUaW1lIiwibm93IiwidGhlbiIsImVsYXBzZWQiLCJzbGljZSIsIkF1ZGlvIiwiZHJhd0ltYWdlIiwicGxheWVyU3ByaXRlIiwiZnJhbWVZIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJiZWdpblBhdGgiLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsInJlY3QiLCJzdHJva2UiLCJmb250IiwiZmlsbFRleHQiLCJyYW5kb21OdW0iLCJsZW5ndGgiLCJyYW5kb21FbmVteU51bSIsInB1c2giLCJlbmVteU51bSIsImN1cnJlbnRFbmVteSIsImNvbGxpc2lvbiIsImxlZnRBdHRhY2siLCJhdHRhY2tlZCIsImxBdHRhY2tYSGl0Qm94IiwibEF0dGFja1lIaXRCb3giLCJwbGF5IiwicmlnaHRBdHRhY2siLCJyQXR0YWNrWEhpdEJveCIsInJBdHRhY2tZSGl0Qm94Iiwic3BsaWNlIiwiYmV0d2VlbiIsInJvdW5kIiwic25hYWtlIiwiZnBzIiwiRGF0ZSIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJiaW5kIiwiY2xlYXJSZWN0IiwiZHJhd0JhY2tncm91bmQiLCJoYW5kbGVQbGF5ZXJGcmFtZSIsIm1vdmVQbGF5ZXIiLCJpIiwiZHJhd0VuZW15IiwiZHJhd0hlYWx0aCIsImRyYXdQbGF5ZXIiLCJnZW5lcmF0ZUVuZW15IiwiY2hlY2tHYW1lb3ZlciIsImN0eFVJIiwiZ2FtZSIsInJlc3RhcnQiLCJyZWdpc3RlckV2ZW50cyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5Iiwic3RhcnRBbmltYXRpbmciLCJtb3ZpbmciLCJ3IiwicyIsImEiLCJkIiwic2V0VGltZW91dCIsImhhbmRsZVBsYXllckF0dGFjayIsIm1pbiIsIm1heCIsInVuaXQxeCIsInVuaXQxeSIsInVuaXQxdyIsInVuaXQxaCIsInVuaXQyeCIsInVuaXQyeSIsInVuaXQydyIsInVuaXQyaCIsInVuaXQxWEhpdEJveCIsInVuaXQxWUhpdEJveCIsInVuaXQyWEhpdEJveCIsInVuaXQyWUhpdEJveCIsInhDb2xsaXNpb24iLCJ5Q29sbGlzaW9uIiwiYXR0YWNrVHlwZVgiLCJhdHRhY2tUeXBlWSIsInVuaXR4IiwidW5pdHkiLCJ1bml0dyIsInVuaXRoIiwidW5pdFhIaXRCb3giLCJ1bml0WUhpdEJveCIsInhBdHRhY2tlZCIsInlBdHRhY2tlZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFD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Q0FBRCxDQUF4QyxFQUE2Q0EsV0FBVyxDQUFDLENBQUQsQ0FBeEQsQ0FESixFQUNrRTtBQUM5REUsZUFBUyxHQUFHLElBQVo7QUFDQTVHLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7QUFDSDs7QUFDRCxRQUFJQyxJQUFJLENBQUNnRCxPQUFMLENBQWFtRCxXQUFXLENBQUMsQ0FBRCxDQUF4QixFQUE2Qk0sV0FBVyxDQUFDLENBQUQsQ0FBeEMsRUFBNkNBLFdBQVcsQ0FBQyxDQUFELENBQXhELEtBQ0F6RyxJQUFJLENBQUNnRCxPQUFMLENBQWFtRCxXQUFXLENBQUMsQ0FBRCxDQUF4QixFQUE2Qk0sV0FBVyxDQUFDLENBQUQsQ0FBeEMsRUFBNkNBLFdBQVcsQ0FBQyxDQUFELENBQXhELENBREosRUFDa0U7QUFDOURFLGVBQVMsR0FBRyxJQUFaO0FBRUg7O0FBQ0QsUUFBS0QsU0FBUyxLQUFLLElBQWQsSUFBc0JDLFNBQVMsS0FBSyxJQUF6QyxFQUFnRDtBQUM1QztBQUNBN0csYUFBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNBLGFBQU8sSUFBUDtBQUNILEtBSkQsTUFLSztBQUNELGFBQU8sS0FBUDtBQUNIO0FBQ0o7QUF4RFEsQ0FBYjtBQTBEQTZHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjdHLElBQWpCLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnXG5pbXBvcnQgR2FtZVZpZXcgZnJvbSAnLi9zY3JpcHRzL2dhbWVfdmlldyc7XG5cblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXMtZ2FtZVwiKTtcbmNhbnZhcy53aWR0aCA9IDg0MDtcbmNhbnZhcy5oZWlnaHQgPSA2NTA7XG5jb25zdCBjYW52YXNVSSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzLXVpXCIpO1xuY2FudmFzVUkud2lkdGggPSA4NDA7XG5jYW52YXNVSS5oZWlnaHQgPSA2NTA7XG4vLyBjb25zdCBnYW1lMSA9IG5ldyBHYW1lKGNhbnZhcylcbm5ldyBHYW1lVmlldyhjYW52YXMsIGNhbnZhc1VJKS5zdGFydCgpXG5cblxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lbXkge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgZW5lbXlUeXBlKSB7XG4gICAgICAgIC8vIHRoaXMueCA9IDA7ICAgICAgIC8vIFRPRE8gV2lsbCBjaGFuZ2UgYmFzZWQgb24gdGhlIGFyZyBwYXNzZWQgaW50byBjb25zdHJ1Y3RvclxuICAgICAgICAvLyB0aGlzLnkgPSAwO1xuICAgICAgICB0aGlzLndpZHRoID0gMjQzO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDQ4MDtcbiAgICAgICAgdGhpcy5oaXRib3hXaWR0aCA9IDkwO1xuICAgICAgICB0aGlzLmhpdGJveEhlaWdodCA9IDE1MDtcbiAgICAgICAgdGhpcy50eXBlID0gZW5lbXlUeXBlIC8vIFRPRE8gV2lsbCBjaGFuZ2UgYmFzZWQgb24gYSB0aGUgYXJndW1lbnQgcGFzc2VkIGludG8gY29uc3RydWN0b3JcbiAgICAgICAgdGhpcy5lbmVteVNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcInN0dXBpZFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlTcHJpdGUuc3JjID0gXCIuL3NyYy9pbWFnZXMvY2FyMS5wbmdcIlxuICAgICAgICAgICAgICAgIHRoaXMueCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg1NTAgLSAxMjApICsgMTIwKVxuICAgICAgICAgICAgICAgIHRoaXMueSA9IC0xMDA7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY3JhenlcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW15U3ByaXRlLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL2NhcjIucG5nXCJcbiAgICAgICAgICAgICAgICB0aGlzLnggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNTUwIC0gMTIwKSArIDEyMClcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSA2NTA7XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuaW5nID0gNDtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gNjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB0aGlzLnhIaXRCb3ggPSBbdGhpcy54LCB0aGlzLnggKyB0aGlzLmhpdGJveFdpZHRoXTtcbiAgICAgICAgdGhpcy55SGl0Qm94ID0gW3RoaXMueSwgdGhpcy55ICsgdGhpcy5oaXRib3hIZWlnaHRdO1xuICAgICAgICAvLyB0aGlzLmR5aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZnJhbWVYID0gMFxuICAgICAgICB0aGlzLmRlYWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzYXlIZWxsbygpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJIZWxsb1wiKVxuICAgIH1cbiAgICAvLyBoYW5kbGVFbmVteUZyYW1lKCkge1xuICAgIC8vICAgICBkZWJ1Z2dlclxuICAgIC8vICAgICBpZiAodGhpcy50eXBlID09PSBcImRhbWFnZWQtY3JhenlcIikge1xuICAgIC8vICAgICAgICAgdGhpcy5mcmFtZVgrPSAwLjFcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAodGhpcy5mcmFtZVggPiA0KSB7XG4gICAgLy8gICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxufSIsImltcG9ydCBFbmVteSBmcm9tIFwiLi9lbmVteVwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmNvbnN0IFV0aWwgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgICAgIHRoaXMuaGVhbHRoID0gMTAwMDtcbiAgICAgICAgdGhpcy5nYW1lb3ZlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMucGxheWVyMSA9IG5ldyBQbGF5ZXIoKTtcbiAgICAgICAgdGhpcy53aWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmtleXMgPSBbXTtcbiAgICAgICAgdGhpcy50b3BMb29wID0gLWNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMuYm90dG9tTG9vcCA9IDA7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5zcmMgPSBcIi4vc3JjL2ltYWdlcy9iYWNrZ3JvdW5kLTEucG5nXCI7XG4gICAgICAgIHRoaXMuZW5lbWllcyA9IFtdOyAvLyBjb250YWlucyBlbmVtaWVzIGN1cnJlbnRseSBvbiBzY3JlZW4sIHNob3duIGFzIGVuZW15LnR5cGVcbiAgICAgICAgdGhpcy5mcHNJbnRlcnZhbDtcbiAgICAgICAgdGhpcy5zdGFydFRpbWU7XG4gICAgICAgIHRoaXMubm93O1xuICAgICAgICB0aGlzLnRoZW47XG4gICAgICAgIHRoaXMuZWxhcHNlZDtcbiAgICAgICAgdGhpcy5zbGljZSA9IG5ldyBBdWRpbygnLi9zcmMvYXVkaW8vc2xpY2UubXAzJylcbiAgICB9XG5cbiAgICBkcmF3QmFja2dyb3VuZCgpIHtcbiAgICAgICAgLy9ib3R0b20gaGFsZiBvZiB0aGUgYmFja2dyb3VuZFxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmQsIDAsIDAsXG4gICAgICAgICAgICB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCxcbiAgICAgICAgICAgIDAsIHRoaXMuYm90dG9tTG9vcCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHRcbiAgICAgICAgKVxuICAgICAgICB0aGlzLmJvdHRvbUxvb3AgKz0gMTA7XG4gICAgICAgIGlmICh0aGlzLmJvdHRvbUxvb3AgPT09IHRoaXMuaGVpZ2h0KSB0aGlzLmJvdHRvbUxvb3AgPSAtdGhpcy5oZWlnaHQ7XG4gICAgICAgIC8vdG9wIGhhbGYgb2YgdGhlIGJhY2tncm91bmRcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLCAwLCAwLFxuICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICAwLCB0aGlzLnRvcExvb3AsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0XG4gICAgICAgIClcbiAgICAgICAgdGhpcy50b3BMb29wICs9IDEwO1xuICAgICAgICBpZiAodGhpcy50b3BMb29wID09PSB0aGlzLmhlaWdodCkgdGhpcy50b3BMb29wID0gLXRoaXMuaGVpZ2h0O1xuICAgIH1cblxuICAgIGRyYXdQbGF5ZXIoKSB7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIHRoaXMucGxheWVyMS5wbGF5ZXJTcHJpdGUsIHRoaXMucGxheWVyMS53aWR0aCAqIHRoaXMucGxheWVyMS5mcmFtZVgsIHRoaXMucGxheWVyMS5oZWlnaHQgKiB0aGlzLnBsYXllcjEuZnJhbWVZLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdoZXJlIHdlIGNyb3Agb3V0IHRoZSBpbWFnZSBmb3Igc3ByaXRlXG4gICAgICAgICAgICB0aGlzLnBsYXllcjEud2lkdGgsIHRoaXMucGxheWVyMS5oZWlnaHQsIHRoaXMucGxheWVyMS54LCB0aGlzLnBsYXllcjEueSwgICAgLy8gd2hlcmUgdGhlIGltYWdlIHdpbGwgYmUgYW5pbWF0ZWQgb24gY2FudmFzXG4gICAgICAgICAgICB0aGlzLnBsYXllcjEud2lkdGgsIHRoaXMucGxheWVyMS5oZWlnaHRcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBkcmF3SGVhbHRoKGhlYWx0aCkge1xuICAgICAgICAvLyBpbml0aWFsIGhlYWx0aFxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJlZFwiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDEwLCAzMCwgMjUwLCAxMClcblxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gXCIzXCI7XG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICB0aGlzLmN0eC5yZWN0KDksIDI5LCAyNTIsIDEyKVxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgICAgICAvLyB5b3VyIGFjdHVhbCBoZWFsdGhcbiAgICAgICAgaWYgKGhlYWx0aCA8ICg3MDApKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInllbGxvd1wiXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgxMCwgMzAsIGhlYWx0aCAvIDQsIDEwKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJncmVlblwiXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgxMCwgMzAsIGhlYWx0aCAvIDQsIDEwKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyB0ZXh0XG4gICAgXG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjQwcHggQVJDQURFQ0xBU1NJQ1wiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoIFwiSFBcIiwgMTAsIDI3KVxuXG4gICAgICAgIGlmIChoZWFsdGggPCAxMDApe1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiNDBweCBBUkNBREVDTEFTU0lDXCJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChgJHtoZWFsdGh9LyAxMDAwYCwgODAsIDI3KVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGhlYWx0aCA8IDcwMCkge1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiNDBweCBBUkNBREVDTEFTU0lDXCJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwieWVsbG93XCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChgJHtoZWFsdGh9LyAxMDAwYCwgODAsIDI3KVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiNDBweCBBUkNBREVDTEFTU0lDXCJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGAke2hlYWx0aH0vIDEwMDBgLCA4MCwgMjcpXG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICB9XG5cbiAgICBnZW5lcmF0ZUVuZW15KCkge1xuICAgICAgICAvLyBsb2dpYyBmb3Igd2hlbiB0byBnZW5lcmF0ZSBhbiBlbmVteS4gIHdpbGwgcHVzaCBpbnRvIHRoaXMuZW5lbWllc1xuICAgICAgICBjb25zdCByYW5kb21OdW0gPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogODApKTtcbiAgICAgICAgaWYgKHRoaXMuZW5lbWllcy5sZW5ndGggPCA0ICYmIHJhbmRvbU51bSA9PT0gNSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZW5lcmF0aW5nIGVuZW15XCIpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbUVuZW15TnVtID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDEwMCkpXG4gICAgICAgICAgICBsZXQgZW5lbXlUeXBlXG4gICAgICAgICAgICBpZiAocmFuZG9tRW5lbXlOdW0gPj0gNDApIHtcbiAgICAgICAgICAgICAgICBlbmVteVR5cGUgPSBcInN0dXBpZFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbmVteVR5cGUgPSBcImNyYXp5XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVuZW15VHlwZSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVuZW15VHlwZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5lbWllcy5wdXNoKG5ldyBFbmVteSh0aGlzLmN0eCwgZW5lbXlUeXBlKSk7ICAgLy8gVE9ETzogcmFuZG9tbHkgY2hvb3NlIHRoZSB0eXBlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkcmF3RW5lbXkoZW5lbXlOdW0pIHtcbiAgICAgICAgbGV0IGN1cnJlbnRFbmVteSA9IHRoaXMuZW5lbWllc1tlbmVteU51bV07XG4gICAgICAgIC8vIEFOSU1BVElORyBUSEUgU1RVUElEIEVORU1ZXG4gICAgICAgIGlmIChjdXJyZW50RW5lbXkudHlwZSA9PT0gXCJzdHVwaWRcIikge1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS5lbmVteVNwcml0ZSwgMCwgMCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkud2lkdGgsIGN1cnJlbnRFbmVteS5oZWlnaHQsIGN1cnJlbnRFbmVteS54ICwgY3VycmVudEVuZW15LnksXG4gICAgICAgICAgICAgICAgOTAsIDE1MFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGN1cnJlbnRFbmVteS55ICs9IGN1cnJlbnRFbmVteS5zcGVlZDtcbiAgICAgICAgICAgIGlmIChVdGlsLmNvbGxpc2lvbih0aGlzLnBsYXllcjEueCArIDY3LCB0aGlzLnBsYXllcjEueSwgNjAsIHRoaXMucGxheWVyMS5oZWlnaHQsXG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LngsIGN1cnJlbnRFbmVteS55LCBjdXJyZW50RW5lbXkuaGl0Ym94V2lkdGgsIGN1cnJlbnRFbmVteS5oaXRib3hIZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhbHRoIC09IDE7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaGVhbHRoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIxLmxlZnRBdHRhY2spIHtcbiAgICAgICAgICAgICAgICBpZiAoVXRpbC5hdHRhY2tlZCh0aGlzLnBsYXllcjEubEF0dGFja1hIaXRCb3gsIHRoaXMucGxheWVyMS5sQXR0YWNrWUhpdEJveCxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LngsIGN1cnJlbnRFbmVteS55LCBjdXJyZW50RW5lbXkuaGl0Ym94V2lkdGgsIGN1cnJlbnRFbmVteS5oaXRib3hIZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNsaWNlLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS50eXBlID0gXCJkYW1hZ2VkLXN0dXBpZFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllcjEucmlnaHRBdHRhY2spIHtcbiAgICAgICAgICAgICAgICBpZiAoVXRpbC5hdHRhY2tlZCh0aGlzLnBsYXllcjEuckF0dGFja1hIaXRCb3gsIHRoaXMucGxheWVyMS5yQXR0YWNrWUhpdEJveCxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LngsIGN1cnJlbnRFbmVteS55LCBjdXJyZW50RW5lbXkuaGl0Ym94V2lkdGgsIGN1cnJlbnRFbmVteS5oaXRib3hIZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNsaWNlLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS50eXBlID0gXCJkYW1hZ2VkLXN0dXBpZFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjdXJyZW50RW5lbXkueSA+IHRoaXMuaGVpZ2h0ICYmIGN1cnJlbnRFbmVteS50eXBlID09PVwic3R1cGlkXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW1pZXMuc3BsaWNlKGVuZW15TnVtLCAxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9BTklNQVRJTkcgVEhFIENSQVpZIEVORU1ZXG4gICAgICAgIGlmIChjdXJyZW50RW5lbXkudHlwZSA9PT0gXCJjcmF6eVwiKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LmVuZW15U3ByaXRlLCAwLCAwLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS53aWR0aCwgY3VycmVudEVuZW15LmhlaWdodCwgY3VycmVudEVuZW15LngsIGN1cnJlbnRFbmVteS55LFxuICAgICAgICAgICAgICAgIDkwLCAxNTBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIxLnggKyAyMCAgPiBjdXJyZW50RW5lbXkueCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS54ICs9IGN1cnJlbnRFbmVteS50dXJuaW5nO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS55IC09IGN1cnJlbnRFbmVteS5zcGVlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKFV0aWwuYmV0d2Vlbih0aGlzLnBsYXllcjEueCArIDIwLCBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnggKyAyMCkpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueSAtPSAxMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS54IC09IGN1cnJlbnRFbmVteS50dXJuaW5nO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS55IC09IGN1cnJlbnRFbmVteS5zcGVlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChVdGlsLmNvbGxpc2lvbih0aGlzLnBsYXllcjEueCArIDY3LCB0aGlzLnBsYXllcjEueSwgNjAsIHRoaXMucGxheWVyMS5oZWlnaHQsXG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LngsIGN1cnJlbnRFbmVteS55LCBjdXJyZW50RW5lbXkuaGl0Ym94V2lkdGgsIGN1cnJlbnRFbmVteS5oaXRib3hIZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhbHRoIC09IDU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyMS5sZWZ0QXR0YWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKFV0aWwuYXR0YWNrZWQodGhpcy5wbGF5ZXIxLmxBdHRhY2tYSGl0Qm94LCB0aGlzLnBsYXllcjEubEF0dGFja1lIaXRCb3gsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSwgY3VycmVudEVuZW15LmhpdGJveFdpZHRoLCBjdXJyZW50RW5lbXkuaGl0Ym94SGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zbGljZS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkudHlwZSA9IFwiZGFtYWdlZC1jcmF6eVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyMS5yaWdodEF0dGFjaykge1xuICAgICAgICAgICAgICAgIGlmIChVdGlsLmF0dGFja2VkKHRoaXMucGxheWVyMS5yQXR0YWNrWEhpdEJveCwgdGhpcy5wbGF5ZXIxLnJBdHRhY2tZSGl0Qm94LFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnksIGN1cnJlbnRFbmVteS5oaXRib3hXaWR0aCwgY3VycmVudEVuZW15LmhpdGJveEhlaWdodCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2xpY2UucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LnR5cGUgPSBcImRhbWFnZWQtY3JhenlcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY3VycmVudEVuZW15LnkgPCAtMTUwICYmIGN1cnJlbnRFbmVteS50eXBlID09PSBcImNyYXp5XCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW1pZXMuc3BsaWNlKGVuZW15TnVtLCAxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gREFNQUdFRCBFTkVNSUVTXG4gICAgIFxuICAgICAgICBpZiAoY3VycmVudEVuZW15LnR5cGUgPT09IFwiZGFtYWdlZC1zdHVwaWRcIikge1xuXG4gICAgICAgICAgICBjdXJyZW50RW5lbXkuZW5lbXlTcHJpdGUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGN1cnJlbnRFbmVteS5lbmVteVNwcml0ZS5zcmMgPSBcIi4vc3JjL2ltYWdlcy9jYXIxLWR5aW5nLnBuZ1wiXG4gIFxuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS5lbmVteVNwcml0ZSwgTWF0aC5yb3VuZChjdXJyZW50RW5lbXkuZnJhbWVYKSAqIGN1cnJlbnRFbmVteS53aWR0aCwgMCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkud2lkdGgsIGN1cnJlbnRFbmVteS5oZWlnaHQsIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSwgICAgLy9UT0RPIGZyYW1lc3NzXG4gICAgICAgICAgICAgICAgOTAsIDE1MFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGN1cnJlbnRFbmVteS55ICs9IDQ7XG4gICAgICAgICAgICBjdXJyZW50RW5lbXkuZnJhbWVYICs9IDAuMVxuICAgICAgICAgICAgLy8gY3VycmVudEVuZW15LmhhbmRsZUVuZW15RnJhbWUoKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50RW5lbXkuZnJhbWVYID4gNCkgdGhpcy5lbmVtaWVzLnNwbGljZShlbmVteU51bSwgMSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50RW5lbXkudHlwZSA9PT0gXCJkYW1hZ2VkLWNyYXp5XCIpIHtcblxuICAgICAgICAgICAgY3VycmVudEVuZW15LmVuZW15U3ByaXRlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBjdXJyZW50RW5lbXkuZW5lbXlTcHJpdGUuc3JjID0gXCIuL3NyYy9pbWFnZXMvY2FyMi1keWluZy5wbmdcIlxuXG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LmVuZW15U3ByaXRlLCBNYXRoLnJvdW5kKGN1cnJlbnRFbmVteS5mcmFtZVgpICogY3VycmVudEVuZW15LndpZHRoLCAwLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS53aWR0aCwgY3VycmVudEVuZW15LmhlaWdodCwgY3VycmVudEVuZW15LngsIGN1cnJlbnRFbmVteS55LCAgICAvL1RPRE8gZnJhbWVzc3NcbiAgICAgICAgICAgICAgICA5MCwgMTUwXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY3VycmVudEVuZW15LnkgKz0gNDtcbiAgICAgICAgICAgIGN1cnJlbnRFbmVteS5mcmFtZVggKz0gMC4xXG4gICAgICAgICAgICAvLyBjdXJyZW50RW5lbXkuaGFuZGxlRW5lbXlGcmFtZSgpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRFbmVteS5mcmFtZVggPiA0KSB0aGlzLmVuZW1pZXMuc3BsaWNlKGVuZW15TnVtLCAxKVxuICAgICAgICB9XG4gICAgfVxuICAgIGNoZWNrR2FtZW92ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmhlYWx0aCA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVvdmVyID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiODBweCBBUkNBREVDTEFTU0lDXCJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiR0FNRSBPVkVSXCIsIDI0NSwgMzAwKVxuXG4gICAgICAgICAgICBjb25zdCBzbmFha2UgPSBuZXcgQXVkaW8oJy4vc3JjL2F1ZGlvL0dhbWVvdmVyLm1wMycpXG4gICAgICAgICAgICBzbmFha2UucGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnRBbmltYXRpbmcoZnBzKSB7XG4gICAgICAgIHRoaXMuZnBzSW50ZXJ2YWwgPSAxMDAwIC8gZnBzO1xuICAgICAgICB0aGlzLnRoZW4gPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHRoaXMudGhlbjtcbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5ub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLm5vdyAtIHRoaXMudGhlbjtcbiAgICAgICAgaWYgKHRoaXMuZWxhcHNlZCA+IHRoaXMuZnBzSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIHRoaXMudGhlbiA9IHRoaXMubm93IC0gKHRoaXMuZWxhcHNlZCAlIHRoaXMuZnBzSW50ZXJ2YWwpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIXRoaXMuZ2FtZW92ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZCgpO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyMS5oYW5kbGVQbGF5ZXJGcmFtZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyMS5tb3ZlUGxheWVyKCk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW5lbWllcy5sZW5ndGg7IGkrKyApIHRoaXMuZHJhd0VuZW15KGkpXG5cbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdIZWFsdGgodGhpcy5oZWFsdGgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhd1BsYXllcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVFbmVteSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tHYW1lb3ZlcigpO1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBzdGFydEFuaW1hdGluZyhmcHMpIHtcbiAgICAvLyAgICAgdGhpcy5mcHNJbnRlcnZhbCA9IDEwMDAgLyBmcHM7XG4gICAgLy8gICAgIHRoaXMudGhlbiA9IERhdGUubm93KCk7XG4gICAgLy8gICAgIHRoaXMuc3RhcnRUaW1lID0gdGhpcy50aGVuO1xuICAgIC8vICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICAvLyB9XG4gICAgLy8gYW5pbWF0ZSgpIHtcbiAgICAvLyAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICAvLyAgICAgdGhpcy5ub3cgPSBEYXRlLm5vdygpO1xuICAgIC8vICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLm5vdyAtIHRoaXMudGhlbjtcbiAgICAvLyAgICAgaWYgKHRoaXMuZWxhcHNlZCA+IHRoaXMuZnBzSW50ZXJ2YWwpIHtcbiAgICAvLyAgICAgICAgIHRoaXMudGhlbiA9IHRoaXMubm93IC0gKHRoaXMuZWxhcHNlZCAlIHRoaXMuZnBzSW50ZXJ2YWwpO1xuICAgIC8vICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgIC8vICAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZCgpO1xuICAgIC8vICAgICAgICAgaWYgKHRoaXMuZW5lbWllc1swXSkge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuZHJhd0VuZW15KDApO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuZW5lbWllc1sxXSkge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuZHJhd0VuZW15KDEpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuZW5lbWllc1syXSkge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuZHJhd0VuZW15KDIpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuZW5lbWllc1szXSkge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuZHJhd0VuZW15KDMpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuZW5lbWllc1s0XSkge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuZHJhd0VuZW15KDQpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgdGhpcy5kcmF3UGxheWVyKCk7XG4gICAgLy8gICAgICAgICB0aGlzLnBsYXllcjEubW92ZVBsYXllcigpO1xuICAgIC8vICAgICAgICAgdGhpcy5wbGF5ZXIxLmhhbmRsZVBsYXllckZyYW1lKCk7XG4gICAgLy8gICAgICAgICB0aGlzLmdlbmVyYXRlRW5lbXkoKTtcbiAgICAvLyAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG59XG5cbiIsImltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY2FudmFzVUkpIHtcbiAgICAgICAgdGhpcy5jdHhVSSA9IGNhbnZhc1VJLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5nYW1lID0gbmV3IEdhbWUoY2FudmFzKVxuICAgICAgICB0aGlzLnJlc3RhcnQoKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cygpO1xuICAgIH1cbiAgICBcbiAgICByZWdpc3RlckV2ZW50cygpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiclwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmdhbWUuc3RhcnRBbmltYXRpbmcoNDUpO1xuICAgICAgICAvLyB0aGlzLmdhbWUuYW5pbWF0ZSgpO1xuICAgIH1cblxuICAgIHJlc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5nYW1lb3ZlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmdhbWUuaGVhbHRoID0gMTAwMDtcbiAgICAgICAgdGhpcy5nYW1lLmVuZW1pZXMgPSBbXTtcbiAgICAgICAgdGhpcy5nYW1lLnN0YXJ0QW5pbWF0aW5nKDQ1KTtcbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnggPSAzMDA7XG4gICAgICAgIHRoaXMueSA9IDIwMDtcbiAgICAgICAgdGhpcy53aWR0aCA9IDE4NztcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxMzA7XG4gICAgICAgIHRoaXMueEhpdEJveCA9IFt0aGlzLngsIHRoaXMueCArIHRoaXMud2lkdGhdO1xuICAgICAgICB0aGlzLnlIaXRCb3ggPSBbdGhpcy55LCB0aGlzLnkgK3RoaXMuaGVpZ2h0XTtcbiAgICAgICAgdGhpcy5mcmFtZVggPSAwO1xuICAgICAgICB0aGlzLmZyYW1lWSA9IDA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAxMDtcbiAgICAgICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sZWZ0QXR0YWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmlnaHRBdHRhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sQXR0YWNrWEhpdEJveDtcbiAgICAgICAgdGhpcy5sQXR0YWNrWUhpdEJveDtcbiAgICAgICAgdGhpcy5yQXR0YWNrWEhpdEJveDtcbiAgICAgICAgdGhpcy5yQXR0YWNrWUhpdEJveDtcbiAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCIuL3NyYy9pbWFnZXMvYmlrZTEucG5nXCI7XG4gICAgICAgIHRoaXMua2V5cyA9IFtdO1xuICAgICAgICAvLyB0aGlzLmF0dGFja1JlYWR5XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcbiAgICB9XG5cbiAgICByZWdpc3RlckV2ZW50cygpIHtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmtleXNbZS5rZXldID0gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMua2V5c1tlLmtleV07XG4gICAgICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcInFcIikgdGhpcy5sZWZ0QXR0YWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJlXCIpIHRoaXMucmlnaHRBdHRhY2sgPSB0cnVlO1xuICAgICAgICB9KVxuXG5cbiAgICB9XG4gXG4gICAgXG4gICAgbW92ZVBsYXllcigpIHtcbiAgICAgICAgaWYgKHRoaXMua2V5cy53ICYmIHRoaXMueSA+IDApIHsgICAgICAgICAvLyBtb3ZpbmcgdXBcbiAgICAgICAgICAgIHRoaXMueSAtPSB0aGlzLnNwZWVkOyAgICAgICAgICAgLy8gaW5jcmVhc2Ugb3VyIHBsYXlzZXIncyB5IHBvcyBieSBzcGVlZFxuICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmtleXMucyAmJiB0aGlzLnkgPCA1NTApIHsgICAgLy8gbW92aW5nIGRvd25cbiAgICAgICAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmtleXMuYSAmJiB0aGlzLnggPiA4MCkge1xuICAgICAgICAgICAgICAgIHRoaXMueCAtPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5rZXlzLmQgJiYgdGhpcy54IDwgNTgwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxlZnRBdHRhY2spIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVYID0gMDtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVZID0gMjtcbiAgICAgICAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB0aGlzLmxlZnRBdHRhY2sgPSB0cnVlO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxlZnRBdHRhY2sgPSBmYWxzZSwgNTAwKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJpZ2h0QXR0YWNrKSB7XG4gICAgICAgICAgICB0aGlzLmZyYW1lWCA9IDA7XG4gICAgICAgICAgICB0aGlzLmZyYW1lWSA9IDE7XG4gICAgICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gdGhpcy5yaWdodEF0dGFjayA9IHRydWU7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmlnaHRBdHRhY2sgPSBmYWxzZSwgNTAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlUGxheWVyRnJhbWUoKSB7XG4gICAgICAgIGlmICh0aGlzLm1vdmluZyAmJiAoIXRoaXMubGVmdEF0dGFjayB8fCAhdGhpcy5yaWdodEF0dGFjaykpIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVYKytcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMucmlnaHRBdHRhY2sgJiYgdGhpcy5mcmFtZVkgPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVZID0gMDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUiBBVFRBQ0tcIilcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMubGVmdEF0dGFjayAmJiB0aGlzLmZyYW1lWSA9PT0gMikge1xuICAgICAgICAgICAgdGhpcy5mcmFtZVkgPSAwO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMIEFUVEFDS1wiKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZnJhbWVYID49IDIpe1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coKVxuICAgICAgICAgICAgdGhpcy5mcmFtZVggPSAwXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVQbGF5ZXJBdHRhY2soKTtcbiAgICB9XG5cbiAgICBoYW5kbGVQbGF5ZXJBdHRhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmxlZnRBdHRhY2spIHtcbiAgICAgICAgICAgIHRoaXMubEF0dGFja1hIaXRCb3ggPSBbdGhpcy54ICsgNzAsIHRoaXMueCArIDcwIC0gMzBdO1xuICAgICAgICAgICAgdGhpcy5sQXR0YWNrWUhpdEJveCA9IFt0aGlzLnksIHRoaXMueSArIDc5XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yaWdodEF0dGFjaykge1xuICAgICAgICAgICAgdGhpcy5yQXR0YWNrWEhpdEJveCA9IFt0aGlzLnggKyAxNTAsIHRoaXMueCArIDE1MCArIDMwXTtcbiAgICAgICAgICAgIHRoaXMuckF0dGFja1lIaXRCb3ggPSBbdGhpcy55LCB0aGlzLnkgKyA3OV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmxlZnRBdHRhY2spIHtcbiAgICAgICAgICAgIHRoaXMubEF0dGFja1hIaXRCb3ggPSBbXTtcbiAgICAgICAgICAgIHRoaXMubEF0dGFja1lIaXRCb3ggPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMucmlnaHRBdHRhY2spIHtcbiAgICAgICAgICAgIHRoaXMuckF0dGFja1hIaXRCb3ggPSBbXTtcbiAgICAgICAgICAgIHRoaXMuckF0dGFja1lIaXRCb3ggPSBbXTtcbiAgICAgICAgfVxuICAgIH1cblxufSIsImNvbnN0IFV0aWwgPSB7XG5cbiAgICBiZXR3ZWVuKHgsIG1pbiwgbWF4KSB7XG4gICAgICAgIHJldHVybiB4ID49IG1pbiAmJiB4IDw9IG1heDtcbiAgICB9LFxuICAgIGNvbGxpc2lvbih1bml0MXgsIHVuaXQxeSwgdW5pdDF3LCB1bml0MWgsIHVuaXQyeCwgdW5pdDJ5LCB1bml0MncsIHVuaXQyaCkge1xuICAgICAgICBsZXQgdW5pdDFYSGl0Qm94ID0gW3VuaXQxeCwgdW5pdDF4ICsgdW5pdDF3XTtcbiAgICAgICAgbGV0IHVuaXQxWUhpdEJveCA9IFt1bml0MXksIHVuaXQxeSArIHVuaXQxaF07XG4gICAgICAgIGxldCB1bml0MlhIaXRCb3ggPSBbdW5pdDJ4LCB1bml0MnggKyB1bml0MnddO1xuICAgICAgICBsZXQgdW5pdDJZSGl0Qm94ID0gW3VuaXQyeSwgdW5pdDJ5ICsgdW5pdDJoXTtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgbGV0IHhDb2xsaXNpb24gPSBmYWxzZTtcbiAgICAgICAgbGV0IHlDb2xsaXNpb24gPSBmYWxzZTtcbiAgICAgICAgaWYgKFV0aWwuYmV0d2Vlbih1bml0MVhIaXRCb3hbMF0sIHVuaXQyWEhpdEJveFswXSwgdW5pdDJYSGl0Qm94WzFdKSB8fFxuICAgICAgICAgICAgVXRpbC5iZXR3ZWVuKHVuaXQxWEhpdEJveFsxXSwgdW5pdDJYSGl0Qm94WzBdLCB1bml0MlhIaXRCb3hbMV0pKSB7XG4gICAgICAgICAgICAgICAgeENvbGxpc2lvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJDT0xMSVNJT05YXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIGlmIChVdGlsLmJldHdlZW4odW5pdDFZSGl0Qm94WzBdLCB1bml0MllIaXRCb3hbMF0sIHVuaXQyWUhpdEJveFsxXSkgfHxcbiAgICAgICAgICAgIFV0aWwuYmV0d2Vlbih1bml0MVlIaXRCb3hbMV0sIHVuaXQyWUhpdEJveFswXSwgdW5pdDJZSGl0Qm94WzFdKSkge1xuICAgICAgICAgICAgICAgIHlDb2xsaXNpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQ09MTElTSU9OWVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICBpZiAoKHhDb2xsaXNpb24gPT09IHRydWUgJiYgeUNvbGxpc2lvbiA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkNPTExJU0lPTlwiKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGF0dGFja2VkKGF0dGFja1R5cGVYLCBhdHRhY2tUeXBlWSwgdW5pdHgsIHVuaXR5LCB1bml0dywgdW5pdGgpIHtcbiAgICAgICAgbGV0IHVuaXRYSGl0Qm94ID0gW3VuaXR4LCB1bml0eCArIHVuaXR3XTtcbiAgICAgICAgbGV0IHVuaXRZSGl0Qm94ID0gW3VuaXR5LCB1bml0eSArIHVuaXRoXTtcbiAgICAgICAgbGV0IHhBdHRhY2tlZDtcbiAgICAgICAgbGV0IHlBdHRhY2tlZDtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgaWYgKFV0aWwuYmV0d2VlbihhdHRhY2tUeXBlWFswXSwgdW5pdFhIaXRCb3hbMF0sIHVuaXRYSGl0Qm94WzFdKSB8fFxuICAgICAgICAgICAgVXRpbC5iZXR3ZWVuKGF0dGFja1R5cGVYWzFdLCB1bml0WEhpdEJveFswXSwgdW5pdFhIaXRCb3hbMV0pKSB7XG4gICAgICAgICAgICB4QXR0YWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJYIEFUVEFDS0VEXCIpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKFV0aWwuYmV0d2VlbihhdHRhY2tUeXBlWVswXSwgdW5pdFlIaXRCb3hbMF0sIHVuaXRZSGl0Qm94WzFdKSB8fFxuICAgICAgICAgICAgVXRpbC5iZXR3ZWVuKGF0dGFja1R5cGVZWzFdLCB1bml0WUhpdEJveFswXSwgdW5pdFlIaXRCb3hbMV0pKSB7XG4gICAgICAgICAgICB5QXR0YWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh4QXR0YWNrZWQgPT09IHRydWUgJiYgeUF0dGFja2VkID09PSB0cnVlKSkge1xuICAgICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU0xJQ0UhXCIpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gVXRpbCJdLCJzb3VyY2VSb290IjoiIn0=