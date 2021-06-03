const express = require("express");
const router = express.Router();
const { getAll, getSingle, crearProducto } = require('./../models/productos');

const all = async(req, res) => {
    const productos = await getAll();
    res.render('productos', {productos});
}
const single = async(req, res) => {
    const {id} = req.params;
    const [producto] = await getSingle(id);
    res.render('producto', {producto});
}
const create = async(req, res) => {
    const {body: producto} = req;
    const messageId = await crearProducto(producto);
    console.log(messageId);
    res.redirect('/productos');
}
const getCreate = async(req, res) => {
    res.render('createProductos');
}
router.get('/', all);
router.get('/single/:id', single);
router.get('/create', getCreate)
router.post('/create', create)
module.exports = router;