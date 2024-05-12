
document.addEventListener("keydown", pressTouch)


function pressTouch(event) {
    switch (event.key) {
        case "ArrowRight":
            pacMan.setDirection("right");
            break;

        case "ArrowLeft":
            pacMan.setDirection("left");
            break;

        case "ArrowUp":
            pacMan.setDirection("height");
            break;

        case "ArrowDown":
            pacMan.setDirection("bottom");
            break;
    }
}