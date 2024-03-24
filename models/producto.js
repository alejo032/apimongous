const {Schema, model } = require('mongoose')

const ProductoSchema = ({
    nombreProducto:{
        type: String,
        unique:true,
        required:[true, 'El nombre de producto es requirido']
    },

    precioProducto:{
        type: Number,
        required:[true, 'El Precio producto es requirido']
    },

    ivaProducto: {
        type:Number,
        required:[true, 'El Iva producto es requirido']
    },

    Existencias: {
        type:Number,
        required:[true, 'las existencias producto son requiridas']
    }
});

module.exports = model('Producto', ProductoSchema);