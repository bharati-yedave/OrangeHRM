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
  it("Validating filter of system user", () => {
    cy.login("Admin", "admin123");
    cy.admin();
    cy.get(".oxd-table-filter-area").should("be.visible");
    cy.get(".oxd-table-filter-header-options").click();
    cy.get(".oxd-table-filter-area").should("not.be.visible");
  });
  it("Validating Username block", () => {
    cy.login("Admin", "admin123");
    cy.admin();
    cy.get(".oxd-input:nth-child(1)").type("admin");
  });
  //////////////////////////////////////////////////////////////////////////////work in progress
  it.only("Validating Userrole dropdown block", () => {
    cy.login("Admin", "admin123");
    cy.admin();
    cy.get(".oxd-icon i").then((resp) => {
      cy.wrap(resp.text());
    });
    //cy.get(".oxd-grid-4.orangehrm-full-width-grid");
  });
});
