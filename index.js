// var picture = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
// generated a random number

var randomnumber1 = Math.random();
var n1 = randomnumber1*6;
n1 = Math.floor(n1)+1;
var pic1 = "dice"+n1+".png";
var src1 = "images/"+pic1;
document.querySelectorAll("img")[0].setAttribute("src",src1);

var randomnumber2 = Math.random();
var n2= randomnumber2*6;
n2 = Math.floor(n2)+1;
var pic2 = "dice"+n2+".png";
var src2 = "images/"+pic2;
document.querySelectorAll("img")[1].setAttribute("src", src2);

if(n1>n2){
document.querySelector('h1').textContent ="Player 1 Wins!🎉";
}
else if (n2>n1) {
  document.querySelector('h1').textContent ="Player 2 Wins!🎉";
}
else {
  document.querySelector('h1').textContent ="Draw!😅"
}
