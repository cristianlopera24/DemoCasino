const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "../DemoCasino/cypress/integration/pom/HomeCasino.cy.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
