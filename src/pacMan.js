

class PacMan {
    constructor(possitionXliste, possitionYliste, vitesseMax) {
        this.possitionXliste = possitionXliste;
        this.possitionYliste = possitionYliste;

        this.possitionXpixel = possitionXliste*tailleCaseX;
        this.possitionYpixel = possitionYliste*tailleCaseY;

        this.vitesseMax = vitesseMax;
        this.vitesseX = 0; // px
        this.vitesseY = vitesseMax;
        this.direction = "bottom"
        this.newDirection = "bottom"
    }

    /*
    pacManDansUneCase() {
        /*Cette fonction a pour but de return true ou false si PacMan et entierement dans une case ou non.
        donc si la possition d'avant du pac man n'est pas dans la meme case que la nouvelle ca signifie que 
        le pacMan est bien placé*/
        
        //console.log("possition Y: "+this.possitionYpixel+"  | possition X: "+ this.possitionXpixel);
        //alert(Math.floor(this.possitionYpixel / tailleCaseY) +"  &  "+Math.floor(this.possitionXpixel / tailleCaseX))
        
        /*
        let possitionPacManX = Math.floor(this.possitionXpixel / tailleCaseX);
        let possitionPacManY = Math.floor(this.possitionYpixel / tailleCaseY);
        let anciennePossitionPacManX;
        let anciennePossitionPacManY;

        //console.log("INFO :: " + this.vitesseX + " & "+this.vitesseY + " | taille case Y " + tailleCaseY + " | vitesse Y " +this.vitesseY);

        switch (this.direction) {
            case "right":
                //alert("right")
                anciennePossitionPacManX = Math.floor((this.possitionXpixel - this.vitesseX) / tailleCaseX);
                anciennePossitionPacManY = Math.floor((this.possitionYpixel - this.vitesseY) / tailleCaseY);
                break;

            case "left":
                //alert("left")
                anciennePossitionPacManX = Math.floor((this.possitionXpixel - this.vitesseX + tailleCaseX-1) / tailleCaseX);
                anciennePossitionPacManY = Math.floor((this.possitionYpixel - this.vitesseY) / tailleCaseY);
                possitionPacManX = Math.floor((this.possitionXpixel+tailleCaseX-1) / tailleCaseX);
                break;

            case "height":
                //alert("height")
                anciennePossitionPacManX = Math.floor((this.possitionXpixel - this.vitesseX) / tailleCaseX);
                anciennePossitionPacManY = Math.floor((this.possitionYpixel - this.vitesseY + tailleCaseY-1) / tailleCaseY);
                possitionPacManY = Math.floor((this.possitionYpixel+tailleCaseY-1) / tailleCaseY);
                break;

            case "bottom":
                //alert("bottom")
                anciennePossitionPacManX = Math.floor((this.possitionXpixel - this.vitesseX) / tailleCaseX);
                anciennePossitionPacManY = Math.floor((this.possitionYpixel - this.vitesseY) / tailleCaseY);
                break;
        }

        if (possitionPacManX != anciennePossitionPacManX || possitionPacManY != anciennePossitionPacManY) {
        
            this.possitionXpixel = possitionPacManX * tailleCaseX;
            this.possitionYpixel = possitionPacManY * tailleCaseY;
            return true
        } else { 
            return false   
        }
    }
    */

    /*
    collisionHorsPlateau() {
        if (this.possitionXpixel < 0) {
            return false;
        } else if ((WIDTH+tailleCaseX) < this.possitionXpixel) {
            return false;
        } else if (this.possitionYpixel < 0) {
            return false;
        } else if ((HEIGHT+tailleCaseY) < this.possitionYpixel) {
            return false;
        }
        return true;
    }
    */
    

    changeDirection() {
        if (this.direction != this.newDirection) {
            if (!classMouvement.checkCollision(this.newDirection, this.possitionXpixel, this.possitionYpixel, this.vitesseMax)) {
                if (!classMouvement.pacManDansUneCase(this.possitionXpixel, this.possitionYpixel, this.vitesseX, this.vitesseY, this.direction)) {
                     return; // le pacMan n'est pas encore au bon endroit pour changer de direction
                }

                this.calculBonEmplacement();
                this.direction = this.newDirection;

                switch (this.direction) {
                    case "right":
                        this.vitesseX = this.vitesseMax;
                        this.vitesseY = 0;
                        break;

                    case "left":
                        this.vitesseX = -this.vitesseMax;
                        this.vitesseY = 0;
                        break;

                    case "height":
                        this.vitesseX = 0;
                        this.vitesseY = -this.vitesseMax;
                        break;

                    case "bottom":
                        this.vitesseX = 0;
                        this.vitesseY = this.vitesseMax;
                        break;
                }
                return true
            }
        }
        return false
    }


