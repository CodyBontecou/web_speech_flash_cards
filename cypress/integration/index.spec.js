context('Testing UI and UX of the homepage', () => {
    before(() => {
        cy.visit('http://127.0.0.1:8080/')
    })

    it('button is clickable', () => {
        cy.get('[data-cy=begin_button]').click();
    })

    it('word appears after button click', () => {
        cy.get('[data-cy=initial_word]').contains('yes');
    })

    it('an additional click does not change the word', () => {
        cy.get('[data-cy=begin_button]').click();
        cy.get('[data-cy=initial_word]').contains('yes');
    })

});