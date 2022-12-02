const {response} = require('express')
const { generarJWT } = require('../helpers/generarJWT')
const Usuario = require('../models/usuarios')

const login = async (req, res = response) => {
    const { correo, password } = req.body

    try {
        const usuarios = await Usuario.findOne({correo})
        //Verificar Correo
        if(!usuarios){
            return res.json({
                msg: 'El correo no existe'})
        }
        //Verificar Contraseña
        if(usuarios.password != password){
            return res.json ({
                msg: 'La contraseña es incorrecta'})
        }

        //Verificar Estado
        if (usuarios.estado == false) {
            return res.status(400).json({
                msg: 'El usuario se encuentra  inactivo, por lo que no puede acceder.'
            })
        }
        //Generar Token
        const token = await generarJWT(usuarios.id)
        return res.json({
            usuarios,
            token
        })

    }catch (error) {
        return res.json({
            msg: 'Error, Contactese con el Administrador'})
    }
}

module.exports= {
    login
}

