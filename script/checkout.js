console.log(localStorage.getItem("cartItems"))
let mainContent = document.getElementById("main");
let grandTotalContent = document.getElementById("grandTotal");
// console.log(mainContent)
let products = JSON.parse(localStorage.getItem("cartItems"));
let cartItemsFinal = []
let grandTotal = 0
products.forEach((product) => {
    // console.log(product.name);
    // console.log(product.category);
    // console.log(cartItemsFinal);
    if (cartItemsFinal.length > 0) {
      // console.log(product);
      item = cartItemsFinal.find((object) => object.id === product.id);
      if (item === undefined || item == null) {
        console.log('push');
        cartItemsFinal.push(product);
      }
      else {
        console.log('inc');
        item.quantity += 1;
        console.log(cartItemsFinal);
    }
}
else {
  cartItemsFinal.push(product);
  console.log('init')
}
});
cartItemsFinal.forEach((cartItem) => {
itemTotal = cartItem.price * cartItem.quantity;
grandTotal += itemTotal;
mainContent.innerHTML += `
    <tr>
    <td>
    <p>${cartItem.name}</p>
    </td>
    <td>
    <p>${cartItem.category}</p>
    </td>
    <td>
    <p>${cartItem.price}</p>
    </td>
    <td>
    <p>${cartItem.quantity}</p>
    </td>
    <td>
    <p>${itemTotal} </p>
    </td>
    <td>
    <button class="removeFromCart" value='${cartItem.id}'>Delete</button>
    </td>
    <br><br>
      </td>
    </tr>
  `;
});
if (grandTotal > 0) {
mainContent.innerHTML += '<h4>Total: ' + grandTotal.toFixed(2) +'</h4>';
}
mainContent.innerHTML += `
<button id="purchaseButton">Purchase</button>
`;
mainContent.innerHTML += `
<button id="clearButton">Clear Cart</button>
`;
let purchaseButton = document.getElementById("purchaseButton");
purchaseButton.addEventListener("click", () => {
alert("Thank you for purchasing");
});
let clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", () => {
  localStorage.removeItem("cartItems");
  location.reload();
});
const removeFromCartButtons = document.querySelectorAll('.removeFromCart');
removeFromCartButtons.forEach((button) => {
let quantity = 0;
button.addEventListener('click', (event) => {
removeFromCart(event.target.value);
});
});
function removeFromCart() {
console.log('To do ');
};