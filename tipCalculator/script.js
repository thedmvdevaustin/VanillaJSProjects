const billAmount = document.querySelector("#calculator__calculate-amount");
const tipPercentage = document.querySelector("#calculator__calculate-tip");
const calculateBtn = document.querySelector("button");
calculateBtn.addEventListener("click", function(){
    if (billAmount.value==="" || tipPercentage.value===""){
        alert("Please make sure to fill out both fields");
        return;
    };
    const tip = Number(billAmount.value) * (Number(tipPercentage.value)*.01);
    document.querySelector(".calculator__tip").textContent = `Tip Amount: ${tip}`;
    document.querySelector(".calculator__total").textContent = `Total Amount: ${Number(billAmount.value) + tip}`;
})