document.addEventListener("DOMContentLoaded", function () {
    let toggleButton = document.querySelector(".toggleButton");
    let body = document.body;

    toggleButton.addEventListener("click", function () {
        
        body.classList.toggle("darkMode");

        
        let imgSrc = body.classList.contains("darkMode")
            ? "./assets/img/luna.png"  
            : "./assets/img/sol.png";  

        toggleButton.querySelector("img").src = imgSrc;
    });
});