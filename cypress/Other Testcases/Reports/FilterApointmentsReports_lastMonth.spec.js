describe('Reports', function()
{
    it('login', function()
    {
       cy.login()
    })

    it('Appointment Reports FilterLastMonth', function()
    {
        cy.get('[ng-href="/reports/appointments"] > .NavSidebar__menu-option-label').click()
        cy.get('.FilterDaterange').click()
        cy.get('[data-range-key="Last Month"]').click()
    
    })


})