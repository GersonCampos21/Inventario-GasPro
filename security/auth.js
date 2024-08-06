var auth = async function (req, res, next) {
    // const email = req.session.email && req.session.name
    // const user = req.session && req.session.user && req.session.name
    // const cookie = req.cookies.Correo
    const user = req.session && req.session.user 
    console.log(req.session.user )
    console.log(user)
    if (user) {
        return next();
    } else {
        res.render("401",{titulo:"Unauthorized",layout:"../layouts/layoutLogin"})
    }
};

module.exports = auth