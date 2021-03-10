export default class snake {
    constructor() {
        this.parts = [
            {x: 4, y: 2},
            {x: 3, y: 2},
        ];
        this.facing = "E";
    }

    getParts() {
        return this.parts;
    }

    nextLocation() {
        let snakeHead = this.getParts()[0];
        let targetX = snakeHead.x;
        let targetY = snakeHead.y;
        targetY = this.facing === "N" ? targetY - 1 : targetY;
        targetY = this.facing === "S" ? targetY + 1 : targetY;
        targetX = this.facing === "W" ? targetX - 1 : targetX;
        targetX = this.facing === "E" ? targetX + 1 : targetX;
        return {x: targetX, y: targetY};
    };

    move() {
        let location = this.nextLocation();
        this.parts.unshift(location);
        this.parts.pop();
    }

}