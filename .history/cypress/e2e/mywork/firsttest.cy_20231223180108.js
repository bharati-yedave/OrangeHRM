describe("Visit to ", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
  });

  it("Testing Login Validation", () => {
    cy.wait(4000);
    cy.get(".oxd-input.oxd-input--active").type("Admin");
    // cy.get().type();
    // cy.get().click();
  });
});
