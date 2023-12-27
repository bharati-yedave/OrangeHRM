/// <reference types="cypress" />
/// <reference types="cypress" />
describe("Validating Admin-User Management Module", () => {
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
    let adminPanel = {
      UM: "User Management ",
      Job: "Job ",
      Org: "Organization ",
      Qualification: "Qualifications ",
      Nation: "Nationalities",
      Branding: "Corporate Branding",
      Config: "Configuration ",
    };
    cy.login("Admin", "admin123");
    cy.admin();
    cy.get(".oxd-topbar-body-nav-tab-item").each((resp) => {
      let a = cy.wrap(resp.text());
      cy.contains(adminPanel.UM).click();
    });
  });
});
