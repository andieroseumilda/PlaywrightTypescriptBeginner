import CommonElementsPage from '@/cypress/pages/commonElements';
import LoginPage from '@/cypress/pages/login';
import * as commonTestScripts from '@/cypress/support/commonTestScripts';
import * as H from '@/cypress/support/helpers';

const loginElement: LoginPage = new LoginPage();
const commonElement: CommonElementsPage = new CommonElementsPage();
let loginHelper: H.HelperModel;

interface LoginUIData {
  errorUser: string;
  passLbl: string;
  passPlaceholder: string;
  signBtn: string;
  signInLbl: string;
  signInPlaceholder: string;
  createAcct: string;
  fontSize: {
    default: string;
    small: string;
  };
  fontColor: {
    black1: string;
    gray: string;
    lightPink: string;
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

describe('Verify Prout logo on Login Page', () => {
  commonTestScripts.verifyLogo(commonElement);
});
describe('Verify Sign In button', () => {
  it('should be visibile', () => {
    H.assertElementVisible({
      element: loginElement.getSignInBtn,
    } as H.HelperModel);
  });

  it('should display the correct text', () => {
    H.assertLabelIsEqual({
      element: loginElement.getSignInBtn,
      expectedText: loginData.signBtn,
    } as H.HelperModel);
  });
  it('should show the correct font size', () => {
    H.assertElementHasFontSize({
      element: loginElement.getSignInBtn,
      fontSize: loginData.fontSize.default,
    } as H.HelperModel);
  });
  it('should display the correct color', () => {
    H.assertElementHasColor({
      element: loginElement.getSignInBtn,
      color: loginData.fontColor.black1,
    } as H.HelperModel);
  });
});
describe('Verify Create Account', () => {
  it('should be visibile', () => {
    H.assertElementVisible({
      element: loginElement.getCreateAcctText,
    } as H.HelperModel);
  });

  it('should show the correct font size and color', () => {
    H.assertElementHasFontSize({
      element: loginElement.getCreateAcctText,
      fontSize: loginData.fontSize.default,
    } as H.HelperModel);
    H.assertElementHasBorderColor({
      element: loginElement.getCreateAcctText,
      color: loginData.fontColor.gray,
    } as H.HelperModel);
  });
  it('should display the correct text', () => {
    H.assertLabelIsEqual({
      element: loginElement.getCreateAcctText,
      expectedText: loginData.createAcct,
    } as H.HelperModel);
  });
});
describe('Verify the create account page', () => {
  it('should navigate to the create account page upon clicking the create account link', () => {
    loginElement.getCreateAcctText().click();
    commonElement.getSignInTxtbox().should('not.exist');
    cy.url().should('include', '/register');
  });
});
describe('Verify forgot password', () => {
  it('should navigate to forgot page', () => {
    loginElement.getForgotPass().click();
    cy.url().should('include', '/forgot-password');
  });
});
describe('Verify Email address Label and Textbox functionality', () => {
  describe('Verify the Email label', () => {
    it('should be visibile', () => {
      H.assertElementVisible({
        element: commonElement.getSignInLabel,
      } as H.HelperModel);
    });
    it('should show the correct font size and color', () => {
      H.assertElementHasFontSize({
        element: commonElement.getSignInLabel,
        fontSize: loginData.fontSize.default,
      } as H.HelperModel);
    });
    it('should display the correct label', () => {
      H.assertLabelIsEqual({
        element: commonElement.getSignInLabel,
        expectedText: loginData.signInLbl,
      } as H.HelperModel);
    });
  });
  describe('Verify the Email textbox', () => {
    it('should be visible', () => {
      commonElement.getSignInTxtbox().should('be.visible');
    });
    it('have an empty value', () => {
      commonElement.getSignInTxtbox().should('have.value', '');
    });
    it('should have the correct placeholder text', () => {
      H.assertPlaceholderIsEqual({
        element: commonElement.getSignInTxtbox,
        expectedPlaceHolderText: loginData.signInPlaceholder,
      } as H.HelperModel);
    });
    it('should show the correct font size and color', () => {
      commonElement.getSignInTxtbox().type('TestOnly');
      H.assertElementHasFontSize({
        element: commonElement.getSignInTxtbox,
        fontSize: loginData.fontSize.default,
        color: loginData.fontColor.gray,
      } as H.HelperModel);
    });
  });
  // Verify Email format
  commonTestScripts.verifyEmailFormat(commonElement.getSignInTxtbox);
});
describe('Password label and functionality ', () => {
  describe('Verify the Password label', () => {
    it('should be visible', () => {
      commonElement.getPasswordLabel().should('be.visible');
    });
    it('should display the correct label', () => {
      H.assertLabelIsEqual({
        element: commonElement.getPasswordLabel,
        expectedText: loginData.passLbl,
      } as H.HelperModel);
    });
    it('should show the correct font size and color', () => {
      H.assertElementHasFontSize({
        element: commonElement.getPasswordLabel,
        fontSize: loginData.fontSize.default,
      } as H.HelperModel);
    });
  });
  describe('Verify the Password textbox', () => {
    it('should be visible', () => {
      commonElement.getPasswordTxtbox().should('be.visible');
    });
    it('should the correct placeholder text', () => {
      H.assertPlaceholderIsEqual({
        element: commonElement.getPasswordTxtbox,
        expectedPlaceHolderText: loginData.passPlaceholder,
      } as H.HelperModel);
    });
    it('should show the correct font size and color', () => {
      H.assertElementHasFontSize({
        element: commonElement.getPasswordTxtbox,
        fontSize: loginData.fontSize.default,
      } as H.HelperModel);
    });
  });
  describe('Verify the eye icon in the Password textbox', () => {
    H.verifyEyeIcon({
      element: commonElement.getPasswordTxtbox,
      eyeElement: commonElement.getshowPass,
    } as H.HelperModel);
  });
});
describe('Verify the negative scenario', () => {
  it('should show an error when email and password are empty', () => {
    commonElement.getSignInTxtbox().should('have.value', '');
    commonElement.getPasswordTxtbox().should('have.value', '');
    H.assertError({
      btn: loginElement.getSignInBtn,
      error: {
        bgcolor: loginData.fontColor.lightPink,
        background: commonElement.getErrorBackground,
        expectedMessage: loginData.errorUser,
        icon: commonElement.getErrorIcon,
        message: commonElement.getErrorMessage,
      },
    } as H.HelperModel);
  });
  it('should show an error for unregistered email', () => {
    const email = 'unregistered@email.com';
    const password = 'stratpoint@yopmail.com';
    H.assertError({
      btn: loginElement.getSignInBtn,
      email: email,
      error: {
        bgcolor: loginData.fontColor.lightPink,
        background: commonElement.getErrorBackground,
        expectedMessage: loginData.errorUser,
        icon: commonElement.getErrorIcon,
        message: commonElement.getErrorMessage,
      },
      txtbox: {
        signIn: commonElement.getSignInTxtbox,
        password: commonElement.getPasswordTxtbox,
      },
      password: password,
    } as H.HelperModel);
  });
  it('should show an error for an invalid password', () => {
    const email = 'stratpoint@yopmail.com';
    const password = 'invalidpassword';
    H.assertError({
      btn: loginElement.getSignInBtn,
      email: email,
      error: {
        bgcolor: loginData.fontColor.lightPink,
        background: commonElement.getErrorBackground,
        expectedMessage: loginData.errorUser,
        icon: commonElement.getErrorIcon,
        message: commonElement.getErrorMessage,
      },
      txtbox: {
        signIn: commonElement.getSignInTxtbox,
        password: commonElement.getPasswordTxtbox,
      },
      password: password,
    } as H.HelperModel);
  });
});
