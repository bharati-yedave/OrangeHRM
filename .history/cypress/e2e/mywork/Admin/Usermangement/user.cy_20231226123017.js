/// <reference types="cypress" />
/// <reference types="cypress" />
describe("", () => {
  beforeEach("", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    cy.login("Admin", "admin123");
    //cy.get('').click;
  });

  //   it("Login First", () => {
  //     cy.login("Admin", "admin123");
  //   });
});
