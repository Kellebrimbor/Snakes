export default class snake {
    constructor() {
        this.parts = [
            {x: 4, y: 2},
            {x: 3, y: 2},
            {x: 2, y: 2},
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

    move(field,isWall) {
        let location = this.nextLocation()
        if (isWall(field,location)) {
            return "gameover";
        }
        this.parts.unshift(location);
        this.parts.pop();
    }

    /*  move(isFruit, isSnake, isWall, score) {

          let par = this.parts;

          let location = this.nextLocation();

          if (isWall(location) || isSnake(location, this.getParts(),this.parts.length)) {
              return "gameover";
          }
          if (isFruit(location)) {
              this.parts.unshift(location);
              score++;
              return;
          }
          if (!isFruit(location)) {
              this.parts.unshift(location);
              this.parts.pop();
              return;
          }
      }*/
}