let randomNumber1 = Math.random() * 6 + 1
let randomNumber2 = Math.random() * 6 + 1

let image1 = "images/dice6" + randomNumber1 + ".png";

let image2 = "images/dice6" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", image1);

document.querySelector(".img2").setAttribute("src", image2);