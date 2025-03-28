// Apple iPhone 15 - $999 x 1
// Samsung Galaxy S24 - $799 x 1
// Google Pixel 7 - $699 x 1

const shopItems = document.querySelector(".website__items");
const itemsInCart = document.querySelector(".website__cart-items");
const buyBtn = document.querySelector(".website__cart-btn");
let iPhoneCount = 1;
let galaxyCount = 1;
let googleCount = 1;

shopItems.addEventListener("click", function(e){
    switch (e.target.id){
        case 'iPhone':
            addToCart(`Apple iPhone 15 - $999 x ${iPhoneCount}`)
            break;
        case 'galaxy':
            addToCart(`Samsung Galaxy S24 - $799 x ${galaxyCount}`)
            break;
        case 'google':
            addToCart(`Google Pixel 7 - $699 x ${googleCount}`)
            break;
    };
    const shopTotal = document.querySelector(".website__cart-total");
    totalAmount = Number(shopTotal.textContent.split("$")[1]);
    shopTotal.textContent = `Total: $${totalAmount+Number(e.target.previousElementSibling.textContent.split("$")[1])}.00`
});

itemsInCart.addEventListener("click", function(e){
    if (e.target.classList.contains("website__cart-itemBtn")){

        const shopTotal = document.querySelector(".website__cart-total");
        totalAmount = Number(shopTotal.textContent.split("$")[1]);
        let amount = Number(e.target.previousElementSibling.textContent.split("$")[1].split("x")[0]) * Number(e.target.previousElementSibling.textContent.split("$")[1].split("x")[1]);
        shopTotal.textContent = `Total: $${totalAmount - amount}.00`
        e.target.parentElement.remove();
    }
});

buyBtn.addEventListener("click", function(){
    if (this.previousElementSibling.textContent.split("$")[1]==='0.00'){
        alert("You have not purchased anything!");
        return;
    };
    alert(this.previousElementSibling.textContent);
})

function addToCart(string){
    if (alreadyInCart(string[0])){
        const cartItems = document.querySelectorAll(".website__cart-item");
        cartItems.forEach(item => {
            console.log(item)
            increaseAmountInCart(item, string);
        });
    } else {
        const ul = document.querySelector(".website__cart-items");
        ul.innerHTML += `<li class="website__cart-item">
        <p class="website__cart-itemName">${string}</p>
        <button class="website__cart-itemBtn">Remove</button>
        </li>`;
    }    
}

function alreadyInCart(element){
    const cartItems = document.querySelectorAll(".website__cart-item");
    if (cartItems.length < 1) return false;
    let output = false
    cartItems.forEach(item => {
        if (item.firstElementChild.textContent.startsWith(element)){
            output = true;
        };
    });
    return output;
}

function increaseAmountInCart(cartItem, string){
    if (cartItem.firstElementChild.textContent.startsWith("A") && string.startsWith("A")){
        iPhoneCount = Number(string.at(-1));
        cartItem.firstElementChild.textContent = `${string.substring(0, string.length-1)}${iPhoneCount+=1}`
    }
    if (cartItem.firstElementChild.textContent.startsWith("S") && string.startsWith("S")){
        galaxyCount= Number(string.at(-1));
        cartItem.firstElementChild.textContent = `${string.substring(0, string.length-1)}${galaxyCount+=1}`
    }
    if (cartItem.firstElementChild.textContent.startsWith("G") && string.startsWith("G")){
        googleCount = Number(string.at(-1));
        cartItem.firstElementChild.textContent = `${string.substring(0, string.length-1)}${googleCount+=1}`
    }
    return;
}

/* 
WHAT ARE YOU TRYING TO DO?
1. FIND OUT A WAY TO CHECK IF THE ITEM WE CLICKED IS ALREADY IN THE SHOPPING CART. IF IT IS THEN INCREMENT THE NUMBER OF ITEMS THAT ARE IN THE CART FOR THE SELECTED ITEM, IT IT ISN'T ADD THE ITEM IN THE SHOPPING CART
STRATEGIES
1. put the same class name on the shop item and the cart item; when you send the shop item over to the function that checks if its already in the cart, compare the 2 classes and return true if it is in the cart item list and false if it isn't
2. navigate to the title from the e.target and compare the title name to the specific shopping cart name, might be tedious but you can hard code it since it is only 3 items
*/


