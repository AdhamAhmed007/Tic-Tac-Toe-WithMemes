let title = document.getElementById("title");
let turn = "x";
let Square = [];


const clicksound = new Audio("sounds/TheRock3.mp4");
const winsound = new Audio("sounds/GetOut.mpeg");
const tiesound = new Audio("sounds/CatLaugh.mp4");

function win() {
    for (i=1 ; i<10 ; i++)
    {
        Square[i] = document.getElementById("square" + i).innerHTML;
    }

    if (Square[1] === Square[2] && Square[2] === Square[3] && Square[1] !== "") {
        title.innerHTML = `${Square[1]} is the winner`;
        document.getElementById("square1").style.color = "#bd8f23";
        document.getElementById("square2").style.color = "#bd8f23";
        document.getElementById("square3").style.color = "#bd8f23";

        winsound.currentTime = 0;
        winsound.play();

        setInterval(function(){title.innerHTML += ".";}, 1000);
        setTimeout(function(){location.reload();}, 4000);
    }
    else if (Square[4] === Square[5] && Square[5] === Square[6] && Square[4] !== "") {
        title.innerHTML = `${Square[4]} is the winner`;
        document.getElementById("square4").style.color = "#bd8f23";
        document.getElementById("square5").style.color = "#bd8f23";
        document.getElementById("square6").style.color = "#bd8f23";

        winsound.currentTime = 0;
        winsound.play();

        setInterval(function(){title.innerHTML += ".";}, 1000);
        setTimeout(function(){location.reload();}, 4000);
    }
    else if (Square[7] === Square[8] && Square[8] === Square[9] && Square[7] !== "") {
        title.innerHTML = `${Square[7]} is the winner`;
        document.getElementById("square7").style.color = "#bd8f23";
        document.getElementById("square8").style.color = "#bd8f23";
        document.getElementById("square9").style.color = "#bd8f23";

        winsound.currentTime = 0;
        winsound.play();

        setInterval(function(){title.innerHTML += ".";}, 1000);
        setTimeout(function(){location.reload();}, 4000);
    }
    else if (Square[1] === Square[4] && Square[4] === Square[7] && Square[1] !== "") {
        title.innerHTML = `${Square[1]} is the winner`;
        document.getElementById("square1").style.color = "#bd8f23";
        document.getElementById("square4").style.color = "#bd8f23";
        document.getElementById("square7").style.color = "#bd8f23";

        winsound.currentTime = 0;
        winsound.play();

        setInterval(function(){title.innerHTML += ".";}, 1000);
        setTimeout(function(){location.reload();}, 4000);
    }
    else if (Square[2] === Square[5] && Square[5] === Square[8] && Square[2] !== "") {
        title.innerHTML = `${Square[2]} is the winner`;
        document.getElementById("square2").style.color = "#bd8f23";
        document.getElementById("square5").style.color = "#bd8f23";
        document.getElementById("square8").style.color = "#bd8f23";

        winsound.currentTime = 0;
        winsound.play();

        setInterval(function(){title.innerHTML += ".";}, 1000);
        setTimeout(function(){location.reload();}, 4000);
    }
    else if (Square[3] === Square[6] && Square[6] === Square[9] && Square[3] !== "") {
        title.innerHTML = `${Square[3]} is the winner`;
        document.getElementById("square3").style.color = "#bd8f23";
        document.getElementById("square6").style.color = "#bd8f23";
        document.getElementById("square9").style.color = "#bd8f23";

        winsound.currentTime = 0;
        winsound.play();

        setInterval(function(){title.innerHTML += ".";}, 1000);
        setTimeout(function(){location.reload();}, 4000);
    }
    else if (Square[1] === Square[5] && Square[5] === Square[9] && Square[1] !== "") {
        title.innerHTML = `${Square[1]} is the winner`;
        document.getElementById("square1").style.color = "#bd8f23";
        document.getElementById("square5").style.color = "#bd8f23";
        document.getElementById("square9").style.color = "#bd8f23";

        winsound.currentTime = 0;
        winsound.play();

        setInterval(function(){title.innerHTML += ".";}, 1000);
        setTimeout(function(){location.reload();}, 4000);
    }
    else if (Square[3] === Square[5] && Square[5] === Square[7] && Square[3] !== "") {
        title.innerHTML = `${Square[3]} is the winner`;
        document.getElementById("square3").style.color = "#bd8f23";
        document.getElementById("square5").style.color = "#bd8f23";
        document.getElementById("square7").style.color = "#bd8f23";

        winsound.currentTime = 0;
        winsound.play();

        setInterval(function(){title.innerHTML += ".";}, 1000);
        setTimeout(function(){location.reload();}, 4000);
    }

    else if (Square[1] !== "" && Square[2] !== "" && Square[3] !== "" && Square[4] !== "" && Square[5] !== "" && Square[6] !== "" && Square[7] !== "" && Square[8] !== "" && Square[9] !== "") {
        title.innerHTML = "Tie";

        tiesound.currentTime = 0;
        tiesound.play();

        setInterval(function(){title.innerHTML += ".";}, 1000);
        setTimeout(function(){location.reload();}, 4000);
    }
}




function playTurn(id) {
    let element = document.getElementById(id);

    if (turn === "x" && element.innerHTML === "") {
        element.innerHTML = "X";
        clicksound.currentTime = 0; 
        clicksound.play();

        turn = "o";
        title.innerHTML = "O";
    } else if (turn === "o" && element.innerHTML === "") {
        element.innerHTML = "O";
        clicksound.currentTime = 0;
        clicksound.play();
        
        turn = "x";
        title.innerHTML = "X";
    }

    win();
}