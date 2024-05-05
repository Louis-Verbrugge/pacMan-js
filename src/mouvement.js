
class MouvementEntite {

    
    checkCollision(directionPacMan, possitionXpixel, possitionYpixel, vitesseMax) {
        // false = collision
        // true = pas de collision

        if (classMouvement.collisionHorsPlateau(possitionXpixel, possitionYpixel)) {
            switch (directionPacMan) {
                case "right":
                    if ( plateau[Math.floor((possitionYpixel) / tailleCaseY)][Math.floor((possitionXpixel + tailleCaseX) / tailleCaseX)] == 0 &&
                    plateau[Math.floor((possitionYpixel + tailleCaseX-1-vitesseMax) / tailleCaseY)][Math.floor((possitionXpixel + tailleCaseX) / tailleCaseX)] == 0) {
                        return false;
                    }
                    break;

                case "left":
                    if ( plateau[Math.floor((possitionYpixel + vitesseMax) / tailleCaseY)][Math.floor((possitionXpixel-1) / tailleCaseX)] == 0 &&
                    plateau[Math.floor((possitionYpixel + tailleCaseX-1-vitesseMax) / tailleCaseY)][Math.floor((possitionXpixel-1) / tailleCaseX)] == 0) {
                        return false;
                    }
                    break;

                case "height":
                    if (plateau[Math.floor((possitionYpixel-1) / tailleCaseY)][Math.floor((possitionXpixel) / tailleCaseX)] == 0 && 
                    plateau[Math.floor((possitionYpixel-1) / tailleCaseY)][Math.floor((possitionXpixel + tailleCaseX-1-vitesseMax) / tailleCaseX)] == 0) {
                        return false;
                    }
                    break;

                case "bottom":
                    if (plateau[Math.floor((possitionYpixel + tailleCaseY) / tailleCaseY)][Math.floor(possitionXpixel / tailleCaseX)] == 0 &&
                    plateau[Math.floor((possitionYpixel + tailleCaseY) / tailleCaseY)][Math.floor((possitionXpixel + tailleCaseX-1-vitesseMax) / tailleCaseX)] == 0) {
                        return false;
                    }
                    break;
            }
        } else {
            return false;
        }
        return true;
    }

    collisionHorsPlateau(possitionXpixel, possitionYpixel) {
        if (possitionXpixel < 0) {
            return false;
        } else if ((WIDTH+tailleCaseX) < possitionXpixel) {
            return false;
        } else if (possitionYpixel < 0) {
            return false;
        } else if ((HEIGHT+tailleCaseY) < possitionYpixel) {
            return false;
        }
        return true;
    }


    pacManDansUneCase(possitionXpixel, possitionYpixel, vitesseX, vitesseY, direction) {
        /*Cette fonction a pour but de return true ou false si PacMan et entierement dans une case ou non.
        donc si la possition d'avant du pac man n'est pas dans la meme case que la nouvelle ca signifie que 
        le pacMan est bien placé*/
        
        let possitionPacManX = Math.floor(possitionXpixel / tailleCaseX);
        let possitionPacManY = Math.floor(possitionYpixel / tailleCaseY);
        let anciennePossitionPacManX;
        let anciennePossitionPacManY;

        //console.log("INFO :: " + this.vitesseX + " & "+this.vitesseY + " | taille case Y " + tailleCaseY + " | vitesse Y " +this.vitesseY);
        switch (direction) {
            case "right":
                //alert("right")
                anciennePossitionPacManX = Math.floor((possitionXpixel - vitesseX) / tailleCaseX);
                anciennePossitionPacManY = Math.floor((possitionYpixel - vitesseY) / tailleCaseY);
                break;

            case "left":
                //alert("left")
                anciennePossitionPacManX = Math.floor((possitionXpixel - vitesseX + tailleCaseX-1) / tailleCaseX);
                anciennePossitionPacManY = Math.floor((possitionYpixel - vitesseY) / tailleCaseY);
                possitionPacManX = Math.floor((possitionXpixel+tailleCaseX-1) / tailleCaseX);
                break;

            case "height":
                //alert("height")
                anciennePossitionPacManX = Math.floor((possitionXpixel - vitesseX) / tailleCaseX);
                anciennePossitionPacManY = Math.floor((possitionYpixel - vitesseY + tailleCaseY-1) / tailleCaseY);
                possitionPacManY = Math.floor((possitionYpixel+tailleCaseY-1) / tailleCaseY);
                break;

            case "bottom":
                //alert("bottom")
                anciennePossitionPacManX = Math.floor((possitionXpixel - vitesseX) / tailleCaseX);
                anciennePossitionPacManY = Math.floor((possitionYpixel - vitesseY) / tailleCaseY);
                break;
        }

        if (possitionPacManX != anciennePossitionPacManX || possitionPacManY != anciennePossitionPacManY) {
        
            //this.possitionXpixel = possitionPacManX * tailleCaseX;
            //this.possitionYpixel = possitionPacManY * tailleCaseY;
            return true
        } else { 
            return false   
        }
    }
}