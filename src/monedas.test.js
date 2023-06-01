import Monedas from "./monedas.js";

describe("Monedas", () => {
  it("deberia retornar el numero 5", () => {
    let monedas = new Monedas(5);
    monedas.cambiar()
    expect(monedas.cambio).toEqual(5);
  });
});
