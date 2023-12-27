class AdminUserManagement {
  get filterTabVisible() {
    return cy.get(".oxd-table-filter-area").should("be.visible");
  }
  get filterTabNotVisible() {
    return cy.get(".oxd-table-filter-area").should("not.be.visible");
  }
  get filterTabClick() {
    return cy.get(".oxd-table-filter-header-options").click();
  }
}

export default AdminUserManagement;
