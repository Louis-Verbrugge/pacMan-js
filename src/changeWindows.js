let pageJeu = document.getElementById('pageJeu');
let pageParametre = document.getElementById('pageParametre');

function goToSetting() {
    pageJeu.style.display = "none";
    pageParametre.style.display = "block";
}

function goToGame() {
    pageJeu.style.display = "block";
    pageParametre.style.display = "none";
}
