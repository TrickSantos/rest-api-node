const Carrinho = require('../model/carrinho')

module.exports = {
    async index(req, res) {

        const carrinhos = await Carrinho.find()

        return res.json(carrinhos)
    },
    async store(req, res) {
        try {
            const {nome} = req.body
            const carrinhoReq = req.body
    
            const carrinhoExistente = await Carrinho.findOne({nome})
    
            if (carrinhoExistente) {
                return res.json(carrinhoExistente)
            } else {
                const car = await Carrinho.create(carrinhoReq)
    
                return res.status(200).send(car)
            }            
        } catch (error) {
            res.status(500).send(error)
        }
    },
    async editar(req, res) {
        const carrinho = await Carrinho.findById(req.params.id)

        carrinho.set(req.body)

        const carrinhoAtualizado = await carrinho.save()

        return res.json(carrinhoAtualizado)
    },
    async show(req, res) {
        const carrinho = await Carrinho.findById(req.params.id)

        return res.json(carrinho)
    }
}