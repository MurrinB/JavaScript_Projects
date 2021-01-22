//CREATE SWITCH USING LIST AND RESPONSE TO A USER INPUT
function princess_function() {
    var princess_output;
    var princess = document.getElementById("princess_Choice").value;
    var princess_response = " is my favorite princess!";
    switch(princess) {
        case "Snow White":
            princess_output = "Snow White" + princess_response;
        break;
        case "Cinderella":
            princess_output = "Cinderella" + princess_response;
        break;
        case "Elsa":
            princess_output = "Else" + princess_response;
        break;
        case "Rapunzel":
            princess_output = "Rapunzel" + princess_response;
        break;
        case "Venelope":
            princess_output = "Venelope" + princess_response;
        break;
        case "Belle":
            princess_output = "Belle" + princess_response;
        break;
        default:
            princess_output = "Please enter a princess from the list above.";

    }
    document.getElementById("Output").innerHTML = princess_output;
}