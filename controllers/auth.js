const { response } = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');
const { generarJWT } = require('../helpers/generar-jwt');

const login = async(req, res = response ) =>{

    const { correo, password} = req.body;

    try {

        //verificar si el email existe

        const usuario = await Usuario.findOne({ correo });

        if ( !usuario ) {

            return res.status(400).json({
                msg: 'Usuario y/o contraseña incorrecta'
            })
            
        }



        //verificar si el usuario esta activo

        if ( !usuario.estado ) {

            return res.status(400).json({
                msg: 'Usuario y/o contraseña incorrecta'
            })
            
        }

        //Verificar contraseña

        const validPassword = bcryptjs.compareSync(password, usuario.password);

        if ( !validPassword) {
            
            return res.status(400).json({
                msg: 'Usuario y/o contraseña incorrecta'
            })
        }

        //Verificar JWT

        const token= await generarJWT(usuario.id);
        
        res.json({
            msg:'Login ok',
            usuario,
            token
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }

}


module.exports ={
    login
}