/// <reference types="cypress" />

//////////////////////////////////////////////////////////////////////////////
describe("Validating User", () => {
  beforeEach("", () => {
    cy.viewport(1920, 720);
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
  });
  it("Vaidating User Url", () => {
    cy.login("Admin", "admin123");
    cy.admin();
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers",
    );
  });
  it.only("Validating filter of system user", () => {
    cy.login("Admin", "admin123");
    cy.admin();
    cy.get(".oxd-table-filter-header-options").click().should("not.be.visible");
  });
  it("Validating Username block", () => {
    cy.login("Admin", "admin123");
    cy.admin();
  });
  it("Validating Userrole dropdown block", () => {
    cy.login("Admin", "admin123");
  });
});
