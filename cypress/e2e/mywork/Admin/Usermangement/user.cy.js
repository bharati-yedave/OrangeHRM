/// <reference types="cypress" />
import AdminUserManagement from "../../../../support/PageObjectModel/Admin/User/AdminUserManagement.cy";
//////////////////////////////////////////////////////////////////////////////
const adminUserObj =
  new AdminUserManagement();
describe("Validating User", () => {
  it.only("Vaidating User Url", () => {
    cy.login("Admin", "admin123");
    cy.admin();
    adminUserObj.userURL;
  });
  it.only("Validating filter of system user", () => {
    cy.login("Admin", "admin123");
    cy.admin();
    adminUserObj.filterButton.should(
      "be.visible",
    );
    adminUserObj.filterTabClick.click();
    adminUserObj.filterButton.should(
      "not.be.visible",
    );
  });
  it.only("Validating Username block", () => {
    cy.login("Admin", "admin123");
    cy.admin();
    adminUserObj.userName.type("admin");
  });
  it.only("Validating Userrole dropdown block", () => {
    cy.login("Admin", "admin123");
    cy.admin();
    adminUserObj.userRole
      .find("div")
      .find("i")
      .eq(0)
      .click();
    adminUserObj.userRolDropdown
      .find(".oxd-select-option")
      .contains("Admin")
      .click();
  });
  // work here
  it("Validating Employee Name block", () => {
    cy.login("Admin", "admin123");
    cy.admin();
    adminUserObj.employeeName.type("p");
    adminUserObj.employeeRoleDropdown
      .find("div")
      .find("span")
      .then((resp) => {
        cy.wrap(resp)
          .contains(
            "Krishna Kumar Pasupuleti",
          )
          .click();
      });
  });
  it.only("Validating Status box", () => {
    cy.login("Admin", "admin123");
    cy.admin();
    adminUserObj.status
      .find("div")
      .find("i")
      .eq(1)
      .click();
    adminUserObj.statusDropdown
      .find(".oxd-select-option")
      .contains("Enabled")
      .click();
  });
  //commenting
  it("Validating User child module", () => {
    cy.login("Admin", "admin123");
    cy.admin();
    adminUserObj.filterTabClick.click();
    adminUserObj.filterButton.should(
      "not.be.visible",
    );
    adminUserObj.filterTabClick.click();
    adminUserObj.filterButton.should(
      "be.visible",
    );
    adminUserObj.userName.type("admin");
    adminUserObj.userRole
      .find("div")
      .find("i")
      .eq(0)
      .click();
    adminUserObj.userRolDropdown
      .find(".oxd-select-option")
      .contains("Admin")
      .click();
    adminUserObj.employeeName.type("p");
    adminUserObj.employeeRoleDropdown
      .find("div")
      .find("span")
      .then((resp) => {
        cy.wrap(resp)
          .contains(
            "Krishna Kumar Pasupuleti",
          )
          .click();
      });
    adminUserObj.status
      .find("div")
      .find("i")
      .eq(1)
      .click();
    adminUserObj.statusDropdown
      .find(".oxd-select-option")
      .contains("Enabled")
      .click();
  });
});
