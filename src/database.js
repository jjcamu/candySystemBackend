//conexion a la base de datos

const mongoose = require ('mongoose') //importo el modulo mongoose, que me permite que el servidor interactue
//con la base de datos

var MongoClient = require('mongodb').MongoClient;



var uri = "mongodb://jjcamussi:A64wfQrByvjZ3rzz@ac-fdii898-shard-00-00.5otvwda.mongodb.net:27017,ac-fdii898-shard-00-01.5otvwda.mongodb.net:27017,ac-fdii898-shard-00-02.5otvwda.mongodb.net:27017/?ssl=true&replicaSet=atlas-qw3ysb-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

MongoClient.connect(process.env.URL, function(err, client){

    console.log('El servidor se ha conectado a la base de datos!')

})

/* MongoClient.connect(uri, function(err, client) {

    console.log('El servidor se ha conectado a la base de datos!')
  
    async function run() {
        try {

        const database = client.db("test");
        const ratings = database.collection("devices");
        const cursor = ratings.find();
        await cursor.forEach(doc => console.dir(doc));
        } finally {
        await client.close();
        }
    }
  run().catch(console.dir);  


}); */