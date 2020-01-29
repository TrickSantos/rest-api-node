const Carrinho = require('../model/carrinho')
const Produto = require('../model/produto')

module.exports = {
    async index(req, res) {
        try {
            const carrinho = await Carrinho.findById(req.params.carrinhoId)
            const arr = carrinho.estoque

            const estoque = await Produto.find({_id:arr})
            
            return res.status(200).send(estoque)
        } catch (error) {
            return res.send(error)
        }        
    },
    async store(req, res) {
        
        try {
            const produto = await Produto.create(req.body)
            const carrinhoId = req.params.carrinhoId
            const carrinho = await Carrinho.findById(carrinhoId)

            carrinho.estoque.push(produto._id)
            carrinho.save()

            res.status(200).send(carrinho)

        } catch (error) {
            res.status(500).send(error)
        }
    },
    async editar(req, res) {
        try {
            const produto = await Produto.findOneAndUpdate({_id:req.params.id}, req.body)
    
            return res.status(200).send(produto)
            
        } catch (error) {
            res.status(500).send(error)
        }
    }
}