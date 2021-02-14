var randomNumber1 = Math.floor((Math.random() *6) + 1);
var randomNumber2 = Math.floor((Math.random() *6) + 1);

document.getElementById("right").src = "images/dice" + randomNumber1 + ".png";
document.getElementById("left").src = "images/dice" + randomNumber2 + ".png";
