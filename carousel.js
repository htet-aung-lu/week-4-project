const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const slides = document.querySelectorAll(".carousel-item");
const totalSlides =slides.length;
let index =0
prevBtn.addEventListener("click",() => {
    hideAll()
    if(index === 0){
        index = totalSlides-1;
    }else{
        index--;
    }
    slides[index].classList.add('visible')
    

})
nextBtn.addEventListener("click",() => {
    hideAll()
    if(index === totalSlides-1){
        index = 0
    }else{
        index++
    }
    slides[index].classList.add('visible');
})

function hideAll(){
    for(let slide of slides){
    slide.classList.remove('visible')
    }
}