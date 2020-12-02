//Create function
function personDictionary() {
//Create object "person"
    var person = {
//Assign name
    Name:"Raven",
//Assign Age
    Age: 32,
//Assign boolean for Marriage status
    Married: true,
//Assign favorite color
    Favorite_Color: "Purple",
//Assign number of children
    Number_Of_Children: 1
    };
//Delete Favorite Color key with value of purple from person object
    delete person.Favorite_Color;
//Create printed statement that pulls Favorite color and link it to event handler
    document.getElementById("Dictionary").innerHTML = person.Favorite_Color;
//Will return "undefined" due to deletion of favorite color on line 17
}