let express = require('express');
let mysql = require('mysql');
let cors = require('cors');

let app = express();
app.use(express.json());
app.use(cors());

//CONEXION A MYSQL - cadena de conexion
let conexion = mysql.createConnection({
    host: 'localhost', 
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
    res.send("Ruta de inicio");
});

//SELECCIONAMOS TODOS LOS CLIENTES
app.get('/api/clientes', (req,res)=>{
    conexion.query('SELECT * FROM clientes', (error,filas)=>{
        if(error){
            throw error;
        }else{
            res.send(filas);
        }
    });
});

//SELECCIONAMOS UN CLIENTE EN ESPECIFICO
app.get('/api/clientes/:id',(req,res)=>{
    conexion.query('SELECT * FROM clientes WHERE id=?',[req.params.id],(error,fila)=>{
        if(error){
            throw error;
        }else{
            res.send(fila);
        }
    });
});

app.delete('/api/clientes/:id',(req,res)=>{
    let id = req.params.id;
    conexion.query('DELETE FROM clientes WHERE id=?',[id],(error,filas)=>{
        if(error){
            throw error;
        }else{
            res.send(filas);
        }
    });
});

//INSERTAR UN NUEVO CLIENTE
app.post('/api/clientes',(req,res)=>{
    let data = {
        id: req.body.id,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        rfc: req.body.rfc,
        curp: req.body.curp,
        cp: req.body.cp
    }
    let sql = "INSERT INTO clientes SET ?";
    conexion.query(sql,data,(error,resultado)=>{
        if(error){
            throw error;
        }else{
            res.send(resultado);
        }
    });
});

//ACTUALIZAR DATOS
app.put('/api/clientes/:id',(req,res)=>{
    let id = req.params.id;
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let direccion = req.body.direccion;
    let telefono = req.body.telefono;
    let rfc = req.body.rfc;
    let curp = req.body.curp;
    let cp = req.body.cp;
    let sql = "UPDATE clientes SET nombre=?, apellido=?, direccion=?, telefono=?, rfc=?, curp=?, cp=? WHERE id=?";
    conexion.query(sql,[nombre,apellido,direccion,telefono,rfc,curp,cp,id],(error,resultado)=>{
        if(error){
            throw error;
        }else{
            res.send(resultado);
        }
    });
});

//ENCENDER EL SERVIDOR
let puerto = 3000;
app.listen(puerto, function(){
    console.log("Servidor esscuchando puerto "+puerto);
});