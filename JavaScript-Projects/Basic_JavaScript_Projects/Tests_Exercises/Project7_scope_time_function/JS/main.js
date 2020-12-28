//Demonstrate global scope
//Declare and assign value to global variable
var X = 10;
//Create function
function multipliedFunction1() {
    //Multiply var X by 2
    //Write result to screen
    document.write(X * 2);
}
//Create second function
function multipliedFunction2(){
    //Multiply variable by 3
    //Write result to screen
    document.write(X * 3);
}
//Call functions to test
multipliedFunction1();
document.write("<br>");//new line
multipliedFunction2();
document.write("<br>");//new line


//Demonstrate local scope
//Create function
function dividedFunction1() {
    //Declare local variable and assign value
    var Y = 12;
    //Divide variable by 2
    //Write result to screen
    document.write(Y / 2);
}

//Create second function
function dividedFunction2() {
    //Divide variable Y by 6 & write to screen
    document.write(Y / 6);
}
//Call Functions to test
dividedFunction1();
document.write("<br>");//new line   
dividedFunction2(); //THIS FUNCTION WILL NOT RETURN AN ANSWER
                    //IT DOES NOT HAVE ACCESS TO VARIABLE Y


//Create function
function conditionalDateFunction() {
    //if current month is October (9) - Date() method
    if (new Date().getMonth() === 9) {
        //link to html handler and return spooky season message
        document.getElementById("Conditionals").innerHTML = "It's Spooky Season!";
    }
}

//Create own if statement
function isItTheWeekend() {
    //If current day is Saturday or Sunday - Date() method
    if (new Date().getDay() === 5 || 6) {
        //link to html handler and return message about weekend
        document.getElementById("Weekend").innerHTML = "Enjoy your weekend!";
    }
}

//if else function
//Create function
function isItRaining() {
    //set input value to a variable
    rain = document.getElementById("Rain").value;
    //if input is variation of yes
    if (rain === "yes" || rain === "Yes") {
        //print message to bring umbrella
        message = "Bring an umbrella.";
    }
    //else
    else {
        //print message to wear jacket
        message = "Wear a jacket.";
    }
    //link to html handler button to print message
    document.getElementById("Weather").innerHTML = message;
}

//Else if statements
//Create function
function Time_function() {
    //declare var for time and set to computer's current time
    var Time = new Date().getHours();
    //Creat var for reply
    var Reply;
    //If time is less than 12 and at time is greater than 0
    if (Time < 12 == Time > 0) {
        //set reply to morning message
        Reply = "It is morning time!";
    }
    //else if time is greater than 12 and time is less than 18
    else if (Time > 12 == Time < 18) {
        //set reply to afternoon message
        Reply = "It is the afternoon.";
    }
    //else
    else {
        //set reply to evening message
        Reply = "It is evening time.";
    }
    //link to html message handler and print reply
    document.getElementById("Time_of_day").innerHTML = Reply;
}