// seleccionar todos los elementos que necesitamos

const priceInput = document.body.querySelector("[name=price]");
const quantityInput = document.body.querySelector("[name=quantity]");
const total = document.body.querySelector(".total");
const quantityLabel = document.body.querySelector(".quantity-label");

// crear las funciones

function calculateCost() {
  const price = priceInput.value;
  const quantity = quantityInput.value;
  const cost = price * quantity;
  console.log(cost);
  total.innerText = `$${cost}`;
}

function updateQuantity() {
  const quantity = quantityInput.value;
  quantityLabel.innerText = quantity;
}
// se ejecuta al cargarse el archivo
calculateCost();

// añadimos los eventos

priceInput.addEventListener("input", calculateCost);
quantityInput.addEventListener("input", calculateCost);
quantityInput.addEventListener("input", updateQuantity);