//Create function
function oldEnoughToVote() {
    var age, canVote;
    age = document.getElementById("Age").value;
    canVote = (age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = canVote + " to vote.";
}