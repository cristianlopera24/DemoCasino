/**
 * Locators sign up page Demo Casino
 */
class SignUpPage {
  elements = {
    titleSignUp: () =>
      cy.get('h2[class="page__title"]').should("have.text", "Sign up"),
    EmailInput: () =>
      cy.get("#core__protected_modules_user_yiiForm_RegistrationForm_email"),
    AcceptConditionsCheckBox: () =>
      cy.get(
        'label[for="core__protected_modules_user_yiiForm_RegistrationForm_terms_and_conditions"]'
      ),
    CurrencyUsd: () =>
      cy.get(".input__wrapper > .selectric-wrapper > .selectric > .label"),
    PasswordInput: () =>
      cy.get("#core__protected_modules_user_yiiForm_RegistrationForm_password"),
    PasswordConfirmationInput: () =>
      cy.get(
        "#core__protected_modules_user_yiiForm_RegistrationForm_password_confirmation"
      ),
    RadioButtonNoBonusCode: () => cy.get('label[for="bonus-0"]'),
    CreateAccountButton: () => cy.get('button[type="submit"]'),
  };

  /**
   * Fill your email into the sign up page
   * @param {String} email - Alphanumeric email
   */
  typeEmail(email) {
    this.elements.EmailInput().type(email);
  }

  /**
   * Click on accept conditions 
   */
  ClickAcceptConditionsCheckBox() {
    this.elements.AcceptConditionsCheckBox().click();
  }

  /**
   * Validate if USD is for default
   */
  VerifyCurrencyUsd() {
    this.elements.CurrencyUsd().should("have.text", "USD");
  }

  /**
   * Fill your password into the sign up page
   * @param {String} password - Alphanumeric Password
   */
  TypePasswordInput(password) {
    this.elements.PasswordInput().type(password);
  }

  /**
   * Fill your password confirmation into the sign up page
   * @param {String} password - Alphanumeric Password
   */
  TypePasswordConfirmationInput(password) {
    this.elements.PasswordConfirmationInput().type(password);
  }

  /**
   * Select no bonus code option
   */
  SelectRadioButtonNoBonusCode() {
    this.elements.RadioButtonNoBonusCode().click();
  }

  /**
   * Click on create account button
   */
  ClickCreateAccountButton() {
    this.elements.CreateAccountButton().click();
  }
}

module.exports = new SignUpPage();
