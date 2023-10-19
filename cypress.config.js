const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //projectId: "ocnw76",
  video: false,
  reporter: "cypress-mochawesome-reporter",
  watchForFileChanges: false,
  e2e: {
    baseUrl: "https://demo.nopcommerce.com/login",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
  env: {
    URL: "https://demo.nopcommerce.com/register",
  },
});
