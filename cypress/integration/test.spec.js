describe('Test e2e', () => {
    before(() => {
        cy.visit('../../public/index.html')
    })

    it('je peux remplir le champ texte', () => {
        cy.get('#recherche').type('coucou').should('have.value','coucou')
    })
    
    it('je peux obtenir le resultat', () => {
        cy.get('button').click()
        cy.get('#cible').contains('COUCOU')
    })
})
