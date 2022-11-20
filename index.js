let randomNumber1 = Math.floor(Math.random() * 6 + 1)

let randomDiceImage = "dice" + randomNumber1 + ".png"

let randomImageSource = "images/" + randomDiceImage;

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

let randomNumber2 = Math.floor(Math.random() * 6 + 1)

let randomDiceImage2 = "dice" + randomNumber2 + ".png"

let randomImageSource2 = "images/" + randomDiceImage;

let image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSource2);