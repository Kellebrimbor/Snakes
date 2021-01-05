let game = {
    tickNumber: 0,
    timer: null,
    score: 0,
    isPause: false,
    seeScore: function () {
        document.querySelector('.outpud').innerHTML = (" " + game.score);
    },
    scene: ["##########",
        "#        #",
        "#        #",
        "#        #",
        "#  ####  #",
        "#  ####  #",
        "#        #",
        "#        #",
        "#        #",
        "##########"],
    fruit: [
        {x: 1, y: 1}
    ],
    pauses: function () {
        game.isPause = true;
    },
    continue: function () {
        game.isPause = false;
        game.tick();
    },
    tick: function () {
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
    },
    addRandomFruit: function () {
        let randomY = Math.floor(Math.random() * game.scene.length);
        let randomX = Math.floor(Math.random() * game.scene[randomY].length);

        let randomLocation = {x: randomX, y: randomY};

        if (game.isEmpty(randomLocation) && !game.isFruit(randomLocation) && !game.isWall(randomLocation)) {
            game.fruit.push(randomLocation);
        } else {
            this.addRandomFruit();
        }
    },
    isEmpty: function (location) {
        return game.scene[location.y][location.x] === ' ';

    },
    isWall: function (location) {
        return game.scene[location.y][location.x] === '#';
    },
    isFruit: function (location) {
        for (let fruitNumber = 0; fruitNumber < game.fruit.length; fruitNumber++) {
            let fruit = game.fruit[fruitNumber];
            if (location.x === fruit.x && location.y === fruit.y) {
                game.fruit.splice(fruitNumber, 1);
                game.addRandomFruit();
                return true;
            }
        }
        return false;
    },
    isSnake: function (location) {
        for (let snakePart = 0; snakePart < snake.parts.length; snakePart++) {
            let part = snake.parts[snakePart];
            if (location.x === part.x && location.y === part.y) {
                return true;
            }
        }
        return false;
    }
};
let snake = {
    parts: [
        {x: 4, y: 2},
        {x: 3, y: 2},
        {x: 2, y: 2}
    ],
    facing: "E",
    nextLocation: function () {
        let snakeHead = snake.parts[0];
        let targetX = snakeHead.x;
        let targetY = snakeHead.y;
        targetY = snake.facing === "N" ? targetY - 1 : targetY;
        targetY = snake.facing === "S" ? targetY + 1 : targetY;
        targetX = snake.facing === "W" ? targetX - 1 : targetX;
        targetX = snake.facing === "E" ? targetX + 1 : targetX;
        return {x: targetX, y: targetY};
    },
    move: function () {
        let location = snake.nextLocation();
        if (game.isWall(location) || game.isSnake(location)) {
            return "gameover";
        }
        if (game.isEmpty(location)) {
            snake.parts.unshift(location);
            snake.parts.pop();
        }

        if (game.isFruit(location)) {
            snake.parts.unshift(location);
            game.score++;
        }
    }
};
let graphics = {
    canvas: document.getElementById("canvas"),
    squarSize: 30,
    drawBoard: function (ctx) {
        let currentYoffset = 0;
        game.scene.forEach(function checkLine(line) {
            line = line.split('');
            let currentXoffset = 0;
            line.forEach(function checkCharacter(character) {
                if (character === '#') {
                    ctx.fillStyle = "green";
                    ctx.fillRect(currentXoffset, currentYoffset, graphics.squarSize, graphics.squarSize);
                }
                currentXoffset += graphics.squarSize;
            });
            currentYoffset += graphics.squarSize;
        });
    },
    draw: function (ctx, source, color) {
        source.forEach(function (part) {
            let partXlocation = part.x * graphics.squarSize;
            let partYlocation = part.y * graphics.squarSize;
            ctx.fillStyle = color;
            ctx.fillRect(partXlocation, partYlocation, graphics.squarSize, graphics.squarSize);
        });
    },
    drawGame: function () {
        let ctx = graphics.canvas.getContext("2d");
        ctx.clearRect(0, 0, graphics.canvas.width, graphics.canvas.height);
        graphics.drawBoard(ctx);
        graphics.draw(ctx, game.fruit, "red");
        graphics.draw(ctx, snake.parts, "blue");
    }
};
graphics.drawGame();
let gameControl = {
    processInput: function (keyPressed) {
        let key = keyPressed.key.toLowerCase();
        let targetDirection = snake.facing;
        if (key === "w" && snake.facing !== "S") {
            targetDirection = "N";
        }
        if (key === "a" && snake.facing !== "E") {
            targetDirection = "W";
        }
        if (key === "s" && snake.facing !== "N") {
            targetDirection = "S";
        }
        if (key === "d" && snake.facing !== "W") {
            targetDirection = "E";
        }
        snake.facing = targetDirection;
        game.tick();
    },
    startGame: function () {
        window.addEventListener("keypress", gameControl.processInput, false);
        game.tick();
    }
};
window.addEventListener('keydown', function (keyPressed) {
    let key = keyPressed.key;
    let targetDirection = snake.facing;
    if (key === "ArrowDown" && snake.facing !== "N") {
        targetDirection = "S";
    }
    if (key === "ArrowUp" && snake.facing !== "S") {
        targetDirection = "N";
    }
    if (key === "ArrowLeft" && snake.facing !== "E") {
        targetDirection = "W";
    }
    if (key === "ArrowRight" && snake.facing !== "W") {
        targetDirection = "E";
    }
    snake.facing = targetDirection;

});
gameControl.startGame();
