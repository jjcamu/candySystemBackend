//MODULO PRINCIPAL (node debe ejecutar este archivo)

//importo el servidor (archivo app.js)
const app = require ('./app')

//importo la conexion a la base de datos (archivo database.js)
require ('./database')

async function main () //funcion principal 
{
        await app.listen (app.get('port'))//indico al servidor el puerto que debe ser escuchado

        console.log ('El servidor a la escucha del puerto', app.get('port'))
}
    
    
    main();