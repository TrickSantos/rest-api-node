const {Schema, model} = require("mongoose")

const UsuarioSchema = new Schema({
    nome:{
        type:String,
        require: true
    },
    usuario:{
        type: String,
        require: true
    },
    senha:{
        type: String,
        require: true
    },
    admin:{
        type: Boolean,
        require: true,
        default:true
    },
    carrinho: [{
        type: Schema.Types.ObjectId,
        ref: 'Carrinho'
    }]
},{
    timestamps:true
})
module.exports = model('Usuario', UsuarioSchema)