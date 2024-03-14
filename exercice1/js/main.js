// Variables

const clickBox = document.querySelector(".carre");
clickBox.addEventListener('click', dialogBox);
console.log();


// Fonctions

function dialogBox() {
    const style = getComputedStyle()
    alert(style);

}