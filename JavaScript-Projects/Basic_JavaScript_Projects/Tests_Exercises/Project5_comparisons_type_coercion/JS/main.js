//Utilize type of method to display what type of element true is 
document.write(typeof true); //boolean
document.write("<br>");//new line

//Create function
function displayNotANumber() {
//Create and link html event handler to output of NaN
    document.getElementById("NaN").innerHTML = 0/0;
}


//Create function
function getFalse() {
    //Create and link html event handler to output of "false" when testing isNaN() method
        document.getElementById("False").innerHTML = isNaN(234);
}
    
//Create function
function getTrue() {
//Create and link html event handler to output of "true" when testing isNaN() method
    document.getElementById("True").innerHTML = isNaN("This is a string");
}

//Display Infinity
document.write(2E310); 
document.write("<br>");//new line
//Display -Infinity
document.write(-2E312); 
document.write("<br>");//new line

//Display true using boolean logic
document.write(10 > 5);
document.write("<br>");//new line

//Display false using boolean logic
document.write(10 < 5);
document.write("<br>"); //new line

console.log(2 + 2);

//Demonstrate type coercion
document.write("20" + 5); //"205"
document.write("<br>");//new line

//Another example of type coercion
document.write("Add" + 5); //"Add5"
document.write("<br>"); //new line

//Display "false" in the console using boolean logic and console.log
console.log(3 > 9);

//Use double equals to return "true"
document.write(13 == 13);
document.write("<br>");//new line

//Use double equals to return "false"
document.write(11 == 2);
document.write("<br>");//new line

//Testing Triple Equals ===
//Return true by ensuring to match the data type and value.
document.write( 2 === 2);
document.write("<br>");//new line

//Return false by writing a different data type and different value.
document.write(4 === "12");
document.write("<br>");//new line

//Return false by writing a different data type but the same value for both.
document.write(5 === "5");
document.write("<br>");//new line

//Return false by writing the same data type but a different value for both.
document.write(7 === 9);
document.write("<br>");//new line

// utilize the AND operator to display true
document.write(5 < 8 && 3 > 2);
document.write("<br>");//new line

//Utilize the AND operator to display false
document.write(6 > 8 && 4 < 9);
document.write("<br>");//new line

//Utilize the OR operator to display true
document.write(8 > 10 || 4 < 5);
document.write("<br>");//new line

//Utilize the OR operator to display false
document.write(7 > 9 || 10 > 12);
document.write("<br>");//new line

//Create function
function useNotToReturnFalse() {
//Utilize Not operator to return a statement of "false" when linked tp html event handler
    document.getElementById("NotIsFalse").innerHTML = !(5 > 2 );
}

//Create function
function useNotToReturnTrue() {
//Utilize Not operator to return a statement of "true" when linked tp html event handler
    document.getElementById("NotIsTrue").innerHTML = !(3 > 9);
}