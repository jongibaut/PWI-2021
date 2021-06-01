const express = require('express');
const router = express.Router();

const register = (req, res) => {    
    res.render('registro');
}
const create = (req, res) => {
    // destructuring esto es lo mismo que decir const usuario = req.body;
    const {body : usuario} = req;
    console.log(usuario);
    res.redirect('/');
}

router.get('/', register);
router.post('/create',create);
module.exports = router;