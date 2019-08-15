const Caixa = require('../model/caixa')

module.exports = {
    async index(req, res) {

        const compras = await Caixa.find()

        console.log(compras);

        return res.json(compras)
    },
    async store(req, res) {

        const compra = await Caixa.create(req.body)

        console.log(compra);

        return res.json(compra)
    },
    async show(req, res) {
        const compra = await Caixa.findById(req.params.id)

        return res.json(compra)
    }
}