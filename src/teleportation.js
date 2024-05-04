

function placerDansListeTeleporteur(listeTeleporteur, valeurCase, x, y) {
    //alert(listeTeleporteur.length +"    ^    " +valeurCase);
    for (let i = 0; i < listeTeleporteur.length; i++) {
        //alert(plateau[listeTeleporteur[i][0][1]][listeTeleporteur[i][0][0]] +"  &  "+ valeurCase)
        if (plateau[listeTeleporteur[i][0][1]][listeTeleporteur[i][0][0]] == valeurCase) {
            
            listeTeleporteur[i].push([x, y]);
            console.log(listeTeleporteur)
            return;
        }
    }
    listeTeleporteur.push([[x, y]]);
    console.log(listeTeleporteur + " s "+listeTeleporteur[0]);
    //alert("ésdsqqsd")
}

function creationListeTeleporteur() {

    let listeTeleporteur = [];
    for (let y = 0; y < plateau.length; y++) {
        for (let x = 0; x < plateau[0].length; x++) {
            if (plateau[y][x] >= 10) {
                placerDansListeTeleporteur(listeTeleporteur, plateau[y][x], x, y);
                //plateau[y][x] = 0;
            }
        }
    } 
    // je supprimer tout les chiffres au dessus de 10 pour les remplacer par des 0 pour que le pacman marche dessus:
    for (let y = 0; y < plateau.length; y++) {
        for (let x = 0; x < plateau[0].length; x++) {
            if (plateau[y][x] >= 10) {
                plateau[y][x] = 0;
            }
        }
    } 
    return listeTeleporteur;
}

function newPossition(endroitTeleportation, numeroTeleporteur) {

    if (numeroTeleporteur == 0) {
        pacMan.setPossitionXpixel(endroitTeleportation[1][0] * tailleCaseX);
        pacMan.setPossitionYpixel(endroitTeleportation[1][1] * tailleCaseY);
    } else {
        pacMan.setPossitionXpixel(endroitTeleportation[0][0] * tailleCaseX);
        pacMan.setPossitionYpixel(endroitTeleportation[0][1] * tailleCaseY);   
    }
}

function pacManOnTeleporteur() {
    if (pacMan.pacManDansUneCase()) {
        pacMan.calculBonEmplacement();
        
        // je test si le pac man est dans une case de teleporteur:
        for (let i = 0; i < listeTeleporteur.length; i++) {
            for (let j = 0; j < listeTeleporteur[i].length; j++) {
                if(pacMan.getPossitionXliste() == listeTeleporteur[i][j][0] && pacMan.getPossitionYliste() == listeTeleporteur[i][j][1]) {

                    newPossition(listeTeleporteur[i], j);
              

                }
            }
        }
    }
}

