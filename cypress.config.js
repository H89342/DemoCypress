const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },

  // baseUrl:{
  //   homeLink(){
  //     var baseUrl ='https://example.cypress.io/todo'
  //     cy.visit(baseUrl)
  //   }
    
  // }  

    
  },
});
