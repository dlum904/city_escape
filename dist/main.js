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
      break;

    case "crazy":
      this.enemySprite.src = "./src/images/car2.png";
      this.x = Math.floor(Math.random() * (550 - 120) + 120);
      this.y = 650;
      break;

    default:
  }

  this.xHitBox = [this.x, this.x + this.hitboxWidth];
  this.yHitBox = [this.y, this.y + this.hitboxHeight];
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
        console.log("generating enemy"); // let spawnLocation = Math.floor(Math.random() * (550 - 120) + 120);   TODO make so enemies do not spawn on top of each other
        // let checkSafeGenerate = true;
        // for (let i = 0; i < this.enemies; i++) {
        //     let enemy = this.enemies[i];
        //     if (enemy.hitboxWid)
        // }

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
      var currentEnemy = this.enemies[enemyNum];

      if (currentEnemy.type === "stupid") {
        this.ctx.drawImage(currentEnemy.enemySprite, 0, 0, currentEnemy.width, currentEnemy.height, currentEnemy.x, currentEnemy.y, 90, 150);
        currentEnemy.y += 3;

        if (Util.collision(this.player1.x + 67, this.player1.y, 60, this.player1.height, currentEnemy.x, currentEnemy.y, currentEnemy.hitboxWidth, currentEnemy.hitboxHeight)) {
          this.health -= 1;
          console.log(this.health);
        }

        if (this.player1.leftAttack) {
          if (Util.attacked(this.player1.lAttackXHitBox, this.player1.lAttackYHitBox, currentEnemy.x, currentEnemy.y, currentEnemy.hitboxWidth, currentEnemy.hitboxHeight)) {
            this.enemies.splice(enemyNum, 1);
            this.slice.play();
          }
        }

        if (this.player1.rightAttack) {
          if (Util.attacked(this.player1.rAttackXHitBox, this.player1.rAttackYHitBox, currentEnemy.x, currentEnemy.y, currentEnemy.hitboxWidth, currentEnemy.hitboxHeight)) {
            this.enemies.splice(enemyNum, 1);
            this.slice.play();
          }
        }

        if (currentEnemy.y > this.height && currentEnemy.type === "stupid") {
          this.enemies.splice(enemyNum, 1); // debugger
        }
      }

      if (currentEnemy.type === "crazy") {
        this.ctx.drawImage(currentEnemy.enemySprite, 0, 0, currentEnemy.width, currentEnemy.height, currentEnemy.x, currentEnemy.y, 90, 150);

        if (this.player1.x + 20 > currentEnemy.x) {
          currentEnemy.x += 4;
          currentEnemy.y -= 6;
        } else if (Util.between(this.player1.x + 20, currentEnemy.x, currentEnemy.x + 20)) {
          currentEnemy.y -= 12; // debugger
        } else {
          currentEnemy.x -= 4;
          currentEnemy.y -= 6;
        }

        if (Util.collision(this.player1.x + 67, this.player1.y, 60, this.player1.height, currentEnemy.x, currentEnemy.y, currentEnemy.hitboxWidth, currentEnemy.hitboxHeight)) {
          this.health -= 5;
        }

        if (this.player1.leftAttack) {
          if (Util.attacked(this.player1.lAttackXHitBox, this.player1.lAttackYHitBox, currentEnemy.x, currentEnemy.y, currentEnemy.hitboxWidth, currentEnemy.hitboxHeight)) {
            this.enemies.splice(enemyNum, 1);
            this.slice.play();
          }
        }

        if (this.player1.rightAttack) {
          if (Util.attacked(this.player1.rAttackXHitBox, this.player1.rAttackYHitBox, currentEnemy.x, currentEnemy.y, currentEnemy.hitboxWidth, currentEnemy.hitboxHeight)) {
            this.enemies.splice(enemyNum, 1);
            this.slice.play();
          }
        }

        if (currentEnemy.y < -150 && currentEnemy.type === "crazy") {
          this.enemies.splice(enemyNum, 1);
        }
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

          if (this.enemies[0]) {
            this.drawEnemy(0);
          }

          if (this.enemies[1]) {
            this.drawEnemy(1);
          }

          if (this.enemies[2]) {
            this.drawEnemy(2);
          }

          if (this.enemies[3]) {
            this.drawEnemy(3);
          }

          if (this.enemies[4]) {
            this.drawEnemy(4);
          }

          this.player1.movePlayer();
          this.drawPlayer();
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
      this.game.startAnimating(30); // this.game.animate();
    }
  }, {
    key: "restart",
    value: function restart() {
      this.game.gameover = false;
      this.game.health = 1000;
      this.game.enemies = [];
      this.game.startAnimating(30);
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
        console.log(this.frameX);
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
        console.log();
        this.frameX = 0;
      }

      this.handlePlayerAttack();
    }
  }, {
    key: "handlePlayerAttack",
    value: function handlePlayerAttack() {
      // debugger
      if (this.leftAttack) {
        this.lAttackXHitBox = [this.x, this.x + 64];
        this.lAttackYHitBox = [this.y, this.y + 88];
      }

      if (this.rightAttack) {
        this.rAttackXHitBox = [this.x + this.width, this.x + 64];
        this.rAttackYHitBox = [this.y, this.y + 88];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VuZW15LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImhlaWdodCIsIkdhbWVWaWV3Iiwic3RhcnQiLCJFbmVteSIsImN0eCIsImVuZW15VHlwZSIsImhpdGJveFdpZHRoIiwiaGl0Ym94SGVpZ2h0IiwidHlwZSIsImVuZW15U3ByaXRlIiwiSW1hZ2UiLCJzcmMiLCJ4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwieSIsInhIaXRCb3giLCJ5SGl0Qm94IiwiVXRpbCIsInJlcXVpcmUiLCJHYW1lIiwiaGVhbHRoIiwiZ2FtZW92ZXIiLCJnZXRDb250ZXh0IiwicGxheWVyMSIsIlBsYXllciIsImtleXMiLCJ0b3BMb29wIiwiYm90dG9tTG9vcCIsImJhY2tncm91bmQiLCJlbmVtaWVzIiwiZnBzSW50ZXJ2YWwiLCJzdGFydFRpbWUiLCJub3ciLCJ0aGVuIiwiZWxhcHNlZCIsInNsaWNlIiwiQXVkaW8iLCJkcmF3SW1hZ2UiLCJwbGF5ZXJTcHJpdGUiLCJmcmFtZVgiLCJmcmFtZVkiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImZvbnQiLCJmaWxsVGV4dCIsInJhbmRvbU51bSIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJyYW5kb21FbmVteU51bSIsInB1c2giLCJlbmVteU51bSIsImN1cnJlbnRFbmVteSIsImNvbGxpc2lvbiIsImxlZnRBdHRhY2siLCJhdHRhY2tlZCIsImxBdHRhY2tYSGl0Qm94IiwibEF0dGFja1lIaXRCb3giLCJzcGxpY2UiLCJwbGF5IiwicmlnaHRBdHRhY2siLCJyQXR0YWNrWEhpdEJveCIsInJBdHRhY2tZSGl0Qm94IiwiYmV0d2VlbiIsInNuYWFrZSIsImZwcyIsIkRhdGUiLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCIsImNsZWFyUmVjdCIsImRyYXdCYWNrZ3JvdW5kIiwiaGFuZGxlUGxheWVyRnJhbWUiLCJkcmF3RW5lbXkiLCJtb3ZlUGxheWVyIiwiZHJhd1BsYXllciIsImRyYXdIZWFsdGgiLCJnZW5lcmF0ZUVuZW15IiwiY2hlY2tHYW1lb3ZlciIsImdhbWUiLCJyZXN0YXJ0IiwicmVnaXN0ZXJFdmVudHMiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleSIsInN0YXJ0QW5pbWF0aW5nIiwic3BlZWQiLCJtb3ZpbmciLCJ3IiwicyIsImEiLCJkIiwicSIsImhhbmRsZVBsYXllckF0dGFjayIsIm1pbiIsIm1heCIsInVuaXQxeCIsInVuaXQxeSIsInVuaXQxdyIsInVuaXQxaCIsInVuaXQyeCIsInVuaXQyeSIsInVuaXQydyIsInVuaXQyaCIsInVuaXQxWEhpdEJveCIsInVuaXQxWUhpdEJveCIsInVuaXQyWEhpdEJveCIsInVuaXQyWUhpdEJveCIsInhDb2xsaXNpb24iLCJ5Q29sbGlzaW9uIiwiYXR0YWNrVHlwZVgiLCJhdHRhY2tUeXBlWSIsInVuaXR4IiwidW5pdHkiLCJ1bml0dyIsInVuaXRoIiwidW5pdFhIaXRCb3giLCJ1bml0WUhpdEJveCIsInhBdHRhY2tlZCIsInlBdHRhY2tlZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FB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R0FBRyxJQUFaO0FBQ0F4RSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaO0FBQ0g7O0FBQ0QsUUFBSS9CLElBQUksQ0FBQzhDLE9BQUwsQ0FBYWlELFdBQVcsQ0FBQyxDQUFELENBQXhCLEVBQTZCTSxXQUFXLENBQUMsQ0FBRCxDQUF4QyxFQUE2Q0EsV0FBVyxDQUFDLENBQUQsQ0FBeEQsS0FDQXJHLElBQUksQ0FBQzhDLE9BQUwsQ0FBYWlELFdBQVcsQ0FBQyxDQUFELENBQXhCLEVBQTZCTSxXQUFXLENBQUMsQ0FBRCxDQUF4QyxFQUE2Q0EsV0FBVyxDQUFDLENBQUQsQ0FBeEQsQ0FESixFQUNrRTtBQUM5REUsZUFBUyxHQUFHLElBQVo7QUFFSDs7QUFDRCxRQUFLRCxTQUFTLEtBQUssSUFBZCxJQUFzQkMsU0FBUyxLQUFLLElBQXpDLEVBQWdEO0FBQzVDO0FBQ0F6RSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0EsYUFBTyxJQUFQO0FBQ0gsS0FKRCxNQUtLO0FBQ0QsYUFBTyxLQUFQO0FBQ0g7QUFDSjtBQXhEUSxDQUFiO0FBMERBeUUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCekcsSUFBakIsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgR2FtZSBmcm9tICcuL3NjcmlwdHMvZ2FtZSdcbmltcG9ydCBHYW1lVmlldyBmcm9tICcuL3NjcmlwdHMvZ2FtZV92aWV3JztcblxuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhczFcIik7XG5jYW52YXMud2lkdGggPSA4NDA7XG5jYW52YXMuaGVpZ2h0ID0gNjUwO1xuLy8gY29uc3QgZ2FtZTEgPSBuZXcgR2FtZShjYW52YXMpXG5uZXcgR2FtZVZpZXcoY2FudmFzKS5zdGFydCgpXG5cblxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lbXkge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgZW5lbXlUeXBlKSB7XG4gICAgICAgIC8vIHRoaXMueCA9IDA7ICAgICAgIC8vIFRPRE8gV2lsbCBjaGFuZ2UgYmFzZWQgb24gdGhlIGFyZyBwYXNzZWQgaW50byBjb25zdHJ1Y3RvclxuICAgICAgICAvLyB0aGlzLnkgPSAwO1xuICAgICAgICB0aGlzLndpZHRoID0gMjQzO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDQ4MDtcbiAgICAgICAgdGhpcy5oaXRib3hXaWR0aCA9IDkwO1xuICAgICAgICB0aGlzLmhpdGJveEhlaWdodCA9IDE1MDtcbiAgICAgICAgdGhpcy50eXBlID0gZW5lbXlUeXBlIC8vIFRPRE8gV2lsbCBjaGFuZ2UgYmFzZWQgb24gYSB0aGUgYXJndW1lbnQgcGFzc2VkIGludG8gY29uc3RydWN0b3JcbiAgICAgICAgdGhpcy5lbmVteVNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcInN0dXBpZFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlTcHJpdGUuc3JjID0gXCIuL3NyYy9pbWFnZXMvY2FyMS5wbmdcIlxuICAgICAgICAgICAgICAgIHRoaXMueCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg1NTAgLSAxMjApICsgMTIwKVxuICAgICAgICAgICAgICAgIHRoaXMueSA9IC0xMDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY3JhenlcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW15U3ByaXRlLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL2NhcjIucG5nXCJcbiAgICAgICAgICAgICAgICB0aGlzLnggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNTUwIC0gMTIwKSArIDEyMClcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSA2NTA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgdGhpcy54SGl0Qm94ID0gW3RoaXMueCwgdGhpcy54ICsgdGhpcy5oaXRib3hXaWR0aF07XG4gICAgICAgIHRoaXMueUhpdEJveCA9IFt0aGlzLnksIHRoaXMueSArIHRoaXMuaGl0Ym94SGVpZ2h0XTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgRW5lbXkgZnJvbSBcIi4vZW5lbXlcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5jb25zdCBVdGlsID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgICAgICB0aGlzLmhlYWx0aCA9IDEwMDA7XG4gICAgICAgIHRoaXMuZ2FtZW92ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLnBsYXllcjEgPSBuZXcgUGxheWVyKCk7XG4gICAgICAgIHRoaXMud2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgICAgICAgdGhpcy5rZXlzID0gW107XG4gICAgICAgIHRoaXMudG9wTG9vcCA9IC1jYW52YXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmJvdHRvbUxvb3AgPSAwO1xuICAgICAgICB0aGlzLmJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKVxuICAgICAgICB0aGlzLmJhY2tncm91bmQuc3JjID0gXCIuL3NyYy9pbWFnZXMvYmFja2dyb3VuZC0xLnBuZ1wiO1xuICAgICAgICB0aGlzLmVuZW1pZXMgPSBbXTsgLy8gY29udGFpbnMgZW5lbWllcyBjdXJyZW50bHkgb24gc2NyZWVuLCBzaG93biBhcyBlbmVteS50eXBlXG4gICAgICAgIHRoaXMuZnBzSW50ZXJ2YWw7XG4gICAgICAgIHRoaXMuc3RhcnRUaW1lO1xuICAgICAgICB0aGlzLm5vdztcbiAgICAgICAgdGhpcy50aGVuO1xuICAgICAgICB0aGlzLmVsYXBzZWQ7XG4gICAgICAgIHRoaXMuc2xpY2UgPSBuZXcgQXVkaW8oJy4vc3JjL2F1ZGlvL3NsaWNlLm1wMycpXG4gICAgfVxuXG4gICAgZHJhd0JhY2tncm91bmQoKSB7XG4gICAgICAgIC8vYm90dG9tIGhhbGYgb2YgdGhlIGJhY2tncm91bmRcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLCAwLCAwLFxuICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICAwLCB0aGlzLmJvdHRvbUxvb3AsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0XG4gICAgICAgIClcbiAgICAgICAgdGhpcy5ib3R0b21Mb29wICs9IDEwO1xuICAgICAgICBpZiAodGhpcy5ib3R0b21Mb29wID09PSB0aGlzLmhlaWdodCkgdGhpcy5ib3R0b21Mb29wID0gLXRoaXMuaGVpZ2h0O1xuICAgICAgICAvL3RvcCBoYWxmIG9mIHRoZSBiYWNrZ3JvdW5kXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZCwgMCwgMCxcbiAgICAgICAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LFxuICAgICAgICAgICAgMCwgdGhpcy50b3BMb29wLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodFxuICAgICAgICApXG4gICAgICAgIHRoaXMudG9wTG9vcCArPSAxMDtcbiAgICAgICAgaWYgKHRoaXMudG9wTG9vcCA9PT0gdGhpcy5oZWlnaHQpIHRoaXMudG9wTG9vcCA9IC10aGlzLmhlaWdodDtcbiAgICB9XG5cbiAgICBkcmF3UGxheWVyKCkge1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICB0aGlzLnBsYXllcjEucGxheWVyU3ByaXRlLCB0aGlzLnBsYXllcjEud2lkdGggKiB0aGlzLnBsYXllcjEuZnJhbWVYLCB0aGlzLnBsYXllcjEuaGVpZ2h0ICogdGhpcy5wbGF5ZXIxLmZyYW1lWSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aGVyZSB3ZSBjcm9wIG91dCB0aGUgaW1hZ2UgZm9yIHNwcml0ZVxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIxLndpZHRoLCB0aGlzLnBsYXllcjEuaGVpZ2h0LCB0aGlzLnBsYXllcjEueCwgdGhpcy5wbGF5ZXIxLnksICAgIC8vIHdoZXJlIHRoZSBpbWFnZSB3aWxsIGJlIGFuaW1hdGVkIG9uIGNhbnZhc1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIxLndpZHRoLCB0aGlzLnBsYXllcjEuaGVpZ2h0XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZHJhd0hlYWx0aChoZWFsdGgpIHtcbiAgICAgICAgLy8gaW5pdGlhbCBoZWFsdGhcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZWRcIlxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgxMCwgMzAsIDI1MCwgMTApXG5cbiAgICAgICAgLy8geW91ciBhY3R1YWwgaGVhbHRoXG4gICAgICAgIGlmIChoZWFsdGggPCAoNzAwKSkge1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ5ZWxsb3dcIlxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMTAsIDMwLCBoZWFsdGggLyA0LCAxMClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiZ3JlZW5cIlxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMTAsIDMwLCBoZWFsdGggLyA0LCAxMClcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gdGV4dFxuICAgIFxuICAgICAgICB0aGlzLmN0eC5mb250ID0gXCI0MHB4IEFSQ0FERUNMQVNTSUNcIlxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KCBcIkhQXCIsIDEwLCAyNylcblxuICAgICAgICBpZiAoaGVhbHRoIDwgMTAwKXtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjQwcHggQVJDQURFQ0xBU1NJQ1wiXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoYCR7aGVhbHRofS8gMTAwMGAsIDgwLCAyNylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChoZWFsdGggPCA3MDApIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjQwcHggQVJDQURFQ0xBU1NJQ1wiXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInllbGxvd1wiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoYCR7aGVhbHRofS8gMTAwMGAsIDgwLCAyNylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjQwcHggQVJDQURFQ0xBU1NJQ1wiXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChgJHtoZWFsdGh9LyAxMDAwYCwgODAsIDI3KVxuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgfVxuXG4gICAgZ2VuZXJhdGVFbmVteSgpIHtcbiAgICAgICAgLy8gbG9naWMgZm9yIHdoZW4gdG8gZ2VuZXJhdGUgYW4gZW5lbXkuICB3aWxsIHB1c2ggaW50byB0aGlzLmVuZW1pZXNcbiAgICAgICAgY29uc3QgcmFuZG9tTnVtID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDgwKSk7XG4gICAgICAgIGlmICh0aGlzLmVuZW1pZXMubGVuZ3RoIDwgNCAmJiByYW5kb21OdW0gPT09IDUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2VuZXJhdGluZyBlbmVteVwiKVxuXG4gICAgICAgICAgICAvLyBsZXQgc3Bhd25Mb2NhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg1NTAgLSAxMjApICsgMTIwKTsgICBUT0RPIG1ha2Ugc28gZW5lbWllcyBkbyBub3Qgc3Bhd24gb24gdG9wIG9mIGVhY2ggb3RoZXJcbiAgICAgICAgICAgIC8vIGxldCBjaGVja1NhZmVHZW5lcmF0ZSA9IHRydWU7XG4gICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW5lbWllczsgaSsrKSB7XG4gICAgICAgICAgICAvLyAgICAgbGV0IGVuZW15ID0gdGhpcy5lbmVtaWVzW2ldO1xuICAgICAgICAgICAgLy8gICAgIGlmIChlbmVteS5oaXRib3hXaWQpXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbUVuZW15TnVtID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDEwMCkpXG4gICAgICAgICAgICBsZXQgZW5lbXlUeXBlXG4gICAgICAgICAgICBpZiAocmFuZG9tRW5lbXlOdW0gPj0gNDApIHtcbiAgICAgICAgICAgICAgICBlbmVteVR5cGUgPSBcInN0dXBpZFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbmVteVR5cGUgPSBcImNyYXp5XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVuZW15VHlwZSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVuZW15VHlwZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5lbWllcy5wdXNoKG5ldyBFbmVteSh0aGlzLmN0eCwgZW5lbXlUeXBlKSk7ICAgLy8gVE9ETzogcmFuZG9tbHkgY2hvb3NlIHRoZSB0eXBlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkcmF3RW5lbXkoZW5lbXlOdW0pIHtcbiAgICAgICAgbGV0IGN1cnJlbnRFbmVteSA9IHRoaXMuZW5lbWllc1tlbmVteU51bV07XG4gICAgICAgIGlmIChjdXJyZW50RW5lbXkudHlwZSA9PT0gXCJzdHVwaWRcIikge1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS5lbmVteVNwcml0ZSwgMCwgMCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkud2lkdGgsIGN1cnJlbnRFbmVteS5oZWlnaHQsIGN1cnJlbnRFbmVteS54ICwgY3VycmVudEVuZW15LnksXG4gICAgICAgICAgICAgICAgOTAsIDE1MFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGN1cnJlbnRFbmVteS55ICs9IDM7XG4gICAgICAgICAgICBpZiAoVXRpbC5jb2xsaXNpb24odGhpcy5wbGF5ZXIxLnggKyA2NywgdGhpcy5wbGF5ZXIxLnksIDYwLCB0aGlzLnBsYXllcjEuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSwgY3VycmVudEVuZW15LmhpdGJveFdpZHRoLCBjdXJyZW50RW5lbXkuaGl0Ym94SGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYWx0aCAtPSAxO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmhlYWx0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyMS5sZWZ0QXR0YWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKFV0aWwuYXR0YWNrZWQodGhpcy5wbGF5ZXIxLmxBdHRhY2tYSGl0Qm94LCB0aGlzLnBsYXllcjEubEF0dGFja1lIaXRCb3gsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSwgY3VycmVudEVuZW15LmhpdGJveFdpZHRoLCBjdXJyZW50RW5lbXkuaGl0Ym94SGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZW1pZXMuc3BsaWNlKGVuZW15TnVtLCAxKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNsaWNlLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyMS5yaWdodEF0dGFjaykge1xuICAgICAgICAgICAgICAgIGlmIChVdGlsLmF0dGFja2VkKHRoaXMucGxheWVyMS5yQXR0YWNrWEhpdEJveCwgdGhpcy5wbGF5ZXIxLnJBdHRhY2tZSGl0Qm94LFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnksIGN1cnJlbnRFbmVteS5oaXRib3hXaWR0aCwgY3VycmVudEVuZW15LmhpdGJveEhlaWdodCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnNwbGljZShlbmVteU51bSwgMSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbGljZS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGN1cnJlbnRFbmVteS55ID4gdGhpcy5oZWlnaHQgJiYgY3VycmVudEVuZW15LnR5cGUgPT09XCJzdHVwaWRcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5lbWllcy5zcGxpY2UoZW5lbXlOdW0sIDEpXG4gICAgICAgICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50RW5lbXkudHlwZSA9PT0gXCJjcmF6eVwiKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LmVuZW15U3ByaXRlLCAwLCAwLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS53aWR0aCwgY3VycmVudEVuZW15LmhlaWdodCwgY3VycmVudEVuZW15LngsIGN1cnJlbnRFbmVteS55LFxuICAgICAgICAgICAgICAgIDkwLCAxNTBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIxLnggKyAyMCAgPiBjdXJyZW50RW5lbXkueCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS54ICs9IDQ7XG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LnkgLT0gNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKFV0aWwuYmV0d2Vlbih0aGlzLnBsYXllcjEueCArIDIwLCBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnggKyAyMCkpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueSAtPSAxMjtcbiAgICAgICAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LnggLT0gNDtcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueSAtPSA2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFV0aWwuY29sbGlzaW9uKHRoaXMucGxheWVyMS54ICsgNjcsIHRoaXMucGxheWVyMS55LCA2MCwgdGhpcy5wbGF5ZXIxLmhlaWdodCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnksIGN1cnJlbnRFbmVteS5oaXRib3hXaWR0aCwgY3VycmVudEVuZW15LmhpdGJveEhlaWdodCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFsdGggLT0gNTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIxLmxlZnRBdHRhY2spIHtcbiAgICAgICAgICAgICAgICBpZiAoVXRpbC5hdHRhY2tlZCh0aGlzLnBsYXllcjEubEF0dGFja1hIaXRCb3gsIHRoaXMucGxheWVyMS5sQXR0YWNrWUhpdEJveCxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LngsIGN1cnJlbnRFbmVteS55LCBjdXJyZW50RW5lbXkuaGl0Ym94V2lkdGgsIGN1cnJlbnRFbmVteS5oaXRib3hIZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lbWllcy5zcGxpY2UoZW5lbXlOdW0sIDEpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2xpY2UucGxheSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllcjEucmlnaHRBdHRhY2spIHtcbiAgICAgICAgICAgICAgICBpZiAoVXRpbC5hdHRhY2tlZCh0aGlzLnBsYXllcjEuckF0dGFja1hIaXRCb3gsIHRoaXMucGxheWVyMS5yQXR0YWNrWUhpdEJveCxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LngsIGN1cnJlbnRFbmVteS55LCBjdXJyZW50RW5lbXkuaGl0Ym94V2lkdGgsIGN1cnJlbnRFbmVteS5oaXRib3hIZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lbWllcy5zcGxpY2UoZW5lbXlOdW0sIDEpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2xpY2UucGxheSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjdXJyZW50RW5lbXkueSA8IC0xNTAgJiYgY3VycmVudEVuZW15LnR5cGUgPT09IFwiY3JhenlcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5lbWllcy5zcGxpY2UoZW5lbXlOdW0sIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hlY2tHYW1lb3ZlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuaGVhbHRoIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZW92ZXIgPSB0cnVlO1xuICAgICAgICAgICAgY29uc3Qgc25hYWtlID0gbmV3IEF1ZGlvKCcuL3NyYy9hdWRpby9HYW1lb3Zlci5tcDMnKVxuICAgICAgICAgICAgc25hYWtlLnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjgwcHggQVJDQURFQ0xBU1NJQ1wiXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChcIkdBTUUgT1ZFUlwiLCAyNDUsIDMwMClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0QW5pbWF0aW5nKGZwcykge1xuICAgICAgICB0aGlzLmZwc0ludGVydmFsID0gMTAwMCAvIGZwcztcbiAgICAgICAgdGhpcy50aGVuID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSB0aGlzLnRoZW47XG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgIH1cblxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMubm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gdGhpcy5ub3cgLSB0aGlzLnRoZW47XG4gICAgICAgIGlmICh0aGlzLmVsYXBzZWQgPiB0aGlzLmZwc0ludGVydmFsKSB7XG4gICAgICAgICAgICB0aGlzLnRoZW4gPSB0aGlzLm5vdyAtICh0aGlzLmVsYXBzZWQgJSB0aGlzLmZwc0ludGVydmFsKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5nYW1lb3Zlcikge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIxLmhhbmRsZVBsYXllckZyYW1lKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZW5lbWllc1swXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdFbmVteSgwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZW5lbWllc1sxXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdFbmVteSgxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZW5lbWllc1syXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdFbmVteSgyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZW5lbWllc1szXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdFbmVteSgzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZW5lbWllc1s0XSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdFbmVteSg0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIxLm1vdmVQbGF5ZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdQbGF5ZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdIZWFsdGgodGhpcy5oZWFsdGgpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGVFbmVteSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tHYW1lb3ZlcigpO1xuICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLmF0dGFja0NEICE9IDApIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5wbGF5ZXIxLmF0dGFja0NELS07XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgfVxuICAgIH1cblxuICAgIC8vIHN0YXJ0QW5pbWF0aW5nKGZwcykge1xuICAgIC8vICAgICB0aGlzLmZwc0ludGVydmFsID0gMTAwMCAvIGZwcztcbiAgICAvLyAgICAgdGhpcy50aGVuID0gRGF0ZS5ub3coKTtcbiAgICAvLyAgICAgdGhpcy5zdGFydFRpbWUgPSB0aGlzLnRoZW47XG4gICAgLy8gICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgIC8vIH1cbiAgICAvLyBhbmltYXRlKCkge1xuICAgIC8vICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgIC8vICAgICB0aGlzLm5vdyA9IERhdGUubm93KCk7XG4gICAgLy8gICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMubm93IC0gdGhpcy50aGVuO1xuICAgIC8vICAgICBpZiAodGhpcy5lbGFwc2VkID4gdGhpcy5mcHNJbnRlcnZhbCkge1xuICAgIC8vICAgICAgICAgdGhpcy50aGVuID0gdGhpcy5ub3cgLSAodGhpcy5lbGFwc2VkICUgdGhpcy5mcHNJbnRlcnZhbCk7XG4gICAgLy8gICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgLy8gICAgICAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKCk7XG4gICAgLy8gICAgICAgICBpZiAodGhpcy5lbmVtaWVzWzBdKSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5kcmF3RW5lbXkoMCk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBpZiAodGhpcy5lbmVtaWVzWzFdKSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5kcmF3RW5lbXkoMSk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBpZiAodGhpcy5lbmVtaWVzWzJdKSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5kcmF3RW5lbXkoMik7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBpZiAodGhpcy5lbmVtaWVzWzNdKSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5kcmF3RW5lbXkoMyk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBpZiAodGhpcy5lbmVtaWVzWzRdKSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5kcmF3RW5lbXkoNCk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICB0aGlzLmRyYXdQbGF5ZXIoKTtcbiAgICAvLyAgICAgICAgIHRoaXMucGxheWVyMS5tb3ZlUGxheWVyKCk7XG4gICAgLy8gICAgICAgICB0aGlzLnBsYXllcjEuaGFuZGxlUGxheWVyRnJhbWUoKTtcbiAgICAvLyAgICAgICAgIHRoaXMuZ2VuZXJhdGVFbmVteSgpO1xuICAgIC8vICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbn1cblxuIiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVmlldyB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcylcbiAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcbiAgICB9XG4gICAgXG4gICAgcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcInJcIikge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzdGFydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5nYW1lLnN0YXJ0QW5pbWF0aW5nKDMwKTtcbiAgICAgICAgLy8gdGhpcy5nYW1lLmFuaW1hdGUoKTtcbiAgICB9XG5cbiAgICByZXN0YXJ0KCkge1xuICAgICAgICB0aGlzLmdhbWUuZ2FtZW92ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5nYW1lLmhlYWx0aCA9IDEwMDA7XG4gICAgICAgIHRoaXMuZ2FtZS5lbmVtaWVzID0gW107XG4gICAgICAgIHRoaXMuZ2FtZS5zdGFydEFuaW1hdGluZygzMCk7XG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy54ID0gMzAwO1xuICAgICAgICB0aGlzLnkgPSAyMDA7XG4gICAgICAgIHRoaXMud2lkdGggPSAxODc7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTMwO1xuICAgICAgICB0aGlzLnhIaXRCb3ggPSBbdGhpcy54LCB0aGlzLnggKyB0aGlzLndpZHRoXTtcbiAgICAgICAgdGhpcy55SGl0Qm94ID0gW3RoaXMueSwgdGhpcy55ICt0aGlzLmhlaWdodF07XG4gICAgICAgIHRoaXMuZnJhbWVYID0gMDtcbiAgICAgICAgdGhpcy5mcmFtZVkgPSAwO1xuICAgICAgICB0aGlzLnNwZWVkID0gMTA7XG4gICAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGVmdEF0dGFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJpZ2h0QXR0YWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMubEF0dGFja1hIaXRCb3g7XG4gICAgICAgIHRoaXMubEF0dGFja1lIaXRCb3g7XG4gICAgICAgIHRoaXMuckF0dGFja1hIaXRCb3g7XG4gICAgICAgIHRoaXMuckF0dGFja1lIaXRCb3g7XG4gICAgICAgIHRoaXMucGxheWVyU3ByaXRlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMucGxheWVyU3ByaXRlLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL2Jpa2UxLnBuZ1wiO1xuICAgICAgICB0aGlzLmtleXMgPSBbXTtcbiAgICAgICAgLy8gdGhpcy5hdHRhY2tDRCA9IDBcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cygpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMua2V5c1tlLmtleV0gPSB0cnVlO1xuICAgICAgICB9KVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5rZXlzW2Uua2V5XTtcbiAgICAgICAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxlZnRBdHRhY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucmlnaHRBdHRhY2sgPSBmYWxzZTtcbiAgICAgICAgfSlcblxuXG4gICAgfVxuIFxuICAgIFxuICAgIG1vdmVQbGF5ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmtleXMudyAmJiB0aGlzLnkgPiAwKSB7ICAgICAgICAgLy8gbW92aW5nIHVwXG4gICAgICAgICAgICB0aGlzLnkgLT0gdGhpcy5zcGVlZDsgICAgICAgICAgIC8vIGluY3JlYXNlIG91ciBwbGF5c2VyJ3MgeSBwb3MgYnkgc3BlZWRcbiAgICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5rZXlzLnMgJiYgdGhpcy55IDwgNTUwKSB7ICAgIC8vIG1vdmluZyBkb3duXG4gICAgICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5rZXlzLmEgJiYgdGhpcy54ID4gODApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnggLT0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmluZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMua2V5cy5kICYmIHRoaXMueCA8IDU4MCkge1xuICAgICAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmtleXMucSkge1xuICAgICAgICAgICAgdGhpcy5mcmFtZVggPSAwO1xuICAgICAgICAgICAgdGhpcy5mcmFtZVkgPSAyO1xuICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubGVmdEF0dGFjayA9IHRydWU7XG4gICAgICAgICAgICAvLyB0aGlzLmF0dGFja0NEID0gMzBcbiAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5sZWZ0QXR0YWNrID0gZmFsc2UsIDMwMDApXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5rZXlzLmUpIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVYID0gMDtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVZID0gMTtcbiAgICAgICAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0QXR0YWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIHRoaXMuYXR0YWNrQ0QgPSAzMFxuICAgICAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB0aGlzLnJpZ2h0QXR0YWNrID0gZmFsc2UsIDMwMDApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVQbGF5ZXJGcmFtZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubW92aW5nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZyYW1lWClcbiAgICAgICAgICAgIHRoaXMuZnJhbWVYKytcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMucmlnaHRBdHRhY2sgJiYgdGhpcy5mcmFtZVkgPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVZID0gMDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUiBBVFRBQ0tcIilcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMubGVmdEF0dGFjayAmJiB0aGlzLmZyYW1lWSA9PT0gMikge1xuICAgICAgICAgICAgdGhpcy5mcmFtZVkgPSAwO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMIEFUVEFDS1wiKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZnJhbWVYID49IDIpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coKVxuICAgICAgICAgICAgdGhpcy5mcmFtZVggPSAwXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVQbGF5ZXJBdHRhY2soKTtcbiAgICB9XG5cbiAgICBoYW5kbGVQbGF5ZXJBdHRhY2soKSB7XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIGlmICh0aGlzLmxlZnRBdHRhY2spIHtcbiAgICAgICAgICAgIHRoaXMubEF0dGFja1hIaXRCb3ggPSBbdGhpcy54LCB0aGlzLnggKyA2NF07XG4gICAgICAgICAgICB0aGlzLmxBdHRhY2tZSGl0Qm94ID0gW3RoaXMueSwgdGhpcy55ICsgODhdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJpZ2h0QXR0YWNrKSB7XG4gICAgICAgICAgICB0aGlzLnJBdHRhY2tYSGl0Qm94ID0gW3RoaXMueCArIHRoaXMud2lkdGgsIHRoaXMueCArIDY0XTtcbiAgICAgICAgICAgIHRoaXMuckF0dGFja1lIaXRCb3ggPSBbdGhpcy55LCB0aGlzLnkgKyA4OF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXRoaXMubGVmdEF0dGFjaykge1xuICAgICAgICAgICAgdGhpcy5sQXR0YWNrWEhpdEJveCA9IFtdO1xuICAgICAgICAgICAgdGhpcy5sQXR0YWNrWUhpdEJveCA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLnJpZ2h0QXR0YWNrKSB7XG4gICAgICAgICAgICB0aGlzLnJBdHRhY2tYSGl0Qm94ID0gW107XG4gICAgICAgICAgICB0aGlzLnJBdHRhY2tZSGl0Qm94ID0gW107XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJjb25zdCBVdGlsID0ge1xuXG4gICAgYmV0d2Vlbih4LCBtaW4sIG1heCkge1xuICAgICAgICByZXR1cm4geCA+PSBtaW4gJiYgeCA8PSBtYXg7XG4gICAgfSxcbiAgICBjb2xsaXNpb24odW5pdDF4LCB1bml0MXksIHVuaXQxdywgdW5pdDFoLCB1bml0MngsIHVuaXQyeSwgdW5pdDJ3LCB1bml0MmgpIHtcbiAgICAgICAgbGV0IHVuaXQxWEhpdEJveCA9IFt1bml0MXgsIHVuaXQxeCArIHVuaXQxd107XG4gICAgICAgIGxldCB1bml0MVlIaXRCb3ggPSBbdW5pdDF5LCB1bml0MXkgKyB1bml0MWhdO1xuICAgICAgICBsZXQgdW5pdDJYSGl0Qm94ID0gW3VuaXQyeCwgdW5pdDJ4ICsgdW5pdDJ3XTtcbiAgICAgICAgbGV0IHVuaXQyWUhpdEJveCA9IFt1bml0MnksIHVuaXQyeSArIHVuaXQyaF07XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIGxldCB4Q29sbGlzaW9uID0gZmFsc2U7XG4gICAgICAgIGxldCB5Q29sbGlzaW9uID0gZmFsc2U7XG4gICAgICAgIGlmIChVdGlsLmJldHdlZW4odW5pdDFYSGl0Qm94WzBdLCB1bml0MlhIaXRCb3hbMF0sIHVuaXQyWEhpdEJveFsxXSkgfHxcbiAgICAgICAgICAgIFV0aWwuYmV0d2Vlbih1bml0MVhIaXRCb3hbMV0sIHVuaXQyWEhpdEJveFswXSwgdW5pdDJYSGl0Qm94WzFdKSkge1xuICAgICAgICAgICAgICAgIHhDb2xsaXNpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQ09MTElTSU9OWFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICBpZiAoVXRpbC5iZXR3ZWVuKHVuaXQxWUhpdEJveFswXSwgdW5pdDJZSGl0Qm94WzBdLCB1bml0MllIaXRCb3hbMV0pIHx8XG4gICAgICAgICAgICBVdGlsLmJldHdlZW4odW5pdDFZSGl0Qm94WzFdLCB1bml0MllIaXRCb3hbMF0sIHVuaXQyWUhpdEJveFsxXSkpIHtcbiAgICAgICAgICAgICAgICB5Q29sbGlzaW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkNPTExJU0lPTllcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgaWYgKCh4Q29sbGlzaW9uID09PSB0cnVlICYmIHlDb2xsaXNpb24gPT09IHRydWUpKSB7XG4gICAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJDT0xMSVNJT05cIilcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBhdHRhY2tlZChhdHRhY2tUeXBlWCwgYXR0YWNrVHlwZVksIHVuaXR4LCB1bml0eSwgdW5pdHcsIHVuaXRoKSB7XG4gICAgICAgIGxldCB1bml0WEhpdEJveCA9IFt1bml0eCwgdW5pdHggKyB1bml0d107XG4gICAgICAgIGxldCB1bml0WUhpdEJveCA9IFt1bml0eSwgdW5pdHkgKyB1bml0aF07XG4gICAgICAgIGxldCB4QXR0YWNrZWQ7XG4gICAgICAgIGxldCB5QXR0YWNrZWQ7XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIGlmIChVdGlsLmJldHdlZW4oYXR0YWNrVHlwZVhbMF0sIHVuaXRYSGl0Qm94WzBdLCB1bml0WEhpdEJveFsxXSkgfHxcbiAgICAgICAgICAgIFV0aWwuYmV0d2VlbihhdHRhY2tUeXBlWFsxXSwgdW5pdFhIaXRCb3hbMF0sIHVuaXRYSGl0Qm94WzFdKSkge1xuICAgICAgICAgICAgeEF0dGFja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWCBBVFRBQ0tFRFwiKVxuICAgICAgICB9XG4gICAgICAgIGlmIChVdGlsLmJldHdlZW4oYXR0YWNrVHlwZVlbMF0sIHVuaXRZSGl0Qm94WzBdLCB1bml0WUhpdEJveFsxXSkgfHxcbiAgICAgICAgICAgIFV0aWwuYmV0d2VlbihhdHRhY2tUeXBlWVsxXSwgdW5pdFlIaXRCb3hbMF0sIHVuaXRZSGl0Qm94WzFdKSkge1xuICAgICAgICAgICAgeUF0dGFja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGlmICgoeEF0dGFja2VkID09PSB0cnVlICYmIHlBdHRhY2tlZCA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNMSUNFIVwiKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IFV0aWwiXSwic291cmNlUm9vdCI6IiJ9