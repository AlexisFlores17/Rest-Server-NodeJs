const {response} = require('express');


const usuariosGet = (req, res)=>{
    
    res.json({
        msg:"get API - controlador"
    });
}

const usuariosPost = (req, res)=>{
    res.status(201).json({
        msg:"post API - controlador "
    });
}

const usuariosPut = (req, res)=>{
    res.json({
        msg:"put API - controlador"
    });
}

const usuariosPatch = (req, res)=>{
    res.json({
        msg:"Patch API - controlador"
    });
}

const usuariosDelete = (req, res)=>{
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