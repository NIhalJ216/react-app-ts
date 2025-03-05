describe('My First Test', () => {
  it('should display the welcome message', () => {
    cy.visit('/') // Visits the base URL from config
    cy.contains('h1', 'Welcome to Our Website') // Check for the welcome message
  })

  it('should display the landing page description', () => {
    cy.visit('/') // Visits the base URL from config
    cy.contains('p', 'This is the landing page of our awesome application.') // Check for the description
  })

  it('should increment the counter when the increment button is clicked', () => {
    cy.visit('/') // Visits the base URL from config
    cy.get('button').contains('+').click() // Click the increment button
    cy.get('h2').contains('Counter: 1') // Check if the counter is incremented
  })

  it('should decrement the counter when the decrement button is clicked', () => {
    cy.visit('/') // Visits the base URL from config
    cy.get('button').contains('-').click() // Click the decrement button
    cy.get('h2').contains('Counter: -1') // Check if the counter is decremented
  })
})
