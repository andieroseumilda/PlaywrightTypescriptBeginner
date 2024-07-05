export interface HelperModel {
  btn: () => Cypress.Chainable<JQuery<HTMLElement>>;
  color: string;
  element: () => Cypress.Chainable<JQuery<HTMLElement>>;
  email: string;
  error: {
    bgcolor: string;
    background: () => Cypress.Chainable<JQuery<HTMLElement>>;
    expectedMessage: string;
    icon: () => Cypress.Chainable<JQuery<HTMLElement>>;
    message: () => Cypress.Chainable<JQuery<HTMLElement>>;
  };
  eyeElement: () => Cypress.Chainable<JQuery<HTMLElement>>;
  expectedPlaceHolderText: string;
  expectedText: string;
  fontSize: string;
  txtbox: {
    signIn: () => Cypress.Chainable<JQuery<HTMLElement>>;
    password: () => Cypress.Chainable<JQuery<HTMLElement>>;
  };
  password: string;
}

export function assertElementHasBorderColor(propertiesIn: HelperModel) {
  propertiesIn.element().should('have.css', 'border-color', propertiesIn.color);
}
export function assertElementVisible(propertiesIn: HelperModel): void {
  propertiesIn.element().should('be.visible');
}
export function assertElementHasFontSize(propertiesIn: HelperModel): void {
  propertiesIn.element().should('have.css', 'font-size', propertiesIn.fontSize);
}
export function assertElementHasColor(propertiesIn: HelperModel): void {
  propertiesIn.element().should('have.css', 'color', propertiesIn.color);
}
export function assertError(propertiesIn: HelperModel) {
  if (propertiesIn.email) {
    propertiesIn.txtbox.signIn().type(propertiesIn.email);
  }
  if (propertiesIn.password) {
    propertiesIn.txtbox.password().type(propertiesIn.password);
  }
  propertiesIn.btn().click();
  propertiesIn.error
    .message()
    .should('be.visible')
    .and('contain.text', propertiesIn.error.expectedMessage);
  propertiesIn.error.icon().should('be.visible');
  propertiesIn.error
    .background()
    .should('have.css', 'background-color', propertiesIn.error.bgcolor);
}

export function verifyEyeIcon(propertiesIn: HelperModel) {
  const password = 'keeppassword';
  it('should verify that the eye icon is visible', () => {
    propertiesIn.eyeElement().should('be.visible');
  });

  it('should hide the password when the eye icon is not clicked', () => {
    propertiesIn.element().type(password);
    propertiesIn.element().should('have.attr', 'type', 'password');
  });

  it('should reveal the password upon clicking the eye icon', () => {
    propertiesIn.element().type(password);
    propertiesIn.eyeElement().click();
    propertiesIn.element().should('have.attr', 'type', 'text');
  });

  it('should hide the password again when the eye icon is clicked a second time', () => {
    propertiesIn.element().type(password);
    propertiesIn.eyeElement().click();
    propertiesIn.element().should('have.attr', 'type', 'text');
    propertiesIn.eyeElement().click();
    propertiesIn.element().should('have.attr', 'type', 'password');
  });
}
export function assertLabelIsEqual(propertiesIn: HelperModel): void {
  propertiesIn.element().should('have.text', propertiesIn.expectedText);
}
export function assertPlaceholderIsEqual(propertiesIn: HelperModel) {
  propertiesIn
    .element()
    .should('have.attr', 'placeholder', propertiesIn.expectedPlaceHolderText);
}
