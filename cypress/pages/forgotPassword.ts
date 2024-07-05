class ForgotPassword {
  getBackBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.navbar-brand');
  }
  getChangeConfirmPassLabel(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.form-group-spacing > :nth-child(5)');
  }
  getChangeConfirmPassTextbox(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('#\\:r2\\:');
  }
  getChangeConfirmPassEyeIcon(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(
      ':nth-child(6) > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root',
    );
  }
  getChangePassEyeIcon(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(
      ':nth-child(4) > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root',
    );
  }
  getChangePasswordHeader(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.css-16etryb .MuiTypography-root');
  }
  getChangePassLabel(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.form-group-spacing > :nth-child(3)');
  }
  getChangePassTextbox(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('#\\:r1\\:');
  }
  getEmailToResetPassworLabel(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.form-label');
  }
  getEmailToResetPassworText(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('#\\:r0\\:');
  }
  getEnterOTPLabel(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.form-group-spacing > :nth-child(1)');
  }
  getEnterOTPTextbox(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('#\\:r0\\:');
  }
  getErrorPassLessChar(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.ant-message-notice-content');
  }
  getSubmitBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.custom-rainbow-button');
  }
  visitChangePassword(): void {
    cy.visit('https://torontodough.one/change-password');
  }
  visitForgotPassword(): void {
    cy.visit('https://torontodough.one/forgot-password');
  }
}
export default ForgotPassword;
