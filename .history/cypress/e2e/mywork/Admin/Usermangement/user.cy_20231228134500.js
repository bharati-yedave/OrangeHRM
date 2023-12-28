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
  //////////////////////////////////////////////////////////////////////////////work in progress
  it("Validating Userrole dropdown block", () => {
    cy.login("Admin", "admin123");
    cy.admin();
    adminUserObj.userRole;
    adminUserObj.userRolDropdown;
  });
});
