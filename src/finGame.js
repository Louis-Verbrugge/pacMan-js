

function finGame() {
    if (listePatGomme.length == 0) {
        //alert("tu as gagné 'PacMan'");
    }
    else {
        for (let i = 0; i < listeGhost.length; i++) {

            if (pacMan.getPossitionXpixel() < listeGhost[i].getPossitionXpixel() + tailleCaseX &&
                pacMan.getPossitionXpixel() + tailleCaseX > listeGhost[i].getPossitionXpixel() &&

                pacMan.getPossitionYpixel() < listeGhost[i].getPossitionYpixel() + tailleCaseY &&
                pacMan.getPossitionYpixel() + tailleCaseY > listeGhost[i].getPossitionYpixel()) {

                //alert("tu as perdu le ghost ta touché!");

            }

        }
    }
}