// create countdown
function countdown() {      //get user input seconds
    var seconds = document.getElementById("seconds").value;
    
    function tick() {  //cause countdown by 1 from users given number
        seconds = seconds -1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000); //makes it countdown in seconds
    if(seconds == -1) {
        alert("Time's up!"); //pop up when timer gets to 0
    }

    }
    tick();
}

//SLIDESHOW
var slideIndex = 1;
showSlides(slideIndex);

// NEXT AND PREV CONTROLS
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//IMAGE CONTROLS
function currentSlide(n) {
    showSLides(slideIndex = n);
}

//IMAGES FLIP THROUGH PAGES
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex =1}
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