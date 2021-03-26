const { Router } = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/auth');
const { ValidarCampos } = require('../middlewares/validar-campos');

const router = Router();



router.post('/login',[
    check('correo','el correo es obligatorio').isEmail(),
    check('password','La contraseña es obligatoria').not().isEmpty(),
    ValidarCampos,
],login);



module.exports= router;