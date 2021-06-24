const verifyUser = (req, res, next) => {
    if(req.session.user){
        next();
    }else{
        res.render('login', {message: 'necesitas loguearte para acceder'})
    }
}
const verifyAdmin = (req, res, next) => {
    if(req.session.admin == 1){
        next();
    }
    else{
        res.render('unathorized');
    }
}

module.exports = {verifyUser, verifyAdmin}