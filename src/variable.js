

let plateau = [
    [1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1],
    [1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0],
    [1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
    [1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0],
    [1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

let HEIGHT = 500;
let WIDTH = 500;
let tailleCaseX =  Math.round(WIDTH / plateau[0].length);
let tailleCaseY = Math.round(HEIGHT / plateau.length);

let fpsInterval = 1000 / 60;

let vitesseMax = tailleCaseX/9;
let pacMan = new PacMan(6, 1, vitesseMax);

