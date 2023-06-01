describe("Ejercicio 1", () => {
  it("Deberia mostrar los campos de monto venta y efectivo", () => {
    cy.visit("/");
    cy.get("label").should("contain", "Monto venta:");
    cy.get("label").should("contain", "Efectivo:");
  });
});
