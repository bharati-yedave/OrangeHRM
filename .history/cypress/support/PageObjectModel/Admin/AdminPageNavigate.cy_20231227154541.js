class AdminPageNavigate {
  get parentModule() {
    return cy.get(".oxd-main-menu-item-wrapper");
  }

  get parentChildModule() {
    return cy.get(".oxd-topbar-body-nav-tab-item");
  }
}

export default AdminPageNavigate;
