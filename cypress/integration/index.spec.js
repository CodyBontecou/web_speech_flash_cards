context('Testing UI and UX of the homepage', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:8080/')
    })

    it('click the button', () => {
        cy.get('[data-cy=begin_button]').click()
    })
});