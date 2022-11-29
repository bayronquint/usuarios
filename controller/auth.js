const { error } = require('console')
const {response} = require('express')
const Usuario = require('../models/usuarios')

//const {generarJWT} = require('../helpers/generarJWT')

const login = async (req, res = response) => {
    const { correo, password } = req.body

    try {
        const usuarios = await Usuario.findOne({correo})
        //Verificar Correo
        if(!usuarios){
            return res.json({
                msg: 'El correo no se encontró'})
        }
        //Verificar Contraseña
        if(usuarios.password != password){
            return res.json ({
                msg: 'El password no corresponde al correo buscado'})
        }
        //Verificar Estado
        if(usuarios.estado == false){
            return res.json ({
                msg: 'El usuario esta deshabilitado para acceder'})
        }

        //Generar Token
    }catch (error) {
        console.log('Error, contacte al administrador'+error)
    }
}

module.exports={
    login
}

