class HomePage {
  elements = {
    GotItButton: () => cy.get(".button--t1 > span").should("be.visible"),
    SignInButton: () => cy.get("div.button > span"),
    SignInButton2: () => cy.get('[data-test="nav-login-head"]'),
    SignUpButton: () => cy.get('[data-test="nav-reg-head"] > span'),
  };

  GotItValidationButton() {
    this.elements.GotItButton();
  }

  ClickGotItButton() {
    this.elements.GotItButton().click();
  }

  ClickSignInButton() {
    this.elements.SignInButton().click();
  }

  ClickSignInButton2() {
    this.elements.SignInButton2().click();
  }

  ClickSignUpButton() {
    this.elements.SignUpButton().click();
  }
}

module.exports = new HomePage();
