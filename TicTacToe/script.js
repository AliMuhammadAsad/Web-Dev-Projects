let btnRef = document.querySelectorAll(".button-option")
let btnRestart = document.getElementById("reset")
let pMsgRef = document.getElementById("info")
let finalMsg = document.getElementById("message")
let drawMsg = document.getElementById("message-draw")
let popupMsg = document.querySelector(".imgbox")
let winGif = document.querySelector(".imgbox.win-gif")
let drawGif = document.querySelector(".imgbox.draw-gif")
let tingS = document.getElementById("ting")
let overS = document.getElementById("over")

const tingSound = () =>{
    tingS.currentTime = 0;
    tingS.play();
}

const overSound = () =>{
    overS.currentTime = 0;
    overS.play();
}

// Winning Pattern Arr
let wincombo = [
    [0, 1, 2], 
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

// Disable all buttons
const disableButtons = () =>{
    btnRef.forEach((element) =>(element.disabled = true));
    popupMsg.classList.remove("hide");
}

// Enable all buttons
const enableButtons = () =>{
    btnRef.forEach((element) => {
        element.innerText = "";
        element.disabled = false;
    });
    // popupMsg.classList.add("hide");
    winGif.classList.add("hide"); drawGif.classList.add("hide");
}

let turn = "X"; count = 0

// Function to handle player turns
const changeTurn = () =>{
    return turn === "X" ? "O" : "X";
}

// Player Wins
const winner = (letter) =>{
    disableButtons();
    if(letter == "X"){
        finalMsg.innerHTML = "Player X is the Winner!!!";
    }
    else{ 
        finalMsg.innerHTML = "Player O is the Winner!!!";
    }
    winGif.classList.remove("hide");
    drawGif.classList.add("hide");
    overSound();
}

// Win Check function
const winCheck = () =>{
    for (let i of wincombo){
        let  [c1, c2, c3] = [
            btnRef[i[0]].innerText, btnRef[i[1]].innerText, btnRef[i[2]].innerText 
        ];
        if(c1 != "" && (c2 != "") & (c3 != "")){
            if(c1 == c2 && c2 == c3){
                winner(c1); 
            }
        }
    }
}

// Draw Function
const isDraw = () =>{
    disableButtons();
    drawMsg.innerHTML = "It's a Draw!";
    winGif.classList.add("hide");
    drawGif.classList.remove("hide");
    overSound();
}

// Display X/O on click and update message respectively
btnRef.forEach((element)=>{
    element.addEventListener("click", ()=>{
        if(turn === "X"){
            turn = changeTurn();
            element.innerText = "X"; element.disabled = true;
            pMsgRef.innerHTML = "Player O's Turn";
        }
        else{
            turn = changeTurn();
            element.innerText = "O"; element.disabled = true;
            pMsgRef.innerHTML = "Player X's Turn"
        }
        count += 1
        if(count == 9){
            isDraw();
        }
        winCheck();
        tingSound();
    })
});

// Restart
btnRestart.addEventListener("click", () =>{
    count = 0; turn = "X"; enableButtons(); pMsgRef.innerHTML = "Player X's Turn";
});

window.onload = enableButtons;