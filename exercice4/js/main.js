const boxes = document.querySelectorAll("#box");
const body = document.body;

boxes.forEach(box => {
    box.addEventListener('click', function() {
        const isActive = box.classList.contains('active');

        const boxesCSS = window.getComputedStyle(box);
        const cssValue = boxesCSS.getPropertyValue("background-color");
        const spanElement = box.querySelector("span");
        const logoElement = box.querySelector(".logo");
        
        if (isActive) {
            box.style.boxShadow = "";
            box.style.transform = "";
            box.style.borderRadius = "";
            box.style.border = "";
            body.style.backgroundColor = "";
            spanElement.style.opacity = "0";
            logoElement.style.transform = "";
            logoElement.style.paddingTop = "50px";
            
        } else {
            box.style.boxShadow = "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px";
            box.style.transform = "scale(1.1, 1.1)";
            box.style.borderRadius = "10px";
            box.style.border = "1px solid white";
            body.style.setProperty("background-color", cssValue);
            spanElement.style.opacity = "100";
            logoElement.style.transform = "rotate(360deg)"; 
            logoElement.style.paddingTop = "0px";
            
        }

        box.classList.toggle('active');
    });
});