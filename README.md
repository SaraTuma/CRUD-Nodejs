# CRUD-MysqlNodejs

Pre-requisitos que devem estar instalados:
1. NodeJs
2. Git

Ferramentas utilizadas
1. Visual Studio Code
2. Postman

Antes de iniciar o CRUD

Antes de partirmos para o código, farei uma breve introdução para que você entenda o que é Node JS, para que serve e como funciona.

O que é NODE JS?

Muitos acreditam que Node JS é uma linguagem de programação, acontece que, geralmente, é referida como linguagem. No entanto, Node JS é uma plataforma para back-end que aceita código JavaScript. Isto é, Node JS é uma maneira de usar JavaScript no back-end.

Fato curioso sobre Node JS: ele foi construído em cima da V8, que é o Engine, ou seja, o motor  por trás do Google Chrome. Isso torna o Node JS muito rápido, além de permitir que você reutilize todo conhecimento de JavaScript (adquirido para front-end) também no back-end.

O que é NODE JS?

Muitos acreditam que Node JS é uma linguagem de programação, acontece que, geralmente, é referida como linguagem. No entanto, Node JS é uma plataforma para back-end que aceita código JavaScript. Isto é, Node JS é uma maneira de usar JavaScript no back-end.

Fato curioso sobre Node JS: ele foi construído em cima da V8, que é o Engine, ou seja, o motor  por trás do Google Chrome. Isso torna o Node JS muito rápido, além de permitir que você reutilize todo conhecimento de JavaScript (adquirido para front-end) também no back-end.

API REST

Os benefícios deste modelo de API REST é que podemos servir múltiplos clientes com o mesmo back-end, ou seja, um único código fornecido para Web Mobile ou até mesmo uma API pública.

É importante entender o fluxo de requisição e resposta, não vou entrar em detalhes, mas basicamente acontece nesta sequência:

  1. Requisição é feita por um cliente;
  2. Resposta retornada através de uma estrutura de dados (ex: JSON);
  3. Cliente recebe a resposta e processa o resultado.

Estas respostas utilizam métodos HTTP, que são:

    GET  http://localhost:3000/users ➔ Buscar alguma informação no back-end
    POST  http://localhost:3000/users ➔ Criar alguma informação no back-end
    PUT  http://localhost:3000/users/1 ➔ Editar alguma informação no back-end
    DELETE  http://localhost:3000/users/1 ➔ Deletar alguma informação no back-end

Negrito ➔ Método HTTP
Itálico ➔ Recurso/Rota
Número ➔ Parâmetro

É importante também que você entenda sobre HTTP codes, que são os códigos HTTPs retornados de uma requisição, vejamos alguns exemplos mais comuns:

  *  1xx: HTTP codes iniciados em 1 são informativos:
  *  102: PROCESSING.

  *  2xx: HTTP codes iniciados com 2 são de sucesso:
  *  200: SUCCESS;
    201: CREATED.

    3xx: HTTP codes iniciados em 3 são de redirecionamento:
    301: MOVED PERMANENTLY;
    302: MOVED.

    4xx: HTTP codes iniciados em 4 são de erros do cliente:
    400: BAD REQUEST;
    401: UNAUTHORIZED;
    404: NOT FOUND.

    5xx: HTTP codes iniciados em 5 são erros do servidor:
    500: INTERNAL SERVER ERROR.

Vamos entender melhor sobre estes métodos, recursos/rotas e parâmetros na prática.

Benefícios de API REST

Os benefícios deste modelo de API REST é que podemos servir múltiplos clientes com o mesmo back-end, ou seja, um único código fornecido para Web Mobile ou até mesmo uma API pública.

Agora sim, até aqui você já sabe o mínimo necessário para começar a criar sua primeira API REST com CRUD em Node JS, então vamos para o código!

Crie uma pasta, e entre nela, abra seu terminal e execute:
<code>
> code .
</code>
Ou simplesmente abra essa pasta no VS code.

<code>
> npm init
</code>
Este comando simplesmente cria um arquivo chamado package.json.
Agora com o arquivo package.json aberto no seu VScode, você terá algo parecido com isso:
<code>
{
"name": "nodegeek",
"version": "1.0.0",
"main": "index.js",
"license": "MIT"
}
</code>
Neste arquivo ficará armazenado a referência de todas as dependências que você instalar via NPM ou Yarn.

<code>
npm init
npm install express
</code>

Agora crie um arquivo e nomeie de index.js, este arquivo conterá todo nosso código (coloquei comentarios no arquivopara facilitar o entendimento).

Para executar a aplicacao e so digitar:
<code>
node index.js
</code>
Isso iniciará o servidor na porta 3000 do seu localhost.
Perceba que o terminal ficará executando sem retornar nada, então abra seu navegador, pode ser o Google e acesse: http://localhost:3000 ou http://localhost:3000/teste .
Note que navegador fica carregando, porém não retorna nada, então volte ao seu terminal e perceba que o terminal respondeu ‘teste’ conforme solicitado no console.log(‘teste’);  que colocamos dentro da função.

Adicionar os parâmetros

Agora vamos adicionar dois parâmetros na nossa função, dessa forma:
<code>
server.get('/teste, (req, res) => {
console.log('teste');
})
</code>
req ➔ representa todos os dados da requisição.

res ➔ todas as informações necessárias para informar uma resposta para o front-end.

Então vamos testar, exclua o console.log(‘teste’); e adicione return res.json( { message: ‘Hello world’  } );
Agora ja podemos instalar o nodemon, execute o comando :
<code>npm install nodemon -D</code>
nodemon reiniciará sozinho o servidor toda vez que você salvar o código

Agora vamos criar o CRUD
1. Crud sobre um Array "produtos"
1. Devemos criar as rotas para o crud, que sao bem simples:
    GET - http://localhost:3000/produtos ➔ Mostrar produtos do array
    POST - http://localhost:3000/criar ➔ Criar/adicionar produto
    PUT - http://localhost:3000/actualizar/2 ➔ Editar produto
    DELETE - http://localhost:3000/produtos/1 ➔ Deletar produto
3. Implementar as funcionalidades para manipular um array em Javascript

Manipulando dados do Array com Nodejs, Usei o postman para testar as rotas.

Middlewares

Os middlewares são basicamente uma função que recebe os parâmetros, req, res, entre outros, e executa uma função na aplicação, manipulando os dados da requisição de alguma forma.
Middlewares locais

Agora, com middlewares LOCAIS é um pouco diferente. Digamos que queremos criar dois middlewares, um para checar se um index já existe no array, e outro para checar se a propriedade name foi passada corretamente.

Exemplo de MIDDLEWARE criado:
<code>
function VerificarProdutoExiste(req, res, next) {
  if (!req.body.name) {
  return res.status(400).json({ error: 'Produto name is required' });
  // middleware local que irá checar se a propriedade name foi informada corretamente,
  // caso negativo, irá retornar um erro 400 – BAD REQUEST
  }
  return next(); // se o nome for informado corretamente, a função next() chama as próximas ações
}
</code>

SE chegou ate aqui, o meu MUITO OBRIGADA!
E volte sempre!...

