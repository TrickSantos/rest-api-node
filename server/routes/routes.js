const express = require('express')
const UsuarioController = require('../Controller/UsuarioController')
const CarrinhoController = require('../Controller/CarrinhoController')
const CaixaController = require('../Controller/CaixaController')
const auth = require('../middleware/auth')

const routes = express.Router()

//routes.use(auth)
routes.get('/usuario',auth, UsuarioController.index)
routes.get('/usuario/:id', auth, UsuarioController.show)
routes.put('/usuario/:id', auth, UsuarioController.editar)

routes.get('/carrinho', auth, CarrinhoController.index)
routes.get('/carrinho/:id', auth, CarrinhoController.show)
routes.post('/carrinho', auth, CarrinhoController.store)
routes.put('/carrinho/:id', auth, CarrinhoController.editar)

routes.post('/comprar', auth, CaixaController.store)
routes.get('/caixa', auth, CaixaController.index)
routes.post('/fatura/:id', auth, CaixaController.show)

module.exports = routes