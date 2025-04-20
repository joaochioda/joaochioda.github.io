describe('Selecionar Pokémon', () => {
  it('Seleciona o Pikachu no select e mostra as informações', () => {
    cy.visit('/v1.html') // ou o link completo do GitHub Pages

    // Aguarda o select ser carregado (importante por causa da API)
    cy.get('#pokemonSelectV1', { timeout: 10000 }).should('exist')

    // Seleciona o Pikachu
    cy.get('#pokemonSelectV1').select('pikachu')

    // Clica no botão de buscar
    cy.contains('Buscar').click()

    // Verifica se o nome, tipo e imagem apareceram
    cy.get('#pokemonInfoV1').should('contain', 'pikachu')
    cy.get('#pokemonInfoV1').find('img').should('be.visible')
  })
})
