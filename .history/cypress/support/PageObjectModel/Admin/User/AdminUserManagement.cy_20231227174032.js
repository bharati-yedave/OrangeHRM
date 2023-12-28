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
  get userRole() {
    return cy.get(".oxd-select-wrapper").find("div").find("i").eq(0).click();
  }
  get userRolDropdown() {}
  get statusDropdown() {}
}

export default AdminUserManagement;
