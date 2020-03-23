class Board {
    constructor(width, height) {
        this.width = width;
        this.height = height;

    }

    getWidth() {
        return this.width;
    }

    clearCanvas() {
        let canvas = document.getElementById("boardGame");
        let ctx = canvas.getContext("2d");
        return ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    draw() {
        let board = document.createElement("canvas");
        let divContainer = document.getElementById("container");
        board.id = "boardGame";
        board.width = this.width;
        board.height = this.height;
        // board.style.position = "absolute";
        //board.style.border = "1px solid";
        board.style.backgroundColor = "#999999";
        console.log(board);
        divContainer.appendChild(board);
    }
}

class Ball {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.xVelocity = 2;
        this.yVelocity = 2;
    }

    moving() {
        let canvas = document.getElementById("boardGame");
        this.x += this.xVelocity;
        this.y += this.yVelocity;
        board.clearCanvas();
        ball.draw();
        bar.draw();
    }

    draw() {
        let canvas = document.getElementById("boardGame");
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = '#FFA500';
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }
}

class Bar {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    getX() {
        return this.x;
    }

    setX(x) {
        return this.x = x;
    }
    controlBar(event) {
        let canvas = document.getElementById("boardGame");
        let ctx = canvas.getContext("2d");
        if (event.keyCode === 37 && bar.getX() > 0) {
            board.clearCanvas();
            bar.setX(bar.getX() - 20);
            ball.draw();
            bar.draw();
        }
        if (event.keyCode === 39 && (bar.getX() + bar.width) < board.getWidth()) {
            console.log(bar.width);
            board.clearCanvas();
            bar.setX(bar.getX() + 20);
            ball.draw();
            bar.draw();
        }
    }

    draw() {
        let canvas = document.getElementById("boardGame");
        let ctx = canvas.getContext("2d");
        //ctx.beginPath();
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

let board = new Board(400, 300);
let ball = new Ball(10, 10, 6);
let bar = new Bar(90, 230, 80, 10);
board.draw();
ball.draw();
bar.draw();

function start() {
    ball.moving();
   let request = requestAnimationFrame(start);
    if (ball.x - ball.radius <= 0) {
        ball.xVelocity = -ball.xVelocity;
    }

//Bounce Ball Off Right
    if (ball.x + ball.radius >= board.width) {
        ball.xVelocity = -ball.xVelocity;
    }

//Bounce Ball Off Top
    if (ball.y - ball.radius <= 0) {
        ball.yVelocity = -ball.yVelocity;
    }

//Bounce Ball Off Bottom
    if (ball.y + ball.radius >= board.height) {
        cancelAnimationFrame(request);
        alert("Game Over");
        location.reload();

    }
    if (ball.y + ball.radius > board.height - (ball.radius + 70)) {
        if (ball.x > bar.x && ball.x < bar.x + bar.width) {
            ball.yVelocity = -ball.yVelocity;
        }
    }

}

start();
window.addEventListener("keydown", bar.controlBar, false);