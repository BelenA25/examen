import Monedas from "./monedas.js";

describe("Monedas", () => {
  it("deberia retornar el numero 5", () => {
    let monedas = new Monedas(5);
    monedas.cambiar()
    expect(monedas.cambio).toEqual(5);
  });
  it("deberia retornar dos valores para 7", () => {
    let monedas = new Monedas(7);
    monedas.cambiar()
    expect(monedas.cambio).toEqual([5,2]);
  });
  it("deberia retornar dos valores de 5 para 10", () => {
    let monedas = new Monedas(10);
    monedas.cambiar()
    expect(monedas.cambio).toEqual([5,5]);
  });
  it("deberia retornar 5,1 para 6", () => {
    let monedas = new Monedas(6);
    monedas.cambiar()
    expect(monedas.cambio).toEqual([5,1]);
  });
  it("deberia retornar 5,5,1 para 11", () => {
    let monedas = new Monedas(11);
    monedas.cambiar()
    expect(monedas.cambio).toEqual([5,5,1]);
  });
});
