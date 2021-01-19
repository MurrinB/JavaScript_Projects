//global variable
var Q = 13;
function Add_numbers_1() {
    document.write(36 + Q + "<br>");
}
function Add_numbers_2() {
    document.write(Q + 100 + "<br>");
}
Add_numbers_1 ();
Add_numbers_2 ();

// local variable
function Add_numbers_3() {
    var D = 20;
    document.write(20 + D + "<br>");
}
// had to add in new code above intentional error for the new code to work properly

var Y = 19; //created variables for if statment
var Z = 100;
if (Y < Z) { //wrote simple if statement
    document.write("I wrote an if statement!" + "<br>")
}

// create if else statement
function year_function() {
    year = document.getElementById("year").value;
    if (year <= 2000) {
        legal = "You are old enough for a beer!";
    }
    else {
        legal = "You are too young to drink!";
    }
    document.getElementById("what_year").innerHTML = legal;
}

// create elseif statement
function study_function() {
    answer = document.getElementById("answer").value;
    if (answer == "Yes") {
        Reply = "You're doing great!";
    }
    else if (answer == "No") {
        Reply = "Get your butt studying!!";
    }
    else {
        Reply = "Please answer Yes or No.";
    }
    document.getElementById("study_more").innerHTML = Reply;
}

// create time function
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is afternoon";
    }
    else {
        Reply = "It is evening";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

// intentional error for difference between global and local and consolelog use

function Add_numbers_4() {
    document.write(D + 100);
}
Add_numbers_3();
Add_numbers_4();
// trying yo debug using console.log
function Add_number_3() {
    var D = 20;
    console.log(15 + D);
}

function Add_numbers_4() {
    console.log(D + 100);
}
Add_numbers_3();
Add_numbers_4();
// end debug: Still getting error D is not defined??

function get_Date() {
    if (new Date().getHours() < 17) {
        document.getElementById("ifStatement").innerHTML = "Good Afternoon";
    }
}


