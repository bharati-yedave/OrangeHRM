class AdminPageNavigate {
  get parentModule() {
    return cy.get('input[name="userName"]');
  }

  get parentChildModule() {
    return cy.get('input[name="password"]');
  }
}

export default AdminPageNavigate;
