const express = require('express')
const UsuarioController = require('../Controller/UsuarioController')

const login = express.Router()

login.post('/login', UsuarioController.login)
login.post('/usuario', UsuarioController.store)

module.exports = login