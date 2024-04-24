let express = require('express');
let mysql = require('mysql');
let cors = require('cors');

let app = express();
app.use(express.json);
app.use(cors());

//RUTAS DE ACCESO
app.get("/", function(req,res){
    res.send("Ruta de inicio")
})

//ENCENDER EL SERVIDOR
let puerto = 3000;
app.listen(puerto, function(){
    console.log("Servidor esscuchando puerto "+ puerto)
})