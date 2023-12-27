describe("Validating Login Credentials", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
  });

  it("Testing Login Valid credentials", () => {
    cy.get('[name = "username"]').type("Admin");
    cy.get('[name = "password"]').type("admin123");
    cy.get('[type="submit"]').click();
  });
  //   it("Testing Login with invalid credential (with blank username)", () => {
  //     // cy.get('[name = "username"]').type("");
  //     cy.get('[name = "password"]').type("admin123");
  //     cy.get('[type="submit"]').click();
  //   });
  //   it("Testing Login with invalid credential (with blank password)", () => {
  //     cy.get('[name = "username"]').type("Admin");
  //     // cy.get('[name = "password"]').type("");
  //     cy.get('[type="submit"]').click();
  //   });
  //   it("Testing Login with invalid credential (with wrong username)", () => {
  //     cy.get('[name = "username"]').type("Admin1");
  //     cy.get('[name = "password"]').type("admin123");
  //     cy.get('[type="submit"]').click();
  //   });
  //   it("Testing Login with invalid credential (with wrong password)", () => {
  //     cy.get('[name = "username"]').type("Admin");
  //     cy.get('[name = "password"]').type("admin1234");
  //     cy.get('[type="submit"]').click();
  //   });
  //   it("Testing Login with invalid credential (invalid both username & password)", () => {
  //     cy.get('[name = "username"]').type("Admin1");
  //     cy.get('[name = "password"]').type("admin1234");
  //     cy.get('[type="submit"]').click();
  //   });
});
