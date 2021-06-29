const pool = require('./../utils/bd');

const create = (obj) => 
    pool.query("INSERT INTO ?? SET ?", [process.env.T_EMPLEADOS, obj]).then(response => response).catch(err => console.error(err));

const createImages = (obj) =>
    pool.query("INSERT INTO ?? SET ?", [process.env.T_EMPLEADOSIMG, obj]).then(response => response).catch(err => console.error(err));

const getAll = async() => {
    try {
        const query = "SELECT e.id, e.nombre, e.apellido, e.telefono, e.direccion, eI.uid AS uuid FROM ?? AS e JOIN ?? AS eI ON e.id = eI.id_empleado WHERE e.eliminado = 0";
        const params = [process.env.T_EMPLEADOS, process.env.T_EMPLEADOSIMG];
        return await pool.query(query, params);
    } catch (error) {
        console.error(error);
    }
}
const getSingle = async(id) => {
    try {
        const query = "SELECT e.id, e.nombre, e.apellido, e.telefono, e.direccion, eI.uid AS uuid FROM ?? AS e JOIN ?? AS eI ON e.id = eI.id_empleado WHERE e.eliminado = 0 AND e.id = ?";
        const params = [process.env.T_EMPLEADOS, process.env.T_EMPLEADOSIMG, id];
        return await pool.query(query, params);
    } catch (error) {
        console.error(error);
    }
}
const deleteEmp = async(id) => {
    try {
        const query = "UPDATE ?? SET eliminado = 1 WHERE id = ?";
        const params = [process.env.T_EMPLEADOS, id];
        return await pool.query(query, params);
    } catch (error) {
        console.error(error);
    }
}

const deleteImg = async(id) => {
    try {
        const query = "UPDATE ?? SET eliminado = 1 WHERE id_empleado = ?";
        const params = [process.env.T_EMPLEADOSIMG, id];
        return await pool.query(query, params);
    } catch (error) {
        console.error(error);
    }
}

const update = async(id, obj) => {
    try {
        const query = "UPDATE ?? SET ? WHERE id = ?";
        const params = [process.env.T_EMPLEADOS, obj, id];
        return await pool.query(query, params);
    } catch (error) {
        console.error(error);
    }
}

const updateImage = async(id, obj) => {
    try {
        const query = "UPDATE ?? SET ? WHERE id_empleado = ?";
        const params = [process.env.T_EMPLEADOSIMG, obj, id];
        return await pool.query(query, params);
    } catch (error) {
        console.error(error);
    }
}

module.exports = {create, createImages, getAll, deleteEmp, deleteImg, getSingle, update, updateImage}