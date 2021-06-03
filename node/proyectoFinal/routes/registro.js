const express = require('express');
const router = express.Router();
const { send } = require('./../services/mail');

const register = (req, res) => {    
    res.render('registro');
}
const create = (req, res) => {
    // destructuring esto es lo mismo que decir const usuario = req.body;
    const {body : usuario} = req;
    console.log(usuario);
    send({mail : usuario.mail, 
        cuerpo:
         `<h1> Gracias por registrarte a mi pagina</h1>
         <a href="">Link magico para ${usuario.nombre}, ${usuario.apellido}</a>`});
    res.redirect('/');
}

router.get('/', register);
router.post('/create',create);
module.exports = router;