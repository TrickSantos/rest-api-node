const Usuario = require('../model/usuario')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = {
    async index(req, res){
        try {
            const usuarios = await Usuario.find()
            
            return res.status(200).send(usuarios)
            
        } catch (error) {
            res.status(500).send(error)
        }
    },
    async store(req, res){
        try {
            const {usuario, senha, nome, admin} = req.body
    
            const usuarioExistente = await Usuario.findOne({usuario})
            
            if(usuarioExistente){                
                return res.status(201).send(usuarioExistente)
            }else{
                bcrypt.hash(senha, 10).then(
                    hash =>{
                        const user = new Usuario({
                            nome,
                            usuario,
                            senha:hash,
                            admin
                        })
                        user.save().then(()=>{
                            return res.status(200).send(user)
                        })
                    }
                )                
            }            
        } catch (error) {
            res.status(500).send(error)
        }
    },
    async editar(req, res){
        try {
            const usuario = await Usuario.findById(req.params.id)
    
            usuario.set(req.body)
    
            const usuarioAtualizado = await usuario.save()
    
            return res.status(200).send(usuarioAtualizado)
            
        } catch (error) {
            res.status(500).send(error)
        }
    },
    async show(req, res){
        try {
            const usuario = await Usuario.findById(req.params.id)
    
            return res.json(usuario)
        } catch (error) {
            res.status(500).send(error)
        }
    },
    async login(req, res){
        try {
            const {usuario, senha} = req.body
    
            const usuarioExistente = await Usuario.findOne({usuario})
    
            if(usuarioExistente){
                bcrypt.compare(senha, usuarioExistente.senha).then(
                    valid =>{
                        if(!valid){
                            return res.status(401).json({error: new Error('Senha incorreta!')})
                        }
                        const token = jwt.sign(
                            {userId: usuarioExistente._id},
                            process.env.JWT_KEY,
                            { expiresIn: "2d" }
                        )                 
                        return res.status(200).send({token})
                    }
                )
            }else{
                return res.status(404).send({ error: new Error('Usuario inexistente!') })
            }            
        } catch (error) {
            res.status(500).send(error)
        }

    }
}
