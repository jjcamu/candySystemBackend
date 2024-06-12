//conexion a la base de datos

const mongoose = require ('mongoose') //importo el modulo mongoose, que me permite que el servidor interactue
//con la base de datos

//const ip = '192.168.2.3'

mongoose.connect('mongodb://' + process.env.IP + '/candySystemDB') //realizo la conexion

const connection = mongoose.connection; //almaceno la conexion realizada, para trabajar con ella.

connection.once('open', ()=>{    //una vez que la conexion este abierta...

    console.log('El servidor se ha conectado a la base de datos! ')
    
})