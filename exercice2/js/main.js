const box = document.querySelector(".carre");
const magicBox = document.querySelector(".magicbox")
box.addEventListener("click", boxCSS);

console.log()

function boxCSS() {
    const boxColor = box.getPropertyValue("background-color");
    magicBox.appendChild(boxColor);
}
