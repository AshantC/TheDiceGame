let randomNumber1 = Math.floor(Math.random() *6 ) +1;
let randomDice1 = "./images/dice"+randomNumber1+".png";

// image 1
let image1 = document.querySelectorAll('img')[0];
image1.setAttribute("src", randomDice1);

// image2
let randomNumber2 = Math.floor(Math.random() *6 ) +1;
let randomDice2 = "./images/dice"+randomNumber2+".png";
let image2 = document.querySelectorAll('img')[1];
image2.setAttribute("src", randomDice2);

if(randomDice1 > randomDice2){
    document.querySelector('h2').innerHTML="Player 1 Wins!";
}else if (randomDice1 < randomDice2) {
    document.querySelector('h2').innerHTML= "Player 2 Wins!";
} else{
    document.querySelector('h2').innerHTML= "It's a Draw!";
}