    /*
    checkCollision(directionPacMan) {
        // false = collision
        // true = pas de collision

        if (classMouvement.collisionHorsPlateau(this.possitionXpixel, this.possitionYpixel)) {
            switch (directionPacMan) {
                case "right":
                    if ( plateau[Math.floor((this.possitionYpixel) / tailleCaseY)][Math.floor((this.possitionXpixel + tailleCaseX) / tailleCaseX)] == 0 &&
                    plateau[Math.floor((this.possitionYpixel + tailleCaseX-1-this.vitesseMax) / tailleCaseY)][Math.floor((this.possitionXpixel + tailleCaseX) / tailleCaseX)] == 0) {
                        return false;
                    }
                    break;

                case "left":
                    if ( plateau[Math.floor((this.possitionYpixel + this.vitesseMax) / tailleCaseY)][Math.floor((this.possitionXpixel-1) / tailleCaseX)] == 0 &&
                    plateau[Math.floor((this.possitionYpixel + tailleCaseX-1-this.vitesseMax) / tailleCaseY)][Math.floor((this.possitionXpixel-1) / tailleCaseX)] == 0) {
                        return false;
                    }
                    break;

                case "height":
                    if (plateau[Math.floor((this.possitionYpixel-1) / tailleCaseY)][Math.floor((this.possitionXpixel) / tailleCaseX)] == 0 && 
                    plateau[Math.floor((this.possitionYpixel-1) / tailleCaseY)][Math.floor((this.possitionXpixel + tailleCaseX-1-this.vitesseMax) / tailleCaseX)] == 0) {
                        return false;
                    }
                    break;

                case "bottom":
                    if (plateau[Math.floor((this.possitionYpixel + tailleCaseY) / tailleCaseY)][Math.floor(this.possitionXpixel / tailleCaseX)] == 0 &&
                    plateau[Math.floor((this.possitionYpixel + tailleCaseY) / tailleCaseY)][Math.floor((this.possitionXpixel + tailleCaseX-1-this.vitesseMax) / tailleCaseX)] == 0) {
                        return false;
                    }
                    break;
            }
        } else {
            return false;
        }
        return true;
    }
    */

    
    calculBonEmplacement() {
        //a ce moment je sais que le millieu du pac-man et dans la bonne case donc je cherche ses coord pour déterminer la possition du pac-man
        this.possitionXliste = Math.floor((this.possitionXpixel+tailleCaseX/2) / tailleCaseX);
        this.possitionYliste = Math.floor((this.possitionYpixel+tailleCaseY/2) / tailleCaseY);
        this.possitionXpixel = this.possitionXliste * tailleCaseX;
        this.possitionYpixel = this.possitionYliste * tailleCaseY;

    }
    

    move() {
        this.changeDirection();
        if (!classMouvement.checkCollision(this.direction, this.possitionXpixel, this.possitionYpixel, this.vitesseMax)) {
            this.possitionXpixel += this.vitesseX
            this.possitionYpixel += this.vitesseY
            
        } else {
            this.calculBonEmplacement();
        }
    }

    drawPacMan() {
        context.fillStyle = "yellow"
        context.fillRect(this.possitionXpixel-tailleCaseX, this.possitionYpixel-tailleCaseY, tailleCaseX, tailleCaseY)
    }
    
    setDirection(newDirectionPacMan) {
        this.newDirection = newDirectionPacMan
    }

    setVitesseX(newVitesseX) {
        this.vitesseX = newVitesseX;
    }

    setVitesseY(newVitesseY) {
        this.vitesseY = newVitesseY;
    }

    setPossitionXpixel(newPossitionXpixel) {
        this.possitionXpixel = newPossitionXpixel;
    }

    setPossitionYpixel(newPossitionYpixel) {
        this.possitionYpixel = newPossitionYpixel;
    }



    getPossitionXpixel() {
        return this.possitionXpixel;
    }

    getPossitionYpixel() {
        return this.possitionYpixel;
    }

    getVitesseX() {
        return this.vitesseX;
    }

    getVitesseY() {
        return this.vitesseY;
    }

    getDirection() {
        return this.direction;
    }

    getPossitionXliste() {
        return this.possitionXliste;
    }

    getPossitionYliste() {
        return this.possitionYliste;
    }
}