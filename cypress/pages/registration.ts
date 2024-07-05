class RegistrationPage {
  visitRegistration(): void {
    cy.visit('https://torontodough.one/register');
  }
  getAgeChckbox(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(':nth-child(2) > #termsCheckbox');
  }
  getAgeText(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(':nth-child(2) > .form-check-label');
  }
  getAgreeChckbox(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(':nth-child(1) > #termsCheckbox');
  }
  getAgreeText(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(':nth-child(1) > .form-check-label');
  }
  getConfirmPasswordLabel(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(':nth-child(3) > .form-label');
  }
  getConfirmPasswordTxtbox(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('#\\:r2\\:');
  }
  getEmailAddressLabel(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(':nth-child(4) > .form-label');
  }
  getEmailAddressTxtbox(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('#\\:r3\\:');
  }
  getExistAccount(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.MuiTypography-root');
  }
  getEyeConfirmIcon(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(
      ':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root',
    );
  }
  getErrorPassLessChar(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.ant-message-notice-content');
  }
  getHere(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.MuiTypography-root > a');
  }
  getMobileCode(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.ant-input-group-addon');
  }
  getMobileLabel(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(':nth-child(5) > .form-label');
  }
  getMobileTxtbox(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.ant-input');
  }
  getPrivacyPolicy(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('label[for="termsCheckbox"]>a[href="/register-privacy"]');
  }
  getSignUpBtn(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.custom-rainbow-button');
  }
  getTermsOfService(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('label[for="termsCheckbox"]>a[href="/register-terms"]');
  }
}
export default RegistrationPage;
