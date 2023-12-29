const {
  defineConfig,
} = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/results",
    overwrite: true,
    html: true,
    json: true,
  },

  projectId: "7w15ao",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
