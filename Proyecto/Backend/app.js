let express = require('express');
let mysql = require('mysql');
let cors = require('cors');

let app = express();
app.use(express.json);
app.use(cors());

//CONEXION A MYSQL - cadena de conexion
let conexion = mysql.createConnection({
    host: '127.0.0.1', 
    user: 'root',
    password: '',
    database: 'pwdata',
    port: '3306'
});

//NOS CONECTAMOS A MySQL
conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('Conectado a la base de datos');
    }
});

//RUTAS DE ACCESO
app.get("/", function(req,res){
    res.send("Ruta de inicio")
})

//SELECCIONAMOS TODOS LOS CLIENTES
app.get('/api/clientes', (req,res)=>{
    conexion.query('SELLECT * FROM clientes', (error,filas)=>{
        if(error){
            throw error;
        }else{
            res.send(filas);
        }
    });
});

//ENCENDER EL SERVIDOR
let puerto = 3000;
app.listen(puerto, function(){
    console.log("Servidor esscuchando puerto "+ puerto)
})