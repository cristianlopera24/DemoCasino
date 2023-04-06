class SignInPage {
  elements = {
    titleSignIn: () => cy.get(".page__title").should("have.text", "Sign in"),
    UserLoginNameInput: () => cy.get("#UserLogin_username"),
    UserLoginPasswordInput: () => cy.get("#UserLogin_password"),
    SingInButton: () => cy.get('button[type="submit"]'),
  };

  typeEmail(email) {
    this.elements.UserLoginNameInput().type(email);
  }
  
  typePassword(password) {
    this.elements.UserLoginPasswordInput().type(password);
  }

  clickSignIn() {
    this.elements.SingInButton().click();
  }
}

module.exports = new SignInPage();
