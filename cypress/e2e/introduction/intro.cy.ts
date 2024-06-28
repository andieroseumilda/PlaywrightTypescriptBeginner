import IntroPage from '../../pages/intro';

const introElement = new IntroPage();

interface IntroData {
  introPageText: {
    firstIntro: string;
    secondIntro: string;
  };
  videoText: {
    first: string;
    second: string;
    third: string;
    fourth: string;
    fifth: string;
  };
  mediaFile: {
    proutImage: string;
    backgroundVideo: string;
  };
}

let introData: IntroData;

beforeEach(() => {
  introElement.visitIntro();
  cy.fixture('IntroductionData').then((data: IntroData) => {
    introData = data;
  });
});

describe('Verify Video', () => {
  it('should be present, and should have the correct source', () => {
    cy.wait(1000);
    introElement.getVideoElement().should('be.visible');
    introElement.getVideoSource().should(($source: JQuery<HTMLElement>) => {
      expect($source)
        .to.have.attr('src')
        .and.include(introData.mediaFile.backgroundVideo);
      expect($source).to.have.attr('type', 'video/mp4');
    });
  });
});

describe('Verify the Text and Video in Video Section', () => {
  it('should display "WELCOME TO PROUT"', () => {
    introElement
      .getFirstVideoText()
      .invoke('text')
      .should('include', introData.videoText.first);
  });
  it('should have font white color', () => {
    introElement
      .getFirstVideoText()
      .should('have.css', 'color', 'rgb(255, 255, 255)');
  });
  it('should display "WE CONNECT YOU TO"', () => {
    introElement
      .getSecondVideoText()
      .invoke('text')
      .should('include', introData.videoText.second);
  });
  it('should display "INCLUSIVE CRITITAL"', () => {
    introElement
      .getThirdVideoText()
      .should('have.text', introData.videoText.third);
  });
  it('should display "SERVICE PROVIDERS"', () => {
    introElement
      .getSecondVideoText()
      .invoke('text')
      .should('include', introData.videoText.fourth);
  });
  it('should display the 4 services', () => {
    introElement
      .getFourthVideoText()
      .should('have.text', introData.videoText.fifth)
      .and('have.css', 'font-size', '12px');
  });
});

describe('Verify the Welcome image', () => {
  it('should have the correct source', () => {
    introElement
      .getWelcomeImage()
      .should('have.attr', 'href')
      .and('include', introData.mediaFile.proutImage);
  });
});
describe('Verify the Introductions', () => {
  it('should contain correct first introduction content', () => {
    introElement
      .getIntroFirst()
      .should('contain', introData.introPageText.firstIntro);
  });

  it('should contain correct second introduction content', () => {
    introElement
      .getIntroLast()
      .should('contain', introData.introPageText.secondIntro);
  });

  it('should have correct font size and color', () => {
    introElement
      .getIntroFirst()
      .should('have.css', 'color', 'rgb(33, 37, 41)')
      .and('have.css', 'font-size', '16px');
    introElement
      .getIntroLast()
      .should('have.css', 'color', 'rgb(33, 37, 41)')
      .and('have.css', 'font-size', '16px');
  });
});
describe('Verify Next button', () => {
  it('must be visible at the top right bottom', () => {
    const nextArrow: Cypress.Chainable<JQuery<HTMLElement>> =
      introElement.getNextArrow();
    nextArrow.scrollIntoView();
    nextArrow.should('be.visible');
  });

  it('should redirect to the Login page when clicked', () => {
    introElement.getNextArrow().click();
    cy.url().should('include', '/login');
  });
});

describe('Verify the footer divier', () => {
  it('should display the divider at the bottom', () => {
    introElement.getFooterDivider().should('be.visible');
  });
});
