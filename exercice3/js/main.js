const boxes = document.querySelectorAll(".carre");

boxes.forEach(box => {
    box.addEventListener('click', function() {
        // Vérifier si la classe 'active' est présente
        const isActive = box.classList.contains('active');

        // Si la classe 'active' est présente, réinitialise les propriétés CSS
        if (isActive) {
            box.style.backgroundColor = "";
            box.style.height = "";
            box.style.width = "";
            box.style.transform = "";
        } else {
            // Si la classe 'active' n'est pas présente, applique les modifications
            box.style.backgroundColor = "lightcoral";
            box.style.height = "180px";
            box.style.width = "180px";
            box.style.transform = "rotate(360deg)";
        }

        // Basculer la classe 'active' pour le prochain clic
        box.classList.toggle('active');
    });
});