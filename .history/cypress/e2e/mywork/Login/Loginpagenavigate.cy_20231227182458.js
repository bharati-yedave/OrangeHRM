/// <reference types="cypress" />
import LoginPage from "../../../support/PageObjectModel/Login/LoginPage.cy";
const loginObj = new LoginPage();
describe("Validating Login Page", () => {
  context("Validating Login Button", () => {
    it("Validating Login Button", () => {
      loginObj.submit.click();
      loginObj.errorText3;
    });
  });
  context("Validating Forgotten Your Password Page", () => {
    it("Validating Forgotten Your Password text", () => {
      loginObj.forgotpassword;
      cy.get(".orangehrm-forgot-password-title").should(
        "have.text",
        "Reset Password",
      );
    });
    it("Validating cancel Button", () => {
      loginObj.forgotpassword;
      loginObj.typeadminame;
      loginObj.cancelButton;
      cy.url().should(
        "eq",
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
      );
    });
    it("Validating reset password button", () => {
      loginObj.forgotpassword;
      loginObj.typeadminame;
      loginObj.resetButton;
      cy.get(".oxd-text--h6").should(
        "have.text",
        "Reset Password link sent successfully",
      );
    });
  });
});
