function displayType(animal) {
    var animalType = animal.getAttribute("data-animal-breed");
    alert(animal.innerHTML + " is a " + animalType);
}