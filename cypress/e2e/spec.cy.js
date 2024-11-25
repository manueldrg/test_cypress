describe('template spec', () => {
  it('agregar tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
    cy.get('[data-testid="todo-item-toggle"]').click()
  })
})