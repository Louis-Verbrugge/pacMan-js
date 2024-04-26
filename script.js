
let board, context;
let HEIGHT = 500;
let WIDTH = 500;

window.onload = function () {

    board = document.getElementById("board")
    
    board.height = HEIGHT;
    board.width = WIDTH;
    context = board.getContext("2d");

    requestAnimationFrame(game);
}

function game() {
    context.clearRect(0, 0, WIDTH, HEIGHT);
    context.fillStyle = "black";
    context.fillRect(0, 0, WIDTH, HEIGHT);
    requestAnimationFrame(game);
}