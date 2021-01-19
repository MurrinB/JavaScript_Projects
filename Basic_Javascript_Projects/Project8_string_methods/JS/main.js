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