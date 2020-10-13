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
game1.animate();

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
  this.hitboxX = [this.x, this.x + this.hitboxWidth];
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
      }

      if (currentEnemy.y > this.height && currentEnemy.type === "stupid") {
        this.enemies.splice(enemyNum, 1); // debugger
      }

      if (currentEnemy.type === "crazy") {
        this.ctx.drawImage(currentEnemy.enemySprite, 0, 0, currentEnemy.width, currentEnemy.height, currentEnemy.x, currentEnemy.y, 90, 150);
        currentEnemy.y -= 6;

        if (this.player1.x > currentEnemy.x) {
          currentEnemy.x += 2;
        } else {
          currentEnemy.x -= 2;
        }
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
    }
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

    this.x = 300, this.y = 200, this.width = 186;
    this.height = 130, this.frameX = 0, this.frameY = 0, this.speed = 10, this.moving = false, this.leftAttack = false, this.rightAttack = false, this.playerSprite = new Image();
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



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VuZW15LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvcGxheWVyLmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImhlaWdodCIsImdhbWUxIiwiR2FtZSIsImFuaW1hdGUiLCJFbmVteSIsImN0eCIsImVuZW15VHlwZSIsImhpdGJveFdpZHRoIiwiaGl0Ym94SGVpZ2h0IiwiaGl0Ym94WCIsIngiLCJ0eXBlIiwiZW5lbXlTcHJpdGUiLCJJbWFnZSIsInNyYyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInkiLCJnZXRDb250ZXh0IiwicGxheWVyMSIsIlBsYXllciIsImtleXMiLCJ0b3BMb29wIiwiYm90dG9tTG9vcCIsImJhY2tncm91bmQiLCJlbmVtaWVzIiwiZHJhd0ltYWdlIiwicGxheWVyU3ByaXRlIiwiZnJhbWVYIiwiZnJhbWVZIiwicmFuZG9tTnVtIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInJhbmRvbUVuZW15TnVtIiwicHVzaCIsImVuZW15TnVtIiwiY3VycmVudEVuZW15Iiwic3BsaWNlIiwiY2xlYXJSZWN0IiwiZHJhd0JhY2tncm91bmQiLCJkcmF3RW5lbXkiLCJkcmF3UGxheWVyIiwibW92ZVBsYXllciIsImhhbmRsZVBsYXllckZyYW1lIiwiZ2VuZXJhdGVFbmVteSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJpbmQiLCJzcGVlZCIsIm1vdmluZyIsImxlZnRBdHRhY2siLCJyaWdodEF0dGFjayIsInJlZ2lzdGVyRXZlbnRzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJrZXkiLCJ3IiwicyIsImEiLCJkIiwicSJdLCJtYXBwaW5n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QUFkO0FBQ0FHLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFDSDs7QUFDRCxVQUFJLENBQUMsS0FBS2lCLFVBQU4sSUFBb0IsS0FBS3JCLE1BQUwsS0FBZ0IsQ0FBeEMsRUFBMkM7QUFDdkMsYUFBS0EsTUFBTCxHQUFjLENBQWQ7QUFDQUcsZUFBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNILE9BSEQsTUFJSztBQUNELGFBQUtMLE1BQUwsR0FBYyxDQUFkO0FBQ0g7QUFDSiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgR2FtZSBmcm9tICcuL3NjcmlwdHMvZ2FtZSdcblxuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhczFcIik7XG5jYW52YXMud2lkdGggPSA4NDA7XG5jYW52YXMuaGVpZ2h0ID0gNjUwO1xuY29uc3QgZ2FtZTEgPSBuZXcgR2FtZShjYW52YXMpXG5cblxuXG5nYW1lMS5hbmltYXRlKCk7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5lbXkge1xuICAgIGNvbnN0cnVjdG9yKGN0eCwgZW5lbXlUeXBlKSB7XG4gICAgICAgIC8vIHRoaXMueCA9IDA7ICAgICAgIC8vIFRPRE8gV2lsbCBjaGFuZ2UgYmFzZWQgb24gdGhlIGFyZyBwYXNzZWQgaW50byBjb25zdHJ1Y3RvclxuICAgICAgICAvLyB0aGlzLnkgPSAwO1xuICAgICAgICB0aGlzLndpZHRoID0gMjQzO1xuICAgICAgICB0aGlzLmhlaWdodCA9IDQ4MDtcbiAgICAgICAgdGhpcy5oaXRib3hXaWR0aCA9IDkwO1xuICAgICAgICB0aGlzLmhpdGJveEhlaWdodCA9IDE1MDtcbiAgICAgICAgdGhpcy5oaXRib3hYID0gW3RoaXMueCwgdGhpcy54ICsgdGhpcy5oaXRib3hXaWR0aF07XG4gICAgICAgIHRoaXMudHlwZSA9IGVuZW15VHlwZSAvLyBUT0RPIFdpbGwgY2hhbmdlIGJhc2VkIG9uIGEgdGhlIGFyZ3VtZW50IHBhc3NlZCBpbnRvIGNvbnN0cnVjdG9yXG4gICAgICAgIHRoaXMuZW5lbXlTcHJpdGUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgc3dpdGNoICh0aGlzLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJzdHVwaWRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW15U3ByaXRlLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL2NhcjEucG5nXCJcbiAgICAgICAgICAgICAgICB0aGlzLnggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoNTUwIC0gMTIwKSArIDEyMClcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSAtMTAwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImNyYXp5XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVteVNwcml0ZS5zcmMgPSBcIi4vc3JjL2ltYWdlcy9jYXIyLnBuZ1wiXG4gICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDU1MCAtIDEyMCkgKyAxMjApXG4gICAgICAgICAgICAgICAgdGhpcy55ID0gNjUwO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgfVxuICAgIH1cblxufSIsImltcG9ydCBFbmVteSBmcm9tIFwiLi9lbmVteVwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIxID0gbmV3IFBsYXllcigpO1xuICAgICAgICB0aGlzLndpZHRoID0gY2FudmFzLndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMua2V5cyA9IFtdO1xuICAgICAgICB0aGlzLnRvcExvb3AgPSAtY2FudmFzLmhlaWdodDtcbiAgICAgICAgdGhpcy5ib3R0b21Mb29wID0gMDtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gbmV3IEltYWdlKClcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL2JhY2tncm91bmQtMS5wbmdcIjtcbiAgICAgICAgdGhpcy5lbmVtaWVzID0gW107IC8vIGNvbnRhaW5zIGVuZW1pZXMgY3VycmVudGx5IG9uIHNjcmVlbiwgc2hvd24gYXMgZW5lbXkudHlwZVxuXG4gICAgfVxuXG4gICAgZHJhd0JhY2tncm91bmQoKSB7XG4gICAgICAgIC8vYm90dG9tIGhhbGYgb2YgdGhlIGJhY2tncm91bmRcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLCAwLCAwLFxuICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICAwLCB0aGlzLmJvdHRvbUxvb3AsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0XG4gICAgICAgIClcbiAgICAgICAgdGhpcy5ib3R0b21Mb29wICs9IDEwO1xuICAgICAgICBpZiAodGhpcy5ib3R0b21Mb29wID09PSB0aGlzLmhlaWdodCkgdGhpcy5ib3R0b21Mb29wID0gLXRoaXMuaGVpZ2h0O1xuICAgICAgICAvL3RvcCBoYWxmIG9mIHRoZSBiYWNrZ3JvdW5kXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZCwgMCwgMCxcbiAgICAgICAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LFxuICAgICAgICAgICAgMCwgdGhpcy50b3BMb29wLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodFxuICAgICAgICApXG4gICAgICAgIHRoaXMudG9wTG9vcCArPSAxMDtcbiAgICAgICAgaWYgKHRoaXMudG9wTG9vcCA9PT0gdGhpcy5oZWlnaHQpIHRoaXMudG9wTG9vcCA9IC10aGlzLmhlaWdodDtcbiAgICB9XG5cbiAgICBkcmF3UGxheWVyKCkge1xuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICB0aGlzLnBsYXllcjEucGxheWVyU3ByaXRlLCB0aGlzLnBsYXllcjEud2lkdGggKiB0aGlzLnBsYXllcjEuZnJhbWVYLCB0aGlzLnBsYXllcjEuaGVpZ2h0ICogdGhpcy5wbGF5ZXIxLmZyYW1lWSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aGVyZSB3ZSBjcm9wIG91dCB0aGUgaW1hZ2UgZm9yIHNwcml0ZVxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIxLndpZHRoLCB0aGlzLnBsYXllcjEuaGVpZ2h0LCB0aGlzLnBsYXllcjEueCwgdGhpcy5wbGF5ZXIxLnksICAgIC8vIHdoZXJlIHRoZSBpbWFnZSB3aWxsIGJlIGFuaW1hdGVkIG9uIGNhbnZhc1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXIxLndpZHRoLCB0aGlzLnBsYXllcjEuaGVpZ2h0XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVFbmVteSgpIHtcbiAgICAgICAgLy8gbG9naWMgZm9yIHdoZW4gdG8gZ2VuZXJhdGUgYW4gZW5lbXkuICB3aWxsIHB1c2ggaW50byB0aGlzLmVuZW1pZXNcbiAgICAgICAgY29uc3QgcmFuZG9tTnVtID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDgwKSk7XG4gICAgICAgIGlmICh0aGlzLmVuZW1pZXMubGVuZ3RoIDwgNCAmJiByYW5kb21OdW0gPT09IDUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2VuZXJhdGluZyBlbmVteVwiKVxuXG4gICAgICAgICAgICAvLyBsZXQgc3Bhd25Mb2NhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg1NTAgLSAxMjApICsgMTIwKTsgICBUT0RPIG1ha2Ugc28gZW5lbWllcyBkbyBub3Qgc3Bhd24gb24gdG9wIG9mIGVhY2ggb3RoZXJcbiAgICAgICAgICAgIC8vIGxldCBjaGVja1NhZmVHZW5lcmF0ZSA9IHRydWU7XG4gICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW5lbWllczsgaSsrKSB7XG4gICAgICAgICAgICAvLyAgICAgbGV0IGVuZW15ID0gdGhpcy5lbmVtaWVzW2ldO1xuICAgICAgICAgICAgLy8gICAgIGlmIChlbmVteS5oaXRib3hXaWQpXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbUVuZW15TnVtID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDEwMCkpXG4gICAgICAgICAgICBsZXQgZW5lbXlUeXBlXG4gICAgICAgICAgICBpZiAocmFuZG9tRW5lbXlOdW0gPj0gNDApIHtcbiAgICAgICAgICAgICAgICBlbmVteVR5cGUgPSBcInN0dXBpZFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbmVteVR5cGUgPSBcImNyYXp5XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVuZW15VHlwZSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVuZW15VHlwZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5lbWllcy5wdXNoKG5ldyBFbmVteSh0aGlzLmN0eCwgZW5lbXlUeXBlKSk7ICAgLy8gVE9ETzogcmFuZG9tbHkgY2hvb3NlIHRoZSB0eXBlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkcmF3RW5lbXkoZW5lbXlOdW0pIHtcbiAgICAgICAgbGV0IGN1cnJlbnRFbmVteSA9IHRoaXMuZW5lbWllc1tlbmVteU51bV07XG4gICAgICAgIGlmIChjdXJyZW50RW5lbXkudHlwZSA9PT0gXCJzdHVwaWRcIikge1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS5lbmVteVNwcml0ZSwgMCwgMCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkud2lkdGgsIGN1cnJlbnRFbmVteS5oZWlnaHQsIGN1cnJlbnRFbmVteS54ICwgY3VycmVudEVuZW15LnksXG4gICAgICAgICAgICAgICAgOTAsIDE1MFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGN1cnJlbnRFbmVteS55ICs9IDM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnJlbnRFbmVteS55ID4gdGhpcy5oZWlnaHQgJiYgY3VycmVudEVuZW15LnR5cGUgPT09XCJzdHVwaWRcIikge1xuICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnNwbGljZShlbmVteU51bSwgMSlcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudEVuZW15LnR5cGUgPT09IFwiY3JhenlcIikge1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS5lbmVteVNwcml0ZSwgMCwgMCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkud2lkdGgsIGN1cnJlbnRFbmVteS5oZWlnaHQsIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSxcbiAgICAgICAgICAgICAgICA5MCwgMTUwXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGN1cnJlbnRFbmVteS55IC09IDY7XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIxLnggPiBjdXJyZW50RW5lbXkueCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS54ICs9IDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueCAtPSAyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyZW50RW5lbXkueSA8IC0xNTAgJiYgY3VycmVudEVuZW15LnR5cGUgPT09IFwiY3JhenlcIikge1xuICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnNwbGljZShlbmVteU51bSwgMSlcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIH1cbiAgICB9XG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgICAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKCk7XG4gICAgICAgIGlmICh0aGlzLmVuZW1pZXNbMF0pIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd0VuZW15KDApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmVuZW1pZXNbMV0pIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd0VuZW15KDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmVuZW1pZXNbMl0pIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd0VuZW15KDIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmVuZW1pZXNbM10pIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd0VuZW15KDMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmVuZW1pZXNbNF0pIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd0VuZW15KDQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kcmF3UGxheWVyKCk7XG4gICAgICAgIHRoaXMucGxheWVyMS5tb3ZlUGxheWVyKCk7XG4gICAgICAgIHRoaXMucGxheWVyMS5oYW5kbGVQbGF5ZXJGcmFtZSgpO1xuICAgICAgICB0aGlzLmdlbmVyYXRlRW5lbXkoKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbn1cblxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy54ID0gMzAwLFxuICAgICAgICB0aGlzLnkgPSAyMDAsXG4gICAgICAgIHRoaXMud2lkdGggPSAxODY7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTMwLFxuICAgICAgICB0aGlzLmZyYW1lWCA9IDAsXG4gICAgICAgIHRoaXMuZnJhbWVZID0gMCxcbiAgICAgICAgdGhpcy5zcGVlZCA9IDEwLFxuICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlLFxuICAgICAgICB0aGlzLmxlZnRBdHRhY2sgPSBmYWxzZSxcbiAgICAgICAgdGhpcy5yaWdodEF0dGFjayA9IGZhbHNlLFxuICAgICAgICB0aGlzLnBsYXllclNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcIi4vc3JjL2ltYWdlcy9iaWtlMS5wbmdcIjtcbiAgICAgICAgdGhpcy5rZXlzID0gW11cbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cygpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMua2V5c1tlLmtleV0gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICB9KVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5rZXlzW2Uua2V5XTtcbiAgICAgICAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmxlZnRBdHRhY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucmlnaHRBdHRhY2sgPSBmYWxzZTtcbiAgICAgICAgfSlcblxuXG4gICAgfVxuIFxuICAgIFxuICAgIG1vdmVQbGF5ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmtleXMudyAmJiB0aGlzLnkgPiAwKSB7ICAgICAgICAgLy8gbW92aW5nIHVwXG4gICAgICAgICAgICB0aGlzLnkgLT0gdGhpcy5zcGVlZDsgICAgICAgICAgIC8vIGluY3JlYXNlIG91ciBwbGF5c2VyJ3MgeSBwb3MgYnkgc3BlZWRcbiAgICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5rZXlzLnMgJiYgdGhpcy55IDwgNTUwKSB7ICAgIC8vIG1vdmluZyBkb3duXG4gICAgICAgICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5rZXlzLmEgJiYgdGhpcy54ID4gODApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnggLT0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmluZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMua2V5cy5kICYmIHRoaXMueCA8IDU4MCkge1xuICAgICAgICAgICAgICAgIHRoaXMueCArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5rZXlzLnEpIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVYID0gMDtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVZID0gMjtcbiAgICAgICAgICAgIHRoaXMubGVmdEF0dGFjayA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMua2V5cy5lKSB7XG4gICAgICAgICAgICB0aGlzLmZyYW1lWCA9IDA7XG4gICAgICAgICAgICB0aGlzLmZyYW1lWSA9IDE7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0QXR0YWNrID0gdHJ1ZTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlUGxheWVyRnJhbWUoKSB7XG4gICAgICAgIGlmICh0aGlzLmZyYW1lWCA8IDEgJiYgdGhpcy5tb3ZpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVYKytcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibW92aW5nXCIpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnJpZ2h0QXR0YWNrICYmIHRoaXMuZnJhbWVZID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmZyYW1lWSA9IDA7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlIgQVRUQUNLXCIpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmxlZnRBdHRhY2sgJiYgdGhpcy5mcmFtZVkgPT09IDIpIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVZID0gMDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTCBBVFRBQ0tcIilcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVYID0gMFxuICAgICAgICB9XG4gICAgfVxuXG5cbn0iXSwic291cmNlUm9vdCI6IiJ9