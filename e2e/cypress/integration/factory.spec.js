function signIn () {
  // Sign in
  cy.get('input').type('Chinwewencha')
  cy.get('.sign_in_form_button').click()
}

describe('Factory', () => {
  describe('Una vez cargada la pagina', () => {
    beforeEach('Cargar la pagina', () => {
      cy.visit('http://localhost:3000')
    })

    it('debe mostrar los elementos de la pagina', () => {
      // Sign in
      cy.get('.sign_in_container')
      cy.get('.sign_in_form')
      cy.get('input')
        .type('Chinwewencha')
        .should('have.attr', 'value', 'Chinwewencha')
      cy.get('.sign_in_form_button')
        .should('be.visible')
        .click()
    })

    describe('Al completar el usuario y tocar Sign in', () => {
      beforeEach(() => {
        signIn()
      })
      it('debe mostrar los elementos de saludo al usuario logueado y elementos de creación de fábrico', () => {
        cy.get('.factory_selector_container').wait(100)
        cy.get('.factory_selector_form')
          .find('h1')
          .contains('Whale cum Chinwewencha! ')
        cy.get('.factory_selector_form_input')
      })
    })
    describe('Al completar los datos de creación de fábrica y tocar Create Factory', () => {
      beforeEach(() => {
        signIn()
      })

      it('debe mostrar los elementos de la factory, toolbox, ganancias', () => {
        cy.get('.factory_selector_form')
          .find('h1')
          .contains('Whale cum Chinwewencha! ')
        cy.get('.factory_selector_form_input')
          .first()
          .type('Fábrica')
          .should('have.attr', 'value', 'Fábrica')

        cy.get('.factory_selector_form_input')
          .last()
          .clear()
          .type(3)
          .wait(100)
          .should('have.value', '3')

        cy.get('.factory_selector_form_button')
          .click()
          .wait(100)

        // Ganancias
        cy.get('.incomes')
          .wait(100)
          .should('be.visible')
        // Toolbox
        cy.get('.toolbox-container').should('be.visible')
        cy.get('.toolbox-board')
          .first()
          .should('be.visible')
        cy.get('.toolbox-board')
          .last()
          .should('be.visible')
        // Factory
        cy.get('.factory').should('be.visible')
      })
    })
    describe('Con un usuario con fabricas creadas', () => {
      const createFactory = name => {
        cy.get('.factory_selector_container').wait(100)
        cy.get('.factory_selector_form_input')
          .first()
          .type(name)
        cy.get('.factory_selector_form_input')
          .last()
          .clear()
          .type('3')
          .wait(100)
        cy.get('.factory_selector_form_button')
          .click()
          .wait(100)
      }
      beforeEach(() => {
        cy.request('DELETE', '/api/factories')
        signIn()
        createFactory('uno')
        cy.visit('http://localhost:3000')

        signIn()
        createFactory('dos')
        cy.visit('http://localhost:3000')

        signIn()
        createFactory('tres')
        cy.visit('http://localhost:3000')
      })
      it('al hacer click en una vemos la fabrica', () => {
        signIn()
        cy.get('.factory_selector_item_button')
          .first()
          .should('be.visible')
          .click()

        // Ganancias
        cy.get('.incomes')
          .wait(100)
          .should('be.visible')
        // Toolbox
        cy.get('.toolbox-container').should('be.visible')
        cy.get('.toolbox-board')
          .first()
          .should('be.visible')
        cy.get('.toolbox-board')
          .last()
          .should('be.visible')
        // Factory
        cy.get('.factory').should('be.visible')
      })
      describe('y una vacía seleccionada', () => {
        beforeEach(() => {
          signIn()
          cy.get('.factory_selector_item_button')
            .first()
            .should('be.visible')
            .click()
        })
        it('al hacer click en un starter y luego en el tablero (0,0) debe verse un starter en en ese cuadrado del tablero', () => {
          cy.get('.factory_item div.starter').should('not.exist')
          cy.get('.starter')
            .wait(100)
            .should('be.visible')
            .click()

          cy.get('.none_machine')
            .first()
            .click()

          cy.get('.factory_item div.starter').should('be.visible')
        })
      })
      describe('y una vacía seleccionada y un starter en (0,0)', () => {
        beforeEach(() => {
          signIn()
          cy.get('.factory_selector_item_button')
            .first()
            .should('be.visible')
            .click()

          cy.get('.factory_item div.starter').should('not.exist')
          cy.get('.starter')
            .wait(100)
            .should('be.visible')
            .click()

          cy.get('.none_machine')
            .first()
            .click()

          cy.get('.factory_item div.starter').should('be.visible')
        })
        it('al hacer click en un seller y luego en el tablero (0,1) debe verse un starter y un seller en el tablero', () => {
          cy.get('.factory_item div.seller').should('not.exist')
          cy.get('.seller')
            .wait(100)
            .should('be.visible')
            .click()
          cy.get('.none_machine')
            .eq(2)
            .click()
          cy.get('.factory_item div.seller').should('be.visible')
        })
        describe('y un seller en (0,1)', () => {
          it('al hacer click en en el starter, seleccionar el primer elemento de la lista y esperar un tick, las ganancias crecen', () => {
            cy.get('.seller')
              .wait(100)
              .should('be.visible')
              .click()
            cy.get('.none_machine')
              .eq(2)
              .click()

            cy.get('.factory_item div.starter img').should(
              'have.attr',
              'src',
              'icons/starter.svg'
            )
            cy.get('.factory_item div.seller img').should(
              'have.attr',
              'src',
              'icons/seller.svg'
            )
            cy.get('.incomes')
              .wait(100)
              .should('have.text', '$0')

            cy.get('.factory_item div.starter')
              .should('be.visible')
              .click()
              .wait(100)
            cy.get('.raw-material-selector-item')
              .first()
              .should('be.visible')
              .click()

            cy.get('.factory_item div.starter img')
              .wait(100)
              .should('have.attr', 'src', 'icons/starter_active.svg')
              .wait(1000)

            cy.get('.factory_item div.seller img').should(
              'have.attr',
              'src',
              'icons/seller_active.svg'
            )

            cy.get('.incomes')
              .wait(5000)
              .should('have.text', '$50')
          })
        })
      })
    })
  })
})
