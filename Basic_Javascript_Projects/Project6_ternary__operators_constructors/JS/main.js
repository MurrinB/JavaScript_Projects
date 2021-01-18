function Ride_Function() {  //used ternary operation to give one of two respones
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function voter_age() {  // used ternary operation to display one of two answers depending on user input
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age < 18) ? "You are too young to vote.":"You can vote!";
    document.getElementById("vote").innerHTML = can_vote;
}

function Vehicle(Make, Model, Year, Color) {  //made a constructor for vehicle 
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); // added new vehicles 
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =   //gives HTML access to call on of the objects and details
    "Erik drives a " + Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model +
    " manufactered in " + Erik.Vehicle_Year;
}

var Joe = new Vehicle("Toyota", "Camery", 2015, "Black");  //added new object to construct

function vehicle_new() {   // called new vehicle in HTML doc
    document.getElementById("New_and_This").innerHTML = 
    Joe.Vehicle_Model;
}

function Pet(name, color, breed, age) { //made a new constructor: pet
    this.name = name;
    this.color = color;
    this.breed = breed;
    this.age = age;
}

var Max = new Pet("Max", "Black", "Miniature Pincher", 9); // added new pets to construct
var Thor = new Pet("Thor", "Beige", "Silky Terror", 9);

function count_function() {  //made a nested function which would be the plus_two function
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var starting_point = 5;
        function Plus_two() {starting_point += 2;}
        Plus_two();
        return starting_point;
    }
}