const express = require('express');
const router = express.Router();
const {single, update} = require('./../models/usuarios');

const getUser = async(req, res) => {
    const [usuario] = await single(req.session.user);
    res.render('usuario', {usuario});
}
const edit = (req, res) => {
    res.end();
}

router.get('/', getUser);
router.get('/edit', edit);
module.exports = router;