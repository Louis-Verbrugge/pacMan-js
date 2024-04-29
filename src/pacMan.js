

class PacMan {
    constructor(possitionXliste, possitionYliste, vitesseMax) {
        this.possitionXliste = possitionXliste;
        this.possitionYliste = possitionYliste;

        this.possitionXpixel = possitionXliste*tailleCaseX;
        this.possitionYpixel = possitionYliste*tailleCaseY;

        this.vitesseMax = vitesseMax;
        this.vitesseX = -vitesseMax; // px
        this.vitesseY = 0;
        this.direction = "left"
        this.newDirection = "left"
    }

    
    pacManDansUneCase() { // fonctionne pas ouff...
        //return true;
        //return true;
        //return true;
        /*Cette fonction a pour but de return true ou false si PacMan et entierement dans une case ou non.
        donc si la possition d'avant du pac man n'est pas dans la meme case que la nouvelle ca signifie que 
        le pacMan est bien placé*/
        
        //console.log("possition Y: "+this.possitionYpixel+"  | possition X: "+ this.possitionXpixel);
        //alert(Math.floor(this.possitionYpixel / tailleCaseY) +"  &  "+Math.floor(this.possitionXpixel / tailleCaseX))
        
        let possitionPacManX = Math.floor(this.possitionXpixel / tailleCaseX);
        let possitionPacManY = Math.floor(this.possitionYpixel / tailleCaseY);
        let anciennePossitionPacManX;
        let anciennePossitionPacManY;

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
                break;

            case "height":
                //alert("height")
                anciennePossitionPacManX = Math.floor((this.possitionXpixel - this.vitesseX) / tailleCaseX);
                anciennePossitionPacManY = Math.floor((this.possitionYpixel - this.vitesseY + tailleCaseY-1) / tailleCaseY);
                break;

            case "bottom":
                //alert("bottom")
                anciennePossitionPacManX = Math.floor((this.possitionXpixel - this.vitesseX) / tailleCaseX);
                anciennePossitionPacManY = Math.floor((this.possitionYpixel - this.vitesseY) / tailleCaseY);
                break;
        }


        console.log(possitionPacManX, anciennePossitionPacManX, possitionPacManY, anciennePossitionPacManY)
        console.log(this.possitionXpixel, this.possitionYpixel, this.possitionXpixel - this.vitesseX, this.possitionYpixel - this.vitesseY)
        console.log("s,njidhijqsuhjdbsq")
        if (possitionPacManX != anciennePossitionPacManX || possitionPacManY != anciennePossitionPacManY) {

            this.possitionXpixel = possitionPacManX * tailleCaseX;
            this.possitionYpixel = possitionPacManY * tailleCaseY;

            return true
        } else { 
            return false   
        }
    }

    changeDirection() {
        if (this.direction != this.newDirection) {
            if (!this.checkCollision(this.newDirection)) {
                if (!this.pacManDansUneCase()) {
                     return; // le pacMan n'est pas encore au bon endroit pour changer de direction
                }

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

    checkCollision(directionPacMan) {
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
        return true
    }
    
    calculBonEmplacement() {
        //a ce moment je sais que le millieu du pac-man et dans la bonne case donc je cherche ses coord pour déterminer la possition du pac-man

        this.possitionXpixel = Math.floor((this.possitionXpixel+tailleCaseX/2) / tailleCaseX) * tailleCaseX;
        this.possitionYpixel = Math.floor((this.possitionYpixel+tailleCaseY/2) / tailleCaseY) * tailleCaseY;

        //alert(this.possitionXpixel + "  MAR  "+this.possitionYpixel)

        /*
        if (this.direction == "left" || this.direction == "height") {
            this.possitionXpixel -= this.vitesseX
            this.possitionYpixel -= this.vitesseY
        }
        console.log(Math.floor(this.possitionXpixel / tailleCaseX) + " -- "+Math.floor(this.possitionYpixel / tailleCaseY))

        this.possitionXpixel = Math.floor(this.possitionXpixel / tailleCaseX) * tailleCaseX
        this.possitionYpixel = Math.floor(this.possitionYpixel / tailleCaseY) * tailleCaseY

        console.log("sds")
        console.log(tailleCaseX +" & " +tailleCaseY)
        alert(this.possitionXpixel+" & "+this.possitionYpixel)
        */
    }

    move() {
        this.changeDirection();
        if (!this.checkCollision(this.direction)) {
            this.possitionXpixel += this.vitesseX
            this.possitionYpixel += this.vitesseY
            if (this.checkCollision(this.direction)) {
                this.calculBonEmplacement();
            }
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

    getPossitionXpixel() {
        return this.possitionXpixel;
    }

    getPossitionYpixel() {
        return this.possitionYpixel;
    }
}