const express = require('express');
const router = express.Router();
const {getAll, getSingle, getNombre} = require('./../models/productos');
const modelCarrito = require('./../models/carrito');
const {verifyUser} = require('./../middlewares/auth')

const get = async(req, res) => {
    const productos = await getAll();
    console.log(productos);
    res.render('productos', {productos});
}
const single = async(req, res) => {
    const {id} = req.params;
    const [producto] = await getSingle(id);
    res.render('producto', {producto});
}
const buscador = async(req, res) => {
    let {aBuscar} = req.body;
    aBuscar = '%' + aBuscar + '%';
    const productos = await getNombre(aBuscar);
    console.log(productos);
    res.render('productos', {productos});
}
const insertCarrito = async(req, res) => {
    const {id : id_producto} = req.params;
    const id_usuario = req.session.user;
    const obj = {
        id_producto,
        id_usuario
    }
    const {insertId} = await modelCarrito.insertCarrito(obj);
    console.log(insertId);
    res.redirect('/productos');
}

router.get('/', get);
router.get('/single/:id', single);
router.post('/', buscador);
router.get('/buy/:id', verifyUser, insertCarrito);
module.exports = router;