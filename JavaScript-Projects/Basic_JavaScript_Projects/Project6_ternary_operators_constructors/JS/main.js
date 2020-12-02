//Create function
function Ride_Function() {
//Create variables to hold values for inputted height and whether or not a person can ride
    var Height, Can_Ride;
//Pull value entered by user for "height"
    Height = document.getElementById("Height").value;
//Use ternary operator to compare height to 52inc(min height requirement)
//Assign messages for both outcomes
    Can_Ride = (Height < 52) ? "You are too short":"You are tall enough";
//Link to HTML handler + assign result + end of printed message
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}

//Create constructor function for Pet objects
//Use "this" to set values for parameters
function Pet(Type, Color, Sound, Age) {
    this.petType = Type;
    this.petColor = Color;
    this.petSound = Sound;
    this.petAge = Age;
}
//Create Pet object with assigned properties
var porky = new Pet("pig", "pink", "oink", 2);
//Create function to get color
function getColor() {
//Link to HTML event and display color of pet
    document.getElementById("New_and_This").innerHTML =
"My pet is the color " + porky.petColor + ".";
}


//Create Function
function countFunction() {
//Link new function to HTML handler (What is a better way to describe this step?)
    document.getElementById("Nested_Function").innerHTML = Subtract();
//Create function Subtract()
    function Subtract() {
//Create variable and assign it a starting number
        var startingPoint = 20;
//Create nested function & give it action of subtracting one
        function minusOne() { startingPoint -= 1;}
//Call function minusOne()
        minusOne();
//Return value after executing minusOne() function
        return startingPoint;
    }
}