const {Schema, model} = require('mongoose')

const CaixaSchema = new Schema({
    usuario:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    carrinho:{
        type: Schema.Types.ObjectId,
        ref: 'Carrinho',
        required: true
    },
    valor:{
        type: Number,
        required: true
    },
    data:{
        type:Date,
        required: true
    },
    formaPagamento:{
        type: Schema.Types.ObjectId,
        ref: 'FormaPagamento',
        required: true
    }
})
module.exports = model('Caixa', CaixaSchema)