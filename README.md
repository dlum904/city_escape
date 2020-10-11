# JavaScript Project Proposal: City Escape
City escape is essentially a top-down endless runner game.  The player will control a unit that will be riding along a highway.  Enemies will randomly spawn from the front or the rear.  The player must do their best to avoid or destroy enemies with a close range attack.  Obstacles will also appear in the players path.  There will be multiple enemies each with their own unique behavior.

This project will utilize:
-   Vanilla JavaScript
-   Canvas
-   CSS

# Functionality & MVP
Players will be able to:
-   Move around on a canvas, with restraints
-   Initiate an attack on multiple directions (left/right)
-   Receive power-ups that will affect the player's unit in different ways (bonus?)

This project will include:
-   Enemy AI
    -   Enemy units will move in a certain pattern depending on the position of the player's unit.
-   Collision
    -   When the player's unit collides with another object, there will be a collision.
-   Game Over logic
    -   When the player's unit reaches a certain number of collisions, they will get a game over.
-   Projectiles (bonus)
    -   Some enemy units will be able to shoot projectiles that move in different speeds and patterns, which will also have collision with the player's units.
    -   Player's attacks can reflect projectiles???
    -   Make things explode and bounce around on-screen???

# Implementation Timeline

Day1
- Setup all necessary files.
- Create a backgroun canvas and setup boundaries.
- Create units and their animations.

Day2
- Give player's unit inputs depending on key pressed
- Get units to move around on-screen
- Give enemy units an AI
- Collision

Day3
- Collision cont..
- Game over logic

Day4
- Style everything.
- Make a title screen

Bonus
- Create different types of projectiles that move differently
- Give the player different powerups that affect the way their unit behaves
- Add extra characters to play as.
- Add a friendly unit the player must prevent from being hit by the enemy.
- Add a boss that does cool stuff.
- Leaderboard
- Snazzy music


