const sliderContainer = document.querySelector(".imageSlider");
const slider = document.querySelector(".slider");
let sliderIndex = 0;
const sliderImages = document.querySelectorAll(".slider img");

sliderContainer.addEventListener("click", function(e){
    if (e.target.classList.contains("imageSlider__rightBtn")){
        sliderIndex = (sliderIndex+1)%5;
        slider.style.transform = `translateX(-${sliderIndex * 100}%)`;
    }
    if (e.target.classList.contains("imageSlider__leftBtn")){
        if (sliderIndex===0){
            sliderIndex = 4;
        } else {
            sliderIndex--;
        }
        slider.style.transform = `translateX(-${sliderIndex * 100}%)`
    }
})

//This only works if all the images you are using are equal in width
//if they are different sizes you will get a phenomenon where 2 images
//can appear on the screen at once, to see this try to un comment the
//images in the html and click the buttons

