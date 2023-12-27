/// <reference types="cypress" />
describe("Validating Login PAge", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
  });
  afterEach(() => {
    cy.wait(2000);
  });

  it("Validating Login Button", () => {});
  it("Validating Login Button", () => {});
});
