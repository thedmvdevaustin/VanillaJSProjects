const colorContainer = document.querySelector(".color-container");
const p = document.querySelector('p');
window.addEventListener("click", function(e){
    if (e.target.classList.contains("generate-btn")){
        const newColor = `rgb(${generateRandomNumber()}, ${generateRandomNumber()}, ${generateRandomNumber()})`
        colorContainer.style.backgroundColor = newColor;
        p.textContent = newColor;
    };
    if (e.target.classList.contains("copyColor-btn")){
        this.alert("Color has been copied to the clipboard")
    }

});

function generateRandomNumber(){
    return Math.floor(Math.random() * 255);
};