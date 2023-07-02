document.querySelector(".button").onclick = function() {generateWinner()};
// maybe animation slowly stopping change of dicees
function generateWinner() {
    var rN0 = Math.floor(Math.random()*6);
    var rN1 = Math.floor(Math.random()*6);
    console.log(rN0,rN1);
    document.querySelector(".img1").setAttribute("src","images/dice"+(rN0+1)+".png");
    document.querySelector(".img2").setAttribute("src","images/dice"+(rN1+1)+".png");
    if (rN0 === rN1) {
        document.querySelector("div.container h1").innerHTML = "Draw";
    } else if (rN0 > rN1) {
        document.querySelector("div.container h1").innerHTML = "🚩 Player 1 wins!";
    } else {
        document.querySelector("div.container h1").innerHTML = "Player 2 wins! 🚩";
    }
}