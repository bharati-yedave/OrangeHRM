/// <reference types="cypress" />
/// <reference types="cypress" />
describe("Validating Admin-User Management Module", () => {
  beforeEach("", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
  });

  it.only("Validating Admin text clickable or Not?", () => {
    cy.login("Admin", "admin123");
    cy.get(".oxd-main-menu-item-wrapper").each(($el, index, $list) => {
      // $el is a wrapped jQuery element
      if ($el.text() === "Admin") {
        // wrap this element so we can
        // use cypress commands on it
        cy.wrap($el).click();
        cy.url().should(
          "eq",
          "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers",
        );
      }
    });

    context("Validating Inside Admin 7 Child module are Present", () => {
      it("", () => {});
    });
  });
});
