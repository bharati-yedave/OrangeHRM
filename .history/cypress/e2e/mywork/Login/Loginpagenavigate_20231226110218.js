/// <reference types="cypress" />
describe("Validating Login Credentials", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
  });

  it("Testing Login Valid credentials", () => {});
  context("With Invalid Credential", () => {});
});
