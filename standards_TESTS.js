/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('TEST STANDARS', () => {
  beforeEach(() => {
 
    cy.visit('https://standards.myworksheetmaker.com/')
    cy.viewport(1250,1100) //para poner la resolucion 
  })

  it('SMOKE TEST ', () => {


    cy.get('.text-5xl').contains('Find Common Core standards for any lesson, unit, or curriculum plan.')
    cy.get('.text-2xl').contains('Click on any subject below to get started')
    cy.get('#headlessui-disclosure-button-1 > .text-base').contains('Click on any subject below to get started')


  
  
  
  })
  
  it('FIELD', () => {



    cy.get('#headlessui-disclosure-button-1 > .text-base').click()
    cy.get('#headlessui-disclosure-button-3 > .mr-6').click()



    //enlgish / Language Arts Part 

    cy.get('#headlessui-disclosure-button-5').click()
    cy.get('#headlessui-disclosure-button-49').should('be.visible')
    cy.get('#headlessui-disclosure-button-7 > .text-base').click()
    cy.get('#headlessui-disclosure-panel-2 > :nth-child(1) > :nth-child(1)').should('be.visible')
    cy.get('#headlessui-disclosure-button-61').should('be.visible')
    cy.get('#headlessui-disclosure-panel-2 > :nth-child(1) > :nth-child(2)').should('be.visible')
    cy.get('#headlessui-disclosure-button-9 > .text-base').click()
    cy.get('#headlessui-disclosure-button-73').should('be.visible')
    cy.get('#headlessui-disclosure-panel-2 > :nth-child(1) > :nth-child(3)').should('be.visible')
    cy.get('#headlessui-disclosure-button-11 > .text-base').click()
    cy.get('#headlessui-disclosure-button-85').should('be.visible')
    cy.get('#headlessui-disclosure-panel-2 > :nth-child(1) > :nth-child(4)').should('be.visible')
    cy.get('#headlessui-disclosure-button-13 > .text-base').click()
    cy.get('#headlessui-disclosure-button-97').should('be.visible')
    cy.get('#headlessui-disclosure-panel-2 > :nth-child(1) > :nth-child(5)').should('be.visible')

    cy.get('#headlessui-disclosure-button-15 > .text-base').click()
    cy.get('#headlessui-disclosure-button-109').should('be.visible')
    cy.get('#headlessui-disclosure-panel-2 > :nth-child(1) > :nth-child(6)').should('be.visible')
    cy.get('#headlessui-disclosure-button-17 > .text-base').click()
    cy.get('#headlessui-disclosure-button-121').should('be.visible')
    cy.get('#headlessui-disclosure-panel-2 > :nth-child(1) > :nth-child(7)').should('be.visible')


    cy.get('#headlessui-disclosure-button-19 > .text-base').click()
    cy.get('#headlessui-disclosure-button-127').should('be.visible')
    cy.get('#headlessui-disclosure-panel-2 > :nth-child(1) > :nth-child(8)').should('be.visible')
    cy.get('#headlessui-disclosure-button-21 > .text-base').click()
    cy.get('#headlessui-disclosure-button-139').should('be.visible')
    cy.get('#headlessui-disclosure-panel-2 > :nth-child(1) > :nth-child(9)').should('be.visible')

    cy.get('#headlessui-disclosure-button-23 > .text-base').click()
    cy.get('#headlessui-disclosure-button-151').should('be.visible')
    cy.get('#headlessui-disclosure-panel-2 > :nth-child(1) > :nth-child(10)').should('be.visible')

    cy.get('#headlessui-disclosure-button-25 > .text-base').click()
    cy.get('#headlessui-disclosure-button-163').should('be.visible')
    cy.get('#headlessui-disclosure-panel-2 > :nth-child(1) > :nth-child(11)').should('be.visible')

    cy.get('#headlessui-disclosure-button-27 > .text-base').click()
    cy.get('#headlessui-disclosure-button-179').should('be.visible')
    cy.get('#headlessui-disclosure-panel-2 > :nth-child(1) > :nth-child(12)').should('be.visible')



    //Matematics

    cy.get('#headlessui-disclosure-button-29 > .text-base').click()
    cy.get('#headlessui-disclosure-button-195').should('be.visible')
    cy.get('#headlessui-disclosure-panel-4 > :nth-child(1) > :nth-child(1)').should('be.visible')
    cy.get('#headlessui-disclosure-button-31 > .text-base').click()
    cy.get('#headlessui-disclosure-button-205').should('be.visible')
    cy.get('#headlessui-disclosure-panel-4 > :nth-child(1) > :nth-child(2)').should('be.visible')
    cy.get('#headlessui-disclosure-button-33 > .text-base').click()
    cy.get('#headlessui-disclosure-button-207').should('be.visible')
    cy.get('#headlessui-disclosure-panel-4 > :nth-child(1) > :nth-child(3)').should('be.visible')
    cy.get('#headlessui-disclosure-button-35 > .text-base').click()
    cy.get('#headlessui-disclosure-button-209').should('be.visible')
    cy.get('#headlessui-disclosure-panel-4 > :nth-child(1) > :nth-child(4)').should('be.visible')
    cy.get('#headlessui-disclosure-button-37 > .text-base').click()
    cy.get('#headlessui-disclosure-button-211').should('be.visible')
    cy.get('#headlessui-disclosure-panel-4 > :nth-child(1) > :nth-child(5)').should('be.visible')
    cy.get('#headlessui-disclosure-button-39 > .text-base').click()
    cy.get('#headlessui-disclosure-button-213').should('be.visible')
    cy.get('#headlessui-disclosure-panel-4 > :nth-child(1) > :nth-child(6)').should('be.visible')
    cy.get('#headlessui-disclosure-button-41 > .text-base').click()
    cy.get('#headlessui-disclosure-button-215').should('be.visible')
    cy.get('#headlessui-disclosure-panel-4 > :nth-child(1) > :nth-child(7)').should('be.visible')
    cy.get('#headlessui-disclosure-button-43 > .text-base').click()
    cy.get('#headlessui-disclosure-button-217').should('be.visible')
    cy.get('#headlessui-disclosure-panel-4 > :nth-child(1) > :nth-child(8)').should('be.visible')
    cy.get('#headlessui-disclosure-button-45 > .text-base').click()
    cy.get('#headlessui-disclosure-button-219').should('be.visible')
    cy.get('#headlessui-disclosure-panel-4 > :nth-child(1) > :nth-child(9)').should('be.visible')
    cy.get('#headlessui-disclosure-button-47 > .text-base').click()
    cy.get('#headlessui-disclosure-button-221').should('be.visible')
    cy.get('#headlessui-disclosure-panel-4 > :nth-child(1) > :nth-child(10)').should('be.visible')



    //EJEMPLO PARA COMPARAR TEXTO 
    

    cy.get('#headlessui-disclosure-button-49 > .text-base').click()

    cy.get('#headlessui-disclosure-button-223 > .text-base').click()


    cy.get('#headlessui-disclosure-button-61 > .text-base').click()
    cy.get('#headlessui-disclosure-button-225').click()


    cy.get('#headlessui-disclosure-button-73').click()
    cy.get('#headlessui-disclosure-button-227').click()

    cy.get('#headlessui-disclosure-button-85').click()
    cy.get('#headlessui-disclosure-button-229').click()
    
    cy.get('#headlessui-disclosure-button-97').click()
    cy.get('#headlessui-disclosure-button-231').click()
    

    cy.get('#headlessui-disclosure-button-109').click()
    cy.get('#headlessui-disclosure-button-233').click()


    cy.get('#headlessui-disclosure-button-121 > .text-base').click()
    cy.get('#headlessui-disclosure-button-235').click()
    
    cy.get('#headlessui-disclosure-button-127 > .text-base').click()
    cy.get('#headlessui-disclosure-button-237').click()

    cy.get('#headlessui-disclosure-button-139 > .text-base').click()
    cy.get('#headlessui-disclosure-button-239').click()
    
    cy.get('#headlessui-disclosure-button-151').click()
    cy.get('#headlessui-disclosure-button-241').click()

    cy.get('#headlessui-disclosure-button-163 > .text-base').click()
    cy.get('#headlessui-disclosure-button-243').click()

    cy.get('#headlessui-disclosure-button-179').click()
    cy.get('#headlessui-disclosure-button-245').click()






    //MATES 


    cy.get('#headlessui-disclosure-button-195').click()
    cy.get('#headlessui-disclosure-button-247 > .text-base').click()

    cy.get('#headlessui-disclosure-button-205').click()
    cy.get('#headlessui-disclosure-button-253').click()

    cy.get('#headlessui-disclosure-button-207').click()
    cy.get('#headlessui-disclosure-button-255').click()

    cy.get('#headlessui-disclosure-button-209').click()
    cy.get('#headlessui-disclosure-button-257').click()   

    cy.get('#headlessui-disclosure-button-211').click()
    cy.get('#headlessui-disclosure-button-259').click()


    cy.get('#headlessui-disclosure-button-213').click()
    cy.get('#headlessui-disclosure-button-261').click()

    cy.get('#headlessui-disclosure-button-215').click()
    cy.get('#headlessui-disclosure-button-263').click()
    
    cy.get('#headlessui-disclosure-button-217').click()
    cy.get('#headlessui-disclosure-button-265').click()


    cy.get('#headlessui-disclosure-button-219').click()
    cy.get('#headlessui-disclosure-button-267').click()

    cy.get('#headlessui-disclosure-button-221').click()
    cy.get('#headlessui-disclosure-button-269').click()
    //cy.get('.active > .custom > h4').should('have.text', 'Find Common Core standards for any lesson, unit, or curriculum plan.')
    //otro ejemplo es con contains
    //cy.get('.active > .custom > h4').contains('Find Common Core standards for any lesson, unit, or curriculum plan.')
  
  




    /// test clicking standars  PART 5

    //cy.get('#headlessui-disclosure-panel-224 > .space-y-5 > :nth-child(2) > .ml-3 > .font-bold').click()
    cy.get('#headlessui-disclosure-panel-224 > .space-y-5 > :nth-child(1) > .ml-3 > .font-bold').contains('ELA.K.L.1')
    cy.get('#headlessui-disclosure-panel-224 > .space-y-5 > :nth-child(1) > .ml-3 > .font-bold').click()
    
    cy.get('#headlessui-disclosure-panel-224 > .space-y-5 > :nth-child(2) > .ml-3 > .font-bold').contains('ELA.K.L.1.a')
    cy.get('#headlessui-disclosure-panel-224 > .space-y-5 > :nth-child(2) > .ml-3 > .font-bold').click()

    cy.get('#headlessui-disclosure-panel-224 > .space-y-5 > :nth-child(3) > .ml-3 > .font-bold').contains('ELA.K.L.1.b')
    cy.get('#headlessui-disclosure-panel-224 > .space-y-5 > :nth-child(3) > .ml-3 > .font-bold').click()

    cy.get('#headlessui-disclosure-panel-224 > .space-y-5 > :nth-child(4) > .ml-3 > .font-bold').contains('ELA.K.L.1.c')
    cy.get('#headlessui-disclosure-panel-224 > .space-y-5 > :nth-child(4) > .ml-3 > .font-bold').click()


    cy.get('.-my-5 > :nth-child(1)').contains('ELA.K.L.1')
    cy.get('.-my-5 > :nth-child(2)').contains('ELA.K.L.1.a')
    cy.get('.-my-5 > :nth-child(3)').contains('ELA.K.L.1.b')
    cy.get('.-my-5 > :nth-child(4)').contains('ELA.K.L.1.c')





    /////PART 6 UNCHEKING TEXT BOXES 



    cy.get('#headlessui-disclosure-panel-224 > .space-y-5 > :nth-child(1) > .ml-3 > .font-bold').click()
    cy.get('#headlessui-disclosure-panel-224 > .space-y-5 > :nth-child(2) > .ml-3 > .font-bold').click()
    cy.get('#headlessui-disclosure-panel-224 > .space-y-5 > :nth-child(3) > .ml-3 > .font-bold').click()
    cy.get('#headlessui-disclosure-panel-224 > .space-y-5 > :nth-child(4) > .ml-3 > .font-bold').click()


    cy.get('.-my-5 > :nth-child(1)').should('not.be.visible');
    cy.get('.-my-5 > :nth-child(2)').should('not.be.visible');
    cy.get('.-my-5 > :nth-child(3)').should('not.be.visible');
    cy.get('.-my-5 > :nth-child(4)').should('not.be.visible');

    // BUG FOUND 
  
  })









})












