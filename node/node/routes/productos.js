const express = require('express');
const router = express.Router();
const {getAll, getSingle} = require('./../models/productos');

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

router.get('/', get);
router.get('/single/:id', single);
module.exports = router;