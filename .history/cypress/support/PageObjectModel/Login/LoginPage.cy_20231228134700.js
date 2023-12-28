class LoginPage {
  get userName() {
    return cy.get('[name = "username"]');
  }

  get passWord() {
    return cy.get('[name="password"]');
  }

  get submit() {
    return cy.get('[type="submit"]');
  }

  get successFullLogin() {
    return cy.get('[alt="client brand banner"]').should("be.visible");
  }
  get forgotPassword() {
    return cy.get(".orangehrm-login-forgot-header").click();
  }

  get typeAdmiName() {
    return cy.get(".oxd-input--active").type("admin");
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

  get cancelButton() {
    return cy.get(".oxd-button--ghost").click();
  }
  get resetButton() {
    return cy.get(".oxd-button--secondary").click();
  }
  get successFullReset() {
    return cy
      .get(".oxd-text--h6")
      .should("have.text", "Reset Password link sent successfully");
  }
  get successFullCancelReset() {
    return cy
      .url()
      .should(
        "eq",
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
      );
  }
}

export default LoginPage;
