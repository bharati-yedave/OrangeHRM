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
Cypress.Commands.add("login", (username, password) => {
  cy.get('[name = "username"]').type(username);
  cy.get('[name = "password"]').type(password);
  cy.get('[type="submit"]').click();
});

Cypress.Commands.add("admin", () => {
  cy.get(".oxd-main-menu-item-wrapper").each(($el, index, $list) => {
    // $el is a wrapped jQuery element
    if ($el.text() === "Admin") {
      // wrap this element so we can
      // use cypress commands on it
      cy.wrap($el).click();
    }
  });
});

Cypress.Commands.add("user", (childmodulename) => {
  cy.get(".oxd-topbar-body-nav-tab-item").then((resp) => {
    cy.wrap(resp.text());
    let response = resp.text().split(" ");
    cy.log(response);
    cy.contains(childmodulename).click();
    cy.get(".oxd-dropdown-menu").click();
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
