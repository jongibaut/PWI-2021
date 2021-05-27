const express = require('express');
const router = express.Router();
// voy a hacer un get en la subruta / (localhost:3000/alumnos)
const profesor = {
    nombre: 'Jon'
}
const alumnos = [
    {
        id: 1,
        nombre: 'Jon',
        apellido: 'Gibaut'
    },
    {
        id: 2,
        nombre: 'Leo',
        apellido:'Messi'
    }
]
router.get('/', (req, res) => {
    res.render('alumnos', {alumnos, profesor})
})

module.exports = router;