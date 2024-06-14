//conexion a la base de datos

const mongoose = require ('mongoose') //importo el modulo mongoose, que me permite que el servidor interactue
//con la base de datos



//var url = 'mongodb://jjcamussi:A64wfQrByvjZ3rzz@ac-fdii898-shard-00-00.5otvwda.mongodb.net:27017,ac-fdii898-shard-00-01.5otvwda.mongodb.net:27017,ac-fdii898-shard-00-02.5otvwda.mongodb.net:27017/candySystemDB?ssl=true&replicaSet=atlas-qw3ysb-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0'
    


mongoose.connect(process.env.URL) //realizo la conexion

const connection = mongoose.connection; //almaceno la conexion realizada, para trabajar con ella.

connection.once('open', ()=>{    //una vez que la conexion este abierta...

    console.log('El servidor se ha conectado a la base de datos!')
    
})

