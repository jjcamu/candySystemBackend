//el controlador almacena la logica que procesará las peticiones recibidas del cliente, e interactuará con la BBDD a traves del modelo.

const loginCtrl = {} //creo un objeto, cuyas propiedades seran cada una de las operaciones a realizar en la BBDD

const modeloLogin = require ('../models/login.js')  //importo el modelo 

const mongoose = require ('mongoose')

//Consultar contraseña
loginCtrl.getPass = async (req, res) =>{ 

    const {pass} = req.body;  // guardo la contraseña ingresada por el usuario en 'pass'

    var respuesta = await modeloLogin.find({pass: pass } ) //busco en la BBDD la contraseña ingresada
    // la contraseña es '123456' que con el cifrado Md5 es 'e10adc3949ba59abbe56e057f20f883e'


    res.json(respuesta) //devuelvo respuesta al cliente



}



module.exports = loginCtrl ; 