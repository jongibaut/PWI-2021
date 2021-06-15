const pool = require('./../utils/bd');

 const get = async() => {
     const query = "SELECT * FROM ??"
     const params = [process.env.T_CATEGORIAS]
     return await pool.query(query, params);
 }

 module.exports = {get}