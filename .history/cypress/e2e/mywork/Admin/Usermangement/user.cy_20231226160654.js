/// <reference types="cypress" />

//////////////////////////////////////////////////////////////////////////////
describe("Validating User", () => {
  beforeEach("", () => {
    cy.viewport(1920, 720);
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
  });
  it.only("Validating Username block", () => {
    cy.login("Admin", "admin123");
    cy.admin();
    cy.user("User Management ");
  });
  it.only("Validating Userrole dropdown block", () => {
    cy.login("Admin", "admin123");
    cy.admin();
    cy.user("User Management ");
  });
});
