// script.js

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Pesanan Sukses
    document.getElementById("contactForm").style.display = "none";
    document.getElementById("confirmationMessage").style.display = "block";
  });
// script.js

let cart = [];

function addToCart(productName, price) {
  cart.push({
    name: productName,
    price: price,
  });

  updateCart();
}

function updateCart() {
  const cartContainer = document.getElementById("cartContainer");
  const cartTotal = document.getElementById("cartTotal");

  // Clear previous cart content
  cartContainer.innerHTML = "";

  // Display each item in the cart
  cart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartContainer.appendChild(cartItem);
  });

  // Display the total price
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartTotal.textContent = `Total: $${total.toFixed(2)}`;

  // Optional: You can send the cart data to a server for further processing
  // Example: sendCartToServer(cart);
}
