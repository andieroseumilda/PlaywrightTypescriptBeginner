import SplashPage from '../../pages/splash';

const splashElement = new SplashPage();

interface SplashData {
  mediaFile: {
    proutImage: string;
    backgroundVideo: string;
  };
  splash: {
    welcomeText: string;
    keycodeLabel: string;
    keycodePlaceholder: string;
  };
}

let splashData: SplashData;
beforeEach(() => {
  splashElement.visitSplashPage();
  cy.fixture('IntroductionData').then((data: SplashData) => {
    splashData = data;
  });
});

describe('Verify the background of Splash page', () => {
  it('should have the prout image', () => {
    it('should have the correct source', () => {
      splashElement
        .getImage()
        .should('have.attr', 'href')
        .and('include', splashData.mediaFile.proutImage);
    });
  });
});

describe('Verify background video in Splash page', () => {
  it('should be present, and should have the correct source', () => {
    cy.wait(1000);
    splashElement.getVideoElement().should('be.visible');
    splashElement.getVideoSource().should(($source: JQuery<HTMLElement>) => {
      expect($source)
        .to.have.attr('src')
        .and.include(splashData.mediaFile.backgroundVideo);
      expect($source).to.have.attr('type', 'video/mp4');
    });
  });
});

describe('Welcome Text', () => {
  it('should have the "Welcome to Prout!" text', () => {
    splashElement
      .getWelcomeText()
      .should('have.text', splashData.splash.welcomeText);
  });
  it('checks text is bold, white, correct size', () => {
    splashElement
      .getWelcomeText()
      .should('have.css', 'font-weight', '800')
      .and('have.css', 'font-size', '48px')
      .and('have.css', 'color', 'rgb(255, 255, 255)');
  });
});
describe('Verify the label, texbox and submit in Splash page', () => {
  describe('Verify the keycode label', () => {
    it('should have this copy "Key in early access code to enter"', () => {
      splashElement
        .getKeycodeLabel()
        .should('be.visible')
        .and('have.text', splashData.splash.keycodeLabel);
    });
    it('checks text is white and correct size', () => {
      splashElement
        .getKeycodeLabel()
        .should('have.css', 'color', 'rgb(255, 255, 255)')
        .and('have.css', 'font-size', '16px');
    });
  });
  describe('Verify the Keycode textbox', () => {
    it('should have a placeholder "Enter code"', () => {
      splashElement
        .getKeycodeTextBox()
        .should('have.value', '')
        .and('have.attr', 'placeholder', splashData.splash.keycodePlaceholder);
    });
  });
  describe('Verify Arrow as submit button', () => {
    it('should be visible', () => {
      splashElement.getSubmitArrowIcon().should('be.visible');
    });
  });
});

describe('Verify Negative Scenarios', () => {
  it('should show an error for an empty input', () => {
    splashElement.getSubmitArrowIcon().click();
    cy.wait(1000);
    cy.on('window:alert', (alertMessage: string) => {
      expect(alertMessage).to.include('Invalid code. Please try again.');
    });
  });
  it('should show an error for an invalid input', () => {
    splashElement.getKeycodeTextBox().type('asfd');
    splashElement.getSubmitArrowIcon().click();
    cy.on('window:alert', (alertMessage: string) => {
      expect(alertMessage).to.include('Invalid code. Please try again.');
    });
  });
  it('should show an error for mismatched input format', () => {
    splashElement.getKeycodeTextBox().type('WOOo');
    splashElement.getSubmitArrowIcon().click();
    cy.on('window:alert', (alertMessage: string) => {
      expect(alertMessage).to.include('Invalid code. Please try again.');
    });
  });
});

describe('Verify Position Scenario', () => {
  it('should successfully access the Prout for valid text inputs', () => {
    splashElement.getKeycodeTextBox().type('WOOO');
    splashElement.getSubmitArrowIcon().click();
    cy.url().should('include', '/intro');
  });
  it('should successfully access the Prout for valid text and number inputs', () => {
    splashElement.getKeycodeTextBox().type('BEPROUT24');
    splashElement.getSubmitArrowIcon().click();
    cy.url().should('include', '/intro');
  });
});
