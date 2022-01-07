let table = document.querySelector("table");
let rows = document.querySelectorAll("tr");
let cells = document.querySelectorAll("td");
// let whiteCells = document.querySelectorAll(".whiteSquare");
let greenCells = document.querySelectorAll(".greenSquare");
let pieces = document.querySelectorAll("span");
let playerPieces = document.querySelectorAll(".playerPieces");
let opponentPieces = document.querySelectorAll(".opponentPieces");
let resetButton = document.querySelector(".resetButton");
let clickedCell = document.querySelector(".clickedCell");
let turn = "red";
let moveFinished = true;


let currentIndex;

// this is my click event that allows you to select/deselect/move game pieces on your specific turn

cells.forEach((cell, index) => {
    cell.addEventListener("click", function() {
        if(cell.classList[1] === "playerPiece" && turn === "red" && moveFinished) {
            cell.classList.remove('playerPiece')
            moveFinished = false;
            console.log(cell.classList)
            console.log(index)
            currentIndex = index;
        }else if(cell.classList[0] === "greenSquare" && turn === "red" && !moveFinished) {
            console.log(cells[index].classList)
            console.log(currentIndex)
            if(isValidPlayerMove(currentIndex, index)) {
                cell.classList.add("playerPiece")
                moveFinished = true;
                turn = "black";
                console.log(index)
            }else if(sameSquare(currentIndex, index)) {
                cell.classList.add("playerPiece")
                moveFinished = true;
                turn = "red";
            }
        }
        if(cell.classList[1] === "opponentPiece" && turn === "black" && moveFinished) {
            cell.classList.remove('opponentPiece')
            moveFinished = false;
            console.log(cell.classList)
            console.log(index)
            currentIndex = index;
        }else if(cell.classList[0] === "greenSquare" && turn === "black" && !moveFinished) {
            console.log(cells[index].classList)
            console.log(currentIndex)
            if(isValidOpponentMove(currentIndex, index)) {
            cell.classList.add("opponentPiece") 
                moveFinished = true;
                turn = "red";
            }else if(sameSquare(currentIndex, index)) {
                cell.classList.add("opponentPiece")
                moveFinished = true;
                turn = "black";
            }
        }
    })
})
        
        
           //this function limits the spaces the red game pieces can move to to the green spaces diagonally in front of it 
function isValidPlayerMove(currentIndex, index) {
    if((currentIndex - index === 7 && cells[index].classList.value !== "greenSquare playerPiece") || (currentIndex - index === 9 && cells[index].classList.value !== "greenSquare playerPiece")) {
        // if(cells[index].classList.value == "greenSquare opponentPiece")
        console.log(true);
        return true;
    }
    console.log(false)
    return false;
}

            //this function limits the spaces the black game pieces can move to to the green spaces diagonally in front of it 
function isValidOpponentMove(currentIndex, index) {
    if((currentIndex - index === -7 && cells[index].classList.value !== "greenSquare opponentPiece") || (currentIndex - index === -9 && cells[index].classList.value !== "greenSquare opponentPiece")) {
        console.log(true);
        return true;
    }
    console.log(false)
    return false;
}

            //this function allows you to deselect the selected game piece and select a new game piece
function sameSquare(currentIndex, index) {
    if(currentIndex === index) {
        console.log(true);
        return true; 
    }
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

// class Piece {
//     constructor(team, row, col) {
//         this.team = team;
//         this.row = row;
//         this.col = col;
//         this.king = false; //no one is a king at start, when true, more possible moves.
//         this.selected = false; //will change to true upon click.
//     }
//     //Figures out legal moves for currently selected player.
//     getPossibleMoves() {
//         var possibleMoves = [];
//         if (this.team === "B") { //check for possible black moves
//             possibleMoves.push([this.row + 1, this.col - 1]);
//             possibleMoves.push([this.row + 1, this.col + 1]);

//         } else { //check for possible white moves
//             possibleMoves.push([this.row - 1, this.col - 1]);
//             possibleMoves.push([this.row - 1, this.col + 1]);
//         }
//     }
// }
  






// function availableMoves() {
//     for(let i=0; i < 32; i++) {
//         if(greenCells[i].childElementCount === 0) {
//             greenCells[i].style.border = "1px solid red"
//         }
//     }
//     console.log(greenCells[6])
//     console.log(greenCells[6].parentElement.rowIndex)
//     console.log(greenCells[6].cellIndex)
// }
// cells[17].classList.remove("opponentPiece")
// cells[24].classList.add("opponentPiece")


// console.log(cells[17].classList)
// console.log(cells[60].classList)
// console.log(cells[5].cellIndex)

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

