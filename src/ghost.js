

class Ghost {
    constructor(possitionXliste, possitionYliste, vitesseMax, imageGhost) {

        this.possitionXliste = possitionXliste;
        this.possitionYliste = possitionYliste;
        this.possitionXpixel = possitionXliste * tailleCaseX;
        this.possitionYpixel = possitionYliste * tailleCaseY;

        this.imageGhost = imageGhost;
        this.vitesseMax = vitesseMax;

        this.vitesseX = 0; // px
        this.vitesseY = -vitesseMax;
        this.direction = "height";
        this.newDirection = "height";

        this.imageSpriteX = 0;
        this.imageSpriteY = 0;

    }


    calculBonEmplacement() {
        //a ce moment je sais que le millieu du pac-man et dans la bonne case donc je cherche ses coord pour déterminer la possition du pac-man
        this.possitionXliste = Math.floor((this.possitionXpixel + tailleCaseX / 2) / tailleCaseX);
        this.possitionYliste = Math.floor((this.possitionYpixel + tailleCaseY / 2) / tailleCaseY);
        this.possitionXpixel = this.possitionXliste * tailleCaseX;
        this.possitionYpixel = this.possitionYliste * tailleCaseY;

    }

    directionInverse() {
        //retrun la direction opposé a la direction de l'entite
        switch (this.direction) {
            case "left":
                return "right";
            case "right":
                return "left";
            case "height":
                return "bottom";
            case "bottom":
                return "height"
        }
    }


    intelligenceAleatoire() {
        if (classMouvement.horsMapVisible(this.possitionXpixel, this.possitionYpixel)) {
            let possibilite = [];
            for (const elem of ["right", "left", "height", "bottom"]) {

                if (!classMouvement.checkCollision(elem, this.possitionXpixel, this.possitionYpixel, this.vitesseX, this.vitesseY)) {
                    possibilite.push(elem);
                }

            }

            // je supprimer la direction inverse de l'entite:
            if (possibilite.length > 1) {
                if (possibilite.includes(this.directionInverse())) {
                    possibilite.splice(possibilite.indexOf(this.directionInverse()), 1);
                }
            }

            //alert("LE MOUVEMENT C4EST " + possibilite[0]);
            // je choisie aleatoireemnt une direction dans les possibilitées:
            return possibilite[Math.floor(Math.random() * possibilite.length)];

        } else {
            return this.direction;
        }


    }

    move() {

        if (classMouvement.pacManDansUneCase(this.possitionXpixel, this.possitionYpixel, this.vitesseX, this.vitesseY, this.direction)) {

            //alert("zsd")
            //console.log("JE replace le GHOST");
            this.calculBonEmplacement();

            this.direction = this.intelligenceAleatoire();
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
        }

        if (!classMouvement.checkCollision(this.direction, this.possitionXpixel, this.possitionYpixel, this.vitesseX, this.vitesseY)) {
            this.possitionXpixel += this.vitesseX;
            this.possitionYpixel += this.vitesseY;

        } else {
            this.calculBonEmplacement();
        }

    }

    drawGhost() {

        context.drawImage(
            this.imageGhost,
            (this.imageGhost.width / 4) * this.imageSpriteX,
            (this.imageGhost.height / 4) * this.imageSpriteY,
            this.imageGhost.width / 4,
            this.imageGhost.height / 4,
            this.possitionXpixel - tailleCaseX,
            this.possitionYpixel - tailleCaseY,
            tailleCaseX,
            tailleCaseY
        );
    }

    setPossitionXpixel(newPossitionXpixel) {
        this.possitionXpixel = newPossitionXpixel;
    }

    setPossitionYpixel(newPossitionYpixel) {
        this.possitionYpixel = newPossitionYpixel;
    }

    setImageSpriteX(newImageSpriteX) {
        this.imageSpriteX = newImageSpriteX
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