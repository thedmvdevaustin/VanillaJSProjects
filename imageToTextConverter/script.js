const imageInput = document.querySelector("input");
const imageShown = document.querySelector("img");
const convertBtn = document.querySelector("button");
const p = document.querySelector('p');

convertBtn.addEventListener("click", function(event){
    if (!imageInput.files) {
        alert("Please choose a image file");
        return;
    };
    imageShown.setAttribute("src", `images/${imageInput.files[0].name}`)
    const reader = new FileReader();
    reader.onload = async (e) => {
        try {
            const worker = await Tesseract.createWorker('eng');
            const ret = await worker.recognize(e.target.result);
            p.textContent = ret.data.text;
            await worker.terminate();
        } catch(error) {
            p.textContent = `Error: ${error.message}`;
        }
    };

    reader.readAsDataURL(imageInput.files[0])
})
