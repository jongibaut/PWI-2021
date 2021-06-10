const pool = require('./../utils/bd');

const getAll = async() => {
    const query = "SELECT p.id, p.nombre, p.descripcion, p.precio, p.stock, c.nombre AS nombreCategoria FROM ?? AS p JOIN ?? AS c ON p.id_categoria = c.id WHERE p.eliminado = 0";
    // ?? == nombre de tabla ? == cualquier otra variable
    const params = [process.env.T_PRODUCTOS, process.env.T_CATEGORIAS];
    // T_PRODUCTOS = "productos", T_CATEGORIAS = "categorias", T_USUARIOS = "usuarios"
    const rows = await pool.query(query, params);
    return rows;
}
const getSingle = async(id) => {
    const query = "SELECT p.id, p.nombre, p.descripcion, p.precio, p.stock, c.nombre AS nombreCategoria FROM ?? AS p JOIN ?? AS c ON p.id_categoria = c.id WHERE p.id = ? AND p.eliminado = 0";
    const params = [process.env.T_PRODUCTOS, process.env.T_CATEGORIAS, id];
    const rows = await pool.query(query, params);
    return rows;
}
const create = async(obj) => {
    const query = "INSERT INTO ?? SET ?";
    const params = [process.env.T_PRODUCTOS, obj];
    return await pool.query(query, params);
}
const update = async(id, obj) => {
    const query = "UPDATE ?? SET ? WHERE id = ?";
    const params = [process.env.T_PRODUCTOS, obj, id];
    return await pool.query(query, params);
}
const del = async(id) => {
    const query = "UPDATE ?? SET eliminado = 1 WHERE id = ?";
    const params = [process.env.T_PRODUCTOS, id];
    return await pool.query(query, params);
}




module.exports = {getAll, getSingle, create, update, del}