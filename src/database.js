//conexion a la base de datos

const mongoose = require ('mongoose') //importo el modulo mongoose, que me permite que el servidor interactue
//con la base de datos

const { MongoClient } = require("mongodb");

//var url = 'mongodb://jjcamussi:A64wfQrByvjZ3rzz@ac-fdii898-shard-00-00.5otvwda.mongodb.net:27017,ac-fdii898-shard-00-01.5otvwda.mongodb.net:27017,ac-fdii898-shard-00-02.5otvwda.mongodb.net:27017/?ssl=true&replicaSet=atlas-qw3ysb-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0'
//const client = new MongoClient(url);

const client = new MongoClient(process.env.URL);

console.log(process.env.URL)
console.log(typeof(rocess.env.URL))


async function run() {

    await client.connect()
    const database = client.db("test");
    const ratings = database.collection("devices");
    
    const cursor = ratings.find();
    await cursor.forEach(doc => console.dir(doc));

  console.log(database)


}
run()
