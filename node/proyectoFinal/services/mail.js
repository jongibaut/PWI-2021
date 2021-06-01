const nodemailer = require('nodemailer');
// envio de mail tiene asociada una demora entonces es async await


const send = async() => {
    const transporter = nodemailer.createTransport({
        /*host: 'smtp.gmail.com',
        port: 587,
        secure: false 
        es lo mismo que le service gmail*/
        service : process.env.MAIL_SERVICE || 'gmail',
        auth : {
            user: process.env.MAIL_USER || 'mail',
            pass: process.env.MAIL_PASSWORD || 'password'
        }
    });
    const info = {
        to: 'jongibaut@gmail.com',
        subject: 'Gracias por registrarte :D',
        

    }
}