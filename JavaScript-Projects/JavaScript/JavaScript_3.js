function displayType(house) {
    var houseName = house.getAttribute("data-house_name");
    alert(house.innerHTML + " is in " + houseName + " house!");
}