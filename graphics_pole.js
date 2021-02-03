"use strict"
import game from "./Game.js";
import snake from "./Snake.js";
import graphics from "./Graphics.js";
import scene from "./Scene.js";
import apple from "./Apple.js";
let test=new scene();
let Game = new game();
let s = new snake();
let a=new apple();
let gg = new graphics(test.scene.length, test.scene[0].length);
gg.drawGame(a.coor, s.parts, test.getWall());
Game.tick(gg.drawGame(a.coor, s.parts, test.getWall(),test.createField(),Game.isWall),s.move(test.createField(),Game.isWall))

/*let Game = new game();
let s = new snake();
let gg = new graphics(Game.scene.length, Game.scene[0].length);
gg.drawGame(Game.fruit, s.parts, Game.scene);
console.log(s.parts);
s.move(Game.isFruit(s.nextLocation()), Game.isSnake(s.nextLocation()), Game.isWall(s.nextLocation()));
//gameControl.startGame(g.fruit,s.parts,g.scene);*/
