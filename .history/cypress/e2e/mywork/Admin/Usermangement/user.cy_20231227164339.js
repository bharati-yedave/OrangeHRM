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
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers",
    );
  });
  it.only("Validating filter of system user", () => {
    cy.login("Admin", "admin123");
    cy.admin();
    cy.get(".oxd-table-filter-area").should("be.visible");
    cy.get(".oxd-table-filter-header-options").click();
    cy.get(".oxd-table-filter-area").should("not.be.visible");
  });
  it("Validating Username block", () => {
    cy.login("Admin", "admin123");
    cy.admin();
    cy.get(".oxd-input:nth-child(1)").type("admin");
  });
  //////////////////////////////////////////////////////////////////////////////work in progress
  it("Validating Userrole dropdown block", () => {
    cy.login("Admin", "admin123");
    cy.admin();
    cy.get(".oxd-select-wrapper").find("div").find("i").eq(0).click();
    cy.get(".oxd-select-dropdown")
      .find(".oxd-select-option")
      .contains("Admin")
      .click();
  });
});
