const {Schema, model} = require("mongoose")
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const UsuarioSchema = new Schema({
    nome:{
        type:String,
        require: true
    },
    usuario:{
        type: String,
        require: true,
        unique: true,
        lowercase: true
    },
    senha:{
        type: String,
        require: true,
        minlength: 6
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

UsuarioSchema.pre('save', async function(next){
    const user = this
    if (user.isModified('senha')){
        user.senha = await bcrypt.hash(user.senha, 8)
    }
    next()
})

UsuarioSchema.methods = {
    compareHash(hash){
        return bcrypt.compare(hash, this.senha)
    },
    generateAuthToken(){
        return jwt.sign({_id: this._id}, process.env.JWT_KEY,{expiresIn: "2d"})
    }
}
module.exports = model('Usuario', UsuarioSchema)