const {response, request} = require('express');


const usuariosGet = (req = request, res = response)=>{

    const { q , apikey , nombre = "no name"} = req.query;
    
    res.json({
        msg:"get API - controlador",
        q,
        apikey,
        nombre
    });
}

const usuariosPost = (req = request, res = response)=>{

    const {Nombre,Edad}= req.body;

    res.status(201).json({
        msg:"post API - controlador ",
        Nombre,
        Edad
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