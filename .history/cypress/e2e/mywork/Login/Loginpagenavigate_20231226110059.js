/// <reference types="cypress" />
describe("Validating Login Credentials", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
  });
  /////////////////////////////////

  context("With Valid Credential", () => {
    it("Testing Login Valid credentials", () => {});
  });
  context("With Invalid Credential", () => {
    context("Validation with empty Username and Password", () => {
      it("Validating with empty username", () => {
        cy.login(" ", "admin123");
        cy.get(".oxd-text--span").should("have.text", "Required");
      });
      it("Validating with empty password", () => {
        cy.login("Admin", " ");
        cy.get(".oxd-text--span").should("have.text", "Required");
      });
    });
  });
  ///////////////////////////////
});
