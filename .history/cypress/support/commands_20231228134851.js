// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
import LoginPage from "./PageObjectModel/Login/LoginPage.cy";
import AdminPageNavigate from "./PageObjectModel/Admin/AdminPageNavigate.cy";
const loginObj = new LoginPage();
const adminobj = new AdminPageNavigate();
Cypress.Commands.add("login", (username, password) => {
  loginObj.userName.type(username);
  loginObj.passWord.type(password);
  loginObj.submit.click();
});

Cypress.Commands.add("admin", () => {
  adminobj.parentModule.each(($el, index, $list) => {
    if ($el.text() === "Admin") {
      cy.wrap($el).click();
    }
  });
});

Cypress.Commands.add("user", (childmodulename) => {
  adminobj.parentChildModule.then((resp) => {
    cy.wrap(resp.text());
    if (
      childmodulename === "Nationalities" ||
      childmodulename === "Corporate Branding"
    ) {
      cy.contains(childmodulename).click();
    } else {
      cy.contains(childmodulename).click();
      cy.get(".oxd-dropdown-menu").click();
    }
  });
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => {

// })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
