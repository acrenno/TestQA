describe('funcionalidades de cadastro', () => {

  beforeEach(() => {
    // 1. Executar o navegador
    cy.visit('https://front.serverest.dev/ ');
  });


  it('fazer cadastro e ter sucesso', () => { 
    // 3. Validar que a página inicial carregou com sucesso
    //entrando com o email
    cy.get('[data-testid="cadastrar"]').click();
    if(cy.get('.font-robot').should('have.text', 'Cadastro'))

    //entrando com o nome
    cy.get('[data-testid="nome"]').click()
    cy.get('[data-testid="nome"]').type('Joao')

    //entrando com o email
    cy.get('[data-testid="email"]').click()
    cy.get('[data-testid="email"]').type('joao3906@gmail.com')

    //entrando com a senha
    cy.get('[data-testid="password"]').click()
    cy.get('[data-testid="password"]').type('12345678')

    cy.get('[data-testid="cadastrar"]').click()

    cy.get('.alert > :nth-child(2)').should('have.text', 'Cadastro realizado com sucesso')

   
  });

  it('fazer cadastro e nao ter sucesso, visto que email ja esta cadastrado', () => { 
    // 3. Validar que a página inicial carregou com sucesso
    //entrando com o email
    cy.get('[data-testid="cadastrar"]').click();
    if(cy.get('.font-robot').should('have.text', 'Cadastro'))

    //entrando com o nome
    cy.get('[data-testid="nome"]').click()
    cy.get('[data-testid="nome"]').type('Joao')

    //entrando com o email
    cy.get('[data-testid="email"]').click()
    cy.get('[data-testid="email"]').type('joao@gmail.com')

    //entrando com a senha
    cy.get('[data-testid="password"]').click()
    cy.get('[data-testid="password"]').type('12345678')

    cy.get('[data-testid="cadastrar"]').click()

    cy.get('.alert > :nth-child(2)').should('have.text', 'Este email já está sendo usado')

   
  });

  it('fazer login e conter um erro', () => { 
    //entrando com o email
    cy.get('[data-testid="email"]').click()
    cy.get('[data-testid="email"]').type("annaclararenno@gmail.com")

    //entrando com a senha
    cy.get('[data-testid="senha"]').click()
    cy.get('[data-testid="senha"]').type('354')

    // 7. Clicar no botão “entrar”
    cy.get('[data-testid="entrar"]').click()

    cy.get('.alert > :nth-child(2)').should('have.text', 'Email e/ou senha inválidos')

   
  });

  it('fazer login e entrar com sucesso', () => { 
    //entrando com o email
    cy.get('[data-testid="email"]').click();
    cy.get('[data-testid="email"]').type('joao@gmail.com')

    //entrando com a senha
    cy.get('[data-testid="senha"]').click()
    cy.get('[data-testid="senha"]').type('12345678')

    // 7. Clicar no botão “entrar”
    cy.get('[data-testid="entrar"]').click()
    cy.get('[data-testid="entrar"]').click()

    cy.get('[data-testid="pesquisar"]')

   
  });
});
    