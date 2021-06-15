const express = require('express');
const router = express.Router();

const showIndex = (req, res) => res.render('adminIndex');

router.get('/', showIndex);
module.exports = router;