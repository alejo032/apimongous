const express = require('express')
const cors  = require('cors');//Implementar seguridad
const bodyParser = require('body-parser')//Paquete para convertir el objeto enviado desde el formulario
const { dbConection } = require('../database/config')

class Server{
    
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.productoPath = '/producto' //Ruta de la API
        this.proveedorPath = '/proveedor'
        this.usuarioPath = '/usuario'//Ruta de la API
        this.middlewares()
        this.routes()
        this.conectarDB()
    }

    listen(){
        this.app.listen(
         this.port, () => {
            console.log('Escuchando por el puerto'+this.port)
         }
        )
    }



    routes(){
        this.app.use(this.proveedorPath, require('../routes/proveedores'))
        this.app.use(this.productoPath, require('../routes/productos'))
        this.app.use(this.usuarioPath, require('../routes/usuarios'))
    }

    middlewares(){//
        this.app.use( cors() ); //Indicar el uso de cors
        this.app.use( bodyParser.json()) //Parsear objetos a insertar en la db
    }

    async conectarDB(){
        await dbConection()
    }
}

module.exports = {Server} //Exportación de la clase

