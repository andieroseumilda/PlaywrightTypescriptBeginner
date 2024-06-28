// cypress/pages/login.js

class LoginPage {
  visitLogin(): void {
    cy.visit('https://torontodough.one/login');
  }

  getForgotPass(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(':nth-child(2) > .gray-link');
  }
  getSignInBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.custom-rainbow-button');
  }
  getCreateAcct(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.cursor-pointer');
  }
}
export default LoginPage;
