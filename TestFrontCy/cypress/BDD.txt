//Cadastro 
Funcionalidade : Cadastro
Como um usuario do sistema
Fulano quer criar um conta no ServerRest
Para que ele tenha uma conta

Contexto
Dado que Fulano não tem uma conta no sistema

//Positivo
Cenário: cadastro válido
E ele acessa a página de cadastro
E ele preenche suas informações (nome, email, senha)
Quando ele aciona a opção Cadastrar
Então ele deve sair com uma mensagem de Cadastro com sucesso e entrar na página de pesquisar produtos

//Negativo
Cenário: cadastro invalido, email ja cadastrado
E ele acessa a página de cadastro
E ele preenche suas informações (nome, email, senha)
Quando ele aciona a opção Cadastrar
Então ele deve sair com uma mensagem de email ja cadastrado



//Login
Funcionalidade : Login
Como um usuario do sistema
Fulano quer completar o login
Para entrar na pagina de pesquisar produtos

Contexto
Dado que Fulano tem uma conta no sistema

//Positivo
Cenário: login válido
E ele acessa a página de login
E ele preenche suas informações (email, senha)
Quando ele aciona a opção Entrar
Então ele deve entrar na página de pesquisar produtos

//Negativo
Cenário: login invalido, informaçoes invalidas
E ele acessa a página de login
E ele preenche suas informações (email, senha)
Quando ele aciona a opção Entrar
Então ele deve sair com a mensagem de email/senha invalidos