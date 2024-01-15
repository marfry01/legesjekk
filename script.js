// Get the audio element
var audio = document.getElementById("audio");

// Get the library links
var links = document.querySelectorAll(".library a");

// Add a click event listener to each link
console.clear();

class musicPlayer {
	constructor() {
		this.play = this.play.bind(this);
		this.playBtn = document.getElementById('play');
		this.playBtn.addEventListener('click', this.play);
		this.controlPanel = document.getElementById('control-panel');
		this.infoBar = document.getElementById('info');
	}

	play() {
		let controlPanelObj = this.controlPanel,
		infoBarObj = this.infoBar
		Array.from(controlPanelObj.classList).find(function(element){
					return element !== "active" ? controlPanelObj.classList.add('active') : 		controlPanelObj.classList.remove('active');
			});
		
		Array.from(infoBarObj.classList).find(function(element){
					return element !== "active" ? infoBarObj.classList.add('active') : 		infoBarObj.classList.remove('active');
			});
	}
}

const newMusicplayer = new musicPlayer();

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
    // Loop through the links to find the index of the current song
    for (var i = 0; i < links.length; i++) {
        if (links[i].href == currentSong) {
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
    if (currentIndex > links.length - 1) {
        currentIndex = 0;
    }
    // Get the next song from the link with the updated index
    var nextSong = links[currentIndex].href;
    // Change the source of the audio element to the next song
    audio.src = nextSong;
    // Play the audio element
    audio.play();
}

// Add an event listener to the audio element that will call the playNextSong function when the current song ends
audio.addEventListener("ended", playNextSong);

// Set an interval to call the nextSlide function every 3 seconds
setInterval(nextSlide, 3000);
