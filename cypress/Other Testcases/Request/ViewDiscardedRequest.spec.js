describe('Reports', function()
{
    beforeEach('login', function()
    {
       cy.login()
    })

    it('View Approved Request', function()
    {
        cy.contains('Requests').click()
        cy.get('.filter-discarded > [data-cy=RadioContentFilter__checkbox] > .RadioContentFilter__item__label').click()

    })


})