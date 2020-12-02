//Create function
function addTwo() {
//Create variable to hold addition equation
    var add = 5 + 2;
//Create printed statement and link to event handler
    document.getElementById("Math").innerHTML = "5 + 2 = " + add;
  }

//Create function
function subtractTwo() {
//Create variable to hold subtraction equation
    var subtract = 5 - 2;
//Create printed statement and link to event handler
    document.getElementById("Sub").innerHTML = "5 - 2 = " + subtract;
  }

//Create function
function multiplyTwo() {
//Create variable to hold multiplication equation
    var multiply = 5 * 2;
//Create printed statement and link to event handler
    document.getElementById("Mult").innerHTML = "5 * 2 = " + multiply;
  }

//Create function
function divideTwo() {
//Create variable to hold division equation
    var divide = 6 / 2;
//Create printed statement and link to event handler
    document.getElementById("Div").innerHTML = "6 / 2 = " + divide;
  }

//Create function
function simpleMath() {
//Create variable to hold math equation utilizing mulitple operators
    var mathProb = (1 + 5) * 2 / 2 - 5;
//Create printed statement and link to event handler
    document.getElementById("All").innerHTML = "1 plus 5 multiplied by 2, divided in half, then subtracted by 5 = " + mathProb;
}

//Create function
function getRemainder() {
//Create variable to hold modulus equation
    var remainder = 20 % 8;
//Create printed statement and link to event handler
    document.getElementById("Remain").innerHTML = "When you divide 20 by 8, you get a remainder of " + remainder;
}

//Create function
function negationOperator() {
//Create variable and assign a number
    var x = 20;
//Create a printed statement that will return to negative version of variable and link to event handler
    document.getElementById("Negate").innerHTML = "The opposite or negative of 20 = " + -x;
}

//Create function
function incrementOne() {
//Create variable & assign a number
    var y = 3;
//Increment assigned variable number
    y++;
//Create printed statement of result and link to event handler
    document.getElementById("Inc").innerHTML = "When you increment 3 once, you get " + y;
}

//Create function
function decrementOne() {
//Create variable and assign a number
    var a = 6;
//Increment assigned variable number
    a--;
//Create printed statement of result and link to event handler
    document.getElementById("Dec").innerHTML = "When you decrement 6 once, you get " + a;
}
//Create pop up alert that displays a random number between 0 and 50
window.alert(Math.random() * 50);

//Create function
function findSquareRoot() {
//Create variable to hold Math.sqrt method affected on a number
    var result = Math.sqrt(64);
//Create printed statement to display the result and attach to event handler
    document.getElementById("Root").innerHTML = "The square root of 64 is " + result;
}