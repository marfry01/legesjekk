// Get the audio element
var audio = document.getElementById("audio");

// Get the library select element
var library = document.getElementById("library");

// Add a change event listener to the library select element
library.addEventListener("change", function() {
    // Change the source of the audio element to the value of the library select element
    audio.src = this.value;
    // Play the audio element
    audio.play();
});

// Get the play and pause icons
var play = document.getElementById("play");
var pause = document.getElementById("pause");

// Add a click event listener to the play icon
play.addEventListener("click", function() {
    // Play the audio element
    audio.play();
    // Hide the play icon
    play.style.display = "none";
    // Show the pause icon
    pause.style.display = "block";
});

// Add a click event listener to the pause icon
pause.addEventListener("click", function() {
    // Pause the audio element
    audio.pause();
    // Show the play icon
    play.style.display = "block";
    // Hide the pause icon
    pause.style.display = "none";
});

// Get the mute and unmute icons
var mute = document.getElementById("mute");
var unmute = document.getElementById("unmute");

// Add a click event listener to the mute icon
mute.addEventListener("click", function() {
    // Mute the audio element
    audio.muted = true;
    // Hide the mute icon
    mute.style.display = "none";
    // Show the unmute icon
    unmute.style.display = "block";
});

// Add a click event listener to the unmute icon
unmute.addEventListener("click", function() {
    // Unmute the audio element
    audio.muted = false;
    // Show the mute icon
    mute.style.display = "block";
    // Hide the unmute icon
    unmute.style.display = "none";
});

// Get the slides
var slides = document.querySelectorAll(".slide");

// Get the controls
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");

// Set the index of the current slide
var index = 0;

// Show the first slide
showSlide(index);

// Define a function to show a slide
function showSlide(n) {
    // Hide all the slides
    slides.forEach(function(slide) {
        slide.classList.remove("active");
    });
    // Show the slide with the given index
    slides[n].classList.add("active");
}

// Define a function to show the previous slide
function prevSlide() {
    // Decrease the index by 1
    index--;
    // If the index is less than 0, set it to the last slide
    if (index < 0) {
        index = slides.length - 1;
    }
    // Show the slide with the updated index
    showSlide(index);
}

// Define a function to show the next slide
function nextSlide() {
    // Increase the index by 1
    index++;
    // If the index is greater than the last slide, set it to 0
    if (index > slides.length - 1) {
        index = 0;
    }
    // Show the slide with the updated index
    showSlide(index);
}

// Define a function to play the next song
function playNextSong() {
    // Get the index of the current song
    var currentSong = audio.src;
    var currentIndex = -1;
    // Loop through the options to find the index of the current song
    for (var i = 0; i < library.options.length; i++) {
        if (library.options[i].value == currentSong) {
            currentIndex = i;
            break;
        }
    }
    // If the current song is not found, set the index to 0
    if (currentIndex == -1) {
        currentIndex = 0;
    }
    // Increase the index by 1
    currentIndex++;
    // If the index is greater than the last song, set it to 0
    if (currentIndex > library.options.length - 1) {
        currentIndex = 0;
    }
    // Get the next song from the option with the updated index
    var nextSong = library.options[currentIndex].value;
    // Change the source of the audio element to the next song
    audio.src = nextSong;
    // Play the audio element
    audio.play();
}

// Add an event listener to the audio element that will call the playNextSong function when the current song ends
audio.addEventListener("ended", playNextSong);

// Set an interval to call the nextSlide function every 3 seconds
setInterval(nextSlide, 3000);

// Get the menu icon and the menu
var menuIcon = document.querySelector(".menu-icon");
var menu = document.querySelector(".menu");

// Add a click event listener to the menu icon
menuIcon.addEventListener("click", function() {
    // Toggle the display of the menu
    menu.style.display = menu.style.display == "block" ? "none" : "block";
});

// Get the menu links
var menuLinks = document.querySelectorAll(".menu a");

// Add a click event listener to each menu link
menuLinks.forEach(function(menuLink) {
    menuLink.addEventListener("click", function(event) {
        // Prevent the default action of opening the section in the same page
        event.preventDefault();
        // Get the href of the menu link
        var href = this.href;
        // Get the section name from the href
        var section = href.split("#")[1];
        // Load the HTML file for the section
        window.location.href = section + ".html";
    });
});

// Get the top button
var topButton = document.getElementById("top");

// Add a click event listener to the top button
topButton.addEventListener("click", function() {
    // Scroll the website to the top
    window.scrollTo(0, 0);
});

// Add a scroll event listener to the window
window.addEventListener("scroll", function() {
    // Get the scroll position
    var scrollPosition = window.pageYOffset;
    // If the scroll position is greater than 0, show the top button
    if (scrollPosition > 0) {
        topButton.style.display = "block";
    } else {
        // Otherwise, hide the top button
        topButton.style.display = "none";
    }
});
