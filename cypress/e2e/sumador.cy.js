describe("Ejercicio 1", () => {
  it("Deberia mostrar los campos de monto venta y efectivo", () => {
    cy.visit("/");
    cy.get("label").should("contain", "Monto venta:");
    cy.get("label").should("contain", "Efectivo:");
  });
  it("Deberia mostrar el cambio correspondiente al ingresar el monto de venta y el efectivo", () => {
    cy.visit("/");
    cy.get("#monto-venta").type(25);
    cy.get("#efectivo").type(50);
    cy.get("#resultado-div").should("contain",25);
  });
});
