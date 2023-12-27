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
    return cy.get(".orangehrm-login-forgot-header").click();
  }
  get errorText3() {
    return cy.get(".oxd-text--span").should("have.text", "RequiredRequired");
  }
  get errorText1() {
    return cy.get(".oxd-text--span").should("have.text", "Required");
  }
  get errorText2() {
    return cy
      .get(".oxd-alert-content-text")
      .should("have.text", "Invalid credentials");
  }
  get errorText3() {
    return cy.get(".oxd-text--span").should("have.text", "RequiredRequired");
  }
}

export default LoginPage;
