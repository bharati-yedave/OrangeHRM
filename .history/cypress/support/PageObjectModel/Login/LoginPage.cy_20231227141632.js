class LoginPage {
  get username() {
    return cy.get('[name = "username"]');
  }

  get password() {
    return cy.get('[name="password"]');
  }

  get submit() {
    return cy.get('[type="submit"]');
  }

  get forgotpassword() {
    return cy.get("h3");
  }

  get errorText1() {
    return cy.get(".oxd-text--span").should("have.text", "Required");
  }
  get errorText2() {
    return cy
      .get(".oxd-alert-content-text")
      .should("have.text", "Invalid credentials");
  }
}

export default LoginPage;
