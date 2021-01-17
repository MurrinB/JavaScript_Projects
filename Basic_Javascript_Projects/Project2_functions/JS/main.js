function changecolor() {           //create  a function
    var str = "WooHoo Pink Text!";  //assign string variable
    var result = str.fontcolor("pink");   //give string variable color
    document.getElementById("Pink_Text").innerHTML = result; //assign result after event

}

function myFunction() {       //create function
    var sentence = "I am learning";    //assign str variable
    sentence += " a lot from this program!";  //used += to concatenate sentence
    document.getElementById("Concatenate").innerHTML = sentence; // used id for result of event

}

