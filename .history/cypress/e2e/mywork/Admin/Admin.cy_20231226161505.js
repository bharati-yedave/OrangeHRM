/// <reference types="cypress" />

describe("Validating Admin Parent Module", () => {
  beforeEach("", () => {
    cy.viewport(1920, 720);
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
  });

  it("Validating Admin text clickable or Not?", () => {
    cy.login("Admin", "admin123");
    cy.admin();
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers",
    );
  });
  it.only("Validating Admin child module List", () => {
    const childlist = {
      UN: "User Management ",
      jb: "Job",
      org: "Organization",
      quali: "Qualifications",
      Nat: "Nationalities",
      corp: "Corporate",
      brand: "Branding",
      conf: "Configuration",
    };
    cy.login("Admin", "admin123");
    cy.admin();
    cy.user(childlist.UN);
  });
  it("Validating Username", () => {
    cy.get;
  });
});
