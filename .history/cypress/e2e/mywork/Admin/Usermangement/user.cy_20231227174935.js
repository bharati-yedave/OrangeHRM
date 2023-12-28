/// <reference types="cypress" />
import AdminUserManagement from "../../../../support/PageObjectModel/Admin/User/AdminUserManagement.cy";
//////////////////////////////////////////////////////////////////////////////
const adminuserobj = new AdminUserManagement();
describe("Validating User", () => {
  beforeEach("", () => {
    cy.viewport(1920, 720);
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
  });
  it("Vaidating User Url", () => {
    cy.login("Admin", "admin123");
    cy.admin();
    adminuserobj.userURL;
  });
  it.only("Validating filter of system user", () => {
    cy.login("Admin", "admin123");
    cy.admin();
    adminuserobj.filterTabVisible;
    adminuserobj.filterTabClick;
    adminuserobj.filterTabNotVisible;
  });
  it("Validating Username block", () => {
    cy.login("Admin", "admin123");
    cy.admin();
    adminuserobj.userName.type("admin");
  });
  //////////////////////////////////////////////////////////////////////////////work in progress
  it("Validating Userrole dropdown block", () => {
    cy.login("Admin", "admin123");
    cy.admin();
    adminuserobj.userRole;
    adminuserobj.userRolDropdown;
  });
});
