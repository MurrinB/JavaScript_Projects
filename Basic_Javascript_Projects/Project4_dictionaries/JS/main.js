function dictionary_family() {  //created a dictionary of my family members
    var family = {
        pet: "Max",
        mom: "Britnee",
        dad: "Richie",
        daughter: "Carma",
        son: "Keegan",
        rat: "Pablo"
    };
    delete family.rat;  // used delete operator to remove rat from dictionary
    document.getElementById("family").innerHTML = family.rat; // called for the familay member rat

}
