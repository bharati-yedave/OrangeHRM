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
  context("Validating Forgotten Your Password Page", () => {
    it("Validating Forgotten Your Password text", () => {
      cy.get(".orangehrm-login-forgot-header").click();
      cy.get(".orangehrm-forgot-password-title").should(
        "have.text",
        "Reset Password",
      );
    });
    it("Validating cancel Button", () => {
      cy.get(".orangehrm-login-forgot-header").click();
      cy.get(".oxd-input--active").type("admin");
      cy.get(".oxd-button--ghost").click();
      cy.get(".orangehrm-login-title").should("have.text", "Login");
    });
    it("Validating reset password button", () => {
      cy.get(".orangehrm-login-forgot-header").click();
      cy.get(".oxd-input--active").type("admin");
      cy.get(".oxd-button--secondary").click();
      cy.get(".oxd-text--h6").should(
        "have.text",
        "Reset Password link sent successfully",
      );
    });
  });
});
