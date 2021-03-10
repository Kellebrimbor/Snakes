import scene from "./Scene.js";
import apple from "./Apple.js";
import snake from "./Snake.js";
import graphics from "./Graphics.js";
import gameControl from "./GameControl.js";

export default class game {
    constructor() {
        this.tickNumber = 0;
        this.timer = null;
        this.score = 0;
        this.gameover = false;
        this.isPause = true;
        this.scene = new scene();
        this.snake = new snake();
        this.graphics = new graphics(this.scene.scene.length, this.scene.scene[0].length);
        this.gameControl = new gameControl();
        this.apples = [];
        this.start = this.createApple();
        window.addEventListener(
            "keypress", (event) =>
                this.gameControl.processInput(event, this.snake, () => this.tick), false);
    }

    seeScore() {
        document.querySelector('.outpud').innerHTML = (" " + this.score);
    }

    t() {
        document.querySelector('.pause').addEventListener("click", () => this.isPause = false)
    }

    p() {
        document.querySelector('.goagain').addEventListener("click",
            () => {
                this.isPause = true;
            })
    }


    createApple() {
        let test = new apple(this.scene.scene[0].length, this.scene.scene.length);
        if (this.isWall(this.scene.getWall(), test) || this.isSnake(test)) {
            this.createApple();
        } else {
            this.apples.push(test);
        }
        return this.apples;
    }

    tick() {
        this.t();

        window.clearTimeout(this.timer);
        if (this.isWall(this.scene.getWall(), this.snake.nextLocation()) ||
            this.isSnake(this.snake.nextLocation())) {
            document.querySelector('.game').style.display = "none";
            document.querySelector('.endgame').style.display = "flex";
            this.gameover = true;
        }

        if (this.isPause) {
            if (this.isFruit(this.snake.nextLocation())) {
                this.snake.parts.unshift(this.snake.nextLocation());
                this.apples.pop();
                this.apples = this.createApple();
                this.score++;
            } else {
                this.snake.move();
            }
            this.p();
        }
        this.tickNumber++;

        this.seeScore();
        this.graphics.drawGame(this.start, this.snake.parts, this.scene.getWall());
        if (!this.gameover) {
            this.timer = window.setTimeout(() => this.tick(), 200);
        } else {
            console.log("working");
        }
    }

    isWall(field, location) {
        for (let q of field) {
            if (location.y === q.y && location.x === q.x) {
                return true;
            }
        }
    }

    isFruit(location) {
        if (location.x === this.apples[0].x && location.y === this.apples[0].y) {
            return (true);

        }
    }

    isSnake(location) {
        for (let snakePart = 0; snakePart < this.snake.parts.length;
             snakePart++) {
            console.log(this.snake.parts.length);
            let part = this.snake.parts[snakePart];
            if (location.x === part.x && location.y === part.y) {
                return true;
            }
        }
        return false;
    }
}

