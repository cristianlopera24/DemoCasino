/**
 * Locators Main Page Demo Casino
 */
class MainPage {
  elements = {
    BonusLabel: () => cy.get(".currency--bonus > .form__input > .label-input"),
  };

  /**
   * See if you are already logged in
   */
  ValidationBonusLabel() {
    this.elements.BonusLabel().should("be.visible");
  }
}

module.exports = new MainPage();
