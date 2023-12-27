/// <reference types="cypress" />
/// <reference types="cypress" />
describe("Validating Admin-User Management Module", () => {
  beforeEach("", () => {
    cy.viewport(1920, 720);
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
  });

  it("Validating Admin text clickable or Not?", () => {
    cy.login("Admin", "admin123");
    cy.admin();
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers",
    );
  });
  it.only("Validating Admin child module List", () => {
    cy.login("Admin", "admin123");
    cy.admin();
    cy.user("User Management ");
  });
  it("Validating Username", () => {});
});
