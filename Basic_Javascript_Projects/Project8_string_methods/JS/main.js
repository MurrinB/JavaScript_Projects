// using concatenate to create a sentence in webpage
function sentence() {
    var string1 = "A concatenated ";
    var string2 = "string variables ";
    var string3 = "that make a ";
    var string4 = "complete sentence"
    var complete_sentence = string1.concat(string2, string3, string4);
    document.getElementById("concatenate").innerHTML = complete_sentence;
}

// utilizing slice method
function sliver_function() {
    var sentence = "Don't make conclusions when you only have a piece of information!";
    var section = sentence.slice(6,23);
    document.getElementById("slice").innerHTML = section;  
}

//use search method to locate where hidden is in the string variable
var str = "Can you find the hidden word in this string variable?";
var position = str.search("hidden");
document.write(position + "<br>")

//use toUpperCase method to make string uppercase
var str_2 = "I'm an important message!";
var make_uppercase = str_2.toUpperCase();
document.write(make_uppercase + "<br>")

//numbers to string
function string_method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

//to precision method
function precision_method() {
    var Y = 15678.45679012344545;
    document.getElementById("Precision").innerHTML = Y.toPrecision(8);

}

//used toFixed method 
function fixed_function() {
    var N = 3.14296785847;
    document.getElementById("fixed_decimal").innerHTML = N.toFixed(2);
} 

//used valueOf to get primitive value of a number
function primitive_function() {
    var B = 22;
    document.getElementById('primitive').innerHTML = B.valueOf();
}
