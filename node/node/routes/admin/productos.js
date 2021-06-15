const express = require('express');
const router = express.Router();
const model = require('./../../models/productos');
const modelCategorias = require('./../../models/categorias');

const get = async(req,res) => {
    const productos = await model.getAll();
    res.render('adminProductos' , {productos});
}
const showCreate = async (req, res) => {
    const categorias = await modelCategorias.get();
    console.log(categorias);
    res.render('createProducto', {categorias});
}
const create = async (req, res) => {
    const producto = req.body;
    console.log(producto);
    const {insertId} = await model.create(producto);
    console.log(insertId);
    res.redirect('/admin/productos');
}
const update = async (req, res) => {
    const {id} = req.params;
    const producto = req.body;
    console.log(producto);
    const {insertId} = await model.update(id, producto);
    console.log(insertId);
    res.redirect('/admin/productos');
}
const showUpdate = async (req, res) => {
    const {id} = req.params;
    const [producto] = await model.getSingle(id);
    const categorias = await modelCategorias.get();
    res.render('updateProducto', {producto, categorias});
}
const del = async (req, res) => {
    const {id} = req.params;
    const {insertId} = await model.del(id);
    console.log(insertId);
    res.redirect('/admin/productos');
}
router.get('/', get);
router.get('/create', showCreate);
router.post('/create', create);
router.get('/update/:id', showUpdate);
router.post('/update/:id', update);
router.get('/delete/:id', del);
module.exports = router;