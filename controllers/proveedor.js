const {response} = require('express')

const Proveedor = require('../models/proveedor')

const getProveedor = async(req, res) => {

    const proveedores = await Proveedor.find(); //Obtener todos los documentos de una colección
    res.json({
        msg: proveedores
    })
}

const postProveedor = async(req, res) => {
    const datos = req.body //Capturar datos de la url-postman
    let mensaje = 'Inserción exitosa'
    try {
        const proveedor = new Proveedor(datos) //Instanciar el objeto
        await proveedor.save() //Guardar en la base de dato
        console.log(proveedor)
    } catch (error) {
        mensaje = error
        console.log(error)
    }
    res.json({
        msg: mensaje
    })
}

const putProveedor = async(req, res) => {
    const { nombreProveedor, Nombrecontactoproveedor, Telefono, Direccion,Nit } = req.body //Desesctructurar
    let mensaje = ''
    try {
        const proveedor = await Proveedor.findOneAndUpdate({nombreProveedor: nombreProveedor},
        {Nombrecontactoproveedor:Nombrecontactoproveedor, Telefono:Telefono, Direccion:Direccion,Nit:Nit})
        mensaje = 'Actualización exitosa'
    } catch (error) {
        mensaje = error
    }   
    res.json({
        msg:mensaje
    })
}

const deleteProveedor = async (req, res) => {
    const { id } = req.query;
    let mensaje = '';

    try {
        const proveedor = await Proveedor.findByIdAndDelete(id); // Encuentra y elimina el documento por su _id
        if (!proveedor) {
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
    getProveedor,
    postProveedor,
    putProveedor,
    deleteProveedor
}

