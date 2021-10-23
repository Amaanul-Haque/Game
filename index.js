
var randomNumber1=Math.floor(Math.random()*6)+1;

var imagesName="dice"+randomNumber1+".png";

var imagesSource="./images/"+imagesName;

document.querySelectorAll("img")[0].setAttribute("src",imagesSource);

var randomNumber2=Math.floor(Math.random()*6)+1;

var imagesName2="dice"+randomNumber2+".png";

var imagesSource2="./images/"+imagesName2;

document.querySelectorAll("img")[1].setAttribute("src",imagesSource2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🎇Player1 wins"
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="🎇Player2 wins"
}
else{
  document.querySelector("h1").innerHTML="🎇Match Draw🎇"  
}
