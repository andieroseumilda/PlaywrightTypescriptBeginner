class CommonElementsPage {
  getErrorBackground(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.MuiPaper-root');
  }
  getErrorIcon(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('[data-testid="ErrorOutlineIcon"]');
  }
  getErrorMessage(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.MuiAlert-message');
  }
  getPasswordLabel(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(':nth-child(2) > .form-label');
  }
  getPasswordTxtbox(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('#\\:r1\\:');
  }
  getProutLogo(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.text-center.mb-4>img');
  }
  getshowPass(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(
      ':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root',
    );
  }
  getSignInLabel(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(':nth-child(1) > .form-label');
  }
  getSignInTxtbox(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('#\\:r0\\:');
  }
  getPopupErrorMessage(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.ant-message-custom-content > :nth-child(2)');
  }
}

export default CommonElementsPage;
