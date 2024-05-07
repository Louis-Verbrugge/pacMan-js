
/*
0 = vide
1 = mur
2 = pat gomme
3 = Pac-Man
4 = ...
...
10 = TP n1
11 = TP n2
*/


let plateau = [

    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 1],
    [1, 0, 1, 2, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 2, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 2, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
    [1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 1, 0, 1],
    [12, 2, 2, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1],
    [1, 2, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 2, 0, 0, 1, 1, 1],
    [1, 2, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 12],
    [1, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 2, 0, 0, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 0, 0, 2, 0, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
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

for (let i = 0; i < 1; i++) {
    listeGhost.push(new Ghost(8, 8, "red", vitesseMax));
}


let listePatGomme = creationListePatGomme();
let listeTeleporteur = creationListeTeleporteur();

