class AdminPageNavigate {
  get username() {
    return cy.get('input[name="userName"]');
  }

  get password() {
    return cy.get('input[name="password"]');
  }

  get submit() {
    return cy.get('input[name="submit"]');
  }

  get successText() {
    return cy.get("h3");
  }

  get errorText() {
    return cy.get("span");
  }
}

export default AdminPageNavigate;
