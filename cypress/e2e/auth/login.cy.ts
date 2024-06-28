import CommonElementsPage from '@/cypress/pages/commonElements';
import LoginPage from '@/cypress/pages/login';
import * as commonTestScripts from '@/cypress/support/commonTestScripts';
import * as helpers from '@/cypress/support/helpers';

const loginElement: LoginPage = new LoginPage();
const commonElement: CommonElementsPage = new CommonElementsPage();

interface Login {
  signBtn: string;
  fontSize: {
    default: string;
  };
  fontColor: {
    black1: string;
  };
}

let loginData: Login, cssData: Login;

beforeEach(() => {
  loginElement.visitLogin();
  cy.fixture('login').then((data: Login) => {
    loginData = data;
  });
  cy.fixture('cssProperties').then((data: Login) => {
    cssData = data;
  });
});

describe('Verify the Prout logo on Login Page', () => {
  commonTestScripts.verifyLogo(commonElement);
});

describe('Verify the Sign In button', () => {
  it('should be visibile', () => {
    helpers.assertElementVisible(loginElement.getSignInBtn);
  });

  it('should display the correct text', () => {
    helpers.assertLabelIsEqual(loginElement.getSignInBtn, loginData.signBtn);
  });
  it('should show the correct font size', () => {
    helpers.assertElementHasFontSize(
      loginElement.getSignInBtn,
      cssData.fontSize.default,
    );
  });
  it('should display the correct color', () => {
    helpers.assertElementHasColor(
      loginElement.getSignInBtn,
      cssData.fontColor.black1,
    );
  });
});
