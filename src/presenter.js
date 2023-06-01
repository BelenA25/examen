import sumar from "./sumador";

const montoVenta = document.querySelector("#monto-venta");
const efectivo = document.querySelector("#efectivo");
const form = document.querySelector("#venta-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const montoVenta = Number.parseInt(first.value);
  const efectivo = Number.parseInt(second.value);

  let cambio = efectivo - cambio;

  div.innerHTML = "<p>" + cambio + "</p>";
});
