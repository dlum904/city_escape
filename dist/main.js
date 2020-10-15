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


var canvas = document.getElementById("canvas1");
canvas.width = 840;
canvas.height = 650; // const game1 = new Game(canvas)

new _scripts_game_view__WEBPACK_IMPORTED_MODULE_1__["default"](canvas).start();

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
      this.ctx.fillRect(10, 30, 250, 10); // your actual health

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
            currentEnemy.leftAttack = false;
            this.slice.play();
            currentEnemy.type = "damaged-stupid";
          }
        }

        if (this.player1.rightAttack) {
          if (Util.attacked(this.player1.rAttackXHitBox, this.player1.rAttackYHitBox, currentEnemy.x, currentEnemy.y, currentEnemy.hitboxWidth, currentEnemy.hitboxHeight)) {
            currentEnemy.rightAttack = false;
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
            currentEnemy.leftAttack = false;
            this.slice.play();
            currentEnemy.type = "damaged-crazy";
          }
        }

        if (this.player1.rightAttack) {
          if (Util.attacked(this.player1.rAttackXHitBox, this.player1.rAttackYHitBox, currentEnemy.x, currentEnemy.y, currentEnemy.hitboxWidth, currentEnemy.hitboxHeight)) {
            currentEnemy.rightAttack = false;
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
        var snaake = new Audio('./src/audio/Gameover.mp3');
        snaake.play();
        this.ctx.font = "80px ARCADECLASSIC";
        this.ctx.fillStyle = "white";
        this.ctx.fillText("GAME OVER", 245, 300);
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
          if (this.enemies[0]) this.drawEnemy(0);
          if (this.enemies[1]) this.drawEnemy(1);
          if (this.enemies[2]) this.drawEnemy(2);
          if (this.enemies[3]) this.drawEnemy(3);
          if (this.enemies[4]) this.drawEnemy(4);
          this.drawPlayer();
          this.player1.movePlayer();
          this.drawHealth(this.health);
          this.generateEnemy();
          this.checkGameover(); // if (this.attackCD != 0) {
          //     this.player1.attackCD--;
          // }

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
  function GameView(canvas) {
    _classCallCheck(this, GameView);

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
    this.keys = []; // this.attackCD = 0

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
        _this.leftAttack = false;
        _this.rightAttack = false;
      });
    }
  }, {
    key: "movePlayer",
    value: function movePlayer() {
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
      } else if (this.keys.q) {
        this.frameX = 0;
        this.frameY = 2;
        this.moving = false;
        this.leftAttack = true; // this.attackCD = 30
        // setTimeout(() => this.leftAttack = false, 3000)
      } else if (this.keys.e) {
        this.frameX = 0;
        this.frameY = 1;
        this.moving = false;
        this.rightAttack = true; // this.attackCD = 30
        // setTimeout(() => this.rightAttack = false, 3000)
      }
    }
  }, {
    key: "handlePlayerFrame",
    value: function handlePlayerFrame() {
      if (this.moving) {
        // console.log(this.frameX)
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
      // debugger
      if (this.leftAttack) {
        this.lAttackXHitBox = [this.x + 70, this.x + 70 - 30];
        this.lAttackYHitBox = [this.y, this.y + 79];
      }

      if (this.rightAttack) {
        this.rAttackXHitBox = [this.x + 150, this.x + 150 + 30];
        this.rAttackYHitBox = [this.y, this.y + 79];
      } else if (!this.leftAttack) {
        this.lAttackXHitBox = [];
        this.lAttackYHitBox = [];
      } else if (!this.rightAttack) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VuZW15LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImhlaWdodCIsIkdhbWVWaWV3Iiwic3RhcnQiLCJFbmVteSIsImN0eCIsImVuZW15VHlwZSIsImhpdGJveFdpZHRoIiwiaGl0Ym94SGVpZ2h0IiwidHlwZSIsImVuZW15U3ByaXRlIiwiSW1hZ2UiLCJzcmMiLCJ4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwieSIsInNwZWVkIiwidHVybmluZyIsInhIaXRCb3giLCJ5SGl0Qm94IiwiZnJhbWVYIiwiZGVhZCIsImNvbnNvbGUiLCJsb2ciLCJVdGlsIiwicmVxdWlyZSIsIkdhbWUiLCJoZWFsdGgiLCJnYW1lb3ZlciIsImdldENvbnRleHQiLCJwbGF5ZXIxIiwiUGxheWVyIiwia2V5cyIsInRvcExvb3AiLCJib3R0b21Mb29wIiwiYmFja2dyb3VuZCIsImVuZW1pZXMiLCJmcHNJbnRlcnZhbCIsInN0YXJ0VGltZSIsIm5vdyIsInRoZW4iLCJlbGFwc2VkIiwic2xpY2UiLCJBdWRpbyIsImRyYXdJbWFnZSIsInBsYXllclNwcml0ZSIsImZyYW1lWSIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZm9udCIsImZpbGxUZXh0IiwicmFuZG9tTnVtIiwibGVuZ3RoIiwicmFuZG9tRW5lbXlOdW0iLCJwdXNoIiwiZW5lbXlOdW0iLCJjdXJyZW50RW5lbXkiLCJjb2xsaXNpb24iLCJsZWZ0QXR0YWNrIiwiYXR0YWNrZWQiLCJsQXR0YWNrWEhpdEJveCIsImxBdHRhY2tZSGl0Qm94IiwicGxheSIsInJpZ2h0QXR0YWNrIiwickF0dGFja1hIaXRCb3giLCJyQXR0YWNrWUhpdEJveCIsInNwbGljZSIsImJldHdlZW4iLCJyb3VuZCIsInNuYWFrZSIsImZwcyIsIkRhdGUiLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCIsImNsZWFyUmVjdCIsImRyYXdCYWNrZ3JvdW5kIiwiaGFuZGxlUGxheWVyRnJhbWUiLCJkcmF3RW5lbXkiLCJkcmF3UGxheWVyIiwibW92ZVBsYXllciIsImRyYXdIZWFsdGgiLCJnZW5lcmF0ZUVuZW15IiwiY2hlY2tHYW1lb3ZlciIsImdhbWUiLCJyZXN0YXJ0IiwicmVnaXN0ZXJFdmVudHMiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleSIsInN0YXJ0QW5pbWF0aW5nIiwibW92aW5nIiwidyIsInMiLCJhIiwiZCIsInEiLCJoYW5kbGVQbGF5ZXJBdHRhY2siLCJtaW4iLCJtYXgiLCJ1bml0MXgiLCJ1bml0MXkiLCJ1bml0MXciLCJ1bml0MWgiLCJ1bml0MngiLCJ1bml0MnkiLCJ1bml0MnciLCJ1bml0MmgiLCJ1bml0MVhIaXRCb3giLCJ1bml0MVlIaXRCb3giLCJ1bml0MlhIaXRCb3giLCJ1bml0MllIaXRCb3giLCJ4Q29sbGlzaW9uIiwieUNvbGxpc2lvbiIsImF0dGFja1R5cGVYIiwiYXR0YWNrVHlwZVkiLCJ1bml0eCIsInVuaXR5IiwidW5pdHciLCJ1bml0aCIsInVuaXRYSGl0Qm94IiwidW5pdFlIaXRCb3giLCJ4QXR0YWNrZWQiLCJ5QXR0YWNrZWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdB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RUFDa0U7QUFDOURFLGVBQVMsR0FBRyxJQUFaO0FBRUg7O0FBQ0QsUUFBS0QsU0FBUyxLQUFLLElBQWQsSUFBc0JDLFNBQVMsS0FBSyxJQUF6QyxFQUFnRDtBQUM1QztBQUNBdEcsYUFBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNBLGFBQU8sSUFBUDtBQUNILEtBSkQsTUFLSztBQUNELGFBQU8sS0FBUDtBQUNIO0FBQ0o7QUF4RFEsQ0FBYjtBQTBEQXNHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnRHLElBQWpCLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnXG5pbXBvcnQgR2FtZVZpZXcgZnJvbSAnLi9zY3JpcHRzL2dhbWVfdmlldyc7XG5cblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXMxXCIpO1xuY2FudmFzLndpZHRoID0gODQwO1xuY2FudmFzLmhlaWdodCA9IDY1MDtcbi8vIGNvbnN0IGdhbWUxID0gbmV3IEdhbWUoY2FudmFzKVxubmV3IEdhbWVWaWV3KGNhbnZhcykuc3RhcnQoKVxuXG5cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZW15IHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGVuZW15VHlwZSkge1xuICAgICAgICAvLyB0aGlzLnggPSAwOyAgICAgICAvLyBUT0RPIFdpbGwgY2hhbmdlIGJhc2VkIG9uIHRoZSBhcmcgcGFzc2VkIGludG8gY29uc3RydWN0b3JcbiAgICAgICAgLy8gdGhpcy55ID0gMDtcbiAgICAgICAgdGhpcy53aWR0aCA9IDI0MztcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA0ODA7XG4gICAgICAgIHRoaXMuaGl0Ym94V2lkdGggPSA5MDtcbiAgICAgICAgdGhpcy5oaXRib3hIZWlnaHQgPSAxNTA7XG4gICAgICAgIHRoaXMudHlwZSA9IGVuZW15VHlwZSAvLyBUT0RPIFdpbGwgY2hhbmdlIGJhc2VkIG9uIGEgdGhlIGFyZ3VtZW50IHBhc3NlZCBpbnRvIGNvbnN0cnVjdG9yXG4gICAgICAgIHRoaXMuZW5lbXlTcHJpdGUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJzdHVwaWRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW15U3ByaXRlLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL2NhcjEucG5nXCJcbiAgICAgICAgICAgICAgICB0aGlzLnggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNTUwIC0gMTIwKSArIDEyMClcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSAtMTAwO1xuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgPSAzO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImNyYXp5XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVteVNwcml0ZS5zcmMgPSBcIi4vc3JjL2ltYWdlcy9jYXIyLnBuZ1wiXG4gICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDU1MCAtIDEyMCkgKyAxMjApXG4gICAgICAgICAgICAgICAgdGhpcy55ID0gNjUwO1xuICAgICAgICAgICAgICAgIHRoaXMudHVybmluZyA9IDQ7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDY7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgdGhpcy54SGl0Qm94ID0gW3RoaXMueCwgdGhpcy54ICsgdGhpcy5oaXRib3hXaWR0aF07XG4gICAgICAgIHRoaXMueUhpdEJveCA9IFt0aGlzLnksIHRoaXMueSArIHRoaXMuaGl0Ym94SGVpZ2h0XTtcbiAgICAgICAgLy8gdGhpcy5keWluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZyYW1lWCA9IDBcbiAgICAgICAgdGhpcy5kZWFkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2F5SGVsbG8oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSGVsbG9cIilcbiAgICB9XG4gICAgLy8gaGFuZGxlRW5lbXlGcmFtZSgpIHtcbiAgICAvLyAgICAgZGVidWdnZXJcbiAgICAvLyAgICAgaWYgKHRoaXMudHlwZSA9PT0gXCJkYW1hZ2VkLWNyYXp5XCIpIHtcbiAgICAvLyAgICAgICAgIHRoaXMuZnJhbWVYKz0gMC4xXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKHRoaXMuZnJhbWVYID4gNCkge1xuICAgIC8vICAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbn0iLCJpbXBvcnQgRW5lbXkgZnJvbSBcIi4vZW5lbXlcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5jb25zdCBVdGlsID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgICAgICB0aGlzLmhlYWx0aCA9IDEwMDA7XG4gICAgICAgIHRoaXMuZ2FtZW92ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLnBsYXllcjEgPSBuZXcgUGxheWVyKCk7XG4gICAgICAgIHRoaXMud2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgICAgICAgdGhpcy5rZXlzID0gW107XG4gICAgICAgIHRoaXMudG9wTG9vcCA9IC1jYW52YXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmJvdHRvbUxvb3AgPSAwO1xuICAgICAgICB0aGlzLmJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKVxuICAgICAgICB0aGlzLmJhY2tncm91bmQuc3JjID0gXCIuL3NyYy9pbWFnZXMvYmFja2dyb3VuZC0xLnBuZ1wiO1xuICAgICAgICB0aGlzLmVuZW1pZXMgPSBbXTsgLy8gY29udGFpbnMgZW5lbWllcyBjdXJyZW50bHkgb24gc2NyZWVuLCBzaG93biBhcyBlbmVteS50eXBlXG4gICAgICAgIHRoaXMuZnBzSW50ZXJ2YWw7XG4gICAgICAgIHRoaXMuc3RhcnRUaW1lO1xuICAgICAgICB0aGlzLm5vdztcbiAgICAgICAgdGhpcy50aGVuO1xuICAgICAgICB0aGlzLmVsYXBzZWQ7XG4gICAgICAgIHRoaXMuc2xpY2UgPSBuZXcgQXVkaW8oJy4vc3JjL2F1ZGlvL3NsaWNlLm1wMycpXG4gICAgfVxuXG4gICAgZHJhd0JhY2tncm91bmQoKSB7XG4gICAgICAgIC8vYm90dG9tIGhhbGYgb2YgdGhlIGJhY2tncm91bmRcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLCAwLCAwLFxuICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICAwLCB0aGlzLmJvdHRvbUxvb3AsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0XG4gICAgICAgIClcbiAgICAgICAgdGhpcy5ib3R0b21Mb29wICs9IDEwO1xuICAgICAgICBpZiAodGhpcy5ib3R0b21Mb29wID09PSB0aGlzLmhlaWdodCkgdGhpcy5ib3R0b21Mb29wID0gLXRoaXMuaGVpZ2h0O1xuICAgICAgICAvL3RvcCBoYWxmIG9mIHRoZSBiYWNrZ3JvdW5kXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZCwgMCwgMCxcbiAgICAgICAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LFxuICAgICAgICAgICAgMCwgdGhpcy50b3BMb29wLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodFxuICAgICAgICApXG4gICAgICAgIHRoaXMudG9wTG9vcCArPSAxMDtcbiAgICAgICAgaWYgKHRoaXMudG9wTG9vcCA9PT0gdGhpcy5oZWlnaHQpIHRoaXMudG9wTG9vcCA9IC10aGlzLmhlaWdodDtcbiAgICB9XG5cbiAgICBkcmF3UGxheWVyKCkge1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICB0aGlzLnBsYXllcjEucGxheWVyU3ByaXRlLCB0aGlzLnBsYXllcjEud2lkdGggKiB0aGlzLnBsYXllcjEuZnJhbWVYLCB0aGlzLnBsYXllcjEuaGVpZ2h0ICogdGhpcy5wbGF5ZXIxLmZyYW1lWSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aGVyZSB3ZSBjcm9wIG91dCB0aGUgaW1hZ2UgZm9yIHNwcml0ZVxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIxLndpZHRoLCB0aGlzLnBsYXllcjEuaGVpZ2h0LCB0aGlzLnBsYXllcjEueCwgdGhpcy5wbGF5ZXIxLnksICAgIC8vIHdoZXJlIHRoZSBpbWFnZSB3aWxsIGJlIGFuaW1hdGVkIG9uIGNhbnZhc1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIxLndpZHRoLCB0aGlzLnBsYXllcjEuaGVpZ2h0XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZHJhd0hlYWx0aChoZWFsdGgpIHtcbiAgICAgICAgLy8gaW5pdGlhbCBoZWFsdGhcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZWRcIlxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgxMCwgMzAsIDI1MCwgMTApXG5cbiAgICAgICAgLy8geW91ciBhY3R1YWwgaGVhbHRoXG4gICAgICAgIGlmIChoZWFsdGggPCAoNzAwKSkge1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ5ZWxsb3dcIlxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMTAsIDMwLCBoZWFsdGggLyA0LCAxMClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiZ3JlZW5cIlxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMTAsIDMwLCBoZWFsdGggLyA0LCAxMClcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gdGV4dFxuICAgIFxuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCI0MHB4IEFSQ0FERUNMQVNTSUNcIlxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCBcIkhQXCIsIDEwLCAyNylcblxuICAgICAgICBpZiAoaGVhbHRoIDwgMTAwKXtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjQwcHggQVJDQURFQ0xBU1NJQ1wiXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoYCR7aGVhbHRofS8gMTAwMGAsIDgwLCAyNylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChoZWFsdGggPCA3MDApIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjQwcHggQVJDQURFQ0xBU1NJQ1wiXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInllbGxvd1wiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoYCR7aGVhbHRofS8gMTAwMGAsIDgwLCAyNylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjQwcHggQVJDQURFQ0xBU1NJQ1wiXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChgJHtoZWFsdGh9LyAxMDAwYCwgODAsIDI3KVxuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgfVxuXG4gICAgZ2VuZXJhdGVFbmVteSgpIHtcbiAgICAgICAgLy8gbG9naWMgZm9yIHdoZW4gdG8gZ2VuZXJhdGUgYW4gZW5lbXkuICB3aWxsIHB1c2ggaW50byB0aGlzLmVuZW1pZXNcbiAgICAgICAgY29uc3QgcmFuZG9tTnVtID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDgwKSk7XG4gICAgICAgIGlmICh0aGlzLmVuZW1pZXMubGVuZ3RoIDwgNCAmJiByYW5kb21OdW0gPT09IDUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2VuZXJhdGluZyBlbmVteVwiKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCByYW5kb21FbmVteU51bSA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAxMDApKVxuICAgICAgICAgICAgbGV0IGVuZW15VHlwZVxuICAgICAgICAgICAgaWYgKHJhbmRvbUVuZW15TnVtID49IDQwKSB7XG4gICAgICAgICAgICAgICAgZW5lbXlUeXBlID0gXCJzdHVwaWRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZW5lbXlUeXBlID0gXCJjcmF6eVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlbmVteVR5cGUpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbmVteVR5cGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW1pZXMucHVzaChuZXcgRW5lbXkodGhpcy5jdHgsIGVuZW15VHlwZSkpOyAgIC8vIFRPRE86IHJhbmRvbWx5IGNob29zZSB0aGUgdHlwZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd0VuZW15KGVuZW15TnVtKSB7XG4gICAgICAgIGxldCBjdXJyZW50RW5lbXkgPSB0aGlzLmVuZW1pZXNbZW5lbXlOdW1dO1xuICAgICAgICAvLyBBTklNQVRJTkcgVEhFIFNUVVBJRCBFTkVNWVxuICAgICAgICBpZiAoY3VycmVudEVuZW15LnR5cGUgPT09IFwic3R1cGlkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkuZW5lbXlTcHJpdGUsIDAsIDAsXG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LndpZHRoLCBjdXJyZW50RW5lbXkuaGVpZ2h0LCBjdXJyZW50RW5lbXkueCAsIGN1cnJlbnRFbmVteS55LFxuICAgICAgICAgICAgICAgIDkwLCAxNTBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjdXJyZW50RW5lbXkueSArPSBjdXJyZW50RW5lbXkuc3BlZWQ7XG4gICAgICAgICAgICBpZiAoVXRpbC5jb2xsaXNpb24odGhpcy5wbGF5ZXIxLnggKyA2NywgdGhpcy5wbGF5ZXIxLnksIDYwLCB0aGlzLnBsYXllcjEuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSwgY3VycmVudEVuZW15LmhpdGJveFdpZHRoLCBjdXJyZW50RW5lbXkuaGl0Ym94SGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYWx0aCAtPSAxO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmhlYWx0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyMS5sZWZ0QXR0YWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKFV0aWwuYXR0YWNrZWQodGhpcy5wbGF5ZXIxLmxBdHRhY2tYSGl0Qm94LCB0aGlzLnBsYXllcjEubEF0dGFja1lIaXRCb3gsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSwgY3VycmVudEVuZW15LmhpdGJveFdpZHRoLCBjdXJyZW50RW5lbXkuaGl0Ym94SGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LmxlZnRBdHRhY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2xpY2UucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LnR5cGUgPSBcImRhbWFnZWQtc3R1cGlkXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyMS5yaWdodEF0dGFjaykge1xuICAgICAgICAgICAgICAgIGlmIChVdGlsLmF0dGFja2VkKHRoaXMucGxheWVyMS5yQXR0YWNrWEhpdEJveCwgdGhpcy5wbGF5ZXIxLnJBdHRhY2tZSGl0Qm94LFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnksIGN1cnJlbnRFbmVteS5oaXRib3hXaWR0aCwgY3VycmVudEVuZW15LmhpdGJveEhlaWdodCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS5yaWdodEF0dGFjayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zbGljZS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkudHlwZSA9IFwiZGFtYWdlZC1zdHVwaWRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY3VycmVudEVuZW15LnkgPiB0aGlzLmhlaWdodCAmJiBjdXJyZW50RW5lbXkudHlwZSA9PT1cInN0dXBpZFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnNwbGljZShlbmVteU51bSwgMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vQU5JTUFUSU5HIFRIRSBDUkFaWSBFTkVNWVxuICAgICAgICBpZiAoY3VycmVudEVuZW15LnR5cGUgPT09IFwiY3JhenlcIikge1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS5lbmVteVNwcml0ZSwgMCwgMCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkud2lkdGgsIGN1cnJlbnRFbmVteS5oZWlnaHQsIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSxcbiAgICAgICAgICAgICAgICA5MCwgMTUwXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyMS54ICsgMjAgID4gY3VycmVudEVuZW15LngpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueCArPSBjdXJyZW50RW5lbXkudHVybmluZztcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueSAtPSBjdXJyZW50RW5lbXkuc3BlZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChVdGlsLmJldHdlZW4odGhpcy5wbGF5ZXIxLnggKyAyMCwgY3VycmVudEVuZW15LngsIGN1cnJlbnRFbmVteS54ICsgMjApKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LnkgLT0gMTI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueCAtPSBjdXJyZW50RW5lbXkudHVybmluZztcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueSAtPSBjdXJyZW50RW5lbXkuc3BlZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoVXRpbC5jb2xsaXNpb24odGhpcy5wbGF5ZXIxLnggKyA2NywgdGhpcy5wbGF5ZXIxLnksIDYwLCB0aGlzLnBsYXllcjEuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSwgY3VycmVudEVuZW15LmhpdGJveFdpZHRoLCBjdXJyZW50RW5lbXkuaGl0Ym94SGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYWx0aCAtPSA1O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllcjEubGVmdEF0dGFjaykge1xuICAgICAgICAgICAgICAgIGlmIChVdGlsLmF0dGFja2VkKHRoaXMucGxheWVyMS5sQXR0YWNrWEhpdEJveCwgdGhpcy5wbGF5ZXIxLmxBdHRhY2tZSGl0Qm94LFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnksIGN1cnJlbnRFbmVteS5oaXRib3hXaWR0aCwgY3VycmVudEVuZW15LmhpdGJveEhlaWdodCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS5sZWZ0QXR0YWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNsaWNlLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS50eXBlID0gXCJkYW1hZ2VkLWNyYXp5XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIxLnJpZ2h0QXR0YWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKFV0aWwuYXR0YWNrZWQodGhpcy5wbGF5ZXIxLnJBdHRhY2tYSGl0Qm94LCB0aGlzLnBsYXllcjEuckF0dGFja1lIaXRCb3gsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSwgY3VycmVudEVuZW15LmhpdGJveFdpZHRoLCBjdXJyZW50RW5lbXkuaGl0Ym94SGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LnJpZ2h0QXR0YWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNsaWNlLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS50eXBlID0gXCJkYW1hZ2VkLWNyYXp5XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGN1cnJlbnRFbmVteS55IDwgLTE1MCAmJiBjdXJyZW50RW5lbXkudHlwZSA9PT0gXCJjcmF6eVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnNwbGljZShlbmVteU51bSwgMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERBTUFHRUQgRU5FTUlFU1xuICAgICBcbiAgICAgICAgaWYgKGN1cnJlbnRFbmVteS50eXBlID09PSBcImRhbWFnZWQtc3R1cGlkXCIpIHtcblxuICAgICAgICAgICAgY3VycmVudEVuZW15LmVuZW15U3ByaXRlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBjdXJyZW50RW5lbXkuZW5lbXlTcHJpdGUuc3JjID0gXCIuL3NyYy9pbWFnZXMvY2FyMS1keWluZy5wbmdcIlxuICBcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkuZW5lbXlTcHJpdGUsIE1hdGgucm91bmQoY3VycmVudEVuZW15LmZyYW1lWCkgKiBjdXJyZW50RW5lbXkud2lkdGgsIDAsXG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LndpZHRoLCBjdXJyZW50RW5lbXkuaGVpZ2h0LCBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnksICAgIC8vVE9ETyBmcmFtZXNzc1xuICAgICAgICAgICAgICAgIDkwLCAxNTBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjdXJyZW50RW5lbXkueSArPSA0O1xuICAgICAgICAgICAgY3VycmVudEVuZW15LmZyYW1lWCArPSAwLjFcbiAgICAgICAgICAgIC8vIGN1cnJlbnRFbmVteS5oYW5kbGVFbmVteUZyYW1lKCk7XG4gICAgICAgICAgICBpZiAoY3VycmVudEVuZW15LmZyYW1lWCA+IDQpIHRoaXMuZW5lbWllcy5zcGxpY2UoZW5lbXlOdW0sIDEpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudEVuZW15LnR5cGUgPT09IFwiZGFtYWdlZC1jcmF6eVwiKSB7XG5cbiAgICAgICAgICAgIGN1cnJlbnRFbmVteS5lbmVteVNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgY3VycmVudEVuZW15LmVuZW15U3ByaXRlLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL2NhcjItZHlpbmcucG5nXCJcblxuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS5lbmVteVNwcml0ZSwgTWF0aC5yb3VuZChjdXJyZW50RW5lbXkuZnJhbWVYKSAqIGN1cnJlbnRFbmVteS53aWR0aCwgMCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkud2lkdGgsIGN1cnJlbnRFbmVteS5oZWlnaHQsIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSwgICAgLy9UT0RPIGZyYW1lc3NzXG4gICAgICAgICAgICAgICAgOTAsIDE1MFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGN1cnJlbnRFbmVteS55ICs9IDQ7XG4gICAgICAgICAgICBjdXJyZW50RW5lbXkuZnJhbWVYICs9IDAuMVxuICAgICAgICAgICAgLy8gY3VycmVudEVuZW15LmhhbmRsZUVuZW15RnJhbWUoKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50RW5lbXkuZnJhbWVYID4gNCkgdGhpcy5lbmVtaWVzLnNwbGljZShlbmVteU51bSwgMSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGVja0dhbWVvdmVyKCkge1xuICAgICAgICBpZiAodGhpcy5oZWFsdGggPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5nYW1lb3ZlciA9IHRydWU7XG4gICAgICAgICAgICBjb25zdCBzbmFha2UgPSBuZXcgQXVkaW8oJy4vc3JjL2F1ZGlvL0dhbWVvdmVyLm1wMycpXG4gICAgICAgICAgICBzbmFha2UucGxheSgpO1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiODBweCBBUkNBREVDTEFTU0lDXCJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiR0FNRSBPVkVSXCIsIDI0NSwgMzAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnRBbmltYXRpbmcoZnBzKSB7XG4gICAgICAgIHRoaXMuZnBzSW50ZXJ2YWwgPSAxMDAwIC8gZnBzO1xuICAgICAgICB0aGlzLnRoZW4gPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHRoaXMudGhlbjtcbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5ub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLm5vdyAtIHRoaXMudGhlbjtcbiAgICAgICAgaWYgKHRoaXMuZWxhcHNlZCA+IHRoaXMuZnBzSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIHRoaXMudGhlbiA9IHRoaXMubm93IC0gKHRoaXMuZWxhcHNlZCAlIHRoaXMuZnBzSW50ZXJ2YWwpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIXRoaXMuZ2FtZW92ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZCgpO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyMS5oYW5kbGVQbGF5ZXJGcmFtZSgpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuZW1pZXNbMF0pIHRoaXMuZHJhd0VuZW15KDApXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZW5lbWllc1sxXSkgdGhpcy5kcmF3RW5lbXkoMSlcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lbmVtaWVzWzJdKSB0aGlzLmRyYXdFbmVteSgyKVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuZW1pZXNbM10pIHRoaXMuZHJhd0VuZW15KDMpXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZW5lbWllc1s0XSkgdGhpcy5kcmF3RW5lbXkoNCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3UGxheWVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIxLm1vdmVQbGF5ZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdIZWFsdGgodGhpcy5oZWFsdGgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVFbmVteSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tHYW1lb3ZlcigpO1xuICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLmF0dGFja0NEICE9IDApIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5wbGF5ZXIxLmF0dGFja0NELS07XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgfVxuICAgIH1cblxuICAgIC8vIHN0YXJ0QW5pbWF0aW5nKGZwcykge1xuICAgIC8vICAgICB0aGlzLmZwc0ludGVydmFsID0gMTAwMCAvIGZwcztcbiAgICAvLyAgICAgdGhpcy50aGVuID0gRGF0ZS5ub3coKTtcbiAgICAvLyAgICAgdGhpcy5zdGFydFRpbWUgPSB0aGlzLnRoZW47XG4gICAgLy8gICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgIC8vIH1cbiAgICAvLyBhbmltYXRlKCkge1xuICAgIC8vICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgIC8vICAgICB0aGlzLm5vdyA9IERhdGUubm93KCk7XG4gICAgLy8gICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMubm93IC0gdGhpcy50aGVuO1xuICAgIC8vICAgICBpZiAodGhpcy5lbGFwc2VkID4gdGhpcy5mcHNJbnRlcnZhbCkge1xuICAgIC8vICAgICAgICAgdGhpcy50aGVuID0gdGhpcy5ub3cgLSAodGhpcy5lbGFwc2VkICUgdGhpcy5mcHNJbnRlcnZhbCk7XG4gICAgLy8gICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgLy8gICAgICAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKCk7XG4gICAgLy8gICAgICAgICBpZiAodGhpcy5lbmVtaWVzWzBdKSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5kcmF3RW5lbXkoMCk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBpZiAodGhpcy5lbmVtaWVzWzFdKSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5kcmF3RW5lbXkoMSk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBpZiAodGhpcy5lbmVtaWVzWzJdKSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5kcmF3RW5lbXkoMik7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBpZiAodGhpcy5lbmVtaWVzWzNdKSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5kcmF3RW5lbXkoMyk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBpZiAodGhpcy5lbmVtaWVzWzRdKSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5kcmF3RW5lbXkoNCk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICB0aGlzLmRyYXdQbGF5ZXIoKTtcbiAgICAvLyAgICAgICAgIHRoaXMucGxheWVyMS5tb3ZlUGxheWVyKCk7XG4gICAgLy8gICAgICAgICB0aGlzLnBsYXllcjEuaGFuZGxlUGxheWVyRnJhbWUoKTtcbiAgICAvLyAgICAgICAgIHRoaXMuZ2VuZXJhdGVFbmVteSgpO1xuICAgIC8vICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbn1cblxuIiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVmlldyB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcylcbiAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcbiAgICB9XG4gICAgXG4gICAgcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcInJcIikge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzdGFydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5nYW1lLnN0YXJ0QW5pbWF0aW5nKDQ1KTtcbiAgICAgICAgLy8gdGhpcy5nYW1lLmFuaW1hdGUoKTtcbiAgICB9XG5cbiAgICByZXN0YXJ0KCkge1xuICAgICAgICB0aGlzLmdhbWUuZ2FtZW92ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5nYW1lLmhlYWx0aCA9IDEwMDA7XG4gICAgICAgIHRoaXMuZ2FtZS5lbmVtaWVzID0gW107XG4gICAgICAgIHRoaXMuZ2FtZS5zdGFydEFuaW1hdGluZyg0NSk7XG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy54ID0gMzAwO1xuICAgICAgICB0aGlzLnkgPSAyMDA7XG4gICAgICAgIHRoaXMud2lkdGggPSAxODc7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTMwO1xuICAgICAgICB0aGlzLnhIaXRCb3ggPSBbdGhpcy54LCB0aGlzLnggKyB0aGlzLndpZHRoXTtcbiAgICAgICAgdGhpcy55SGl0Qm94ID0gW3RoaXMueSwgdGhpcy55ICt0aGlzLmhlaWdodF07XG4gICAgICAgIHRoaXMuZnJhbWVYID0gMDtcbiAgICAgICAgdGhpcy5mcmFtZVkgPSAwO1xuICAgICAgICB0aGlzLnNwZWVkID0gMTA7XG4gICAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGVmdEF0dGFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJpZ2h0QXR0YWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMubEF0dGFja1hIaXRCb3g7XG4gICAgICAgIHRoaXMubEF0dGFja1lIaXRCb3g7XG4gICAgICAgIHRoaXMuckF0dGFja1hIaXRCb3g7XG4gICAgICAgIHRoaXMuckF0dGFja1lIaXRCb3g7XG4gICAgICAgIHRoaXMucGxheWVyU3ByaXRlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL2Jpa2UxLnBuZ1wiO1xuICAgICAgICB0aGlzLmtleXMgPSBbXTtcbiAgICAgICAgLy8gdGhpcy5hdHRhY2tDRCA9IDBcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cygpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMua2V5c1tlLmtleV0gPSB0cnVlO1xuICAgICAgICB9KVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5rZXlzW2Uua2V5XTtcbiAgICAgICAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxlZnRBdHRhY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucmlnaHRBdHRhY2sgPSBmYWxzZTtcbiAgICAgICAgfSlcblxuXG4gICAgfVxuIFxuICAgIFxuICAgIG1vdmVQbGF5ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmtleXMudyAmJiB0aGlzLnkgPiAwKSB7ICAgICAgICAgLy8gbW92aW5nIHVwXG4gICAgICAgICAgICB0aGlzLnkgLT0gdGhpcy5zcGVlZDsgICAgICAgICAgIC8vIGluY3JlYXNlIG91ciBwbGF5c2VyJ3MgeSBwb3MgYnkgc3BlZWRcbiAgICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5rZXlzLnMgJiYgdGhpcy55IDwgNTUwKSB7ICAgIC8vIG1vdmluZyBkb3duXG4gICAgICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5rZXlzLmEgJiYgdGhpcy54ID4gODApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnggLT0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmluZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMua2V5cy5kICYmIHRoaXMueCA8IDU4MCkge1xuICAgICAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmtleXMucSkge1xuICAgICAgICAgICAgdGhpcy5mcmFtZVggPSAwO1xuICAgICAgICAgICAgdGhpcy5mcmFtZVkgPSAyO1xuICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubGVmdEF0dGFjayA9IHRydWU7XG4gICAgICAgICAgICAvLyB0aGlzLmF0dGFja0NEID0gMzBcbiAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5sZWZ0QXR0YWNrID0gZmFsc2UsIDMwMDApXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5rZXlzLmUpIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVYID0gMDtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVZID0gMTtcbiAgICAgICAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0QXR0YWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIHRoaXMuYXR0YWNrQ0QgPSAzMFxuICAgICAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB0aGlzLnJpZ2h0QXR0YWNrID0gZmFsc2UsIDMwMDApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVQbGF5ZXJGcmFtZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubW92aW5nKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZyYW1lWClcbiAgICAgICAgICAgIHRoaXMuZnJhbWVYKytcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMucmlnaHRBdHRhY2sgJiYgdGhpcy5mcmFtZVkgPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVZID0gMDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUiBBVFRBQ0tcIilcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMubGVmdEF0dGFjayAmJiB0aGlzLmZyYW1lWSA9PT0gMikge1xuICAgICAgICAgICAgdGhpcy5mcmFtZVkgPSAwO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMIEFUVEFDS1wiKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZnJhbWVYID49IDIpe1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coKVxuICAgICAgICAgICAgdGhpcy5mcmFtZVggPSAwXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVQbGF5ZXJBdHRhY2soKTtcbiAgICB9XG5cbiAgICBoYW5kbGVQbGF5ZXJBdHRhY2soKSB7XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIGlmICh0aGlzLmxlZnRBdHRhY2spIHtcbiAgICAgICAgICAgIHRoaXMubEF0dGFja1hIaXRCb3ggPSBbdGhpcy54ICsgNzAsIHRoaXMueCArIDcwIC0gMzBdO1xuICAgICAgICAgICAgdGhpcy5sQXR0YWNrWUhpdEJveCA9IFt0aGlzLnksIHRoaXMueSArIDc5XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yaWdodEF0dGFjaykge1xuICAgICAgICAgICAgdGhpcy5yQXR0YWNrWEhpdEJveCA9IFt0aGlzLnggKyAxNTAsIHRoaXMueCArIDE1MCArIDMwXTtcbiAgICAgICAgICAgIHRoaXMuckF0dGFja1lIaXRCb3ggPSBbdGhpcy55LCB0aGlzLnkgKyA3OV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXRoaXMubGVmdEF0dGFjaykge1xuICAgICAgICAgICAgdGhpcy5sQXR0YWNrWEhpdEJveCA9IFtdO1xuICAgICAgICAgICAgdGhpcy5sQXR0YWNrWUhpdEJveCA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLnJpZ2h0QXR0YWNrKSB7XG4gICAgICAgICAgICB0aGlzLnJBdHRhY2tYSGl0Qm94ID0gW107XG4gICAgICAgICAgICB0aGlzLnJBdHRhY2tZSGl0Qm94ID0gW107XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJjb25zdCBVdGlsID0ge1xuXG4gICAgYmV0d2Vlbih4LCBtaW4sIG1heCkge1xuICAgICAgICByZXR1cm4geCA+PSBtaW4gJiYgeCA8PSBtYXg7XG4gICAgfSxcbiAgICBjb2xsaXNpb24odW5pdDF4LCB1bml0MXksIHVuaXQxdywgdW5pdDFoLCB1bml0MngsIHVuaXQyeSwgdW5pdDJ3LCB1bml0MmgpIHtcbiAgICAgICAgbGV0IHVuaXQxWEhpdEJveCA9IFt1bml0MXgsIHVuaXQxeCArIHVuaXQxd107XG4gICAgICAgIGxldCB1bml0MVlIaXRCb3ggPSBbdW5pdDF5LCB1bml0MXkgKyB1bml0MWhdO1xuICAgICAgICBsZXQgdW5pdDJYSGl0Qm94ID0gW3VuaXQyeCwgdW5pdDJ4ICsgdW5pdDJ3XTtcbiAgICAgICAgbGV0IHVuaXQyWUhpdEJveCA9IFt1bml0MnksIHVuaXQyeSArIHVuaXQyaF07XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIGxldCB4Q29sbGlzaW9uID0gZmFsc2U7XG4gICAgICAgIGxldCB5Q29sbGlzaW9uID0gZmFsc2U7XG4gICAgICAgIGlmIChVdGlsLmJldHdlZW4odW5pdDFYSGl0Qm94WzBdLCB1bml0MlhIaXRCb3hbMF0sIHVuaXQyWEhpdEJveFsxXSkgfHxcbiAgICAgICAgICAgIFV0aWwuYmV0d2Vlbih1bml0MVhIaXRCb3hbMV0sIHVuaXQyWEhpdEJveFswXSwgdW5pdDJYSGl0Qm94WzFdKSkge1xuICAgICAgICAgICAgICAgIHhDb2xsaXNpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQ09MTElTSU9OWFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICBpZiAoVXRpbC5iZXR3ZWVuKHVuaXQxWUhpdEJveFswXSwgdW5pdDJZSGl0Qm94WzBdLCB1bml0MllIaXRCb3hbMV0pIHx8XG4gICAgICAgICAgICBVdGlsLmJldHdlZW4odW5pdDFZSGl0Qm94WzFdLCB1bml0MllIaXRCb3hbMF0sIHVuaXQyWUhpdEJveFsxXSkpIHtcbiAgICAgICAgICAgICAgICB5Q29sbGlzaW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkNPTExJU0lPTllcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgaWYgKCh4Q29sbGlzaW9uID09PSB0cnVlICYmIHlDb2xsaXNpb24gPT09IHRydWUpKSB7XG4gICAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJDT0xMSVNJT05cIilcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBhdHRhY2tlZChhdHRhY2tUeXBlWCwgYXR0YWNrVHlwZVksIHVuaXR4LCB1bml0eSwgdW5pdHcsIHVuaXRoKSB7XG4gICAgICAgIGxldCB1bml0WEhpdEJveCA9IFt1bml0eCwgdW5pdHggKyB1bml0d107XG4gICAgICAgIGxldCB1bml0WUhpdEJveCA9IFt1bml0eSwgdW5pdHkgKyB1bml0aF07XG4gICAgICAgIGxldCB4QXR0YWNrZWQ7XG4gICAgICAgIGxldCB5QXR0YWNrZWQ7XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIGlmIChVdGlsLmJldHdlZW4oYXR0YWNrVHlwZVhbMF0sIHVuaXRYSGl0Qm94WzBdLCB1bml0WEhpdEJveFsxXSkgfHxcbiAgICAgICAgICAgIFV0aWwuYmV0d2VlbihhdHRhY2tUeXBlWFsxXSwgdW5pdFhIaXRCb3hbMF0sIHVuaXRYSGl0Qm94WzFdKSkge1xuICAgICAgICAgICAgeEF0dGFja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWCBBVFRBQ0tFRFwiKVxuICAgICAgICB9XG4gICAgICAgIGlmIChVdGlsLmJldHdlZW4oYXR0YWNrVHlwZVlbMF0sIHVuaXRZSGl0Qm94WzBdLCB1bml0WUhpdEJveFsxXSkgfHxcbiAgICAgICAgICAgIFV0aWwuYmV0d2VlbihhdHRhY2tUeXBlWVsxXSwgdW5pdFlIaXRCb3hbMF0sIHVuaXRZSGl0Qm94WzFdKSkge1xuICAgICAgICAgICAgeUF0dGFja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGlmICgoeEF0dGFja2VkID09PSB0cnVlICYmIHlBdHRhY2tlZCA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNMSUNFIVwiKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IFV0aWwiXSwic291cmNlUm9vdCI6IiJ9