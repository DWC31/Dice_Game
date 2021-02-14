var randomNumber1 = Math.floor((Math.random() *6) + 1);
var randomNumber2 = Math.floor((Math.random() *6) + 1);
var message = document.getElementById("title");

document.getElementById("right").src = "images/dice" + randomNumber2 + ".png";
document.getElementById("left").src = "images/dice" + randomNumber1 + ".png";

if(randomNumber1 > randomNumber2){

  message.innerHTML = "Player 1 Wins";
}
else if(randomNumber1 < randomNumber2){
  message.innerHTML = "Player 2 Wins";
}

else{
  message.innerHTML = "Draw";
}
