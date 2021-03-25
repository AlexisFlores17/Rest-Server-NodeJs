const {response, request} = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require("bcryptjs");


const usuariosGet = async(req = request, res = response)=>{

    const { limite = 5, desde=0} = req.query;

    const usuarios = await Usuario.find()
        .skip(Number(desde))
        .limit(Number(limite))
    
    res.json({
        usuarios
    });
}

const usuariosPost = async(req = request, res = response)=>{

    const { nombre, correo , password , rol }= req.body;

    //Crear nueva instancia del modelo usuario y grabarlo en la DB

    const usuario = new Usuario({ nombre, correo, password , rol });



    //Encriptar contraseña

    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password , salt);

    //Guardar en DB

    await usuario.save();

    res.status(201).json({
        usuario
    });
}

const usuariosPut = async(req = request, res = response)=>{

    const {id} = req.params;

    const { _id, password, google, correo, ...resto } = req.body;

    if ( password ) {
        //Encriptar contraseña

        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password , salt);
    }

    const usuario = await Usuario.findByIdAndUpdate( id, resto);

    res.json({
        usuario
    });
}

const usuariosPatch = (req = request, res = response)=>{
    res.json({
        msg:"Patch API - controlador"
    });
}

const usuariosDelete = (req = request, res = response)=>{
    res.json({
        msg:"Delete API - controlador"
    });
}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch,
    usuariosDelete
}