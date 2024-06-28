type element = () => Cypress.Chainable<JQuery<HTMLElement>>;
type stringType = string;

export function assertElementVisible(getElement: element): void {
  getElement().should('be.visible');
}

export function assertElementHasFontSize(
  getElement: element,
  fontSize: stringType,
): void {
  getElement().should('have.css', 'font-size', fontSize);
}

export function assertElementHasColor(
  getElement: element,
  color: stringType,
): void {
  getElement().should('have.css', 'color', color);
}

export function assertLabelIsEqual(
  labelElement: element,
  expectedText: stringType,
): void {
  labelElement().should('have.text', expectedText);
}
