// cypress/pages/introWithKeycode.ts
class SplashPage {
  visitSplashPage(): void {
    cy.visit('https://torontodough.one/splash');
  }
  getImage(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('head link[rel="icon"]');
  }

  getKeycodeLabel(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.font-thin');
  }
  getKeycodeTextBox(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.mt-0 input');
  }

  getSubmitArrowIcon(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.mt-3');
  }

  getVideoElement(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('#background-video');
  }
  // Method to get the video source element
  getVideoSource(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('#background-video > source');
  }
  getWelcomeText(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.text-5xl');
  }
}

export default SplashPage;
