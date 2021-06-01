const express = require('express');
const router = express.Router();

const register = (req, res) => {    
    res.render('registro');
}
const create = (req, res) => {
    console.log(req);
    res.redirect('/');
}

router.get('/', register);
router.post('/create', create)
module.exports = router;