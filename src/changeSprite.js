
function changeSprite() {

    pacMan.setImageSpriteX((pacMan.getImageSpriteX() + 1) % 4) // car il y a 4 images dans le sprite

    for (let i = 0; i < listeGhost.length; i++) {
        listeGhost[i].setImageSpriteX((listeGhost[i].getImageSpriteX() + 1) % 4)
    }

}