let rows = document.querySelectorAll("tr");
let cells = document.querySelectorAll("td")
// let whiteCells = document.querySelectorAll(".whiteSquare");
let greenCells = document.querySelectorAll(".greenSquare");
let pieces = document.querySelectorAll("span")
let playerPieces = document.querySelectorAll(".playerPieces");
let opponentPieces = document.querySelectorAll(".opponentPieces");
let resetButton = document.querySelector(".resetButton")
let clickedCell = document.querySelector(".clickedCell")
let turn = "red"
let moveFinished = true;



cells.forEach(cell => {
    cell.addEventListener("click", function() {
        if(cell.classList[1] === "playerPiece" && turn === "red" && moveFinished) {
            cell.classList.remove('playerPiece')
            moveFinished = false;
            console.log(cell.classList)
        }else if(cell.classList[0] === "greenSquare" && turn === "red" && !moveFinished) {
            cell.classList.add("playerPiece")
            moveFinished = true;
            turn = "black";
        }
        if(cell.classList[1] === "opponentPiece" && turn === "black" && moveFinished) {
            cell.classList.remove('opponentPiece')
            moveFinished = false;
        }else if(cell.classList[0] === "greenSquare" && turn === "black" && !moveFinished) {
            cell.classList.add("opponentPiece")
            moveFinished = true;
            turn = "red";
        }

        // if(cell.classList[1] === "opponentPiece" && turn === "black") {
        //     cell.classList.remove("opponentPiece")
        //     turn = "red"
        //     console.log("its red's turn now")
        // }
        // if(cell.firstElementChild.innerHTML == "X" || cell.firstElementChild.innerHTML == "O") {
        //     console.log("this is working")
        //     this.firstElementChild.style.boxShadow = "white 0 0 8px 4px"
        //     console.log(this.firstElementChild)
        //     availableMoves();
        // }
    })
})

function availableMoves() {
    for(let i=0; i < 32; i++) {
        if(greenCells[i].childElementCount === 0) {
            greenCells[i].style.border = "1px solid red"
        }
    }
    console.log(greenCells[6])
    console.log(greenCells[6].parentElement.rowIndex)
    console.log(greenCells[6].cellIndex)
}
// cells[17].classList.remove("opponentPiece")
// cells[24].classList.add("opponentPiece")

function move() {
    //have the player first click on the piece that they want to move
    //have player then click on space they want to move to
    //remove class of game piece from first space and add it to desired space
}

console.log(cells[17].classList)
console.log(cells[60].classList)
// pieces.forEach(piece => {
//     piece.addEventListener("click", moveSpace() {

//     })
// })
// function moveSpace(evt) {
//     availableCell = evt.target
//     parent.removeChild(child);
//     availableCell.appendChild(child)
//     availableMoves()
// }

