const express = require('express')
const UsuarioController = require('./Controller/UsuarioController')
const CarrinhoController = require('./Controller/CarrinhoController')
const CaixaController = require('./Controller/CaixaController')
const ProdutoController = require('./Controller/ProdutoController')
const auth = require('./middleware/auth')

const routes = express.Router()

//Usuario
routes.get('/usuario', auth, UsuarioController.index)
routes.get('/usuario/:id', auth, UsuarioController.show)
routes.post('/usuario', auth, UsuarioController.store)
routes.put('/usuario/:id', auth, UsuarioController.editar)

//Login
routes.post('/login', UsuarioController.login)

//Carrinho
routes.get('/carrinho', auth, CarrinhoController.index)
routes.get('/carrinho/:id', auth, CarrinhoController.show)
routes.post('/carrinho', auth, CarrinhoController.store)
routes.put('/carrinho/:id', auth, CarrinhoController.editar)

//Estoque
routes.get('/estoque/:carrinhoId', auth, ProdutoController.index)
routes.post('/estoque/:carrinhoId', auth, ProdutoController.store)
routes.put('/estoque/:id', auth, ProdutoController.editar)

routes.post('/comprar', auth, CaixaController.store)
routes.get('/caixa', auth, CaixaController.index)
routes.get('/fatura/:id', auth, CaixaController.show)

module.exports = routes