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
canvas.width = 840;
canvas.height = 650;
var game1 = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__["default"](canvas);
game1.animate(); // game1.startAnimating(40);

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
        Util.collision(this.player1.x + 67, this.player1.y, 60, this.player1.height, currentEnemy.x, currentEnemy.y, currentEnemy.hitboxWidth, currentEnemy.hitboxHeight);
      }

      if (currentEnemy.y > this.height && currentEnemy.type === "stupid") {
        this.enemies.splice(enemyNum, 1); // debugger
      }

      if (currentEnemy.type === "crazy") {
        this.ctx.drawImage(currentEnemy.enemySprite, 0, 0, currentEnemy.width, currentEnemy.height, currentEnemy.x, currentEnemy.y, 90, 150);
        currentEnemy.y -= 6;

        if (this.player1.x + 20 > currentEnemy.x) {
          currentEnemy.x += 4;
        } else {
          currentEnemy.x -= 4;
        }

        Util.collision(this.player1.x + 67, this.player1.y, 60, this.player1.height, currentEnemy.x, currentEnemy.y, currentEnemy.hitboxWidth, currentEnemy.hitboxHeight);
      }

      if (currentEnemy.y < -150 && currentEnemy.type === "crazy") {
        this.enemies.splice(enemyNum, 1); // debugger
      }
    }
  }, {
    key: "animate",
    value: function animate() {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.drawBackground();

      if (this.enemies[0]) {
        // Util.collision(this.player1.x + 67, this.player1.y, 60, this.player1.height,
        //     this.enemies[0].x, this.enemies[0].y, this.enemies[0].hitboxWidth, this.enemies[0].hitboxHeight);
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
      this.player1.movePlayer();
      this.player1.handlePlayerFrame();
      this.generateEnemy();
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
      debugger;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VuZW15LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3V0aWwuanMiXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwiaGVpZ2h0IiwiZ2FtZTEiLCJHYW1lIiwiYW5pbWF0ZSIsIkVuZW15IiwiY3R4IiwiZW5lbXlUeXBlIiwiaGl0Ym94V2lkdGgiLCJoaXRib3hIZWlnaHQiLCJ0eXBlIiwiZW5lbXlTcHJpdGUiLCJJbWFnZSIsInNyYyIsIngiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ5IiwieEhpdEJveCIsInlIaXRCb3giLCJVdGlsIiwicmVxdWlyZSIsImdldENvbnRleHQiLCJwbGF5ZXIxIiwiUGxheWVyIiwia2V5cyIsInRvcExvb3AiLCJib3R0b21Mb29wIiwiYmFja2dyb3VuZCIsImVuZW1pZXMiLCJmcHNJbnRlcnZhbCIsInN0YXJ0VGltZSIsIm5vdyIsInRoZW4iLCJlbGFwc2VkIiwiZHJhd0ltYWdlIiwicGxheWVyU3ByaXRlIiwiZnJhbWVYIiwiZnJhbWVZIiwicmFuZG9tTnVtIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInJhbmRvbUVuZW15TnVtIiwicHVzaCIsImVuZW15TnVtIiwiY3VycmVudEVuZW15IiwiY29sbGlzaW9uIiwic3BsaWNlIiwiY2xlYXJSZWN0IiwiZHJhd0JhY2tncm91bmQiLCJkcmF3RW5lbXkiLCJkcmF3UGxheWVyIiwibW92ZVBsYXllciIsImhhbmRsZVBsYXllckZyYW1lIiwiZ2VuZXJhdGVFbmVteSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJpbmQiLCJzcGVlZCIsIm1vdmluZyIsImxlZnRBdHRhY2siLCJyaWdodEF0dGFjayIsInJlZ2lzdGVyRXZlbnRzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJrZXkiLCJ3IiwicyIsImEiLCJkIiwicSIsImJldHdlZW4iLCJtaW4iLCJtYXgiLCJ1bml0MXgiLCJ1bml0MXkiLCJ1bml0MXciLCJ1bml0MWgiLCJ1bml0MngiLCJ1bml0MnkiLCJ1bml0MnciLCJ1bml0MmgiLCJ1bml0MVhIaXRCb3giLCJ1bml0MVlIaXRCb3giLCJ1bml0MlhIaXRCb3giLCJ1bml0MllIaXRCb3giLCJ4Q29sbGlzaW9uIiwieUNvbGxpc2lvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBR0EsSUFBTUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBZjtBQUNBRixNQUFNLENB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QUFHLElBQWIsQ0FENkQsQ0FFN0Q7QUFDSDs7QUFDTCxRQUFLRCxVQUFVLEtBQUssSUFBZixJQUF1QkMsVUFBVSxLQUFLLElBQTNDLEVBQWtEO0FBQzlDO0FBQ0EvQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaO0FBQ0EsYUFBTyxJQUFQO0FBQ0gsS0FKRCxNQUtLO0FBQ0QsYUFBTyxLQUFQO0FBQ0g7QUFDSjtBQS9CUSxDQUFiO0FBaUNBK0MsTUFBTSxDQUFDQyxPQUFQLEdBQWlCdEUsSUFBakIsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgR2FtZSBmcm9tICcuL3NjcmlwdHMvZ2FtZSdcblxuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhczFcIik7XG5jYW52YXMud2lkdGggPSA4NDA7XG5jYW52YXMuaGVpZ2h0ID0gNjUwO1xuY29uc3QgZ2FtZTEgPSBuZXcgR2FtZShjYW52YXMpXG5cblxuZ2FtZTEuYW5pbWF0ZSgpO1xuLy8gZ2FtZTEuc3RhcnRBbmltYXRpbmcoNDApOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZW15IHtcbiAgICBjb25zdHJ1Y3RvcihjdHgsIGVuZW15VHlwZSkge1xuICAgICAgICAvLyB0aGlzLnggPSAwOyAgICAgICAvLyBUT0RPIFdpbGwgY2hhbmdlIGJhc2VkIG9uIHRoZSBhcmcgcGFzc2VkIGludG8gY29uc3RydWN0b3JcbiAgICAgICAgLy8gdGhpcy55ID0gMDtcbiAgICAgICAgdGhpcy53aWR0aCA9IDI0MztcbiAgICAgICAgdGhpcy5oZWlnaHQgPSA0ODA7XG4gICAgICAgIHRoaXMuaGl0Ym94V2lkdGggPSA5MDtcbiAgICAgICAgdGhpcy5oaXRib3hIZWlnaHQgPSAxNTA7XG4gICAgICAgIHRoaXMudHlwZSA9IGVuZW15VHlwZSAvLyBUT0RPIFdpbGwgY2hhbmdlIGJhc2VkIG9uIGEgdGhlIGFyZ3VtZW50IHBhc3NlZCBpbnRvIGNvbnN0cnVjdG9yXG4gICAgICAgIHRoaXMuZW5lbXlTcHJpdGUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJzdHVwaWRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW15U3ByaXRlLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL2NhcjEucG5nXCJcbiAgICAgICAgICAgICAgICB0aGlzLnggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNTUwIC0gMTIwKSArIDEyMClcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSAtMTAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImNyYXp5XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVteVNwcml0ZS5zcmMgPSBcIi4vc3JjL2ltYWdlcy9jYXIyLnBuZ1wiXG4gICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDU1MCAtIDEyMCkgKyAxMjApXG4gICAgICAgICAgICAgICAgdGhpcy55ID0gNjUwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIHRoaXMueEhpdEJveCA9IFt0aGlzLngsIHRoaXMueCArIHRoaXMuaGl0Ym94V2lkdGhdO1xuICAgICAgICB0aGlzLnlIaXRCb3ggPSBbdGhpcy55LCB0aGlzLnkgKyB0aGlzLmhpdGJveEhlaWdodF07XG4gICAgfVxuXG59IiwiaW1wb3J0IEVuZW15IGZyb20gXCIuL2VuZW15XCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuY29uc3QgVXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLnBsYXllcjEgPSBuZXcgUGxheWVyKCk7XG4gICAgICAgIHRoaXMud2lkdGggPSBjYW52YXMud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcbiAgICAgICAgdGhpcy5rZXlzID0gW107XG4gICAgICAgIHRoaXMudG9wTG9vcCA9IC1jYW52YXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmJvdHRvbUxvb3AgPSAwO1xuICAgICAgICB0aGlzLmJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKVxuICAgICAgICB0aGlzLmJhY2tncm91bmQuc3JjID0gXCIuL3NyYy9pbWFnZXMvYmFja2dyb3VuZC0xLnBuZ1wiO1xuICAgICAgICB0aGlzLmVuZW1pZXMgPSBbXTsgLy8gY29udGFpbnMgZW5lbWllcyBjdXJyZW50bHkgb24gc2NyZWVuLCBzaG93biBhcyBlbmVteS50eXBlXG4gICAgICAgIHRoaXMuZnBzSW50ZXJ2YWw7XG4gICAgICAgIHRoaXMuc3RhcnRUaW1lO1xuICAgICAgICB0aGlzLm5vdztcbiAgICAgICAgdGhpcy50aGVuO1xuICAgICAgICB0aGlzLmVsYXBzZWQ7XG5cbiAgICB9XG5cbiAgICBkcmF3QmFja2dyb3VuZCgpIHtcbiAgICAgICAgLy9ib3R0b20gaGFsZiBvZiB0aGUgYmFja2dyb3VuZFxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmQsIDAsIDAsXG4gICAgICAgICAgICB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCxcbiAgICAgICAgICAgIDAsIHRoaXMuYm90dG9tTG9vcCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHRcbiAgICAgICAgKVxuICAgICAgICB0aGlzLmJvdHRvbUxvb3AgKz0gMTA7XG4gICAgICAgIGlmICh0aGlzLmJvdHRvbUxvb3AgPT09IHRoaXMuaGVpZ2h0KSB0aGlzLmJvdHRvbUxvb3AgPSAtdGhpcy5oZWlnaHQ7XG4gICAgICAgIC8vdG9wIGhhbGYgb2YgdGhlIGJhY2tncm91bmRcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLCAwLCAwLFxuICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICAwLCB0aGlzLnRvcExvb3AsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0XG4gICAgICAgIClcbiAgICAgICAgdGhpcy50b3BMb29wICs9IDEwO1xuICAgICAgICBpZiAodGhpcy50b3BMb29wID09PSB0aGlzLmhlaWdodCkgdGhpcy50b3BMb29wID0gLXRoaXMuaGVpZ2h0O1xuICAgIH1cblxuICAgIGRyYXdQbGF5ZXIoKSB7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIHRoaXMucGxheWVyMS5wbGF5ZXJTcHJpdGUsIHRoaXMucGxheWVyMS53aWR0aCAqIHRoaXMucGxheWVyMS5mcmFtZVgsIHRoaXMucGxheWVyMS5oZWlnaHQgKiB0aGlzLnBsYXllcjEuZnJhbWVZLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdoZXJlIHdlIGNyb3Agb3V0IHRoZSBpbWFnZSBmb3Igc3ByaXRlXG4gICAgICAgICAgICB0aGlzLnBsYXllcjEud2lkdGgsIHRoaXMucGxheWVyMS5oZWlnaHQsIHRoaXMucGxheWVyMS54LCB0aGlzLnBsYXllcjEueSwgICAgLy8gd2hlcmUgdGhlIGltYWdlIHdpbGwgYmUgYW5pbWF0ZWQgb24gY2FudmFzXG4gICAgICAgICAgICB0aGlzLnBsYXllcjEud2lkdGgsIHRoaXMucGxheWVyMS5oZWlnaHRcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUVuZW15KCkge1xuICAgICAgICAvLyBsb2dpYyBmb3Igd2hlbiB0byBnZW5lcmF0ZSBhbiBlbmVteS4gIHdpbGwgcHVzaCBpbnRvIHRoaXMuZW5lbWllc1xuICAgICAgICBjb25zdCByYW5kb21OdW0gPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogODApKTtcbiAgICAgICAgaWYgKHRoaXMuZW5lbWllcy5sZW5ndGggPCA0ICYmIHJhbmRvbU51bSA9PT0gNSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZW5lcmF0aW5nIGVuZW15XCIpXG5cbiAgICAgICAgICAgIC8vIGxldCBzcGF3bkxvY2F0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDU1MCAtIDEyMCkgKyAxMjApOyAgIFRPRE8gbWFrZSBzbyBlbmVtaWVzIGRvIG5vdCBzcGF3biBvbiB0b3Agb2YgZWFjaCBvdGhlclxuICAgICAgICAgICAgLy8gbGV0IGNoZWNrU2FmZUdlbmVyYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lbmVtaWVzOyBpKyspIHtcbiAgICAgICAgICAgIC8vICAgICBsZXQgZW5lbXkgPSB0aGlzLmVuZW1pZXNbaV07XG4gICAgICAgICAgICAvLyAgICAgaWYgKGVuZW15LmhpdGJveFdpZClcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgcmFuZG9tRW5lbXlOdW0gPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTAwKSlcbiAgICAgICAgICAgIGxldCBlbmVteVR5cGVcbiAgICAgICAgICAgIGlmIChyYW5kb21FbmVteU51bSA+PSA0MCkge1xuICAgICAgICAgICAgICAgIGVuZW15VHlwZSA9IFwic3R1cGlkXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVuZW15VHlwZSA9IFwiY3JhenlcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coZW5lbXlUeXBlKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZW5lbXlUeXBlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnB1c2gobmV3IEVuZW15KHRoaXMuY3R4LCBlbmVteVR5cGUpKTsgICAvLyBUT0RPOiByYW5kb21seSBjaG9vc2UgdGhlIHR5cGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdFbmVteShlbmVteU51bSkge1xuICAgICAgICBsZXQgY3VycmVudEVuZW15ID0gdGhpcy5lbmVtaWVzW2VuZW15TnVtXTtcbiAgICAgICAgaWYgKGN1cnJlbnRFbmVteS50eXBlID09PSBcInN0dXBpZFwiKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LmVuZW15U3ByaXRlLCAwLCAwLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS53aWR0aCwgY3VycmVudEVuZW15LmhlaWdodCwgY3VycmVudEVuZW15LnggLCBjdXJyZW50RW5lbXkueSxcbiAgICAgICAgICAgICAgICA5MCwgMTUwXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY3VycmVudEVuZW15LnkgKz0gMztcbiAgICAgICAgICAgIFV0aWwuY29sbGlzaW9uKHRoaXMucGxheWVyMS54ICsgNjcsIHRoaXMucGxheWVyMS55LCA2MCwgdGhpcy5wbGF5ZXIxLmhlaWdodCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnksIGN1cnJlbnRFbmVteS5oaXRib3hXaWR0aCwgY3VycmVudEVuZW15LmhpdGJveEhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnJlbnRFbmVteS55ID4gdGhpcy5oZWlnaHQgJiYgY3VycmVudEVuZW15LnR5cGUgPT09XCJzdHVwaWRcIikge1xuICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnNwbGljZShlbmVteU51bSwgMSlcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudEVuZW15LnR5cGUgPT09IFwiY3JhenlcIikge1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS5lbmVteVNwcml0ZSwgMCwgMCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkud2lkdGgsIGN1cnJlbnRFbmVteS5oZWlnaHQsIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSxcbiAgICAgICAgICAgICAgICA5MCwgMTUwXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGN1cnJlbnRFbmVteS55IC09IDY7XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIxLnggKyAyMCAgPiBjdXJyZW50RW5lbXkueCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS54ICs9IDQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueCAtPSA0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgVXRpbC5jb2xsaXNpb24odGhpcy5wbGF5ZXIxLnggKyA2NywgdGhpcy5wbGF5ZXIxLnksIDYwLCB0aGlzLnBsYXllcjEuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSwgY3VycmVudEVuZW15LmhpdGJveFdpZHRoLCBjdXJyZW50RW5lbXkuaGl0Ym94SGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudEVuZW15LnkgPCAtMTUwICYmIGN1cnJlbnRFbmVteS50eXBlID09PSBcImNyYXp5XCIpIHtcbiAgICAgICAgICAgIHRoaXMuZW5lbWllcy5zcGxpY2UoZW5lbXlOdW0sIDEpXG4gICAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICB9XG4gICAgfVxuICAgIGFuaW1hdGUoKSB7XG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZCgpO1xuICAgICAgICBpZiAodGhpcy5lbmVtaWVzWzBdKSB7XG4gICAgICAgICAgICAvLyBVdGlsLmNvbGxpc2lvbih0aGlzLnBsYXllcjEueCArIDY3LCB0aGlzLnBsYXllcjEueSwgNjAsIHRoaXMucGxheWVyMS5oZWlnaHQsXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5lbmVtaWVzWzBdLngsIHRoaXMuZW5lbWllc1swXS55LCB0aGlzLmVuZW1pZXNbMF0uaGl0Ym94V2lkdGgsIHRoaXMuZW5lbWllc1swXS5oaXRib3hIZWlnaHQpO1xuICAgICAgICAgICAgdGhpcy5kcmF3RW5lbXkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZW5lbWllc1sxXSkge1xuICAgICAgICAgICAgdGhpcy5kcmF3RW5lbXkoMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZW5lbWllc1syXSkge1xuICAgICAgICAgICAgdGhpcy5kcmF3RW5lbXkoMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZW5lbWllc1szXSkge1xuICAgICAgICAgICAgdGhpcy5kcmF3RW5lbXkoMyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZW5lbWllc1s0XSkge1xuICAgICAgICAgICAgdGhpcy5kcmF3RW5lbXkoNCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kcmF3UGxheWVyKCk7XG4gICAgICAgIHRoaXMucGxheWVyMS5tb3ZlUGxheWVyKCk7XG4gICAgICAgIHRoaXMucGxheWVyMS5oYW5kbGVQbGF5ZXJGcmFtZSgpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlRW5lbXkoKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICAvLyBzdGFydEFuaW1hdGluZyhmcHMpIHtcbiAgICAvLyAgICAgdGhpcy5mcHNJbnRlcnZhbCA9IDEwMDAgLyBmcHM7XG4gICAgLy8gICAgIHRoaXMudGhlbiA9IERhdGUubm93KCk7XG4gICAgLy8gICAgIHRoaXMuc3RhcnRUaW1lID0gdGhpcy50aGVuO1xuICAgIC8vICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICAvLyB9XG4gICAgLy8gYW5pbWF0ZSgpIHtcbiAgICAvLyAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICAvLyAgICAgdGhpcy5ub3cgPSBEYXRlLm5vdygpO1xuICAgIC8vICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLm5vdyAtIHRoaXMudGhlbjtcbiAgICAvLyAgICAgaWYgKHRoaXMuZWxhcHNlZCA+IHRoaXMuZnBzSW50ZXJ2YWwpIHtcbiAgICAvLyAgICAgICAgIHRoaXMudGhlbiA9IHRoaXMubm93IC0gKHRoaXMuZWxhcHNlZCAlIHRoaXMuZnBzSW50ZXJ2YWwpO1xuICAgIC8vICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgIC8vICAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZCgpO1xuICAgIC8vICAgICAgICAgaWYgKHRoaXMuZW5lbWllc1swXSkge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuZHJhd0VuZW15KDApO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuZW5lbWllc1sxXSkge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuZHJhd0VuZW15KDEpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuZW5lbWllc1syXSkge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuZHJhd0VuZW15KDIpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuZW5lbWllc1szXSkge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuZHJhd0VuZW15KDMpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuZW5lbWllc1s0XSkge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuZHJhd0VuZW15KDQpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgdGhpcy5kcmF3UGxheWVyKCk7XG4gICAgLy8gICAgICAgICB0aGlzLnBsYXllcjEubW92ZVBsYXllcigpO1xuICAgIC8vICAgICAgICAgdGhpcy5wbGF5ZXIxLmhhbmRsZVBsYXllckZyYW1lKCk7XG4gICAgLy8gICAgICAgICB0aGlzLmdlbmVyYXRlRW5lbXkoKTtcbiAgICAvLyAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG59XG5cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMueCA9IDMwMDtcbiAgICAgICAgdGhpcy55ID0gMjAwO1xuICAgICAgICB0aGlzLndpZHRoID0gMTg2O1xuICAgICAgICB0aGlzLmhlaWdodCA9IDEzMDtcbiAgICAgICAgdGhpcy54SGl0Qm94ID0gW3RoaXMueCwgdGhpcy54ICsgdGhpcy53aWR0aF07XG4gICAgICAgIHRoaXMueUhpdEJveCA9IFt0aGlzLnksIHRoaXMueSArdGhpcy5oZWlnaHRdO1xuICAgICAgICB0aGlzLmZyYW1lWCA9IDA7XG4gICAgICAgIHRoaXMuZnJhbWVZID0gMDtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDEwO1xuICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxlZnRBdHRhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yaWdodEF0dGFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBsYXllclNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcIi4vc3JjL2ltYWdlcy9iaWtlMS5wbmdcIjtcbiAgICAgICAgdGhpcy5rZXlzID0gW107XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcbiAgICB9XG5cbiAgICByZWdpc3RlckV2ZW50cygpIHtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmtleXNbZS5rZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMua2V5c1tlLmtleV07XG4gICAgICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5sZWZ0QXR0YWNrID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0QXR0YWNrID0gZmFsc2U7XG4gICAgICAgIH0pXG5cblxuICAgIH1cbiBcbiAgICBcbiAgICBtb3ZlUGxheWVyKCkge1xuICAgICAgICBpZiAodGhpcy5rZXlzLncgJiYgdGhpcy55ID4gMCkgeyAgICAgICAgIC8vIG1vdmluZyB1cFxuICAgICAgICAgICAgdGhpcy55IC09IHRoaXMuc3BlZWQ7ICAgICAgICAgICAvLyBpbmNyZWFzZSBvdXIgcGxheXNlcidzIHkgcG9zIGJ5IHNwZWVkXG4gICAgICAgICAgICB0aGlzLm1vdmluZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMua2V5cy5zICYmIHRoaXMueSA8IDU1MCkgeyAgICAvLyBtb3ZpbmcgZG93blxuICAgICAgICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICB0aGlzLm1vdmluZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMua2V5cy5hICYmIHRoaXMueCA+IDgwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54IC09IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmtleXMuZCAmJiB0aGlzLnggPCA1ODApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnggKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmluZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMua2V5cy5xKSB7XG4gICAgICAgICAgICB0aGlzLmZyYW1lWCA9IDA7XG4gICAgICAgICAgICB0aGlzLmZyYW1lWSA9IDI7XG4gICAgICAgICAgICB0aGlzLmxlZnRBdHRhY2sgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmtleXMuZSkge1xuICAgICAgICAgICAgdGhpcy5mcmFtZVggPSAwO1xuICAgICAgICAgICAgdGhpcy5mcmFtZVkgPSAxO1xuICAgICAgICAgICAgdGhpcy5yaWdodEF0dGFjayA9IHRydWU7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVBsYXllckZyYW1lKCkge1xuICAgICAgICBpZiAodGhpcy5mcmFtZVggPCAxICYmIHRoaXMubW92aW5nKSB7XG4gICAgICAgICAgICB0aGlzLmZyYW1lWCsrXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1vdmluZ1wiKVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5yaWdodEF0dGFjayAmJiB0aGlzLmZyYW1lWSA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5mcmFtZVkgPSAwO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSIEFUVEFDS1wiKVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5sZWZ0QXR0YWNrICYmIHRoaXMuZnJhbWVZID09PSAyKSB7XG4gICAgICAgICAgICB0aGlzLmZyYW1lWSA9IDA7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkwgQVRUQUNLXCIpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZyYW1lWCA9IDBcbiAgICAgICAgfVxuICAgIH1cblxuXG59IiwiY29uc3QgVXRpbCA9IHtcblxuICAgIGJldHdlZW4oeCwgbWluLCBtYXgpIHtcbiAgICAgICAgcmV0dXJuIHggPj0gbWluICYmIHggPD0gbWF4O1xuICAgIH0sXG4gICAgY29sbGlzaW9uKHVuaXQxeCwgdW5pdDF5LCB1bml0MXcsIHVuaXQxaCwgdW5pdDJ4LCB1bml0MnksIHVuaXQydywgdW5pdDJoKSB7XG4gICAgICAgIGxldCB1bml0MVhIaXRCb3ggPSBbdW5pdDF4LCB1bml0MXggKyB1bml0MXddO1xuICAgICAgICBsZXQgdW5pdDFZSGl0Qm94ID0gW3VuaXQxeSwgdW5pdDF5ICsgdW5pdDFoXTtcbiAgICAgICAgbGV0IHVuaXQyWEhpdEJveCA9IFt1bml0MngsIHVuaXQyeCArIHVuaXQyd107XG4gICAgICAgIGxldCB1bml0MllIaXRCb3ggPSBbdW5pdDJ5LCB1bml0MnkgKyB1bml0MmhdO1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICBsZXQgeENvbGxpc2lvbiA9IGZhbHNlO1xuICAgICAgICBsZXQgeUNvbGxpc2lvbiA9IGZhbHNlO1xuICAgICAgICBpZiAoVXRpbC5iZXR3ZWVuKHVuaXQxWEhpdEJveFswXSwgdW5pdDJYSGl0Qm94WzBdLCB1bml0MlhIaXRCb3hbMV0pIHx8XG4gICAgICAgICAgICBVdGlsLmJldHdlZW4odW5pdDFYSGl0Qm94WzFdLCB1bml0MlhIaXRCb3hbMF0sIHVuaXQyWEhpdEJveFsxXSkpIHtcbiAgICAgICAgICAgICAgICB4Q29sbGlzaW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkNPTExJU0lPTlhcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgaWYgKFV0aWwuYmV0d2Vlbih1bml0MVlIaXRCb3hbMF0sIHVuaXQyWUhpdEJveFswXSwgdW5pdDJZSGl0Qm94WzFdKSB8fFxuICAgICAgICAgICAgVXRpbC5iZXR3ZWVuKHVuaXQxWUhpdEJveFsxXSwgdW5pdDJZSGl0Qm94WzBdLCB1bml0MllIaXRCb3hbMV0pKSB7XG4gICAgICAgICAgICAgICAgeUNvbGxpc2lvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJDT0xMSVNJT05ZXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIGlmICgoeENvbGxpc2lvbiA9PT0gdHJ1ZSAmJiB5Q29sbGlzaW9uID09PSB0cnVlKSkge1xuICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ09MTElTSU9OXCIpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gVXRpbCJdLCJzb3VyY2VSb290IjoiIn0=