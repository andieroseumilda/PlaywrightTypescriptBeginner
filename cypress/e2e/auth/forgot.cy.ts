import ForgotPassword from '@/cypress/pages/forgotPassword';
import LoginPage from '@/cypress/pages/login';
import * as H from '@/cypress/support/helpers';

let forgotElement: ForgotPassword = new ForgotPassword();
let loginElement: LoginPage = new LoginPage();

interface ForgotUIData {
  forgotPage: {
    header: string;
    emailPlaceholder: string;
  };
  fontColor: {
    darkGray: string;
    white: string;
  };
  fontSize: {
    default: string;
  };
  submitBtn: string;
  changePasswordPage: {
    header: string;
    otp: string;
    pass: string;
    passPlaceholder: string;
    confirmPass: string;
  };
  errorMessage: {
    passNotMatch: string;
    lessOTP: string;
  };
}

let forgotData: ForgotUIData;
before(() => {
  cy.fixture('forgotPass').then((forgotDataFixture) => {
    cy.fixture('cssProperties').then((cssDataFixture) => {
      forgotData = {
        ...forgotDataFixture,
        ...cssDataFixture,
      };
    });
  });
});

describe('Verify the content of forgot password page', () => {
  beforeEach(() => {
    forgotElement.visitForgotPassword();
  });
  it('should display the header in the page', () => {
    H.assertLabelIsEqual({
      element: forgotElement.getEmailToResetPassworLabel,
      expectedText: forgotData.forgotPage.header,
    } as H.HelperModel);
  });
  it('should display the correct font color and size of the header', () => {
    H.assertElementHasColor({
      element: forgotElement.getEmailToResetPassworLabel,
      color: forgotData.fontColor.darkGray,
    } as H.HelperModel);
    H.assertElementHasFontSize({
      element: forgotElement.getEmailToResetPassworLabel,
      fontSize: forgotData.fontSize.default,
    } as H.HelperModel);
  });
  it('should display the email textbox', () => {
    forgotElement.getEmailToResetPassworText().should('be.visible');
  });
  it('should have the placeholder', () => {
    H.assertPlaceholderIsEqual({
      element: forgotElement.getEmailToResetPassworText,
      expectedPlaceHolderText: forgotData.forgotPage.emailPlaceholder,
    } as H.HelperModel);
  });
  it('should display the submit button', () => {
    forgotElement.getSubmitBtn().should('be.visible');
  });
  it('shows the correct label in the button', () => {
    H.assertLabelIsEqual({
      element: forgotElement.getSubmitBtn,
      expectedText: forgotData.submitBtn,
    } as H.HelperModel);
  });
  it('should display the back icon', () => {
    forgotElement.getBackBtn().should('be.visible');
  });
});
// describe('Verify if an error appears when the email submitted as blank', () => {
//   // not yet confirm if an error or the button is disabled
// });
// describe('Verify the api call when the email is submitted', () => {
//   beforeEach(() => {
//     forgotElement.visitForgotPassword();
//   });
//   it('should have an api request', () => {
//     forgotElement.getEmailToResetPassworText().type('sample@gmail.com');
//     cy.intercept('POST', 'https://torontodough.one/prout/forgotElementword').as(
//       'forgotRequest',
//     );
//     forgotElement.getSubmitBtn().click();
//     cy.wait('@forgotRequest').then((interception) => {
//       expect(interception.request.method).to.equal('POST');
//       expect(interception.request.url).to.include(
//         'https://torontodough.one/prout/forgotElementword',
//       );
//     });
//   });
// });
describe('Verify navigation to change password after submitting an email', () => {
  beforeEach(() => {
    forgotElement.visitForgotPassword();
  });
  it('should navigate to change password page', () => {
    forgotElement.getEmailToResetPassworText().type('sample@gmail.com');
    forgotElement.getSubmitBtn().click();
    cy.wait(8000);
    cy.url().should('include', '/change-password');
  });
});
describe('Verify the content in the change password', () => {
  beforeEach(() => {
    forgotElement.visitChangePassword();
  });
  describe('Verify the Header', () => {
    it('should display the header', () => {
      forgotElement.getChangePasswordHeader().should('be.visible');
    });
    it('should display the correct header', () => {
      H.assertLabelIsEqual({
        element: forgotElement.getChangePasswordHeader,
        expectedText: forgotData.changePasswordPage.header,
      } as H.HelperModel);
    });
  });
  describe('Verify the OTP label and texbox', () => {
    it('should show the Otp label', () => {
      forgotElement.getEnterOTPLabel().should('be.visible');
    });
    it('should be display the correct spelling of Otp label', () => {
      H.assertForceLabelIsEqual({
        element: forgotElement.getEnterOTPLabel,
        expectedText: forgotData.changePasswordPage.otp,
      } as H.HelperModel);
    });
    it('appears the otp texbox', () => {
      forgotElement.getEnterOTPTextbox().should('be.visible');
    });
    it('should have a otp placeholder', () => {
      H.assertPlaceholderIsEqual({
        element: forgotElement.getEnterOTPTextbox,
        expectedPlaceHolderText: forgotData.changePasswordPage.otp,
      } as H.HelperModel);
    });
  });
  describe('Verify the Password label and textbox', () => {
    it('should show the password label', () => {
      forgotElement.getChangePassLabel().should('be.visible');
    });
    it('should be display the correct spelling of password label', () => {
      H.assertLabelIsEqual({
        element: forgotElement.getChangePassLabel,
        expectedText: forgotData.changePasswordPage.pass,
      } as H.HelperModel);
    });
    it('appears the password texbox', () => {
      forgotElement.getChangePassTextbox().should('be.visible');
    });
    it('should have a password placeholder', () => {
      H.assertPlaceholderIsEqual({
        element: forgotElement.getChangePassTextbox,
        expectedPlaceHolderText: forgotData.changePasswordPage.passPlaceholder,
      } as H.HelperModel);
    });
    describe('Verify the eye icon in the Password textbox', () => {
      H.verifyEyeIcon({
        element: forgotElement.getChangePassTextbox,
        eyeElement: forgotElement.getChangePassEyeIcon,
      } as H.HelperModel);
    });
  });
  describe('Verify the Confirm label and textbox', () => {
    it('should show the password label', () => {
      forgotElement.getChangeConfirmPassLabel().should('be.visible');
    });
    it('should be display the correct spelling of password label', () => {
      H.assertLabelIsEqual({
        element: forgotElement.getChangeConfirmPassLabel,
        expectedText: forgotData.changePasswordPage.confirmPass,
      } as H.HelperModel);
    });
    it('appears the password texbox', () => {
      forgotElement.getChangeConfirmPassTextbox().should('be.visible');
    });
    it('should have a password placeholder', () => {
      H.assertPlaceholderIsEqual({
        element: forgotElement.getChangeConfirmPassTextbox,
        expectedPlaceHolderText: forgotData.changePasswordPage.passPlaceholder,
      } as H.HelperModel);
    });
  });
  describe('Verify Submit button', () => {
    it('should be present', () => {
      forgotElement.getSubmitBtn().should('be.visible');
    });
    it('should be disabled', () => {
      forgotElement.getSubmitBtn().should('be.disabled');
    });
    it('should display the correct label', () => {
      H.assertLabelIsEqual({
        element: forgotElement.getSubmitBtn,
        expectedText: forgotData.submitBtn,
      } as H.HelperModel);
    });
    it('should show the correct font color and size', () => {
      H.assertElementHasColor({
        element: forgotElement.getSubmitBtn,
        color: forgotData.fontColor.white,
      } as H.HelperModel);
      H.assertElementHasFontSize({
        element: forgotElement.getSubmitBtn,
        fontSize: forgotData.fontSize.default,
      } as H.HelperModel);
    });
  });
  describe('Verify the password and confirm password fields match and mismatch', () => {
    it('should verify when the password and confirm do not match', () => {
      forgotElement.getEnterOTPTextbox().type('123456');
      forgotElement.getChangePassTextbox().type('stratpoint@yopmail.com');
      forgotElement.getChangeConfirmPassTextbox().type('123456');
      forgotElement.getSubmitBtn().click();
      forgotElement
        .getErrorPassLessChar()
        .should('have.text', forgotData.errorMessage.passNotMatch);
    });
  });
  describe('Verify the OTP if less than the expected length', () => {
    it('should show an error message if the input values are shorter than the expected length', () => {
      forgotElement.getEnterOTPTextbox().type('123');
      forgotElement.getChangePassTextbox().type('stratpoint@yopmail.com');
      forgotElement
        .getChangeConfirmPassTextbox()
        .type('stratpoint@yopmail.com');
      forgotElement.getSubmitBtn().click();
      forgotElement
        .getErrorPassLessChar()
        .should('have.text', forgotData.errorMessage.lessOTP);
    });
  });
  describe('Veirfy if the system request an API', () => {
    it('should have an api request', () => {
      forgotElement.getEnterOTPTextbox().type('123456');
      forgotElement.getChangePassTextbox().type('stratpoint@yopmail.com');
      forgotElement
        .getChangeConfirmPassTextbox()
        .type('stratpoint@yopmail.com');

      cy.intercept('POST', 'https://torontodough.one/prout/changePassword').as(
        'changeRequest',
      );
      forgotElement.getSubmitBtn().click();
      cy.wait('@changeRequest').then((interception) => {
        expect(interception.request.method).to.equal('POST');
        expect(interception.request.url).to.include(
          'https://torontodough.one/prout/changePassword',
        );
      });
    });
  });
  describe('Verify the back button', () => {
    it('should go back to Login page', () => {
      forgotElement.getBackBtn().click();
      cy.url().should('include', '/login');
    });
  });
});
