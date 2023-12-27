describe("Validating Login Credentials", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
  });

  it("Testing Login Valid credentials", () => {
    cy.login("Admin", "admin123");
    cy.get('[alt="client brand banner"]').should("be.visible");
  });
  it("Testing Login with invalid credential (with blank username)", () => {
    cy.login(" ", "admin123");
    cy.get(".oxd-text--span").should("have.text", "Required");
  });
  it("Testing Login with invalid credential (with blank password)", () => {
    cy.login("Admin", " ");
    cy.get(".oxd-text--span").should("have.text", "Required");
  });
  it("Testing Login with invalid credential (with wrong username)", () => {
    cy.login("Admin1", "admin123");
    cy.get(".oxd-alert-content-text").should(
      "have.text",
      "Invalid credentials",
    );
  });
  it.only("Testing Login with invalid credential (with wrong password)", () => {
    cy.login("Admin1", "admin1234");
    cy.get(".oxd-alert-content-text").should(
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
