// Open and close the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// This function displays the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);

// This function changes the slide when the left or right arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// This function changes the slide when the dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); // This takes all elements with the class name "mySlides"
    var dots = document.getElementsByClassName("dot"); // This takes all elements with the class name "dot"
    
    // If n (the number passed into the function) is greater than the length of the array "slides", the slideIndex is set to 1
    if (n > slides.length) {slideIndex = 1};
    
    // If n is less than 1, the slideIndex is set to the length of the array "slides"
    if (n < 1) {slideIndex = slides.length};
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = "block";

    // Add active class to the current dot
    dots[slideIndex - 1].className += " active";
}

// Close the contact form when the user clicks outside of it
document.addEventListener("click", function(event) {
    // If the click happens on the cancel button OR anywhere that is not the contact form
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")) {
        closeForm();
    }
}, false);
