const axios = require('axios')
const Carrinho = require('../model/carrinho')

module.exports = {
    async index(req, res) {

        const carrinhos = await Carrinho.find()

        console.log(carrinhos);

        return res.json(carrinhos)
    },
    async store(req, res) {
        const {nome} = req.body
        const carrinhoReq = req.body

        const carrinhoExistente = await Carrinho.findOne({nome})

        if (carrinhoExistente) {
            console.log("Carrinho já existe!");

            return res.status(400).json("Carrinho já Existente!")
        } else {
            const car = await Carrinho.create(carrinhoReq)

            return res.status(200).json("Cadastrado com Sucesso!")
        }
    },
    async editar(req, res) {
        const carrinho = await Carrinho.findById(req.params.id)

        carrinho.set(req.body)

        const carrinhoAtualizado = await carrinho.save()

        console.log(carrinhoAtualizado);

        return res.json(carrinhoAtualizado)
    },
    async show(req, res) {
        const carrinho = await Carrinho.findById(req.params.id)

        return res.json(carrinho)
    }
}