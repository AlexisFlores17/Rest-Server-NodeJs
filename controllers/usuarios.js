const {response, request} = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require("bcryptjs");


const usuariosGet = (req = request, res = response)=>{

    const { q , apikey , nombre = "no name"} = req.query;
    
    res.json({
        msg:"get API - controlador",
        q,
        apikey,
        nombre
    });
}

const usuariosPost = async(req = request, res = response)=>{

    const { nombre, correo , password , rol }= req.body;

    //Crear nueva instancia del modelo usuario y grabarlo en la DB

    const usuario = new Usuario({ nombre, correo, password , rol });

    //Verificar si el correo existe

    const existeEmail = await Usuario.findOne({correo});

    if ( existeEmail) {
        return res.status(400).json({
            msg:"El correo ya esta registrado"
        });
    }

    //Encriptar contraseña

    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password , salt);

    //Guardar en DB

    await usuario.save();

    res.status(201).json({
        usuario
    });
}

const usuariosPut = (req = request, res = response)=>{

    const {id} = req.params;

    res.json({
        msg:"put API - controlador",
        id
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