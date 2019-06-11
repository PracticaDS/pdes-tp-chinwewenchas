describe('Factory', () => {
  describe('Una vez cargada la pagina', () => {
    beforeEach('Cargar la pagina', () => {
      cy.visit('http://localhost:3000')
    })

    it('debe mostrar los elementos de la pagina', () => {
      // Sign in
      cy.get('.sign_in_container')
      cy.get('.sign_in_form')
      cy.get('.sign_in_form_input')
        .then(function ($input) {
          $input[0].setAttribute('value', 'Chinwewencha')
        })
        .should('have.attr', 'value', 'Chinwewencha')

      cy.get('.sign_in_form_button')
        .invoke('width')
        .should('be.greaterThan', 0)
      cy.get('.sign_in_form_button')
        .wait(1000)
        .should('be.visible')
        .click({ force: true })
    })

    describe('Al completar el usuario y tocar Sign in', () => {
      it('debe mostrar los elementos de saludo al usuario logueado y elementos de creación de fábrico', () => {
        // Sign in
        cy.get('.sign_in_container')
        cy.get('.sign_in_form')
        cy.get('.sign_in_form_input')
          .then(function ($input) {
            $input[0].setAttribute('value', 'Chinwewencha')
          })
          .should('have.attr', 'value', 'Chinwewencha')

        cy.get('.sign_in_form_button')
          .invoke('width')
          .should('be.greaterThan', 0)
        cy.get('.sign_in_form_button')
          .wait(1000)
          .should('be.visible')
          .click({ force: true })
        /*
      cy.get('.factory_selector_container')
      cy.get('.factory_selector_form')
        .find('h1')
        .contains('Whale cum Chinwewencha! ')
      cy.get('.factory_selector_form_input')
*/
      })
    })
    describe('Al completar los datos de creación de fábrica y tocar Create Factory', () => {
      it('debe mostrar los elementos de la factory, toolbox, ganancias', () => {
        // Sign in
        cy.get('.sign_in_container')
        cy.get('.sign_in_form')
        cy.get('.sign_in_form_input')
          .then(function ($input) {
            $input[0].setAttribute('value', 'Chinwewencha')
          })
          .should('have.attr', 'value', 'Chinwewencha')

        cy.get('.sign_in_form_button')
          .invoke('width')
          .should('be.greaterThan', 0)
        cy.get('.sign_in_form_button')
          .wait(1000)
          .should('be.visible')
          .click({ force: true })
        /*
      cy.get('.factory_selector_container')
      cy.get('.factory_selector_form')
        .find('h1')
        .contains('Whale cum Chinwewencha! ')
      cy.get('.factory_selector_form_input')
        .then(function ($input) {
          $input[0].setAttribute('value', 'Fábrica chota')
        })
        .should('have.attr', 'value', 'Fábrica chota')

      cy.get('.factory_selector_form_input')
        .then(function ($input) {
          $input[1].setAttribute('value', 3)
        })
        .should('have.attr', 'value', 3)

      cy.get(".factory_selector_form_button").click({force: true})
*/
        // Ganancias
        // cy.get(".incomes-container")
        // cy.get(".incomes")

        // Toolbox

        // cy.get(".toolbox-container")

        // Maquinas
        // cy.get(".title")
        // cy.get(".toolbox-board")
        // cy.get(".starter")
        // cy.get(".seller")
        // cy.get(".furnase")
        // cy.get(".crafter")
        // cy.get(".transporter")

        // Acciones
        // cy.get(".title")
        // cy.get(".toolbox-board")
        // cy.get(".remove")
        // cy.get(".move")
        // cy.get(".rotate")

        // Factory
        // cy.get(".factory")
        // cy.get(".factory_item")
        // cy.get(".factory_item")
        // cy.get(".factory_item")
        // cy.get(".factory_item")
      })
    })
  })
})
