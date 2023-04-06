/**
 * Locators Home page Demo Casino
 */
class HomePage {
  elements = {
    GotItButton: () => cy.get(".button--t1 > span").should("be.visible"),
    SignInButton: () => cy.get("div.button > span"),
    SignInButton2: () => cy.get('[data-test="nav-login-head"]'),
    SignUpButton: () => cy.get('[data-test="nav-reg-head"] > span'),
  };

  /**
   * See if the welcome is visible
   */
  GotItValidationButton() {
    this.elements.GotItButton();
  }

  /**
   * click on welcome pop up
   */
  ClickGotItButton() {
    this.elements.GotItButton().click();
  }

  /**
   * click on sign in button
   */
  ClickSignInButton() {
    this.elements.SignInButton().click();
  }

  /**
   * Click on second sign in button
   */
  ClickSignInButton2() {
    this.elements.SignInButton2().click();
  }

  /**
   * Click on sign up button
   */
  ClickSignUpButton() {
    this.elements.SignUpButton().click();
  }
}

module.exports = new HomePage();
