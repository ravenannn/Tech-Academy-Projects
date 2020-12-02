//String Methods
//concat() method

//Create function
function concatFunction() {
    //Create var to store first part of sentence
    var ptOne = "If it is raining,";
    //Create var to store second part of sentence
    var ptTwo = " be sure to bring an umbrella,";
    //Create var to store third part of sentence
    var ptThree = " but if it is sunny,";
    //Create var to store fourth part of sentence
    var ptFour = " be sure to bring sunblock.";
    //Create var to store concatted result (full sentence)
    var fullSentence = ptOne.concat(ptTwo, ptThree, ptFour);
    //link to html handler and print concatted result
    document.getElementById("Concatenation").innerHTML = fullSentence;
}


//slice() method

//Create function
function sliceFunction() {
    //Create variable and set it to a string
    var sentence = "The puppy's red ball was it's favorite toy";
    //Create variable for slice and utilize slice() method
    var sliced = sentence.slice(12, 15);
    //link to html handler and return sliced portion of sentence ("red")
    document.getElementById("Slice").innerHTML = sliced;
}


//toUpperCase() method

//Create function
function upperCaseFunction() {
    //Create variable and set to a string value
    var word = "uppercase";
    //Create result variable & utilize toUpperCase() method
    var result = word.toUpperCase();
    //link to html event handler and return result
    document.getElementById("Uppercase").innerHTML = result;
}


//search() method

//Create function
function searchFunction() {
    //Create sentence var and assign string
    var sentence = "The little girl had a pretty pink polka dotted dress.";
    //Create located var and utilize search() method on sentence
    var located = sentence.search("pink");
    //link to html handler and return located (location of "pink")
    document.getElementById("Search").innerHTML = located;
}




//Number Methods
//toString() method

//Create Function
function numToString() {
    //Create num variable and assign a number
    var num = 326;
    //Create result variable and utilize toString() method on num
    var stringifyResult = num.toString();
    //link to html handler and print result
    document.getElementById("Stringify").innerHTML = stringifyResult;
}



//toPrecision() Method

//Create function
function precisionFunction() {
    //Create num variable and set to a number
    var num = 84743620.48574662525427;
    //Create result variable and utilize toPrecision() Method on num
    var result = num.toPrecision(16);
    //link to html handler and print num with the first 16 digits
    document.getElementById("Precision").innerHTML = result;
}


//toFixed() Method

//Create function
function fixedFunction() {
    //Create num variable and assign number
    var num = 12.34567890;
    //Create result variable and utilize toFixed() method with 4
    var result = num.toFixed(4);
    //Link to html event handler and print result (num rounded to 4th decimal place)
    document.getElementById("Fixed").innerHTML = result;
}


//valueOf() method

//Create function
function valueOfFunction() {
    //Create num variable and assign number value
    var num = 123;
    //Create result variable and utilize valueOf() method on num
    var result = num.valueOf();
    //link to html handler and return result
    document.getElementById("Value").innerHTML = result;
}