var randomnumber1 = Math.floor(Math.random()* 6)+ 1; // 1-6

var randomdiceimage = "dice" + randomnumber1 + ".png"; // dice1.png - dice6.png

var randomimagesource = "images/" + randomdiceimage; // images/dice1.png - dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomimagesource);



var randomnumber2 = Math.floor(Math.random()* 6)+ 1; // 1-6

var randomimagesource2 = "images/dice" + randomnumber2 + ".png";// dice1.png - dice6.png

document.querySelectorAll("img")[1].setAttribute("src", randomimagesource2);


if (randomnumber1 > randomnumber2) {
  document.querySelector("h1").innerHTML="player 1 wins";

}
else if(randomnumber2> randomnumber1){

  document.querySelector("h1").innerHTML="player 2 wins";

}

else{
  document.querySelector("h1").innerHTML="its a draw";



}
