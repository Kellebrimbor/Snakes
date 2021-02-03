export default class scene {
    constructor() {
        this.scene = ["###############",
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
    }

    createFieldElement(x, y, value) {
        return {
            x,
            y,
            value,
        }
    }

    getCharacters() {
        return this.scene.toString().split('');
    }

    createField() {
        let field = [];
        let x = 0;
        let y = 0;
        for (let z of this.getCharacters()) {
            if (z === ",") {
            } else {
                let f = this.createFieldElement(x, y, z);
                if (x <= this.scene.length) {
                    x++;
                } else {
                    y++;
                    x = 0;
                }
                field.push(f);
            }
        }
        return field;
    }

    getWall() {
        let wall = [];
        for (let z of this.createField()) {
            if (z.value === "#") {
                wall.push(z);
            }
        }
        return wall;
    }
}