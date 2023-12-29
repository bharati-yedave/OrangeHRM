/// <reference types="cypress" />
import AdminUserManagement from "../../../../support/PageObjectModel/Admin/User/AdminUserManagement.cy";
//////////////////////////////////////////////////////////////////////////////
const adminUserObj = new AdminUserManagement();
describe("Validating User", () => {
  it("Vaidating User Url", () => {
    cy.login("Admin", "admin123");
    cy.admin();
    adminUserObj.userURL;
  });
  it("Validating filter of system user", () => {
    cy.login("Admin", "admin123");
    cy.admin();
    adminUserObj.filterTabVisible;
    adminUserObj.filterTabClick;
    adminUserObj.filterTabNotVisible;
  });
  it("Validating Username block", () => {
    cy.login("Admin", "admin123");
    cy.admin();
    adminUserObj.userName.type("admin");
  });
  it("Validating Userrole dropdown block", () => {
    cy.login("Admin", "admin123");
    cy.admin();
    adminUserObj.userRole;
    adminUserObj.userRolDropdown;
  });
  // work here
  it.only("Validating Employee Name block", () => {
    cy.login("Admin", "admin123");
    cy.admin();
    adminUserObj.employeeName.type("p");
    cy.get(".oxd-autocomplete-dropdown")
      .find("div")
      .find("span")
      .then((resp) => {
        cy.wrap(resp).contains("Cecil Bonaparte").click();
      });
  });
});
