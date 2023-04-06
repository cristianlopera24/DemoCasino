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

  typeEmail(email) {
    this.elements.EmailInput().type(email);
  }

  ClickAcceptConditionsCheckBox() {
    this.elements.AcceptConditionsCheckBox().click();
  }

  VerifyCurrencyUsd() {
    this.elements.CurrencyUsd().should("have.text", "USD");
  }

  TypePasswordInput(password) {
    this.elements.PasswordInput().type(password);
  }

  TypePasswordConfirmationInput(password) {
    this.elements.PasswordConfirmationInput().type(password);
  }

  SelectRadioButtonNoBonusCode() {
    this.elements.RadioButtonNoBonusCode().click();
  }

  ClickCreateAccountButton() {
    this.elements.CreateAccountButton().click();
  }
}

module.exports = new SignUpPage();
