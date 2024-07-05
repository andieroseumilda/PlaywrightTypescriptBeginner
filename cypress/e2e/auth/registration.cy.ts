import CommonElementsPage from '@/cypress/pages/commonElements';
import RegistrationPage from '@/cypress/pages/registration';
import * as commonTestScripts from '@/cypress/support/commonTestScripts';
import * as H from '@/cypress/support/helpers';

let commonElement: CommonElementsPage = new CommonElementsPage();
let registrationElement: RegistrationPage = new RegistrationPage();

interface RegistrationUIData {
  agreeLbl: string;
  ageLbl: string;
  confirmPass: string;
  confirmPlaceholder: string;
  emailLbl: string;
  emailPlaceholder: string;
  errorMessage: {
    lessPass: string;
    passNotMatch: string;
    requiredField: string;
  };
  existAcctLbl: string;
  fontColor: {
    darkGray: string;
    black2: string;
    lightGray: string;
    mediumGray: string;
  };
  fontSize: {
    default: string;
    small: string;
  };
  mobileLbl: string;
  mobileCode: string;
  mobilePlaceholder: string;
  passlbl: string;
  passPlaceholder: string;
  userLbl: string;
  userPlaceholder: string;
}

let registrationData: RegistrationUIData;

beforeEach(() => {
  cy.fixture('registration').then((registrationFixtureData) => {
    cy.fixture('cssProperties').then((cssFixtureData) => {
      registrationData = {
        ...registrationFixtureData,
        ...cssFixtureData,
      };
    });
  });
  registrationElement.visitRegistration();
});

