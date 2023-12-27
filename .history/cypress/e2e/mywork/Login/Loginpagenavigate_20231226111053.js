/// <reference types="cypress" />
describe("Validating Login Credentials", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
  });
  afterEach(() => {
    cy.wait(2000);
  });

  it("Testing Login Valid credentials", () => {});
  context("With Invalid Credential", () => {});
});
