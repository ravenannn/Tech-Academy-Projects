//Create function
function countdown() {
    //Create var seconds and assign to input value
    var seconds = document.getElementById("seconds").value;
    //Create function tick
    function tick() {
        //set value of seconds to seconds minus 1
        seconds = seconds - 1;
        //link html handler and set to value of seconds
        timer.innerHTML = seconds;
        //pause program for 1,000 milliseconds (1 second)
        setTimeout(tick, 1000);
        //if seconds goes below 0 (-1)
    if(seconds == -1) {
        //give alert that time is up
        alert("Time's up!");
    }
        }
        //if seconds hasn't gone below 0, run through function tick() again
        tick();
}






//Create Slideshow
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}