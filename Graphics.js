export default class graphics {
    constructor(x, y) {
        this.canvas = document.getElementById("canvas");
        this.squarSize = 700 / Math.max(x, y);
    }

    draw(ctx, source, color) {
        let r = this.squarSize;
        source.forEach(function (part) {
            let partXlocation = part.x * r;
            let partYlocation = part.y * r;
            ctx.fillStyle = color;
            ctx.fillRect(partXlocation, partYlocation, r, r);
        });

    };

    drawGame(fruit, snakeParts, scene) {
        let ctx = this.canvas.getContext("2d");
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.draw(ctx, scene, "black");
        this.draw(ctx, fruit, "red");
        this.draw(ctx, snakeParts, "blue");
    }
};