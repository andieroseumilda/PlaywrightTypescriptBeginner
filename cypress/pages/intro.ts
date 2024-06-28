// cypress/pages/intro.ts

class IntroPage {
  // Method to visit the intro page
  visitIntro(): void {
    cy.visit('https://torontodough.one/intro');
  }

  // Method to get the welcome text element
  getFirstVideoText(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.font-extrabold.text-2xl');
  }

  // Method to get the "we connect" and "services" text element
  getSecondVideoText(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.absolute>.font-extrabold>.block.font-light');
  }
  // Method to get the "inclusive" text element
  getThirdVideoText(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(
      '.absolute>.font-extrabold>.block.font-light>span:nth-child(1)',
    );
  }
  // Method to get the 4 services text element
  getFourthVideoText(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.absolute>.font-extrabold>span:nth-child(2)');
  }

  getFooterDivider(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.css-1frp8xd');
  }

  // Method to get the first intro element
  getIntroFirst(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.css-iiw7nl');
  }

  // Method to get the last intro element
  getIntroLast(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('.css-1diiy5z');
  }

  // Method to get the next arrow element
  getNextArrow(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('[data-testid="ArrowForwardIcon"]');
  }

  // Method to get the video element
  getVideoElement(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('#background-video');
  }

  // Method to get the video source element
  getVideoSource(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('#background-video > source');
  }

  getWelcomeImage(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('head link[rel="icon"]');
  }
}

// Export the class as the default export
export default IntroPage;
