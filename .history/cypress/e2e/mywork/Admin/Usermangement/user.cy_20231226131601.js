/// <reference types="cypress" />
/// <reference types="cypress" />
describe("", () => {
  beforeEach("", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
  });

  it("Login First", () => {
    cy.login("Admin", "admin123");
    //cy.get(".oxd-main-menu-item-wrapper");
    cy.get("ul>li").each(($el, index, $list) => {
      // $el is a wrapped jQuery element
      if ($el.text() === "Admin") {
        // wrap this element so we can
        // use cypress commands on it
        cy.wrap($el).click();
      } else {
        cy.log("not found Admin");
      }
    });
  });
});
