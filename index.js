// importa o express
const express = require('express');
// cria uma variável chamada server que chama a função express
const server = express();
// faz com que o express entenda JSON
server.use(express.json());
// As informações ficaram armazenadas dentro deste array []
const produtos = []; 
// faz com que o servidor seja executado na porta 3000 do seu localhost:3000
server.listen(3000); 
 // Cria a rota /teste com o método GET, o console.log retornará no terminal ‘teste’ caso tenha executado com sucesso.
server.get('/teste', () => {
  console.log('teste');
  return res.json( { message: 'TESTE' , dados: produtos } );
})

// As rotas do CRUD

server.get('/produtos', (req, res) => {
  return res.json( { message: 'Sucess!' , dados: produtos } );
})

server.get('/produtos/:index', VerificarProdutoNoArray, (req, res) => {
  return res.json( { message: 'Sucess!' , dados: produtos[req.params.index] });
})

server.post('/criar', VerificarProdutoExiste, (req, res) => {
  produtos.push(req.body.name);
  return res.status(201).json( { message: 'Sucess' , dados: produtos } );
})

server.put('/actualizar/:index', VerificarProdutoExiste, VerificarProdutoNoArray, (req, res) => {
  let index = req.params.index;
  produtos[index] = req.body.name;
  return res.json( { message: 'Sucesso!', dados :  produtos[index] } );
})

server.delete('/eliminar/:index', VerificarProdutoNoArray, (req, res) => {
  produtos.splice(req.params.index, 1);
  res.json( { message: 'Eliminado com sucesso!', dados :  produtos } );
})

//Middlewares para verificacao dos dados recebidos na requisicao!

function VerificarProdutoExiste(req, res, next) {
  if (!req.body.name) {
  return res.status(400).json({ error: 'Produto name is required' });
  // middleware local que irá checar se a propriedade name foi informada corretamente,
  // caso negativo, irá retornar um erro 400 – BAD REQUEST
  }
  return next(); // se o nome for informado corretamente, a função next() chama as próximas ações
}

function VerificarProdutoNoArray(req, res, next) {
  const index = req.params.index;
  if (index >= produtos.length || index < 0) {
  return res.status(404).json({ error: 'Produto nao existe, indice invalido!' , dados: index});
  } // checa se o Produto existe no array, caso negativo informa que o index não existe no array  
  return next();
}