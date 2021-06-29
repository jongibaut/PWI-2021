const Joi = require('@hapi/joi'); //npm i @hapi/joi.js

const schemas = {
    login: Joi.object().keys({
        username: Joi.string().required().messages({
            "string.empty": "El nombre de usuario es obligatorio"
        }),
        pass: Joi.string().min(3).max(20).required().messages({
            "string.empty" : "La pass es obligatoria",
            "string.min" : "La pass tiene que tener como minimo 3 caracteres",
            "string.max" : "La pass puede tener como maximo 20 caracteres"
        })
    }),
    registro: Joi.object().keys({
        username: Joi.string().required(),
        pass: Joi.string().min(3).max(20).required(),
        mail: Joi.string().email().required(),
        telefono: Joi.number().required(),
    })
}

module.exports = {schemas};