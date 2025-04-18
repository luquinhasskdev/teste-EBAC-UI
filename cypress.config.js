const { defineConfig } = require("cypress");

module.exports = defineConfig({
    projectId: "h1kv6p",

 e2e: {

  baseUrl: "http://lojaebac.ebaconline.art.br/",

  setupNodeEvents(on, config) {

  },
 },
});