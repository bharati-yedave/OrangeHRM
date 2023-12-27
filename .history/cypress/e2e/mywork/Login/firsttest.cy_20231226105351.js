describe("Validating Login Credentials", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
  });
  /////////////////////////////////

  context("With Valid Credential", () => {
    it("Testing Login Valid credentials", () => {
      cy.login("Admin", "admin123");
      cy.get('[alt="client brand banner"]').should("be.visible");
    });
  });
  context("With Invalid Credential", () => {
    beforeEach(() => {
      cy.visit(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
      );
    });
    context("Validation with empty Username and Password", () => {
      it("Validating with empty username", () => {
        cy.login(" ", "admin123");
        cy.get(".oxd-text--span").should("have.text", "Required");
      });
      it("Validating with empty password", () => {
        cy.login("Admin", " ");
        cy.get(".oxd-text--span").should("have.text", "Required");
      });
    });
    context("Validation with wrong Username and Password", () => {
      it("Validating with wrong username", () => {
        cy.login("Admin1", "admin123");
        cy.get(".oxd-alert-content-text").should(
          "have.text",
          "Invalid credentials",
        );
      });
      it("Validating with wrong password", () => {
        cy.login("Admin", "admin1234");
        cy.get(".oxd-alert-content-text").should(
          "have.text",
          "Invalid credentials",
        );
      });
      it("Validating with wrong username & password", () => {
        cy.login("Admin", "admin1234");
        cy.get(".oxd-alert-content-text").should(
          "have.text",
          "Invalid credentials",
        );
      });
    });
  });
  ///////////////////////////////
});
