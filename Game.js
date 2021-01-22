class Game {
    constructor() {
        this.tickNumber = 0;
        this.timer = null;
        this.score = 0;
        this.isPause = false;
        this.scene=["###############",
            "#             #",
            "#             #",
            "#             #",
            "#             #",
            "#    #####    #",
            "#    #####    #",
            "#    #####    #",
            "#    #####    #",
            "#    #####    #",
            "#             #",
            "#             #",
            "###############"];
        this.fruit= [
            {x: 1, y: 1}
        ];
    }
    seeScore(){
        document.querySelector('.outpud').innerHTML = (" " + game.score);
    }
    pauses(){
        game.isPause = true;
    }
    continue() {
        game.isPause = false;
        game.tick();
    }
    tick() {
        window.clearTimeout(game.timer);
        game.tickNumber++;
        game.seeScore();
        if (!game.isPause) {
            let result = snake.move();
            if (result === "gameover") {
                alert("Игра окончена Очков : " + game.score);
                return;
            }
            graphics.drawGame();
            game.timer = window.setTimeout("game.tick()", 500);
        }
    }
    addRandomFruit() {
        let randomY = Math.floor(Math.random() * game.scene.length);
        let randomX = Math.floor(Math.random() * game.scene[randomY].length);
        let randomLocation = {x: randomX, y: randomY};
        if (game.isEmpty(randomLocation) && !game.isFruit(randomLocation) && !game.isWall(randomLocation) && !game.isSnake(randomLocation)) {
            game.fruit.push(randomLocation);
        } else {
            this.addRandomFruit();
        }
    }
    isEmpty(location) {
        return game.scene[location.y][location.x] === ' ';
    }
    isWall(location) {
        return game.scene[location.y][location.x] === '#';
    }
    isFruit(location) {
        for (let fruitNumber = 0; fruitNumber < game.fruit.length; fruitNumber++) {
            let fruit = game.fruit[fruitNumber];
            if (location.x === fruit.x && location.y === fruit.y) {
                game.fruit.splice(fruitNumber, 1);
                game.addRandomFruit();
                return true;
            }
        }
        return false;
    }
    isSnake(location) {
        for (let snakePart = 0; snakePart < snake.parts.length; snakePart++) {
            let part = snake.parts[snakePart];
            if (location.x === part.x && location.y === part.y) {
                return true;
            }
        }
        return false;
    }
}