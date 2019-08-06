let character;
let phase = 'start';
let startImg;
let deadImg;
let clickImg;
let uImg;
let tImg;
let bImg;
let enemies = [];
let soundClassifier;
let points = 0;

function preload() {
    const options = {
        probabilityThreshold: 0.95
    };
    startImg = loadImage('img/PSF-Escape.png');
    deadImg = loadImage('img/dead.png');
    clickImg = loadImage('img/click.png');
    uImg = loadImage('img/fhios.png');
    tImg = loadImage('img/enemy.png');
    tImg2 = loadImage('img/enemy2.png');
    bImg = loadImage('img/background.png');
}

function mousePressed() {
    if (phase === 'start') {
        phase = 'game';
    } else if (phase === 'game') {
        character.jump();
    }
}

function setup() {
    createCanvas(800, 450);
    character = new Character();
}

function gotCommand(error, results) {
    if (error) {
        console.error(error);
    }
    console.log(results[0].label, results[0].confidence);
    if (results[0].label == 'up') {
        character.jump();
    }
}

function keyPressed() {
    if (key == ' ') {
        character.jump();
    }
}

function draw() {
    background(bImg);
    switch (phase) {
        case 'start':
            let midScreen = width / 5.5;
            image(startImg, midScreen, 50);
            image(clickImg, 215, 300);
            break;

        case 'game':
            if (random(1) < 0.015) {
                if (enemies.length) {
                    if (enemies[enemies.length - 1].x < width - 200) {
                        enemies.push(new Enemy());
                    }
                } else {
                    enemies.push(new Enemy());
                }
            }
            
            for (let e of enemies) {
                e.move();
                e.show();
                if (character.hits(e)) {
                    image(deadImg, 200, 50);
                    noLoop();
                }
            }

            character.show();
            character.move();
            break;
    }
}