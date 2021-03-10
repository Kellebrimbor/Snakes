export default class gameControl{
    constructor() {
    }
    processInput(keyPressed,snake,tick) {
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
        tick();
    }
}
/*window.addEventListener('keydown', function (keyPressed) {
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

});*/