export default class apple {
    constructor() {
        this.coor = [
            {x: 1, y: 1}
        ]
    }

    /*addRandomFruit() {
        let randomY = Math.floor(Math.random() * this.scene.length);
        let randomX = Math.floor(Math.random() * this.scene[randomY].length);
        let randomLocation = {x: randomX, y: randomY};
        if (this.isEmpty(randomLocation) && !this.isFruit(randomLocation) &&
            !this.isWall(randomLocation) && !this.isSnake(randomLocation)) {
            this.fruit.push(randomLocation);
        } else {
            this.addRandomFruit();
        }
    }*/
}