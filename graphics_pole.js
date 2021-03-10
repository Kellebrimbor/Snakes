"use strict"
import game from "./Game.js";
import graphics from "./Graphics.js";
let Game = new game();
let Graphics = new graphics(Game.scene.scene.length, Game.scene.scene[0].length);
//Graphics.drawGame(Game.apple.coor, Game.snake.parts, Game.scene.getWall());
//Game.snake.move();
//Game.snake.move();
Game.tick();



/*let Game = new game();
let s = new snake();
let gg = new graphics(Game.scene.length, Game.scene[0].length);
gg.drawGame(Game.fruit, s.parts, Game.scene);
console.log(s.parts);
s.move(Game.isFruit(s.nextLocation()), Game.isSnake(s.nextLocation()), Game.isWall(s.nextLocation()));
//gameControl.startGame(g.fruit,s.parts,g.scene);*/
