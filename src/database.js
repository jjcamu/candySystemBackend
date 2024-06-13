//conexion a la base de datos

const mongoose = require ('mongoose') //importo el modulo mongoose, que me permite que el servidor interactue
//con la base de datos

var MongoClient = require('mongodb').MongoClient;



 MongoClient.connect(process.env.URL, function(err, client) {

    //console.log('El servidor se ha conectado a la base de datos!')
  
    console.log(process.env.URL)
    async function run() {
        try {

        const database = client.db("test");
        const ratings = database.collection("devices");
        const cursor = ratings.find();
        await cursor.forEach(doc => console.dir(doc));

        console.log(process.env.URL)
        console.log(client)
        } finally {
        //await client.close();
        }
    }
  run().catch(console.dir);  


}); 