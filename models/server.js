
const express = require('express');
const cors = require('cors');
const { dbConection } = require('../database/config');

class Server{

    //Definir las propiedades
    constructor(){
        this.app = express();
        this.port= process.env.PORT;

        this.paths ={

            auth:       '/api/auth',
            buscar:     '/api/buscar',
            usuarios:   '/api/usuarios',
            productos:  '/api/productos',
            categorias: '/api/categorias'
        }


        //Conexion base de datos

        this.conectarDB();

        //Middlewares
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes();
    }

    //Conectar BD

    async conectarDB (){
        await dbConection();
    }

    //Definir Middlewares
    middlewares(){
        //CORS
        this.app.use(cors())

        //Lectura y parseo del body

        this.app.use(express.json());

        //Directorio Público 
        this.app.use(express.static('public'));
    }

    //Definir rutas
    routes(){

        //Cargar las rutas de un usuario 
        this.app.use(this.paths.auth, require('../routes/auth'));
        this.app.use(this.paths.buscar, require('../routes/buscar'));
        this.app.use(this.paths.usuarios, require('../routes/usuarios'));
        this.app.use(this.paths.productos, require('../routes/productos'));
        this.app.use(this.paths.categorias, require('../routes/categorias'));
        
    }

    //Definir metodo para empezar el server
    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor Corriendo en puerto' , this.port);
        });
    }

}


module.exports = Server;