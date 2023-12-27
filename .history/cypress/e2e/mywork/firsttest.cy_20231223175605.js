describe("Visit to ", () => {
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
  it("Testing Login Validation", () => {
    cy.get("".oxd-input oxd-input--active").type();
    // cy.get().type();
    // cy.get().click();
  });
});
