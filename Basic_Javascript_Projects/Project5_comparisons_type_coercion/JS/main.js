document.write(typeof "String Variable") //used type of to display "string" in webpage

function display_nan () {    //created a function to display NaN in webpage
    document.getElementById("test").innerHTML = 0/0;
}

function true_nan() {   //used isNaN to get true answer on webpage
    document.getElementById("Test").innerHTML = isNaN("This is true");
}

function false_nan() {    // used isNaN to get false answer on webpage
    document.getElementById("TEST").innerHTML = isNaN("100");
}


function math() { // used to display infinity on webpage
    document.getElementById("infinity").innerHTML = 2E310
}

function _math() {  // used to display -infinity on webpage
    document.getElementById("-infinity").innerHTML = -3E310
}

document.write(184 > 4);  // used Boolean to display true

document.write(4 > 184);  // used Boolean to display false

console.log(4 * 2); //used to display 8 in the developer tools on the console

document.write("I had a work meeting today at" + 12) //used coercion to add number variable to string variable

console.log(10 > 25);  //used to display false in console 

document.write((5+6) == 11); //used equal to to get true to display

document.write(8 == 10);  // used equal to to get false to display

X = 13;
Y = 13;
window.alert(X === Y); //true because data type and value match

B = 19;
C = "19";
window.alert(B === C); //false because value same but data type different

D = "Hello";
E = 5;
window.alert(D === E); //false different values and different data type

F = "Hello"
G = "Good-bye"
window.alert(F === G); //false same data btype different values

window.alert(D === F); //true same string data type same values 

document.write(10 > 2 && 5 > 1);  //display true because both statements are true
document.write(10 < 2 && 5 > 1);  //display false because one statement os fasle while the other is true

document.write(10 < 2 || 5 > 1); // display true because at least one of the statements is true
document.write(10 < 2 || 5 < 1);  // display false because both statements are false 

function not_function() {
    document.getElementById("false").innerHTML = !(40 > 10); //used not with true statement to display false
    document.getElementById("true").innerHTML = !(40 < 10);  //used not with false statement to display true
}