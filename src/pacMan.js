class PacMan {
    constructor(possitionXliste, possitionYliste, vitesseMax) {
        this.possitionXliste = possitionXliste;
        this.possitionYliste = possitionYliste;

        this.possitionXpixel = possitionXliste * tailleCaseX;
        this.possitionYpixel = possitionYliste * tailleCaseY;

        this.vitesseMax = vitesseMax;
        this.vitesseX = vitesseMax; // px
        this.vitesseY = 0;
        this.direction = "right"
        this.newDirection = "right"

        this.imageSpriteX = 0;
        this.imageSpriteY = 0;

    }




    changeDirection() {
        if (this.direction != this.newDirection) {
            if (!classMouvement.checkCollision(this.newDirection, this.possitionXpixel, this.possitionYpixel, this.vitesseX, this.vitesseY)) {
                if (!classMouvement.pacManDansUneCase(this.possitionXpixel, this.possitionYpixel, this.vitesseX, this.vitesseY, this.direction)) {
                    return; // le pacMan n'est pas encore au bon endroit pour changer de direction
                }

                this.calculBonEmplacement();
                this.direction = this.newDirection;

                switch (this.direction) {
                    case "right":
                        this.vitesseX = this.vitesseMax;
                        this.vitesseY = 0;
                        this.imageSpriteY = 0;
                        break;

                    case "left":
                        this.vitesseX = -this.vitesseMax;
                        this.vitesseY = 0;
                        this.imageSpriteY = 1;
                        break;

                    case "height":
                        this.vitesseX = 0;
                        this.vitesseY = -this.vitesseMax;
                        this.imageSpriteY = 2;
                        break;

                    case "bottom":
                        this.vitesseX = 0;
                        this.vitesseY = this.vitesseMax;
                        this.imageSpriteY = 3;
                        break;
                }
                return true
            }
        }
        return false
    }


    calculBonEmplacement() {
        //a ce moment je sais que le millieu du pac-man et dans la bonne case donc je cherche ses coord pour déterminer la possition du pac-man
        this.possitionXliste = Math.floor((this.possitionXpixel + tailleCaseX / 2) / tailleCaseX);
        this.possitionYliste = Math.floor((this.possitionYpixel + tailleCaseY / 2) / tailleCaseY);
        this.possitionXpixel = this.possitionXliste * tailleCaseX;
        this.possitionYpixel = this.possitionYliste * tailleCaseY;

    }


    move() {
        this.changeDirection();
        if (!classMouvement.checkCollision(this.direction, this.possitionXpixel, this.possitionYpixel, this.vitesseX, this.vitesseY)) {
            //console.log("j'avance le pac-man");

            this.possitionXpixel += this.vitesseX;
            this.possitionYpixel += this.vitesseY;

        } else {
            this.calculBonEmplacement();
        }
    }

    drawPacMan() {
        //context.fillStyle = "yellow"
        //context.fillRect(this.possitionXpixel - tailleCaseX, this.possitionYpixel - tailleCaseY, tailleCaseX, tailleCaseY)

        context.drawImage(
            imagePacMan,
            (imagePacMan.width / 4) * this.imageSpriteX,
            (imagePacMan.height / 4) * this.imageSpriteY,
            imagePacMan.width / 4,
            imagePacMan.height / 4,
            this.possitionXpixel - tailleCaseX,
            this.possitionYpixel - tailleCaseY,
            tailleCaseX,
            tailleCaseY
        );

        //vrai image qui est hors du plateau ( pas de pixel ):
        //imagePacMan.style.left = this.possitionXpixel - tailleCaseX + "px";
        //imagePacMan.style.top = this.possitionYpixel - tailleCaseY + "px";
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

    setImageSpriteX(newImageSpriteX) {
        this.imageSpriteX = newImageSpriteX;
    }

    setImageSpriteY(newImageSpriteY) {
        this.imageSpriteY = newImageSpriteY;
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

    getImageSpriteX() {
        return this.imageSpriteX;
    }

}