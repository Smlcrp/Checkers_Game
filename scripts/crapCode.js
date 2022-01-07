
//Code to check if the playerPiece is also kingPiece

if(cell.classList[2] === "kingPiece" && turn === "red" && moveFinished) {
    cell.classList.remove("kingPiece");
    cell.classList.remove("playerPiece");
    moveFinished = false;
    currentIndex = index;
}else if(cell.classList[2] === "kingPiece" && turn === "red" && !moveFinished) {
    console.log(Math.abs(currentIndex - index))
    console.log(currentIndex)
    console.log(index)
    if(validKingMovePlayer(currentIndex, index)) {
        cell.classList.add("playerPiece");
        cell.classList.add("kingPiece");
    }
}

//Still need to write code to move the kingPiece Properly and jump the kingPiece
