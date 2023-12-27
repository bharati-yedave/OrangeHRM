/// <reference types="cypress" />
const childlist = {
  UN: "User Management ",
  jb: "Job",
  org: "Organization",
  quali: "Qualifications",
  Nat: "Nationalities",
  corpbrand: "Corporate Branding",
  conf: "Configuration",
};
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
    cy.login("Admin", "admin123");
    cy.admin();
    cy.user(childlist[key]);
  });
  it("Validating Username", () => {
    cy.get;
  });
});
