
let board, context;


window.onload = function () {
    board = document.getElementById("board")
    context = board.getContext("2d");

    board.height = HEIGHT;
    board.width = WIDTH;
    setInterval(main, fpsInterval);
}

function main() {

    context.clearRect(0, 0, WIDTH, HEIGHT);


    for (let i = 0; i < listeGhost.length; i++) {
        listeGhost[i].move()
    }
    pacMan.move();

    collisionPatGomme();
    pacManOnTeleporteur(pacMan);
    for (let i = 0; i < listeGhost.length; i++) {
        pacManOnTeleporteur(listeGhost[i]);
    }

    drawPlateau();
    drawPatGomme();
    for (let i = 0; i < listeGhost.length; i++) {
        listeGhost[i].drawGhost();
    }
    pacMan.drawPacMan();

}



function drawPlateau() {
    for (let y = 1; y < plateau.length-1;  y++) {
        for (let x = 1; x < plateau[0].length-1; x++) {
            switch (plateau[y][x]) {
                case 0:
                    context.fillStyle = "black";
                    break;
                case 1:
                    context.fillStyle = "purple";
                    break;
            }
            context.fillRect(tailleCaseX*(x-1), tailleCaseY*(y-1), tailleCaseX, tailleCaseY);
        }
    }
}
