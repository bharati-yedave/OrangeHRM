const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '7w15ao',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
