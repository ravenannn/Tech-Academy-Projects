//Demonstrate Switch Statement

//Create function
function animalFunction() {
    //Declare output variable
    var animalOutput;
    //Declare animal variable and assign it the value of the input
    var animals = document.getElementById("animalInput").value;
    //Create var and assign string output
    var animalString = " is a great animal!";
    //Create switch statement and utilize on animals
    switch(animals) {
        //if animal is cat
        case "Cat":
            //Set animalOutput to cat + animalString;
            animalOutput = "Cat" + animalString;
            //end the loop
        break;
         //if animal is Dog
         case "Dog":
            //Set animalOutput to Dog + animalString;
            animalOutput = "Dog" + animalString;
            //end the loop
        break;
         //if animal is 
         case "Pig":
            //Set animalOutput to Pig + animalString;
            animalOutput = "Pig" + animalString;
            //end the loop
        break;
         //if animal is Horse
         case "Cat":
            //Set animalOutput to Horse + animalString;
            animalOutput = "Horse" + animalString;
            //end the loop
        break;
         //if animal is Duck
         case "Duck":
            //Set animalOutput to Duck + animalString;
            animalOutput = "Duck" + animalString;
            //end the loop
        break;
         //if animal is Elephant
         case "Elephant":
            //Set animalOutput to Elephant + animalString;
            animalOutput = "Elephant" + animalString;
            //end the loop
        break;
        //If none of the inputs match, 
        //give default message to type animals exactly as on list
        default:
            animalOutput = "Please enter an animal exactly as written on above list.";

    }
    //link to html handler and display animalOutput
    document.getElementById("Output").innerHTML = animalOutput;
}



//Demonstrate getElementsByClassName() Method

//Create function
function byClassFunction() {
    //Declare variable and initiate it with the 
    //getElementsByClassName() Method calling on "Click"
    var chosenClass = document.getElementsByClassName("Click");
    //Assign new text to chosenClass at index of 1
    chosenClass[1].innerHTML = "This is the new message!";
}


//Draw Circle inside Canvas Element using JS
//Declare var and assign canvas element
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();


//Create linear gradient inside canvas element using JS
var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext("2d");

// Create gradient
var grd = ctx2.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

// Fill with gradient
ctx2.fillStyle = grd;
ctx2.fillRect(10, 10, 500, 230);