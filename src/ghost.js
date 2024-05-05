

class Ghost {
    constructor(possitionXliste, possitionYliste, color, vitesseMax) {

        this.possitionXliste = possitionXliste;
        this.possitionYliste = possitionYliste;
        this.possitionXpixel = possitionXliste*tailleCaseX;
        this.possitionYpixel = possitionYliste*tailleCaseY;

        this.color = color;
        this.vitesseMax = vitesseMax;

        this.vitesseX = vitesseMax; // px
        this.vitesseY = 0;
        this.direction = "right";
        this.newDirection = "right";

    }


    calculBonEmplacement() {
        //a ce moment je sais que le millieu du pac-man et dans la bonne case donc je cherche ses coord pour déterminer la possition du pac-man
        this.possitionXliste = Math.floor((this.possitionXpixel+tailleCaseX/2) / tailleCaseX);
        this.possitionYliste = Math.floor((this.possitionYpixel+tailleCaseY/2) / tailleCaseY);
        this.possitionXpixel = this.possitionXliste * tailleCaseX;
        this.possitionYpixel = this.possitionYliste * tailleCaseY;

    }

    function intelligenceAleatoire()

    move() {

        if (!classMouvement.checkCollision(this.direction, this.possitionXpixel, this.possitionYpixel, this.vitesseMax)) {
            this.possitionXpixel += this.vitesseX;
            this.possitionYpixel += this.vitesseY;
        } else {
            this.calculBonEmplacement();
        }

        if (classMouvement.pacManDansUneCase(this.possitionXpixel, this.possitionYpixel, this.vitesseX, this.vitesseY, this.direction)) {
            this.calculBonEmplacement();

            //c'est a ce moment que je dois executer la fonction pour IA du ghost


        }


    }

    drawGhost() {
        context.fillStyle = this.color;
        context.fillRect(this.possitionXpixel-tailleCaseX, this.possitionYpixel-tailleCaseY, tailleCaseX, tailleCaseY)
    }


}