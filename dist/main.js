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
          }
        }

        if (this.player1.rightAttack) {
          if (Util.attacked(this.player1.rAttackXHitBox, this.player1.rAttackYHitBox, currentEnemy.x, currentEnemy.y, currentEnemy.hitboxWidth, currentEnemy.hitboxHeight)) {
            this.enemies.splice(enemyNum, 1);
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
          }
        }

        if (this.player1.rightAttack) {
          if (Util.attacked(this.player1.rAttackXHitBox, this.player1.rAttackYHitBox, currentEnemy.x, currentEnemy.y, currentEnemy.hitboxWidth, currentEnemy.hitboxHeight)) {
            this.enemies.splice(enemyNum, 1);
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

          this.drawPlayer();
          this.drawHealth(this.health);
          this.player1.movePlayer();
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
    this.lAttackXHitBox;
    this.lAttackYHitBox;
    this.rAttackXHitBox;
    this.rAttackYHitBox;
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

      this.handlePlayerAttack();
    }
  }, {
    key: "handlePlayerAttack",
    value: function handlePlayerAttack() {
      debugger;

      if (this.leftAttack) {
        debugger;
        this.lAttackXHitBox = [this.x, this.x + 64];
        this.lAttackYHitBox = [this.y, this.y + 88];
      }

      if (this.rightAttack) {
        this.rAttackXHitBox = [this.x + this.width, this.x + 64];
        this.rAttackYHitBox = [this.y, this.y + 88];
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
    var yAttacked;
    debugger;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VuZW15LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aWR0aCIsImhlaWdodCIsIkdhbWVWaWV3Iiwic3RhcnQiLCJFbmVteSIsImN0eCIsImVuZW15VHlwZSIsImhpdGJveFdpZHRoIiwiaGl0Ym94SGVpZ2h0IiwidHlwZSIsImVuZW15U3ByaXRlIiwiSW1hZ2UiLCJzcmMiLCJ4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwieSIsInhIaXRCb3giLCJ5SGl0Qm94IiwiVXRpbCIsInJlcXVpcmUiLCJHYW1lIiwiaGVhbHRoIiwiZ2FtZW92ZXIiLCJnZXRDb250ZXh0IiwicGxheWVyMSIsIlBsYXllciIsImtleXMiLCJ0b3BMb29wIiwiYm90dG9tTG9vcCIsImJhY2tncm91bmQiLCJlbmVtaWVzIiwiZnBzSW50ZXJ2YWwiLCJzdGFydFRpbWUiLCJub3ciLCJ0aGVuIiwiZWxhcHNlZCIsImRyYXdJbWFnZSIsInBsYXllclNwcml0ZSIsImZyYW1lWCIsImZyYW1lWSIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZm9udCIsImZpbGxUZXh0IiwicmFuZG9tTnVtIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsInJhbmRvbUVuZW15TnVtIiwicHVzaCIsImVuZW15TnVtIiwiY3VycmVudEVuZW15IiwiY29sbGlzaW9uIiwibGVmdEF0dGFjayIsImF0dGFja2VkIiwibEF0dGFja1hIaXRCb3giLCJsQXR0YWNrWUhpdEJveCIsInNwbGljZSIsInJpZ2h0QXR0YWNrIiwickF0dGFja1hIaXRCb3giLCJyQXR0YWNrWUhpdEJveCIsImJldHdlZW4iLCJzbmFha2UiLCJBdWRpbyIsInBsYXkiLCJmcHMiLCJEYXRlIiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJpbmQiLCJjbGVhclJlY3QiLCJkcmF3QmFja2dyb3VuZCIsImhhbmRsZVBsYXllckZyYW1lIiwiZHJhd0VuZW15IiwiZHJhd1BsYXllciIsImRyYXdIZWFsdGgiLCJtb3ZlUGxheWVyIiwiZ2VuZXJhdGVFbmVteSIsImNoZWNrR2FtZW92ZXIiLCJnYW1lIiwicmVzdGFydCIsInJlZ2lzdGVyRXZlbnRzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJrZXkiLCJzdGFydEFuaW1hdGluZyIsInNwZWVkIiwibW92aW5nIiwidyIsInMiLCJhIiwiZCIsInEiLCJoYW5kbGVQbGF5ZXJBdHRhY2siLCJtaW4iLCJtYXgiLCJ1bml0MXgiLCJ1bml0MXkiLCJ1bml0MXciLCJ1bml0MWgiLCJ1bml0MngiLCJ1bml0MnkiLCJ1bml0MnciLCJ1bml0MmgiLCJ1bml0MVhIaXRCb3giLCJ1bml0MVlIaXRCb3giLCJ1bml0MlhIaXRCb3giLCJ1bml0MllIaXRCb3giLCJ4Q29sbGlzaW9uIiwieUNvbGxpc2lvbiIsImF0dGFja1R5cGVYIiwiYXR0YWNrVHlwZVkiLCJ1bml0eCIsInVuaXR5IiwidW5pdHciLCJ1bml0aCIsInVuaXRYSGl0Qm94IiwidW5pdFlIaXRCb3giLCJ4QXR0YWNrZWQiLCJ5QXR0YWNrZWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7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LElBQXNCQyxTQUFTLEtBQUssSUFBekMsRUFBZ0Q7QUFDNUM7QUFDQTFFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDQSxhQUFPLElBQVA7QUFDSCxLQUpELE1BS0s7QUFDRCxhQUFPLEtBQVA7QUFDSDtBQUNKO0FBeERRLENBQWI7QUEwREEwRSxNQUFNLENBQUNDLE9BQVAsR0FBaUJ4RyxJQUFqQixDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBHYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lJ1xuaW1wb3J0IEdhbWVWaWV3IGZyb20gJy4vc2NyaXB0cy9nYW1lX3ZpZXcnO1xuXG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzMVwiKTtcbmNhbnZhcy53aWR0aCA9IDg0MDtcbmNhbnZhcy5oZWlnaHQgPSA2NTA7XG4vLyBjb25zdCBnYW1lMSA9IG5ldyBHYW1lKGNhbnZhcylcbm5ldyBHYW1lVmlldyhjYW52YXMpLnN0YXJ0KClcblxuXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVteSB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBlbmVteVR5cGUpIHtcbiAgICAgICAgLy8gdGhpcy54ID0gMDsgICAgICAgLy8gVE9ETyBXaWxsIGNoYW5nZSBiYXNlZCBvbiB0aGUgYXJnIHBhc3NlZCBpbnRvIGNvbnN0cnVjdG9yXG4gICAgICAgIC8vIHRoaXMueSA9IDA7XG4gICAgICAgIHRoaXMud2lkdGggPSAyNDM7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gNDgwO1xuICAgICAgICB0aGlzLmhpdGJveFdpZHRoID0gOTA7XG4gICAgICAgIHRoaXMuaGl0Ym94SGVpZ2h0ID0gMTUwO1xuICAgICAgICB0aGlzLnR5cGUgPSBlbmVteVR5cGUgLy8gVE9ETyBXaWxsIGNoYW5nZSBiYXNlZCBvbiBhIHRoZSBhcmd1bWVudCBwYXNzZWQgaW50byBjb25zdHJ1Y3RvclxuICAgICAgICB0aGlzLmVuZW15U3ByaXRlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwic3R1cGlkXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVteVNwcml0ZS5zcmMgPSBcIi4vc3JjL2ltYWdlcy9jYXIxLnBuZ1wiXG4gICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDU1MCAtIDEyMCkgKyAxMjApXG4gICAgICAgICAgICAgICAgdGhpcy55ID0gLTEwMDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjcmF6eVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlTcHJpdGUuc3JjID0gXCIuL3NyYy9pbWFnZXMvY2FyMi5wbmdcIlxuICAgICAgICAgICAgICAgIHRoaXMueCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg1NTAgLSAxMjApICsgMTIwKVxuICAgICAgICAgICAgICAgIHRoaXMueSA9IDY1MDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB0aGlzLnhIaXRCb3ggPSBbdGhpcy54LCB0aGlzLnggKyB0aGlzLmhpdGJveFdpZHRoXTtcbiAgICAgICAgdGhpcy55SGl0Qm94ID0gW3RoaXMueSwgdGhpcy55ICsgdGhpcy5oaXRib3hIZWlnaHRdO1xuICAgIH1cblxufSIsImltcG9ydCBFbmVteSBmcm9tIFwiLi9lbmVteVwiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmNvbnN0IFV0aWwgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7XG4gICAgICAgIHRoaXMuaGVhbHRoID0gMTAwMDtcbiAgICAgICAgdGhpcy5nYW1lb3ZlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMucGxheWVyMSA9IG5ldyBQbGF5ZXIoKTtcbiAgICAgICAgdGhpcy53aWR0aCA9IGNhbnZhcy53aWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmtleXMgPSBbXTtcbiAgICAgICAgdGhpcy50b3BMb29wID0gLWNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMuYm90dG9tTG9vcCA9IDA7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5zcmMgPSBcIi4vc3JjL2ltYWdlcy9iYWNrZ3JvdW5kLTEucG5nXCI7XG4gICAgICAgIHRoaXMuZW5lbWllcyA9IFtdOyAvLyBjb250YWlucyBlbmVtaWVzIGN1cnJlbnRseSBvbiBzY3JlZW4sIHNob3duIGFzIGVuZW15LnR5cGVcbiAgICAgICAgdGhpcy5mcHNJbnRlcnZhbDtcbiAgICAgICAgdGhpcy5zdGFydFRpbWU7XG4gICAgICAgIHRoaXMubm93O1xuICAgICAgICB0aGlzLnRoZW47XG4gICAgICAgIHRoaXMuZWxhcHNlZDtcbiAgICB9XG5cbiAgICBkcmF3QmFja2dyb3VuZCgpIHtcbiAgICAgICAgLy9ib3R0b20gaGFsZiBvZiB0aGUgYmFja2dyb3VuZFxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmQsIDAsIDAsXG4gICAgICAgICAgICB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCxcbiAgICAgICAgICAgIDAsIHRoaXMuYm90dG9tTG9vcCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHRcbiAgICAgICAgKVxuICAgICAgICB0aGlzLmJvdHRvbUxvb3AgKz0gMTA7XG4gICAgICAgIGlmICh0aGlzLmJvdHRvbUxvb3AgPT09IHRoaXMuaGVpZ2h0KSB0aGlzLmJvdHRvbUxvb3AgPSAtdGhpcy5oZWlnaHQ7XG4gICAgICAgIC8vdG9wIGhhbGYgb2YgdGhlIGJhY2tncm91bmRcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLCAwLCAwLFxuICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICAwLCB0aGlzLnRvcExvb3AsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0XG4gICAgICAgIClcbiAgICAgICAgdGhpcy50b3BMb29wICs9IDEwO1xuICAgICAgICBpZiAodGhpcy50b3BMb29wID09PSB0aGlzLmhlaWdodCkgdGhpcy50b3BMb29wID0gLXRoaXMuaGVpZ2h0O1xuICAgIH1cblxuICAgIGRyYXdQbGF5ZXIoKSB7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIHRoaXMucGxheWVyMS5wbGF5ZXJTcHJpdGUsIHRoaXMucGxheWVyMS53aWR0aCAqIHRoaXMucGxheWVyMS5mcmFtZVgsIHRoaXMucGxheWVyMS5oZWlnaHQgKiB0aGlzLnBsYXllcjEuZnJhbWVZLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdoZXJlIHdlIGNyb3Agb3V0IHRoZSBpbWFnZSBmb3Igc3ByaXRlXG4gICAgICAgICAgICB0aGlzLnBsYXllcjEud2lkdGgsIHRoaXMucGxheWVyMS5oZWlnaHQsIHRoaXMucGxheWVyMS54LCB0aGlzLnBsYXllcjEueSwgICAgLy8gd2hlcmUgdGhlIGltYWdlIHdpbGwgYmUgYW5pbWF0ZWQgb24gY2FudmFzXG4gICAgICAgICAgICB0aGlzLnBsYXllcjEud2lkdGgsIHRoaXMucGxheWVyMS5oZWlnaHRcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBkcmF3SGVhbHRoKGhlYWx0aCkge1xuICAgICAgICAvLyBpbml0aWFsIGhlYWx0aFxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInJlZFwiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDEwLCAzMCwgMjUwLCAxMClcblxuICAgICAgICAvLyB5b3VyIGFjdHVhbCBoZWFsdGhcbiAgICAgICAgaWYgKGhlYWx0aCA8ICg3MDApKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcInllbGxvd1wiXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgxMCwgMzAsIGhlYWx0aCAvIDQsIDEwKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJncmVlblwiXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCgxMCwgMzAsIGhlYWx0aCAvIDQsIDEwKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyB0ZXh0XG4gICAgXG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjQwcHggQVJDQURFQ0xBU1NJQ1wiXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoIFwiSFBcIiwgMTAsIDI3KVxuXG4gICAgICAgIGlmIChoZWFsdGggPCAxMDApe1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiNDBweCBBUkNBREVDTEFTU0lDXCJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChgJHtoZWFsdGh9LyAxMDAwYCwgODAsIDI3KVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGhlYWx0aCA8IDcwMCkge1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiNDBweCBBUkNBREVDTEFTU0lDXCJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwieWVsbG93XCI7XG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChgJHtoZWFsdGh9LyAxMDAwYCwgODAsIDI3KVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiNDBweCBBUkNBREVDTEFTU0lDXCJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGAke2hlYWx0aH0vIDEwMDBgLCA4MCwgMjcpXG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICB9XG5cbiAgICBnZW5lcmF0ZUVuZW15KCkge1xuICAgICAgICAvLyBsb2dpYyBmb3Igd2hlbiB0byBnZW5lcmF0ZSBhbiBlbmVteS4gIHdpbGwgcHVzaCBpbnRvIHRoaXMuZW5lbWllc1xuICAgICAgICBjb25zdCByYW5kb21OdW0gPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogODApKTtcbiAgICAgICAgaWYgKHRoaXMuZW5lbWllcy5sZW5ndGggPCA0ICYmIHJhbmRvbU51bSA9PT0gNSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZW5lcmF0aW5nIGVuZW15XCIpXG5cbiAgICAgICAgICAgIC8vIGxldCBzcGF3bkxvY2F0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDU1MCAtIDEyMCkgKyAxMjApOyAgIFRPRE8gbWFrZSBzbyBlbmVtaWVzIGRvIG5vdCBzcGF3biBvbiB0b3Agb2YgZWFjaCBvdGhlclxuICAgICAgICAgICAgLy8gbGV0IGNoZWNrU2FmZUdlbmVyYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lbmVtaWVzOyBpKyspIHtcbiAgICAgICAgICAgIC8vICAgICBsZXQgZW5lbXkgPSB0aGlzLmVuZW1pZXNbaV07XG4gICAgICAgICAgICAvLyAgICAgaWYgKGVuZW15LmhpdGJveFdpZClcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgcmFuZG9tRW5lbXlOdW0gPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTAwKSlcbiAgICAgICAgICAgIGxldCBlbmVteVR5cGVcbiAgICAgICAgICAgIGlmIChyYW5kb21FbmVteU51bSA+PSA0MCkge1xuICAgICAgICAgICAgICAgIGVuZW15VHlwZSA9IFwic3R1cGlkXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVuZW15VHlwZSA9IFwiY3JhenlcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coZW5lbXlUeXBlKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZW5lbXlUeXBlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnB1c2gobmV3IEVuZW15KHRoaXMuY3R4LCBlbmVteVR5cGUpKTsgICAvLyBUT0RPOiByYW5kb21seSBjaG9vc2UgdGhlIHR5cGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRyYXdFbmVteShlbmVteU51bSkge1xuICAgICAgICBsZXQgY3VycmVudEVuZW15ID0gdGhpcy5lbmVtaWVzW2VuZW15TnVtXTtcbiAgICAgICAgaWYgKGN1cnJlbnRFbmVteS50eXBlID09PSBcInN0dXBpZFwiKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LmVuZW15U3ByaXRlLCAwLCAwLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS53aWR0aCwgY3VycmVudEVuZW15LmhlaWdodCwgY3VycmVudEVuZW15LnggLCBjdXJyZW50RW5lbXkueSxcbiAgICAgICAgICAgICAgICA5MCwgMTUwXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY3VycmVudEVuZW15LnkgKz0gMztcbiAgICAgICAgICAgIGlmIChVdGlsLmNvbGxpc2lvbih0aGlzLnBsYXllcjEueCArIDY3LCB0aGlzLnBsYXllcjEueSwgNjAsIHRoaXMucGxheWVyMS5oZWlnaHQsXG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LngsIGN1cnJlbnRFbmVteS55LCBjdXJyZW50RW5lbXkuaGl0Ym94V2lkdGgsIGN1cnJlbnRFbmVteS5oaXRib3hIZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhbHRoIC09IDE7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaGVhbHRoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIxLmxlZnRBdHRhY2spIHtcbiAgICAgICAgICAgICAgICBpZiAoVXRpbC5hdHRhY2tlZCh0aGlzLnBsYXllcjEubEF0dGFja1hIaXRCb3gsIHRoaXMucGxheWVyMS5sQXR0YWNrWUhpdEJveCxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LngsIGN1cnJlbnRFbmVteS55LCBjdXJyZW50RW5lbXkuaGl0Ym94V2lkdGgsIGN1cnJlbnRFbmVteS5oaXRib3hIZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lbWllcy5zcGxpY2UoZW5lbXlOdW0sIDEpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllcjEucmlnaHRBdHRhY2spIHtcbiAgICAgICAgICAgICAgICBpZiAoVXRpbC5hdHRhY2tlZCh0aGlzLnBsYXllcjEuckF0dGFja1hIaXRCb3gsIHRoaXMucGxheWVyMS5yQXR0YWNrWUhpdEJveCxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LngsIGN1cnJlbnRFbmVteS55LCBjdXJyZW50RW5lbXkuaGl0Ym94V2lkdGgsIGN1cnJlbnRFbmVteS5oaXRib3hIZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lbWllcy5zcGxpY2UoZW5lbXlOdW0sIDEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGN1cnJlbnRFbmVteS55ID4gdGhpcy5oZWlnaHQgJiYgY3VycmVudEVuZW15LnR5cGUgPT09XCJzdHVwaWRcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5lbWllcy5zcGxpY2UoZW5lbXlOdW0sIDEpXG4gICAgICAgICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50RW5lbXkudHlwZSA9PT0gXCJjcmF6eVwiKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LmVuZW15U3ByaXRlLCAwLCAwLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS53aWR0aCwgY3VycmVudEVuZW15LmhlaWdodCwgY3VycmVudEVuZW15LngsIGN1cnJlbnRFbmVteS55LFxuICAgICAgICAgICAgICAgIDkwLCAxNTBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIxLnggKyAyMCAgPiBjdXJyZW50RW5lbXkueCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS54ICs9IDQ7XG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LnkgLT0gNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKFV0aWwuYmV0d2Vlbih0aGlzLnBsYXllcjEueCArIDIwLCBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnggKyAyMCkpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueSAtPSAxMjtcbiAgICAgICAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LnggLT0gNDtcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueSAtPSA2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFV0aWwuY29sbGlzaW9uKHRoaXMucGxheWVyMS54ICsgNjcsIHRoaXMucGxheWVyMS55LCA2MCwgdGhpcy5wbGF5ZXIxLmhlaWdodCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnksIGN1cnJlbnRFbmVteS5oaXRib3hXaWR0aCwgY3VycmVudEVuZW15LmhpdGJveEhlaWdodCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFsdGggLT0gNTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIxLmxlZnRBdHRhY2spIHtcbiAgICAgICAgICAgICAgICBpZiAoVXRpbC5hdHRhY2tlZCh0aGlzLnBsYXllcjEubEF0dGFja1hIaXRCb3gsIHRoaXMucGxheWVyMS5sQXR0YWNrWUhpdEJveCxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LngsIGN1cnJlbnRFbmVteS55LCBjdXJyZW50RW5lbXkuaGl0Ym94V2lkdGgsIGN1cnJlbnRFbmVteS5oaXRib3hIZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5lbWllcy5zcGxpY2UoZW5lbXlOdW0sIDEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucGxheWVyMS5yaWdodEF0dGFjaykge1xuICAgICAgICAgICAgICAgIGlmIChVdGlsLmF0dGFja2VkKHRoaXMucGxheWVyMS5yQXR0YWNrWEhpdEJveCwgdGhpcy5wbGF5ZXIxLnJBdHRhY2tZSGl0Qm94LFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnksIGN1cnJlbnRFbmVteS5oaXRib3hXaWR0aCwgY3VycmVudEVuZW15LmhpdGJveEhlaWdodCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnNwbGljZShlbmVteU51bSwgMSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY3VycmVudEVuZW15LnkgPCAtMTUwICYmIGN1cnJlbnRFbmVteS50eXBlID09PSBcImNyYXp5XCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW1pZXMuc3BsaWNlKGVuZW15TnVtLCAxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNoZWNrR2FtZW92ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmhlYWx0aCA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVvdmVyID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnN0IHNuYWFrZSA9IG5ldyBBdWRpbygnLi9zcmMvYXVkaW8vR2FtZW92ZXIubXAzJylcbiAgICAgICAgICAgIHNuYWFrZS5wbGF5KCk7XG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCI4MHB4IEFSQ0FERUNMQVNTSUNcIlxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJHQU1FIE9WRVJcIiwgMjQ1LCAzMDApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydEFuaW1hdGluZyhmcHMpIHtcbiAgICAgICAgdGhpcy5mcHNJbnRlcnZhbCA9IDEwMDAgLyBmcHM7XG4gICAgICAgIHRoaXMudGhlbiA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gdGhpcy50aGVuO1xuICAgICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICB9XG5cbiAgICBhbmltYXRlKCkge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLm5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMubm93IC0gdGhpcy50aGVuO1xuICAgICAgICBpZiAodGhpcy5lbGFwc2VkID4gdGhpcy5mcHNJbnRlcnZhbCkge1xuICAgICAgICAgICAgdGhpcy50aGVuID0gdGhpcy5ub3cgLSAodGhpcy5lbGFwc2VkICUgdGhpcy5mcHNJbnRlcnZhbCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZ2FtZW92ZXIpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZCgpO1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyMS5oYW5kbGVQbGF5ZXJGcmFtZSgpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuZW1pZXNbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3RW5lbXkoMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuZW1pZXNbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3RW5lbXkoMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuZW1pZXNbMl0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3RW5lbXkoMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuZW1pZXNbM10pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3RW5lbXkoMyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuZW1pZXNbNF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3RW5lbXkoNCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd1BsYXllcigpO1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0hlYWx0aCh0aGlzLmhlYWx0aCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIxLm1vdmVQbGF5ZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdlbmVyYXRlRW5lbXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrR2FtZW92ZXIoKTtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfVxuICAgIH1cbiAgICB9XG5cbiAgICAvLyBzdGFydEFuaW1hdGluZyhmcHMpIHtcbiAgICAvLyAgICAgdGhpcy5mcHNJbnRlcnZhbCA9IDEwMDAgLyBmcHM7XG4gICAgLy8gICAgIHRoaXMudGhlbiA9IERhdGUubm93KCk7XG4gICAgLy8gICAgIHRoaXMuc3RhcnRUaW1lID0gdGhpcy50aGVuO1xuICAgIC8vICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICAvLyB9XG4gICAgLy8gYW5pbWF0ZSgpIHtcbiAgICAvLyAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICAvLyAgICAgdGhpcy5ub3cgPSBEYXRlLm5vdygpO1xuICAgIC8vICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLm5vdyAtIHRoaXMudGhlbjtcbiAgICAvLyAgICAgaWYgKHRoaXMuZWxhcHNlZCA+IHRoaXMuZnBzSW50ZXJ2YWwpIHtcbiAgICAvLyAgICAgICAgIHRoaXMudGhlbiA9IHRoaXMubm93IC0gKHRoaXMuZWxhcHNlZCAlIHRoaXMuZnBzSW50ZXJ2YWwpO1xuICAgIC8vICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgIC8vICAgICAgICAgdGhpcy5kcmF3QmFja2dyb3VuZCgpO1xuICAgIC8vICAgICAgICAgaWYgKHRoaXMuZW5lbWllc1swXSkge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuZHJhd0VuZW15KDApO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuZW5lbWllc1sxXSkge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuZHJhd0VuZW15KDEpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuZW5lbWllc1syXSkge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuZHJhd0VuZW15KDIpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuZW5lbWllc1szXSkge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuZHJhd0VuZW15KDMpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuZW5lbWllc1s0XSkge1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuZHJhd0VuZW15KDQpO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgICAgdGhpcy5kcmF3UGxheWVyKCk7XG4gICAgLy8gICAgICAgICB0aGlzLnBsYXllcjEubW92ZVBsYXllcigpO1xuICAgIC8vICAgICAgICAgdGhpcy5wbGF5ZXIxLmhhbmRsZVBsYXllckZyYW1lKCk7XG4gICAgLy8gICAgICAgICB0aGlzLmdlbmVyYXRlRW5lbXkoKTtcbiAgICAvLyAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUuYmluZCh0aGlzKSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG59XG5cbiIsImltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgICAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZShjYW52YXMpXG4gICAgICAgIHRoaXMucmVzdGFydCgpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XG4gICAgfVxuICAgIFxuICAgIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJyXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3RhcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5zdGFydEFuaW1hdGluZygzMCk7XG4gICAgICAgIC8vIHRoaXMuZ2FtZS5hbmltYXRlKCk7XG4gICAgfVxuXG4gICAgcmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5nYW1lLmdhbWVvdmVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ2FtZS5oZWFsdGggPSAxMDAwO1xuICAgICAgICB0aGlzLmdhbWUuZW5lbWllcyA9IFtdO1xuICAgICAgICB0aGlzLmdhbWUuc3RhcnRBbmltYXRpbmcoMzApO1xuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMueCA9IDMwMDtcbiAgICAgICAgdGhpcy55ID0gMjAwO1xuICAgICAgICB0aGlzLndpZHRoID0gMTg2O1xuICAgICAgICB0aGlzLmhlaWdodCA9IDEzMDtcbiAgICAgICAgdGhpcy54SGl0Qm94ID0gW3RoaXMueCwgdGhpcy54ICsgdGhpcy53aWR0aF07XG4gICAgICAgIHRoaXMueUhpdEJveCA9IFt0aGlzLnksIHRoaXMueSArdGhpcy5oZWlnaHRdO1xuICAgICAgICB0aGlzLmZyYW1lWCA9IDA7XG4gICAgICAgIHRoaXMuZnJhbWVZID0gMDtcbiAgICAgICAgdGhpcy5zcGVlZCA9IDEwO1xuICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxlZnRBdHRhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yaWdodEF0dGFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxBdHRhY2tYSGl0Qm94O1xuICAgICAgICB0aGlzLmxBdHRhY2tZSGl0Qm94O1xuICAgICAgICB0aGlzLnJBdHRhY2tYSGl0Qm94O1xuICAgICAgICB0aGlzLnJBdHRhY2tZSGl0Qm94O1xuICAgICAgICB0aGlzLnBsYXllclNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcIi4vc3JjL2ltYWdlcy9iaWtlMS5wbmdcIjtcbiAgICAgICAgdGhpcy5rZXlzID0gW107XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcbiAgICB9XG5cbiAgICByZWdpc3RlckV2ZW50cygpIHtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmtleXNbZS5rZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMua2V5c1tlLmtleV07XG4gICAgICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5sZWZ0QXR0YWNrID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0QXR0YWNrID0gZmFsc2U7XG4gICAgICAgIH0pXG5cblxuICAgIH1cbiBcbiAgICBcbiAgICBtb3ZlUGxheWVyKCkge1xuICAgICAgICBpZiAodGhpcy5rZXlzLncgJiYgdGhpcy55ID4gMCkgeyAgICAgICAgIC8vIG1vdmluZyB1cFxuICAgICAgICAgICAgdGhpcy55IC09IHRoaXMuc3BlZWQ7ICAgICAgICAgICAvLyBpbmNyZWFzZSBvdXIgcGxheXNlcidzIHkgcG9zIGJ5IHNwZWVkXG4gICAgICAgICAgICB0aGlzLm1vdmluZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMua2V5cy5zICYmIHRoaXMueSA8IDU1MCkgeyAgICAvLyBtb3ZpbmcgZG93blxuICAgICAgICAgICAgdGhpcy55ICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICB0aGlzLm1vdmluZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMua2V5cy5hICYmIHRoaXMueCA+IDgwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54IC09IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmtleXMuZCAmJiB0aGlzLnggPCA1ODApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnggKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmluZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMua2V5cy5xKSB7XG4gICAgICAgICAgICB0aGlzLmZyYW1lWCA9IDA7XG4gICAgICAgICAgICB0aGlzLmZyYW1lWSA9IDI7XG4gICAgICAgICAgICB0aGlzLmxlZnRBdHRhY2sgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmtleXMuZSkge1xuICAgICAgICAgICAgdGhpcy5mcmFtZVggPSAwO1xuICAgICAgICAgICAgdGhpcy5mcmFtZVkgPSAxO1xuICAgICAgICAgICAgdGhpcy5yaWdodEF0dGFjayA9IHRydWU7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVBsYXllckZyYW1lKCkge1xuICAgICAgICBpZiAodGhpcy5mcmFtZVggPCAxICYmIHRoaXMubW92aW5nKSB7XG4gICAgICAgICAgICB0aGlzLmZyYW1lWCsrXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1vdmluZ1wiKVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5yaWdodEF0dGFjayAmJiB0aGlzLmZyYW1lWSA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5mcmFtZVkgPSAwO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSIEFUVEFDS1wiKVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5sZWZ0QXR0YWNrICYmIHRoaXMuZnJhbWVZID09PSAyKSB7XG4gICAgICAgICAgICB0aGlzLmZyYW1lWSA9IDA7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkwgQVRUQUNLXCIpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZyYW1lWCA9IDBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhhbmRsZVBsYXllckF0dGFjaygpO1xuICAgIH1cblxuICAgIGhhbmRsZVBsYXllckF0dGFjaygpIHtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgaWYgKHRoaXMubGVmdEF0dGFjaykge1xuICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgIHRoaXMubEF0dGFja1hIaXRCb3ggPSBbdGhpcy54LCB0aGlzLnggKyA2NF07XG4gICAgICAgICAgICB0aGlzLmxBdHRhY2tZSGl0Qm94ID0gW3RoaXMueSwgdGhpcy55ICsgODhdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJpZ2h0QXR0YWNrKSB7XG4gICAgICAgICAgICB0aGlzLnJBdHRhY2tYSGl0Qm94ID0gW3RoaXMueCArIHRoaXMud2lkdGgsIHRoaXMueCArIDY0XTtcbiAgICAgICAgICAgIHRoaXMuckF0dGFja1lIaXRCb3ggPSBbdGhpcy55LCB0aGlzLnkgKyA4OF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmxlZnRBdHRhY2spIHtcbiAgICAgICAgICAgIHRoaXMubEF0dGFja1hIaXRCb3ggPSBbXTtcbiAgICAgICAgICAgIHRoaXMubEF0dGFja1lIaXRCb3ggPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMucmlnaHRBdHRhY2spIHtcbiAgICAgICAgICAgIHRoaXMuckF0dGFja1hIaXRCb3ggPSBbXTtcbiAgICAgICAgICAgIHRoaXMuckF0dGFja1lIaXRCb3ggPSBbXTtcbiAgICAgICAgfVxuICAgIH1cblxufSIsImNvbnN0IFV0aWwgPSB7XG5cbiAgICBiZXR3ZWVuKHgsIG1pbiwgbWF4KSB7XG4gICAgICAgIHJldHVybiB4ID49IG1pbiAmJiB4IDw9IG1heDtcbiAgICB9LFxuICAgIGNvbGxpc2lvbih1bml0MXgsIHVuaXQxeSwgdW5pdDF3LCB1bml0MWgsIHVuaXQyeCwgdW5pdDJ5LCB1bml0MncsIHVuaXQyaCkge1xuICAgICAgICBsZXQgdW5pdDFYSGl0Qm94ID0gW3VuaXQxeCwgdW5pdDF4ICsgdW5pdDF3XTtcbiAgICAgICAgbGV0IHVuaXQxWUhpdEJveCA9IFt1bml0MXksIHVuaXQxeSArIHVuaXQxaF07XG4gICAgICAgIGxldCB1bml0MlhIaXRCb3ggPSBbdW5pdDJ4LCB1bml0MnggKyB1bml0MnddO1xuICAgICAgICBsZXQgdW5pdDJZSGl0Qm94ID0gW3VuaXQyeSwgdW5pdDJ5ICsgdW5pdDJoXTtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgbGV0IHhDb2xsaXNpb24gPSBmYWxzZTtcbiAgICAgICAgbGV0IHlDb2xsaXNpb24gPSBmYWxzZTtcbiAgICAgICAgaWYgKFV0aWwuYmV0d2Vlbih1bml0MVhIaXRCb3hbMF0sIHVuaXQyWEhpdEJveFswXSwgdW5pdDJYSGl0Qm94WzFdKSB8fFxuICAgICAgICAgICAgVXRpbC5iZXR3ZWVuKHVuaXQxWEhpdEJveFsxXSwgdW5pdDJYSGl0Qm94WzBdLCB1bml0MlhIaXRCb3hbMV0pKSB7XG4gICAgICAgICAgICAgICAgeENvbGxpc2lvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJDT0xMSVNJT05YXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIGlmIChVdGlsLmJldHdlZW4odW5pdDFZSGl0Qm94WzBdLCB1bml0MllIaXRCb3hbMF0sIHVuaXQyWUhpdEJveFsxXSkgfHxcbiAgICAgICAgICAgIFV0aWwuYmV0d2Vlbih1bml0MVlIaXRCb3hbMV0sIHVuaXQyWUhpdEJveFswXSwgdW5pdDJZSGl0Qm94WzFdKSkge1xuICAgICAgICAgICAgICAgIHlDb2xsaXNpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQ09MTElTSU9OWVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICBpZiAoKHhDb2xsaXNpb24gPT09IHRydWUgJiYgeUNvbGxpc2lvbiA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkNPTExJU0lPTlwiKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGF0dGFja2VkKGF0dGFja1R5cGVYLCBhdHRhY2tUeXBlWSwgdW5pdHgsIHVuaXR5LCB1bml0dywgdW5pdGgpIHtcbiAgICAgICAgbGV0IHVuaXRYSGl0Qm94ID0gW3VuaXR4LCB1bml0eCArIHVuaXR3XTtcbiAgICAgICAgbGV0IHVuaXRZSGl0Qm94ID0gW3VuaXR5LCB1bml0eSArIHVuaXRoXTtcbiAgICAgICAgbGV0IHhBdHRhY2tlZDtcbiAgICAgICAgbGV0IHlBdHRhY2tlZDtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgaWYgKFV0aWwuYmV0d2VlbihhdHRhY2tUeXBlWFswXSwgdW5pdFhIaXRCb3hbMF0sIHVuaXRYSGl0Qm94WzFdKSB8fFxuICAgICAgICAgICAgVXRpbC5iZXR3ZWVuKGF0dGFja1R5cGVYWzFdLCB1bml0WEhpdEJveFswXSwgdW5pdFhIaXRCb3hbMV0pKSB7XG4gICAgICAgICAgICB4QXR0YWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJYIEFUVEFDS0VEXCIpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKFV0aWwuYmV0d2VlbihhdHRhY2tUeXBlWVswXSwgdW5pdFlIaXRCb3hbMF0sIHVuaXRZSGl0Qm94WzFdKSB8fFxuICAgICAgICAgICAgVXRpbC5iZXR3ZWVuKGF0dGFja1R5cGVZWzFdLCB1bml0WUhpdEJveFswXSwgdW5pdFlIaXRCb3hbMV0pKSB7XG4gICAgICAgICAgICB5QXR0YWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh4QXR0YWNrZWQgPT09IHRydWUgJiYgeUF0dGFja2VkID09PSB0cnVlKSkge1xuICAgICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU0xJQ0UhXCIpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gVXRpbCJdLCJzb3VyY2VSb290IjoiIn0=