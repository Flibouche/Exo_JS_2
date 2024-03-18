const boxes = document.querySelectorAll(".carre");
const magicBox = document.querySelector(".magicbox")

boxes.forEach(box => {
    box.addEventListener('click', function() {
        const boxCSS = window.getComputedStyle(box);
        const cssValue = boxCSS.getPropertyValue("background-color", "rgb");
        magicBox.style.setProperty('background-color', cssValue);
        magicBox.innerHTML = cssValue;
});
});

console.log()
