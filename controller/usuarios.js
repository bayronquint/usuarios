const { response } = require('express')
const usuarios = require('../models/usuarios')
const { find } = require('../models/usuarios')
const usuario = require('../models/usuarios')
const user = require('../models/usuarios')

const getUsuarios = async (req, res = response) => {
    const usuario = await usuarios.find()
    res.json({
        msg: 'GET API anchetas',
        usuario
    })
}

const postUsuarios = async (req, res) => {
    //Desestructuracion
    const { correo, password, estado} = req.body

    //recibir parametros y desestructurarlos 
    // instanciar el objeto con los parametros y recibirlos
    const usuario = new user({ correo, password, estado})


    await usuario.save()

    res.json({
        msg: 'POST API anchetas',
        usuario
    })
}

/* const deleteAnchetas = async(req,res)=>{


        const  { nombre } = req.query
        const ancheta = await anch.findOneAndDelete({nombre : nombre})

        res.json({
            msg: 'Delete api anchetas',
            ancheta
        })

}

const putAnchetas = async (req,res) => {

    const {nombre,nombrenew,Descripcion, Insumo, Precio, Disponible} = req.body
    const modificar = await anch.findOneAndUpdate({nombre : nombre}, {nombre: nombrenew, Descripcion:Descripcion , Insumo:Insumo , Precio : Precio, Peso : Peso , Disponible : Disponible})

    res.json({
        msg:'Put api Anchetas',
        modificar
    })

}


const patchAnchetas = async (req,res) =>{
    const{nombre, Precio} = req.body
    const patch = await anch.findOneAndUpdate({nombre : nombre},{Precio : Precio})

    res.json({
        msg:'PATCH API Anchetas',
        patch
    })
}
 */
module.exports = {
    getUsuarios,
    postUsuarios
/*     deleteAnchetas,
    putAnchetas,
    patchAnchetas */
}