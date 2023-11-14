// JavaScript code for adding items to a shopping cart
let totalAmount = 0;

function addItem(item, price) {
  // Get the cart element, item list, and total amount span
  const cart = document.getElementById('cartItems');
  const totalSpan = document.getElementById('totalAmount');
  
  // Create a new list item
  const listItem = document.createElement('li');
  listItem.textContent = `${item} - $${price.toFixed(2)}`;

  // Update the total amount
  totalAmount += price;
  totalSpan.textContent = totalAmount.toFixed(2);

  // Append the new item to the cart
  cart.appendChild(listItem);
}
