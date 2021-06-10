const express = require('express');
const router = express.Router();
const {getAll, getSingle, create} = require('./../models/usuarios');

const getTodos = async(req, res) => {
    const usuarios = await getAll();
    console.log(usuarios);
    res.render('usuarios', {usuarios});
}
const single = async(req, res) => {
    const id = req.params.id;
    const [usuario] = await getSingle(id);
    console.log(usuario, id);
    res.render('usuario', {usuario})
}
const showRegistro = (req, res) => {
    res.render('createUsuario');
}
const registro = async(req, res) => {
    const newUsuario = req.body;
    const {insertId} = await create(newUsuario);
    console.log(insertId);
    res.redirect('/usuarios');
}

router.get('/', getTodos);
router.get('/single/:id', single);
router.get('/registro', showRegistro);
router.post('/registro', registro);
module.exports = router;