const {schemas}  = require("./schemas/usuarios");

const validateLogin = (req, res, next) => {
    const {error, value} = schemas.login.validate(req.body);
    error ? res.render('login', {message : error.details[0].message}) : next();
}
const validateRegistro = (req, res, next) => {
    const {error, value} = schemas.registro.validate(req.body);
    error ? res.render('registro', {message : error.details[0].message}) : next();
}

module.exports = {validateLogin, validateRegistro}