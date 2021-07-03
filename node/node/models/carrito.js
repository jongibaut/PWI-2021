const pool = require('./../utils/bd');

const getAll = async(id_user) => {
    const query = "SELECT c.id_producto, c.id, p.nombre, p.descripcion, p.precio, p.stock FROM ?? AS c JOIN ?? AS p ON c.id_producto = p.id WHERE c.id_usuario = ? AND c.eliminado = 0";
    const params = [process.env.T_CARRITO, process.env.T_PRODUCTOS, id_user];
    return await pool.query(query, params);
}
const insertCarrito = async(obj) => {
    const query = "INSERT INTO ?? SET ?";
    const params = [process.env.T_CARRITO, obj];
    return await pool.query(query, params);
}
const deleteCarrito = async(id_usuario) => {
    const query = "UPDATE ?? SET eliminado = 1 WHERE id_usuario = ?";
    const params = [process.env.T_CARRITO, id_usuario];
    return await pool.query(query, params);
}

module.exports = {getAll, insertCarrito, deleteCarrito}