const box = document.querySelector(".carre");
const boxCSS = window.getComputedStyle(box);

box.addEventListener('click', function() {
    alert(
        "Class : " +
        box.className +
        "\n - Background color : " +
        boxCSS.getPropertyValue("background-color") +
        "\n - Color : " +
        boxCSS.getPropertyValue("color") +
        "\n - Height : " +
        boxCSS.getPropertyValue("height") +
        "\n - Width : " +
        boxCSS.getPropertyValue("width") +
        "\n - Display : " +
        boxCSS.getPropertyValue("display") +
        "\n - Font Family : " +
        boxCSS.getPropertyValue("font-family") +
        "\n - Font Size : " +
        boxCSS.getPropertyValue("font-size")       
    );
})