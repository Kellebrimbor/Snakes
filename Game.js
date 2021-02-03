export default class game {
    constructor() {
       this.tickNumber = 0;
       // this.timer = null;
       // this.score = 0;
        //this.isPause = false;
    }
    /*seeScore(){
        document.querySelector('.outpud').innerHTML = (" " + this.score);
    }*/
/*    pauses(){
        this.isPause = true;
    }*/
 /*   continue() {
        this.isPause = false;
     //   this.tick();
    }*/
   tick(drawGame,move,t,p) {
        window.clearTimeout(this.timer);
        this.tickNumber++;
       // this.seeScore();
        //if (!this.isPause) {
            let result = move(t,p);
            if (result === "gameover") {
                //alert("Игра окончена Очков : " + this.score);
                return;
            }
            drawGame();
            this.timer = window.setTimeout("this.tick(drawGame,move,t,p)", 500);
        }


    /*isEmpty(location) {
        return this.scene[location.y][location.x] === ' ';
    }*/
    isWall(field,location) {
        console.log(field);
        console.log(location);
        return field[location.y][location.x] === '#';
    }
   /* isFruit(location) {
        for (let fruitNumber = 0; fruitNumber < this.fruit.length; fruitNumber++) {
            let fruit = this.fruit[fruitNumber];
            if (location.x === fruit.x && location.y === fruit.y) {
                this.fruit.splice(fruitNumber, 1);
                this.addRandomFruit();
                return true;
            }
        }
        return false;
    }*/
   /* isSnake(location,parts,lengthh) {
        for (let snakePart = 0; snakePart < lengthh; snakePart++) {
            let part = parts[snakePart];
            if (location.x === part.x && location.y === part.y) {
                return true;
            }
        }
        return false;
    }*/
}

