const {Schema, model } = require('mongoose')
const bcrypt = require('bcrypt');

const UsuarioSchema = new Schema({
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

UsuarioSchema.pre('save', async function(next) {
    const usuario = this;
    if (!usuario.isModified('Contrasena')) return next();
    
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(usuario.Contrasena, salt);
        usuario.Contrasena = hashedPassword;
        next();
    } catch (error) {
        return next(error);
    }
});

UsuarioSchema.pre('save', async function(next) {
    const usuario = this;
    if (!usuario.isModified('Contrasena')) return next();
    
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(usuario.Contrasena, salt);
        usuario.Contrasena = hashedPassword;
        next();
    } catch (error) {
        return next(error);
    }
});



module.exports = model('Usuario', UsuarioSchema);