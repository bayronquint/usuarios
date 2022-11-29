const {Schema, model} = require('mongoose')

const Usuarios = Schema({
    correo:{
        type: String
    },
    password:{
        type: String
    },
    estado:{
        type: Boolean
    }
})

module.exports = Usuarios