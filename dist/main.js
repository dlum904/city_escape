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
          this.oof.play();
          this.drawUI(this.health, this.score);
        } // if (this.player1.leftAttack) {
        //     if (Util.attacked(this.player1.lAttackXHitBox, this.player1.lAttackYHitBox,
        //         currentEnemy.x, currentEnemy.y, currentEnemy.hitboxWidth, currentEnemy.hitboxHeight)) {
        //         this.slice.play();
        //         // currentEnemy.type = "damaged-crazy"
        //     }
        // }
        // if (this.player1.rightAttack) {
        //     if (Util.attacked(this.player1.rAttackXHitBox, this.player1.rAttackYHitBox,
        //         currentEnemy.x, currentEnemy.y, currentEnemy.hitboxWidth, currentEnemy.hitboxHeight)) {
        //         this.slice.play();
        //         // currentEnemy.type = "damaged-crazy"
        //     }
        // }


        if (currentEnemy.y > 650) {
          // debugger
          this.enemies.splice(enemyNum, 1); // debugger
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
      this.game.startAnimating(50);
    }
  }, {
    key: "restart",
    value: function restart() {
      this.game.gameover = false;
      this.game.health = 1000;
      this.game.enemies = []; // this.startAnimating(45);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2VuZW15LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy91dGlsLmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhc1NwbGFzaCIsImdldEVsZW1lbnRCeUlkIiwid2lkdGgiLCJoZWlnaHQiLCJjYW52YXMiLCJjYW52YXNVSSIsIm5ld0dhbWVWaWV3IiwiR2FtZVZpZXciLCJyZWdpc3RlckV2ZW50cyIsImF1ZGlvIiwic2V0VGltZW91dCIsInBsYXkiLCJFbmVteSIsImN0eCIsImVuZW15VHlwZSIsImhpdGJveFdpZHRoIiwiaGl0Ym94SGVpZ2h0IiwidHlwZSIsImVuZW15U3ByaXRlIiwiSW1hZ2UiLCJzcmMiLCJ4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwieSIsInNwZWVkIiwidHVybmluZyIsImRpcmVjdGlvbiIsImZyYW1lWSIsInhIaXRCb3giLCJ5SGl0Qm94IiwiZnJhbWVYIiwiZGVhZCIsImNvbnNvbGUiLCJsb2ciLCJVdGlsIiwicmVxdWlyZSIsIkdhbWUiLCJoZWFsdGgiLCJnYW1lb3ZlciIsImN0eFVJIiwiZ2V0Q29udGV4dCIsImN0eFNwbGFzaCIsInBsYXllcjEiLCJQbGF5ZXIiLCJrZXlzIiwidG9wTG9vcCIsImJvdHRvbUxvb3AiLCJiYWNrZ3JvdW5kIiwiZW5lbWllcyIsImZwc0ludGVydmFsIiwic3RhcnRUaW1lIiwibm93IiwidGhlbiIsImVsYXBzZWQiLCJzbGljZSIsIkF1ZGlvIiwib29mIiwic2NvcmUiLCJkcmF3SW1hZ2UiLCJwbGF5ZXJTcHJpdGUiLCJjbGVhclJlY3QiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImJlZ2luUGF0aCIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwicmVjdCIsInN0cm9rZSIsImZvbnQiLCJmaWxsVGV4dCIsInRleHRBbGlnbiIsInJhbmRvbU51bSIsImxlbmd0aCIsInJhbmRvbUVuZW15TnVtIiwicHVzaCIsImVuZW15TnVtIiwiY3VycmVudEVuZW15IiwiY29sbGlzaW9uIiwiZHJhd1VJIiwibGVmdEF0dGFjayIsImF0dGFja2VkIiwibEF0dGFja1hIaXRCb3giLCJsQXR0YWNrWUhpdEJveCIsInJpZ2h0QXR0YWNrIiwickF0dGFja1hIaXRCb3giLCJyQXR0YWNrWUhpdEJveCIsInNwbGljZSIsImJldHdlZW4iLCJyb3VuZCIsInNuYWFrZSIsImZwcyIsIkRhdGUiLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCIsImRyYXdCYWNrZ3JvdW5kIiwiaGFuZGxlUGxheWVyRnJhbWUiLCJtb3ZlUGxheWVyIiwiaSIsImRyYXdFbmVteSIsImRyYXdQbGF5ZXIiLCJnZW5lcmF0ZUVuZW15IiwiY2hlY2tHYW1lb3ZlciIsImdhbWUiLCJtdXRlZCIsIm1lbnVLZXlzIiwid2luZG93IiwiZSIsImtleSIsInJlc3RhcnQiLCJ0b2dnbGVNdXRlT24iLCJ0b2dnbGVNdXRlT2ZmIiwicGF1c2UiLCJzdGFydEFuaW1hdGluZyIsIm1vdmluZyIsInciLCJzIiwiYSIsImQiLCJoYW5kbGVQbGF5ZXJBdHRhY2siLCJtaW4iLCJtYXgiLCJ1bml0MXgiLCJ1bml0MXkiLCJ1bml0MXciLCJ1bml0MWgiLCJ1bml0MngiLCJ1bml0MnkiLCJ1bml0MnciLCJ1bml0MmgiLCJ1bml0MVhIaXRCb3giLCJ1bml0MVlIaXRCb3giLCJ1bml0MlhIaXRCb3giLCJ1bml0MllIaXRCb3giLCJ4Q29sbGlzaW9uIiwieUNvbGxpc2lvbiIsImF0dGFja1R5cGVYIiwiYXR0YWNrVHlwZVkiLCJ1bml0eCIsInVuaXR5IiwidW5pdHciLCJ1bml0aCIsInVuaXRYSGl0Qm94IiwidW5pdFlIaXRCb3giLCJ4QXR0YWNrZWQiLCJ5QXR0YWNrZWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBWTtBQUN0RCxNQUFNQyxZQUFZLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixlQUF4QixDQUFyQjtBQUNBRCxjQUFZLENBQUNFLEtBQWIsR0FBcUIsR0FBckI7QUFDQUYsY0FBWSxDQUFDRyxNQUFiLEdBQXNCLEdBQXRCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHTixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBZjtBQUNBRyxRQUFNLENBQUNGLEtBQVAsR0FBZSxHQUFmO0FBQ0FFLFFBQU0sQ0FBQ0QsTUFBUCxH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QUFDLENBQUQsQ0FBeEMsRUFBNkNBLFdBQVcsQ0FBQyxDQUFELENBQXhELEtBQ0E3RyxJQUFJLENBQUNxRCxPQUFMLENBQWFrRCxXQUFXLENBQUMsQ0FBRCxDQUF4QixFQUE2Qk0sV0FBVyxDQUFDLENBQUQsQ0FBeEMsRUFBNkNBLFdBQVcsQ0FBQyxDQUFELENBQXhELENBREosRUFDa0U7QUFDOURFLGVBQVMsR0FBRyxJQUFaO0FBRUg7O0FBQ0QsUUFBS0QsU0FBUyxLQUFLLElBQWQsSUFBc0JDLFNBQVMsS0FBSyxJQUF6QyxFQUFnRDtBQUM1QztBQUNBakgsYUFBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNBLGFBQU8sSUFBUDtBQUNILEtBSkQsTUFLSztBQUNELGFBQU8sS0FBUDtBQUNIO0FBQ0o7QUF4RFEsQ0FBYjtBQTBEQWlILE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmpILElBQWpCLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnXG5pbXBvcnQgR2FtZVZpZXcgZnJvbSAnLi9zY3JpcHRzL2dhbWVfdmlldyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjYW52YXNTcGxhc2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhcy1zcGxhc2hcIik7XG4gICAgY2FudmFzU3BsYXNoLndpZHRoID0gODQwO1xuICAgIGNhbnZhc1NwbGFzaC5oZWlnaHQgPSA2NTA7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXMtZ2FtZVwiKTtcbiAgICBjYW52YXMud2lkdGggPSA4NDA7XG4gICAgY2FudmFzLmhlaWdodCA9IDY1MDtcbiAgICBjb25zdCBjYW52YXNVSSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzLXVpXCIpO1xuICAgIGNhbnZhc1VJLndpZHRoID0gODQwO1xuICAgIGNhbnZhc1VJLmhlaWdodCA9IDY1MDtcbiAgICAvLyBjb25zdCBnYW1lMSA9IG5ldyBHYW1lKGNhbnZhcylcbiAgICBjb25zdCBuZXdHYW1lVmlldyA9IG5ldyBHYW1lVmlldyhjYW52YXMsIGNhbnZhc1NwbGFzaCwgY2FudmFzVUkpLnJlZ2lzdGVyRXZlbnRzKClcbiAgICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXVzaWNcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiBhdWRpby5wbGF5KCksIDMwMDApO1xufSlcblxuXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVteSB7XG4gICAgY29uc3RydWN0b3IoY3R4LCBlbmVteVR5cGUpIHtcbiAgICAgICAgLy8gdGhpcy54ID0gMDsgICAgICAgLy8gVE9ETyBXaWxsIGNoYW5nZSBiYXNlZCBvbiB0aGUgYXJnIHBhc3NlZCBpbnRvIGNvbnN0cnVjdG9yXG4gICAgICAgIC8vIHRoaXMueSA9IDA7XG4gICAgICAgIHRoaXMud2lkdGggPSAyNDM7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gNDgwO1xuICAgICAgICB0aGlzLmhpdGJveFdpZHRoID0gOTA7XG4gICAgICAgIHRoaXMuaGl0Ym94SGVpZ2h0ID0gMTUwO1xuICAgICAgICB0aGlzLnR5cGUgPSBlbmVteVR5cGUgLy8gVE9ETyBXaWxsIGNoYW5nZSBiYXNlZCBvbiBhIHRoZSBhcmd1bWVudCBwYXNzZWQgaW50byBjb25zdHJ1Y3RvclxuICAgICAgICB0aGlzLmVuZW15U3ByaXRlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwic3R1cGlkXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVteVNwcml0ZS5zcmMgPSBcIi4vc3JjL2ltYWdlcy9jYXIxLnBuZ1wiXG4gICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDU1MCAtIDEyMCkgKyAxMjApXG4gICAgICAgICAgICAgICAgdGhpcy55ID0gLTEwMDtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gMztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjcmF6eVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlTcHJpdGUuc3JjID0gXCIuL3NyYy9pbWFnZXMvY2FyMi5wbmdcIlxuICAgICAgICAgICAgICAgIHRoaXMueCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg1NTAgLSAxMjApICsgMTIwKVxuICAgICAgICAgICAgICAgIHRoaXMueSA9IDY1MDtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5pbmcgPSA0O1xuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgPSA2O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInR1cnRsZVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlTcHJpdGUuc3JjID0gXCIuL3NyYy9pbWFnZXMvdHVydGxlLnBuZ1wiXG4gICAgICAgICAgICAgICAgdGhpcy54ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDU1MCAtIDEyMCkgKyAxMjApXG4gICAgICAgICAgICAgICAgdGhpcy55ID0gNjUwO1xuICAgICAgICAgICAgICAgIHRoaXMudHVybmluZyA9IDQ7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDY7XG4gICAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IDUwO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gNTM7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lWSA9IDA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgdGhpcy54SGl0Qm94ID0gW3RoaXMueCwgdGhpcy54ICsgdGhpcy5oaXRib3hXaWR0aF07XG4gICAgICAgIHRoaXMueUhpdEJveCA9IFt0aGlzLnksIHRoaXMueSArIHRoaXMuaGl0Ym94SGVpZ2h0XTtcbiAgICAgICAgLy8gdGhpcy5keWluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZyYW1lWCA9IDBcbiAgICAgICAgdGhpcy5kZWFkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2F5SGVsbG8oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSGVsbG9cIilcbiAgICB9XG4gICAgLy8gaGFuZGxlRW5lbXlGcmFtZSgpIHtcbiAgICAvLyAgICAgZGVidWdnZXJcbiAgICAvLyAgICAgaWYgKHRoaXMudHlwZSA9PT0gXCJkYW1hZ2VkLWNyYXp5XCIpIHtcbiAgICAvLyAgICAgICAgIHRoaXMuZnJhbWVYKz0gMC4xXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKHRoaXMuZnJhbWVYID4gNCkge1xuICAgIC8vICAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbn0iLCJpbXBvcnQgRW5lbXkgZnJvbSBcIi4vZW5lbXlcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5jb25zdCBVdGlsID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKGNhbnZhcywgY2FudmFzU3BsYXNoLCBjYW52YXNVSSkge1xuICAgICAgICB0aGlzLmhlYWx0aCA9IDEwMDA7XG4gICAgICAgIHRoaXMuZ2FtZW92ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jdHhVSSA9IGNhbnZhc1VJLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmN0eFNwbGFzaCA9IGNhbnZhc1NwbGFzaC5nZXRDb250ZXh0KFwiMmRcIilcbiAgICAgICAgdGhpcy5wbGF5ZXIxID0gbmV3IFBsYXllcigpO1xuICAgICAgICB0aGlzLndpZHRoID0gY2FudmFzLndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMua2V5cyA9IFtdO1xuICAgICAgICB0aGlzLnRvcExvb3AgPSAtY2FudmFzLmhlaWdodDtcbiAgICAgICAgdGhpcy5ib3R0b21Mb29wID0gMDtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gbmV3IEltYWdlKClcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL2JhY2tncm91bmQtMS5wbmdcIjtcbiAgICAgICAgdGhpcy5lbmVtaWVzID0gW107IC8vIGNvbnRhaW5zIGVuZW1pZXMgY3VycmVudGx5IG9uIHNjcmVlbiwgc2hvd24gYXMgZW5lbXkudHlwZVxuICAgICAgICB0aGlzLmZwc0ludGVydmFsO1xuICAgICAgICB0aGlzLnN0YXJ0VGltZTtcbiAgICAgICAgdGhpcy5ub3c7XG4gICAgICAgIHRoaXMudGhlbjtcbiAgICAgICAgdGhpcy5lbGFwc2VkO1xuICAgICAgICB0aGlzLnNsaWNlID0gbmV3IEF1ZGlvKCcuL3NyYy9hdWRpby9zbGljZS5tcDMnKVxuICAgICAgICB0aGlzLm9vZiA9IG5ldyBBdWRpbygnLi9zcmMvYXVkaW8vb29mLm1wMycpXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgICAgICAvLyB0aGlzLmRyYXdCYWNrZ3JvdW5kKCk7XG4gICAgICAgIC8vIHRoaXMuZHJhd1BsYXllcigpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBkcmF3QmFja2dyb3VuZCgpIHtcbiAgICAgICAgLy9ib3R0b20gaGFsZiBvZiB0aGUgYmFja2dyb3VuZFxuICAgICAgICB0aGlzLmN0eFNwbGFzaC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmQsIDAsIDAsXG4gICAgICAgICAgICB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCxcbiAgICAgICAgICAgIDAsIHRoaXMuYm90dG9tTG9vcCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHRcbiAgICAgICAgKVxuICAgICAgICB0aGlzLmJvdHRvbUxvb3AgKz0gMTA7XG4gICAgICAgIGlmICh0aGlzLmJvdHRvbUxvb3AgPT09IHRoaXMuaGVpZ2h0KSB0aGlzLmJvdHRvbUxvb3AgPSAtdGhpcy5oZWlnaHQ7XG4gICAgICAgIC8vdG9wIGhhbGYgb2YgdGhlIGJhY2tncm91bmRcbiAgICAgICAgdGhpcy5jdHhTcGxhc2guZHJhd0ltYWdlKFxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLCAwLCAwLFxuICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICAwLCB0aGlzLnRvcExvb3AsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0XG4gICAgICAgIClcbiAgICAgICAgdGhpcy50b3BMb29wICs9IDEwO1xuICAgICAgICBpZiAodGhpcy50b3BMb29wID09PSB0aGlzLmhlaWdodCkgdGhpcy50b3BMb29wID0gLXRoaXMuaGVpZ2h0O1xuICAgIH1cblxuICAgIGRyYXdQbGF5ZXIoKSB7XG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgIHRoaXMucGxheWVyMS5wbGF5ZXJTcHJpdGUsIHRoaXMucGxheWVyMS53aWR0aCAqIHRoaXMucGxheWVyMS5mcmFtZVgsIHRoaXMucGxheWVyMS5oZWlnaHQgKiB0aGlzLnBsYXllcjEuZnJhbWVZLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdoZXJlIHdlIGNyb3Agb3V0IHRoZSBpbWFnZSBmb3Igc3ByaXRlXG4gICAgICAgICAgICB0aGlzLnBsYXllcjEud2lkdGgsIHRoaXMucGxheWVyMS5oZWlnaHQsIHRoaXMucGxheWVyMS54LCB0aGlzLnBsYXllcjEueSwgICAgLy8gd2hlcmUgdGhlIGltYWdlIHdpbGwgYmUgYW5pbWF0ZWQgb24gY2FudmFzXG4gICAgICAgICAgICB0aGlzLnBsYXllcjEud2lkdGgsIHRoaXMucGxheWVyMS5oZWlnaHRcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBkcmF3VUkoaGVhbHRoLCBzY29yZSkge1xuICAgICAgICAvLyBpbml0aWFsIGhlYWx0aFxuICAgICAgICB0aGlzLmN0eFVJLmNsZWFyUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcblxuICAgICAgICB0aGlzLmN0eFVJLmZpbGxTdHlsZSA9IFwicmVkXCJcbiAgICAgICAgdGhpcy5jdHhVSS5maWxsUmVjdCgxMCwgMzAsIDI1MCwgMTApXG5cbiAgICAgICAgdGhpcy5jdHhVSS5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHhVSS5saW5lV2lkdGggPSBcIjNcIjtcbiAgICAgICAgdGhpcy5jdHhVSS5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgdGhpcy5jdHhVSS5yZWN0KDksIDI5LCAyNTIsIDEyKVxuICAgICAgICB0aGlzLmN0eFVJLnN0cm9rZSgpO1xuXG4gICAgICAgIC8vIHlvdXIgYWN0dWFsIGhlYWx0aFxuICAgICAgICBpZiAoaGVhbHRoIDwgKDcwMCkpIHtcbiAgICAgICAgICAgIHRoaXMuY3R4VUkuZmlsbFN0eWxlID0gXCJ5ZWxsb3dcIlxuICAgICAgICAgICAgdGhpcy5jdHhVSS5maWxsUmVjdCgxMCwgMzAsIGhlYWx0aCAvIDQsIDEwKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdHhVSS5maWxsU3R5bGUgPSBcImdyZWVuXCJcbiAgICAgICAgICAgIHRoaXMuY3R4VUkuZmlsbFJlY3QoMTAsIDMwLCBoZWFsdGggLyA0LCAxMClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRleHRcbiAgICAgICAgdGhpcy5jdHhVSS5mb250ID0gXCI0MHB4IEFSQ0FERUNMQVNTSUNcIlxuICAgICAgICB0aGlzLmN0eFVJLmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgdGhpcy5jdHhVSS5maWxsVGV4dChcIkhQXCIsIDEwLCAyNylcblxuICAgICAgICBpZiAoaGVhbHRoIDwgMTAwKSB7XG4gICAgICAgICAgICB0aGlzLmN0eFVJLmZvbnQgPSBcIjQwcHggQVJDQURFQ0xBU1NJQ1wiXG4gICAgICAgICAgICB0aGlzLmN0eFVJLmZpbGxTdHlsZSA9IFwicmVkXCI7XG4gICAgICAgICAgICB0aGlzLmN0eFVJLmZpbGxUZXh0KGAke2hlYWx0aH0vIDEwMDBgLCA4MCwgMjcpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaGVhbHRoIDwgNzAwKSB7XG4gICAgICAgICAgICB0aGlzLmN0eFVJLmZvbnQgPSBcIjQwcHggQVJDQURFQ0xBU1NJQ1wiXG4gICAgICAgICAgICB0aGlzLmN0eFVJLmZpbGxTdHlsZSA9IFwieWVsbG93XCI7XG4gICAgICAgICAgICB0aGlzLmN0eFVJLmZpbGxUZXh0KGAke2hlYWx0aH0vIDEwMDBgLCA4MCwgMjcpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN0eFVJLmZvbnQgPSBcIjQwcHggQVJDQURFQ0xBU1NJQ1wiXG4gICAgICAgICAgICB0aGlzLmN0eFVJLmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4VUkuZmlsbFRleHQoYCR7aGVhbHRofS8gMTAwMGAsIDgwLCAyNylcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3R4VUkuZm9udCA9IFwiMjVweCBBUkNBREVDTEFTU0lDXCJcbiAgICAgICAgdGhpcy5jdHhVSS5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgIHRoaXMuY3R4VUkudGV4dEFsaWduID0gXCJzdGFydFwiO1xuICAgICAgICB0aGlzLmN0eFVJLmZpbGxUZXh0KGAke3Njb3JlfWAsIDc1MCwgMjApXG4gICAgfVxuXG4gICAgZ2VuZXJhdGVFbmVteSgpIHtcbiAgICAgICAgLy8gbG9naWMgZm9yIHdoZW4gdG8gZ2VuZXJhdGUgYW4gZW5lbXkuICB3aWxsIHB1c2ggaW50byB0aGlzLmVuZW1pZXNcbiAgICAgICAgY29uc3QgcmFuZG9tTnVtID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDcwKSk7XG4gICAgICAgIGlmICh0aGlzLmVuZW1pZXMubGVuZ3RoIDwgNSAmJiByYW5kb21OdW0gPT09IDUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2VuZXJhdGluZyBlbmVteVwiKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCByYW5kb21FbmVteU51bSA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAxMDApKVxuICAgICAgICAgICAgbGV0IGVuZW15VHlwZVxuICAgICAgICAgICAgaWYgKHJhbmRvbUVuZW15TnVtID4gODApIHtcbiAgICAgICAgICAgICAgICBlbmVteVR5cGUgPSBcInR1cnRsZVwiO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIGlmIChlbmVteVR5cGUgIT09IFwidHVydGxlXCIpIHtcblxuICAgICAgICAgICAgICAgIGlmIChyYW5kb21FbmVteU51bSA8PSA1MCkge1xuICAgICAgICAgICAgICAgICAgICBlbmVteVR5cGUgPSBcInN0dXBpZFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHggPj0gbWluICYmIHggPD0gbWF4O1xuICAgICAgICAgICAgICAgIC8vIGVsc2UgaWYgKHJhbmRvbUVuZW15TnVtID4gMTAgJiYgcmFuZG9tRW5lbXlOdW0gPCA1MCApIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgZW5lbXlUeXBlID0gXCJjcmF6eVwiXG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbmVteVR5cGUgPSBcImNyYXp5XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlbmVteVR5cGUpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbmVteVR5cGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW1pZXMucHVzaChuZXcgRW5lbXkodGhpcy5jdHgsIGVuZW15VHlwZSkpOyAgIC8vIFRPRE86IHJhbmRvbWx5IGNob29zZSB0aGUgdHlwZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZHJhd0VuZW15KGVuZW15TnVtKSB7ICAgICAgICAgICAvL1RPRE86IFJFRkFDVE9SIFRPIEEgU1dJVENIIENBU0VcbiAgICAgICAgbGV0IGN1cnJlbnRFbmVteSA9IHRoaXMuZW5lbWllc1tlbmVteU51bV07XG4gICAgICAgIC8vIEFOSU1BVElORyBUSEUgU1RVUElEIEVORU1ZXG4gICAgICAgIGlmIChjdXJyZW50RW5lbXkudHlwZSA9PT0gXCJzdHVwaWRcIikge1xuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS5lbmVteVNwcml0ZSwgMCwgMCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkud2lkdGgsIGN1cnJlbnRFbmVteS5oZWlnaHQsIGN1cnJlbnRFbmVteS54ICwgY3VycmVudEVuZW15LnksXG4gICAgICAgICAgICAgICAgOTAsIDE1MFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGN1cnJlbnRFbmVteS55ICs9IGN1cnJlbnRFbmVteS5zcGVlZDtcbiAgICAgICAgICAgIGlmIChVdGlsLmNvbGxpc2lvbih0aGlzLnBsYXllcjEueCArIDc0LCB0aGlzLnBsYXllcjEueSArIDE2LCAzOCwgODAsXG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LngsIGN1cnJlbnRFbmVteS55LCBjdXJyZW50RW5lbXkuaGl0Ym94V2lkdGgsIGN1cnJlbnRFbmVteS5oaXRib3hIZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhbHRoIC09IDE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub29mLnBsYXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdVSSh0aGlzLmhlYWx0aCwgdGhpcy5zY29yZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaGVhbHRoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIxLmxlZnRBdHRhY2spIHtcbiAgICAgICAgICAgICAgICBpZiAoVXRpbC5hdHRhY2tlZCh0aGlzLnBsYXllcjEubEF0dGFja1hIaXRCb3gsIHRoaXMucGxheWVyMS5sQXR0YWNrWUhpdEJveCxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LngsIGN1cnJlbnRFbmVteS55LCBjdXJyZW50RW5lbXkuaGl0Ym94V2lkdGgsIGN1cnJlbnRFbmVteS5oaXRib3hIZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNsaWNlLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS50eXBlID0gXCJkYW1hZ2VkLXN0dXBpZFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllcjEucmlnaHRBdHRhY2spIHtcbiAgICAgICAgICAgICAgICBpZiAoVXRpbC5hdHRhY2tlZCh0aGlzLnBsYXllcjEuckF0dGFja1hIaXRCb3gsIHRoaXMucGxheWVyMS5yQXR0YWNrWUhpdEJveCxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LngsIGN1cnJlbnRFbmVteS55LCBjdXJyZW50RW5lbXkuaGl0Ym94V2lkdGgsIGN1cnJlbnRFbmVteS5oaXRib3hIZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNsaWNlLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS50eXBlID0gXCJkYW1hZ2VkLXN0dXBpZFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjdXJyZW50RW5lbXkueSA+IHRoaXMuaGVpZ2h0ICYmIGN1cnJlbnRFbmVteS50eXBlID09PVwic3R1cGlkXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW1pZXMuc3BsaWNlKGVuZW15TnVtLCAxKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9BTklNQVRJTkcgVEhFIENSQVpZIEVORU1ZXG4gICAgICAgIGlmIChjdXJyZW50RW5lbXkudHlwZSA9PT0gXCJjcmF6eVwiKSB7XG4gICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LmVuZW15U3ByaXRlLCAwLCAwLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS53aWR0aCwgY3VycmVudEVuZW15LmhlaWdodCwgY3VycmVudEVuZW15LngsIGN1cnJlbnRFbmVteS55LFxuICAgICAgICAgICAgICAgIDkwLCAxNTBcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIxLnggKyAyMCAgPiBjdXJyZW50RW5lbXkueCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS54ICs9IGN1cnJlbnRFbmVteS50dXJuaW5nO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS55IC09IGN1cnJlbnRFbmVteS5zcGVlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKFV0aWwuYmV0d2Vlbih0aGlzLnBsYXllcjEueCArIDIwLCBjdXJyZW50RW5lbXkueCwgY3VycmVudEVuZW15LnggKyAyMCkpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueSAtPSAxMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS54IC09IGN1cnJlbnRFbmVteS50dXJuaW5nO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS55IC09IGN1cnJlbnRFbmVteS5zcGVlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChVdGlsLmNvbGxpc2lvbih0aGlzLnBsYXllcjEueCArIDc0LCB0aGlzLnBsYXllcjEueSArIDE2LCAzOCwgODAsXG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LngsIGN1cnJlbnRFbmVteS55LCBjdXJyZW50RW5lbXkuaGl0Ym94V2lkdGgsIGN1cnJlbnRFbmVteS5oaXRib3hIZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGVhbHRoIC09IDU7XG4gICAgICAgICAgICAgICAgdGhpcy5vb2YucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdVSSh0aGlzLmhlYWx0aCx0aGlzLnNjb3JlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIxLmxlZnRBdHRhY2spIHtcbiAgICAgICAgICAgICAgICBpZiAoVXRpbC5hdHRhY2tlZCh0aGlzLnBsYXllcjEubEF0dGFja1hIaXRCb3gsIHRoaXMucGxheWVyMS5sQXR0YWNrWUhpdEJveCxcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LngsIGN1cnJlbnRFbmVteS55LCBjdXJyZW50RW5lbXkuaGl0Ym94V2lkdGgsIGN1cnJlbnRFbmVteS5oaXRib3hIZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNsaWNlLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS50eXBlID0gXCJkYW1hZ2VkLWNyYXp5XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5ZXIxLnJpZ2h0QXR0YWNrKSB7XG4gICAgICAgICAgICAgICAgaWYgKFV0aWwuYXR0YWNrZWQodGhpcy5wbGF5ZXIxLnJBdHRhY2tYSGl0Qm94LCB0aGlzLnBsYXllcjEuckF0dGFja1lIaXRCb3gsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSwgY3VycmVudEVuZW15LmhpdGJveFdpZHRoLCBjdXJyZW50RW5lbXkuaGl0Ym94SGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zbGljZS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkudHlwZSA9IFwiZGFtYWdlZC1jcmF6eVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjdXJyZW50RW5lbXkueSA8IC0xNTAgJiYgY3VycmVudEVuZW15LnR5cGUgPT09IFwiY3JhenlcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5lbWllcy5zcGxpY2UoZW5lbXlOdW0sIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBNSUNIQUVMQU5HRUxPISEhXG4gICAgICAgIGlmIChjdXJyZW50RW5lbXkudHlwZSA9PT0gXCJ0dXJ0bGVcIikge1xuICAgICAgICAgICAgLy8gaWYgKGN1cnJlbnRFbmVteS55ID4gNjUwKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ3b3dvd29vb1wiKVxuICAgICAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5lbmVtaWVzLnNwbGljZShlbmVteU51bSwgMSlcbiAgICAgICAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgc3dpdGNoIChjdXJyZW50RW5lbXkuZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS5lbmVteVNwcml0ZSwgY3VycmVudEVuZW15LndpZHRoICogY3VycmVudEVuZW15LmZyYW1lWCwgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS53aWR0aCwgY3VycmVudEVuZW15LmhlaWdodCwgY3VycmVudEVuZW15LngsIGN1cnJlbnRFbmVteS55LFxuICAgICAgICAgICAgICAgICAgICAgICAgNzUsIDc1XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS54ICs9IDEyO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueSAtPSA0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkuZW5lbXlTcHJpdGUsIGN1cnJlbnRFbmVteS53aWR0aCAqIGN1cnJlbnRFbmVteS5mcmFtZVgsIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkud2lkdGgsIGN1cnJlbnRFbmVteS5oZWlnaHQsIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDc1LCA3NVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkueCAtPSAxMjtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LnkgLT0gNDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImRvd25cIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LmVuZW15U3ByaXRlLCA0OCwgNTUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkud2lkdGgsIGN1cnJlbnRFbmVteS5oZWlnaHQsIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDc1LCAxNTRcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEVuZW15LnkgKz0gNjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRFbmVteS5mcmFtZVggPCAxKSBjdXJyZW50RW5lbXkuZnJhbWVYICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmIChjdXJyZW50RW5lbXkuZGlyZWN0aW9uID09PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIGlmIChjdXJyZW50RW5lbXkuZGlyZWN0aW9uID09PSBcImxlZnRcIikge1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50RW5lbXkueCA8PSA4MCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS5mcmFtZVggPSAwO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS5kaXJlY3Rpb24gPSBcInJpZ2h0XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY3VycmVudEVuZW15LnggPj0gNTgwKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LmZyYW1lWCA9IDE7XG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LmRpcmVjdGlvbiA9IFwibGVmdFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGN1cnJlbnRFbmVteS55IDw9IDUwKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LmRpcmVjdGlvbiA9IFwiZG93blwiXG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LndpZHRoID0gNDE7XG4gICAgICAgICAgICAgICAgY3VycmVudEVuZW15LmhlaWdodCA9IDg2O1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS5mcmFtZVggPSAwO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS5mcmFtZVkgPSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoVXRpbC5jb2xsaXNpb24odGhpcy5wbGF5ZXIxLnggKyA3NCwgdGhpcy5wbGF5ZXIxLnkgKyAxNiwgMzgsIDgwLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSwgNTAsIDUzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGVhbHRoIC09IDEwO1xuICAgICAgICAgICAgICAgIHRoaXMub29mLnBsYXkoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdVSSh0aGlzLmhlYWx0aCwgdGhpcy5zY29yZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiAodGhpcy5wbGF5ZXIxLmxlZnRBdHRhY2spIHtcbiAgICAgICAgICAgIC8vICAgICBpZiAoVXRpbC5hdHRhY2tlZCh0aGlzLnBsYXllcjEubEF0dGFja1hIaXRCb3gsIHRoaXMucGxheWVyMS5sQXR0YWNrWUhpdEJveCxcbiAgICAgICAgICAgIC8vICAgICAgICAgY3VycmVudEVuZW15LngsIGN1cnJlbnRFbmVteS55LCBjdXJyZW50RW5lbXkuaGl0Ym94V2lkdGgsIGN1cnJlbnRFbmVteS5oaXRib3hIZWlnaHQpKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuc2xpY2UucGxheSgpO1xuICAgICAgICAgICAgLy8gICAgICAgICAvLyBjdXJyZW50RW5lbXkudHlwZSA9IFwiZGFtYWdlZC1jcmF6eVwiXG4gICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAvLyBpZiAodGhpcy5wbGF5ZXIxLnJpZ2h0QXR0YWNrKSB7XG4gICAgICAgICAgICAvLyAgICAgaWYgKFV0aWwuYXR0YWNrZWQodGhpcy5wbGF5ZXIxLnJBdHRhY2tYSGl0Qm94LCB0aGlzLnBsYXllcjEuckF0dGFja1lIaXRCb3gsXG4gICAgICAgICAgICAvLyAgICAgICAgIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSwgY3VycmVudEVuZW15LmhpdGJveFdpZHRoLCBjdXJyZW50RW5lbXkuaGl0Ym94SGVpZ2h0KSkge1xuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLnNsaWNlLnBsYXkoKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgLy8gY3VycmVudEVuZW15LnR5cGUgPSBcImRhbWFnZWQtY3JhenlcIlxuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIGlmIChjdXJyZW50RW5lbXkueSA+IDY1MCkge1xuICAgICAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnNwbGljZShlbmVteU51bSwgMSlcbiAgICAgICAgICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gREFNQUdFRCBFTkVNSUVTXG4gICAgIFxuICAgICAgICBpZiAoY3VycmVudEVuZW15LnR5cGUgPT09IFwiZGFtYWdlZC1zdHVwaWRcIikge1xuXG4gICAgICAgICAgICBjdXJyZW50RW5lbXkuZW5lbXlTcHJpdGUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIGN1cnJlbnRFbmVteS5lbmVteVNwcml0ZS5zcmMgPSBcIi4vc3JjL2ltYWdlcy9jYXIxLWR5aW5nLnBuZ1wiXG4gIFxuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS5lbmVteVNwcml0ZSwgTWF0aC5yb3VuZChjdXJyZW50RW5lbXkuZnJhbWVYKSAqIGN1cnJlbnRFbmVteS53aWR0aCwgMCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkud2lkdGgsIGN1cnJlbnRFbmVteS5oZWlnaHQsIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSwgICAgLy9UT0RPIGZyYW1lc3NzXG4gICAgICAgICAgICAgICAgOTAsIDE1MFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGN1cnJlbnRFbmVteS55ICs9IDQ7XG4gICAgICAgICAgICBjdXJyZW50RW5lbXkuZnJhbWVYICs9IDAuMVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoY3VycmVudEVuZW15LmZyYW1lWCA+IDQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW1pZXMuc3BsaWNlKGVuZW15TnVtLCAxKVxuICAgICAgICAgICAgICAgIHRoaXMuc2NvcmUgKz0gMTAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudEVuZW15LnR5cGUgPT09IFwiZGFtYWdlZC1jcmF6eVwiKSB7XG5cbiAgICAgICAgICAgIGN1cnJlbnRFbmVteS5lbmVteVNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgY3VycmVudEVuZW15LmVuZW15U3ByaXRlLnNyYyA9IFwiLi9zcmMvaW1hZ2VzL2NhcjItZHlpbmcucG5nXCJcblxuICAgICAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbmVteS5lbmVteVNwcml0ZSwgTWF0aC5yb3VuZChjdXJyZW50RW5lbXkuZnJhbWVYKSAqIGN1cnJlbnRFbmVteS53aWR0aCwgMCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RW5lbXkud2lkdGgsIGN1cnJlbnRFbmVteS5oZWlnaHQsIGN1cnJlbnRFbmVteS54LCBjdXJyZW50RW5lbXkueSwgICAgLy9UT0RPIGZyYW1lc3NzXG4gICAgICAgICAgICAgICAgOTAsIDE1MFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGN1cnJlbnRFbmVteS55ICs9IDQ7XG4gICAgICAgICAgICBjdXJyZW50RW5lbXkuZnJhbWVYICs9IDAuMVxuICAgICAgICAgICAgaWYgKGN1cnJlbnRFbmVteS5mcmFtZVggPiA0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnNwbGljZShlbmVteU51bSwgMSlcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3JlICs9IDUwMFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNoZWNrR2FtZW92ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmhlYWx0aCA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVvdmVyID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiODBweCBBUkNBREVDTEFTU0lDXCJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KFwiR0FNRSBPVkVSXCIsIDI0NSwgMzAwKVxuXG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyMHB4IEFSQ0FERUNMQVNTSUNcIlxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoYFNDT1JFOiAke3RoaXMuc2NvcmV9YCAsIDI0NSwgMzUwKVxuXG4gICAgICAgICAgICBpZiAodGhpcy5zY29yZSA8PSAxMDAwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZvbnQgPSBcIjIwcHggQVJDQURFQ0xBU1NJQ1wiXG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxUZXh0KGBSQU5LOiBOT09CYCwgNTAwLCAzNTApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNjb3JlIDw9IDIwMDAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZm9udCA9IFwiMjBweCBBUkNBREVDTEFTU0lDXCJcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoYFJBTks6IFRXSU5LTEUgIFRPRVNgLCA1MDAsIDM1MClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc2NvcmUgPD0gNTAwMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCIyMHB4IEFSQ0FERUNMQVNTSUNcIlxuICAgICAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChgUkFOSzogRklOSVNIRUQgU1RST05HIWAsIDUwMCwgMzUwKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmN0eC5mb250ID0gXCI0MHB4IEFSQ0FERUNMQVNTSUNcIlxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFRleHQoXCJQUkVTUyAgRU5URVIgIFRPICBSRVNUQVJUXCIsIDIwMCwgNDAwKVxuXG4gICAgICAgICAgICBjb25zdCBzbmFha2UgPSBuZXcgQXVkaW8oJy4vc3JjL2F1ZGlvL0dhbWVvdmVyLm1wMycpXG4gICAgICAgICAgICBzbmFha2UucGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnRBbmltYXRpbmcoZnBzKSB7XG4gICAgICAgIHRoaXMuZnBzSW50ZXJ2YWwgPSAxMDAwIC8gZnBzO1xuICAgICAgICB0aGlzLnRoZW4gPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IHRoaXMudGhlbjtcbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfVxuXG4gICAgYW5pbWF0ZSgpIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5ub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLm5vdyAtIHRoaXMudGhlbjtcbiAgICAgICAgaWYgKHRoaXMuZWxhcHNlZCA+IHRoaXMuZnBzSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIHRoaXMudGhlbiA9IHRoaXMubm93IC0gKHRoaXMuZWxhcHNlZCAlIHRoaXMuZnBzSW50ZXJ2YWwpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmRyYXdVSSh0aGlzLmhlYWx0aCwgdGhpcy5zY29yZSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCF0aGlzLmdhbWVvdmVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0JhY2tncm91bmQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcjEuaGFuZGxlUGxheWVyRnJhbWUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcjEubW92ZVBsYXllcigpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lbmVtaWVzLmxlbmd0aDsgaSsrICkgdGhpcy5kcmF3RW5lbXkoaSlcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3JlICs9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3UGxheWVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZUVuZW15KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0dhbWVvdmVyKCk7XG4gICAgICAgICAgICAgICAgLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHN0YXJ0QW5pbWF0aW5nKGZwcykge1xuICAgIC8vICAgICB0aGlzLmZwc0ludGVydmFsID0gMTAwMCAvIGZwcztcbiAgICAvLyAgICAgdGhpcy50aGVuID0gRGF0ZS5ub3coKTtcbiAgICAvLyAgICAgdGhpcy5zdGFydFRpbWUgPSB0aGlzLnRoZW47XG4gICAgLy8gICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgIC8vIH1cbiAgICAvLyBhbmltYXRlKCkge1xuICAgIC8vICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xuICAgIC8vICAgICB0aGlzLm5vdyA9IERhdGUubm93KCk7XG4gICAgLy8gICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMubm93IC0gdGhpcy50aGVuO1xuICAgIC8vICAgICBpZiAodGhpcy5lbGFwc2VkID4gdGhpcy5mcHNJbnRlcnZhbCkge1xuICAgIC8vICAgICAgICAgdGhpcy50aGVuID0gdGhpcy5ub3cgLSAodGhpcy5lbGFwc2VkICUgdGhpcy5mcHNJbnRlcnZhbCk7XG4gICAgLy8gICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgLy8gICAgICAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKCk7XG4gICAgLy8gICAgICAgICBpZiAodGhpcy5lbmVtaWVzWzBdKSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5kcmF3RW5lbXkoMCk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBpZiAodGhpcy5lbmVtaWVzWzFdKSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5kcmF3RW5lbXkoMSk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBpZiAodGhpcy5lbmVtaWVzWzJdKSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5kcmF3RW5lbXkoMik7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBpZiAodGhpcy5lbmVtaWVzWzNdKSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5kcmF3RW5lbXkoMyk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBpZiAodGhpcy5lbmVtaWVzWzRdKSB7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5kcmF3RW5lbXkoNCk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICB0aGlzLmRyYXdQbGF5ZXIoKTtcbiAgICAvLyAgICAgICAgIHRoaXMucGxheWVyMS5tb3ZlUGxheWVyKCk7XG4gICAgLy8gICAgICAgICB0aGlzLnBsYXllcjEuaGFuZGxlUGxheWVyRnJhbWUoKTtcbiAgICAvLyAgICAgICAgIHRoaXMuZ2VuZXJhdGVFbmVteSgpO1xuICAgIC8vICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpKTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbn1cblxuIiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vZ2FtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVmlldyB7XG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjYW52YXNTcGxhc2gsIGNhbnZhc1VJKSB7XG4gICAgICAgIC8vIHRoaXMuY3R4VUkgPSBjYW52YXNVSS5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIHRoaXMuZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcywgY2FudmFzU3BsYXNoLCBjYW52YXNVSSlcbiAgICAgICAgdGhpcy5jdHhTcGxhc2ggPSBjYW52YXNTcGxhc2guZ2V0Q29udGV4dChcIjJkXCIpXG4gICAgICAgIHRoaXMud2lkdGggPSBjYW52YXNTcGxhc2gud2lkdGg7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gY2FudmFzU3BsYXNoLmhlaWdodDtcbiAgICAgICAgdGhpcy50b3BMb29wID0gLWNhbnZhc1NwbGFzaC5oZWlnaHQ7XG4gICAgICAgIHRoaXMuYm90dG9tTG9vcCA9IDA7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5zcmMgPSBcIi4vc3JjL2ltYWdlcy9iYWNrZ3JvdW5kLTEucG5nXCI7XG4gICAgICAgIC8vIHRoaXMuZnBzSW50ZXJ2YWw7XG4gICAgICAgIC8vIHRoaXMuc3RhcnRUaW1lO1xuICAgICAgICAvLyB0aGlzLm5vdztcbiAgICAgICAgLy8gdGhpcy50aGVuO1xuICAgICAgICAvLyB0aGlzLmVsYXBzZWQ7XG4gICAgICAgIHRoaXMubXV0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXVzaWNcIik7XG4gICAgICAgIHRoaXMubWVudUtleXMgPSBbXVxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XG4gICAgfVxuICAgIFxuICAgIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiblwiICYmIHRoaXMubXV0ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVNdXRlT24oKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZS5rZXkgPT09IFwibVwiICYmIHRoaXMubXV0ZWQgPT09IHRydWUgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVNdXRlT2ZmKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIChlLmtleSA9PT0gXCJtXCIpXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5tdXRlZCA/IHRoaXMudG9nZ2xlTXV0ZU9mZigpIDogdGhpcy50b2dnbGVNdXRlT2ZmKCk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuICAgIHRvZ2dsZU11dGVPbigpIHtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgaWYgKHRoaXMubXV0ZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm11dGVcIilcbiAgICAgICAgICAgICAgICB0aGlzLm11dGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmF1ZGlvLnBhdXNlKClcbiAgICAgICAgfVxuICAgIH1cbiAgICB0b2dnbGVNdXRlT2ZmKCkge1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICBjb25zb2xlLmxvZyhcInVubXV0ZVwiKVxuICAgICAgICAgICAgdGhpcy5tdXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5hdWRpby5wbGF5KCk7XG4gICAgfVxuXG4gICAgZHJhd1N0YXRpY0JhY2tncm91bmQoKSB7XG4gICAgICAgIC8vYm90dG9tIGhhbGYgb2YgdGhlIGJhY2tncm91bmRcbiAgICAgICAgdGhpcy5jdHhTcGxhc2guZHJhd0ltYWdlKFxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLCAwLCAwLFxuICAgICAgICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICAwLCB0aGlzLmJvdHRvbUxvb3AsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0XG4gICAgICAgIClcbiAgICAgICAgLy8gdGhpcy5ib3R0b21Mb29wICs9IDEwO1xuICAgICAgICAvLyBpZiAodGhpcy5ib3R0b21Mb29wID09PSB0aGlzLmhlaWdodCkgdGhpcy5ib3R0b21Mb29wID0gLXRoaXMuaGVpZ2h0O1xuICAgICAgICAvLyAvL3RvcCBoYWxmIG9mIHRoZSBiYWNrZ3JvdW5kXG4gICAgICAgIC8vIHRoaXMuY3R4U3BsYXNoLmRyYXdJbWFnZShcbiAgICAgICAgLy8gICAgIHRoaXMuYmFja2dyb3VuZCwgMCwgMCxcbiAgICAgICAgLy8gICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LFxuICAgICAgICAvLyAgICAgMCwgdGhpcy50b3BMb29wLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodFxuICAgICAgICAvLyApXG4gICAgICAgIC8vIHRoaXMudG9wTG9vcCArPSAxMDtcbiAgICAgICAgLy8gaWYgKHRoaXMudG9wTG9vcCA9PT0gdGhpcy5oZWlnaHQpIHRoaXMudG9wTG9vcCA9IC10aGlzLmhlaWdodDtcbiAgICB9XG5cbiAgICAvLyBzdGFydEFuaW1hdGluZyhmcHMpIHtcbiAgICAvLyAgICAgdGhpcy5mcHNJbnRlcnZhbCA9IDEwMDAgLyBmcHM7XG4gICAgLy8gICAgIHRoaXMudGhlbiA9IERhdGUubm93KCk7XG4gICAgLy8gICAgIHRoaXMuc3RhcnRUaW1lID0gdGhpcy50aGVuO1xuICAgIC8vICAgICB0aGlzLmFuaW1hdGVUaXRsZSgpO1xuICAgIC8vIH1cblxuICAgIC8vIGFuaW1hdGVUaXRsZSgpIHtcbiAgICAvLyAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0ZVRpdGxlLmJpbmQodGhpcykpO1xuICAgIC8vICAgICB0aGlzLm5vdyA9IERhdGUubm93KCk7XG4gICAgLy8gICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMubm93IC0gdGhpcy50aGVuO1xuICAgIC8vICAgICBpZiAodGhpcy5lbGFwc2VkID4gdGhpcy5mcHNJbnRlcnZhbCkge1xuICAgIC8vICAgICAgICAgdGhpcy50aGVuID0gdGhpcy5ub3cgLSAodGhpcy5lbGFwc2VkICUgdGhpcy5mcHNJbnRlcnZhbCk7XG4gICAgLy8gICAgICAgICB0aGlzLmRyYXdCYWNrZ3JvdW5kKCk7XG4gICAgLy8gICAgICAgICAvLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlVGl0bGUuYmluZCh0aGlzKSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgLy8gdGhpcy5zdGFydEFuaW1hdGluZyg0NSk7XG4gICAgICAgIHRoaXMuZ2FtZS5zdGFydEFuaW1hdGluZyg1MCk7XG4gICAgfVxuXG4gICAgcmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5nYW1lLmdhbWVvdmVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ2FtZS5oZWFsdGggPSAxMDAwO1xuICAgICAgICB0aGlzLmdhbWUuZW5lbWllcyA9IFtdO1xuICAgICAgICAvLyB0aGlzLnN0YXJ0QW5pbWF0aW5nKDQ1KTtcbiAgICAgICAgdGhpcy5nYW1lLnN0YXJ0QW5pbWF0aW5nKDUwKTtcbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnggPSAzMjk7XG4gICAgICAgIHRoaXMueSA9IDM0NDtcbiAgICAgICAgdGhpcy53aWR0aCA9IDE4NztcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxMzA7XG4gICAgICAgIHRoaXMueEhpdEJveCA9IFt0aGlzLngsIHRoaXMueCArIHRoaXMud2lkdGhdO1xuICAgICAgICB0aGlzLnlIaXRCb3ggPSBbdGhpcy55LCB0aGlzLnkgK3RoaXMuaGVpZ2h0XTtcbiAgICAgICAgdGhpcy5mcmFtZVggPSAwO1xuICAgICAgICB0aGlzLmZyYW1lWSA9IDA7XG4gICAgICAgIHRoaXMuc3BlZWQgPSAxMDtcbiAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmxlZnRBdHRhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yaWdodEF0dGFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxBdHRhY2tYSGl0Qm94O1xuICAgICAgICB0aGlzLmxBdHRhY2tZSGl0Qm94O1xuICAgICAgICB0aGlzLnJBdHRhY2tYSGl0Qm94O1xuICAgICAgICB0aGlzLnJBdHRhY2tZSGl0Qm94O1xuICAgICAgICB0aGlzLnBsYXllclNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSBcIi4vc3JjL2ltYWdlcy9iaWtlMS5wbmdcIjtcbiAgICAgICAgdGhpcy5rZXlzID0gW107XG4gICAgICAgIC8vIHRoaXMuYXR0YWNrUmVhZHlcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cygpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyRXZlbnRzKCkge1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMua2V5c1tlLmtleV0gPSB0cnVlO1xuICAgICAgICB9KVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5rZXlzW2Uua2V5XTtcbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgICAgICAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5sZWZ0QXR0YWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucmlnaHRBdHRhY2sgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG5cbiAgICB9XG4gXG4gICAgXG4gICAgbW92ZVBsYXllcigpIHtcbiAgICAgICAgaWYgKHRoaXMua2V5cy53ICYmIHRoaXMueSA+IDApIHsgICAgICAgICAvLyBtb3ZpbmcgdXBcbiAgICAgICAgICAgIHRoaXMueSAtPSB0aGlzLnNwZWVkOyAgICAgICAgICAgLy8gaW5jcmVhc2Ugb3VyIHBsYXlzZXIncyB5IHBvcyBieSBzcGVlZFxuICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmtleXMucyAmJiB0aGlzLnkgPCA1NTApIHsgICAgLy8gbW92aW5nIGRvd25cbiAgICAgICAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmtleXMuYSAmJiB0aGlzLnggPiA4MCkge1xuICAgICAgICAgICAgICAgIHRoaXMueCAtPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5rZXlzLmQgJiYgdGhpcy54IDwgNTgwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxlZnRBdHRhY2spIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVYID0gMDtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVZID0gMjtcbiAgICAgICAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB0aGlzLmxlZnRBdHRhY2sgPSB0cnVlO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxlZnRBdHRhY2sgPSBmYWxzZSwgNDAwKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJpZ2h0QXR0YWNrKSB7XG4gICAgICAgICAgICB0aGlzLmZyYW1lWCA9IDA7XG4gICAgICAgICAgICB0aGlzLmZyYW1lWSA9IDE7XG4gICAgICAgICAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gdGhpcy5yaWdodEF0dGFjayA9IHRydWU7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmlnaHRBdHRhY2sgPSBmYWxzZSwgNDAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlUGxheWVyRnJhbWUoKSB7XG4gICAgICAgIGlmICh0aGlzLm1vdmluZyAmJiAoIXRoaXMubGVmdEF0dGFjayB8fCAhdGhpcy5yaWdodEF0dGFjaykpIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVYKytcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMucmlnaHRBdHRhY2sgJiYgdGhpcy5mcmFtZVkgPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVZID0gMDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUiBBVFRBQ0tcIilcbiAgICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMubGVmdEF0dGFjayAmJiB0aGlzLmZyYW1lWSA9PT0gMikge1xuICAgICAgICAgICAgdGhpcy5mcmFtZVkgPSAwO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMIEFUVEFDS1wiKVxuICAgICAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZnJhbWVYID49IDIpe1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coKVxuICAgICAgICAgICAgdGhpcy5mcmFtZVggPSAwXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oYW5kbGVQbGF5ZXJBdHRhY2soKTtcbiAgICB9XG4vL1xuICAgIGhhbmRsZVBsYXllckF0dGFjaygpIHtcbiAgICAgICAgaWYgKHRoaXMubGVmdEF0dGFjaykge1xuICAgICAgICAgICAgdGhpcy5sQXR0YWNrWEhpdEJveCA9IFt0aGlzLnggKyAxMCwgdGhpcy54ICsgNjBdO1xuICAgICAgICAgICAgdGhpcy5sQXR0YWNrWUhpdEJveCA9IFt0aGlzLnksIHRoaXMueSArIDc5XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yaWdodEF0dGFjaykge1xuICAgICAgICAgICAgdGhpcy5yQXR0YWNrWEhpdEJveCA9IFt0aGlzLnggKyAxNTAsIHRoaXMueCArIDE1MCArIDMwXTtcbiAgICAgICAgICAgIHRoaXMuckF0dGFja1lIaXRCb3ggPSBbdGhpcy55LCB0aGlzLnkgKyA3OV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmxlZnRBdHRhY2spIHtcbiAgICAgICAgICAgIHRoaXMubEF0dGFja1hIaXRCb3ggPSBbXTtcbiAgICAgICAgICAgIHRoaXMubEF0dGFja1lIaXRCb3ggPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMucmlnaHRBdHRhY2spIHtcbiAgICAgICAgICAgIHRoaXMuckF0dGFja1hIaXRCb3ggPSBbXTtcbiAgICAgICAgICAgIHRoaXMuckF0dGFja1lIaXRCb3ggPSBbXTtcbiAgICAgICAgfVxuICAgIH1cblxufSIsImNvbnN0IFV0aWwgPSB7XG5cbiAgICBiZXR3ZWVuKHgsIG1pbiwgbWF4KSB7XG4gICAgICAgIHJldHVybiB4ID49IG1pbiAmJiB4IDw9IG1heDtcbiAgICB9LFxuICAgIGNvbGxpc2lvbih1bml0MXgsIHVuaXQxeSwgdW5pdDF3LCB1bml0MWgsIHVuaXQyeCwgdW5pdDJ5LCB1bml0MncsIHVuaXQyaCkge1xuICAgICAgICBsZXQgdW5pdDFYSGl0Qm94ID0gW3VuaXQxeCwgdW5pdDF4ICsgdW5pdDF3XTtcbiAgICAgICAgbGV0IHVuaXQxWUhpdEJveCA9IFt1bml0MXksIHVuaXQxeSArIHVuaXQxaF07XG4gICAgICAgIGxldCB1bml0MlhIaXRCb3ggPSBbdW5pdDJ4LCB1bml0MnggKyB1bml0MnddO1xuICAgICAgICBsZXQgdW5pdDJZSGl0Qm94ID0gW3VuaXQyeSwgdW5pdDJ5ICsgdW5pdDJoXTtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgbGV0IHhDb2xsaXNpb24gPSBmYWxzZTtcbiAgICAgICAgbGV0IHlDb2xsaXNpb24gPSBmYWxzZTtcbiAgICAgICAgaWYgKFV0aWwuYmV0d2Vlbih1bml0MVhIaXRCb3hbMF0sIHVuaXQyWEhpdEJveFswXSwgdW5pdDJYSGl0Qm94WzFdKSB8fFxuICAgICAgICAgICAgVXRpbC5iZXR3ZWVuKHVuaXQxWEhpdEJveFsxXSwgdW5pdDJYSGl0Qm94WzBdLCB1bml0MlhIaXRCb3hbMV0pKSB7XG4gICAgICAgICAgICAgICAgeENvbGxpc2lvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJDT0xMSVNJT05YXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIGlmIChVdGlsLmJldHdlZW4odW5pdDFZSGl0Qm94WzBdLCB1bml0MllIaXRCb3hbMF0sIHVuaXQyWUhpdEJveFsxXSkgfHxcbiAgICAgICAgICAgIFV0aWwuYmV0d2Vlbih1bml0MVlIaXRCb3hbMV0sIHVuaXQyWUhpdEJveFswXSwgdW5pdDJZSGl0Qm94WzFdKSkge1xuICAgICAgICAgICAgICAgIHlDb2xsaXNpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQ09MTElTSU9OWVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICBpZiAoKHhDb2xsaXNpb24gPT09IHRydWUgJiYgeUNvbGxpc2lvbiA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkNPTExJU0lPTlwiKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGF0dGFja2VkKGF0dGFja1R5cGVYLCBhdHRhY2tUeXBlWSwgdW5pdHgsIHVuaXR5LCB1bml0dywgdW5pdGgpIHtcbiAgICAgICAgbGV0IHVuaXRYSGl0Qm94ID0gW3VuaXR4LCB1bml0eCArIHVuaXR3XTtcbiAgICAgICAgbGV0IHVuaXRZSGl0Qm94ID0gW3VuaXR5LCB1bml0eSArIHVuaXRoXTtcbiAgICAgICAgbGV0IHhBdHRhY2tlZDtcbiAgICAgICAgbGV0IHlBdHRhY2tlZDtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgaWYgKFV0aWwuYmV0d2VlbihhdHRhY2tUeXBlWFswXSwgdW5pdFhIaXRCb3hbMF0sIHVuaXRYSGl0Qm94WzFdKSB8fFxuICAgICAgICAgICAgVXRpbC5iZXR3ZWVuKGF0dGFja1R5cGVYWzFdLCB1bml0WEhpdEJveFswXSwgdW5pdFhIaXRCb3hbMV0pKSB7XG4gICAgICAgICAgICB4QXR0YWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJYIEFUVEFDS0VEXCIpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKFV0aWwuYmV0d2VlbihhdHRhY2tUeXBlWVswXSwgdW5pdFlIaXRCb3hbMF0sIHVuaXRZSGl0Qm94WzFdKSB8fFxuICAgICAgICAgICAgVXRpbC5iZXR3ZWVuKGF0dGFja1R5cGVZWzFdLCB1bml0WUhpdEJveFswXSwgdW5pdFlIaXRCb3hbMV0pKSB7XG4gICAgICAgICAgICB5QXR0YWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCh4QXR0YWNrZWQgPT09IHRydWUgJiYgeUF0dGFja2VkID09PSB0cnVlKSkge1xuICAgICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU0xJQ0UhXCIpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gVXRpbCJdLCJzb3VyY2VSb290IjoiIn0=