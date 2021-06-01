var express = require('express');
var router = express.Router();

/* GET users listing. */
const usuarios = [
  {
    id: 1,
    nombre: 'Jon',
    apellido: 'Gibaut'
  },
  {
    id: 2,
    nombre: 'Leo',
    apellido: 'Messi'
  },
  {
    id: 3,
    nombre: 'Bob',
    apellido: 'Esponja'
  }
];

const listar = (req, res) => {
  res.render('users', {usuarios});
}
const single = (req, res) => {
  const {id} = req.params;
  console.log(id);
  const usuario = usuarios.find((user) => user.id == id);
  console.log(usuario);
  res.render('single', {usuario});
}
router.get('/',listar);
router.get('/single/:id', single)

module.exports = router;
