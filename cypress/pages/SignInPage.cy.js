/**
 * Locators Sign in page Demo Casino
 */
class SignInPage {
  elements = {
    titleSignIn: () => cy.get(".page__title").should("have.text", "Sign in"),
    UserLoginNameInput: () => cy.get("#UserLogin_username"),
    UserLoginPasswordInput: () => cy.get("#UserLogin_password"),
    SingInButton: () => cy.get('button[type="submit"]'),
  };

  /**
   * Fill your email into the sign in page
   * @param {String} email - Alphanumeric email
   */
  typeEmail(email) {
    this.elements.UserLoginNameInput().type(email);
  }

  /**
   * Fill your password into the sign in page
   * @param {String} password - Alphanumeric password
   */
  typePassword(password) {
    this.elements.UserLoginPasswordInput().type(password);
  }

  /**
   * click on sign in page
   */
  clickSignIn() {
    this.elements.SingInButton().click();
  }
}

module.exports = new SignInPage();
