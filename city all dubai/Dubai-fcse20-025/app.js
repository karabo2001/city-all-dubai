/**
 * java scrip to control:
 * mobile veiw
 * video
 */
const hamburger = document.querySelector(".hamburger");

const navlinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navlinks.classList.toggle("open");
});

/* video controler*/
var video = document.querySelector(".video");

var play = document.querySelector(".play-icon");

var buttonPlay = document.querySelector(".play-button");

var header = document.querySelector(".header-img");

var intro = document.querySelector(".intro");

var introText = document.querySelector("");

function togglePlay() {
    if(video.paused){
       play.className = "onplay";
       video.className = "playing";
       header.className = "header-image";
       buttonPlay.className = "play-button-toggle"
       intro.className = "intro-gone"
       video.play();  
    }else {
        play.className = "play-icon";
        video.className = "video";
        header.className = "header-img";
        buttonPlay.className = "play-button"
        intro.className = "intro"
        video.pause();
    }
   
}



