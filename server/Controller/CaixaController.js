const Caixa = require('../model/caixa')

module.exports = {
    async index(req, res) {
        try {
            const compras = await Caixa.find()
    
            return res.status(200).send(compras)            
        } catch (error) {
            return res.status(500).send(error)
        }
    },
    async store(req, res) {
        try {
            const compra = await Caixa.create(req.body)
        
            return res.status(200).send(compra)
            
        } catch (error) {
            return res.status(500).send(error)
        }
    },
    async show(req, res) {
        try {
            const compra = await Caixa.findById(req.params.id)
    
            return res.status.send(compra)            
        } catch (error) {
            return res.status(500).send(error)
        }
    }
}