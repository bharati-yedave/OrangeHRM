/// <reference types="cypress" />
/// <reference types="cypress" />
describe("Validating Admin-User Management Module", () => {
  beforeEach("", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
  });

  it("Validating Admin text clickable or Not?", () => {
    cy.login("Admin", "admin123");
    cy.admin();
  });
  it.only("Validating Admin child module List", () => {
    cy.login("Admin", "admin123");
    cy.admin();
    cy.get("oxd-topbar-body-nav-tab --parent --visited");
    cy.get("");
  });
});
