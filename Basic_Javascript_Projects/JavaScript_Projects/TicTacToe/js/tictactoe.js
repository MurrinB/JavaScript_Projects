//SCRIPT FOR TICTACTTOE
let activePlayer = 'X'; //VARIABLE KEEPS TRACK OF TURNS
let selectedSquares = []; //STORES THE ARRAY OF MOVES

//FUNCTION FOR PLACING XS AND OS 
function placeXorO(squareNumber) {
    if (!selectedSquares.some(element => element.includes(squareNumber))) {  //THIS CHECKS THE SQUARE TO MAKE SURE IS HASN'T BEEN USED YET
        let select = document.getElementById(squareNumber); 
    

    if (activePlayer === 'X') { //CHECK TO SEE WHOS TURN IT IS
        select.style.backgroundImage = 'url("images/x.png" )';
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

    //PLAYS PLACEMENT SOUND
    audio("./media/place.mp3");

    if(activePlayer === 'O') {
        disableClick(); //GIVE COMPUTER A TURN
        setTimeout(function () {computersTurn(); }, 1000);
    }
    return true;
}

function computersTurn() { //RESULTS FOR A RANDOM SQUARE TO BE SELECTED
    let success = false;
    let pickASquare;
    while(!success) { //CONDITION ALLOWS TO KEEP TRYING IF SQUARE IS ALREADY USED 
        pickASquare = String(Math.floor(Math.random() * 9));
        if (placeXorO(pickASquare)) {
            placeXorO(pickASquare);
            success = true;
        };
    }
}
}

//CHECK FOR WINNING CONDITIONS  IN EACH ROW AND COLUMN
function checkWinConditions() {
    //CHECK WINNING FOR XS
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100); }
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304); }
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508); }
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558); }
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 508, 558); }
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558); }
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90); }
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520); }
    //CHECK WINNING FOR OS
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100); }
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304); }
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508); }
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558); }
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558); }
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558); }
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90); }
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520); }
    else if (selectedSquares.length >= 9) {
        //FOR TIE GAME SOUND AND RESTART
        audio('./media/tie.mp3');
        setTimeout(function () { resetGame() ; }, 1000)
    }

    //CHECKS FOR ARRAY INCLUDES 3 STRINGS FOR WIN
    function arrayIncludes(squareA, squareB, squareC) { //CHECKS FOR 3 IN A ROW
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        if (a === true && b === true && c === true) { return true; }
    }
}

//MAKES OUR BODY ELEMENT UNCLICKABLE FOR COMPUTERS TURN
function disableClick() {
    body.style.pointerEvents = 'none';
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000);
}

//HELPS SOUNDS FUNCTION
function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

//DRAW OUT WIN LINE 
//RETRIEVE AREA TO DRAW LINE OUT
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;

// DRAW LINE OUT
function animateLineDrawing() {
    const animationLoop = requestAnimationFrame(animateLineDrawing);
    c.clearRect(0, 0, 608,608);
    c.beginPath();
    c.moveTo(x1, y1);
    c.lineTo(x, y);
    c.lineWidth = 10;
    c.strokeStyle = 'rgba(70, 255, 33, 0.8)';
    c.stroke();
    if (x1 <= x2 && y1 <= y2) {
        if (x < x2) { x += 10; }
        if (y < y2) { y += 10; }
        if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
    }
    if (x1 <= x2 && y1 >= y2) { 
        if (x < x2) { x += 10; }
        if (y > y2) { y -= 10; }
        if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
    }
}

//CLEARS CANVAS AFTER WIN LINE IS DRAWN
function clear() {
    const animationLoop = requestAnimationFrame(clear);
    c.clearRect(0, 0, 608, 608);
    cancelAnimationFrame(animationLoop);
}

//DISALLOW CLICKING WHILE WIN SOUND HAPPENS
disableClick();
audio('./media/winGame.mp3');
animateLineDrawing() ;
setTimeout(function () { clear(); resetGame(); }, 1000);
}

//RESET GAME AFTER WIN OR TIE
function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }
    selectedSquares = [];
}