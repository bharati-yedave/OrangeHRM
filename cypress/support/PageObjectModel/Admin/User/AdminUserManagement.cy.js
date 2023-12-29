class AdminUserManagement {
  get userURL() {
    return cy
      .url()
      .should(
        "eq",
        "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers",
      );
  }

  get filterTabVisible() {
    return cy.get(".oxd-table-filter-area").should("be.visible");
  }
  get filterTabNotVisible() {
    return cy.get(".oxd-table-filter-area").should("not.be.visible");
  }
  get filterTabClick() {
    return cy.get(".oxd-table-filter-header-options").click();
  }
  get userName() {
    return cy.get(".oxd-input:nth-child(1)");
  }
  get employeeName() {
    return cy.get('[placeholder="Type for hints..."]');
  }
  get userRole() {
    return cy.get(".oxd-select-wrapper").find("div").find("i").eq(0).click();
  }
  get userRolDropdown() {
    return cy
      .get(".oxd-select-dropdown")
      .find(".oxd-select-option")
      .contains("Admin")
      .click();
  }
  get status() {
    return cy.get(".oxd-select-wrapper").find("div").find("i").eq(1).click();
  }
  get statusDropdown() {
    return cy
      .get(".oxd-select-dropdown")
      .find(".oxd-select-option")
      .contains("Enabled")
      .click();
  }
}

export default AdminUserManagement;
