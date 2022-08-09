class Rectangle
{
    constructor(x, y, w, h) {
        var rectangle_options = {
            restitution: 0.95,
            fricitionAir: 0.01,
        }
        
        this.image = loadImage("images/retangulo.png");
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(y, x, this.w, this.h, rectangle_options);
    }

    showMichaelJackson() {
        var rectanglePos = this.body.position;

        push();
        image(this.image, 0, 0, this.width, this.heigth);
        translate(rectanglePos.x, rectanglePos.y);
        rectMode(CENTER);
        rect(0, 0, this.width, this.heigth);
        pop();
    }
}