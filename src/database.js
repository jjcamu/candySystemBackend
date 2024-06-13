//conexion a la base de datos

const mongoose = require ('mongoose') //importo el modulo mongoose, que me permite que el servidor interactue
//con la base de datos

const { MongoClient } = require("mongodb");


const client = new MongoClient(process.env.URI);
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