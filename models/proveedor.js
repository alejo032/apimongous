const {Schema, model } = require('mongoose')

const ProveedorSchema = ({
    nombreProveedor:{
        type: String,
        unique:true,
        required:[true, 'El nombre de usuario es requirido']
    },

    Nombrecontactoproveedor:{
        type: String,
        required:[true, 'El Precio producto es requirido']
    },

    Telefono: {
        type:Number,
        required:[true, 'El Iva producto es requirido']
    },

    Direccion: {
        type:Number,
        required:[true, 'las existencias producto son requiridas']
    },
    Nit: {
        type:Number,
        required:[true, 'las existencias producto son requiridas']
    }
})


module.exports = model('Proveedor', ProveedorSchema)
