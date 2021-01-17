var A = "This is a string." //assign a value to a variable
document.write(A)           //display variable
var X = "I'M EXCITED TO LEARN JAVASCRIPT!" 
window.alert(X)             // use variable to alert box content
document.write(" Amanda said \"It's time for bed!\""); //used quotes to display on page
document.write(" \"Be who you are and say what you feel,"
+ " because those who mind don\'t matter and those who matter don\'t mind\"" //concatenated quote 
+ "-Dr. Seuss ");

var Q = "Concatenated" + "String"
document.write( Q); //concatenated with variable 

var family = "The Fosters", mom = "Britnee", dad = "Richard", daughter = "Carma", son = "Keegan";
var daughter = daughter.fontcolor("pink"); //assigned many variables and a color
document.write(daughter);

document.write(4+6); //used expression

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}                 //create a function that gives the current time 