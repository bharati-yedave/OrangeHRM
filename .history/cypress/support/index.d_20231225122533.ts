/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Login description
       */
      login(email:string,password:string): Chainable<any>
  
  }
  }