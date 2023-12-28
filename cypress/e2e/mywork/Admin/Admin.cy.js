/// <reference types="cypress" />
const childList = {
  UN: "User Management ",
  jb: "Job",
  org: "Organization",
  quali: "Qualifications",
  Nat: "Nationalities",
  corpbrand: "Corporate Branding",
  conf: "Configuration",
};
describe("Validating Admin Parent Module", () => {
  it("Validating Admin text clickable or Not?", () => {
    cy.login("Admin", "admin123");
    cy.admin();
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers",
    );
  });
  it("Validating Admin child module List", () => {
    cy.login("Admin", "admin123");
    cy.admin();
    for (const key in childList) {
      cy.user(childList[key]);
    }
  });
});
