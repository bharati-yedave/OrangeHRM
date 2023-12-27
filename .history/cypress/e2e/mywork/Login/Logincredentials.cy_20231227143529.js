/// <reference types="cypress" />
import LoginPage from "../../../support/PageObjectModel/Login/LoginPage.cy";
describe("Validating Login Credentials", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
  });
  afterEach(() => {
    cy.wait(4000);
  });
  /////////////////////////////////
  const loginObj = new LoginPage();
  xcontext("With Valid Credential", () => {
    it("Testing Login Valid credentials", () => {
      cy.login("Admin", "admin123");
      cy.get('[alt="client brand banner"]').should("be.visible");
    });
  });
  context("With Invalid Credential", () => {
    xcontext("Validation with empty Username and Password", () => {
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
