class MainPage {
  elements = {
    BonusLabel: () => cy.get(".currency--bonus > .form__input > .label-input"),
  };

  ValidationBonusLabel() {
    this.elements.BonusLabel().should("be.visible");
  }
}

module.exports = new MainPage();
