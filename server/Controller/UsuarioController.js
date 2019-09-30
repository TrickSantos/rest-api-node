const axios = require('axios')
const Usuario = require('../model/usuario')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

module.exports = {
    async index(req, res){
        
        const usuarios = await Usuario.find()

        console.log(usuarios);
        
        return res.json(usuarios)
    },
    async store(req, res){

        const {usuario} = req.body
        const user = new Usuario(req.body)

        const usuarioExistente = await Usuario.findOne({usuario})

        if(usuarioExistente){            
            return res.status(400).json("Usuario já existe!")
        }else{
            await user.save()
            console.log({user});
            
            return res.json({user})
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
    async login(req, res, next){

        const {usuario, senha} = req.body

        const user = await Usuario.findOne({usuario})

        if(user){
            if(await bcrypt.compare(senha, user.senha)){
                const id = user._id
                user.senha = undefined
                var token = jwt.sign({id}, process.env.JWT_KEY,{expiresIn: "2d"})
                res.header('authorization',token).send(token)
                
            }else{
                return res.status(400).send("Senha invalida!")
            }
        }else{
            return res.status(400).send("Usuario não existente")
        }
    }
}