

class PacMan {
    constructor(possitionXliste, possitionYliste, vitesseMax) {
        this.possitionXliste = possitionXliste;
        this.possitionYliste = possitionYliste;

        this.possitionXpixel = possitionXliste*tailleCaseX;
        this.possitionYpixel = possitionYliste*tailleCaseY;

        this.vitesseX = 0; // px
        this.vitesseY = -5;
        this.direction = "height"

    }

    checkCollision() {

        switch (this.direction) {
            case "right":
                if ( plateau[Math.floor((this.possitionYpixel + tailleCaseX/2) / tailleCaseY)][Math.floor((this.possitionXpixel + tailleCaseX) / tailleCaseX)] == 0 ) {
                    return false;
                }
                break;
            
            case "left":
                if ( plateau[Math.floor((this.possitionYpixel + tailleCaseX/2) / tailleCaseY)][Math.floor((this.possitionXpixel) / tailleCaseX)] == 0 ) {
                    return false;
                }
                break;

            case "height":
                if (plateau[Math.floor(this.possitionYpixel / tailleCaseY)][Math.floor((this.possitionXpixel + tailleCaseX/2) / tailleCaseX)] == 0) {
                    return false;
                }
                break;

            case "bottom":
                if (plateau[Math.floor((this.possitionYpixel + tailleCaseY-1) / tailleCaseY)][Math.floor((this.possitionXpixel + tailleCaseX/2) / tailleCaseX)] == 0) {
                    return false;
                }
                break;

          
        }
        return true
    }
    
    calculBonEmplacement() {
        if (this.direction == "left" || this.direction == "height") {
            this.possitionXpixel -= this.vitesseX
            this.possitionYpixel -= this.vitesseY
        }
        this.possitionXpixel = Math.floor(this.possitionXpixel / tailleCaseX) * tailleCaseX
        this.possitionYpixel = Math.floor(this.possitionYpixel / tailleCaseY) * tailleCaseX
    }


    move() {
        if (!this.checkCollision()) {
            this.possitionXpixel += this.vitesseX
            this.possitionYpixel += this.vitesseY
            if (this.checkCollision()) {
                this.calculBonEmplacement();
            }
        }
    }


    drawPacMan() {
        context.fillStyle = "yellow"
        context.fillRect(this.possitionXpixel, this.possitionYpixel, tailleCaseX, tailleCaseY)
    }
    
}