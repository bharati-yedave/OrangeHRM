/// <reference types="cypress" />
describe("Validating Login Page", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
  });
  afterEach(() => {
    cy.wait(2000);
  });
  context("Validating Login Button", () => {
    it("Validating Login Button", () => {
      cy.get(".oxd-button--medium").click();
      cy.get(".oxd-text--span").should("have.text", "RequiredRequired");
    });
  });
  context("Validating Forgotten Your Password", () => {
    it("Validating Forgotten Your Password", () => {
      cy.get(".orangehrm-login-forgot-header").click();
      cy.get(".orangehrm-forgot-password-title").should(
        "have.text",
        "Reset Password",
      );
    });
    it("Validating Forgotten Your Password", () => {
      cy.get(".orangehrm-login-forgot-header").click();
    });
  });
});
