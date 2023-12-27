class LoginPage {
  get username() {
    return cy.get('[name = "username"]');
  }

  get password() {
    return cy.get('[name="password"]');
  }

  get submit() {
    return cy.get('input[name="submit"]');
  }

  get forgotpassword() {
    return cy.get("h3");
  }

  get errorText() {
    return cy.get("span");
  }
}

export default LoginPage;
