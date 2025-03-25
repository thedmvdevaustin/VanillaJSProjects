const accordions = document.getElementsByClassName('accordion__input');

for(let i = 0; i < accordions.length; i++){
    accordions[i].addEventListener("click", function(e){
        this.parentElement.nextElementSibling.classList.toggle("active")
    });
}