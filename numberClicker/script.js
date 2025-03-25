const buttons = document.querySelector(".buttons");
const number = document.querySelector(".number")
let count = 0
buttons.addEventListener("click", function(e){
    if (e.target.classList.contains("plus")){
        number.textContent = count++
    }
    if (e.target.classList.contains("minus")){
        number.textContent = count--
    }
});