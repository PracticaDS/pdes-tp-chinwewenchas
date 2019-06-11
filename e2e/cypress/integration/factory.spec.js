describe('Factory', () => {
  beforeEach('Borrar datos', () => {
    // Antes de cada test remueve todos los datos
    // cy.request("DELETE", "http://localhost:3000/api/todos")
  })

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
        .wait(3000)
        .click({ force: true })
      cy.wait(3000)

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

      cy.get(".factory_selector_form_button").click("Sign In")

      cy.wait('.incomes-container')
      .its('status')
      .should('eq', 200)

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
