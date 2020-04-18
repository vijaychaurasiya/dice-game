var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImg="dice"+ randomNumber1 +".png";
var randomImageSource="images/"+ randomDiceImg;
var image1  = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImg="dice"+ randomNumber2 +".png";
var randomImageSource="images/"+ randomDiceImg;
var image1  = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomImageSource);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1st Wins!🎉";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 2nd Wins!🎉";
}
else
{
    document.querySelector("h1").innerHTML="Game Draw🤩";
}

