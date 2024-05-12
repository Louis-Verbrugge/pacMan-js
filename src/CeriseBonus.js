

function creationListeBonus() {
    let listeBonus = [];
    for (let y = 0; y < plateau.length; y++) {
        for (let x = 0; x < plateau[0].length; x++) {

            if (plateau[y][x] == 7) {
                listeBonus.push({
                    x: x,
                    y: y,
                    invisible: true
                })
                plateau[y][x] = 0;
            }
        }
    }
    return listeBonus;
}

function stratChronometreBonus() {
    if (listeBonus.length != 0) {
        setTimeout(() => {
            listeBonus[0].invisible = false;

            chronometreBonus = setTimeout(() => {
                alert("annimation fin de bonus Bonus")

                chronometreBonus = setTimeout(() => {

                    listeBonus.splice(0, 1);
                    stratChronometreBonus();

                }, 4 * 1000);
            }, 4 * 1000);
        }, 4 * 1000);
    }
}


function pacManOnBonus() {
    if (listeBonus.length != 0 &&
        classMouvement.pacManDansUneCase(pacMan.getPossitionXpixel(), pacMan.getPossitionYpixel(), pacMan.getVitesseX(), pacMan.getVitesseY(), pacMan.getDirection())) {

        if (!listeBonus[0].invisible) {
            pacMan.calculBonEmplacement();
            if (pacMan.getPossitionXliste() == listeBonus[0].x && pacMan.getPossitionYliste() == listeBonus[0].y) {

                listeBonus.splice(0, 1);
                clearTimeout(chronometreBonus);
                stratChronometreBonus();
                // il a touché une cerise

            }
        }
    }
}


function drawBonus() {
    if (listeBonus.length != 0) {
        if (!listeBonus[0].invisible) {
            context.fillStyle = "pink";
            context.fillRect((listeBonus[0].x - 1) * tailleCaseX, (listeBonus[0].y - 1) * tailleCaseY, tailleCaseX, tailleCaseY);
        }
    }
}