describe('Verify the Logo on Create account page', () => {
  commonTestScripts.verifyLogo(commonElement);
});
describe('Verify the Username label and textbox functionality', () => {
  describe('Verify the Username label', () => {
    it('should be visible', () => {
      commonElement.getSignInLabel;
    });
    it('should display the correct label', () => {
      H.assertLabelIsEqual({
        element: commonElement.getSignInLabel,
        expectedText: registrationData.userLbl,
      } as H.HelperModel);
    });
    it('should show the correct font size and color', () => {
      H.assertElementHasFontSize({
        element: commonElement.getSignInLabel,
        fontSize: registrationData.fontSize.default,
      } as H.HelperModel);
      H.assertElementHasColor({
        element: commonElement.getSignInLabel,
        color: registrationData.fontColor.darkGray,
      } as H.HelperModel);
    });
  });
  describe('Verify the Username textbox', () => {
    it('should be visible', () => {
      commonElement.getPasswordTxtbox().should('be.visible');
    });
    it('should have the correct placeholder', () => {
      H.assertPlaceholderIsEqual({
        element: commonElement.getSignInTxtbox,
        expectedPlaceHolderText: registrationData.userPlaceholder,
      } as H.HelperModel);
    });
    it('should show the correct font size', () => {
      H.assertElementHasFontSize({
        element: commonElement.getSignInTxtbox,
        fontSize: registrationData.fontSize.default,
      } as H.HelperModel);
    });
  });
});
describe('Verify the Password label and textbox functionality', () => {
  describe('Verify the Password label', () => {
    it('should be visible', () => {
      commonElement.getPasswordLabel().should('be.visible');
    });
    it('should display the correct label', () => {
      H.assertLabelIsEqual({
        element: commonElement.getPasswordLabel,
        expectedText: registrationData.passlbl,
      } as H.HelperModel);
    });
    it('should show the correct font size and color', () => {
      H.assertElementHasFontSize({
        element: commonElement.getPasswordLabel,
        fontSize: registrationData.fontSize.default,
      } as H.HelperModel);
      H.assertElementHasColor({
        element: commonElement.getPasswordLabel,
        color: registrationData.fontColor.darkGray,
      } as H.HelperModel);
    });
  });
  describe('Verify the Password textbox', () => {
    it('should be visible', () => {
      commonElement.getPasswordTxtbox().should('be.visible');
    });
    it('should have the correct placeholder', () => {
      H.assertPlaceholderIsEqual({
        element: commonElement.getPasswordTxtbox,
        expectedPlaceHolderText: registrationData.passPlaceholder,
      } as H.HelperModel);
    });
    it('should show the correct font size and color', () => {
      H.assertElementHasFontSize({
        element: commonElement.getPasswordTxtbox,
        fontSize: registrationData.fontSize.default,
      } as H.HelperModel);
      H.assertElementHasBorderColor({
        element: commonElement.getPasswordTxtbox,
        borderColor: registrationData.fontColor.black2,
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
describe('Verify the Confirm Password label and textbox functionality', () => {
  describe('Verify the Confirm Password label', () => {
    it('should be visible', () => {
      registrationElement.getConfirmPasswordLabel().should('be.visible');
    });
    it('should display the correct label', () => {
      H.assertLabelIsEqual({
        element: registrationElement.getConfirmPasswordLabel,
        expectedText: registrationData.confirmPass,
      } as H.HelperModel);
    });
    it('should show the correct font size and color', () => {
      H.assertElementHasFontSize({
        element: registrationElement.getConfirmPasswordLabel,
        fontSize: registrationData.fontSize.default,
      } as H.HelperModel);
      H.assertElementHasColor({
        element: registrationElement.getConfirmPasswordLabel,
        color: registrationData.fontColor.darkGray,
      } as H.HelperModel);
    });
  });
  describe('Verify the Confirm Password textbox', () => {
    it('should be visible', () => {
      registrationElement.getConfirmPasswordTxtbox().should('be.visible');
    });

    it('should have the correct placeholder', () => {
      H.assertPlaceholderIsEqual({
        element: registrationElement.getConfirmPasswordTxtbox,
        expectedPlaceHolderText: registrationData.confirmPlaceholder,
      } as H.HelperModel);
    });
    it('should show the correct font size and color', () => {
      H.assertElementHasFontSize({
        element: registrationElement.getConfirmPasswordTxtbox,
        fontSize: registrationData.fontSize.default,
      } as H.HelperModel);
      H.assertElementHasBorderColor({
        element: registrationElement.getConfirmPasswordTxtbox,
        borderColor: registrationData.fontColor.black2,
      } as H.HelperModel);
    });
  });
  describe('Verify the eye icon in the Confirm Password textbox', () => {
    H.verifyEyeIcon({
      element: registrationElement.getConfirmPasswordTxtbox,
      eyeElement: registrationElement.getEyeConfirmIcon,
    } as H.HelperModel);
  });
});
describe('Verify the Email Address label and textbox functionality', () => {
  describe('Verify the Email address label', () => {
    it('should be visible', () => {
      registrationElement.getEmailAddressLabel().should('be.visible');
    });
    it('should display the correct label', () => {
      H.assertLabelIsEqual({
        element: registrationElement.getEmailAddressLabel,
        expectedText: registrationData.emailLbl,
      } as H.HelperModel);
    });
    it('should show the correct font size and color', () => {
      H.assertElementHasFontSize({
        element: registrationElement.getEmailAddressLabel,
        fontSize: registrationData.fontSize.default,
      } as H.HelperModel);
      H.assertElementHasColor({
        element: registrationElement.getEmailAddressLabel,
        color: registrationData.fontColor.darkGray,
      } as H.HelperModel);
    });
  });
  describe('Verify the Email address textbox', () => {
    it('should be visible', () => {
      registrationElement.getEmailAddressTxtbox().should('be.visible');
    });
    it('should have the correct placeholder text', () => {
      H.assertPlaceholderIsEqual({
        element: registrationElement.getEmailAddressTxtbox,
        expectedPlaceHolderText: registrationData.emailPlaceholder,
      } as H.HelperModel);
    });
    it('should show the correct font size and color', () => {
      H.assertElementHasFontSize({
        element: registrationElement.getEmailAddressTxtbox,
        fontSize: registrationData.fontSize.default,
      } as H.HelperModel);
      H.assertElementHasBorderColor({
        element: registrationElement.getEmailAddressTxtbox,
        borderColor: registrationData.fontColor.black2,
      } as H.HelperModel);
    });
    commonTestScripts.verifyEmailFormat(() =>
      registrationElement.getEmailAddressTxtbox(),
    );
  });
});
describe('Verify Mobile number label and textbox', () => {
  describe('Verify the mobile local code', () => {
    it('should be visible', () => {
      registrationElement.getMobileLabel().should('be.visible');
    });
    it('should show the correct font size and color', () => {
      H.assertElementHasFontSize({
        element: registrationElement.getMobileLabel,
        fontSize: registrationData.fontSize.default,
      } as H.HelperModel);
      H.assertElementHasColor({
        element: registrationElement.getMobileLabel,
        color: registrationData.fontColor.darkGray,
      } as H.HelperModel);
    });
    it('should have the local code text', () => {
      H.assertLabelIsEqual({
        element: registrationElement.getMobileCode,
        expectedText: registrationData.mobileCode,
      } as H.HelperModel);
    });
  });
  describe('Verify the mobile code textbox', () => {
    it('should have the correct placeholder', () => {
      H.assertPlaceholderIsEqual({
        element: registrationElement.getMobileTxtbox,
        expectedPlaceHolderText: registrationData.mobilePlaceholder,
      } as H.HelperModel);
    });
    it('should show the correct font size and color', () => {
      H.assertElementHasFontSize({
        element: registrationElement.getMobileTxtbox,
        fontSize: registrationData.fontSize.small,
      } as H.HelperModel);
      H.assertElementHasBorderColor({
        element: registrationElement.getMobileTxtbox,
        borderColor: registrationData.fontColor.mediumGray,
      } as H.HelperModel);
    });
    commonTestScripts.verifyNumberField(() =>
      registrationElement.getMobileTxtbox(),
    );
  });
});
