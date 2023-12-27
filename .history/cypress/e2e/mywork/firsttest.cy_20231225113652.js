describe("Validating Login Credentials", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
  });

  it("Testing Login Valid credentials", () => {
    cy.wait(4000);
    cy.get('[name = "username"]').type("Admin");
    cy.get('[name = "password"]').type("admin123");
    cy.get('[type="submit"]').click();
    cy.get('[alt="client brand banner"]').should("be.visible");
  });
  it.only("Testing Login with invalid credential (with blank username)", () => {
    cy.wait(4000);
    // cy.get('[name = "username"]').type("");
    cy.get('[name = "password"]').type("admin123");
    cy.get('[type="submit"]').click();
    cy.get('span[class=
      "oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]'
    ).should("have.value", "Required");
  });
  it("Testing Login with invalid credential (with blank password)", () => {
    cy.wait(4000);
    cy.get('[name = "username"]').type("Admin");
    // cy.get('[name = "password"]').type("");
    cy.get('[type="submit"]').click();
  });
  it("Testing Login with invalid credential (with wrong username)", () => {
    cy.wait(4000);
    cy.get('[name = "username"]').type("Admin1");
    cy.get('[name = "password"]').type("admin123");
    cy.get('[type="submit"]').click();
    cy.get("oxd-text oxd-text--p oxd-alert-content-text").should(
      "have.value",
      "Invalid credentials",
    );
  });
  it("Testing Login with invalid credential (with wrong password)", () => {
    cy.wait(4000);
    cy.get('[name = "username"]').type("Admin");
    cy.get('[name = "password"]').type("admin1234");
    cy.get('[type="submit"]').click();
    cy.get(".oxd-text oxd-text--p oxd-alert-content-text").should(
      "have.value",
      "CSRF token validation failed",
    );
  });
  it("Testing Login with invalid credential (invalid both username & password)", () => {
    cy.wait(4000);
    cy.get('[name = "username"]').type("Admin1");
    cy.get('[name = "password"]').type("admin1234");
    cy.get('[type="submit"]').click();
  });
});