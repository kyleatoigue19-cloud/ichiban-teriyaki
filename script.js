let cart = [];
let total = 0;

function addItem(name, price) {
  cart.push({ name, price });
  total += price;
  renderCart();
}

function renderCart() {
  const cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "";

  cart.forEach((item) => {
    const div = document.createElement("div");
    div.textContent = `${item.name} - $${item.price}`;
    cartDiv.appendChild(div);
  });

  document.getElementById("total").textContent =
    "Total: $" + total.toFixed(2);
}

function sendOrder() {
  alert("Order sent to restaurant (next step will be SMS system)");
  cart = [];
  total = 0;
  renderCart();
}