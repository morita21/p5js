var w = 400
var h = 200
var start = 0;
var dots;
var ac = 2

function setup() {
    w = windowWidth;
    h = windowHeight
    createCanvas(w, h);
    background(255)

    start = millis()
    angleMode(DEGREES)
    dots = Array()

    dots.push(createDot({ x: w / 2 - 10, y: h / 2 - 10 }))

    // noStroke()
    stroke('rgba(0,0,0,0.2)')
}

function draw() {
    // background('rgba(255, 255, 255, 0.05)')
    dots.forEach((e, i) => {
        if (e.life > 4) {
            fill('rgba(255,0,0,1)');
        } else {
            fill('rgba(0,0,255,1)');
        }

        if (e.life > 0) {
            e.life -= 1
        } else {
            dots.splice(i, 1)
        }

        if (e.x < 0 || w < e.x) {
            e.dx *= -1
        }
        if (e.y < 0 || h < e.y) {
            e.dy *= -1
        }

        e.x += cos(e.rot) * e.dx * ac
        e.y += sin(e.rot) * e.dy * ac
        ellipse(e.x, e.y, 10, 10);
    });

    if (mouseIsPressed) {
        dots.push(createDot({
            x: mouseX,
            y: mouseY,
            rot: Math.random() * 360
        }))
    }
}

function createDot(options) {
    var d = { x: 0, y: 0, dx: 1, dy: 1, rot: 45, life: 10, cnt: 0 }
    return Object.assign(d, options)
}
