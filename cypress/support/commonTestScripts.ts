import CommonElementsPage from '../pages/commonElements';

type elementType = () => Cypress.Chainable<JQuery<HTMLElement>>;

export function verifyLogo(element: CommonElementsPage): void {
  let imageUrl = '/assets/prout_logo.fcbd3826.png',
    imageType = '.png',
    alt = 'prout';

  it('should be visible', () => {
    element.getProutLogo().should('be.visible');
  });
  it('should have the correct image source', () => {
    element.getProutLogo().should('have.attr', 'src').and('include', imageUrl);
  });
  it('should be a png extension', () => {
    element.getProutLogo().should('have.attr', 'src').and('include', imageType);
  });

  it('should have Prout value in the alt', () => {
    element.getProutLogo().should('have.attr', 'alt', alt);
  });
}

export function verifyEmailFormat(getElement: elementType): void {
  const email = 'test@gmail.com';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  describe('Verify the Email format', () => {
    it('should not accept an invalid format', () => {
      getElement().type('invalidEmail');
      // Use a regular expression to validate the email format
      getElement().invoke('val').should('not.match', emailRegex);
    });
    it('should accept a valid email format', () => {
      getElement().type(email);
      getElement().invoke('val').should('match', emailRegex);
    });
  });
}
