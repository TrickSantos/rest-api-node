const express = require('express')
const UsuarioController = require('./Controller/UsuarioController')
const CarrinhoController = require('./Controller/CarrinhoController')
const CaixaController = require('./Controller/CaixaController')

const routes = express.Router()

routes.get('/usuario', UsuarioController.index)
routes.get('/usuario/:id', UsuarioController.show)
routes.post('/usuario', UsuarioController.store)
routes.put('/usuario/:id', UsuarioController.editar)
routes.post('/login', UsuarioController.login)

routes.get('/carrinho', CarrinhoController.index)
routes.get('/carrinho/:id', CarrinhoController.show)
routes.post('/carrinho', CarrinhoController.store)
routes.put('/carrinho/:id', CarrinhoController.editar)

routes.post('/comprar', CaixaController.store)
routes.get('/caixa', CaixaController.index)
routes.post('/fatura/:id', CaixaController.show)

module.exports = routes