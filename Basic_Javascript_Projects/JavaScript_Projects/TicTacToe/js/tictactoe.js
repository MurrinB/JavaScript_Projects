//SCRIPT FOR TICTACTTOE
let activePlayer = 'X'; //VARIABLE KEEPS TRACK OF TURNS
let selectedSquares = []; //STORES THE ARRAY OF MOVES

//FUNCTION FOR PLACING XS AND OS 
function placeXorO(squareNumber) {
    if (!selectedSquares.some(element => element.includes(squareNumber))) {  //THIS CHECKS THE SQUARE TO MAKE SURE IS HASN'T BEEN USED YET
        let select = document.getElementById(squareNumber); 
    }

    if (activePlayer === 'X') { //CHECK TO SEE WHOS TURN IT IS
        select.style.backgroundImage = 'url("images/x.png")';
    } else {
        select.style.backgroundImage = 'url("images/o.png")';
    }
    selectedSquares.push(squareNumber + activePlayer);
    checkWinConditions(); 
    if (activePlayer === 'X') {
        activePlayer = 'O'; //  MAKES THE TURNS CHANGE FROM X TO O
    } else {
        activePlayer = 'X';
    }
}
