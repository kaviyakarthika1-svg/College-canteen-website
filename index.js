let total = 0;

function add(item, price){

let cart = document.getElementById("cartItems");
let totalDisplay = document.getElementById("total");

if(cart.innerHTML === "No items"){
cart.innerHTML = "";
}

let newItem = document.createElement("p");
newItem.innerText = item + " ₹" + price;

cart.appendChild(newItem);

total = total + price;
totalDisplay.innerText = "Total: ₹" + total;

}


function clearCart() {

document.getElementById("cartItems").innerHTML = "No items";
document.getElementById("total").innerText = "Total: ₹0";

total = 0;

}