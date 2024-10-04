

const imageAbout = document.querySelector(".img-about");
const imageAboutTwo = document.querySelector(".img-about-2");

let index = 0;
let index2 = 13;




setInterval(() => {
    if (index == 13) {
        index = 0;
    }
    
    if (index2 == 0) {
        index2 = 13;
    }
    index++;
    index2 = index -1
    imageAbout.style.backgroundImage = imagesSlide[index].url
    imageAboutTwo.style.backgroundImage = imagesSlide[index2].url
}, 8000);
