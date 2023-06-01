import sumar from "./sumador";

const montoVenta = document.querySelector("#monto-venta");
const efectivo = document.querySelector("#efectivo");
const form = document.querySelector("#venta-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if(montoVenta.value == "" || efectivo.value == "")
  {
    div.innerHTML = "Llene los campos que estan vacios";
    alert("Llene los campos que estan vacios");
  }
  else
  {
    const monto = Number.parseInt(montoVenta.value);
    const efect = Number.parseInt(efectivo.value);
    let cambio = efectivo - cambio;
    div.innerHTML = "<p>" + cambio + "</p>";
  }
  
});
