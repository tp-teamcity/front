describe('Test e2e', () => {
    before(() => {
        cy.visit('/')
    })

    it('je peux remplir le champ texte', () => {
        cy.get('#recherche').type('coucou').should('have.value','coucou')
    })

    it('je peux envoyer le contenu du champ texte', () => {
        cy.get('button').click()
    })

    it('je peux obtenir le resultat', () => {
        cy.get('#cible').contains('coucou')
    })
})