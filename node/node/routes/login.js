const express = require('express');
const router = express.Router();
const {auth} = require('./../models/usuarios')
const sha1 = require('sha1');

const showLogin = (req, res) => res.render('login', {message : ''});

const login = async (req, res) => {
    let {username, pass} = req.body;
    pass = sha1(pass);
    const logged = await auth(username, pass);
    //operadores ternarios
    logged.length == 0 //condicion
        ? res.redirect('/login') // si se cumple la condicion
        : null; // else
    res.redirect('/admin');
}

router.get('/', showLogin);
router.post('/logged', login);
module.exports = router;