const canvas = document.getElementById("gameBoard");
const ctx = canvas.getContext("2d");

const scoreText = document.getElementById("score");
const restartBtn = document.getElementById("restartBtn");

const boxSize = 20;

let snake;
let food;

let direction;
let score;

let gameInterval;


// Game start function

function startGame() {

    snake = [
        { x: 200, y: 200 },
        { x: 180, y: 200 },
        { x: 160, y: 200 }
    ];

    food = {
        x: 100,
        y: 100
    };

    direction = "RIGHT";

    score = 0;

    scoreText.innerText = "Score: " + score;

    clearInterval(gameInterval);

    gameInterval = setInterval(gameLoop, 150);
}


// Main game loop

function gameLoop() {

    moveSnake();

    if (checkCollision()) {

        clearInterval(gameInterval);

        alert("Game Over! Your Score: " + score);

        return;
    }

    checkFood();

    drawGame();
}


// Snake move function

function moveSnake() {

    let head = {
        x: snake[0].x,
        y: snake[0].y
    };


    if (direction === "UP") {

        head.y -= boxSize;

    }

    else if (direction === "DOWN") {

        head.y += boxSize;

    }

    else if (direction === "LEFT") {

        head.x -= boxSize;

    }

    else if (direction === "RIGHT") {

        head.x += boxSize;

    }


    snake.unshift(head);

    snake.pop();
}


// Food check

function checkFood() {

    if (
        snake[0].x === food.x &&
        snake[0].y === food.y
    ) {

        score++;

        scoreText.innerText = "Score: " + score;


        // Snake ko grow karne ke liye
        snake.push({
            x: snake[snake.length - 1].x,
            y: snake[snake.length - 1].y
        });


        createFood();
    }
}


// Random food create

function createFood() {

    food.x =
        Math.floor(Math.random() * 20) * boxSize;

    food.y =
        Math.floor(Math.random() * 20) * boxSize;
}


// Collision check

function checkCollision() {

    const head = snake[0];


    // Wall collision

    if (
        head.x < 0 ||
        head.y < 0 ||
        head.x >= canvas.width ||
        head.y >= canvas.height
    ) {

        return true;
    }


    // Body collision

    for (let i = 1; i < snake.length; i++) {

        if (
            head.x === snake[i].x &&
            head.y === snake[i].y
        ) {

            return true;
        }
    }


    return false;
}


// Draw game

function drawGame() {

    // Board clear

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    // Draw snake

    for (let i = 0; i < snake.length; i++) {

        ctx.fillStyle = "lime";

        ctx.fillRect(
            snake[i].x,
            snake[i].y,
            boxSize,
            boxSize
        );
    }


    // Draw food

    ctx.fillStyle = "red";

    ctx.fillRect(
        food.x,
        food.y,
        boxSize,
        boxSize
    );
}


// Keyboard controls

document.addEventListener("keydown", function (event) {

    if (event.key === "ArrowUp" && direction !== "DOWN") {

        direction = "UP";

    }

    else if (
        event.key === "ArrowDown" &&
        direction !== "UP"
    ) {

        direction = "DOWN";

    }

    else if (
        event.key === "ArrowLeft" &&
        direction !== "RIGHT"
    ) {

        direction = "LEFT";

    }

    else if (
        event.key === "ArrowRight" &&
        direction !== "LEFT"
    ) {

        direction = "RIGHT";

    }

});


// Restart button

restartBtn.addEventListener("click", function () {

    startGame();

});


// Start game

startGame();