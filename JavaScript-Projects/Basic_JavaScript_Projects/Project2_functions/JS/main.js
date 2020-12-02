//Define function and name it
function colorFunction() {
//Define first variable with a string value
    var str = "This text is blue!";
//Use fontcolor method on str value
    var result = str.fontcolor("blue");
//Put value of result into HTML element with id of "blueText"
    document.getElementById("blueText").innerHTML = result;
}
//Define function and name it
function myFunction() {
//Create variable and assign it a string
    var sentence = "I am learning";
//Use += operators on variable assigned to second half of string
    sentence += " a lot from this book!";
//Utilize doc.getElementById to enact html event on p id "concatenate"
    document.getElementById("concatenate").innerHTML = sentence;
}