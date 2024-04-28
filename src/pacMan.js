

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
        this.newDirection = "left"
    }

    changeDirection() {
        if (!this.checkCollision(this.newDirection)) {
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
        return false
    }

    checkCollision(directionPacMan) {
        switch (directionPacMan) {
            case "right":
                if ( plateau[Math.floor(this.possitionYpixel / tailleCaseY)][Math.floor((this.possitionXpixel + tailleCaseX) / tailleCaseX)] == 0 &&
                plateau[Math.floor((this.possitionYpixel + tailleCaseX-1) / tailleCaseY)][Math.floor((this.possitionXpixel + tailleCaseX) / tailleCaseX)] == 0) {
                    return false;
                }
                break;

            case "left":
                if ( plateau[Math.floor((this.possitionYpixel) / tailleCaseY)][Math.floor((this.possitionXpixel-1) / tailleCaseX)] == 0 &&
                plateau[Math.floor((this.possitionYpixel + tailleCaseX-1) / tailleCaseY)][Math.floor((this.possitionXpixel-1) / tailleCaseX)] == 0) {
                    return false;
                }
                break;

            case "height":
                if (plateau[Math.floor((this.possitionYpixel-1) / tailleCaseY)][Math.floor(this.possitionXpixel / tailleCaseX)] == 0 && 
                plateau[Math.floor((this.possitionYpixel-1) / tailleCaseY)][Math.floor((this.possitionXpixel + tailleCaseX-1) / tailleCaseX)] == 0) {
                    return false;
                }
                break;

            case "bottom":
                if (plateau[Math.floor((this.possitionYpixel + tailleCaseY) / tailleCaseY)][Math.floor(this.possitionXpixel / tailleCaseX)] == 0 &&
                plateau[Math.floor((this.possitionYpixel + tailleCaseY) / tailleCaseY)][Math.floor((this.possitionXpixel + tailleCaseX-1) / tailleCaseX)] == 0) {
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
        console.log(this.changeDirection());
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
        context.fillRect(this.possitionXpixel, this.possitionYpixel, tailleCaseX, tailleCaseY)
    }
    
}