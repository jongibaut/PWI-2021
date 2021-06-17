const {create , createImages} = require('./../models/empleados');
const {imgFile} = require('./../utils/fileHandler');

const createEmpleado = async(body, file) => {
    try {
        const {insertId : id_empleado} = await create(body); // un create devuelve un insertId con el id del ingresado
        const uid = imgFile(file);
        const obj = {id_empleado, uid};
        const {insertId : idImg} = await createImages(obj);
        return idImg;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {createEmpleado}