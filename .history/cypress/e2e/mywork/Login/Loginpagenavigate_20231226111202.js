/// <reference types="cypress" />
describe("Validating Login Page", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
  });
  afterEach(() => {
    cy.wait(2000);
  });

  it("Validating Login Button", () => {});
  it("Validating Forgotten Your Password", () => {});
});
