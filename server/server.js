require('dotenv/config')
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')

const server = express()
const port = process.env.PORT || 3333

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true
}).then(() => {
    console.log("Conectado com o banco");
}).catch(e => {
    console.log('Não foi possivel se conectar com o banco');
    process.exit()
})

server.use(cors())
server.use(express.json())
server.use(routes)

server.listen(port, () => {
    console.log(`Servidor iniciado na porta: ${port}`)

})