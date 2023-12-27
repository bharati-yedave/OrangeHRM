/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Login description
       */
      login(username:string,password:string): Chainable<any>
      drag()
  
  }
  }