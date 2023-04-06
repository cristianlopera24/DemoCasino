class RegistrationSuccessfully {
  elements = {
    RegistrationSuccessfullyText: () => cy.get(".notification__title"),
  };

  VerifyRegistrationSuccessfully() {
    this.elements.RegistrationSuccessfullyText().should("be.visible");
  }
}

module.exports = new RegistrationSuccessfully();
