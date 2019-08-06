class Character {
    constructor() {
        this.r = 100;
        this.x = 50;
        this.y = height - this.r;
        this.vy = 0;
        this.gravity = 2.5;
    }

    jump() {
        if (this.y == height - this.r) {
            this.vy = -45;
        }
    }

    hits(enemy) {
        let x1 = this.x + this.r * 0.5;
        let y1 = this.y + this.r * 0.5;
        let x2 = enemy.x + enemy.r * 0.5;
        let y2 = enemy.y + enemy.r * 0.5;
        return collideCircleCircle(x1, y1, this.r, x2, y2, enemy.r);
    }

    move() {
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 0, height - this.r);
    }

    show() {
        image(uImg, this.x, this.y, this.r, this.r);
    }
}