const pool = require('./../utils/bd');
const T_PRODUCTOS = "productos";
const T_CATEGORIAS = "categorias";
const getAll = async() => {
    const query = "SELECT p.nombre, p.id, c.nombre AS nombreCategoria FROM ?? AS p JOIN ?? AS c ON p.id_categoria = c.id";
    const params = [T_PRODUCTOS, T_CATEGORIAS];
    return await pool.query(query, params);
}
const getSingle = async(id) => {
    const query = "SELECT p.nombre, p.id, c.nombre AS nombreCategoria FROM ?? AS p JOIN ?? AS c ON p.id_categoria = c.id WHERE p.id = ?"
    const params = [T_PRODUCTOS, T_CATEGORIAS, id];
    return await pool.query(query, params);
}
const crearProducto = async(obj) => {
    const query = "INSERT INTO ?? SET ?";
    const params = [T_PRODUCTOS, obj];
    return await pool.query(query, params);
}

module.exports = {getAll, getSingle, crearProducto};