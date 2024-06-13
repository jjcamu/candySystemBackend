//conexion a la base de datos

const mongoose = require ('mongoose') //importo el modulo mongoose, que me permite que el servidor interactue
//con la base de datos

const { MongoClient } = require("mongodb");

//uri = 'mongodb://jjcamussi:A64wfQrByvjZ3rzz@ac-fdii898-shard-00-00.5otvwda.mongodb.net:27017,ac-fdii898-shard-00-01.5otvwda.mongodb.net:27017,ac-fdii898-shard-00-02.5otvwda.mongodb.net:27017/?ssl=true&replicaSet=atlas-qw3ysb-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0'
//const client = new MongoClient(uri);

const client = new MongoClient(process.env.URI);

console.log(client)
console.log(MongoClient)
console.log(process.env.URI)
console.log(typeof(process.env.URI))

async function run() {
  try {
    await client.connect();
    const database = client.db("test");
    const ratings = database.collection("devices");
    const cursor = ratings.find();
    await cursor.forEach(doc => console.dir(doc));
  } finally {
    await client.close();
  }
}
run().catch(console.dir);