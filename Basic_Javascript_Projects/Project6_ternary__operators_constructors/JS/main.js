function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function voter_age() {
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age < 18) ? "You are too young to vote.":"You can vote!";
    document.getElementById("vote").innerHTML = can_vote;
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model +
    " manufactered in " + Erik.Vehicle_Year;
}

var Joe = new Vehicle("Toyota", "Camery", 2015, "Black");

function vehicle_new() {
    document.getElementById("New_and_This").innerHTML = 
    Joe.Vehicle_Model;
}

function Pet(name, color, breed, age) {
    this.name = name;
    this.color = color;
    this.breed = breed;
    this.age = age;
}

var Max = new Pet("Max", "Black", "Miniature Pincher", 9);
var Thor = new Pet("Thor", "Beige", "Silky Terror", 9);