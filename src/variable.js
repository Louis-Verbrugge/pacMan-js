
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

    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 13, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [10, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1],
    [1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 10],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 1, 1, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 7, 0, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 13, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

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



let pacMan = new PacMan(13, 6, vitesseMax);
let listeGhost = [];
for (let i = 0; i < 10; i++) {
    listeGhost.push(new Ghost(8, 8, "red", vitesseMax));
}

let listeBonus = creationListeBonus();
stratChronometreBonus();
let chronometreBonus;
let listePatGomme = creationListePatGomme();
let listeTeleporteur = creationListeTeleporteur();

let imagePacMan = new Image();
imagePacMan.src = "image/spritePacMan.png";

//let imagePacMan = document.getElementById("imagePacMan");
//imagePacMan.style.width = tailleCaseX + "px";
//imagePacMan.style.height = tailleCaseY + "px";


