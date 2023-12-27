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
const loginObj = new LoginPage();
Cypress.Commands.add("login", (username, password) => {
  loginObj.username.type(username);
  loginObj.password.type(password);
  loginObj.submit.click();
});

Cypress.Commands.add("admin", () => {
  cy.get(".oxd-main-menu-item-wrapper").each(($el, index, $list) => {
    if ($el.text() === "Admin") {
      cy.wrap($el).click();
    }
  });
});

Cypress.Commands.add("user", (childmodulename) => {
  cy.get(".oxd-topbar-body-nav-tab-item").then((resp) => {
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
