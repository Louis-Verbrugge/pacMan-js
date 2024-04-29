

function creationListePatGomme() {
    let listePatGomme = [];
    for (let y = 0; y<plateau.length; y++) {
        for (let x = 0; x<plateau[0].length; x++) {

            if (plateau[y][x] == 2) {
                tempStruct = {
                    posX: x*tailleCaseX,
                    posY: y*tailleCaseY,
                    color: "blue"
                }
                listePatGomme.push(tempStruct)

                plateau[y][x] = 0; // pour supprimer les 2 de la du plateau
            }
            
        }
    }
    return listePatGomme;
}

function drawPatGomme() {
    for (let i = 0; i<listePatGomme.length; i++) {
        context.drawImage(imageGround, listePatGomme[i].posX-tailleCaseX, listePatGomme[i].posY-tailleCaseY, tailleCaseX, tailleCaseY);
        //context.fillStyle = listePatGomme[i].color;
        //context.fillRect(listePatGomme[i].posX-tailleCaseX, listePatGomme[i].posY-tailleCaseY, tailleCaseX, tailleCaseY);
    }
}

function collisionPatGomme() {
    //true si le PacMan touche une PatGomme (au millieu d'une case)
    for (let i = 0; i<listePatGomme.length; i++) {
        if (pacMan.getPossitionXpixel() <= listePatGomme[i].posX+tailleCaseX/2 && listePatGomme[i].posX+tailleCaseX/2 <= pacMan.getPossitionXpixel()+tailleCaseX &&
        pacMan.getPossitionYpixel() <= listePatGomme[i].posY+tailleCaseY/2 && listePatGomme[i].posY+tailleCaseY/2<= pacMan.getPossitionYpixel()+tailleCaseY) {
            
            listePatGomme.splice(i, 1);
        }
    }
    
}