// Sélectionne tous les éléments avec la classe "carre" dans le document HTML
const boxes = document.querySelectorAll(".carre");

// Sélectionne l'élément avec la classe "magicbox" dans le document HTML
const magicBox = document.querySelector(".magicbox");

// Pour chaque élément avec la classe "carre"
boxes.forEach(box => {
    // Ajoute un écouteur d'événements qui se déclenche lorsque l'utilisateur clique sur l'élément "box"
    box.addEventListener('click', function() {
        // Récupère les styles CSS appliqués à l'élément "box" cliqué
        const boxCSS = window.getComputedStyle(box);
        // Récupère la valeur de la couleur de fond de l'élément "box"
        const cssValue = boxCSS.getPropertyValue("background-color");
        // Définit la couleur de fond de l'élément "magicBox" avec la couleur récupérée de l'élément "box"
        magicBox.style.setProperty('background-color', cssValue);
        // Modifie le contenu de l'élément "magicBox" pour afficher la couleur récupérée de l'élément "box"
        magicBox.innerHTML = cssValue;
    });
});

// Affiche une console.log() vide, cela ne fait rien car il n'y a pas de paramètres passés
console.log();