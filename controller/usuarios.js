const { response } = require('express')
const { find } = require('../models/usuarios')
const usuarios = require('../models/usuarios')
const us = require('../models/usuarios')


const getUsuarios = async (req, res = response) => {
    const usuario = await usuarios.find()
    res.json({
        msg: 'GET API usuario',
        usuario
    })
}

const postUsuarios = async (req, res) => {
    //Desestructuracion
    const { correo, password, estado } = req.body

    //recibir parametros y desestructurarlos 
    // instanciar el objeto con los parametros y recibirlos
    const usuario = new us({ correo, password, estado })


    await usuario.save()

    res.json({
        msg: 'POST API usuario',
        usuario
    })
}

module.exports = {
    getUsuarios,
    postUsuarios
}