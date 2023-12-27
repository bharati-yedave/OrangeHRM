describe("Validating Login Credentials", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
  });

  it.only("Testing Login Valid credentials", () => {
    cy.login(" ", "admin123");
    cy.get('[alt="client brand banner"]').should("be.visible");
  });
  it("Testing Login with invalid credential (with blank username)", () => {
    cy.get('[name = "password"]').type("admin123");
    cy.get('[type="submit"]').click();
    cy.get(".oxd-text--span").should("have.text", "Required");
  });
  it("Testing Login with invalid credential (with blank password)", () => {
    cy.get('[name = "username"]').type("Admin");
    cy.get('[type="submit"]').click();
    cy.get(".oxd-text--span").should("have.text", "Required");
  });
  it("Testing Login with invalid credential (with wrong username)", () => {
    cy.wait(4000);
    cy.get('[name = "username"]').type("Admin1");
    cy.get('[name = "password"]').type("admin123");
    cy.get('[type="submit"]').click();
    cy.get(".oxd-text--p oxd-alert-content-text").should(
      "have.text",
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
