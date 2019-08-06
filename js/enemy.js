class Enemy {
    constructor() {
        this.r = 75;
        this.x = width;
        this.y = height - this.r;
        this.moveState = 0;
        this.interval = 12;
        this.img = tImg;
    }

    move() {
        this.x -=  8;
        if (this.moveState === this.interval) {
            this.img = tImg2;
            this.moveState = 0;
        }

        if (this.moveState === this.interval/2) {
            this.img = tImg;
        }
        
        this.moveState += 1;
    }

    show() {
        image(this.img, this.x, this.y, this.r, this.r);
    }
}