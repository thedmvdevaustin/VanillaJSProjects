const calculateBtn = document.querySelector(".calculator__form-button");
const ageInput = document.querySelector("#calculator__form-age");
const weightInput = document.querySelector("#calculator__form-weight");
const heightInput = document.querySelector("#calculator__form-height");

calculateBtn.addEventListener("click", function(){
    if (ageInput.value==="" || weightInput.value==="" || heightInput.value===""){
        alert("Please make sure all fields are filled out!");
        return;
    };
    const weight = Number(weightInput.value);
    const height = Number(heightInput.value);
    let bmi = (weight / (height**2)) * 703;

    const results = document.querySelectorAll(".calculator__results p");

    results[0].textContent = `Your age is: ${ageInput.value}`;
    results[1].textContent = `Your BMI is: ${bmi.toFixed(1)}`;
    results[2].textContent = `You are: ${bmi < 18.5 ? "Underweight" : bmi < 25 ? "Normal weight" : bmi < 30 ? "Overweight" : "Obesity" }`;

    const form = document.querySelector(".calculator__form");
    form.style.borderBottom = "1px solid rgba(128, 128, 128, 0.381)";
    form.style.paddingBlockEnd = "1rem";
});