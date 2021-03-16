const {response, request} = require('express');
const Usuario = require('../models/usuario');

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

    const body = req.body;

    //Crear nueva instancia del modelo usuario y grabarlo en la DB

    const usuario = new Usuario(body);

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