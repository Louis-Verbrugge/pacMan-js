
/*
0 = vide
1 = mur
2 = pat gomme
3 = Pac-Man
4 = ...
7 = cerise bonus
...
10 = TP n1
11 = TP n2
*/

let plateau = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 2, 2, 2, 3, 1, 2, 1, 1, 2, 1, 3, 2, 2, 2, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 2, 1, 1, 2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 1, 1, 2, 1, 0, 0, 0, 1],
    [1, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 1],
    [1, 0, 0, 1, 2, 1, 2, 1, 1, 1, 1, 2, 11, 1, 2, 1, 1, 1, 1, 2, 1, 2, 1, 0, 0, 1],
    [1, 0, 1, 2, 2, 1, 2, 1, 0, 0, 0, 2, 1, 12, 2, 1, 0, 0, 0, 2, 1, 11, 2, 1, 0, 1],
    [1, 0, 1, 2, 1, 1, 2, 1, 0, 0, 1, 2, 13, 1, 2, 1, 0, 0, 1, 2, 1, 1, 2, 1, 0, 1],
    [1, 0, 1, 2, 2, 2, 2, 1, 0, 0, 1, 2, 1, 2, 2, 1, 0, 0, 1, 2, 2, 2, 2, 1, 0, 1],
    [1, 1, 2, 2, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 1, 1, 2, 2, 1, 1],
    [1, 1, 2, 1, 3, 1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1, 3, 1, 2, 1, 1],
    [1, 1, 2, 2, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 2, 2, 2, 1, 1],
    [1, 1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1, 1],
    [1, 1, 2, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 2, 1, 1],
    [1, 1, 2, 1, 1, 1, 2, 1, 10, 2, 2, 1, 1, 1, 1, 2, 2, 12, 1, 2, 1, 1, 1, 2, 1, 1],
    [1, 1, 2, 1, 2, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 2, 1, 1],
    [1, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 1],
    [1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1],
    [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 7, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1],
    [1, 1, 2, 1, 2, 2, 1, 1, 1, 2, 2, 1, 1, 2, 1, 2, 2, 1, 1, 1, 2, 2, 1, 2, 1, 1],
    [1, 1, 2, 1, 1, 2, 2, 3, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 1, 2, 1, 1],
    [1, 1, 2, 1, 2, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 2, 1, 2, 1, 1],
    [1, 1, 2, 1, 2, 1, 2, 2, 2, 2, 1, 0, 0, 0, 0, 1, 2, 2, 2, 2, 1, 2, 1, 2, 1, 1],
    [1, 1, 2, 10, 1, 0, 1, 2, 1, 2, 1, 0, 0, 0, 0, 1, 2, 1, 2, 1, 0, 1, 13, 2, 1, 1],
    [1, 1, 2, 1, 0, 0, 0, 1, 2, 2, 1, 0, 0, 0, 0, 1, 2, 2, 1, 0, 0, 0, 1, 2, 1, 1],
    [1, 1, 2, 1, 0, 0, 0, 1, 14, 1, 1, 0, 0, 0, 0, 1, 1, 14, 1, 0, 0, 0, 1, 2, 1, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
/*
let plateau = [

    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1],
    [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
    [1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1],
    [1, 2, 1, 2, 1, 13, 1, 2, 1, 1, 2, 2, 1, 2, 2, 1, 2, 1],
    [1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1],
    [1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
    [12, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 2, 2, 2, 2, 1, 2, 1],
    [1, 1, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 1],
    [1, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1, 1, 1],
    [1, 2, 1, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 12],
    [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 7, 1, 1, 1],
    [1, 2, 1, 2, 1, 2, 2, 2, 7, 2, 2, 1, 2, 1, 2, 1, 2, 1],
    [1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 1, 13, 1, 2, 1, 2, 1],
    [1, 2, 1, 2, 1, 2, 2, 2, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1],
    [1, 2, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 1],
    [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
    [1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
    [1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
*/

// image ground:
let imageGround = new Image();
imageGround.src = "../page/setting/image/zz.svg";


let HEIGHT = 800;
let WIDTH = 800;
let tailleCaseX = Math.round(WIDTH / (plateau[0].length - 2));
let tailleCaseY = Math.round(HEIGHT / (plateau.length - 2));

WIDTH = (plateau[0].length - 2) * tailleCaseX;
HEIGHT = (plateau.length - 2) * tailleCaseY;

let FPS = 60;
let fpsInterval = 1000 / FPS;
let vitesseMax = tailleCaseX / 9;

let classMouvement = new MouvementEntite();


//INIT IMAGE:
let imagePatGomme = new Image();
imagePatGomme.src = "image/imagePatGomme.png";

let imagePacMan = new Image();
imagePacMan.src = "image/spritePacMan.png";

let imageGhostRed = new Image();
imageGhostRed.src = "image/spriteGhostRed.png";
let imageGhostPink = new Image();
imageGhostPink.src = "image/spriteGhostPink.png";
let imageGhostBlue = new Image();
imageGhostBlue.src = "image/spriteGhostBlue.png";
let listeImageGhost = [imageGhostRed, imageGhostPink, imageGhostBlue];



let pacMan = new PacMan(8, 9, vitesseMax);
let listeGhost = [];
for (let i = 0; i < 4; i++) {
    listeGhost.push(new Ghost(16, 9, vitesseMax, listeImageGhost[i % listeImageGhost.length]));
}

let listeBonus = creationListeBonus();
stratChronometreBonus();
let chronometreBonus;
let listePatGomme = creationListePatGomme();
let listeTeleporteur = creationListeTeleporteur();




//let imagePacMan = document.getElementById("imagePacMan");
//imagePacMan.style.width = tailleCaseX + "px";
//imagePacMan.style.height = tailleCaseY + "px";


