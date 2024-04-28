//el controlador almacena la logica que procesará las peticiones recibidas del cliente, e interactuará con la BBDD a traves del modelo.

const pedidosCtrl = {} //creo un objeto, cuyas propiedades seran cada una de las operaciones a realizar en la BBDD

const modeloPedidos = require ('../models/pedidos.js')  //importo el modelo 

const mongoose = require ('mongoose')

//Mostrar pedidos
pedidosCtrl.getPedidos = async (req, res) =>{ 

    //const pedidos = await modeloPedidos.find() 

    const pedidos = await modeloPedidos.find({}, null, {sort: {dia: -1}} )//le pedimos a modeloPedidos, que nos devuelva todos los 
    //documentos de la coleccion 'pedidos', los ordene por fecha de manera descendente, y lo almacene en la constante pedidos.
    // Los documentos se guardaran en un formato de array de objetos.


    res.json(pedidos) //devuelvo como respuesta al cliente, los documentos en formato json.

}


//Crear pedido

pedidosCtrl.createPedido = async (req, res) => { // proceso las peticiones 'post' 

const {dia, cantidad, producto} = req.body; 

const nuevoPedido = new modeloPedidos ({ //creo un nuevo modelo segun el esquema (schema) que establece 'modeloPedidos'.

    dia: dia,
    cantidad: cantidad,
    producto: producto

})


await nuevoPedido.save(); //como nuevoPedido es un modelo de mongoose, utilizo su funcion 'save' para almacenar este nuevo pedido en
// la base de datos. Al tratarse de la instruccion asincrona de esta "async function", antepondremos el operador 'await' 


res.json ({message: 'Se ha creado el usuario!'}) //devuelvo una respuesta al cliente por consola (en formato json)

}

//Elimina pedido segun su fecha


pedidosCtrl.eliminaPedido =  async (req,res) => {

    var fecha = req.params.parametro;  //datos que recibo desde el front a traves del parametro ingresado por url

    await modeloPedidos.remove({ dia: fecha }) //buscar todos los documentos cuyo dia sea 'fecha'
    // y borrarlos.

}





module.exports = pedidosCtrl ; 