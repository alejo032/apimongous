const {Router} = require('express')

const route = Router()

//Listar todos los datos
const {getProveedor, postProveedor, putProveedor,deleteProveedor} = require('../controllers/proveedor') //Importando el controlador

route.get('/', getProveedor)

route.post('/', postProveedor)

route.put('/', putProveedor)

route.delete('/', deleteProveedor)


module.exports = route