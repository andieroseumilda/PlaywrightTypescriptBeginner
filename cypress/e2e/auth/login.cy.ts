import CommonElementsPage from '@/cypress/pages/commonElements';
import LoginPage from '@/cypress/pages/login';
import * as commonTestScripts from '@/cypress/support/commonTestScripts';
import * as helpers from '@/cypress/support/helpers';

const loginElement: LoginPage = new LoginPage();
const commonElement: CommonElementsPage = new CommonElementsPage();

interface LoginUIData {
  signBtn: string;
  createAcct: string;
  fontSize: {
    default: string;
    small: string;
  };
  fontColor: {
    black1: string;
    gray: string;
  };
}

let loginData: LoginUIData;

beforeEach(() => {
  loginElement.visitLogin();
  cy.fixture('login').then((loginDataFixture) => {
    // Load the cssProperties fixture and merge it into loginData
    cy.fixture('cssProperties').then((cssPropertiesFixture) => {
      loginData = {
        ...loginDataFixture,
        ...cssPropertiesFixture,
      };
    });
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
      loginData.fontSize.default,
    );
  });
  it('should display the correct color', () => {
    helpers.assertElementHasColor(
      loginElement.getSignInBtn,
      loginData.fontColor.black1,
    );
  });
});

describe('Verify Create Account', () => {
  it('should be visibile', () => {
    helpers.assertElementVisible(loginElement.getCreateAcctText);
  });

  it.only('should show the correct font size and color', () => {
    helpers.assertElementHasFontSize(
      loginElement.getCreateAcctText,
      loginData.fontSize.default,
    );
    helpers.assertElementHasBorderColor(
      loginElement.getCreateAcctText,
      loginData.fontColor.gray,
    );
  });
  it('should display the correct text', () => {
    helpers.assertLabelIsEqual(
      loginElement.getCreateAcctText,
      loginData.createAcct,
    );
  });
});
