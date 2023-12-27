/// <reference types="cypress" />
import LoginPage from "../../../support/PageObjectModel/Login/LoginPage.cy";
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
    const loginObj = new LoginPage();
    it("Validating Login Button", () => {
      loginObj.submit.click();
      loginObj.errorText3;
    });
  });
  context("Validating Forgotten Your Password Page", () => {
    it("Validating Forgotten Your Password text", () => {
      const loginObj = new LoginPage();
      loginObj.forgotpassword;
      cy.get(".orangehrm-forgot-password-title").should(
        "have.text",
        "Reset Password",
      );
    });
    it("Validating cancel Button", () => {
      const loginObj = new LoginPage();
      loginObj.forgotpassword;
      cy.get(".oxd-input--active").type("admin");
      cy.get(".oxd-button--ghost").click();
      cy.url().should(
        "eq",
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
      );
    });
    it("Validating reset password button", () => {
      const loginObj = new LoginPage();
      loginObj.forgotpassword;
      cy.get(".oxd-input--active").type("admin");
      cy.get(".oxd-button--secondary").click();
      cy.get(".oxd-text--h6").should(
        "have.text",
        "Reset Password link sent successfully",
      );
    });
  });
});
