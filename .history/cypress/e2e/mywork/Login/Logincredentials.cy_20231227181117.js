/// <reference types="cypress" />
import LoginPage from "../../../support/PageObjectModel/Login/LoginPage.cy";
const loginObj = new LoginPage();
describe("Validating Login Credentials", () => {
  /////////////////////////////////
  context("With Valid Credential", () => {
    it.only("Testing Login Valid credentials", () => {
      cy.login("Admin", "admin123");
      loginObj.successFullLogin;
    });
  });
  context("With Invalid Credential", () => {
    context("Validation with empty Username and Password", () => {
      it("Validating with empty username", () => {
        const loginObj = new LoginPage();
        cy.login(" ", "admin123");
        loginObj.errorText1;
      });
      it("Validating with empty password", () => {
        const loginObj = new LoginPage();
        cy.login("Admin", " ");
        loginObj.errorText1;
      });
    });
    context("Validation with wrong Username and Password", () => {
      it("Validating with wrong username", () => {
        const loginObj = new LoginPage();
        cy.login("Admin1", "admin123");
        loginObj.errorText2;
      });
      it("Validating with wrong password", () => {
        const loginObj = new LoginPage();
        cy.login("Admin", "admin1234");
        loginObj.errorText2;
      });
      it("Validating with wrong username & password", () => {
        const loginObj = new LoginPage();
        cy.login("Admin", "admin1234");
        loginObj.errorText2;
      });
    });
  });
  ///////////////////////////////
});
