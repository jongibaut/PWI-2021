const express = require('express');
const router = express.Router();
const model = require('./../models/carrito');

const getCarrito = async (req, res) => {
    let precioFinal = 0;
    const carrito = await model.getAll(req.session.user);
    console.log(carrito);
    carrito.forEach( item => {
        precioFinal += item.precio;
    })
    res.render('carrito', {carrito, precioFinal});
}
const compra = async (req, res) => {
    const msgElim = await model.deleteCarrito(req.session.user);
    res.redirect('/productos')
}

router.get('/compra', compra);
router.get('/', getCarrito);

module.exports = router;