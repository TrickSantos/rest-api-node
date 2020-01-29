const {Schema, model} = require('mongoose')

const CarrinhoSchema = new Schema({
    nome:{
        type: String,
        required: true
    },
    ativo:{
        type: Boolean,
        required:true,
        default: true
    },
    estoque:[{
        type: Schema.Types.ObjectId,
        ref: 'Produto'
    }]
},{
    timestamps:true
})
module.exports = model("Carrinho", CarrinhoSchema)