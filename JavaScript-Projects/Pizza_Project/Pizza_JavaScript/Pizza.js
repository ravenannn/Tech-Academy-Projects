function getReceipt() {
    //This initializes our string so it can get passed from
    //function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>";
    //Declare runningTotal variable and assign starting value of 0
    var runningTotal = 0;
    //Declare sizeTotal and assign starting value of 0
    var sizeTotal = 0;
    //declar sizeArray and assign elements values of "size"
    var sizeArray = document.getElementsByClassName("size");
    //starting at index 0, while index is less than the length of the size array
        //increment indext by 1
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>";
        }
    }
    //if selectedSize is Single slice
    if (selectedSize === "Single Slice") {
        //set sizeTotal to equal 3
        sizeTotal = 3;
        //if selectedSize equals Personal Pizza
    } else if (selectedSize === "Personal Pizza") {
        //set sizeTotal to equal 6
        sizeTotal = 6;
        //if selectedSize equals Medium Pizza
    } else if (selectedSize === "Medium Pizza") {
        //set sizeTotal to equal 10
        sizeTotal = 10;
        //if selectedSize equals Large Pizza
    } else if (selectedSize === "Large Pizza") {
        //set sizeTotal to equal 14
        sizeTotal = 14;
        //if selectedSize equals Extra Large Pizza
    } else if (selectedSize === "Extra Large Pizza") {
        //set sizeTotal to equal 16
        sizeTotal = 16;
    }
    //Set runningTotal to equal sizeTotal
    runningTotal = sizeTotal;
    //Log you ordered message with size and price
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    //these variables will get passed on to each function
    getTopping(runningTotal,text1);
};

//create function to get toppings and pass in current runningTotal price and ordered message
function getTopping(runningTotal,text1) {
    //Declare var toppingTotal and set to initial value of 0
    var toppingTotal = 0;
    //Create selectedTopping var and assign an empty array
    var selectedTopping = [];
    //set toppingArray to "toppings" class
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        //if a topping is found at current index of toppingArray
        if (toppingArray[j].checked) {
            //push that topping value to selectedTopping array
            selectedTopping.push(toppingArray[j].value);
            //log selected topping message with values
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    //declare variable toppingCount and assign it the length of the selectedTopping array
    var toppingCount = selectedTopping.length;
    //if there are more than 1 toppings
    if (toppingCount > 1) {
        //subtract 1 from toppingCount
        toppingTotal = (toppingCount - 1);
        //else
    } else {
        //there are 0 toppings
        toppingTotal = 0;
    }
    //runningTotoal equals the sum of runningTotal plus toppingTotal
    runningTotal = (runningTotal + toppingTotal);
    //log total selected toppings message
    console.log("total selected topping items: "+toppingCount);
    //log toppingCount and include 1 free topping
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    //log you ordered message
    console.log("topping text1: "+text1);
    //log puchase total message
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    //show your order total message visably
    document.getElementById("showText").innerHTML=text1;
    //show the total price in bold
    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+
        runningTotal+".00"+"</strong></h3>";
};