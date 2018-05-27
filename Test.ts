// listen to the load-event, indicating that the browser has finished loading, then call main
window.addEventListener("load", main);
// declare necessary variables
let crc2: CanvasRenderingContext2D;
let xBall: number = 300;
let yBall: number = 200;
let angle: number = 0;
let radius: number = 100;
let width: number = 20;
let factor: number = 0;
let rotation: number = 0;
// main function
function main(_event: Event): void {
    console.log("Hallo Calvin, mein wunderschöner Sohn");
    createCanvas(600, 400);
    drawBackground();
    animate();
}

// create a canvas element, append it to the html-document and store the rendering-api as crc2
function createCanvas(_width: number, _height: number): void {
    let canvas: HTMLCanvasElement = document.createElement("canvas");
    canvas.width = _width;
    canvas.height = _height;
    document.body.appendChild(canvas);
    crc2 = canvas.getContext("2d");
}

// draw the background image
function drawBackground(): void {
    crc2.fillStyle = "red";
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
}

// the animation loop. Installs a timeout-listener, that calls animate again after a given amount of milliseconds
function animate(): void {
    window.setTimeout(animate, 20);
    drawBackground();
    moveBalls();
}

// changes the values of the position of the ball and calls drawBall
function moveBalls(): void {
    //xBall = 300 + 50 * Math.cos(angle);
    //yBall = 200 + 50 * Math.sin(angle);

    angle += 0.08;

    width += Math.cos(angle) / 2;
    factor += +Math.sin(angle / 2) / 20;
    rotation += 0.1;

    let x: number = xBall + radius * Math.cos(angle);
    let y: number = yBall + radius * Math.sin(angle);

    let x2: number = xBall + radius * Math.cos(angle);
    let y2: number = yBall + radius * -Math.sin(angle);
    drawBall(x, y);
    drawBall(x2, y2);
    drawBall(xBall, yBall)
}

// well... draws the ball
function drawBall(_x: number, _y: number): void {
    crc2.beginPath();
    crc2.fillStyle = "blue";
    crc2.arc(_x, _y, width, rotation, factor * Math.PI);
    crc2.fill();
}