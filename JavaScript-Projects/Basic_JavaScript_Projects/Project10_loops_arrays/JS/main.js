//Demonstrate While Loop

//Create function
function Call_Loop() {
    var num = "";
    var X = 1;
    while (X < 16) {
        num += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = num;
}


//Demonstrate str.length property

//Create function
function stringLength() {
    //create var str and assign it a string
    var str = "Count my Characters";
    //link to html handler and use str.length property on str
    document.getElementById("Length").innerHTML = str.length;
}


//Demonstrate for loop

//Create var Instruments and assign an array of instruments
var Instruments = ["Drums", "Clarinet", "Trombone", "Guitar", "Saxophone", "Triangle"];
//Create content variable and set to an empty string
var content = "";
//Create variable to iterate with
var X;
//Create function to execute for loop
function for_Loop() {
    //Create for loop
    //Set initializer(X = 0)
    //Set condition(X is < length of instruments)
    //Set iteration(Add one to X each loop)
    for (X = 0; X < Instruments.length; X++) {
        //add string at current index of X & a new line
        content += Instruments[X] + "<br>";
    }
    //link to html handler and write content
    document.getElementById("List_of_Instruments").innerHTML = content;
}



//Create array function
function array_Function() {
    //create var and set to empty array
    var colors = [];
    //set colors for each index in colors obj
    colors[0] = "Red";
    colors[1] = "Blue";
    colors[2] = "Green";
    colors[3] = "Orange";
    colors[4] = "Purple";
    colors[5] = "Yellow";
    //link to html handler and print message with the color of the 4th element "Orange"
    document.getElementById("Array").innerHTML = "The 4th color is: " + colors[3] + ".";
}




//Utilizing const


//create const obj
//assign properties and values
const animal = {Type: "Cat", Color: "Black", Sound: "Meow"};
//Create function
function constant_function() {
    //change a property value
    animal.Color = "Gray";
    //add a property with a value
    animal.Age = 2;
    //link to html handler and display a string that includes a property value
    document.getElementById("Constant").innerHTML = "The animal's color is " + animal.Color + " and its age is " + animal.Age + ".";
}




//Demonstrate use of let keyword
//******Must move script src to bottom of body to utilize document.write()******

//create variable and assign number
var X = 55;
//display value of X (55)
document.write("<br>" + X);
//assign let variable a number
{
    let X = 21;
    //display value of X (21)
    document.write("<br>" + X);
}
//display value of X (55, let variable has block scope & cannot be accessed outside curly brackets)
document.write("<br>" + X);



//Demonstrate return

//Create function
function myFunction() {
    //return Math.PI (value of pi)
    return Math.PI;
  }
 //link return to html handler and call function 
 document.getElementById("Return").innerHTML = myFunction();



 //create an object using the let keyword. 
 //Ensure your object includes properties and a method.

 //create obj using let
 //Assign properties with values
 let Animal = {
     type: "dog",
     color: "white",
     age: 3,
     sound: "barks",
     //Assign method (action stored in a property as a function)
     description: function() {
         return "The animal is a " + this.age + " year old " + this.color + " " + this.type + " that " + this.sound + ".";
     }
 };
 //link method to html handler
 document.getElementById("AnimalObject").innerHTML = Animal.description();




 //Demonstrate Break statement
//Create and assign var text an empty string
 var text = "";
 //create var i (to hold current index)
var i;
//create for loop
//set initialization to i = 0
//set condition to i being less than 10
//set iteration to add 1 each time loop is executed
for (i = 0; i < 10; i++) {
    //if i equals 3, break the loop
  if (i === 3) { break;}
  //assign text string message with current value of i, new line
  text += "The number is " + i + "<br>";
}
//link to html handler and display text string (Will have stopped when i = 3)
document.getElementById("Break").innerHTML = text;




 //Demonstrate Continue statement
//Create and assign var text an empty string
var text = "";
//create var i (to hold current index)
var i;
//create for loop
//set initialization to i = 0
//set condition to i being less than 10
//set iteration to add 1 each time loop is executed
for (i = 0; i < 10; i++) {
   //if i equals 3, continue the loop
 if (i === 3) { continue; }
 //assign text string message with current value of i, new line
 text += "The number is " + i + "<br>";
}
//link to html handler and display text string (Will have skipped iteration where i = 0)
document.getElementById("Continue").innerHTML = text;