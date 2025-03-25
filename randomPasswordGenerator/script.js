const button = document.querySelector("button");
const input = document.querySelector("input");
button.addEventListener("click", function(e){
    if (input.value===""){
        alert("Please Enter a password size");
        return;
    }
    
    let newPassword = Array.from(new Array(Number(input.value)), (x, i) => {
        return generateRandomNumber()
    })
    newPassword = String.fromCharCode(...newPassword)
    const p = document.querySelector("p");
    p.textContent = `Password: ${newPassword}`
});

function generateRandomNumber(){
    return Math.floor(Math.random() * (126 - 33 + 1) + 33)
}


//1. make an array of the inputted size
//2. create a function that returns a random number from 33 to 126(these are the unicode values that represent all the numbers letters and special characters that are on a keyboard)
//3. loop through the array and each numbers value will be a random number from 32 to 126
//4. spread the generated array of random numbers into the fromCharCode() function
//5. put the generated password into the text Content of the p tag