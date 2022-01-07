let table = document.querySelector("table");
let rows = document.querySelectorAll("tr");
let cells = document.querySelectorAll("td");
// let whiteCells = document.querySelectorAll(".whiteSquare");
let greenCells = document.querySelectorAll(".greenSquare");
let pieces = document.querySelectorAll("span");
let kingPiece = document.querySelectorAll(".kingPiece")
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
            // console.log(cells[index].classList)
            // console.log(currentIndex)
            if(becomeKingPlayer(index)) {
                moveFinished = true;
                cell.classList.add("kingPiece");
                turn = "black";
            }else if(isValidPlayerMove(currentIndex, index)) {
                cell.classList.add("playerPiece")
                moveFinished = true;
                turn = "black";
                console.log(index)
            }else if(isValidPlayerJump(currentIndex, index)){
                cell.classList.add("playerPiece");
                if(cells[currentIndex - 9].classList == "greenSquare opponentPiece") {
                    cells[currentIndex - 9].classList.remove("opponentPiece") 
                }else if(cells[currentIndex - 7].classList == "greenSquare opponentPiece") {
                    cells[currentIndex - 7].classList.remove("opponentPiece")
                }
                console.log(true);
                moveFinished = true;
                turn = "black";
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
            if(becomeKingOpponent(index)) {
                moveFinished = true;
                cell.classList.add("kingPiece");
                turn = "red";
            }else if(isValidOpponentMove(currentIndex, index)) {
                console.log(index)
                cell.classList.add("opponentPiece") 
                moveFinished = true;
                turn = "red";
            }else if(isValidOpponentJump(currentIndex, index)){
                cell.classList.add("opponentPiece");
                if(cells[currentIndex + 9].classList == "greenSquare playerPiece") {
                    cells[currentIndex + 9].classList.remove("playerPiece") 
                }else if(cells[currentIndex + 7].classList == "greenSquare playerPiece") {
                    cells[currentIndex + 7].classList.remove("playerPiece")
                }
                console.log(true);
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
        // console.log(true);
        return true; 
    }
}

            //this function checks if the space you selected is a valid jump to make for the red game pieces
function isValidPlayerJump(currentIndex, index) {
    if((currentIndex - index === 14 && cells[index].classList.value === "greenSquare") || (currentIndex - index === 18 && cells[index].classList.value === "greenSquare")) {
        console.log(true)
        return true;
    }
}
            //this function checks if the space you selected is a valid jump to make for the black game pieces  
function isValidOpponentJump(currentIndex, index) {
    if((currentIndex - index === -14 && cells[index].classList.value === "greenSquare") || (currentIndex - index === -18 && cells[index].classList.value === "greenSquare")) {
        console.log(true);
        return true;
    }
}

function ifKingPlayer(index) {
    if(cells[index].classList.value === "greenSquare kingPiece") {
        console.log(true);
        return true;
    }
    console.log(cells[index].classList.value);
    return false;
}
function ifKingOpponent(index) {
    if(cells[index].classList.value === "greenSquare opponentPiece kingPiece") {
        return true;
    }
    return false;
}

function becomeKingPlayer(index) {
    if(index === 1 || index === 3 || index === 5 || index === 7) {
        console.log(true);
        return true;
    }
    console.log(false);
    return false;
}
function becomeKingOpponent(index) {
    if(index === 56 || index === 58 || index === 60 || index === 62) {
        console.log(true);
        return true;
    }
    console.log(false);
    return false;
}

function validKingMovePlayer(currentIndex, index) {
    console.log(Math.abs(currentIndex - index))
    if((Math.abs(currentIndex - index) === 7 && cells[index].classList[1].value == "kingPiece") || (Math.abs(currentIndex - index)=== 9 && cells[index].classList[1].value == "kingPiece") || (Math.abs(currentIndex - index) === -7 && cells[index].classList[1].value == "kingPiece") || (Math.abs(currentIndex - index) === -9 && cells[index].classList[1].value == "kingPiece")) {
        console.log(true);
        return true;
    }
    console.log(false)
    return false;
}

function validKingMoveOpponent(currentIndex, index) {
    if((currentIndex - index === 7 && cells[index].classList.value !== "greenSquare opponentPiece" && cells[index].classList[2].value == "kingPiece") || (currentIndex - index === 9 && cells[index].classList.value !== "greenSquare opponentPiece" && cells[index].classList[2].value == "kingPiece") || (currentIndex - index === -7 && cells[index].classList.value !== "greenSquare opponentPiece" && cells[index].classList[2].value == "kingPiece") || (currentIndex - index === -9 && cells[index].classList.value !== "greenSquare opponentPiece" && cells[index].classList[2].value == "kingPiece")) {
        console.log(true);
        return true;
    }
    console.log(false)
    return false;
}

function validKingJump(currentIndex, index) {
    if((currentIndex - index === 14 && cells[index].classList.value === "greenSquare" && cells[index].classList[2].value == "kingPiece") || (currentIndex - index === 18 && cells[index].classList.value === "greenSquare" && cells[index].classList[2].value == "kingPiece") || (currentIndex - index === -14 && cells[index].classList.value === "greenSquare" && sKing) || (currentIndex - index === -18 && cells[index].classList.value === "greenSquare" && sKing)) {
        console.log(true)
        return true;
    }
    console.log(false)
    return false;
}

