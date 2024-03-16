const box = document.querySelector(".carre");
const magicBox = document.querySelector(".magicbox")
const boxCSS = window.getComputedStyle(box);
const cssValue = boxCSS.getPropertyValue("background-color", "rgb");
box.addEventListener('click', function() {
    magicBox.style.setProperty('background-color', cssValue);
    magicBox.innerHTML = cssValue;
})



console.log()
