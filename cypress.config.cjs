const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173", // Change if your dev server runs on a different port
    supportFile: "cypress/support/e2e.ts",
    viewportWidth: 1280,
    viewportHeight: 720,
    // setupNodeEvents(on, config) {
    // implement node event listeners here
    // },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
