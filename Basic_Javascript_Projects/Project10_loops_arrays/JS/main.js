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

// CREATE AN ARRAY AND USE FUNCTION TO DISPLAY PART OF THE ARRAY
function array_Function() {
    var grocery_list = ["eggs", "milk", "bacon", "bread"];
    grocery_list[0] = "Great Value";
    grocery_list[1] = "Daisy";
    grocery_list[2] = "Black Label";
    grocery_list[3] = "Natural Oats";
    document.getElementById("Array").innerHTML = "Here is the brand for our bacon " + grocery_list[2] + ".";
}
