export default class apple {
    constructor(lengthX,lengthY) {
        this.x=this.addRandomCoorXFruit(lengthX);
        this.y=this.addRandomCoorYFruit(lengthY);
    }
     addRandomLocation(lengthX,lengthY,isWall) {
         if (!isWall) {
             return {x: this.addRandomCoorXFruit(lengthX), y: this.addRandomCoorYFruit(lengthY)};
         }
        else{
            this.addRandomLocation(lengthX,lengthY,isWall);
         }
     }
    addRandomCoorXFruit(lengthX){
        return Math.floor(Math.random() * lengthX);

    }
    addRandomCoorYFruit(lengthY){
        return Math.floor(Math.random()*lengthY);
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