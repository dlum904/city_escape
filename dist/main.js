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

new _scripts_game_view__WEBPACK_IMPORTED_MODULE_1__["default"](canvas).start(); // game1.animate();
// game1.startAnimating(40);

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
      }

      if (currentEnemy.y > this.height && currentEnemy.type === "stupid") {
        this.enemies.splice(enemyNum, 1); // debugger
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
          console.log(this.health);
        }
      }

      if (currentEnemy.y < -150 && currentEnemy.type === "crazy") {
        this.enemies.splice(enemyNum, 1); // debugger
      }
    }
  }, {
    key: "checkGameover",
    value: function checkGameover() {
      if (this.health <= 0) {
        window.alert("gameover");
      }
    }
  }, {
    key: "animate",
    value: function animate() {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.drawBackground();

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

      this.drawPlayer();
      this.drawHealth(this.health);
      this.player1.movePlayer();
      this.player1.handlePlayerFrame();
      this.generateEnemy();
      this.checkGameover();
      requestAnimationFrame(this.animate.bind(this));
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

    this.game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"](canvas); // this.health = 1000;
  }

  _createClass(GameView, [{
    key: "start",
    value: function start() {
      this.game.animate();

      if (this.game.gameover === true) {// do something when the game is over
      }
    } // checkGameover() {
    //     if (this.health === 0) {
    //         this.gameover = true;
    //     }
    // }

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
    this.width = 186;
    this.height = 130;
    this.xHitBox = [this.x, this.x + this.width];
    this.yHitBox = [this.y, this.y + this.height];
    this.frameX = 0;
    this.frameY = 0;
    this.speed = 10;
    this.moving = false;
    this.leftAttack = false;
    this.rightAttack = false;
    this.playerSprite = new Image();
    this.playerSprite.src = "./src/images/bike1.png";
    this.keys = [];
    this.registerEvents();
  }

  _createClass(Player, [{
    key: "registerEvents",
    value: function registerEvents() {
      var _this = this;

      // debugger
      window.addEventListener("keydown", function (e) {
        _this.keys[e.key] = true;
        _this.moving = true;
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
      }

      if (this.keys.q) {
        this.frameX = 0;
        this.frameY = 2;
        this.leftAttack = true;
      }

      if (this.keys.e) {
        this.frameX = 0;
        this.frameY = 1;
        this.rightAttack = true;
      }
    }
  }, {
    key: "handlePlayerFrame",
    value: function handlePlayerFrame() {
      if (this.frameX < 1 && this.moving) {
        this.frameX++;
        console.log("moving");
      }

      if (!this.rightAttack && this.frameY === 1) {
        this.frameY = 0;
        console.log("R ATTACK");
      }

      if (!this.leftAttack && this.frameY === 2) {
        this.frameY = 0;
        console.log("L ATTACK");
      } else {
        this.frameX = 0;
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
      console.log("COLLISION");
      return true;
    } else {
      return false;
    }
  }
};
module.exports = Util;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VuZW15LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImhlaWdodCIsIkdhbWVWaWV3Iiwic3RhcnQiLCJFbmVteSIsImN0eCIsImVuZW15VHlwZSIsImhpdGJveFdpZHRoIiwiaGl0Ym94SGVpZ2h0IiwidHlwZSIsImVuZW15U3ByaXRlIiwiSW1hZ2UiLCJzcmMiLCJ4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwieSIsInhIaXRCb3giLCJ5SGl0Qm94IiwiVXRpbCIsInJlcXVpcmUiLCJHYW1lIiwiaGVhbHRoIiwiZ2FtZW92ZXIiLCJnZXRDb250ZXh0IiwicGxheWVyMSIsIlBsYXllciIsImtleXMiLCJ0b3BMb29wIiwiYm90dG9tTG9vcCIsImJhY2tncm91bmQiLCJlbmVtaWVzIiwiZnBzSW50ZXJ2YWwiLCJzdGFydFRpbWUiLCJub3ciLCJ0aGVuIiwiZWxhcHNlZCIsImRyYXdJbWFnZSIsInBsYXllclNwcml0ZSIsImZyYW1lWCIsImZyYW1lWSIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZm9udCIsImZpbGxUZXh0IiwicmFuZG9tTnVtIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInJhbmRvbUVuZW15TnVtIiwicHVzaCIsImVuZW15TnVtIiwiY3VycmVudEVuZW15IiwiY29sbGlzaW9uIiwic3BsaWNlIiwiYmV0d2VlbiIsIndpbmRvdyIsImFsZXJ0IiwiY2xlYXJSZWN0IiwiZHJhd0JhY2tncm91bmQiLCJkcmF3RW5lbXkiLCJkcmF3UGxheWVyIiwiZHJhd0hlYWx0aCIsIm1vdmVQbGF5ZXIiLCJoYW5kbGVQbGF5ZXJGcmFtZSIsImdlbmVyYXRlRW5lbXkiLCJjaGVja0dhbWVvdmVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYW5pbWF0ZSIsImJpbmQiLCJnYW1lIiwic3BlZWQiLCJtb3ZpbmciLCJsZWZ0QXR0YWNrIiwicmlnaHRBdHRhY2siLCJyZWdpc3RlckV2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5IiwidyIsInMiLCJhIiwiZCIsInEiLCJtaW4iLCJtYXgiLCJ1bml0MXgiLCJ1bml0MXkiLCJ1bml0MXciLCJ1bml0MWgiLCJ1bml0MngiLCJ1bml0MnkiLCJ1bml0MnciLCJ1bml0MmgiLCJ1bml0MVhIaXRCb3giLCJ1bml0MVlIaXRCb3giLCJ1bml0MlhIaXRCb3giLCJ1bml0MllIaXRCb3giLCJ4Q29sbGlzaW9uIiwieUNvbGxpc2lvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hE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QUQsQ0FBM0QsS0FDQTdFLElBQUksQ0FBQ29DLE9BQUwsQ0FBYXVDLFlBQVksQ0FBQyxDQUFELENBQXpCLEVBQThCRSxZQUFZLENBQUMsQ0FBRCxDQUExQyxFQUErQ0EsWUFBWSxDQUFDLENBQUQsQ0FBM0QsQ0FESixFQUNxRTtBQUM3REUsZ0JBQVUsR0FBRyxJQUFiLENBRDZELENBRTdEO0FBQ0g7O0FBQ0wsUUFBSS9FLElBQUksQ0FBQ29DLE9BQUwsQ0FBYXdDLFlBQVksQ0FBQyxDQUFELENBQXpCLEVBQThCRSxZQUFZLENBQUMsQ0FBRCxDQUExQyxFQUErQ0EsWUFBWSxDQUFDLENBQUQsQ0FBM0QsS0FDQTlFLElBQUksQ0FBQ29DLE9BQUwsQ0FBYXdDLFlBQVksQ0FBQyxDQUFELENBQXpCLEVBQThCRSxZQUFZLENBQUMsQ0FBRCxDQUExQyxFQUErQ0EsWUFBWSxDQUFDLENBQUQsQ0FBM0QsQ0FESixFQUNxRTtBQUM3REUsZ0JBQVUsR0FBRyxJQUFiLENBRDZELENBRTdEO0FBQ0g7O0FBQ0wsUUFBS0QsVUFBVSxLQUFLLElBQWYsSUFBdUJDLFVBQVUsS0FBSyxJQUEzQyxFQUFrRDtBQUM5QztBQUNBcEQsYUFBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNBLGFBQU8sSUFBUDtBQUNILEtBSkQsTUFLSztBQUNELGFBQU8sS0FBUDtBQUNIO0FBQ0o7QUEvQlEsQ0FBYjtBQWlDQW9ELE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmxGLElBQWpCLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnXG5pbXBvcnQgR2FtZVZpZXcgZnJvbSAnLi9zY3JpcHRzL2dhbWVfdmlldyc7XG5cblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXMxXCIpO1xuY2FudmFzLndpZHRoID0gODQwO1xuY2FudmFzLmhlaWdodCA9IDY1MDtcbi8vIGNvbnN0IGdhbWUxID0gbmV3IEdhbWUoY2FudmFzKVxubmV3IEdhbWVWaWV3KGNhbnZhcykuc3RhcnQoKVxuXG4vLyBnYW1lMS5hbmltYXRlKCk7XG4vLyBnYW1lMS5zdGFydEFuaW1hdGluZyg0MCk7XG5cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZW15IHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGVuZW15VHlwZSkge1xuICAgICAgICAvLyB0aGlzLnggPSAwOyAgICAgICAvLyBUT0RPIFdpbGwgY2hhbmdlIGJhc2VkIG9uIHRoZSBhcmcgcGFzc2VkIGludG8gY29uc3RydWN0b3JcbiAgICAgICAgLy8gdGhpcy55ID0gMDtcbiAgICAgICAgdGhpcy53aWR0aCA9IDI0MztcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA0ODA7XG4gICAgICAgIHRoaXMuaGl0Ym94V2lkdGggPSA5MDtcbiAgICAgICAgdGhpcy5oaXRib3hIZWlnaHQgPSAxNTA7XG4gICAgICAgIHRoaXMudHlwZSA9IGVuZW15VHlwZSAvLyBUT0RPIFdpbGwgY2hhbmdlIGJhc2VkIG9uIGEgdGhlIGFyZ3VtZW50IHBhc3NlZCBpbnRvIGNvbnN0cnVjdG9yXG4gICAgICAgIHRoaXMuZW5lbXlTcHJpdGUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJzdHVwaWRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW15U3ByaXRlLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL2NhcjEucG5nXCJcbiAgICAgICAgICAgICAgICB0aGlzLnggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNTUwIC0gMTIwKSArIDEyMClcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSAtMTAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImNyYXp5XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVteVNwcml0ZS5zcmMgPSBcIi4vc3JjL2ltYWdlcy9jYXIyLnBuZ1wiXG4gICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDU1MCAtIDEyMCkgKyAxMjApXG4gICAgICAgICAgICAgICAgdGhpcy55ID0gNjUwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIHRoaXMueEhpdEJveCA9IFt0aGlzLngsIHRoaXMueCArIHRoaXMuaGl0Ym94V2lkdGhdO1xuICAgICAgICB0aGlzLnlIaXRCb3ggPSBbdGhpcy55LCB0aGlzLnkgKyB0aGlzLmhpdGJveEhlaWdodF07XG4gICAgfVxuXG59IiwiaW1wb3J0IEVuZW15IGZyb20gXCIuL2VuZW15XCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuY29uc3QgVXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICAgICAgdGhpcy5oZWFsdGggPSAxMDAwO1xuICAgICAgICB0aGlzLmdhbWVvdmVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIxID0gbmV3IFBsYXllcigpO1xuICAgICAgICB0aGlzLndpZHRoID0gY2FudmFzLndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMua2V5cyA9IFtdO1xuICAgICAgICB0aGlzLnRvcExvb3AgPSAtY2FudmFzLmhlaWdodDtcbiAgICAgICAgdGhpcy5ib3R0b21Mb29wID0gMDtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gbmV3IEltYWdlKClcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL2JhY2tncm91bmQtMS5wbmdcIjtcbiAgICAgICAgdGhpcy5lbmVtaWVzID0gW107IC8vIGNvbnRhaW5zIGVuZW1pZXMgY3VycmVudGx5IG9uIHNjcmVlbiwgc2hvd24gYXMgZW5lbXkudHlwZVxuICAgICAgICB0aGlzLmZwc0ludGVydmFsO1xuICAgICAgICB0aGlzLnN0YXJ0VGltZTtcbiAgICAgICAgdGhpcy5ub3c7XG4gICAgICAgIHRoaXMudGhlbjtcbiAgICAgICAgdGhpcy5lbGFwc2VkO1xuICAgIH1cblxuICAgIGRyYXdCYWNrZ3JvdW5kKCkge1xuICAgICAgICAvL2JvdHRvbSBoYWxmIG9mIHRoZSBiYWNrZ3JvdW5kXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZCwgMCwgMCxcbiAgICAgICAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LFxuICAgICAgICAgICAgMCwgdGhpcy5ib3R0b21Mb29wLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodFxuICAgICAgICApXG4gICAgICAgIHRoaXMuYm90dG9tTG9vcCArPSAxMDtcbiAgICAgICAgaWYgKHRoaXMuYm90dG9tTG9vcCA9PT0gdGhpcy5oZWlnaHQpIHRoaXMuYm90dG9tTG9vcCA9IC10aGlzLmhlaWdodDtcbiAgICAgICAgLy90b3AgaGFsZiBvZiB0aGUgYmFja2dyb3VuZFxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmQsIDAsIDAsXG4gICAgICAgICAgICB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCxcbiAgICAgICAgICAgIDAsIHRoaXMudG9wTG9vcCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHRcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnRvcExvb3AgKz0gMTA7XG4gICAgICAgIGlmICh0aGlzLnRvcExvb3AgPT09IHRoaXMuaGVpZ2h0KSB0aGlzLnRvcExvb3AgPSAtdGhpcy5oZWlnaHQ7XG4gICAgfVxuXG4gICAgZHJhd1BsYXllcigpIHtcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIxLnBsYXllclNwcml0ZSwgdGhpcy5wbGF5ZXIxLndpZHRoICogdGhpcy5wbGF5ZXIxLmZyYW1lWCwgdGhpcy5wbGF5ZXIxLmhlaWdodCAqIHRoaXMucGxheWVyMS5mcmFtZVksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2hlcmUgd2UgY3JvcCBvdXQgdGhlIGltYWdlIGZvciBzcHJpdGVcbiAgICAgICAgICAgIHRoaXMucGxheWVyMS53aWR0aCwgdGhpcy5wbGF5ZXIxLmhlaWdodCwgdGhpcy5wbGF5ZXIxLngsIHRoaXMucGxheWVyMS55LCAgICAvLyB3aGVyZSB0aGUgaW1hZ2Ugd2lsbCBiZSBhbmltYXRlZCBvbiBjYW52YXNcbiAgICAgICAgICAgIHRoaXMucGxheWVyMS53aWR0aCwgdGhpcy5wbGF5ZXIxLmhlaWdodFxuICAgICAgICApO1xuICAgIH1cblxuICAgIGRyYXdIZWFsdGgoaGVhbHRoKSB7XG4gICAgICAgIC8vIGluaXRpYWwgaGVhbHRoXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmVkXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMTAsIDMwLCAyNTAsIDEwKVxuXG4gICAgICAgIC8vIHlvdXIgYWN0dWFsIGhlYWx0aFxuICAgICAgICBpZiAoaGVhbHRoIDwgKDcwMCkpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwieWVsbG93XCJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDEwLCAzMCwgaGVhbHRoIC8gNCwgMTApXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImdyZWVuXCJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDEwLCAzMCwgaGVhbHRoIC8gNCwgMTApXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIHRleHRcbiAgICBcbiAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiNDBweCBBUkNBREVDTEFTU0lDXCJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCggXCJIUFwiLCAxMCwgMjcpXG5cbiAgICAgICAgaWYgKGhlYWx0aCA8IDEwMCl7XG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCI0MHB4IEFSQ0FERUNMQVNTSUNcIlxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGAke2hlYWx0aH0vIDEwMDBgLCA4MCwgMjcpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaGVhbHRoIDwgNzAwKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCI0MHB4IEFSQ0FERUNMQVNTSUNcIlxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ5ZWxsb3dcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGAke2hlYWx0aH0vIDEwMDBgLCA4MCwgMjcpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCI0MHB4IEFSQ0FERUNMQVNTSUNcIlxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoYCR7aGVhbHRofS8gMTAwMGAsIDgwLCAyNylcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgIH1cblxuICAgIGdlbmVyYXRlRW5lbXkoKSB7XG4gICAgICAgIC8vIGxvZ2ljIGZvciB3aGVuIHRvIGdlbmVyYXRlIGFuIGVuZW15LiAgd2lsbCBwdXNoIGludG8gdGhpcy5lbmVtaWVzXG4gICAgICAgIGNvbnN0IHJhbmRvbU51bSA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiA4MCkpO1xuICAgICAgICBpZiAodGhpcy5lbmVtaWVzLmxlbmd0aCA8IDQgJiYgcmFuZG9tTnVtID09PSA1KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImdlbmVyYXRpbmcgZW5lbXlcIilcblxuICAgICAgICAgICAgLy8gbGV0IHNwYXduTG9jYXRpb24gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNTUwIC0gMTIwKSArIDEyMCk7ICAgVE9ETyBtYWtlIHNvIGVuZW1pZXMgZG8gbm90IHNwYXduIG9uIHRvcCBvZiBlYWNoIG90aGVyXG4gICAgICAgICAgICAvLyBsZXQgY2hlY2tTYWZlR2VuZXJhdGUgPSB0cnVlO1xuICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVuZW1pZXM7IGkrKykge1xuICAgICAgICAgICAgLy8gICAgIGxldCBlbmVteSA9IHRoaXMuZW5lbWllc1tpXTtcbiAgICAgICAgICAgIC8vICAgICBpZiAoZW5lbXkuaGl0Ym94V2lkKVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCByYW5kb21FbmVteU51bSA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAxMDApKVxuICAgICAgICAgICAgbGV0IGVuZW15VHlwZVxuICAgICAgICAgICAgaWYgKHJhbmRvbUVuZW15TnVtID49IDQwKSB7XG4gICAgICAgICAgICAgICAgZW5lbXlUeXBlID0gXCJzdHVwaWRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZW5lbXlUeXBlID0gXCJjcmF6eVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlbmVteVR5cGUpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbmVteVR5cGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW1pZXMucHVzaChuZXcgRW5lbXkodGhpcy5jdHgsIGVuZW15VHlwZSkpOyAgIC8vIFRPRE86IHJhbmRvbWx5IGNob29zZSB0aGUgdHlwZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd0VuZW15KGVuZW15TnVtKSB7XG4gICAgICAgIGxldCBjdXJyZW50RW5lbXkgPSB0aGlzLmVuZW1pZXNbZW5lbXlOdW1dO1xuICAgICAgICBpZiAoY3VycmVudEVuZW15LnR5cGUgPT09IFwic3R1cGlkXCIpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkuZW5lbXlTcHJpdGUsIDAsIDAsXG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LndpZHRoLCBjdXJyZW50RW5lbXkuaGVpZ2h0LCBjdXJyZW50RW5lbXkueCAsIGN1cnJlbnRFbmVteS55LFxuICAgICAgICAgICAgICAgIDkwLCAxNTBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjdXJyZW50RW5lbXkueSArPSAzO1xuICAgICAgICAgICAgaWYgKFV0aWwuY29sbGlzaW9uKHRoaXMucGxheWVyMS54ICsgNjcsIHRoaXMucGxheWVyMS55LCA2MCwgdGhpcy5wbGF5ZXIxLmhlaWdodCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnksIGN1cnJlbnRFbmVteS5oaXRib3hXaWR0aCwgY3VycmVudEVuZW15LmhpdGJveEhlaWdodCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFsdGggLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5oZWFsdGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudEVuZW15LnkgPiB0aGlzLmhlaWdodCAmJiBjdXJyZW50RW5lbXkudHlwZSA9PT1cInN0dXBpZFwiKSB7XG4gICAgICAgICAgICB0aGlzLmVuZW1pZXMuc3BsaWNlKGVuZW15TnVtLCAxKVxuICAgICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50RW5lbXkudHlwZSA9PT0gXCJjcmF6eVwiKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LmVuZW15U3ByaXRlLCAwLCAwLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS53aWR0aCwgY3VycmVudEVuZW15LmhlaWdodCwgY3VycmVudEVuZW15LngsIGN1cnJlbnRFbmVteS55LFxuICAgICAgICAgICAgICAgIDkwLCAxNTBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIxLnggKyAyMCAgPiBjdXJyZW50RW5lbXkueCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS54ICs9IDQ7XG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LnkgLT0gNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKFV0aWwuYmV0d2Vlbih0aGlzLnBsYXllcjEueCArIDIwLCBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnggKyAyMCkpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueSAtPSAxMjtcbiAgICAgICAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LnggLT0gNDtcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueSAtPSA2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFV0aWwuY29sbGlzaW9uKHRoaXMucGxheWVyMS54ICsgNjcsIHRoaXMucGxheWVyMS55LCA2MCwgdGhpcy5wbGF5ZXIxLmhlaWdodCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnksIGN1cnJlbnRFbmVteS5oaXRib3hXaWR0aCwgY3VycmVudEVuZW15LmhpdGJveEhlaWdodCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFsdGggLT0gNTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5oZWFsdGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudEVuZW15LnkgPCAtMTUwICYmIGN1cnJlbnRFbmVteS50eXBlID09PSBcImNyYXp5XCIpIHtcbiAgICAgICAgICAgIHRoaXMuZW5lbWllcy5zcGxpY2UoZW5lbXlOdW0sIDEpXG4gICAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICB9XG4gICAgfVxuICAgIGNoZWNrR2FtZW92ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmhlYWx0aCA8PSAwKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJnYW1lb3ZlclwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhbmltYXRlKCkge1xuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgICAgIHRoaXMuZHJhd0JhY2tncm91bmQoKTtcbiAgICAgICAgaWYgKHRoaXMuZW5lbWllc1swXSkge1xuICAgICAgICAgICAgdGhpcy5kcmF3RW5lbXkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZW5lbWllc1sxXSkge1xuICAgICAgICAgICAgdGhpcy5kcmF3RW5lbXkoMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZW5lbWllc1syXSkge1xuICAgICAgICAgICAgdGhpcy5kcmF3RW5lbXkoMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZW5lbWllc1szXSkge1xuICAgICAgICAgICAgdGhpcy5kcmF3RW5lbXkoMyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZW5lbWllc1s0XSkge1xuICAgICAgICAgICAgdGhpcy5kcmF3RW5lbXkoNCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcmF3UGxheWVyKCk7XG4gICAgICAgIHRoaXMuZHJhd0hlYWx0aCh0aGlzLmhlYWx0aCk7XG4gICAgICAgIHRoaXMucGxheWVyMS5tb3ZlUGxheWVyKCk7XG4gICAgICAgIHRoaXMucGxheWVyMS5oYW5kbGVQbGF5ZXJGcmFtZSgpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlRW5lbXkoKTtcbiAgICAgICAgdGhpcy5jaGVja0dhbWVvdmVyKCk7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgLy8gc3RhcnRBbmltYXRpbmcoZnBzKSB7XG4gICAgLy8gICAgIHRoaXMuZnBzSW50ZXJ2YWwgPSAxMDAwIC8gZnBzO1xuICAgIC8vICAgICB0aGlzLnRoZW4gPSBEYXRlLm5vdygpO1xuICAgIC8vICAgICB0aGlzLnN0YXJ0VGltZSA9IHRoaXMudGhlbjtcbiAgICAvLyAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgLy8gfVxuICAgIC8vIGFuaW1hdGUoKSB7XG4gICAgLy8gICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgLy8gICAgIHRoaXMubm93ID0gRGF0ZS5ub3coKTtcbiAgICAvLyAgICAgdGhpcy5lbGFwc2VkID0gdGhpcy5ub3cgLSB0aGlzLnRoZW47XG4gICAgLy8gICAgIGlmICh0aGlzLmVsYXBzZWQgPiB0aGlzLmZwc0ludGVydmFsKSB7XG4gICAgLy8gICAgICAgICB0aGlzLnRoZW4gPSB0aGlzLm5vdyAtICh0aGlzLmVsYXBzZWQgJSB0aGlzLmZwc0ludGVydmFsKTtcbiAgICAvLyAgICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICAvLyAgICAgICAgIHRoaXMuZHJhd0JhY2tncm91bmQoKTtcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLmVuZW1pZXNbMF0pIHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmRyYXdFbmVteSgwKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIGlmICh0aGlzLmVuZW1pZXNbMV0pIHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmRyYXdFbmVteSgxKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIGlmICh0aGlzLmVuZW1pZXNbMl0pIHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmRyYXdFbmVteSgyKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIGlmICh0aGlzLmVuZW1pZXNbM10pIHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmRyYXdFbmVteSgzKTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIGlmICh0aGlzLmVuZW1pZXNbNF0pIHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmRyYXdFbmVteSg0KTtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIHRoaXMuZHJhd1BsYXllcigpO1xuICAgIC8vICAgICAgICAgdGhpcy5wbGF5ZXIxLm1vdmVQbGF5ZXIoKTtcbiAgICAvLyAgICAgICAgIHRoaXMucGxheWVyMS5oYW5kbGVQbGF5ZXJGcmFtZSgpO1xuICAgIC8vICAgICAgICAgdGhpcy5nZW5lcmF0ZUVuZW15KCk7XG4gICAgLy8gICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxufVxuXG4iLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gbmV3IEdhbWUoY2FudmFzKVxuICAgICAgICAvLyB0aGlzLmhlYWx0aCA9IDEwMDA7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5nYW1lLmFuaW1hdGUoKTtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZS5nYW1lb3ZlciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgLy8gZG8gc29tZXRoaW5nIHdoZW4gdGhlIGdhbWUgaXMgb3ZlclxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gY2hlY2tHYW1lb3ZlcigpIHtcbiAgICAvLyAgICAgaWYgKHRoaXMuaGVhbHRoID09PSAwKSB7XG4gICAgLy8gICAgICAgICB0aGlzLmdhbWVvdmVyID0gdHJ1ZTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnggPSAzMDA7XG4gICAgICAgIHRoaXMueSA9IDIwMDtcbiAgICAgICAgdGhpcy53aWR0aCA9IDE4NjtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxMzA7XG4gICAgICAgIHRoaXMueEhpdEJveCA9IFt0aGlzLngsIHRoaXMueCArIHRoaXMud2lkdGhdO1xuICAgICAgICB0aGlzLnlIaXRCb3ggPSBbdGhpcy55LCB0aGlzLnkgK3RoaXMuaGVpZ2h0XTtcbiAgICAgICAgdGhpcy5mcmFtZVggPSAwO1xuICAgICAgICB0aGlzLmZyYW1lWSA9IDA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAxMDtcbiAgICAgICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5sZWZ0QXR0YWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmlnaHRBdHRhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUuc3JjID0gXCIuL3NyYy9pbWFnZXMvYmlrZTEucG5nXCI7XG4gICAgICAgIHRoaXMua2V5cyA9IFtdO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJFdmVudHMoKSB7XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5rZXlzW2Uua2V5XSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm1vdmluZyA9IHRydWU7XG4gICAgICAgIH0pXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmtleXNbZS5rZXldO1xuICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubGVmdEF0dGFjayA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5yaWdodEF0dGFjayA9IGZhbHNlO1xuICAgICAgICB9KVxuXG5cbiAgICB9XG4gXG4gICAgXG4gICAgbW92ZVBsYXllcigpIHtcbiAgICAgICAgaWYgKHRoaXMua2V5cy53ICYmIHRoaXMueSA+IDApIHsgICAgICAgICAvLyBtb3ZpbmcgdXBcbiAgICAgICAgICAgIHRoaXMueSAtPSB0aGlzLnNwZWVkOyAgICAgICAgICAgLy8gaW5jcmVhc2Ugb3VyIHBsYXlzZXIncyB5IHBvcyBieSBzcGVlZFxuICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmtleXMucyAmJiB0aGlzLnkgPCA1NTApIHsgICAgLy8gbW92aW5nIGRvd25cbiAgICAgICAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmtleXMuYSAmJiB0aGlzLnggPiA4MCkge1xuICAgICAgICAgICAgICAgIHRoaXMueCAtPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5rZXlzLmQgJiYgdGhpcy54IDwgNTgwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmtleXMucSkge1xuICAgICAgICAgICAgdGhpcy5mcmFtZVggPSAwO1xuICAgICAgICAgICAgdGhpcy5mcmFtZVkgPSAyO1xuICAgICAgICAgICAgdGhpcy5sZWZ0QXR0YWNrID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5rZXlzLmUpIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVYID0gMDtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVZID0gMTtcbiAgICAgICAgICAgIHRoaXMucmlnaHRBdHRhY2sgPSB0cnVlO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVQbGF5ZXJGcmFtZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVYIDwgMSAmJiB0aGlzLm1vdmluZykge1xuICAgICAgICAgICAgdGhpcy5mcmFtZVgrK1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJtb3ZpbmdcIilcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMucmlnaHRBdHRhY2sgJiYgdGhpcy5mcmFtZVkgPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVZID0gMDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUiBBVFRBQ0tcIilcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMubGVmdEF0dGFjayAmJiB0aGlzLmZyYW1lWSA9PT0gMikge1xuICAgICAgICAgICAgdGhpcy5mcmFtZVkgPSAwO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMIEFUVEFDS1wiKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mcmFtZVggPSAwXG4gICAgICAgIH1cbiAgICB9XG5cblxufSIsImNvbnN0IFV0aWwgPSB7XG5cbiAgICBiZXR3ZWVuKHgsIG1pbiwgbWF4KSB7XG4gICAgICAgIHJldHVybiB4ID49IG1pbiAmJiB4IDw9IG1heDtcbiAgICB9LFxuICAgIGNvbGxpc2lvbih1bml0MXgsIHVuaXQxeSwgdW5pdDF3LCB1bml0MWgsIHVuaXQyeCwgdW5pdDJ5LCB1bml0MncsIHVuaXQyaCkge1xuICAgICAgICBsZXQgdW5pdDFYSGl0Qm94ID0gW3VuaXQxeCwgdW5pdDF4ICsgdW5pdDF3XTtcbiAgICAgICAgbGV0IHVuaXQxWUhpdEJveCA9IFt1bml0MXksIHVuaXQxeSArIHVuaXQxaF07XG4gICAgICAgIGxldCB1bml0MlhIaXRCb3ggPSBbdW5pdDJ4LCB1bml0MnggKyB1bml0MnddO1xuICAgICAgICBsZXQgdW5pdDJZSGl0Qm94ID0gW3VuaXQyeSwgdW5pdDJ5ICsgdW5pdDJoXTtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgbGV0IHhDb2xsaXNpb24gPSBmYWxzZTtcbiAgICAgICAgbGV0IHlDb2xsaXNpb24gPSBmYWxzZTtcbiAgICAgICAgaWYgKFV0aWwuYmV0d2Vlbih1bml0MVhIaXRCb3hbMF0sIHVuaXQyWEhpdEJveFswXSwgdW5pdDJYSGl0Qm94WzFdKSB8fFxuICAgICAgICAgICAgVXRpbC5iZXR3ZWVuKHVuaXQxWEhpdEJveFsxXSwgdW5pdDJYSGl0Qm94WzBdLCB1bml0MlhIaXRCb3hbMV0pKSB7XG4gICAgICAgICAgICAgICAgeENvbGxpc2lvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJDT0xMSVNJT05YXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIGlmIChVdGlsLmJldHdlZW4odW5pdDFZSGl0Qm94WzBdLCB1bml0MllIaXRCb3hbMF0sIHVuaXQyWUhpdEJveFsxXSkgfHxcbiAgICAgICAgICAgIFV0aWwuYmV0d2Vlbih1bml0MVlIaXRCb3hbMV0sIHVuaXQyWUhpdEJveFswXSwgdW5pdDJZSGl0Qm94WzFdKSkge1xuICAgICAgICAgICAgICAgIHlDb2xsaXNpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQ09MTElTSU9OWVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICBpZiAoKHhDb2xsaXNpb24gPT09IHRydWUgJiYgeUNvbGxpc2lvbiA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNPTExJU0lPTlwiKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IFV0aWwiXSwic291cmNlUm9vdCI6IiJ9