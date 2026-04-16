const right = document.querySelector(".right");
const left = document.querySelector(".left");
const slide = document.querySelector(".slide");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom")


let slideNumber = 1;
const length = images.length;

for(i = 0; i < length; i++){
    const div = document.createElement("div");
    div.className = "button";
    bottom.appendChild(div)
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "blue";

const resetBg = () => {
    buttons.forEach(button => {
        button.style.backgroundColor ="transparent";
    });
};

buttons.forEach((button,i) => {
    button.addEventListener("click", () => {
        resetBg()
        slide.style.transform = `translateX(-${i * 400}px)`;
        slideNumber = i + 1;
        button.style.backgroundColor = "blue";
    });
});

const nextSlide = ()=>{
    slide.style.transform = `translateX(-${slideNumber * 400}px)`;
    slideNumber++;
};
const prevSlide = ()=>{
    slide.style.transform = `translateX(-${(slideNumber - 2) * 400}px)`;
    slideNumber--;
};
const getFirstSlide = ()=>{
    slide.style.transform = `translateX(0px)`;
    slideNumber = 1;
};
const getLastSlide = ()=>{
    slide.style.transform = `translateX(${(length - 1) * 400}px)`;
    slideNumber = length;
}

right.addEventListener("click", ()=>{
    if(slideNumber < length){
       nextSlide();
    }else{
        prevSlide();
    }
    resetBg()
    buttons[slideNumber - 1].style.backgroundColor = "blue";
});
left.addEventListener("click", ()=>{
    if(slideNumber > 1){
        prevSlide();
    }else{
        getLastSlide();
    }
    resetBg()
    buttons[slideNumber - 1].style.backgroundColor = "blue";
});




// Auto slide
//let autoSlide = setInterval(nextSlide,3000);
//clearInterval(autoSlide);
//autoSlide = setInterval(nextSlide,3000);


