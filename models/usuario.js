const {Schema, model } = require('mongoose')

const UsuarioSchema = ({
    Correo:{
        type: String,
        unique:true,
        required:[true, 'El nombre de Usuario es requirido']
    },

    nombreUsuario:{
        type: String,
        unique:true,
        required:[true, 'El Precio producto es requirido']
    },

    Contrasena: {
        type:String,
        required:[true, 'El Iva producto es requirido']
    },
});

module.exports = model('Usuario', UsuarioSchema);