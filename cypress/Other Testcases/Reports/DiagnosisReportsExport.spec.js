describe('Reports', function()
{
    it('login', function()
    {
       cy.login()
    })

    it('Diagnosis Reports', function()
    {
        cy.get('[ng-href="/reports/appointments"] > .NavSidebar__menu-option-label').click()
        cy.contains('Diagnosis').click()
        cy.get('.icon-download-alt').click()
    
    })


})