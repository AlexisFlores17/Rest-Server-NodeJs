
const express = require('express');
const cors = require('cors');

class Server{

    //Definir las propiedades
    constructor(){
        this.app = express();
        this.port= process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewares
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes();
    }

    //Definir Middlewares
    middlewares(){
        //CORS
        this.app.use(cors())

        //Directorio Público 
        this.app.use(express.static('public'));
    }

    //Definir rutas
    routes(){

        //Cargar las rutas de un usuario 

        this.app.use(this.usuariosPath, require('../routes/usuarios'));
        
    }

    //Definir metodo para empezar el server
    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor Corriendo en puerto' , this.port);
        });
    }

}


module.exports = Server;