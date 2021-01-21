// CREATE A LOOP FUNCTION COUNT DOWN
function Call_Loop() {
    var Digit = "";
    var X = 10;
    while (X > 0) {
        Digit += "<br>" + X;
        X--;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

// USE LENGTH PROPERTY TO COUNT LENGTH OF STRING VARIABLE
function Count_Length() {
    var words = "Learning JavaScript!";
    var n = words.length;
    document.getElementById("test").innerHTML = n;
}

// CREATE FOR LOOP TO LIST OUT BAND MEMBERS
var band = ["Guitar", "Drums", "Bass", "Singer"];
var content = "";
var Q;
function for_Loop() {
    for (Q = 0; Q < band.length; Q++) {
        content += band[Q] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = content;
}
