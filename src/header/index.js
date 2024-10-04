const imagesSlide = [
    {
        url: "url(../assets/slide/IRN/1.png)",
    },
    {
        url: "url(../assets/slide/IRN/2.png)",
    },
    {
        url: "url(../assets/slide/IRN/3.png)",
    },
    {
        url: "url(./assets/slide/IRN/4.png)",
    },
    {
        url: "url(../assets/slide/IRN/5.png)",
    },
    {
        url: "url(../assets/slide/IRN/6.png)",
    },
    {
        url: "url(../assets/slide/IRN/7.png)",
    },
    {
        url: "url(../assets/slide/IRN/8.png)",
    },
    {
        url: "url(../assets/slide/IRN/9.png)",
    },
    {
        url: "url(../assets/slide/IRN/10.png)",
    },
    {
        url: "url(../assets/slide/IRN/11.png)",
    },
    {
        url: "url(../assets/slide/IRN/12.png)",
    },
    {
        url: "url(../assets/slide/IRN/13.png)",
    },
    {
        url: "url(../assets/slide/IRN/14.png)",
    },
]

const header = document.querySelector(".container-header")
console.log(header.innerHTML);

const scrollerEffect = () => {
    document.addEventListener("scroll", () => {
        
        const scrollBarPosition = window.pageYOffset
        if (scrollBarPosition > 30) {
            header.classList.add("scroll");
        }
    
        if (scrollBarPosition < 30) {
           header.classList.remove("scroll");
        }
    
    })
    }
scrollerEffect();