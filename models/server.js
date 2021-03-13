
const express = require('express');

class Server{

    //Definir las propiedades
    constructor(){
        this.app = express();
        this.port= process.env.PORT;

        //Middlewares
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes();
    }

    //Definir Middlewares
    middlewares(){

        //Directorio Público 
        this.app.use(express.static('public'));
    }

    //Definir rutas
    routes(){
        this.app.get('/api',(req, res)=>{
            res.json({
                msg:"get API"
            });
        });

        this.app.put('/api',(req, res)=>{
            res.json({
                msg:"put API"
            });
        });

        this.app.post('/api',(req, res)=>{
            res.status(201).json({
                msg:"post API"
            });
        });

        this.app.delete('/api',(req, res)=>{
            res.json({
                msg:"delete API"
            });
        });
    }

    //Definir metodo para empezar el server
    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor Corriendo en puerto' , this.port);
        });
    }

}


module.exports = Server;