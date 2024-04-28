
/*
0 = vide
1 = mur
2 = pat gomme
3 = Pac-Man
4 = ...
...
10 = TP n1
11 = TP n1
*/

let plateau = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 2, 1],
    [1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1],
    [1, 1, 0, 1, 1, 0, 1, 0, 0, 2, 1, 0, 1],
    [10, 2, 0, 2, 1, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 10],
    [1, 2, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

// image ground:
let imageGround = new Image();
imageGround.src = "../page/setting/image/zz.svg";


let HEIGHT = 800;
let WIDTH = 800;
let tailleCaseX =  Math.round(WIDTH / (plateau[0].length-2));
let tailleCaseY = Math.round(HEIGHT / (plateau.length-2));

WIDTH = (plateau[0].length-2) * tailleCaseX;
HEIGHT = (plateau.length-2) * tailleCaseY;

let fpsInterval = 1000 / 60;
let vitesseMax = tailleCaseX/9;

let pacMan = new PacMan(7, 2, vitesseMax);
let listePatGomme = creationListe();


