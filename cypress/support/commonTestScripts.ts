import CommonElementsPage from '../pages/commonElements';

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
