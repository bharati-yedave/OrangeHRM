class AdminUserManagement {
  get filterTab() {
    return cy.get(".oxd-table-filter-area");
  }
  get filterTabClick() {
    return cy.get(".oxd-table-filter-header-options").click();
  }
}

export default AdminUserManagement;
