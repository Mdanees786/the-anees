let box = document.querySelector(".color");

let colors = ["red", "blue", "green", "yellow", "purple"];

box.addEventListener("mouseenter", function () {

    let randomIndex = Math.floor(Math.random() * colors.length);

    box.style.backgroundColor = colors[randomIndex];

});