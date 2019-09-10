const axios = require('axios')
const Usuario = require('../model/usuario')

module.exports = {
    async index(req, res){
        
        const usuarios = await Usuario.find()

        console.log(usuarios);
        
        return res.json(usuarios)
    },
    async store(req, res){
        const {usuario} = req.body
        const usuarioReq = req.body

        const usuarioExistente = await Usuario.findOne({usuario})

        if(usuarioExistente){
            console.log("Usuario já existe!");
            
            return res.json(usuarioExistente)
        }else{
            const user = await Usuario.create(usuarioReq)
            console.log(user);
            
            return res.json(user)
        }
    },
    async editar(req, res){
        const usuario = await Usuario.findById(req.params.id)

        usuario.set(req.body)

        const usuarioAtualizado = await usuario.save()

        console.log(usuarioAtualizado);

        return res.json(usuarioAtualizado)
    },
    async show(req, res){
        const usuario = await Usuario.findById(req.params.id)

        return res.json(usuario)
    },
    async login(req, res){

        const {usuario, senha} = req.body

        const usuarioExistente = await Usuario.findOne({usuario})

        if(usuarioExistente){
            if(senha === usuarioExistente.senha){
                return res.json({
                    "message": "Login Ok!",
                    "status": 1
                })
            }else{
                return res.json({
                    "message": "Senha Incorreta!",
                    "status": 0
                })
            }
        }else{
            return res.json({"message":"Usuario não existente","status":3})
        }
    }
}
