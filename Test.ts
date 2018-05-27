// listen to the load-event, indicating that the browser has finished loading, then call main
window.addEventListener("load", main);
// declare necessary variables
let crc2: CanvasRenderingContext2D;
let xBall: number = 20;
let yBall: number = 20;

// main function
function main(_event: Event): void {
    console.log("Hallo Calvin");
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
    console.log("Animate");
    window.setTimeout(animate, 0);
    drawBackground();
    moveBall();
}

// changes the values of the position of the ball and calls drawBall
function moveBall(): void {
    xBall += 1.5;
    drawBall(xBall, 100);
}

// well... draws the ball
function drawBall(_x: number, _y: number): void {
    crc2.beginPath();
    crc2.fillStyle = "blue";
    crc2.arc(_x, _y, 5, 0, 2 * Math.PI);
    crc2.fill();
}