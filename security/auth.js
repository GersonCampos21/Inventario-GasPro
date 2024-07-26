var auth = async function (req, res, next) {
    const Email = req.session.Email && req.session.name
    const Usuario = req.session && req.session.Usuario && req.session.name
    const cookie = req.cookies.Correo
    if (Email || cookie || Usuario) {
        return next();
    } else {
        res.send(401)
    }
};

module.exports = auth