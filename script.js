
let board, context;



window.onload = function () {
    board = document.getElementById("board")
    board.height = HEIGHT;
    board.width = WIDTH;
    context = board.getContext("2d");

    setInterval(main, fpsInterval)

}



function main() {
    context.clearRect(0, 0, WIDTH, HEIGHT);
    drawPlateau();
    pacMan.drawPacMan();

    pacMan.move();
}

function drawPlateau() {
    for (let y = 0; y < plateau.length;  y++) {
        for (let x = 0; x < plateau[0].length; x++) {
            switch (plateau[y][x]) {
                case 0:
                    context.fillStyle = "black"
                    break;
                case 1:
                    context.fillStyle = "purple"
                    break;
            }
            context.fillRect(tailleCaseX*x, tailleCaseY*y, tailleCaseX, tailleCaseY)

        }
    }
}
