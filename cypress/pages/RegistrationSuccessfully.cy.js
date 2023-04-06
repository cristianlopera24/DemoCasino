/**
 * Locator Registration success Demo Casino
 */
class RegistrationSuccessfully {
  elements = {
    RegistrationSuccessfullyText: () => cy.get(".notification__title"),
  };

  /**
   * See if the message is visible "Congratulations"
   */
  VerifyRegistrationSuccessfully() {
    this.elements.RegistrationSuccessfullyText().should("be.visible");
  }
}

module.exports = new RegistrationSuccessfully();
