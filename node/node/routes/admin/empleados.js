const express = require('express');
const router = express.Router();
const multer = require('multer');
const config = { dest: './public/tmp'};
const upload = multer(config);
const service  = require('./../../services/empleados');
const model = require('./../../models/empleados');

const create = async (req, res) => {
    console.log(req.body, req.file);
    const idImg = await service.createEmpleado(req.body, req.file);
    res.redirect('/admin/empleados');
}
const getAll = async (req, res) => {
    const empleados = await model.getAll();
    console.log(empleados);
    res.render('adminEmpleados', {empleados})
}
const del = async (req, res) => {
    const {id} = req.params;
    const msgEmpleados = await model.deleteEmp(id);
    const msgImagen = await model.deleteImg(id);
    res.redirect('/admin/empleados');
}
const getUpdate = async (req, res) => {
    const [empleado] = await model.getSingle(req.params.id);
    console.log(empleado);
    res.render('empleadosUpdate', {empleado})
}
const update = async (req, res) => {
    console.log(req.body, req.file);
    const idImg = await service.updateEmpleado(req.params.id, req.body, req.file);
    console.log(idImg);
    res.redirect('/admin/empleados');
}

router.get('/create', (req, res) => res.render('createEmpleados'))
router.post('/create', upload.single("imagen"), create);
router.get('/', getAll);
router.get('/delete/:id', del);
router.get('/update/:id', getUpdate);
router.post('/update/:id', upload.single("imagen"), update);
module.exports = router;