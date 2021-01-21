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

// CREATE A FUNCTION USING A CONSTANT AND PROPERTIES
function constant_function() {
    const The_Good_Dinosaur = {type: "cartoon", studio: "pixar", main_character: "Arlo"};
    The_Good_Dinosaur.type = "kids movies";
    The_Good_Dinosaur.theme = "love inspires courage";
    document.getElementById("Constant").innerHTML = "My daughter's favorite movie is from " + The_Good_Dinosaur.studio + " and main character is " + The_Good_Dinosaur.main_character;
    document.getElementById("new_constant").innerHTML = "To find this movie look in " + The_Good_Dinosaur.type + " enjoy the theme of " + The_Good_Dinosaur.theme;
}

//  USE LET KEYWORD
var C = 55;
document.getElementById("variable assigned").innerHTML = C;
{
    let C = 22;
    document.getElementById("let keyword").innerHTML = C;
}
document.getElementById("display variable").innerHTML = C;

// USE RETURN STATEMENT
var L = add_two(10, 13);
function add_two(a, b) {
    return a + b;
}
document.getElementById("return").innerHTML = L;

// USING LET KEYWORD AND USING METHOD
let blanket = {
    width: "thick ",
    size: "full ",
    texture: "fluffy ",
    color: "pink ",
    description : function() {
        return "The blanket is " + this.width + this.size + this.texture + this.color;
    }

};
document.getElementById("best_blanket").innerHTML = blanket.description();

// USE BREAK STATEMENT TO JUMP OUT OF LOOP
var text = "";
var O;
for (O = 0; O < 20; O++) {
    if (O === 15) { break; }
    text += "The number is" + O + "<br>";
}
document.getElementById("break_statement").innerHTML = text;

// USE CONTINUE STATEMENT
var K = "";
var G;
for (G = 0; G < 20; G++) {
    if (G === 10) { continue; }
    K += "Show me" + G + "<br>";
}
document.getElementById("continue_statement").innerHTML = K;