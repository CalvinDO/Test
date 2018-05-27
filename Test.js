// listen to the load-event, indicating that the browser has finished loading, then call main
window.addEventListener("load", main);
// declare necessary variables
let crc2;
let xBall = 300;
let yBall = 200;
let angle = 0;
let radius = 100;
let width = 20;
let factor = 0;
let rotation = 0;
// main function
function main(_event) {
    console.log("Hallo Calvin, mein wunderschöner Sohn");
    createCanvas(600, 400);
    drawBackground();
    animate();
}
// create a canvas element, append it to the html-document and store the rendering-api as crc2
function createCanvas(_width, _height) {
    let canvas = document.createElement("canvas");
    canvas.width = _width;
    canvas.height = _height;
    document.body.appendChild(canvas);
    crc2 = canvas.getContext("2d");
}
// draw the background image
function drawBackground() {
    crc2.fillStyle = "red";
    crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
}
// the animation loop. Installs a timeout-listener, that calls animate again after a given amount of milliseconds
function animate() {
    window.setTimeout(animate, 20);
    drawBackground();
    moveBalls();
}
// changes the values of the position of the ball and calls drawBall
function moveBalls() {
    //xBall = 300 + 50 * Math.cos(angle);
    //yBall = 200 + 50 * Math.sin(angle);
    angle += 0.08;
    width += Math.cos(angle) / 2;
    factor += +Math.sin(angle / 2) / 20;
    rotation += 0.1;
    let x = xBall + radius * Math.cos(angle);
    let y = yBall + radius * Math.sin(angle);
    let x2 = xBall + radius * Math.cos(angle);
    let y2 = yBall + radius * -Math.sin(angle);
    drawBall(x, y);
    drawBall(x2, y2);
    drawBall(xBall, yBall);
}
// well... draws the ball
function drawBall(_x, _y) {
    crc2.beginPath();
    crc2.fillStyle = "blue";
    crc2.arc(_x, _y, width, rotation, factor * Math.PI);
    crc2.fill();
}
//# sourceMappingURL=Test.js.map