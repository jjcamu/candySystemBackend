const {Router} = require('express') //importo la funcion Router del modulo 'express'
const router = Router() 

const  { getConsumos, createConsumo, updateConsumos } = require('../controllers/consumos.controller')

router.route('/') 

    .get(getConsumos) // get: peticion de consulta  
    .post(createConsumo) // post: crear documento
    .put(updateConsumos) // actualizacion de todos los documentos

router.route('/:id') //cuando se ingresa por la url (ruta) un parametro, en este caso el id de un documento

   // .delete(eliminaPedido) // peticion de borrar
    //.delete(cancelaPedido) // peticion de borrar pero con una logica adicional

    
module.exports = router;