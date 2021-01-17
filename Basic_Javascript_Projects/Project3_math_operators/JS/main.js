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