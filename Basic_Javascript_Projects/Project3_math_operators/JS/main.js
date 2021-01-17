function addition_function() {  //create an addition function
    var addition = 5 + 7;
    document.getElementById("math").innerHTML = "5 + 7 =" + addition;
}

function subtraction_function() {     //create a subtraction function
    var subtraction = 10 - 5;
    document.getElementById("subtraction").innerHTML = "10 - 5 = " + subtraction;
}

function myFunction () {   //create a subtraction function using different names for variables
    var Q = 8 - 4;
    document.getElementById("Q").innerHTML = Q;
}

function multiplication() {       //create a function using multiplication
    var B = 10 * 7;
    document.getElementById("B").innerHTML = B;
}

function division() {       //create a function using division
    var G = 144 / 12
    document.getElementById("G").innerHTML = G;
}

function multiple_math() {  //created a function with multiple math problems to solve 
    var simple_math = (4 + 2) * 5 / 2 - 6;
    document.getElementById("simple_math").innerHTML = "4 plus 2, multiplied by 5, divided in half and than subtracted by 6 equals " + simple_math;
}

function MandM() {    // created a function that will have a remainder
    var K = 34 % 8;
    document.getElementById("K").innerHTML = K + " is the remainder of 34 divided by 8"
}

function reesespieces() {  // created a function that returns the variable as a negative
    var P = 16;
    document.getElementById("P").innerHTML = -P;
}

var V = 10; //used variable and added 1 with ++
V++;
document.write(V);

var R = 25; // used variable and subtracted 1 with --
R--;
document.write(R);

window.alert(Math.random() * 10);   //made an alert box with random number between 0-10

window.alert(Math.round (6.7));  //made an alert box with math object which allows me to preform mathmatical tasks on numbers