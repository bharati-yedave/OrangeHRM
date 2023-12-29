class AdminUserManagement {
  get userURL() {
    return cy
      .url()
      .should(
        "eq",
        "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers",
      );
  }

  get filterButton() {
    return cy.get(".oxd-table-filter-area");
  }

  get filterTabClick() {
    return cy.get(".oxd-table-filter-header-options");
  }
  get userName() {
    return cy.get(".oxd-input:nth-child(1)");
  }
  get userRole() {
    return cy.get(".oxd-select-wrapper");
  }
  get employeeName() {
    return cy.get('[placeholder="Type for hints..."]');
  }
  get status() {
    return cy.get(".oxd-select-wrapper");
  }
  get userRolDropdown() {
    return cy.get(".oxd-select-dropdown");
  }
  get employeeRoleDropdown() {
    return cy.get(".oxd-autocomplete-dropdown");
  }
  get statusDropdown() {
    return cy.get(".oxd-select-dropdown");
  }
}

export default AdminUserManagement;
