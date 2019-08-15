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
    Estoque:[{
        Produto:{
            nome:{
                type: String,
                required: true
            },
            unidade:{
                type: String,
                required: true
            },
            valor:{
                type: Number,
                required: true
            }
        },
        quantidade:{
            type: Number,
            required:true
        }
    }]
},{
    timestamps:true
})
module.exports = model("Carrinho", CarrinhoSchema)