const { Router } = require('express');
const { check } = require('express-validator');
const { 
    usuariosGet,
    usuariosPut, 
    usuariosPost, 
    usuariosPatch, 
    usuariosDelete 
} = require('../controllers/usuarios');
const { ValidarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/', usuariosGet);

router.put('/:id', usuariosPut);

router.post('/',[
    check('nombre', 'El nombre es obligatorio ').not().isEmpty(),
    check('password', 'El password debe ser de más de 6 letras ').isLength({ min: 6}),
    check('correo', 'El correo no es valido ').isEmail(),
    check('rol', 'No es un rol permitido ').isIn([ 'ADMIN_ROLE', 'USER_ROLE' ]),
    ValidarCampos,
] ,usuariosPost);

router.patch('/', usuariosPatch);


router.delete('/', usuariosDelete);


module.exports= router;