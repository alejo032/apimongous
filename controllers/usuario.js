const {response} = require('express')

const Usuario = require('../models/usuario')

const getUsuario = async(req, res) => {

    const usuarios = await Usuario.find(); //Obtener todos los documentos de una colección
    res.json({
        msg: usuarios
    })
}

const postUsuario = async(req, res) => {
    const datos = req.body //Capturar datos de la url-postman
    let mensaje = 'Inserción exitosa'
    try {
        const usuario = new Usuario(datos) //Instanciar el objeto
        await usuario.save() //Guardar en la base de dato
        console.log(usuario)
    } catch (error) {
        mensaje = error
        console.log(error)
    }
    res.json({
        msg: mensaje
    })
}

const putUsuario = async(req, res) => {
    const { Correo, nombreUsuario, Contrasena} = req.body //Desesctructurar
    let mensaje = ''
    try {
        const usuario = await Usuario.findOneAndUpdate({Correo: Correo},
        {nombreUsuario:nombreUsuario, Contrasena:Contrasena})
        mensaje = 'Actualización exitosa'
    } catch (error) {
        mensaje = error
    }   
    res.json({
        msg:mensaje
    })
}

const deleteUsuario = async (req, res) => {
    const { id } = req.query;
    let mensaje = '';

    try {
        const usuario = await Usuario.findByIdAndDelete(id); // Encuentra y elimina el documento por su _id
        if (!usuario) {
            return res.status(404).json({ mensaje: 'No se encontró la exportación' });
        }
        mensaje = 'Eliminación exitosa';
    } catch (error) {
        mensaje = error.message;
        return res.status(500).json({ mensaje });
    }

    res.json({ msg: mensaje });
}


module.exports = {
    getUsuario,
    postUsuario,
    putUsuario,
    deleteUsuario
}

