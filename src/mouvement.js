
class MouvementEntite {

    
    checkCollision(directionPacMan, possitionXpixel, possitionYpixel, vitesseX, vitesseY) {

        //alert("sdsd")
        // false = pas de collision
        // true = collision
        if (directionPacMan=="bottom") {
            console.log("dsdsdsqqdsdsqdsqdsq")
        }

        if (this.collisionHorsPlateau(possitionXpixel, possitionYpixel, vitesseX, vitesseY)) {
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
                    console.log(possitionYpixel + " & " + tailleCaseY + " - " + HEIGHT);
                    console.log(Math.floor((possitionYpixel + tailleCaseY) / tailleCaseY) + "  |  "+Math.floor(possitionXpixel / tailleCaseX));
                    //alert("STOPP")
                    if (plateau[Math.floor((possitionYpixel + tailleCaseY) / tailleCaseY)][Math.floor(possitionXpixel / tailleCaseX)] == 0 &&
                    plateau[Math.floor((possitionYpixel + tailleCaseY) / tailleCaseY)][Math.floor((possitionXpixel + tailleCaseX-1-vitesseMax) / tailleCaseX)] == 0) {
                        return false;
                    }
                    break;
            }
        }// else {
        //    return true;
        //}
        return true;
    }

    horsMapVisible(possitionXpixel, possitionYpixel) {
        /*  a la difference de la function "collisionHorsPlateau",
        je tes si l'entite et dans la plateau visible, donc si il est 
        sur la teleporteur il est pas visible  */

        // true = dans la map
        // false = hors de la map
        if (possitionXpixel <= 0) {
            return false;
        } else if (WIDTH < possitionXpixel) {
            return false;
        } else if (possitionYpixel <= 0) {
            return false;
        } else if (HEIGHT < possitionYpixel) {
            return false;
        }
        return true;
    }

    collisionHorsPlateau(possitionXpixel, possitionYpixel) {
        // true = pas de collision
        // false = collision
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
        
        // vitesseX = vitesseX/2;
        // vitesseY = vitesseY/2;
        
        let possitionPacManX = Math.floor(possitionXpixel / tailleCaseX);
        let possitionPacManY = Math.floor(possitionYpixel / tailleCaseY);
        let anciennePossitionPacManX;
        let anciennePossitionPacManY;

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
            return true
        } else { 
            return false   
        }
    }
}