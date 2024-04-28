
document.addEventListener("keydown", pressTouch)


function pressTouch(event) {
    switch (event.key) {
        case "ArrowLeft":
            pacMan.setDirection("left");
            break;

        case "ArrowRight":
            pacMan.setDirection("right");
            break;

        case "ArrowUp":
            pacMan.setDirection("height");
            break;

        case "ArrowDown":
            pacMan.setDirection("bottom");
            break;
    }
}