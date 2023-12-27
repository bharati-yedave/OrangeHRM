class AdminPageNavigate {
  get parentModule() {
    return cy.get(".oxd-main-menu-item-wrapper");
  }

  get parentChildModule() {
    return cy.get('input[name="password"]');
  }
}

export default AdminPageNavigate;
