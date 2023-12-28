/// <reference types="cypress" />
import LoginPage from "../../../support/PageObjectModel/Login/LoginPage.cy";
const loginObj = new LoginPage();
describe("Validating Login Credentials", () => {
  /////////////////////////////////
  context("With Valid Credential", () => {
    it("Testing Login Valid credentials", () => {
      cy.login("Admin", "admin123");
      loginObj.successFullLogin;
    });
  });
  describe("With Invalid Credential", () => {
    context("Validation with empty Username and Password", () => {
      it.only("Validating with empty username", () => {
        cy.login(" ", "admin123");
        loginObj.errorText1;
      });
      it.only("Validating with empty password", () => {
        cy.login("Admin", " ");
        loginObj.errorText1;
      });
    });
    context("Validation with wrong Username and Password", () => {
      it.only("Validating with wrong username", () => {
        cy.login("Admin1", "admin123");
        loginObj.errorText2;
      });
      it.only("Validating with wrong password", () => {
        cy.login("Admin", "admin1234");
        loginObj.errorText2;
      });
      it.only("Validating with wrong username & password", () => {
        cy.login("Admin", "admin1234");
        loginObj.errorText2;
      });
    });
  });
  ///////////////////////////////
});
