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
      loginObj.forgotPassword;
      cy.get(".orangehrm-forgot-password-title").should(
        "have.text",
        "Reset Password",
      );
    });
    it("Validating cancel Button", () => {
      loginObj.forgotPassword;
      loginObj.typeAdmiName;
      loginObj.cancelButton;
      loginObj.successFullCancelReset;
    });
    it("Validating reset password button", () => {
      loginObj.forgotPassword;
      loginObj.typeAdmiName;
      loginObj.resetButton;
      loginObj.successFullReset;
    });
  });
});
